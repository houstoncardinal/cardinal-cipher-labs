import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Container } from "@/components/site/primitives";
import { CountUp, RevealText, Spotlight } from "@/components/site/motion";
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
        title="Our Work — Client Websites, Platforms & Case Studies"
        description="Explore Cardinal Consulting's client work: enterprise website platforms, lead-generation sites, and luxury brands across AI consulting, enterprise IT, financial services, healthcare, legal, construction, and real estate."
        url={`${siteConfig.url}/portfolio`}
        schemas={schemas}
        keywords={["web design portfolio", "website case studies", "enterprise website examples", "Houston web design portfolio", "client work"]}
      />

      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* HERO */}
          <Spotlight className="bg-ink pb-14 pt-28 text-ink-foreground lg:pb-24 lg:pt-44">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
            <Container className="relative">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-ink-muted">Our work</p>
              <h1 className="max-w-4xl font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl">
                <RevealText text="Work that moves organizations forward" trigger="mount" />
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
                Enterprise website platforms, lead-generation engines, and premium brand experiences — designed, built, and optimized by our team.
              </p>
              <dl className="mt-14 grid max-w-3xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { value: `${caseStudies.length}`, label: "Client projects shown" },
                  { value: `${industryCount}`, label: "Industries represented" },
                  { value: `${caseStudies.filter((c) => c.detail).length}`, label: "In-depth case studies" },
                ].map((s) => (
                  <div key={s.label}>
                    <dd className="font-display text-4xl font-semibold md:text-5xl"><CountUp value={s.value} /></dd>
                    <dt className="mt-2 text-sm text-ink-muted">{s.label}</dt>
                  </div>
                ))}
              </dl>
            </Container>
          </Spotlight>

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
          <section className="pb-14 lg:pb-24">
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
