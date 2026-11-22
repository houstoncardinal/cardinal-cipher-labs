// Every website enquiry is delivered to TWO places at once, so no lead is lost if one is down:
//   1. Netlify Forms (email notifications + a backup copy in the Netlify dashboard)
//   2. The admin leads pipeline (Supabase `leads` table → /admin/leads)
// The visitor sees success if either one accepted the lead.
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";
import { postNetlifyForm } from "@/lib/contact-options";
import { captureAttribution, getAttribution } from "@/lib/contact-intent";

type LeadFields = Record<string, string | undefined>;

const clean = (v?: string) => (v && v.trim() ? v.trim().slice(0, 5000) : null);

/** Saves the lead to the admin pipeline. Resolves true when the database stored it. */
export async function recordLead(fields: LeadFields): Promise<boolean> {
  // Spam (Netlify honeypot filled) and incomplete submissions are never stored
  if (fields["bot-field"] || !fields.name?.trim() || !fields.email?.trim()) return false;
  const lead: TablesInsert<"leads"> = {
    name: fields.name.trim().slice(0, 200),
    email: fields.email.trim().slice(0, 320),
    phone: clean(fields.phone),
    company: clean(fields.company),
    preferred_contact: clean(fields.preferred_contact),
    best_time: clean(fields.best_time),
    expedited: (fields.expedited ?? "").toLowerCase().startsWith("yes"),
    service: clean(fields.service),
    plan: clean(fields.plan),
    needs: clean(fields.needs),
    timeline: clean(fields.timeline),
    budget: clean(fields.budget),
    message: clean(fields.message),
    form_name: clean(fields["form-name"]),
    source_page: clean(fields.source_page),
    landing_page: clean(fields.landing_page),
    referrer: clean(fields.referrer),
    utm_source: clean(fields.utm_source),
    utm_medium: clean(fields.utm_medium),
    utm_campaign: clean(fields.utm_campaign),
  };
  try {
    const { error } = await supabase.from("leads").insert(lead);
    if (error) {
      console.error("Lead pipeline save failed:", error.message);
      return false;
    }
    return true;
  } catch (e) {
    console.error("Lead pipeline unavailable:", e);
    return false;
  }
}

/**
 * Submit a lead from any website form: Netlify Forms and the database in parallel.
 * Throws only when BOTH failed, so the form can ask the visitor to retry or call.
 */
export async function submitLead(input: Record<string, string>) {
  // Attribution is read at submit time: on the first page of a visit (e.g. an ad landing page) the
  // form mounts before the app records how the visit started, so values read on mount are empty.
  captureAttribution();
  const a = getAttribution();
  const fields: Record<string, string> = {
    ...input,
    landing_page: input.landing_page || a?.landingPage || "",
    referrer: input.referrer || a?.referrer || "",
    utm_source: input.utm_source || a?.utmSource || "",
    utm_medium: input.utm_medium || a?.utmMedium || "",
    utm_campaign: input.utm_campaign || a?.utmCampaign || "",
  };
  const [netlify, database] = await Promise.allSettled([postNetlifyForm(fields), recordLead(fields)]);
  const netlifyOk = netlify.status === "fulfilled";
  const databaseOk = database.status === "fulfilled" && database.value;
  if (!netlifyOk && !databaseOk) throw new Error("Lead could not be delivered");
  return { netlifyOk, databaseOk };
}
