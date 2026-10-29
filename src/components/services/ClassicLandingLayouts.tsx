// Classic page designs for the Houston and industry landing pages — the original look of
// those pages, now driven by the accurate content in src/lib/landing-pages.ts (no
// testimonials, no unverifiable claims, every statistic sourced).
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { siteConfig } from "@/lib/seo-config";
import { getService } from "@/lib/services-catalog";
import { getCaseStudies } from "@/lib/case-studies";
import { faqSchema, webPageSchema } from "@/lib/site-schema";
import { contactHref, rememberService } from "@/lib/contact-intent";
import { houstonLinks, type LandingPage } from "@/lib/landing-pages";

const WHY_HEADINGS: Record<string, string> = {
  "/industry/financial": "Why financial firms choose Cardinal",
  "/industry/technology": "Why technology & SaaS companies choose Cardinal",
  "/industry/ai-automation": "Why AI & automation companies choose Cardinal",
  "/industry/construction": "Why contractors choose Cardinal",
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
} as const;

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

/** Headline with its accent phrase in red. */
function Headline({ page, className }: { page: LandingPage; className?: string }) {
  const { headline, accent } = page;
  if (!accent || !headline.includes(accent)) return <h1 className={className}>{headline}</h1>;
  const [before, after] = headline.split(accent);
  return (
    <h1 className={className}>
      {before}
      <span className="text-red-600">{accent}</span>
      {after}
    </h1>
  );
}

function usePageSetup(page: LandingPage) {
  useEffect(() => rememberService(page.primaryService), [page.primaryService]);
  return contactHref({ service: page.primaryService, from: page.path });
}

function Seo({ page }: { page: LandingPage }) {
  return (
    <SEOHead
      title={page.seo.title}
      description={page.seo.description}
      keywords={page.seo.keywords}
      schemas={buildSchemas(page)}
      url={`${siteConfig.url}${page.path}`}
    />
  );
}

function ResearchCards({ page }: { page: LandingPage }) {
  if (!page.research?.length) return null;
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {page.research.map((r, i) => (
        <motion.figure key={r.label} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-gray-100 bg-white p-8">
          <div className="font-serif text-5xl font-bold text-red-600">{r.value}</div>
          <p className="mt-4 text-gray-700">{r.label}</p>
          <figcaption className="mt-5 border-t border-gray-100 pt-4 text-xs text-gray-500">
            Source:{" "}
            {r.url ? (
              <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-red-600">{r.source}</a>
            ) : (
              r.source
            )}
            , {r.year}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

function WorkCards({ page }: { page: LandingPage }) {
  const work = getCaseStudies(page.caseStudies ?? []);
  if (!work.length) return null;
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {work.map((c, i) => (
        <motion.div key={c.slug} {...fadeUp} transition={{ delay: i * 0.1 }} className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
          <div className="aspect-[16/9] w-full bg-[#eef1f5]">
            <img src={c.image} alt={`${c.client} website`} loading="lazy" className="block h-full w-full object-contain" />
          </div>
          <div className="p-6">
            <span className="mb-3 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">{c.industry}</span>
            <h3 className="font-serif text-xl font-bold text-gray-900">{c.client}</h3>
            <p className="mt-2 text-sm text-gray-500">{c.summary}</p>
            {c.detail && (
              <Link to={`/portfolio/${c.slug}`} data-cursor="View case study" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
                Read the case study <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Investment({ page, cta, rounded }: { page: LandingPage; cta: string; rounded: "full" | "xl" }) {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        {page.investment.map((inv, i) => (
          <motion.div key={inv.label} {...fadeUp} transition={{ delay: i * 0.1 }} className={`rounded-2xl border p-8 ${i === 0 ? "border-red-200 bg-white shadow-lg" : "border-gray-100 bg-white"}`}>
            <span className="text-xs font-bold uppercase tracking-wider text-red-600">{inv.label}</span>
            <div className="mt-3 font-serif text-4xl font-bold text-gray-900">{inv.value}</div>
            <p className="mt-3 text-sm text-gray-500">{inv.note}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link to={cta} className={`inline-flex items-center gap-2 bg-red-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700 ${rounded === "full" ? "rounded-full" : "rounded-xl"}`}>
          Get your free quote <ArrowRight className="h-4 w-4" />
        </Link>
        <Link to="/pricing" className={`inline-flex items-center gap-2 border border-gray-200 px-8 py-4 font-semibold text-gray-700 transition-colors hover:border-gray-300 ${rounded === "full" ? "rounded-full" : "rounded-xl"}`}>
          See the full pricing guide
        </Link>
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Houston pages — classic design
// ─────────────────────────────────────────────────────────────────────────────
export function HoustonClassicLayout({ page }: { page: LandingPage }) {
  const cta = usePageSetup(page);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = page.related.map(getService);
  const otherHouston = houstonLinks.filter((l) => l.href !== page.path);

  return (
    <>
      <Seo page={page} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* HERO */}
          <section className="relative overflow-hidden pb-20 pt-32 lg:pb-28 lg:pt-40">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>
            <div className="container relative mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-100 bg-red-50 px-4 py-2">
                <MapPin className="h-4 w-4 text-red-600" />
                <span className="text-sm font-semibold text-gray-900">{page.eyebrow} · Free consultation</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                <Headline page={page} className="mb-6 max-w-5xl font-serif text-4xl leading-[1.1] text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl" />
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-10 max-w-2xl text-lg text-gray-500 lg:text-xl">
                {page.summary}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-12 flex flex-wrap gap-4">
                <Link to={cta} className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700">
                  Get a free consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition-colors hover:bg-gray-800">
                  <Phone className="h-4 w-4" /> Call (281) 901-7016
                </a>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500">
                {page.atAGlance.slice(0, 4).map((b) => (
                  <span key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" />{b}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          {page.facts && (
            <section className="bg-gray-900 py-12">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
                  {page.facts.map((f, i) => (
                    <motion.div key={f.label} {...fadeUp} transition={{ delay: i * 0.1 }}>
                      <div className="mb-2 font-serif text-3xl font-bold text-white lg:text-5xl">{f.value}</div>
                      <div className="text-sm text-gray-400">{f.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CHALLENGES */}
          <section className="bg-white pb-8 pt-24">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div {...fadeUp} className="mb-12 text-center">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">Sound familiar?</span>
                <h2 className="font-serif text-3xl text-gray-900 lg:text-5xl">The problems we solve</h2>
              </motion.div>
              <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
                {page.challenges.map((c, i) => (
                  <motion.div key={c} {...fadeUp} transition={{ delay: i * 0.08 }} className="flex gap-4 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{i + 1}</span>
                    <p className="text-gray-700">{c}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div {...fadeUp} className="mb-16 text-center">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">What we build</span>
                <h2 className="mb-4 font-serif text-3xl text-gray-900 lg:text-5xl">{page.name} features that convert</h2>
                <p className="mx-auto max-w-2xl text-gray-500">Everything your website needs to win customers in Houston, built and tested by our team.</p>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {page.features.map((f, i) => (
                  <motion.div key={f.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all hover:border-red-100 hover:shadow-lg">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-50">
                      <f.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">{f.title}</h3>
                    <p className="text-sm text-gray-500">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INDUSTRY CONSIDERATIONS */}
          {page.considerations && page.considerations.length > 0 && (
            <section className="bg-gray-50 py-24">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div {...fadeUp} className="mb-16 text-center">
                  <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">Built for your industry</span>
                  <h2 className="font-serif text-3xl text-gray-900 lg:text-5xl">The details that matter</h2>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {page.considerations.map((c, i) => (
                    <motion.div key={c.title} {...fadeUp} transition={{ delay: i * 0.1 }} className="rounded-2xl border border-gray-100 bg-white p-8">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-50">
                        <Check className="h-5 w-5 text-red-600" />
                      </div>
                      <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">{c.title}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{c.body}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* RESEARCH */}
          {page.research && page.research.length > 0 && (
            <section className="bg-white py-24">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div {...fadeUp} className="mb-16 text-center">
                  <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">What the research says</span>
                  <h2 className="font-serif text-3xl text-gray-900 lg:text-5xl">Why your website matters</h2>
                </motion.div>
                <div className="mx-auto max-w-5xl">
                  <ResearchCards page={page} />
                </div>
              </div>
            </section>
          )}

          {/* WORK */}
          {page.caseStudies && page.caseStudies.length > 0 && (
            <section className="bg-gray-50 py-24">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div {...fadeUp} className="mb-16 text-center">
                  <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">Selected work</span>
                  <h2 className="mb-4 font-serif text-3xl text-gray-900 lg:text-5xl">Websites we've built</h2>
                  <Link to="/portfolio" className="inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700">
                    View the full portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <WorkCards page={page} />
              </div>
            </section>
          )}

          {/* PRICING */}
          <section className="bg-white py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div {...fadeUp} className="mb-16 text-center">
                <span className="mb-3 block text-sm font-semibold uppercase tracking-wider text-red-600">Transparent pricing</span>
                <h2 className="mb-4 font-serif text-3xl text-gray-900 lg:text-5xl">Clear starting prices</h2>
                <p className="mx-auto max-w-2xl text-gray-500">Every project is scoped after a free consultation, and you approve a written price before any work begins.</p>
              </motion.div>
              <div className="mx-auto max-w-5xl">
                <Investment page={page} cta={cta} rounded="full" />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-50 py-24">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div {...fadeUp} className="mb-16 text-center">
                <h2 className="mb-4 font-serif text-3xl text-gray-900 lg:text-5xl">{page.name} — FAQ</h2>
              </motion.div>
              <div className="mx-auto max-w-3xl space-y-4">
                {page.faqs.map((faq, i) => (
                  <motion.div key={faq.question} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
                    <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left">
                      <span className="pr-4 font-semibold text-gray-900">{faq.question}</span>
                      <ChevronDown className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    <div className={openFaq === i ? "px-6 pb-6" : "hidden"}>
                      <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NEIGHBORHOODS */}
          {page.neighborhoods && (
            <section className="bg-white py-20">
              <div className="container mx-auto px-6 lg:px-12">
                <motion.div {...fadeUp} className="mb-12 text-center">
                  <h2 className="mb-4 font-serif text-2xl text-gray-900 lg:text-4xl">Serving Houston businesses and beyond</h2>
                  <p className="text-gray-500">Headquartered at 2100 West Loop S Fwy. We meet clients across the greater Houston area and work with businesses nationwide remotely.</p>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                  {page.neighborhoods.map((n) => (
                    <span key={n} className="rounded-full border border-gray-100 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-red-100 hover:bg-red-50 hover:text-red-600">{n}</span>
                  ))}
                </motion.div>
              </div>
            </section>
          )}

          {/* RELATED */}
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div {...fadeUp} className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-2xl text-gray-900 lg:text-4xl">Related services</h2>
              </motion.div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((s, i) => (
                  <motion.div key={s.slug} {...fadeUp} transition={{ delay: i * 0.1 }}>
                    <Link to={s.path} className="group block h-full rounded-2xl border border-gray-100 bg-white p-6 transition-all hover:border-red-100 hover:shadow-lg">
                      <span className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">{s.group === "Advise" ? "Advise & Support" : s.group}</span>
                      <h3 className="mb-2 font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-red-600">{s.name}</h3>
                      <p className="text-sm text-gray-500">{s.summary}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {otherHouston.map((l) => (
                  <Link key={l.href} to={l.href} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-red-300 hover:text-red-600">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="relative overflow-hidden bg-gray-900 py-24">
            <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)" }} />
            <div className="container relative mx-auto px-6 text-center lg:px-12">
              <motion.div {...fadeUp}>
                <h2 className="mb-6 font-serif text-3xl text-white lg:text-5xl">Ready to grow your business online?</h2>
                <p className="mx-auto mb-10 max-w-2xl text-gray-400">Book a free consultation. We'll review your goals and current website, and send a clear written plan and price — no obligation.</p>
                <div className="mb-10 flex flex-wrap justify-center gap-4">
                  <Link to={cta} className="inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-semibold text-white transition-colors hover:bg-red-700">
                    Get a free consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href="tel:+12819017016" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/20">
                    <Phone className="h-4 w-4" /> Call (281) 901-7016
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><MapPin className="h-4 w-4" />2100 West Loop S Fwy, Houston, TX 77027</span>
                  <span className="flex items-center gap-2"><Mail className="h-4 w-4" />Hunain@visitcardinal.com</span>
                  <span className="flex items-center gap-2"><Clock className="h-4 w-4" />Mon–Fri 9AM–6PM CST</span>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Industry pages — classic design
// ─────────────────────────────────────────────────────────────────────────────
export function IndustryClassicLayout({ page }: { page: LandingPage }) {
  const cta = usePageSetup(page);
  const BadgeIcon = page.features[0]?.icon ?? Check;
  const related = page.related.map(getService);
  const links = [
    ...related.map((s) => ({ label: s.name, href: s.path })),
    { label: "Web Design Houston", href: "/houston-web-design" },
    { label: "Pricing", href: "/pricing" },
    { label: "Our Work", href: "/portfolio" },
  ].slice(0, 6);

  return (
    <>
      <Seo page={page} />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mx-auto max-w-4xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2">
                  <BadgeIcon className="h-4 w-4 text-red-600" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-red-600">{page.name}</span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                  <Headline page={page} className="mb-6 font-serif text-5xl leading-tight text-gray-900 md:text-6xl lg:text-7xl" />
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mb-10 max-w-2xl text-xl text-gray-600">
                  {page.summary}
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link to={cta} className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700">
                    Get free consultation <ArrowRight size={18} />
                  </Link>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 px-8 py-4 font-semibold uppercase tracking-wider text-gray-700 transition-all hover:border-gray-300">
                    View portfolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats */}
          {page.facts && (
            <section className="bg-red-600 py-12">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                  {page.facts.map((f) => (
                    <div key={f.label}>
                      <div className="font-serif text-3xl font-bold text-white md:text-4xl">{f.value}</div>
                      <div className="mt-1 text-sm text-red-100">{f.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Solutions */}
          <section className="bg-white py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-16 text-center">
                <h2 className="mb-4 font-serif text-4xl text-gray-900 md:text-5xl">{page.name} solutions</h2>
                <p className="mx-auto max-w-2xl text-gray-600">Websites, marketing, and technology built around how your industry works.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {page.features.map((f, i) => (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl border border-gray-100 p-8 transition-all hover:border-red-100 hover:shadow-lg">
                    <f.icon className="mb-4 h-10 w-10 text-red-600" />
                    <h3 className="mb-3 font-serif text-xl text-gray-900">{f.title}</h3>
                    <p className="text-gray-600">{f.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why choose + CTA card */}
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 className="mb-6 font-serif text-4xl text-gray-900">{WHY_HEADINGS[page.path] ?? `Why ${page.name} businesses choose Cardinal`}</h2>
                  <div className="space-y-4">
                    {[...page.atAGlance, "Houston-based team — local expertise, national reach"].map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-red-600" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <h3 className="mb-4 font-serif text-2xl text-gray-900">Ready to grow?</h3>
                  <p className="mb-6 text-gray-600">Tell us about your goals and get a clear written plan and price. Free consultation, no obligation.</p>
                  <div className="space-y-3">
                    <Link to={cta} className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700">
                      Schedule free consultation <ArrowRight size={16} />
                    </Link>
                    <a href="tel:281-901-7016" className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition-all hover:border-red-200">
                      <Phone size={16} className="text-red-600" /> (281) 901-7016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Industry considerations */}
          {page.considerations && page.considerations.length > 0 && (
            <section className="bg-white py-20">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 font-serif text-4xl text-gray-900">Built for your industry</h2>
                  <p className="mx-auto max-w-2xl text-gray-600">The requirements we design around — with final review by your team.</p>
                </div>
                <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                  {page.considerations.map((c) => (
                    <div key={c.title} className="rounded-xl border border-gray-100 p-6">
                      <h3 className="mb-3 font-semibold text-gray-900">{c.title}</h3>
                      <p className="leading-relaxed text-gray-600">{c.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Research */}
          {page.research && page.research.length > 0 && (
            <section className="bg-gray-50 py-20">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 font-serif text-4xl text-gray-900">What the research says</h2>
                </div>
                <div className="mx-auto max-w-5xl">
                  <ResearchCards page={page} />
                </div>
              </div>
            </section>
          )}

          {/* Work */}
          {page.caseStudies && page.caseStudies.length > 0 && (
            <section className="bg-white py-20">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 font-serif text-4xl text-gray-900">Selected work</h2>
                </div>
                <WorkCards page={page} />
              </div>
            </section>
          )}

          {/* Pricing */}
          <section className="bg-gray-50 py-20">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-4xl text-gray-900">Transparent starting prices</h2>
                <p className="mx-auto max-w-2xl text-gray-600">Every project is scoped after a free consultation, and you approve a written price before work begins.</p>
              </div>
              <div className="mx-auto max-w-5xl">
                <Investment page={page} cta={cta} rounded="xl" />
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white py-20">
            <div className="container mx-auto max-w-3xl px-6 lg:px-12">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-serif text-4xl text-gray-900">{page.name} FAQs</h2>
                <p className="text-gray-600">Common questions about websites, marketing, and technology in your industry</p>
              </div>
              <div className="space-y-6">
                {page.faqs.map((faq, i) => (
                  <motion.div key={faq.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="rounded-xl border border-gray-100 p-6">
                    <h3 className="mb-3 font-semibold text-gray-900">{faq.question}</h3>
                    <p className="leading-relaxed text-gray-600">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Internal links */}
          <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="mb-8 text-center font-serif text-2xl text-gray-900">Explore our services</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                {links.map((l) => (
                  <Link key={l.href} to={l.href} className="flex items-center justify-center gap-1 rounded-xl border border-gray-200 p-3 text-center text-sm font-medium text-gray-700 transition-all hover:border-red-200 hover:bg-red-50">
                    {l.label} <ArrowRight className="h-3 w-3 flex-shrink-0 text-red-600" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 py-20">
            <div className="container mx-auto px-6 text-center lg:px-12">
              <h2 className="mb-6 font-serif text-4xl text-white md:text-5xl">Ready to transform your online presence?</h2>
              <p className="mx-auto mb-10 max-w-2xl text-gray-400">Let's talk about how Cardinal Consulting can help your business win more customers online.</p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to={cta} className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700">
                  Get started today <ArrowRight size={18} />
                </Link>
                <a href="tel:281-901-7016" className="inline-flex items-center gap-2 rounded-xl border border-gray-600 px-8 py-4 font-semibold text-white transition-all hover:border-white">
                  <Phone size={18} /> (281) 901-7016
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer showCta={false} />
      </div>
    </>
  );
}
