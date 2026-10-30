import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Briefcase } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container } from "@/components/site/primitives";
import { CountUp } from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo-config";
import { generatePortfolioSchemas, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import { caseStudies, type CaseStudy } from "@/lib/case-studies";
import { services } from "@/lib/services-catalog";

const ALL = "All work";

/** Screenshot inside a browser frame, always shown whole (never cropped or stretched). */
function Shot({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-gray-200/80 bg-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.4)]", className)}>
      <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        <span className="h-2 w-2 rounded-full bg-gray-300" />
        {study.url && <span className="ml-3 truncate text-[11px] text-gray-400">{study.url.replace(/^https?:\/\/(www\.)?/, "")}</span>}
      </div>
      <div className="aspect-[16/9] bg-[#eef1f5]">
        <img src={study.image} alt={`${study.client} website`} loading="lazy" className="block h-full w-full object-contain" />
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const [filter, setFilter] = useState(ALL);
  const spotlight = caseStudies.find((c) => c.featured && c.detail) ?? caseStudies[0];
  const rest = useMemo(() => caseStudies.filter((c) => c.slug !== spotlight.slug), [spotlight.slug]);
  const industries = useMemo(() => {
    const counts = new Map<string, number>();
    rest.forEach((c) => counts.set(c.industry, (counts.get(c.industry) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [rest]);
  const visible = filter === ALL ? rest : rest.filter((c) => c.industry === filter);
  const industryCount = new Set(caseStudies.map((c) => c.industry)).size;

  const schemas = [
    ...generatePortfolioSchemas(),
    generateWebPageSchema({
      name: "Our Work — Cardinal Consulting",
      description: "Client websites, platforms, and case studies across AI consulting, enterprise technology, financial services, healthcare, legal, construction, real estate, and luxury services.",
      url: `${siteConfig.url}/portfolio`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Our Work", url: `${siteConfig.url}/portfolio` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/portfolio`,
      name: "Cardinal Consulting Portfolio",
      description: "Case studies and client work from Cardinal Consulting.",
      url: `${siteConfig.url}/portfolio`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: caseStudies.length,
        itemListElement: caseStudies.map((cs, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: { "@type": "CreativeWork", name: cs.client, description: cs.summary, ...(cs.url ? { url: cs.url } : {}), creator: { "@id": `${siteConfig.url}#organization` } },
        })),
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="Our Work — Websites & Case Studies"
        description="Client websites, platforms and case studies from Cardinal Consulting across AI consulting, enterprise IT, finance, healthcare, legal, construction and real estate."
        url={`${siteConfig.url}/portfolio`}
        schemas={schemas}
        keywords={["web design portfolio", "website case studies", "enterprise website examples", "Houston web design portfolio", "client work"]}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* HERO — light, two-column, matching the service pages */}
          <section className="relative overflow-hidden border-b border-gray-100 pb-12 pt-24 lg:pb-16 lg:pt-28">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-brand-50/70 blur-3xl" />
              <div className="absolute -bottom-48 -left-40 h-[460px] w-[460px] rounded-full bg-brand-50/40 blur-3xl" />
            </div>
            <Container className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
              <div>
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-100 bg-brand-50 px-4 py-2">
                  <Briefcase className="h-4 w-4 text-brand-600" />
                  <span className="text-sm font-semibold text-gray-900">Our work · {industryCount} industries</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="font-display text-4xl leading-[1.08] text-gray-900 sm:text-5xl lg:text-6xl">
                  Work that moves <span className="text-brand-600">organizations forward</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600">
                  Enterprise website platforms, lead-generation engines, and premium brand experiences — designed, built, and optimized by our team.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-wrap gap-3">
                  <a href="#all-work" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-600 px-7 font-semibold text-white transition-colors hover:bg-brand-700">
                    Browse all work <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link to="/contact" className="inline-flex h-12 items-center rounded-full bg-gray-900 px-7 font-semibold text-white transition-colors hover:bg-gray-800">
                    Start your project
                  </Link>
                </motion.div>
                <motion.dl initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.32 }} className="mt-8 grid max-w-md grid-cols-3 gap-4 border-t border-gray-200 pt-5">
                  {[
                    { value: `${caseStudies.length}`, label: "Client projects" },
                    { value: `${industryCount}`, label: "Industries" },
                    { value: `${caseStudies.filter((c) => c.detail).length}`, label: "Case studies" },
                  ].map((st) => (
                    <div key={st.label}>
                      <dd className="font-display text-2xl font-semibold text-gray-900 md:text-3xl"><CountUp value={st.value} /></dd>
                      <dt className="mt-0.5 text-sm text-gray-500">{st.label}</dt>
                    </div>
                  ))}
                </motion.dl>
              </div>

              {/* A fanned stack of real client sites */}
              <div className="group relative mx-auto hidden h-[340px] w-full max-w-[520px] md:block xl:h-[380px]" aria-hidden>
                {caseStudies.slice(0, 3).map((c, i) => {
                  const place = ["left-0 top-10", "right-0 top-0", "left-[11%] top-20 z-10"][i];
                  const pose = [
                    "-rotate-6 group-hover:-translate-x-6 group-hover:-rotate-[9deg]",
                    "rotate-[5deg] group-hover:translate-x-6 group-hover:rotate-[8deg]",
                    "group-hover:-translate-y-3",
                  ][i];
                  return (
                    <motion.div
                      key={c.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className={cn("absolute w-[78%]", place)}
                    >
                      <div className={cn("transition-transform duration-700 ease-out", pose)}>
                        <Shot study={c} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>

          {/* SPOTLIGHT */}
          <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-14 lg:py-20">
            <Container>
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-primary">Featured case study</p>
              <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
                <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                  <Link to={spotlight.detail ? `/portfolio/${spotlight.slug}` : "/portfolio"} data-cursor="View case study" className="block transition-transform duration-500 hover:-translate-y-1">
                    <Shot study={spotlight} />
                  </Link>
                </motion.div>
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{spotlight.industry}</span>
                  <h2 className="mt-5 font-display text-3xl leading-tight text-foreground md:text-4xl">{spotlight.client}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-text-secondary">{spotlight.summary}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {spotlight.tags.map((t) => (
                      <span key={t} className="rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-600">{t}</span>
                    ))}
                  </div>
                  <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
                    {spotlight.metrics.map((m) => (
                      <div key={m.label}>
                        <dd className="font-display text-xl font-semibold text-foreground md:text-2xl">{m.value}</dd>
                        <dt className="mt-1 text-xs text-muted-foreground">{m.label}</dt>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 flex flex-wrap items-center gap-6">
                    {spotlight.detail && (
                      <Link to={`/portfolio/${spotlight.slug}`} className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
                        Read the case study <ArrowRight className="h-4 w-4" />
                      </Link>
                    )}
                    {spotlight.url && (
                      <a href={spotlight.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-foreground hover:text-primary">
                        Visit live site <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* FILTER + GRID */}
          <section id="all-work" className="scroll-mt-20 pb-14 lg:pb-24">
            <div className="sticky top-[72px] z-30 border-b border-gray-100 bg-white/90 backdrop-blur">
              <Container>
                <div role="group" aria-label="Filter by industry" className="-mx-1 flex gap-2 overflow-x-auto px-1 py-4 [scrollbar-width:none]">
                  {[[ALL, rest.length] as [string, number], ...industries].map(([name, count]) => (
                    <button
                      key={name}
                      type="button"
                      aria-pressed={filter === name}
                      onClick={() => setFilter(name)}
                      className={cn(
                        "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                        filter === name ? "border-ink bg-ink text-ink-foreground" : "border-gray-200 text-gray-600 hover:border-gray-400",
                      )}
                    >
                      {name}
                      <span className={cn("rounded-full px-1.5 text-xs", filter === name ? "bg-white/15" : "bg-gray-100 text-gray-500")}>{count}</span>
                    </button>
                  ))}
                </div>
              </Container>
            </div>

            <Container className="pt-12">
              <motion.div layout className="grid gap-x-8 gap-y-14 md:grid-cols-2 xl:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {visible.map((c) => (
                    <motion.article
                      key={c.slug}
                      layout
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="group flex flex-col"
                    >
                      {c.detail ? (
                        <Link to={`/portfolio/${c.slug}`} data-cursor="View case study" className="block transition-transform duration-500 group-hover:-translate-y-1">
                          <Shot study={c} />
                        </Link>
                      ) : (
                        <div className="transition-transform duration-500 group-hover:-translate-y-1"><Shot study={c} /></div>
                      )}
                      <div className="mt-6 flex items-center justify-between gap-3">
                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{c.industry}</span>
                        {c.url && (
                          <a href={c.url} target="_blank" rel="noopener noreferrer" className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-gray-500 hover:text-foreground">
                            Visit <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <h3 className="mt-2 font-display text-2xl text-foreground">{c.client}</h3>
                      <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{c.summary}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {c.tags.map((t) => (
                          <span key={t} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">{t}</span>
                        ))}
                      </div>
                      {c.detail && (
                        <Link to={`/portfolio/${c.slug}`} className="mt-5 inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                          Read the case study <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </motion.article>
                  ))}
                </AnimatePresence>
              </motion.div>
            </Container>
          </section>

          {/* CAPABILITIES */}
          <section className="border-t border-gray-100 bg-gray-50 py-14">
            <Container>
              <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Capabilities</p>
                  <h2 className="mt-4 font-display text-3xl leading-tight text-foreground md:text-4xl">The services behind this work</h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {services.map((s) => (
                    <Link key={s.slug} to={s.path} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-800 transition-all hover:border-ink hover:shadow-md">
                      <s.icon className="h-4 w-4 text-primary" /> {s.name}
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
