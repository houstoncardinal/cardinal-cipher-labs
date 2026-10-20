import { useState, type FormEvent } from "react";
import { ArrowRight, Check, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services-catalog";

/**
 * Netlify Forms: field names must match the static form copies in index.html,
 * which Netlify parses at deploy time (it can't see forms React renders).
 */
const budgets = [
  { value: "under-10k", label: "Under $10,000" },
  { value: "10k-50k", label: "$10,000 – $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
  { value: "not-sure", label: "Not sure yet" },
];

const fieldClass =
  "w-full border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/20";
const labelClass = "mb-2 block text-sm font-medium text-foreground";

async function submitToNetlify(form: HTMLFormElement) {
  const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString();
  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
  if (!res.ok) throw new Error(`Submission failed (${res.status})`);
}

export function ContactForm({ formName }: { formName: "contact" | "contact-page" }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (name: string) =>
    setSelected((prev) => (prev.includes(name) ? prev.filter((v) => v !== name) : [...prev, name]));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitToNetlify(e.currentTarget);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start py-10" role="status">
        <CheckCircle2 className="mb-5 h-10 w-10 text-primary" />
        <h3 className="font-display text-2xl text-foreground">Thank you — we've received your message.</h3>
        <p className="mt-3 max-w-md text-muted-foreground">
          A member of our team will reach out within 24 hours. Need us sooner? Call{" "}
          <a href="tel:281-901-7016" className="font-medium text-foreground underline">(281) 901-7016</a>.
        </p>
      </div>
    );
  }

  return (
    <form name={formName} method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="form-name" value={formName} />
      <p className="hidden">
        <label>Don't fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor={`${formName}-firstName`} className={labelClass}>First name *</label>
          <input id={`${formName}-firstName`} name="firstName" required autoComplete="given-name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${formName}-lastName`} className={labelClass}>Last name *</label>
          <input id={`${formName}-lastName`} name="lastName" required autoComplete="family-name" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${formName}-email`} className={labelClass}>Work email *</label>
          <input id={`${formName}-email`} name="email" type="email" required autoComplete="email" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${formName}-phone`} className={labelClass}>Phone *</label>
          <input id={`${formName}-phone`} name="phone" type="tel" required autoComplete="tel" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${formName}-company`} className={labelClass}>Company</label>
          <input id={`${formName}-company`} name="company" autoComplete="organization" className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${formName}-website`} className={labelClass}>Company website</label>
          <input id={`${formName}-website`} name="website" type="url" placeholder="https://" className={fieldClass} />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>What can we help with?</legend>
        <input type="hidden" name="services" value={selected.join(", ")} />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {services.map((s) => {
            const on = selected.includes(s.name);
            return (
              <button
                key={s.slug}
                type="button"
                aria-pressed={on}
                onClick={() => toggle(s.name)}
                className={cn(
                  "flex items-center gap-2 border px-3 py-2.5 text-left text-sm transition-colors",
                  on ? "border-foreground bg-foreground text-background" : "border-input text-text-secondary hover:border-foreground",
                )}
              >
                <span className={cn("flex h-4 w-4 shrink-0 items-center justify-center border", on ? "border-background" : "border-input")}>
                  {on && <Check className="h-3 w-3" />}
                </span>
                {s.name}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${formName}-budget`} className={labelClass}>Estimated budget</label>
        <select id={`${formName}-budget`} name="budget" defaultValue="" className={fieldClass}>
          <option value="" disabled>Select a range</option>
          {budgets.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor={`${formName}-message`} className={labelClass}>Tell us about your goals *</label>
        <textarea id={`${formName}-message`} name="message" rows={5} required className={cn(fieldClass, "resize-none")} />
      </div>

      {status === "error" && (
        <p role="alert" className="border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-foreground">
          Something went wrong sending your message. Please try again, or email{" "}
          <a href="mailto:hello@visitcardinal.com" className="underline">hello@visitcardinal.com</a> or call{" "}
          <a href="tel:281-901-7016" className="underline">(281) 901-7016</a>.
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">We respond within 24 hours. No obligation.</p>
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
