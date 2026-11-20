import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, ClipboardCheck, Clock, FileSignature, MapPin, MessageSquare, Phone, Plus, ShieldCheck, Sparkles, Users } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import { Logo } from "@/components/layout/Header";
import { Container } from "@/components/site/primitives";
import { GuidedContactForm } from "@/components/site/GuidedContactForm";
import { getService, tierAssurance, type ServiceTier } from "@/lib/services-catalog";
import { caseStudies, getCaseStudies } from "@/lib/case-studies";
import { rememberService } from "@/lib/contact-intent";
import { trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/lib/seo-config";
import { faqSchema, houstonAreaServed, webPageSchema } from "@/lib/site-schema";
import { startPages, type StartPage } from "@/lib/start-pages";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE },
} as const;
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.07 } });
const grid = { backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "40px 40px" };
const PHONE = "(281) 901-7016";
const TEL = "tel:+12819017016";

const billingLabel = (t: ServiceTier) => (t.billing === "per month" ? "/ month" : t.billing);

function crumbs(page: StartPage) {
  const service = getService(page.service);
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: service.path },
    { name: "Get started", path: page.path },
  ];
}

/** "$3,500" → 3500; "$4,000–$12,000" → [4000, 12000]; null for quote-only tiers. */
function priceRange(price: string): [number, number | undefined] | null {
  const nums = [...price.replace(/,/g, "").matchAll(/\$(\d+(?:\.\d+)?)/g)].map((m) => Number(m[1]));
  return nums.length ? [nums[0], nums[1]] : null;
}

/**
 * WebPage + Service (with every package as an Offer) + FAQPage + BreadcrumbList. Every fact here is
 * visible on the page. The organization is referenced by @id; SEOHead injects the full entity.
 */
function buildSchemas(page: StartPage) {
  const url = `${siteConfig.url}${page.path}`;
  const service = getService(page.service);
  const offers = service.tiers
    .map((t) => ({ t, range: priceRange(t.price) }))
    .filter((o) => o.range)
    .map(({ t, range }) => {
      const [min, max] = range!;
      const monthly = t.billing === "per month";
      const fixed = !max && !t.price.includes("+") && t.billing !== "starting price";
      return {
        "@type": "Offer",
        name: t.name,
        description: t.bestFor,
        priceCurrency: "USD",
        ...(fixed ? { price: min } : {}),
        priceSpecification: {
          "@type": monthly ? "UnitPriceSpecification" : "PriceSpecification",
          priceCurrency: "USD",
          ...(fixed ? { price: min } : { minPrice: min, ...(max ? { maxPrice: max } : {}) }),
          ...(monthly ? { unitText: "MONTH", referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" } } : {}),
        },
        availability: "https://schema.org/InStock",
        url: `${url}#plans`,
        seller: { "@id": `${siteConfig.url}#organization` },
      };
    });
  return [
    {
      ...webPageSchema({ url, name: page.seo.title, description: page.seo.description }),
      breadcrumb: { "@id": `${url}#breadcrumb` },
      mainEntity: { "@id": `${url}#service` },
      about: page.about,
      keywords: page.seo.keywords.join(", "),
      significantLink: [`${siteConfig.url}${service.path}`, `${siteConfig.url}/pricing`, `${siteConfig.url}/portfolio`],
      potentialAction: {
        "@type": "CommunicateAction",
        name: page.cta,
        target: `${url}#start`,
        recipient: { "@id": `${siteConfig.url}#organization` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.eyebrow,
      alternateName: service.seo.serviceName,
      serviceType: service.seo.serviceType,
      category: service.seo.category,
      description: page.subhead,
      url,
      image: siteConfig.ogImage,
      provider: { "@id": `${siteConfig.url}#organization` },
      areaServed: houstonAreaServed(),
      audience: { "@type": "BusinessAudience", audienceType: "Small and mid-sized businesses" },
      about: page.about,
      offers,
      termsOfService: `${siteConfig.url}/terms-of-service`,
    },
    faqSchema(url, page.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs(page).map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.path === "/" ? siteConfig.url : `${siteConfig.url}${c.path}`,
      })),
    },
  ];
}

function scrollToForm() {
  document.getElementById("start")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Accent({ text, accent }: { text: string; accent: string }) {
  if (!text.includes(accent)) return <>{text}</>;
  const [before, after] = text.split(accent);
  return (
    <>
      {before}
      <span className="text-brand-600">{accent}</span>
      {after}
    </>
  );
}

function Heading({ eyebrow, title, intro, center, inverted }: { eyebrow: string; title: string; intro?: string; center?: boolean; inverted?: boolean }) {
  return (
    <motion.div {...fadeUp} className={cn("mb-10 lg:mb-12", center ? "mx-auto max-w-2xl text-center" : "max-w-3xl")}>
      <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", inverted ? "text-brand-300" : "text-brand-600")}>{eyebrow}</p>
      <h2 className={cn("mt-3 font-display text-3xl leading-[1.1] md:text-4xl lg:text-[2.75rem]", inverted ? "text-white" : "text-gray-900")}>{title}</h2>
      {intro && <p className={cn("mt-4 text-lg leading-relaxed", inverted ? "text-white/65" : "text-gray-600")}>{intro}</p>}
    </motion.div>
  );
}

function CtaButton({ label, className, onClick }: { label: string; className?: string; onClick?: () => void }) {
  return (
    <a
      href="#start"
      onClick={(e) => {
        e.preventDefault();
        onClick?.();
        scrollToForm();
      }}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(var(--brand-600)/0.7)] transition-colors hover:bg-brand-700",
        className,
      )}
    >
      {label} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

/** Focused header: no site navigation, so the only paths are the form and the phone. */
function LandingHeader({ cta }: { cta: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <Container className="flex h-[68px] items-center justify-between gap-4">
        <Logo />
        <div className="flex items-center gap-2 sm:gap-5">
          <a href={TEL} className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-600" aria-label={`Call ${PHONE}`}>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200">
              <Phone className="h-4 w-4" />
            </span>
            <span className="hidden sm:inline">{PHONE}</span>
          </a>
          <a
            href="#start"
            onClick={(e) => {
              e.preventDefault();
              scrollToForm();
            }}
            className="hidden h-10 items-center gap-1.5 rounded-full bg-gray-900 px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-600 md:inline-flex"
          >
            {cta} <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </header>
  );
}

/** Phone-only action bar; hides while the form is on screen. */
function MobileActionBar({ cta, hidden }: { cta: string; hidden: boolean }) {
  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-transform duration-300 lg:hidden",
        hidden ? "translate-y-full" : "translate-y-0",
      )}
    >
      <div className="flex gap-2">
        <a href={TEL} className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full border border-gray-300 text-sm font-semibold text-gray-900">
          <Phone className="h-4 w-4" /> Call us
        </a>
        <a
          href="#start"
          onClick={(e) => {
            e.preventDefault();
            scrollToForm();
          }}
          className="flex h-12 flex-[1.6] items-center justify-center gap-2 rounded-full bg-brand-600 text-sm font-semibold text-white"
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function PackageCard({ t, i, selected, onChoose }: { t: ServiceTier; i: number; selected: boolean; onChoose: () => void }) {
  const featured = !!t.popular;
  return (
    <motion.article
      {...stagger(i)}
      className={cn(
        "relative flex h-full flex-col rounded-3xl p-7 transition-shadow lg:p-8",
        featured ? "bg-gray-950 text-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.7)] lg:-my-5 lg:py-12" : "border border-gray-200 bg-white",
        selected && "ring-2 ring-brand-500 ring-offset-4",
      )}
    >
      {featured && <span className="absolute -top-3 left-7 rounded-full bg-brand-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Most popular</span>}
      <p className={cn("text-[11px] font-bold uppercase tracking-[0.16em]", featured ? "text-brand-300" : "text-brand-600")}>{t.level}</p>
      <h3 className="mt-2 font-display text-2xl font-semibold leading-tight">{t.name}</h3>
      <p className={cn("mt-2 text-[15px] leading-relaxed", featured ? "text-white/65" : "text-gray-600")}>{t.bestFor}</p>
      <div className={cn("mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-t pt-6", featured ? "border-white/10" : "border-gray-100")}>
        <span className={cn("whitespace-nowrap font-display font-semibold tracking-tight", t.price.length > 8 ? "text-3xl" : "text-[2.6rem] leading-none")}>{t.price}</span>
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
      <button
        type="button"
        onClick={onChoose}
        aria-pressed={selected}
        className={cn(
          "group mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-semibold transition-colors",
          featured ? "bg-brand-500 text-white hover:bg-brand-600" : "border border-gray-300 text-gray-900 hover:border-gray-900",
        )}
      >
        {selected ? (
          <>
            <CheckCircle2 className="h-4 w-4" /> Selected: finish your request
          </>
        ) : (
          <>
            Start with {t.name} <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
    </motion.article>
  );
}

/**
 * Conversion landing page for one service (see src/lib/start-pages.ts):
 * focused header → hero with the inline form → facts → pains → outcomes → onboarding roadmap
 * → prepare / we handle → packages → proof → assurances → FAQ → final call to action.
 */
export function StartLandingLayout({ page }: { page: StartPage }) {
  const service = getService(page.service);
  const [plan, setPlan] = useState<string>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formVisible, setFormVisible] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const monthly = service.startingBilling === "per month";
  const linked = getCaseStudies(service.caseStudies ?? []);
  const work = (linked.length ? linked : caseStudies.filter((c) => c.featured)).slice(0, 3);
  const timeline = service.tiers.find((t) => t.popular)?.timeline ?? service.tiers.find((t) => t.timeline)?.timeline;

  useEffect(() => {
    rememberService(service.slug);
    trackEvent("view_start_page", { service: service.slug, page_path: page.path });
  }, [service.slug, page.path]);

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const choose = (t: ServiceTier) => {
    setPlan(t.name);
    trackEvent("select_package", { service: service.slug, plan: t.name, page_path: page.path });
    scrollToForm();
  };

  const facts = [
    { value: `${service.startingAt}${monthly ? "/mo" : ""}`, label: "Starting price" },
    {
      value: timeline ? timeline.replace(/^Typically /, "") : monthly ? "Monthly" : "Scoped",
      label: timeline ? "Typical timeline" : monthly ? "Month-to-month plans" : "Timeline in your written plan",
    },
    { value: monthly ? "No contract" : "Fixed price", label: monthly ? "Cancel any month" : "Guaranteed in writing" },
    { value: "24 hrs", label: "Reply to every request" },
  ];

  const assurances = [
    { icon: MessageSquare, title: "Free consultation", body: "A real conversation about your goals, with no obligation and no pressure." },
    monthly
      ? { icon: FileSignature, title: "Month-to-month", body: "No long-term contract. We earn your business with results every month." }
      : { icon: FileSignature, title: "Fixed-price guarantee", body: "Once you approve the written scope, the price is locked unless you approve new work in writing." },
    { icon: Clock, title: "Reply within 24 hours", body: "Every request is read by a person. Mark it urgent and we reply the same business day." },
    { icon: Users, title: "Senior Houston team", body: "Based near the Galleria since 2020, working with clients in person and across the U.S." },
  ];

  return (
    <>
      <SEOHead title={page.seo.title} description={page.seo.description} keywords={page.seo.keywords} url={`${siteConfig.url}${page.path}`} schemas={buildSchemas(page)} />
      <div className="min-h-screen bg-white pb-24 lg:pb-0">
        <LandingHeader cta={page.cta} />
        <main id="main">
          {/* ── HERO + FORM ────────────────────────────────────────────── */}
          <section className="relative overflow-hidden pb-14 pt-10 lg:pb-20 lg:pt-14">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-brand-50/80 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_60%)]"
                style={{ backgroundImage: "linear-gradient(rgb(var(--brand-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--brand-200) / 0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
              />
            </div>
            <Container className="relative grid items-start gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
              <div className="lg:pt-2">
                <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500">
                  {crumbs(page).map((c, i, all) => (
                    <span key={c.path}>
                      {i < all.length - 1 ? (
                        <>
                          <Link to={c.path} className="hover:text-gray-900">{c.name}</Link>
                          <span className="mx-1.5">/</span>
                        </>
                      ) : (
                        <span className="text-gray-900" aria-current="page">{c.name}</span>
                      )}
                    </span>
                  ))}
                </nav>
                {/* The H1 opens with the search phrase this page targets (the pill), then the headline */}
                <h1>
                  <motion.span initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 py-1.5 pl-1.5 pr-4 font-sans tracking-normal">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                      <service.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-semibold text-gray-900">{page.eyebrow}</span>
                  </motion.span>
                  <span className="sr-only">: </span>
                  <motion.span
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08, duration: 0.7, ease: EASE }}
                    className="mt-6 block font-display text-4xl leading-[1.05] text-gray-900 sm:text-5xl xl:text-[3.6rem]"
                  >
                    <Accent text={page.headline} accent={page.accent} />
                  </motion.span>
                </h1>
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7, ease: EASE }} className="service-description mt-5 max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
                  {page.subhead}
                </motion.p>
                <motion.ul initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.7, ease: EASE }} className="mt-7 space-y-3">
                  {page.heroPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[17px] text-gray-800">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </motion.ul>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-gray-100 pt-6 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-600" /> Houston, near the Galleria
                  </span>
                  <span className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-brand-600" /> Founded 2020
                  </span>
                  <a href={TEL} className="flex items-center gap-2 font-semibold text-gray-900 hover:text-brand-600">
                    <Phone className="h-4 w-4 text-brand-600" /> Prefer to talk? {PHONE}
                  </a>
                </motion.div>
              </div>

              {/* Inline form: opens on the project step with this service already chosen */}
              <motion.div
                id="start"
                ref={formRef}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                className="scroll-mt-24 overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_40px_80px_-40px_rgba(15,23,42,0.45)]"
              >
                <div className="ink-island relative overflow-hidden bg-gray-950 px-6 py-5 text-white sm:px-8">
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
                  <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                  <div className="relative flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-300">Free · No obligation</p>
                      <p className="mt-1 font-display text-xl leading-tight">{page.cta}</p>
                    </div>
                    <p className="hidden shrink-0 text-right text-xs text-white/60 sm:block">
                      Reply within
                      <br />
                      <span className="font-display text-lg font-semibold text-white">24 hours</span>
                    </p>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <GuidedContactForm defaultService={service.slug} plan={plan} startAtProject />
                </div>
              </motion.div>
            </Container>
          </section>

          {/* ── FACTS ──────────────────────────────────────────────────── */}
          <section className="border-y border-gray-100 bg-gray-50/60">
            <Container>
              <dl className="grid grid-cols-2 lg:grid-cols-4">
                {facts.map((f, i) => (
                  <motion.div key={f.label} {...stagger(i)} className={cn("py-7 lg:py-9", i % 2 === 1 && "border-l border-gray-100 pl-6", i >= 2 && "border-t border-gray-100 lg:border-t-0", i > 0 && "lg:border-l lg:border-gray-100 lg:pl-8")}>
                    <dd className="font-display text-2xl font-semibold tracking-tight text-gray-900 md:text-3xl">{f.value}</dd>
                    <dt className="mt-1 text-sm text-gray-500">{f.label}</dt>
                  </motion.div>
                ))}
              </dl>
            </Container>
          </section>

          {/* ── PAINS ──────────────────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container>
              <Heading eyebrow="Sound familiar?" title="You're not alone. These are the problems we fix most." />
              <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
                {page.pains.map((p, i) => (
                  <motion.div key={p.title} {...stagger(i)} className="rounded-3xl border border-gray-100 bg-white p-7">
                    <span className="font-display text-sm font-semibold tabular-nums text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-3 font-display text-xl font-semibold text-gray-900">{p.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{p.body}</p>
                  </motion.div>
                ))}
              </div>
              <motion.p {...fadeUp} className="mt-8 flex items-start gap-3 font-display text-xl leading-snug text-gray-900 md:text-2xl">
                <ArrowRight className="mt-1 h-6 w-6 shrink-0 text-brand-600" /> {page.turn}
              </motion.p>
            </Container>
          </section>

          {/* ── OUTCOMES ───────────────────────────────────────────────── */}
          <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container>
              <Heading eyebrow="What you get" title="Everything you walk away with" intro="Delivered by one senior team, tailored to your business, and explained in plain English." />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {page.outcomes.map((o, i) => (
                  <motion.div
                    key={o.title}
                    {...stagger(i)}
                    className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.4)]"
                  >
                    <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                      <o.icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 font-display text-lg font-semibold text-gray-900">{o.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{o.body}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* ── ROADMAP ────────────────────────────────────────────────── */}
          <section className="ink-island relative overflow-hidden bg-gray-950 py-16 text-white lg:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.05]" style={grid} />
            <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-500/10 blur-3xl" />
            <Container className="relative grid gap-12 lg:grid-cols-[0.85fr_1.4fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Heading inverted eyebrow="How getting started works" title="From this page to a plan in a few simple steps" intro={page.roadmapIntro} />
                <CtaButton label={page.cta} className="-mt-2" />
              </div>
              <ol className="relative">
                <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-white/15" />
                {page.roadmap.map((s, i) => (
                  <motion.li key={s.title} {...stagger(i)} className="relative flex gap-6 pb-10 last:pb-0">
                    <span className={cn("relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold", i === 0 ? "bg-brand-500 text-white" : "border border-white/20 bg-gray-950 text-white")}>
                      {i + 1}
                    </span>
                    <div className="flex-1 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{s.when}</p>
                      <h3 className="mt-2 font-display text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/70">{s.body}</p>
                      <p className="mt-4 inline-flex max-w-full items-baseline gap-2 rounded-2xl border border-white/15 px-3 py-1.5 text-xs font-medium leading-snug text-white/80">
                        <span className="shrink-0 whitespace-nowrap text-white/50">Your part:</span> <span>{s.yourPart}</span>
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* ── PREPARE / WE HANDLE ────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container>
              <Heading center eyebrow="Make it effortless" title="What helps, and what we take off your plate" intro="None of the first list is required to get started. If you don't have something yet, we'll help you get it." />
              <div className="grid gap-5 lg:grid-cols-2">
                <motion.div {...stagger(0)} className="rounded-3xl border border-gray-200 bg-white p-7 lg:p-9">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gray-100 text-gray-800">
                      <ClipboardCheck className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-gray-900">Helpful to have ready</h3>
                  </div>
                  <ul className="mt-6 space-y-3.5">
                    {page.prepare.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-[15px] leading-snug text-gray-700">
                        <span className="mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-gray-300" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div {...stagger(1)} className="relative overflow-hidden rounded-3xl bg-brand-600 p-7 text-white lg:p-9">
                  <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={grid} />
                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                        <ShieldCheck className="h-5 w-5" />
                      </span>
                      <h3 className="font-display text-xl font-semibold">What we take care of</h3>
                    </div>
                    <ul className="mt-6 space-y-3.5">
                      {page.weHandle.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-[15px] leading-snug text-white/90">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-brand-600">
                            <Check className="h-3 w-3" />
                          </span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </Container>
          </section>

          {/* ── PACKAGES ───────────────────────────────────────────────── */}
          <section id="plans" className="scroll-mt-24 border-t border-gray-100 bg-gray-50/70 py-14 lg:py-24">
            <Container>
              <Heading
                center
                eyebrow="Packages & pricing"
                title="Clear packages, real prices"
                intro={monthly ? "Every plan is month-to-month. Choose one to add it to your request, or let us recommend the right fit on your free call." : "Every project is scoped in writing with a fixed price. Choose one to add it to your request, or let us recommend the right fit on your free call."}
              />
              <div className="-mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-3 pt-4 [scrollbar-width:none] lg:mx-0 lg:grid lg:grid-cols-3 lg:items-stretch lg:gap-6 lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden">
                {service.tiers.map((t, i) => (
                  <div key={t.name} className="w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-auto">
                    <PackageCard t={t} i={i} selected={plan === t.name} onChoose={() => choose(t)} />
                  </div>
                ))}
              </div>
              <p className="mt-2 text-center text-xs font-medium text-gray-500 lg:hidden">Swipe to compare all {service.tiers.length} packages →</p>
            </Container>
          </section>

          {/* ── PROOF ──────────────────────────────────────────────────── */}
          {(work.length > 0 || (service.research?.length ?? 0) > 0) && (
            <section className="py-14 lg:py-20">
              <Container>
                {work.length > 0 && (
                  <>
                    <Heading eyebrow="Recent work" title="Built by our team" />
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {work.map((c, i) => (
                        <motion.article key={c.slug} {...stagger(i)} className="overflow-hidden rounded-3xl border border-gray-100 bg-white">
                          <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                          </div>
                          <div className="aspect-[16/9] overflow-hidden bg-[#eef1f5]">
                            <img src={c.image} alt={`${c.client} website`} loading="lazy" className="block h-full w-full object-contain" />
                          </div>
                          <div className="p-6">
                            <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">{c.industry}</span>
                            <h3 className="mt-3 font-display text-xl font-semibold text-gray-900">{c.client}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600">{c.summary}</p>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </>
                )}
                {service.research && service.research.length > 0 && (
                  <div className={cn("grid gap-10 md:grid-cols-2 lg:gap-14", work.length > 0 && "mt-16 border-t border-gray-100 pt-14")}>
                    {service.research.map((r, i) => (
                      <motion.figure key={r.label} {...stagger(i)} className="border-t-2 border-brand-600 pt-6">
                        <div className="font-display text-5xl font-semibold tracking-tight text-gray-900 lg:text-6xl">{r.value}</div>
                        <p className="mt-3 max-w-md text-lg leading-relaxed text-gray-700">{r.label}</p>
                        <figcaption className="mt-4 text-xs text-gray-500">
                          Source:{" "}
                          {r.url ? (
                            <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-brand-600">
                              {r.source}
                            </a>
                          ) : (
                            r.source
                          )}
                          , {r.year}
                        </figcaption>
                      </motion.figure>
                    ))}
                  </div>
                )}
              </Container>
            </section>
          )}

          {/* ── ASSURANCES ─────────────────────────────────────────────── */}
          <section className="border-y border-gray-100 bg-gray-50/70 py-12 lg:py-16">
            <Container>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {assurances.map((a, i) => (
                  <motion.div key={a.title} {...stagger(i)} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-gray-100">
                      <a.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">{a.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{a.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* ── FAQ ────────────────────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Heading eyebrow="Before you start" title="Questions people ask first" />
                <div className="-mt-4 hidden rounded-2xl bg-gray-950 p-6 text-white lg:block">
                  <p className="font-display text-lg">Have a different question?</p>
                  <p className="mt-1 text-sm text-white/60">Call us, or send it with your request. You'll hear back within 24 hours.</p>
                  <a href={TEL} className="mt-5 flex h-11 items-center justify-between rounded-full bg-white px-5 text-sm font-semibold text-gray-900">
                    {PHONE} <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                {page.faqs.map((faq, i) => {
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
                      <motion.div initial={false} animate={open ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden" aria-hidden={!open}>
                        <p className="px-5 pb-6 pl-[3.25rem] text-[15px] leading-relaxed text-gray-600 md:px-6 md:pl-14">{faq.answer}</p>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* ── FINAL CTA ──────────────────────────────────────────────── */}
          <section className="px-4 pb-14 sm:px-6 lg:pb-20">
            <div className="ink-island relative mx-auto max-w-[1280px] overflow-hidden rounded-[2rem] bg-gray-950 px-6 py-14 text-center text-white sm:px-12 lg:py-20">
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
              <div aria-hidden className="pointer-events-none absolute -bottom-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl" />
              <div className="relative mx-auto max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Ready when you are</p>
                <h2 className="mt-4 font-display text-3xl leading-[1.1] md:text-5xl">One minute today. A clear plan and price before any work starts.</h2>
                <p className="mt-5 text-lg text-white/65">Tell us what you need and a real person will reach out within 24 hours. No obligation, no pressure.</p>
                <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <CtaButton label={page.cta} className="bg-brand-500 hover:bg-brand-600" />
                  <a href={TEL} className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-7 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900">
                    <Phone className="h-4 w-4" /> {PHONE}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Quiet footer: the full service page, the other ways to get started, legal */}
        <footer className="border-t border-gray-100 pt-10 pb-8">
          <Container className="mb-8 flex flex-col gap-6 border-b border-gray-100 pb-8 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">Want the full details?</p>
              <Link to={service.path} className="mt-2 inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:text-brand-600">
                {service.seo.title} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <nav aria-label="Other ways to get started">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gray-400">Start another project</p>
              <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {startPages
                  .filter((p) => p.path !== page.path)
                  .map((p) => (
                    <li key={p.path}>
                      <Link to={p.path} className="text-gray-600 hover:text-gray-900">{p.eyebrow}</Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </Container>
          <Container className="flex flex-col items-center justify-between gap-3 text-center text-sm text-gray-500 md:flex-row md:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.legalName} · 2100 West Loop S Fwy, Houston, TX 77027</p>
            <nav aria-label="Legal" className="flex gap-5">
              <Link to="/privacy-policy" className="hover:text-gray-900">Privacy</Link>
              <Link to="/terms-of-service" className="hover:text-gray-900">Terms</Link>
              <Link to="/" className="hover:text-gray-900">Main site</Link>
            </nav>
          </Container>
        </footer>
      </div>
      <MobileActionBar cta={page.cta} hidden={formVisible} />
    </>
  );
}
