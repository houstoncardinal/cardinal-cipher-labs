// Industry and Houston landing pages — one premium template for all of them, driven by the
// accurate content in src/lib/landing-pages.ts (no testimonials, no unverifiable claims,
// every statistic sourced).
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Clock, Mail, MapPin, Phone, Plus, type LucideIcon } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container } from "@/components/site/primitives";
import { siteConfig } from "@/lib/seo-config";
import { getService } from "@/lib/services-catalog";
import { getCaseStudies } from "@/lib/case-studies";
import { industries } from "@/lib/industries";
import { faqSchema, webPageSchema } from "@/lib/site-schema";
import { contactHref, rememberService } from "@/lib/contact-intent";
import { houstonLinks, type LandingPage } from "@/lib/landing-pages";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: EASE },
} as const;
const stagger = (i: number) => ({ ...fadeUp, transition: { ...fadeUp.transition, delay: i * 0.07 } });

const WHY_HEADINGS: Record<string, string> = {
  "/industry/financial": "Why financial firms choose Cardinal",
  "/industry/technology": "Why technology & SaaS companies choose Cardinal",
  "/industry/ai-automation": "Why AI & automation companies choose Cardinal",
  "/industry/construction": "Why contractors choose Cardinal",
};

function buildSchemas(page: LandingPage) {
  const url = `${siteConfig.url}${page.path}`;
  const service = getService(page.primaryService);
  return [
    webPageSchema({ url, name: page.seo.title, description: page.seo.description }),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.headline,
      serviceType: service.seo.serviceName,
      description: page.summary,
      url,
      provider: { "@id": `${siteConfig.url}#organization` },
      areaServed: page.kind === "houston" ? { "@type": "City", name: "Houston" } : { "@type": "Country", name: "United States" },
    },
    faqSchema(url, page.faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        page.kind === "houston"
          ? { "@type": "ListItem", position: 2, name: "Web Design Houston", item: `${siteConfig.url}/houston-web-design` }
          : { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
        { "@type": "ListItem", position: 3, name: page.name, item: url },
      ],
    },
  ];
}

/** Headline with its accent phrase in the page's accent color. */
function Headline({ page, className }: { page: LandingPage; className?: string }) {
  const { headline, accent } = page;
  if (!accent || !headline.includes(accent)) return <h1 className={className}>{headline}</h1>;
  const [before, after] = headline.split(accent);
  return (
    <h1 className={className}>
      {before}
      <span className="text-brand-600">{accent}</span>
      {after}
    </h1>
  );
}

/** Section heading: eyebrow, title, optional description. */
function Heading({ eyebrow, title, description, align = "left", dark }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; dark?: boolean }) {
  return (
    <motion.div {...fadeUp} className={cn("mb-10 lg:mb-12", align === "center" && "mx-auto max-w-2xl text-center")}>
      <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", dark ? "text-brand-300" : "text-brand-600")}>{eyebrow}</p>
      <h2 className={cn("mt-3 font-display text-3xl leading-[1.12] md:text-4xl lg:text-[2.75rem]", dark ? "text-white" : "text-gray-900")}>{title}</h2>
      {description && <p className={cn("mt-4 text-lg leading-relaxed", dark ? "text-white/60" : "text-gray-600")}>{description}</p>}
    </motion.div>
  );
}

function pageIcon(page: LandingPage): LucideIcon {
  return industries.find((i) => i.href === page.path)?.icon ?? (page.kind === "houston" ? MapPin : page.features[0]?.icon ?? Check);
}

export function LandingLayout({ page }: { page: LandingPage }) {
  useEffect(() => rememberService(page.primaryService), [page.primaryService]);
  const cta = contactHref({ service: page.primaryService, from: page.path });
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = pageIcon(page);
  const related = page.related.map(getService);
  const work = getCaseStudies(page.caseStudies ?? []);
  const houston = page.kind === "houston";
  const siblings = houston
    ? houstonLinks.filter((l) => l.href !== page.path)
    : industries.filter((i) => i.href !== page.path).map((i) => ({ label: i.name, href: i.href }));
  const startingAt = page.investment[0];

  return (
    <>
      <SEOHead title={page.seo.title} description={page.seo.description} keywords={page.seo.keywords} schemas={buildSchemas(page)} url={`${siteConfig.url}${page.path}`} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* ── HERO ─────────────────────────────────────────────────────── */}
          <section className="relative overflow-hidden border-b border-gray-100 pb-12 pt-24 lg:pb-16 lg:pt-28">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-48 -top-48 h-[620px] w-[620px] rounded-full bg-brand-50/80 blur-3xl" />
              <div className="absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-brand-50/50 blur-3xl" />
              <div
                className="absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_65%)]"
                style={{ backgroundImage: "linear-gradient(rgb(var(--brand-200) / 0.5) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--brand-200) / 0.5) 1px, transparent 1px)", backgroundSize: "56px 56px" }}
              />
            </div>
            <Container className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
              <div>
                <nav aria-label="Breadcrumb" className="mb-5 text-sm text-gray-500">
                  <Link to="/" className="hover:text-gray-900">Home</Link>
                  <span className="mx-1.5">/</span>
                  <Link to={houston ? "/houston-web-design" : "/services"} className="hover:text-gray-900">{houston ? "Web Design Houston" : "Services"}</Link>
                  <span className="mx-1.5">/</span>
                  <span className="text-gray-900">{page.name}</span>
                </nav>
                <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 py-1.5 pl-1.5 pr-4">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-white">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{page.eyebrow}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.7, ease: EASE }}>
                  <Headline page={page} className="font-display text-4xl leading-[1.08] text-gray-900 sm:text-5xl xl:text-6xl" />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.7, ease: EASE }} className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                  {page.summary}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24, duration: 0.7, ease: EASE }} className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to={cta} className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white shadow-[0_14px_30px_-14px_rgb(var(--brand-600)/0.7)] transition-colors hover:bg-brand-700">
                    Get a free consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a href="tel:+12819017016" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gray-900 px-7 font-semibold text-white transition-colors hover:bg-gray-800">
                    <Phone className="h-4 w-4" /> (281) 901-7016
                  </a>
                </motion.div>
                <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.34 }} className="mt-7 grid gap-x-6 gap-y-2 text-sm text-gray-600 sm:grid-cols-2">
                  {page.atAGlance.slice(0, 4).map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {b}
                    </li>
                  ))}
                </motion.ul>
              </div>

              {/* At a glance */}
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
                className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_40px_80px_-40px_rgba(17,24,39,0.35)]"
              >
                <div className="flex items-center gap-3 border-b border-gray-100 bg-brand-50/60 px-6 py-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-brand-600 shadow-sm">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-700">At a glance</p>
                    <p className="font-semibold text-gray-900">{page.name}</p>
                  </div>
                </div>
                {page.facts && (
                  <dl className="grid grid-cols-2">
                    {page.facts.map((f, i) => (
                      <div key={f.label} className={cn("px-5 py-5 sm:px-6", i % 2 === 1 && "border-l border-gray-100", i > 1 && "border-t border-gray-100")}>
                        <dd className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{f.value}</dd>
                        <dt className="mt-1 text-xs text-gray-500">{f.label}</dt>
                      </div>
                    ))}
                  </dl>
                )}
                {startingAt && (
                  <a href="#pricing" className="group flex items-center justify-between gap-4 border-t border-gray-100 px-6 py-4 transition-colors hover:bg-gray-50">
                    <span className="text-sm text-gray-600">
                      {startingAt.label} <strong className="font-semibold text-gray-900">{startingAt.value.toLowerCase().startsWith("from") ? startingAt.value.toLowerCase() : startingAt.value}</strong>
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                      Pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                )}
              </motion.aside>
            </Container>
          </section>

          {/* ── CHALLENGES ───────────────────────────────────────────────── */}
          <section className="py-14 lg:py-20">
            <Container className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Heading eyebrow="Sound familiar?" title="The problems we solve" description={`What usually holds ${page.name.toLowerCase()} websites back — and what we fix first.`} />
              </div>
              <ol className="divide-y divide-gray-100 border-y border-gray-100">
                {page.challenges.map((c, i) => (
                  <motion.li key={c} {...stagger(i)} className="group flex gap-5 py-5">
                    <span className="font-display text-sm font-semibold tabular-nums text-brand-600">{String(i + 1).padStart(2, "0")}</span>
                    <p className="text-[17px] leading-relaxed text-gray-800">{c}</p>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* ── FEATURES ─────────────────────────────────────────────────── */}
          <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container>
              <Heading
                eyebrow="What we build"
                title={houston ? `${page.name} features that convert` : `${page.name} solutions`}
                description={houston ? "Everything your website needs to win customers in Houston, built and tested by our team." : "Websites, marketing, and technology built around how your industry works."}
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                {page.features.map((f, i) => (
                  <motion.div key={f.title} {...stagger(i)} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.4)] lg:p-7">
                    <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-brand-600 transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="flex items-start justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-500 group-hover:bg-brand-600 group-hover:text-white">
                        <f.icon className="h-5 w-5" />
                      </span>
                      <span className="font-display text-xs font-semibold tabular-nums text-gray-300">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="mt-5 font-display text-lg font-semibold text-gray-900">{f.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-600">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* ── INDUSTRY DETAILS (dark band) ─────────────────────────────── */}
          <section className="relative overflow-hidden bg-gray-950 py-14 text-white lg:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
            <Container className="relative grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
              <div>
                <Heading dark eyebrow="Built for your industry" title={houston ? "The details that matter" : WHY_HEADINGS[page.path] ?? `Why ${page.name} businesses choose Cardinal`} />
                <ul className="-mt-4 space-y-3">
                  {[...page.atAGlance, "Houston-based team — local expertise, national reach"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/80">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {page.considerations && page.considerations.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2">
                  {page.considerations.map((c, i) => (
                    <motion.div key={c.title} {...stagger(i)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                      <span className="mb-4 block h-px w-10 bg-brand-400" />
                      <h3 className="font-display text-lg font-semibold text-white">{c.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/60">{c.body}</p>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div {...fadeUp} className="self-center rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                  <p className="font-display text-2xl leading-snug text-white">Tell us about your goals and get a clear written plan and price.</p>
                  <p className="mt-3 text-white/60">Free consultation, no obligation.</p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link to={cta} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 font-semibold text-white transition-colors hover:bg-brand-600">
                      Schedule a consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:281-901-7016" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 font-semibold text-white transition-colors hover:bg-white/10">
                      <Phone className="h-4 w-4" /> (281) 901-7016
                    </a>
                  </div>
                </motion.div>
              )}
            </Container>
          </section>

          {/* ── RESEARCH ─────────────────────────────────────────────────── */}
          {page.research && page.research.length > 0 && (
            <section className="py-14 lg:py-20">
              <Container>
                <Heading eyebrow="What the research says" title={houston ? "Why your website matters" : "The numbers behind it"} />
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                  {page.research.map((r, i) => (
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

          {/* ── WORK ─────────────────────────────────────────────────────── */}
          {work.length > 0 && (
            <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
              <Container>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <Heading eyebrow="Selected work" title={houston ? "Websites we've built" : "Work in your space"} />
                  <Link to="/portfolio" className="mb-10 inline-flex shrink-0 items-center gap-1 font-semibold text-brand-600 hover:text-brand-700 lg:mb-12">
                    View the full portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {work.map((c, i) => (
                    <motion.article key={c.slug} {...stagger(i)} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-shadow duration-500 hover:shadow-[0_30px_60px_-36px_rgba(17,24,39,0.45)]">
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

          {/* ── PRICING ──────────────────────────────────────────────────── */}
          <section id="pricing" className="scroll-mt-24 py-14 lg:py-20">
            <Container>
              <Heading align="center" eyebrow="Transparent pricing" title="Clear starting prices" description="Every project is scoped after a free consultation, and you approve a written price before any work begins." />
              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3 lg:gap-5">
                {page.investment.map((inv, i) => (
                  <motion.div
                    key={inv.label}
                    {...stagger(i)}
                    className={cn(
                      "relative rounded-2xl border p-7",
                      i === 0 ? "border-brand-600 bg-white shadow-[0_30px_60px_-34px_rgb(var(--brand-600)/0.45)]" : "border-gray-100 bg-white",
                    )}
                  >
                    {i === 0 && <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Start here</span>}
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{inv.label}</p>
                    <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-gray-900 lg:text-4xl">{inv.value}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{inv.note}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to={cta} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white transition-colors hover:bg-brand-700">
                  Get your free quote <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="inline-flex h-12 items-center justify-center rounded-full border border-gray-200 px-7 font-semibold text-gray-800 transition-colors hover:border-gray-400">
                  See the full pricing guide
                </Link>
              </div>
            </Container>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────────── */}
          <section className="border-t border-gray-100 bg-gray-50/70 py-14 lg:py-20">
            <Container className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-16">
              <div className="lg:sticky lg:top-28 lg:self-start">
                <Heading eyebrow="FAQ" title={`${page.name} questions, answered`} />
                <div className="-mt-4 hidden rounded-2xl bg-gray-900 p-6 text-white lg:block">
                  <p className="font-display text-lg">Still have a question?</p>
                  <p className="mt-1 text-sm text-white/60">Talk to our team — you'll hear back within hours, not days.</p>
                  <Link to={cta} className="mt-5 flex h-11 items-center justify-between rounded-full bg-white px-5 text-sm font-semibold text-gray-900">
                    Contact our team <ArrowRight className="h-4 w-4" />
                  </Link>
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

          {/* ── AREAS (Houston pages) ────────────────────────────────────── */}
          {page.neighborhoods && (
            <section className="py-12 lg:py-16">
              <Container className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Areas we serve</p>
                  <h2 className="mt-3 font-display text-2xl text-gray-900 lg:text-3xl">Houston and beyond</h2>
                  <p className="mt-3 text-gray-600">Headquartered at 2100 West Loop S Fwy. We meet clients across greater Houston and work with businesses nationwide.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {page.neighborhoods.map((n) => (
                    <span key={n} className="rounded-full border border-gray-200 px-3.5 py-1.5 text-sm text-gray-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700">{n}</span>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* ── EXPLORE ──────────────────────────────────────────────────── */}
          <section className="border-t border-gray-100 py-14 lg:py-20">
            <Container>
              <Heading eyebrow="Explore further" title="Related services" />
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((s, i) => (
                  <motion.div key={s.slug} {...stagger(i)}>
                    <Link to={s.path} className="group flex h-full flex-col rounded-2xl border border-gray-100 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_24px_50px_-34px_rgba(17,24,39,0.4)]">
                      <div className="flex items-center justify-between">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-700 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
                          <s.icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight className="h-5 w-5 text-gray-300 transition-all group-hover:rotate-45 group-hover:text-brand-600" />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold text-gray-900">{s.name}</h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{s.summary}</p>
                      <p className="mt-4 text-sm font-semibold text-gray-900">{s.startingAt === "Custom" ? "Custom quote" : `From ${s.startingAt}`}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 border-t border-gray-100 pt-8">
                <p className="mb-4 text-sm font-semibold text-gray-900">{houston ? "More Houston web design" : "Other industries we serve"}</p>
                <div className="flex flex-wrap gap-2">
                  {siblings.map((l) => (
                    <Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-300 hover:text-brand-700">
                      {l.label} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* ── CTA ──────────────────────────────────────────────────────── */}
          <section className="pb-14 lg:pb-20">
            <Container>
              <motion.div {...fadeUp} className="relative overflow-hidden rounded-3xl bg-gray-950 px-6 py-12 text-center sm:px-12 lg:py-16">
                <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
                <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />
                <div className="relative">
                  <h2 className="mx-auto max-w-3xl font-display text-3xl leading-tight text-white md:text-4xl lg:text-5xl">{houston ? "Ready to grow your business online?" : "Ready to build what's next?"}</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-white/60">Book a free consultation. We'll review your goals and current website, then send a clear written plan and price — no obligation.</p>
                  <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <Link to={cta} className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 font-semibold text-white transition-colors hover:bg-brand-600">
                      Get a free consultation <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="tel:+12819017016" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-7 font-semibold text-white transition-colors hover:bg-white/10">
                      <Phone className="h-4 w-4" /> (281) 901-7016
                    </a>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-white/50">
                    <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />2100 West Loop S Fwy, Houston, TX 77027</span>
                    <span className="flex items-center gap-2"><Mail className="h-4 w-4" />Hunain@visitcardinal.com</span>
                    <span className="flex items-center gap-2"><Clock className="h-4 w-4" />Mon–Fri 9AM–6PM CST</span>
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

/** Route entry points (kept so AppRoutes doesn't change); both use the same premium template. */
export const HoustonClassicLayout = LandingLayout;
export const IndustryClassicLayout = LandingLayout;
