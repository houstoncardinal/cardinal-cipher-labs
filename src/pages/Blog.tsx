import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow, revealDelay } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/seo-config";
import { articles, pillars } from "@/lib/blog-data";

const ALL = "all";

export default function Blog() {
  const [filter, setFilter] = useState(ALL);
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const visible = filter === ALL ? articles : articles.filter((a) => a.pillar === filter);
  const url = `${siteConfig.url}/blog`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: "Cardinal Consulting Insights",
      description: "Practical guidance on websites, growth marketing, AI, and technology for growing businesses.",
      url,
      publisher: { "@id": `${siteConfig.url}#organization` },
      blogPost: articles.map((a) => ({
        "@type": "BlogPosting",
        headline: a.title,
        url: `${url}/${a.slug}`,
        datePublished: a.date,
        author: { "@type": "Person", name: a.author },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Insights — Websites, Marketing, AI & Technology Guides"
        description="Practical, sourced guides from Cardinal Consulting on website costs, social media, Google Business Profile, AI automation, fractional CTOs, cloud costs, and more."
        url={url}
        schemas={schemas}
        keywords={["website cost guide", "social media management guide", "AI automation guide", "fractional CTO", "Google Business Profile guide"]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          <section className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Insights" }]} />
              <div className="max-w-3xl">
                <Eyebrow className="mb-6">Insights</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                  <RevealText text="Clear answers for growing businesses" trigger="mount" />
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                  Practical guides on websites, marketing, AI, and technology — written by our team, with every statistic sourced.
                </p>
              </div>
            </Container>
          </section>

          {/* Featured */}
          <section className="py-16 lg:py-20">
            <Container>
              <div className="grid gap-6 lg:grid-cols-3">
                {featured.map((a, i) => (
                  <motion.div key={a.slug} {...revealDelay(i)}>
                    <Link to={`/blog/${a.slug}`} className={cn("group flex h-full flex-col border p-8 transition-colors", i === 0 ? "border-ink bg-ink text-ink-foreground" : "border-border hover:border-foreground")}>
                      <p className={cn("text-xs font-semibold uppercase tracking-[0.18em]", i === 0 ? "text-ink-muted" : "text-primary")}>{a.category}</p>
                      <h2 className={cn("mt-4 font-display text-2xl leading-snug", i === 0 ? "text-ink-foreground" : "text-foreground group-hover:text-primary")}>{a.title}</h2>
                      <p className={cn("mt-4 flex-1 leading-relaxed", i === 0 ? "text-ink-muted" : "text-muted-foreground")}>{a.excerpt}</p>
                      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">Read article <ArrowRight className="h-4 w-4" /></span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* All articles */}
          <section className="border-t border-border bg-secondary py-16 lg:py-20">
            <Container>
              <div role="group" aria-label="Filter by topic" className="mb-10 flex flex-wrap gap-2">
                {[{ id: ALL, name: "All topics" }, ...pillars].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    aria-pressed={filter === p.id}
                    onClick={() => setFilter(p.id)}
                    className={cn(
                      "border px-4 py-2 text-sm font-medium transition-colors",
                      filter === p.id ? "border-foreground bg-foreground text-background" : "border-border bg-background text-text-secondary hover:border-foreground",
                    )}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
              <ul className="border-t border-border">
                <AnimatePresence mode="popLayout">
                  {visible.map((a) => (
                    <motion.li key={a.slug} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-b border-border">
                      <Link to={`/blog/${a.slug}`} className="group grid gap-3 py-8 md:grid-cols-[200px_1fr_auto] md:items-baseline md:gap-8">
                        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{a.category}</span>
                        <span>
                          <span className="block font-display text-xl leading-snug text-foreground group-hover:text-primary md:text-2xl">{a.title}</span>
                          <span className="mt-2 block leading-relaxed text-muted-foreground">{a.excerpt}</span>
                        </span>
                        <span className="text-sm text-muted-foreground">{a.readTime}</span>
                      </Link>
                    </motion.li>
                  ))}
                </AnimatePresence>
              </ul>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
