import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, CheckCircle2, HelpCircle, Mail, MessageSquare, Phone, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/services-catalog";
import { trackEvent } from "@/lib/analytics";
import { getAttribution, lastViewedService } from "@/lib/contact-intent";
import { isMonthly, MONTHLY_BUDGETS, NEEDS, ONE_TIME_BUDGETS, postNetlifyForm, PROMPTS, TIMELINES } from "@/lib/contact-options";

/**
 * Guided three-step version of the "contact" Netlify form for the homepage:
 * 1 · what you need → 2 · the project → 3 · how to reach you (+ optional expedited request).
 * Field names match the static copy of the "contact" form in index.html.
 */

const FORM_NAME = "contact";
const EASE = [0.16, 1, 0.3, 1] as const;
const STEPS = ["Service", "Project", "Contact"] as const;

const METHODS = [
  { value: "Email", icon: Mail, reach: "email", check: "your inbox (and spam folder)" },
  { value: "Phone call", icon: Phone, reach: "phone", check: "your phone" },
  { value: "Text message", icon: MessageSquare, reach: "text", check: "your text messages" },
] as const;
type Method = (typeof METHODS)[number]["value"];
const BEST_TIMES = ["Morning", "Afternoon", "Evening", "Anytime"];

const input =
  "w-full border border-input bg-background px-3.5 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-foreground focus:outline-none focus:ring-2 focus:ring-ring/20";
const labelCls = "mb-1.5 block text-sm font-medium text-foreground";
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

function Chip({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 border px-3 py-2 text-sm transition-colors",
        on ? "border-foreground bg-foreground text-background" : "border-input text-foreground/80 hover:border-foreground",
      )}
    >
      {on && <Check className="h-3.5 w-3.5" />}
      {children}
    </button>
  );
}

export function GuidedContactForm() {
  const location = useLocation();
  const params = useMemo(() => new URLSearchParams(location.search), [location.search]);

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState(1);
  const [serviceSlug, setServiceSlug] = useState<string>(() => {
    const s = params.get("service");
    return s && services.some((x) => x.slug === s) ? s : "";
  });
  const [plan, setPlan] = useState(params.get("plan") ?? "");
  const [needs, setNeeds] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [method, setMethod] = useState<Method>("Email");
  const [bestTime, setBestTime] = useState("");
  const [expedited, setExpedited] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [attribution, setAttribution] = useState({ landing: "", referrer: "", utmSource: "", utmMedium: "", utmCampaign: "" });
  const honeypot = useRef<HTMLInputElement>(null);
  const top = useRef<HTMLDivElement>(null);

  const service = services.find((s) => s.slug === serviceSlug);
  const sourcePage = params.get("from") ?? location.pathname;
  const methodMeta = METHODS.find((m) => m.value === method)!;
  const needsPhone = method !== "Email";

  useEffect(() => {
    if (!serviceSlug) {
      const remembered = lastViewedService();
      if (remembered && services.some((s) => s.slug === remembered)) setServiceSlug(remembered);
    }
    const a = getAttribution();
    if (a) setAttribution({ landing: a.landingPage, referrer: a.referrer, utmSource: a.utmSource, utmMedium: a.utmMedium, utmCampaign: a.utmCampaign });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const go = (next: number) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
    // Keep the top of the form in view on small screens
    const el = top.current;
    if (el && el.getBoundingClientRect().top < 80) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const chooseService = (slug: string) => {
    if (slug !== serviceSlug) {
      setNeeds([]);
      setBudget("");
      if (slug !== params.get("service")) setPlan("");
    }
    setServiceSlug(slug);
    go(1);
  };
  const toggleNeed = (n: string) => setNeeds((p) => (p.includes(n) ? p.filter((x) => x !== n) : [...p, n]));

  const contactErrors = {
    name: !name.trim() ? "Please add your name" : "",
    email: !emailOk(email) ? "Please add a valid email" : "",
    phone: needsPhone && phone.replace(/\D/g, "").length < 10 ? `Add a phone number so we can ${method === "Phone call" ? "call" : "text"} you` : "",
  };
  const contactValid = !contactErrors.name && !contactErrors.email && !contactErrors.phone;

  const submit = async () => {
    setTouched(true);
    if (!contactValid) return;
    setStatus("submitting");
    try {
      await postNetlifyForm({
        "form-name": FORM_NAME,
        "bot-field": honeypot.current?.value ?? "",
        name,
        email,
        phone,
        company,
        service: serviceSlug,
        plan,
        needs: needs.join(", "),
        timeline,
        budget,
        message,
        preferred_contact: method,
        best_time: bestTime,
        expedited: expedited ? "YES — same business day requested" : "no",
        source_page: sourcePage,
        landing_page: attribution.landing,
        referrer: attribution.referrer,
        utm_source: attribution.utmSource,
        utm_medium: attribution.utmMedium,
        utm_campaign: attribution.utmCampaign,
      });
      trackEvent("generate_lead", {
        form_name: FORM_NAME,
        service: service?.name ?? "Not sure yet",
        plan: plan || "not specified",
        needs: needs.join(", ") || "not specified",
        timeline: timeline || "not specified",
        budget: budget || "not specified",
        preferred_contact: method,
        expedited: expedited ? "yes" : "no",
        source_page: sourcePage,
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    const first = name.trim().split(/\s+/)[0];
    return (
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: EASE }} role="status" className="py-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 text-primary">
          <CheckCircle2 className="h-6 w-6" strokeWidth={1.6} />
        </span>
        <h3 className="mt-5 font-display text-2xl text-foreground md:text-3xl">Thanks{first ? `, ${first}` : ""} — we're reviewing your details.</h3>
        {expedited ? (
          <p className="mt-3 border-l-2 border-primary bg-primary/5 px-4 py-3 text-[15px] leading-relaxed text-foreground">
            <strong>Expedited request received.</strong> We'll reach you by {methodMeta.reach} the same business day to discuss.
          </p>
        ) : null}
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          A member of our team will reach out by <strong className="text-foreground">{methodMeta.reach}</strong>
          {bestTime && bestTime !== "Anytime" ? <> in the <strong className="text-foreground">{bestTime.toLowerCase()}</strong></> : null}{" "}
          {expedited ? "today" : "within 24 hours"}. Please keep an eye on {methodMeta.check}
          {method === "Email" && email ? <> at <strong className="text-foreground">{email}</strong></> : null}
          {method !== "Email" && phone ? <> at <strong className="text-foreground">{phone}</strong></> : null}.
        </p>
        <dl className="mt-6 grid gap-x-6 gap-y-3 border-t border-border pt-5 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-muted-foreground">Service</dt>
            <dd className="font-medium text-foreground">{service?.name ?? "Help me decide"}{plan ? ` · ${plan}` : ""}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Timeline</dt>
            <dd className="font-medium text-foreground">{timeline || "Not specified"}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Can't wait?</dt>
            <dd>
              <a href="tel:281-901-7016" className="font-medium text-foreground underline underline-offset-4">(281) 901-7016</a>
            </dd>
          </div>
        </dl>
      </motion.div>
    );
  }

  const budgets = isMonthly(service) ? MONTHLY_BUDGETS : ONE_TIME_BUDGETS;
  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 32 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d * -32 }),
  };

  return (
    <div ref={top} className="scroll-mt-28">
      {/* Honeypot for Netlify spam filtering */}
      <p className="hidden" aria-hidden>
        <label>
          Don't fill this out: <input ref={honeypot} name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      {/* Progress */}
      <ol className="mb-6 grid grid-cols-3 gap-2" aria-label="Form progress">
        {STEPS.map((label, i) => {
          const done = i < step;
          const current = i === step;
          return (
            <li key={label}>
              <button
                type="button"
                disabled={i > step}
                onClick={() => go(i)}
                aria-current={current ? "step" : undefined}
                className="group w-full text-left disabled:cursor-default"
              >
                <span className="relative block h-0.5 overflow-hidden bg-border">
                  <motion.span
                    className="absolute inset-0 origin-left bg-foreground"
                    initial={false}
                    animate={{ scaleX: done || current ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  />
                </span>
                <span className={cn("mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em]", current ? "text-foreground" : done ? "text-foreground/70" : "text-muted-foreground")}>
                  {done ? <Check className="h-3.5 w-3.5 text-primary" /> : <span className="tabular-nums">0{i + 1}</span>}
                  {label}
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="relative min-h-[23rem]">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div key={step} custom={dir} variants={variants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.35, ease: EASE }}>
            {step === 0 && (
              <fieldset>
                <legend className="font-display text-xl text-foreground md:text-2xl">What can we help with?</legend>
                <p className="mt-1 text-sm text-muted-foreground">Pick one — you can add details next.</p>
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {services.map((s) => {
                    const on = s.slug === serviceSlug;
                    return (
                      <button
                        key={s.slug}
                        type="button"
                        aria-pressed={on}
                        onClick={() => chooseService(s.slug)}
                        className={cn(
                          "group flex items-center gap-2.5 border px-3 py-3 text-left text-sm font-medium transition-all",
                          on ? "border-foreground bg-foreground text-background" : "border-input text-foreground hover:-translate-y-0.5 hover:border-foreground hover:shadow-[0_10px_24px_-16px_rgba(15,23,42,0.4)]",
                        )}
                      >
                        <s.icon className={cn("h-4 w-4 shrink-0", on ? "text-brand-300 dark:text-brand-600" : "text-muted-foreground group-hover:text-primary")} strokeWidth={1.7} />
                        <span className="leading-tight">{s.name}</span>
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    aria-pressed={false}
                    onClick={() => chooseService("")}
                    className="group flex items-center gap-2.5 border border-dashed border-input px-3 py-3 text-left text-sm font-medium text-foreground transition-all hover:border-foreground"
                  >
                    <HelpCircle className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-primary" strokeWidth={1.7} />
                    <span className="leading-tight">Not sure — help me decide</span>
                  </button>
                </div>
              </fieldset>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <p className="font-display text-xl text-foreground md:text-2xl">{service ? `Tell us about your ${service.name.toLowerCase()} project` : "Tell us about your project"}</p>
                  {plan && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      Package: <strong className="text-foreground">{plan}</strong>{" "}
                      <button type="button" onClick={() => setPlan("")} className="ml-1 underline underline-offset-2 hover:text-foreground">
                        clear
                      </button>
                    </p>
                  )}
                </div>
                {serviceSlug && NEEDS[serviceSlug] && (
                  <fieldset>
                    <legend className={labelCls}>
                      What do you need? <span className="font-normal text-muted-foreground">(choose any)</span>
                    </legend>
                    <div className="flex flex-wrap gap-2">
                      {NEEDS[serviceSlug].map((n) => (
                        <Chip key={n} on={needs.includes(n)} onClick={() => toggleNeed(n)}>
                          {n}
                        </Chip>
                      ))}
                    </div>
                  </fieldset>
                )}
                <fieldset>
                  <legend className={labelCls}>Timeline</legend>
                  <div className="flex flex-wrap gap-2">
                    {TIMELINES.map((t) => (
                      <Chip key={t} on={timeline === t} onClick={() => setTimeline(timeline === t ? "" : t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className={labelCls}>
                    Budget <span className="font-normal text-muted-foreground">(optional)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <Chip key={b} on={budget === b} onClick={() => setBudget(budget === b ? "" : b)}>
                        {b}
                      </Chip>
                    ))}
                  </div>
                </fieldset>
                <div>
                  <label htmlFor="guided-message" className={labelCls}>
                    Anything else? <span className="font-normal text-muted-foreground">(optional)</span>
                  </label>
                  <textarea
                    id="guided-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={PROMPTS[serviceSlug] ?? "What are you working on, and what would a great outcome look like?"}
                    className={cn(input, "resize-none")}
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <p className="font-display text-xl text-foreground md:text-2xl">How should we reach you?</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="guided-name" className={labelCls}>Your name *</label>
                    <input id="guided-name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} aria-invalid={touched && !!contactErrors.name} className={input} />
                    {touched && contactErrors.name && <p className="mt-1 text-xs text-destructive">{contactErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="guided-email" className={labelCls}>Email *</label>
                    <input id="guided-email" type="email" autoComplete="email" inputMode="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-invalid={touched && !!contactErrors.email} className={input} />
                    {touched && contactErrors.email && <p className="mt-1 text-xs text-destructive">{contactErrors.email}</p>}
                  </div>
                </div>

                <fieldset>
                  <legend className={labelCls}>Preferred contact method</legend>
                  <div className="grid grid-cols-3 gap-2">
                    {METHODS.map((m) => {
                      const on = method === m.value;
                      return (
                        <button
                          key={m.value}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setMethod(m.value)}
                          className={cn(
                            "flex flex-col items-center gap-1.5 border px-2 py-3 text-xs font-semibold transition-colors sm:flex-row sm:justify-center sm:text-sm",
                            on ? "border-foreground bg-foreground text-background" : "border-input text-foreground hover:border-foreground",
                          )}
                        >
                          <m.icon className={cn("h-4 w-4", on ? "text-brand-300 dark:text-brand-600" : "text-muted-foreground")} strokeWidth={1.7} />
                          {m.value}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="guided-phone" className={labelCls}>
                      Phone {needsPhone ? "*" : <span className="font-normal text-muted-foreground">(optional)</span>}
                    </label>
                    <input id="guided-phone" type="tel" autoComplete="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} aria-invalid={touched && !!contactErrors.phone} className={input} />
                    {touched && contactErrors.phone && <p className="mt-1 text-xs text-destructive">{contactErrors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="guided-company" className={labelCls}>
                      Company or website <span className="font-normal text-muted-foreground">(optional)</span>
                    </label>
                    <input id="guided-company" autoComplete="organization" value={company} onChange={(e) => setCompany(e.target.value)} className={input} />
                  </div>
                </div>

                <fieldset>
                  <legend className={labelCls}>
                    Best time to reach you <span className="font-normal text-muted-foreground">(optional)</span>
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {BEST_TIMES.map((t) => (
                      <Chip key={t} on={bestTime === t} onClick={() => setBestTime(bestTime === t ? "" : t)}>
                        {t}
                      </Chip>
                    ))}
                  </div>
                </fieldset>

                <label
                  className={cn(
                    "flex cursor-pointer items-start gap-3 border px-4 py-3.5 transition-colors",
                    expedited ? "border-primary bg-primary/5" : "border-input hover:border-foreground/50",
                  )}
                >
                  <input type="checkbox" checked={expedited} onChange={(e) => setExpedited(e.target.checked)} className="peer sr-only" />
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-ring",
                      expedited ? "border-primary bg-primary text-primary-foreground" : "border-input",
                    )}
                  >
                    {expedited && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-sm">
                    <span className="flex items-center gap-1.5 font-semibold text-foreground">
                      <Zap className="h-4 w-4 text-primary" /> This is urgent — expedite my request
                    </span>
                    <span className="mt-0.5 block text-muted-foreground">We'll reach you the same business day to discuss.</span>
                  </span>
                </label>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 border-l-2 border-destructive bg-destructive/5 px-4 py-3 text-sm text-foreground">
          Something went wrong sending your details. Please try again, or call <a href="tel:281-901-7016" className="underline">(281) 901-7016</a>.
        </p>
      )}

      {/* Navigation */}
      <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
        {step > 0 ? (
          <button type="button" onClick={() => go(step - 1)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>
        ) : (
          <p className="text-sm text-muted-foreground">3 quick steps · about a minute</p>
        )}
        {step === 0 && (
          <button type="button" onClick={() => go(1)} className="inline-flex h-11 items-center gap-2 border border-foreground/80 px-5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
            {serviceSlug ? "Continue" : "Skip"} <ArrowRight className="h-4 w-4" />
          </button>
        )}
        {step === 1 && (
          <button type="button" onClick={() => go(2)} className="inline-flex h-11 items-center gap-2 bg-ink px-5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary">
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        )}
        {step === 2 && (
          <button
            type="button"
            onClick={submit}
            disabled={status === "submitting"}
            className={cn(
              "inline-flex h-11 items-center gap-2 px-6 text-sm font-semibold transition-colors disabled:opacity-60",
              expedited ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-ink text-ink-foreground hover:bg-primary",
            )}
          >
            {status === "submitting" ? "Sending…" : expedited ? "Send urgent request" : "Send request"} <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
