import { useEffect, useMemo, useState, type FormEvent } from "react";
import { useLocation } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services-catalog";
import { isMonthly, MONTHLY_BUDGETS, NEEDS, ONE_TIME_BUDGETS, PROMPTS, TIMELINES } from "@/lib/contact-options";
import { trackEvent } from "@/lib/analytics";
import { getAttribution, lastViewedService } from "@/lib/contact-intent";
import { recordLead } from "@/lib/leads";

/**
 * Netlify Forms: every field name below must also appear in the static form copies in
 * index.html, which Netlify parses at deploy time (it can't see forms React renders).
 */

const field =
  "w-full border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/20";
const label = "mb-2 block text-sm font-medium text-foreground";

async function submitToNetlify(form: HTMLFormElement) {
  const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
}

export function ContactForm({
  formName,
  defaultService,
}: {
  formName: "contact" | "contact-page" | "service-inquiry";
  /** Pre-selects a service (used by the inline form on service pages) */
  defaultService?: string;
}) {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const [serviceSlug, setServiceSlug] = useState<string>(() => {
    const fromUrl = params.get("service") ?? defaultService;
    return fromUrl && services.some((s) => s.slug === fromUrl) ? fromUrl : "";
  });
  const [plan, setPlan] = useState(params.get("plan") ?? "");
  const [needs, setNeeds] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [attribution, setAttribution] = useState({ landing: "", referrer: "", utmSource: "", utmMedium: "", utmCampaign: "" });

  const sourcePage = params.get("from") ?? location.pathname;
  const service = services.find((s) => s.slug === serviceSlug);

  // Client-only intelligence: remembered service and how the visit started
  useEffect(() => {
    if (!serviceSlug) {
      const remembered = lastViewedService();
      if (remembered && services.some((s) => s.slug === remembered)) setServiceSlug(remembered);
    }
    const a = getAttribution();
    if (a) setAttribution({ landing: a.landingPage, referrer: a.referrer, utmSource: a.utmSource, utmMedium: a.utmMedium, utmCampaign: a.utmCampaign });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeService = (slug: string) => {
    setServiceSlug(slug);
    setNeeds([]);
    if (slug !== params.get("service")) setPlan("");
  };
  const toggleNeed = (n: string) => setNeeds((prev) => (prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      await submitToNetlify(form);
      void recordLead(Object.fromEntries(new FormData(form)) as Record<string, string>);
      // GA4 recommended lead event — mark "generate_lead" as a key event in GA4 to count conversions.
      trackEvent("generate_lead", {
        form_name: formName,
        service: service?.name ?? "Not sure yet",
        plan: plan || "not specified",
        needs: needs.join(", ") || "not specified",
        timeline: (form.elements.namedItem("timeline") as HTMLSelectElement | null)?.value || "not specified",
        budget: (form.elements.namedItem("budget") as HTMLSelectElement | null)?.value || "not specified",
        source_page: sourcePage,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start py-10" role="status">
        <CheckCircle2 className="mb-5 h-10 w-10 text-primary" />
        <h3 className="font-display text-2xl text-foreground">Thank you — we've got it.</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          {service ? `A member of our team will follow up about ${service.name.toLowerCase()} within 24 hours` : "A member of our team will follow up within 24 hours"}, usually sooner during business hours. Need us now? Call{" "}
          <a href="tel:281-901-7016" className="font-medium text-foreground underline">(281) 901-7016</a>.
        </p>
      </div>
    );
  }

  const budgets = isMonthly(service) ? MONTHLY_BUDGETS : ONE_TIME_BUDGETS;

  return (
    <form name={formName} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>
      {/* Lead context, sent with every submission */}
      <input type="hidden" name="plan" value={plan} />
      <input type="hidden" name="needs" value={needs.join(", ")} />
      <input type="hidden" name="source_page" value={sourcePage} />
      <input type="hidden" name="landing_page" value={attribution.landing} />
      <input type="hidden" name="referrer" value={attribution.referrer} />
      <input type="hidden" name="utm_source" value={attribution.utmSource} />
      <input type="hidden" name="utm_medium" value={attribution.utmMedium} />
      <input type="hidden" name="utm_campaign" value={attribution.utmCampaign} />

      {service && (
        <div className="flex items-start justify-between gap-4 border-l-2 border-primary bg-secondary px-4 py-3 text-sm">
          <p className="text-foreground">
            You're asking about <strong>{service.name}</strong>
            {plan && <> · <strong>{plan}</strong></>}
          </p>
          {plan && (
            <button type="button" onClick={() => setPlan("")} className="inline-flex shrink-0 items-center gap-1 text-muted-foreground hover:text-foreground" aria-label="Remove selected plan">
              <X className="h-3.5 w-3.5" /> Clear plan
            </button>
          )}
        </div>
      )}

      <div>
        <label htmlFor={`${formName}-service`} className={label}>What can we help with?</label>
        <select id={`${formName}-service`} name="service" value={serviceSlug} onChange={(e) => changeService(e.target.value)} className={field}>
          <option value="">Not sure yet — help me decide</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
      </div>

      {serviceSlug && NEEDS[serviceSlug] && (
        <fieldset>
          <legend className={label}>What do you need? <span className="font-normal text-muted-foreground">(choose any)</span></legend>
          <div className="flex flex-wrap gap-2">
            {NEEDS[serviceSlug].map((n) => {
              const on = needs.includes(n);
              return (
                <button
                  key={n}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleNeed(n)}
                  className={cn(
                    "inline-flex items-center gap-2 border px-3 py-2 text-sm transition-colors",
                    on ? "border-foreground bg-foreground text-background" : "border-input text-text-secondary hover:border-foreground",
                  )}
                >
                  {on && <Check className="h-3.5 w-3.5" />}
                  {n}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-name`} className={label}>Your name *</label>
          <input id={`${formName}-name`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${formName}-email`} className={label}>Email *</label>
          <input id={`${formName}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={`${formName}-phone`} className={label}>Phone <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input id={`${formName}-phone`} name="phone" type="tel" autoComplete="tel" className={field} />
        </div>
        <div>
          <label htmlFor={`${formName}-company`} className={label}>Company or website <span className="font-normal text-muted-foreground">(optional)</span></label>
          <input id={`${formName}-company`} name="company" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={`${formName}-timeline`} className={label}>Timeline</label>
          <select id={`${formName}-timeline`} name="timeline" defaultValue="" className={field}>
            <option value="">Select one</option>
            {TIMELINES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor={`${formName}-budget`} className={label}>Budget <span className="font-normal text-muted-foreground">(optional)</span></label>
          <select id={`${formName}-budget`} name="budget" defaultValue="" key={isMonthly(service) ? "monthly" : "one-time"} className={field}>
            <option value="">Select a range</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor={`${formName}-message`} className={label}>Tell us a little more <span className="font-normal text-muted-foreground">(optional)</span></label>
        <textarea
          id={`${formName}-message`}
          name="message"
          rows={4}
          placeholder={PROMPTS[serviceSlug] ?? "What are you working on, and what would a great outcome look like?"}
          className={cn(field, "resize-none")}
        />
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-foreground">
          Something went wrong sending your message. Please try again, or email{" "}
          <a href="mailto:Hunain@visitcardinal.com" className="underline">Hunain@visitcardinal.com</a> or call{" "}
          <a href="tel:281-901-7016" className="underline">(281) 901-7016</a>.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">We reply within 24 hours. No obligation.</p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center gap-2 bg-ink px-7 font-semibold text-ink-foreground transition-colors hover:bg-primary disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : <>Send message <ArrowRight className="h-4 w-4" /></>}
        </button>
      </div>
    </form>
  );
}
