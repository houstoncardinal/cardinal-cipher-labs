// Saves every website enquiry to the admin leads pipeline (Supabase `leads` table).
// Runs alongside Netlify Forms and never blocks or fails the visitor's submission.
import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

type LeadFields = Record<string, string | undefined>;

const clean = (v?: string) => (v && v.trim() ? v.trim().slice(0, 5000) : null);

export async function recordLead(fields: LeadFields) {
  // Skip spam (Netlify honeypot filled) and incomplete submissions
  if (fields["bot-field"] || !fields.name?.trim() || !fields.email?.trim()) return;
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
    if (error) console.warn("Lead pipeline save failed (Netlify Forms still received it):", error.message);
  } catch (e) {
    console.warn("Lead pipeline unavailable:", e);
  }
}
