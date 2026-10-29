import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Check, CalendarClock, ChevronDown, Clock, FileSignature, Handshake,
  HeartHandshake, MessageSquare, Phone, Receipt, Repeat, Rocket, Sparkles,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Container, reveal, revealDelay } from "@/components/site/primitives";
import { RevealText, Spotlight } from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema, generateServiceSchemas } from "@/lib/schema-generators";
import { priceToNumber, serviceGroups, services, type ServiceDefinition, type ServiceTier } from "@/lib/services-catalog";
import { contactHref } from "@/lib/contact-intent";

const faqs = [
  { q: "How is pricing structured?", a: "Every service has three plans: Foundation, Growth, and Enterprise. Websites, apps, branding, and design are project-based. SEO, marketing, and care plans are monthly. You receive a written scope and price before any work begins." },
  { q: "Why do some plans say “Custom”?", a: "Some work — like AI automation, technical consulting, and social media programs — depends heavily on your systems, channels, and goals. Rather than publish a number that may not fit, we scope it with you on a free consultation and send a written quote." },
  { q: "How are larger programs priced?", a: "Enterprise engagements and multi-service programs are scoped individually based on goals, timeline, integrations, and compliance requirements. We'll provide a detailed proposal after a discovery conversation." },
  { q: "What are the payment terms?", a: "Projects are typically billed 50% at kickoff and 50% at launch. For projects over $5,000 we can structure milestone-based payments." },
  { q: "Are monthly services locked into a contract?", a: "No. SEO, marketing, and care plans are month-to-month — no long-term contracts." },
  { q: "Can we change plans later?", a: "Yes. You can move between plans, add services, or add a care plan at any time." },
  { q: "Do you offer nonprofit pricing?", a: "Yes, we offer special pricing for qualified nonprofits. Contact us to discuss your project and budget." },
];

const isMonthly = (s: ServiceDefinition) => s.tiers.some((t) => t.billing === "per month") || s.startingBilling === "per month";
const isCustom = (s: ServiceDefinition) => s.tiers.every((t) => priceToNumber(t.price) === undefined);

const MODELS = [
  {
    icon: Receipt,
    title: "Project-based",
    body: "A fixed price for a defined scope — paid at kickoff and launch, or by milestone on larger projects.",
    match: (s: ServiceDefinition) => !isMonthly(s) && !isCustom(s),
  },
  {
    icon: Repeat,
    title: "Monthly programs",
    body: "Ongoing work billed monthly. Month-to-month — no long-term contract.",
    match: (s: ServiceDefinition) => isMonthly(s) && !isCustom(s),
  },
  {
    icon: Handshake,
    title: "Custom engagements",
    body: "Scoped to your systems and goals on a free consultation, then quoted in writing.",
    match: (s: ServiceDefinition) => isCustom(s),
  },
];

const BILLING_STEPS = [
  { icon: MessageSquare, title: "Free consultation", body: "Share your goals and budget. No cost, no obligation." },
  { icon: FileSignature, title: "Written proposal", body: "Scope, price, and timeline in writing before work starts." },
  { icon: Rocket, title: "Kickoff", body: "Projects: 50% to begin. Monthly programs: first month." },
  { icon: CalendarClock, title: "Launch or renew", body: "Remaining 50% at launch. Monthly plans continue month-to-month." },
];

const PROMISES = [
  { icon: MessageSquare, title: "Free consultation", body: "Every engagement starts with a no-cost conversation." },
  { icon: FileSignature, title: "Written scope & price", body: "You approve the plan and price before any work begins." },
  { icon: Clock, title: "Reply within 24 hours", body: "Every inquiry gets a response from our team within a business day." },
  { icon: Repeat, title: "No long-term contracts", body: "SEO, marketing, and care plans are month-to-month." },
  { icon: Receipt, title: "Milestone payments", body: "Projects over $5,000 can be split into milestone payments." },
  { icon: HeartHandshake, title: "Nonprofit pricing", body: "Special pricing is available for qualified nonprofits." },
];

function billingLabel(t: ServiceTier) {
  if (t.billing === "per month") return "/ month";
  if (t.billing === "one-time") return "one-time";
  if (t.billing === "starting price") return "starting";
  return t.price === "Custom" ? "quote" : "custom quote";
}

function Price({ tier, size = "md" }: { tier: ServiceTier; size?: "sm" | "md" }) {
  return (
    <span className="inline-flex items-baseline gap-1.5 whitespace-nowrap">
      <span className={cn("font-display font-semibold tracking-tight text-gray-900", size === "sm" ? "text-lg" : "text-3xl")}>{tier.price}</span>
      <span className="text-xs text-gray-500">{billingLabel(tier)}</span>
    </span>
  );
}

/** One plan inside a service's detail section. Long feature lists collapse behind "Show all". */
function TierCard({ tier, service }: { tier: ServiceTier; service: ServiceDefinition }) {
  const [open, setOpen] = useState(false);
  const shown = open ? tier.features : tier.features.slice(0, 4);
  const hidden = tier.features.length - 4;
  return (
    <div className={cn("relative flex h-full flex-col rounded-2xl border bg-white p-6", tier.popular ? "border-red-600 shadow-[0_20px_50px_-28px_rgba(220,38,38,0.55)]" : "border-gray-200")}>
      {tier.popular && (
        <span className="absolute -top-3 left-6 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">Most popular</span>
      )}
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-red-600">{tier.level}</p>
      <h4 className="mt-1 text-lg font-bold text-gray-900">{tier.name}</h4>
      <div className="mt-3"><Price tier={tier} /></div>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{tier.bestFor}</p>
      {tier.timeline && (
        <p className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500"><Clock className="h-3.5 w-3.5" />{tier.timeline}</p>
      )}
      <ul className="mt-5 space-y-2.5 border-t border-gray-100 pt-5">
        {shown.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-gray-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />{f}</li>
        ))}
      </ul>
      {hidden > 0 && (
        <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} className="mt-3 inline-flex items-center gap-1 self-start text-sm font-semibold text-gray-900 hover:text-red-600">
          {open ? "Show less" : `Show all ${tier.features.length} features`}
          <ChevronDown className={cn("h-4 w-4 transition-transform", open && "rotate-180")} />
        </button>
      )}
      <div className="min-h-6 flex-1" />
      <Link
        to={contactHref({ service: service.slug, plan: tier.name, from: "pricing" })}
        className={cn(
          "mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition",
          tier.popular ? "bg-red-600 text-white hover:bg-red-700" : "border border-gray-300 text-gray-900 hover:border-gray-900",
        )}
      >
        {priceToNumber(tier.price) === undefined ? "Request a quote" : `Choose ${tier.level}`} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function Pricing() {
  const allOffers = services.flatMap((s) => s.tiers.map((t) => ({ ...t, serviceName: s.name })));
  const publishedPrices = allOffers.filter((t) => priceToNumber(t.price) !== undefined).length;

  const schemas = [
    ...generateServiceSchemas(),
    generateWebPageSchema({
      name: "Pricing — Cardinal Consulting",
      description: "Plans and pricing for every Cardinal Consulting service: web development, mobile apps, brand identity, UX/UI, SEO, digital marketing, social media, AI automation, technical consulting, and website care.",
      url: `${siteConfig.url}/pricing`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Pricing", url: `${siteConfig.url}/pricing` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": `${siteConfig.url}/pricing`,
      name: "Cardinal Consulting Pricing",
      description: "Plans and pricing for every Cardinal Consulting service.",
      provider: { "@id": `${siteConfig.url}#organization` },
      numberOfItems: allOffers.length,
      itemListElement: allOffers.map((tier, i) => {
        const price = priceToNumber(tier.price);
        return {
          "@type": "Offer",
          position: i + 1,
          name: `${tier.serviceName} — ${tier.name}`,
          description: tier.bestFor,
          ...(price !== undefined && {
            priceSpecification: {
              "@type": tier.billing === "per month" ? "UnitPriceSpecification" : "PriceSpecification",
              priceCurrency: "USD",
              ...(tier.billing === "starting price" ? { minPrice: price } : { price }),
              ...(tier.billing === "per month" && { unitText: "MONTH" }),
            },
          }),
        };
      }),
    },
  ];

  return (
    <>
      <SEOHead
        title="Pricing — Web Design, SEO, Apps & Marketing | Cardinal Consulting Houston"
        description="Every Cardinal Consulting price in one place: websites from $1,500, mobile apps from $5K, branding from $1,500, UX/UI from $1,000, SEO from $1,500/mo, and website care from $299/mo. Written quote before any work begins."
        url={`${siteConfig.url}/pricing`}
        schemas={schemas}
        keywords={["web design pricing houston", "website cost houston", "SEO pricing", "mobile app development cost", "branding agency pricing", "website maintenance pricing", "digital marketing agency pricing"]}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* HERO */}
          <Spotlight className="bg-ink pb-16 pt-36 text-ink-foreground lg:pb-20 lg:pt-44">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
            <Container className="relative">
              <nav aria-label="Breadcrumb" className="mb-8 text-sm text-ink-muted">
                <Link to="/" className="hover:text-white">Home</Link> <span className="mx-2">/</span> <span className="text-white">Pricing</span>
              </nav>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">Pricing</p>
              <h1 className="max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
                <RevealText text="Clear pricing for every service" trigger="mount" />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Every plan for every service, in one place. Use this guide to budget — your final scope and price are always confirmed in writing before work begins.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#overview" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-red-600 px-7 font-semibold text-white transition hover:bg-red-700">
                  Compare all prices <ArrowRight className="h-4 w-4" />
                </a>
                <Link to={contactHref({ from: "pricing" })} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-semibold text-white transition hover:bg-white/10">
                  Get a recommended plan
                </Link>
              </div>
              <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { value: `${services.length}`, label: "Services" },
                  { value: `${publishedPrices}`, label: "Published prices" },
                  { value: "$0", label: "To get a written quote" },
                ].map((s) => (
                  <div key={s.label}>
                    <dd className="font-display text-3xl font-semibold md:text-5xl">{s.value}</dd>
                    <dt className="mt-2 text-sm text-ink-muted">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </Container>
          </Spotlight>

          {/* HOW PRICING WORKS */}
          <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-20 lg:py-24">
            <Container>
              <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">How pricing works</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">Three simple ways we price</h2>
                <p className="mt-4 text-lg text-gray-600">Every service has three plans — Foundation, Growth, and Enterprise — priced one of three ways.</p>
              </motion.div>
              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {MODELS.map((m, i) => (
                  <motion.div key={m.title} {...revealDelay(i)} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600"><m.icon className="h-6 w-6" /></span>
                    <h3 className="mt-5 text-xl font-bold text-gray-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{m.body}</p>
                    <ul className="mt-5 flex flex-wrap gap-2 border-t border-gray-100 pt-5">
                      {services.filter(m.match).map((s) => (
                        <li key={s.slug}>
                          <a href={`#${s.slug}`} className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 hover:bg-gray-900 hover:text-white">{s.name}</a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* AT-A-GLANCE OVERVIEW */}
          <section id="overview" className="scroll-mt-24 py-20 lg:py-28">
            <Container>
              <motion.div {...reveal} className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">At a glance</p>
                  <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">Every plan, side by side</h2>
                  <p className="mt-4 text-lg text-gray-600">Select any service for the full plan details below.</p>
                </div>
                <p className="text-sm text-gray-500"><span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-red-600 align-middle" />Most popular plan</p>
              </motion.div>

              {/* Desktop table */}
              <motion.div {...reveal} className="mt-12 hidden overflow-hidden rounded-2xl border border-gray-200 lg:block">
                <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                    <tr>
                      <th scope="col" className="w-[28%] px-6 py-4">Service</th>
                      <th scope="col" className="px-6 py-4">Foundation</th>
                      <th scope="col" className="px-6 py-4">Growth</th>
                      <th scope="col" className="px-6 py-4">Enterprise</th>
                      <th scope="col" className="w-12 px-6 py-4"><span className="sr-only">Details</span></th>
                    </tr>
                  </thead>
                  {serviceGroups.map((g) => (
                    <tbody key={g.group} className="border-t border-gray-200">
                      <tr className="bg-gray-900/[0.03]">
                        <th colSpan={5} scope="colgroup" className="px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">{g.title}</th>
                      </tr>
                      {services.filter((s) => s.group === g.group).map((s) => (
                        <tr key={s.slug} className="group border-t border-gray-100 transition hover:bg-red-50/40">
                          <th scope="row" className="px-6 py-5 align-top">
                            <a href={`#${s.slug}`} className="flex items-center gap-3">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600"><s.icon className="h-4 w-4" /></span>
                              <span className="font-semibold text-gray-900 group-hover:text-red-600">{s.name}</span>
                            </a>
                          </th>
                          {s.tiers.map((t) => (
                            <td key={t.level} className="px-6 py-5 align-top">
                              <div className="flex items-center gap-2">
                                <Price tier={t} size="sm" />
                                {t.popular && <span className="h-2 w-2 rounded-full bg-red-600" aria-label="Most popular" />}
                              </div>
                              <p className="mt-0.5 text-sm text-gray-500">{t.name}</p>
                            </td>
                          ))}
                          <td className="px-6 py-5 text-right align-top">
                            <a href={`#${s.slug}`} aria-label={`${s.name} plan details`} className="inline-flex h-8 w-8 items-center justify-center rounded-full text-gray-400 group-hover:bg-red-600 group-hover:text-white">
                              <ArrowRight className="h-4 w-4" />
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  ))}
                </table>
              </motion.div>

              {/* Mobile / tablet cards */}
              <div className="mt-10 space-y-10 lg:hidden">
                {serviceGroups.map((g) => (
                  <div key={g.group}>
                    <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-red-600">{g.title}</p>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {services.filter((s) => s.group === g.group).map((s) => (
                        <a key={s.slug} href={`#${s.slug}`} className="block min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                          <div className="flex items-center justify-between gap-3">
                            <span className="flex items-center gap-3">
                              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600"><s.icon className="h-4 w-4" /></span>
                              <span className="font-semibold text-gray-900">{s.name}</span>
                            </span>
                            <ArrowRight className="h-4 w-4 shrink-0 text-gray-400" />
                          </div>
                          <dl className="mt-4 divide-y divide-gray-100 border-t border-gray-100">
                            {s.tiers.map((t) => (
                              <div key={t.level} className="flex items-center justify-between gap-3 py-2.5">
                                <dt className="min-w-0 text-sm">
                                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-gray-400">
                                    {t.level}{t.popular && <span className="ml-1.5 text-red-600">· Popular</span>}
                                  </span>
                                  <span className="block truncate text-gray-700">{t.name}</span>
                                </dt>
                                <dd><Price tier={t} size="sm" /></dd>
                              </div>
                            ))}
                          </dl>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          {/* STICKY JUMP NAV */}
          <div className="sticky top-[72px] z-30 border-y border-gray-100 bg-white/90 backdrop-blur">
            <Container>
              <nav aria-label="Jump to service" className="-mx-4 flex gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {services.map((s) => (
                  <a key={s.slug} href={`#${s.slug}`} className="shrink-0 rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-900 hover:text-gray-900">
                    {s.name}
                  </a>
                ))}
              </nav>
            </Container>
          </div>

          {/* DETAILED PLANS, BY GROUP */}
          {serviceGroups.map((g, gi) => (
            <section key={g.group} className={cn("py-20 lg:py-24", gi % 2 === 0 ? "bg-gray-50" : "bg-white")}>
              <Container>
                <motion.div {...reveal} className="flex flex-col gap-2 border-b border-gray-200 pb-8 md:flex-row md:items-end md:justify-between">
                  <div>
                    <p className="font-display text-sm font-semibold text-red-600">{String(gi + 1).padStart(2, "0")} — {g.title}</p>
                    <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">{g.description}</h2>
                  </div>
                </motion.div>

                <div className="divide-y divide-gray-200">
                  {services.filter((s) => s.group === g.group).map((s) => (
                    <article key={s.slug} id={s.slug} className="scroll-mt-36 grid gap-8 py-14 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-12">
                      <motion.div {...reveal} className="lg:sticky lg:top-36 lg:self-start">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-600/20"><s.icon className="h-6 w-6" /></span>
                        <h3 className="mt-5 font-display text-2xl font-semibold text-gray-900 md:text-3xl">{s.name}</h3>
                        <p className="mt-3 leading-relaxed text-gray-600">{s.summary}</p>
                        <div className="mt-6 rounded-xl border border-gray-200 bg-white p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">Starting at</p>
                          <p className="mt-1 font-display text-2xl font-semibold text-gray-900">
                            {priceToNumber(s.startingAt) === undefined ? "Custom quote" : s.startingBilling === "per month" ? `${s.startingAt}/mo` : s.startingAt}
                          </p>
                        </div>
                        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
                          <Link to={s.path} className="inline-flex items-center gap-1.5 text-gray-900 hover:text-red-600">Service details <ArrowRight className="h-4 w-4" /></Link>
                          <Link to={contactHref({ service: s.slug, from: "pricing" })} className="inline-flex items-center gap-1.5 text-red-600 hover:text-red-700">Ask a question <ArrowRight className="h-4 w-4" /></Link>
                        </div>
                      </motion.div>
                      <div className="grid gap-5 pt-3 md:grid-cols-3">
                        {s.tiers.map((t, ti) => (
                          <motion.div key={t.level} {...revealDelay(ti)} className="h-full">
                            <TierCard tier={t} service={s} />
                          </motion.div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </Container>
            </section>
          ))}

          {/* BILLING PROCESS */}
          <section className="bg-ink py-20 text-ink-foreground lg:py-28">
            <Container>
              <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-400">How billing works</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-5xl">No surprises, start to finish</h2>
                <p className="mt-4 text-lg text-ink-muted">You always know what you're paying for and when.</p>
              </motion.div>
              <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
                <div aria-hidden className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-red-600/60 via-white/20 to-red-600/60 md:block" />
                {BILLING_STEPS.map((step, i) => (
                  <motion.li key={step.title} {...revealDelay(i)} className="relative flex gap-5 md:block">
                    <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-600 text-white ring-8 ring-ink"><step.icon className="h-5 w-5" /></span>
                    <div className="md:mt-6">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-400">Step {i + 1}</p>
                      <h3 className="mt-1 text-lg font-bold">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.body}</p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* EVERY ENGAGEMENT INCLUDES */}
          <section className="py-20 lg:py-28">
            <Container>
              <motion.div {...reveal} className="mx-auto max-w-2xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Every engagement</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-5xl">What you can count on</h2>
              </motion.div>
              <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {PROMISES.map((p, i) => (
                  <motion.div key={p.title} {...revealDelay(i)} className="flex gap-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-red-600 shadow-sm"><p.icon className="h-5 w-5" /></span>
                    <div>
                      <h3 className="font-bold text-gray-900">{p.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{p.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* FAQ */}
          <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-28">
            <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <motion.div {...reveal}>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">FAQ</p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">Pricing questions, answered</h2>
                <p className="mt-4 text-gray-600">Still unsure? <Link to={contactHref({ from: "pricing" })} className="font-semibold text-red-600 hover:underline">Ask us directly</Link> — we reply within 24 hours.</p>
              </motion.div>
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`faq-${i}`} className="rounded-xl border border-gray-200 bg-white px-5">
                    <AccordionTrigger className="py-5 text-left font-semibold text-gray-900 hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="pb-5 leading-relaxed text-gray-600">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-24">
            <Container>
              <motion.div {...reveal} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-red-700 px-6 py-14 text-center text-white sm:px-12 lg:py-20">
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "22px 22px" }} />
                <div className="relative">
                  <Sparkles className="mx-auto h-8 w-8 text-white/80" />
                  <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight md:text-5xl">Not sure which plan fits?</h2>
                  <p className="mx-auto mt-4 max-w-xl text-lg text-white/85">Tell us your goals and budget. We'll recommend the right plan and send a written quote — free, with no obligation.</p>
                  <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link to={contactHref({ from: "pricing" })} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 font-semibold text-red-700 transition hover:bg-gray-100">
                      Get a recommended plan <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:281-901-7016" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/40 px-7 font-semibold text-white transition hover:bg-white/10">
                      <Phone className="h-4 w-4" /> (281) 901-7016
                    </a>
                  </div>
                </div>
              </motion.div>
            </Container>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}
