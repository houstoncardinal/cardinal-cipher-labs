import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { BrowserFrame, Container, Eyebrow } from "@/components/site/primitives";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo-config";
import { generatePortfolioSchemas, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import { caseStudies } from "@/lib/case-studies";

const ALL = "All industries";

export default function PortfolioPage() {
  const [filter, setFilter] = useState(ALL);
  const filters = useMemo(() => [ALL, ...Array.from(new Set(caseStudies.map((c) => c.industry)))], []);
  const visible = filter === ALL ? caseStudies : caseStudies.filter((c) => c.industry === filter);

  const schemas = [
    ...generatePortfolioSchemas(),
    generateWebPageSchema({
      name: "Our Work — Cardinal Consulting",
      description: "Client work across healthcare, financial services, legal, construction, real estate, and technology.",
      url: `${siteConfig.url}/portfolio`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
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
          item: { "@type": "CreativeWork", name: cs.client, description: cs.summary, creator: { "@id": `${siteConfig.url}#organization` } },
        })),
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="Portfolio & Case Studies"
        description="Explore Cardinal Consulting's client work across healthcare, financial services, legal, construction, real estate, and technology."
        url={`${siteConfig.url}/portfolio`}
        schemas={schemas}
        keywords={["portfolio", "case studies", "client work", "web development portfolio", "enterprise solutions"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          <section className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Our Work" }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
                <Eyebrow className="mb-6">Our work</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">Work that moves organizations forward</h1>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                  A selection of websites and platforms we've delivered for clients across regulated and competitive industries.
                </p>
              </motion.div>
            </Container>
          </section>

          <section className="py-16 lg:py-20">
            <Container>
              <div role="group" aria-label="Filter by industry" className="mb-12 flex flex-wrap gap-2">
                {filters.map((f) => (
                  <button
                    key={f}
                    type="button"
                    aria-pressed={filter === f}
                    onClick={() => setFilter(f)}
                    className={cn(
                      "border px-4 py-2 text-sm font-medium transition-colors",
                      filter === f ? "border-foreground bg-foreground text-background" : "border-border text-text-secondary hover:border-foreground",
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
                <AnimatePresence mode="popLayout">
                  {visible.map((c) => (
                    <motion.article key={c.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      {c.detail ? (
                        <Link to={`/portfolio/${c.slug}`} aria-label={`Read the ${c.client} case study`} className="block transition-transform hover:-translate-y-1">
                          <BrowserFrame src={c.image} alt={`${c.client} website`} />
                        </Link>
                      ) : (
                        <BrowserFrame src={c.image} alt={`${c.client} website`} />
                      )}
                      <div className="mt-6 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{c.industry}</p>
                          <h2 className="mt-2 font-display text-2xl text-foreground">{c.client}</h2>
                        </div>
                        {c.url && (
                          <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-text-secondary hover:text-foreground">
                            Visit site <ArrowUpRight className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <p className="mt-3 leading-relaxed text-muted-foreground">{c.summary}</p>
                      {c.detail && (
                        <Link to={`/portfolio/${c.slug}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                          Read the case study <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                      <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5">
                        {c.metrics.map((m) => (
                          <div key={m.label}>
                            <dt className="sr-only">{m.label}</dt>
                            <dd className="font-display text-xl font-semibold text-foreground">{m.value}</dd>
                            <dd className="mt-0.5 text-xs text-muted-foreground">{m.label}</dd>
                          </div>
                        ))}
                      </dl>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
