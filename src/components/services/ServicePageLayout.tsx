import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, Check, Clock, ClipboardList, Hammer, Mail, MapPin, MessageSquare, Phone, Plus, Rocket, ShieldCheck,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ContactForm } from "@/components/site/ContactForm";
import { Container } from "@/components/site/primitives";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import { getService, serviceGroups, tierAssurance, type ServiceDefinition, type ServiceTier } from "@/lib/services-catalog";
import { getCaseStudies } from "@/lib/case-studies";
import { contactHref, rememberService } from "@/lib/contact-intent";
import { cn } from "@/lib/utils";
import { CardinalMark } from "@/components/site/CardinalMark";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE },
} as const;
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.07 } });

function buildSchemas(service: ServiceDefinition) {
  const serviceUrl = `${siteConfig.url}${service.path}`;
  return generateServicePageSchemas({
    serviceName: service.seo.serviceName,
    serviceDescription: service.seo.serviceDescription,
    serviceType: service.seo.serviceType,
    serviceUrl,
    category: service.seo.category,
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: service.name, url: serviceUrl },
    ],
    faqs: service.faqs,
    offers: service.tiers.map((t) => ({ name: t.name, price: t.price, billing: t.billing, description: t.bestFor, features: t.features })),
    process: service.process.map((p) => ({ name: p.title, description: p.description })),
    duration: service.seo.duration,
    keywords: service.seo.keywords,
    features: service.included.map((f) => ({ title: f.title, description: f.description })),
  });
}

const STEP_ICONS = [MessageSquare, ClipboardList, Hammer, Rocket];
const STEP_OUTPUTS = ["Free · no obligation", "Written scope & fixed price", "Reviews at every milestone", "Launch, reporting & support"];
const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "included", label: "What's included" },
  { id: "process", label: "Process" },
  { id: "plans", label: "Packages" },
  { id: "faq", label: "FAQ" },
];

/** "SEO" stays uppercase when a service name is used mid-sentence. */
const inSentence = (name: string) => (name.startsWith("SEO") || name.startsWith("UX") || name.startsWith("AI") ? name : name.toLowerCase());
const isQuoteFirst = (t: ServiceTier) => t.billing === "starting price" || t.price.includes("–");
const billingLabel = (t: ServiceTier) => (t.billing === "per month" ? "/ month" : t.billing);

function Headline({ service }: { service: ServiceDefinition }) {
  const { headline, accent } = service;
  if (!accent || !headline.includes(accent)) return <>{headline}</>;
  const [before, after] = headline.split(accent);
  return (
    <>
      {before}
      <span className="text-brand-600">{accent}</span>
      {after}
    </>
  );
}

function Heading({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <motion.div {...fadeUp} className={cn("mb-10 lg:mb-12", center && "mx-auto max-w-2xl text-center")}>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-[1.1] text-gray-900 md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {intro && <p className="mt-4 text-lg leading-relaxed text-gray-600">{intro}</p>}
    </motion.div>
  );
}

/** Sticky in-page navigation that tracks the section in view. */
function SectionNav() {
  const [active, setActive] = useState("overview");
  const bar = useRef<HTMLElement>(null);
  // Keep the active pill visible on narrow screens
  useEffect(() => {
    const nav = bar.current;
    const pill = nav?.querySelector<HTMLElement>(`[href="#${active}"]`);
    if (nav && pill) nav.scrollTo({ left: pill.offsetLeft - nav.clientWidth / 2 + pill.clientWidth / 2, behavior: "smooth" });
  }, [active]);
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-140px 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <div className="sticky top-[72px] z-30 border-y border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container className="flex items-center gap-6">
        <nav ref={bar} aria-label="On this page" className="-mx-1 flex flex-1 gap-1 overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              aria-current={active === s.id ? "true" : undefined}
              className={cn("relative shrink-0 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors", active === s.id ? "text-gray-900" : "text-gray-500 hover:text-gray-900")}
            >
              {active === s.id && <motion.span layoutId="svc-section" className="absolute inset-0 rounded-full bg-gray-100" transition={{ duration: 0.35, ease: EASE }} />}
              <span className="relative">{s.label}</span>
            </a>
          ))}
        </nav>
        <a href="#start" className="hidden h-9 shrink-0 items-center gap-1.5 rounded-full bg-brand-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-700 md:inline-flex">
          Get started <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </Container>
    </div>
  );
}

function PackageCard({ t, i, service }: { t: ServiceTier; i: number; service: ServiceDefinition }) {
  const featured = !!t.popular;
  return (
    <motion.article
      {...stagger(i)}
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-7 lg:p-8",
        featured ? "bg-gray-950 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)] lg:-my-5 lg:py-12" : "border border-gray-200 bg-white",
      )}
    >
      {featured && <span className="absolute -top-3 left-7 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Most popular</span>}
      <p className={cn("text-[11px] font-bold uppercase tracking-[0.16em]", featured ? "text-brand-300" : "text-brand-600")}>{t.level}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{t.name}</h3>
      <p className={cn("mt-2 text-[15px] leading-relaxed", featured ? "text-white/65" : "text-gray-600")}>{t.bestFor}</p>

      <div className={cn("mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t pt-6", featured ? "border-white/10" : "border-gray-100")}>
        <span className={cn("whitespace-nowrap font-display font-semibold tracking-tight", t.price.includes("–") ? "text-3xl" : "text-[2.6rem] leading-none")}>{t.price}</span>
        <span className={cn("text-sm", featured ? "text-white/55" : "text-gray-500")}>{billingLabel(t)}</span>
      </div>
      {t.timeline && (
        <p className={cn("mt-3 flex items-center gap-1.5 text-sm", featured ? "text-white/60" : "text-gray-500")}>
          <Clock className="h-4 w-4" /> {t.timeline}
        </p>
      )}

      <ul className="mt-7 flex-1 space-y-3">
        {t.features.map((f, k) => (
          <li key={f} className={cn("flex items-start gap-3 text-[15px] leading-snug", featured ? "text-white/85" : "text-gray-700", k === 0 && "font-medium")}>
            <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", featured ? "bg-brand-500/20 text-brand-300" : "bg-brand-50 text-brand-600")}>
              <Check className="h-3 w-3" />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <p className={cn("mt-8 flex items-start gap-2 border-t pt-4 text-xs font-medium leading-snug", featured ? "border-white/10 text-white/60" : "border-gray-100 text-gray-500")}>
        <ShieldCheck className={cn("mt-px h-4 w-4 shrink-0", featured ? "text-brand-300" : "text-brand-600")} /> {tierAssurance(t)}
      </p>
      <Link
        to={contactHref({ service: service.slug, plan: t.name, from: service.path })}
        className={cn(
          "group mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition-colors",
          featured ? "bg-brand-500 text-white hover:bg-brand-600" : "border border-gray-300 text-gray-900 hover:border-gray-900",
        )}
      >
        {isQuoteFirst(t) ? `Get a fixed ${t.name} quote` : `Start with ${t.name}`}
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </motion.article>
  );
}

/**
 * Service pages share one structure, customized by services-catalog.ts:
 * Hero + packages panel → section nav → facts → fit → included (bento) → process → packages
 * → research → work → FAQ → start (inline form) → related.
 */
export function ServicePageLayout({ service }: { service: ServiceDefinition }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = service.related.map(getService);
  const work = getCaseStudies(service.caseStudies ?? []);
  const group = serviceGroups.find((g) => g.group === service.group);
  useEffect(() => rememberService(service.slug), [service.slug]);

  const monthly = service.startingBilling === "per month";
  const timeline = service.tiers.find((t) => t.popular)?.timeline ?? service.tiers.find((t) => t.timeline)?.timeline;
  const facts = [
    { value: `${service.startingAt}${monthly ? "/mo" : ""}`, label: "Starting price" },
    {
      value: timeline ? timeline.replace(/^Typically /, "") : monthly ? "Monthly" : "Scoped",
      label: timeline ? "Typical timeline" : monthly ? "Month-to-month" : "Timeline in your proposal",
    },
    { value: "Fixed price", label: "Guaranteed in writing" },
    { value: "24 hrs", label: "Reply to every inquiry" },
  ];
  const grid = { backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" };

  return (
    <>
      <SEOHead title={service.seo.title} description={service.seo.description} keywords={service.seo.keywords} schemas={buildSchemas(service)} url={`${siteConfig.url}${service.path}`} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* ── HERO ───────────────────────────────────────────────────── */}
          <section id="overview" className="relative scroll-mt-32 overflow-hidden pb-12 pt-24 lg:pb-16 lg:pt-28">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-brand-50/80 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
                style={{ backgroundImage: "linear-gradient(rgb(var(--brand-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--brand-200) / 0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
              />
            </div>
            <Container className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
              <div>
                <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500">
                  <Link to="/" className="hover:text-gray-900">Home</Link>
                  <span className="mx-1.5">/</span>
                  <Link to="/services" className="hover:text-gray-900">Services</Link>
                  <span className="mx-1.5">/</span>
                  <span className="text-gray-900">{service.name}</span>
                </nav>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 py-1.5 pl-1.5 pr-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                    <service.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{group?.title} · {service.name}</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7, ease: EASE }} className="font-display text-4xl leading-[1.06] text-gray-900 sm:text-5xl xl:text-6xl">
                  <Headline service={service} />
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7, ease: EASE }} className="service-description mt-5 max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                  {service.summary}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.7, ease: EASE }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href="#start" className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(var(--brand-600)/0.7)] transition-colors hover:bg-brand-700">
                    Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a href="#plans" className="inline-flex h-12 items-center justify-center rounded-full bg-gray-900 px-7 font-semibold text-white transition-colors hover:bg-gray-800">
                    Compare packages
                  </a>
                </motion.div>
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }} className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
                  {["Free consultation", "Fixed-price guarantee", "Reply within 24 hours"].map((b) => (
                    <li key={b} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-brand-600" /> {b}
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* Packages panel */}
              <motion.a
                href="#plans"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                aria-label={`${service.name} packages — jump to full details`}
                className="ink-island group relative block overflow-hidden rounded-3xl bg-gray-950 p-6 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)] lg:p-7"
              >
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/50">Packages</p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-brand-300">
                      <service.icon className="h-4 w-4" />
                    </span>
                  </div>
                  <ul className="mt-4 divide-y divide-white/10">
                    {service.tiers.map((t) => (
                      <li key={t.name} className="flex items-center justify-between gap-4 py-4">
                        <div className="min-w-0">
                          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-300">
                            {t.level}
                            {t.popular && <span className="rounded-full bg-brand-500 px-1.5 py-px text-[9px] text-white">Popular</span>}
                          </p>
                          <p className="mt-1 truncate font-semibold text-white">{t.name}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <p className="font-display text-xl font-semibold tracking-tight">{t.price}</p>
                          <p className="text-xs text-white/50">{billingLabel(t)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-white">
                    Compare all features <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.a>
            </Container>
          </section>

          <SectionNav />

          {/* ── FACTS ──────────────────────────────────────────────────── */}
          <section className="border-b border-gray-100">
            <Container>
              <dl className="grid grid-cols-2 lg:grid-cols-4">
                {facts.map((f, i) => (
                  <motion.div key={f.label} {...stagger(i)} className={cn("py-8 lg:py-10", i % 2 === 1 && "border-l border-gray-100 pl-6", i >= 2 && "border-t border-gray-100 lg:border-t-0", i > 0 && "lg:border-l lg:border-gray-100 lg:pl-8")}>
                    <dd className="font-display text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{f.value}</dd>
                    <dt className="mt-1 text-sm text-gray-500">{f.label}</dt>
                  </motion.div>
                ))}
              </dl>
            </Container>
          </section>

          {/* ── FIT ────────────────────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
              <div className="lg:sticky lg:top-40 lg:self-start">
                <Heading eyebrow="Is this for you?" title="Built for businesses ready for more" />
              </div>
              <ol className="divide-y divide-gray-100 border-y border-gray-100">
                {service.whoItsFor.map((c, i) => (
                  <motion.li key={c} {...stagger(i)} className="flex gap-5 py-6">
                    <span className="font-display text-sm font-semibold tabular-nums text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-lg leading-relaxed text-gray-800">{c}</p>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* ── INCLUDED (bento) ───────────────────────────────────────── */}
          <section id="included" className="scroll-mt-32 border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container>
              <Heading eyebrow="What's included" title="Everything you get" intro="Delivered by one senior team and tailored to your goals." />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {service.included.map((f, i, all) => {
                  const hero = i === 0;
                  // With the tall first tile, an even count leaves one orphan: let it run full width
                  const banner = i === all.length - 1 && (all.length - 1) % 2 === 1;
                  return (
                    <motion.div
                      key={f.title}
                      {...stagger(i)}
                      className={cn(
                        "group relative overflow-hidden rounded-3xl p-7 transition-all duration-500",
                        hero
                          ? "bg-gray-950 text-white sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:flex lg:flex-col lg:justify-between lg:p-9"
                          : "border border-gray-100 bg-white hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.4)]",
                        banner && "sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-8 [&>div:first-of-type]:shrink-0 [&>div:last-child>h3]:lg:mt-0",
                      )}
                    >
                      {hero && <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/20 blur-3xl" />}
                      {!hero && <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100" />}
                      <div className="relative flex items-start justify-between">
                        <span className={cn("flex items-center justify-center rounded-2xl transition-colors duration-500", hero ? "h-14 w-14 bg-white/10 text-brand-300" : "h-11 w-11 bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white")}>
                          <f.icon className={hero ? "h-6 w-6" : "h-5 w-5"} />
                        </span>
                        <span className={cn("font-display text-xs font-semibold tabular-nums", hero ? "text-white/30" : "text-gray-300")}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <div className="relative">
                        <h3 className={cn("mt-6 font-display font-semibold", hero ? "text-2xl lg:text-3xl" : "text-lg text-gray-900")}>{f.title}</h3>
                        <p className={cn("mt-2 leading-relaxed", hero ? "text-white/65 lg:text-lg" : "text-[15px] text-gray-600")}>{f.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* ── PROCESS ────────────────────────────────────────────────── */}
          <section id="process" className="scroll-mt-32 py-14 lg:py-20">
            <Container>
              <Heading eyebrow="How it works" title="From first call to launch" intro="A clear, four-step process — so you always know what happens next." />
              <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
                <span aria-hidden className="absolute bottom-4 left-[22px] top-2 w-px bg-gray-200 lg:bottom-auto lg:left-0 lg:right-0 lg:top-[22px] lg:h-px lg:w-auto" />
                {service.process.map((step, i) => {
                  const Icon = STEP_ICONS[i];
                  return (
                    <motion.li key={step.title} {...stagger(i)} className="relative flex gap-5 lg:block">
                      <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-900 shadow-sm">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
                      </span>
                      <div className="lg:mt-6">
                        <p className="font-display text-xs font-semibold tabular-nums tracking-[0.18em] text-brand-600">STEP {i + 1}</p>
                        <h3 className="mt-1.5 font-display text-xl font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{step.description}</p>
                        <span className="mt-4 inline-flex rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">{STEP_OUTPUTS[i]}</span>
                      </div>
                    </motion.li>
                  );
                })}
              </ol>
            </Container>
          </section>

          {/* ── PACKAGES ───────────────────────────────────────────────── */}
          <section id="plans" className="scroll-mt-32 border-t border-gray-100 bg-gray-50/70 py-14 lg:py-24">
            <Container>
              <Heading center eyebrow="Packages & pricing" title="Choose the package that fits today" intro="Start where it makes sense and upgrade any time. Every package is scoped in writing with a fixed-price guarantee." />
              {/* Swipeable on phones & tablets (next card peeks in), side by side on desktop */}
              <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-3 pt-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
                {service.tiers.map((t, i) => (
                  <div key={t.name} className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-auto">
                    <PackageCard t={t} i={i} service={service} />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-xs font-medium text-gray-500 lg:hidden">Swipe to compare all {service.tiers.length} packages →</p>
              <motion.div {...fadeUp} className="mx-auto mt-12 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-6 py-5 text-center sm:flex-row sm:text-left">
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-900">Not sure which package fits?</span> Tell us your goals and we'll recommend one — free.
                </p>
                <div className="flex shrink-0 items-center gap-5 text-sm font-semibold">
                  <a href="#start" className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700">
                    Get a recommendation <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link to="/pricing" className="text-gray-600 hover:text-gray-900">All pricing</Link>
                </div>
              </motion.div>
            </Container>
          </section>

          {/* ── RESEARCH ───────────────────────────────────────────────── */}
          {service.research && service.research.length > 0 && (
            <section className="py-14 lg:py-20">
              <Container>
                <Heading eyebrow="What the research says" title={`Why ${inSentence(service.name)} matters`} />
                <div className="grid gap-10 md:grid-cols-2 lg:gap-14">
                  {service.research.map((r, i) => (
                    <motion.figure key={r.label} {...stagger(i)} className="border-t-2 border-brand-600 pt-6">
                      <div className="font-display text-5xl font-semibold tracking-tight text-gray-900 lg:text-6xl">{r.value}</div>
                      <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-700">{r.label}</p>
                      <figcaption className="mt-4 text-xs text-gray-500">
                        Source:{" "}
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-600">{r.source}</a>
                        ) : (
                          r.source
                        )}
                        , {r.year}
                      </figcaption>
                    </motion.figure>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* ── WORK ───────────────────────────────────────────────────── */}
          {work.length > 0 && (
            <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
              <Container>
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                  <Heading eyebrow="Selected work" title="Built by our team" />
                  <Link to="/portfolio" className="mb-10 inline-flex shrink-0 items-center gap-1 font-semibold text-brand-600 hover:text-brand-700 lg:mb-12">
                    View the full portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {work.map((c, i) => (
                    <motion.article key={c.slug} {...stagger(i)} className="group overflow-hidden rounded-3xl border border-gray-100 bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.45)]">
                      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                      </div>
                      <div className="aspect-[16/9] overflow-hidden bg-[#eef1f5]">
                        <img src={c.image} alt={`${c.client} website`} loading="lazy" className="block h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.03]" />
                      </div>
                      <div className="p-6">
                        <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{c.industry}</span>
                        <h3 className="mt-3 font-display text-xl font-semibold text-gray-900">{c.client}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.summary}</p>
                        {c.detail && (
                          <Link to={`/portfolio/${c.slug}`} data-cursor="View case study" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700">
                            Read the case study <ArrowRight className="h-4 w-4" />
                          </Link>
                        )}
                      </div>
                    </motion.article>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* ── FAQ ────────────────────────────────────────────────────── */}
          <section id="faq" className="relative isolate scroll-mt-32 overflow-hidden border-t border-gray-100 py-14 lg:py-20">
            <CardinalMark />
            <Container className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div className="lg:sticky lg:top-40 lg:self-start">
                <Heading eyebrow="FAQ" title={`${service.name} questions, answered`} />
                <div className="-mt-4 hidden rounded-2xl bg-gray-950 p-6 text-white lg:block">
                  <p className="font-display text-lg">Still have a question?</p>
                  <p className="mt-1 text-sm text-white/60">Talk to our team — you'll hear back within 24 hours.</p>
                  <a href="#start" className="mt-5 flex h-11 items-center justify-between rounded-full bg-white px-5 text-sm font-semibold text-gray-900">
                    Ask us directly <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                {service.faqs.map((faq, i) => {
                  const open = openFaq === i;
                  return (
                    <motion.div key={faq.question} {...stagger(i)} className={cn("overflow-hidden rounded-2xl border bg-white transition-shadow", open ? "border-gray-200 shadow-[0_20px_40px_-30px_rgba(17,24,39,0.4)]" : "border-gray-100")}>
                      <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-start gap-4 p-5 text-left md:p-6">
                        <span className={cn("mt-0.5 font-display text-xs font-semibold tabular-nums", open ? "text-brand-600" : "text-gray-400")}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="flex-1 font-semibold text-gray-900 md:text-lg">{faq.question}</span>
                        <span className={cn("flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-colors", open ? "border-gray-900 bg-gray-900 text-white" : "border-gray-200 text-gray-500")}>
                          <Plus className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-45")} />
                        </span>
                      </button>
                      <AnimatePresence initial={false}>
                        {open && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }}>
                            <p className="px-5 pb-6 pl-[3.25rem] text-[15px] leading-relaxed text-gray-600 md:px-6 md:pl-14">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* ── START A CONVERSATION ───────────────────────────────────── */}
          <section id="start" className="scroll-mt-32 border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container>
              <div className="grid overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_40px_80px_-50px_rgba(17,24,39,0.4)] lg:grid-cols-[1fr_1.35fr]">
                <div className="relative overflow-hidden bg-gray-950 p-8 text-white lg:p-12">
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Start a conversation</p>
                    <h2 className="mt-3 font-display text-3xl leading-tight lg:text-4xl">Let's talk about your {inSentence(service.name)} goals</h2>
                    <p className="mt-4 text-white/60">It takes about a minute. Here's what happens next:</p>
                    <ol className="mt-8 space-y-5">
                      {["We reply within 24 hours to set up a free consultation", "We learn your goals and recommend the right package", "You receive a written scope with a fixed-price guarantee"].map((s, i) => (
                        <li key={s} className="flex gap-4">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 font-display text-sm font-semibold">{i + 1}</span>
                          <span className="pt-1 text-white/85">{s}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-10 space-y-3 border-t border-white/10 pt-8 text-sm text-white/70">
                      <a href="tel:+12819017016" className="flex items-center gap-3 hover:text-white"><Phone className="h-4 w-4 text-brand-300" /> (281) 901-7016</a>
                      <a href="mailto:Hunain@visitcardinal.com" className="flex items-center gap-3 break-all hover:text-white"><Mail className="h-4 w-4 shrink-0 text-brand-300" /> Hunain@visitcardinal.com</a>
                      <p className="flex items-center gap-3"><MapPin className="h-4 w-4 shrink-0 text-brand-300" /> 2100 West Loop S Fwy, Houston, TX</p>
                      <p className="flex items-center gap-3"><ShieldCheck className="h-4 w-4 shrink-0 text-brand-300" /> No obligation · Your information stays private</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8 lg:p-12">
                  <ContactForm formName="service-inquiry" defaultService={service.slug} />
                </div>
              </div>
            </Container>
          </section>

          {/* ── RELATED ────────────────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container>
              <Heading eyebrow="Keep exploring" title="Services that work well together" />
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((s, i) => (
                  <motion.div key={s.slug} {...stagger(i)}>
                    <Link to={s.path} className="group flex h-full flex-col rounded-3xl border border-gray-100 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-34px_rgba(17,24,39,0.4)]">
                      <div className="flex items-center justify-between">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-50 text-gray-700 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-gray-300 transition-all group-hover:rotate-45 group-hover:text-brand-600" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold text-gray-900">{s.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.summary}</p>
                      <p className="mt-4 text-sm font-semibold text-gray-900">From {s.startingAt}{s.startingBilling === "per month" ? "/mo" : ""}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              {service.localLinks.length > 0 && (
                <div className="mt-10 border-t border-gray-100 pt-8">
                  <p className="mb-4 text-sm font-semibold text-gray-900">In Houston</p>
                  <div className="flex flex-wrap gap-2">
                    {service.localLinks.map((l) => (
                      <Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-700">
                        {l.label} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}
