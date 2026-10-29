import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import NotFound from "@/pages/NotFound";
import { siteConfig } from "@/lib/seo-config";
import { articles, pillars } from "@/lib/blog-data";
import { getLandingPage } from "@/lib/landing-pages";
import { contactHref } from "@/lib/contact-intent";

const anchor = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** Map an article's related page to the service slug the contact form understands. */
function serviceSlugFor(path?: string) {
  if (!path) return undefined;
  if (path.startsWith("/services/")) return path.replace("/services/", "");
  return getLandingPage(path)?.primaryService;
}

export default function BlogArticle() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);
  if (!article) return <NotFound />;

  const url = `${siteConfig.url}/blog/${article.slug}`;
  const pillar = pillars.find((p) => p.id === article.pillar);
  const related = articles.filter((a) => a.slug !== article.slug && a.pillar === article.pillar).slice(0, 2);
  const more = related.length < 2 ? articles.filter((a) => a.slug !== article.slug && !related.includes(a)).slice(0, 2 - related.length) : [];
  const cta = contactHref({ service: serviceSlugFor(article.relatedService), from: `/blog/${article.slug}` });
  const date = new Date(`${article.date}T12:00:00`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      dateModified: article.date,
      author: { "@type": "Person", name: article.author, jobTitle: "Founder & CEO", worksFor: { "@id": `${siteConfig.url}#organization` } },
      publisher: { "@id": `${siteConfig.url}#organization` },
      mainEntityOfPage: url,
      image: siteConfig.ogImage,
      keywords: article.keywords.join(", "),
      articleSection: article.category,
      ...(article.sources?.length ? { citation: article.sources.map((s) => s.url) } : {}),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${siteConfig.url}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.excerpt}
        url={url}
        type="article"
        author={article.author}
        publishedTime={article.date}
        modifiedTime={article.date}
        keywords={article.keywords}
        schemas={schemas}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          <header className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Insights", href: "/blog" }, { label: article.category }]} />
              <div className="max-w-4xl">
                <Eyebrow className="mb-6">{pillar?.name ?? article.category}</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.08] text-foreground md:text-5xl lg:text-[3.5rem]">
                  <RevealText text={article.title} trigger="mount" />
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary md:text-xl">{article.excerpt}</p>
                <p className="mt-8 text-sm text-muted-foreground">
                  By <Link to="/about" className="font-semibold text-foreground hover:text-primary">{article.author}</Link>, Founder of Cardinal Consulting
                  <span aria-hidden> · </span>
                  <time dateTime={article.date}>{date}</time>
                  <span aria-hidden> · </span>
                  {article.readTime}
                </p>
              </div>
            </Container>
          </header>

          <Container className="grid gap-16 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-20">
            {/* Table of contents */}
            <aside className="hidden lg:block" aria-label="On this page">
              <nav className="sticky top-28">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">On this page</p>
                <ol className="mt-4 space-y-3 border-l border-border">
                  {article.content.sections.map((s) => (
                    <li key={s.heading}>
                      <a href={`#${anchor(s.heading)}`} className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-muted-foreground hover:border-primary hover:text-foreground">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>

            <article className="max-w-[70ch]">
              {article.content.sections.map((s) => (
                <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0 [&+&]:mt-12">
                  <h2 className="font-display text-2xl leading-tight text-foreground md:text-3xl">{s.heading}</h2>
                  {s.body.split("\n\n").map((para, i) => (
                    <p key={i} className="mt-5 text-[17px] leading-[1.75] text-text-secondary">{para}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[17px] leading-relaxed text-text-secondary">
                          <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-primary" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.highlight && (
                    <blockquote className="mt-8 border-l-2 border-primary bg-secondary px-6 py-5 text-[17px] leading-relaxed text-foreground">
                      {s.highlight}
                    </blockquote>
                  )}
                </section>
              ))}

              {/* CTA */}
              <motion.div {...reveal} className="mt-12 bg-ink p-8 text-ink-foreground md:p-10">
                <p className="font-display text-2xl leading-snug">{article.content.cta}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link to={cta} className="inline-flex h-12 items-center gap-2 bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
                    Get a free consultation <ArrowRight className="h-4 w-4" />
                  </Link>
                  {article.relatedService && (
                    <Link to={article.relatedService} className="inline-flex items-center gap-1 font-semibold text-ink-foreground underline-offset-4 hover:underline">
                      Learn about the service <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </motion.div>

              {/* Sources */}
              {article.sources && article.sources.length > 0 && (
                <section className="mt-14 border-t border-border pt-8" aria-labelledby="sources">
                  <h2 id="sources" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">Sources</h2>
                  <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {article.sources.map((src) => (
                      <li key={src.url}>
                        <a href={src.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">{src.label}</a>
                      </li>
                    ))}
                  </ol>
                </section>
              )}
            </article>
          </Container>

          {/* Related articles */}
          <section className="border-t border-border bg-secondary py-14">
            <Container>
              <Eyebrow className="mb-5">Keep reading</Eyebrow>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {[...related, ...more].map((a) => (
                  <Link key={a.slug} to={`/blog/${a.slug}`} className="group flex flex-col border border-border bg-background p-8 transition-colors hover:border-foreground">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{a.category}</p>
                    <h3 className="mt-3 font-display text-2xl leading-snug text-foreground group-hover:text-primary">{a.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{a.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">Read article <ArrowRight className="h-4 w-4" /></span>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
