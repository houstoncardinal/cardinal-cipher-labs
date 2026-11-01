import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Link2, Plus } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow, reveal } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import NotFound from "@/pages/NotFound";
import { siteConfig } from "@/lib/seo-config";
import { articles, coverImage, pillars } from "@/lib/blog-data";
import { ArticleVisual, rich } from "@/components/blog/ArticleVisual";
import { cn } from "@/lib/utils";
import { founder, FOUNDER_PATH } from "@/lib/founder-story";
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
  const cover = coverImage(article);
  const coverUrl = `${siteConfig.url}${cover.src}`;
  const personId = `${siteConfig.url}#person-hunain-qureshi`;

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.excerpt,
      datePublished: article.date,
      dateModified: article.updated ?? article.date,
      author: { "@type": "Person", "@id": personId, name: article.author, jobTitle: "Founder & CEO", url: `${siteConfig.url}${FOUNDER_PATH}`, worksFor: { "@id": `${siteConfig.url}#organization` } },
      publisher: { "@id": `${siteConfig.url}#organization` },
      mainEntityOfPage: url,
      image: { "@type": "ImageObject", url: coverUrl, width: 1200, height: 630, caption: cover.alt },
      inLanguage: "en-US",
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
    ...(article.faqs?.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": `${url}#faq`,
            mainEntity: article.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
          },
        ]
      : []),
  ];

  return (
    <>
      <SEOHead
        title={article.seoTitle ?? article.title}
        description={article.seoDescription ?? article.excerpt}
        url={url}
        type="article"
        author={article.author}
        publishedTime={article.date}
        modifiedTime={article.updated ?? article.date}
        image={coverUrl}
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
                  By <Link to={FOUNDER_PATH} className="font-semibold text-foreground hover:text-primary">{article.author}</Link>, Founder of Cardinal Consulting
                  <span aria-hidden> · </span>
                  <time dateTime={article.date}>{date}</time>
                  <span aria-hidden> · </span>
                  {article.readTime}
                </p>
              </div>
              <motion.figure initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="mt-12 max-w-5xl">
                <img src={cover.src} alt={cover.alt} width={1200} height={630} loading="eager" decoding="async" className="block h-auto w-full border border-border" />
              </motion.figure>
            </Container>
          </header>

          <Container className="grid grid-cols-1 gap-16 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:py-20">
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
              {article.takeaways && (
                <motion.aside {...reveal} className="mb-12 border border-border bg-secondary p-6 md:p-8" aria-label="Key takeaways">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Key takeaways</p>
                  <ul className="mt-4 space-y-3">
                    {article.takeaways.map((t) => (
                      <li key={t} className="flex gap-3 leading-relaxed text-foreground">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </motion.aside>
              )}
              {article.content.sections.map((s) => (
                <section key={s.heading} id={anchor(s.heading)} className="scroll-mt-28 border-t border-border pt-10 first:border-t-0 first:pt-0 [&+&]:mt-12">
                  <h2 className="font-display text-2xl leading-tight text-foreground md:text-3xl">{s.heading}</h2>
                  {s.body.split("\n\n").map((para, i) => (
                    <p key={i} className="mt-5 text-[17px] leading-[1.75] text-text-secondary">{rich(para)}</p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-6 space-y-3">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[17px] leading-relaxed text-text-secondary">
                          <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-primary" />
                          <span>{rich(b)}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {s.highlight && (
                    <blockquote className="mt-8 border-l-2 border-primary bg-secondary px-6 py-5 text-[17px] leading-relaxed text-foreground">
                      {rich(s.highlight)}
                    </blockquote>
                  )}
                  {s.visual && <ArticleVisual visual={s.visual} />}
                </section>
              ))}

              {article.faqs && <ArticleFaqs faqs={article.faqs} />}

              <ShareBar url={url} title={article.title} />

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

              {/* Author */}
              <section className="mt-14 flex gap-5 border-t border-border pt-8" aria-label="About the author">
                {founder.photo ? (
                  <img src={founder.photo} alt={article.author} width={56} height={56} loading="lazy" decoding="async" className="h-14 w-14 shrink-0 rounded-full object-cover" />
                ) : (
                  <span aria-hidden className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-ink font-display text-lg font-semibold text-ink-foreground">
                    {article.author.split(" ").map((n) => n[0]).join("")}
                  </span>
                )}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Written by</p>
                  <p className="mt-1 font-display text-lg font-semibold text-foreground">
                    <Link to={FOUNDER_PATH} className="hover:text-primary">{article.author}</Link>
                  </p>
                  <p className="mt-2 leading-relaxed text-text-secondary">
                    {founder.shortBio}{" "}
                    <Link to={FOUNDER_PATH} className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline">Read his story</Link>
                  </p>
                </div>
              </section>

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

function ArticleFaqs({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="mt-14 border-t border-border pt-10" aria-labelledby="article-faq">
      <h2 id="article-faq" className="font-display text-2xl leading-tight text-foreground md:text-3xl">Frequently asked questions</h2>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map((f, i) => {
          const on = open === i;
          return (
            <div key={f.question}>
              <button type="button" aria-expanded={on} onClick={() => setOpen(on ? null : i)} className="flex w-full items-start justify-between gap-4 py-5 text-left">
                <span className="font-semibold text-foreground md:text-lg">{f.question}</span>
                <Plus className={cn("mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300", on && "rotate-45 text-primary")} />
              </button>
              {/* Answers stay in the HTML when collapsed so search engines read every one */}
              <motion.div initial={false} animate={on ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden" aria-hidden={!on}>
                <p className="pb-6 text-[17px] leading-[1.75] text-text-secondary">{f.answer}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ShareBar({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}` },
    { label: "X", href: `https://twitter.com/intent/tweet?url=${u}&text=${t}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${u}` },
    { label: "Email", href: `mailto:?subject=${t}&body=${u}` },
  ];
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: the share links still work */
    }
  };
  return (
    <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-8">
      <span className="mr-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Share this article</span>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex h-9 items-center border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
          {l.label}
        </a>
      ))}
      <button type="button" onClick={copy} className="inline-flex h-9 items-center gap-1.5 border border-border px-3 text-sm font-medium text-foreground transition-colors hover:border-foreground">
        {copied ? <Check className="h-3.5 w-3.5 text-primary" /> : <Link2 className="h-3.5 w-3.5" />}
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
