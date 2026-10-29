import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { BrowserFrame, Container, Eyebrow, SectionHeader, reveal, revealDelay } from "@/components/site/primitives";
import { CountUp, Parallax } from "@/components/site/motion";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema-generators";
import { caseStudies, getCaseStudy } from "@/lib/case-studies";
import { services } from "@/lib/services-catalog";

export default function CaseStudyPage() {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);
  if (!study?.detail) return <Navigate to="/portfolio" replace />;

  const d = study.detail;
  const url = `${siteConfig.url}/portfolio/${study.slug}`;
  const more = caseStudies.filter((c) => c.slug !== study.slug && c.featured).slice(0, 2);
  const serviceLinks = d.services
    .map((name) => services.find((s) => s.name === name))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": url,
      name: `${study.client} case study`,
      headline: d.headline,
      description: study.summary,
      url,
      image: `${siteConfig.url}${study.image}`,
      creator: { "@id": `${siteConfig.url}#organization` },
      about: { "@type": "Organization", name: study.client, url: study.url },
    },
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Our Work", url: `${siteConfig.url}/portfolio` },
      { name: study.client, url },
    ]),
  ];

  return (
    <>
      <SEOHead
        title={`${study.client} Case Study | Cardinal Consulting`}
        description={`${d.headline}. ${study.summary}`}
        url={url}
        schemas={schemas}
        keywords={[`${study.client} case study`, "enterprise website case study", "B2B website design", "web development case study"]}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          {/* Hero */}
          <section className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Our Work", href: "/portfolio" }, { label: study.client }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
                <Eyebrow className="mb-6">Case study · {study.industry}</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">{d.headline}</h1>
              </motion.div>

              <dl className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
                <div>
                  <dt className="text-sm text-muted-foreground">Client</dt>
                  <dd className="mt-1 font-semibold text-foreground">{study.client}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Industry</dt>
                  <dd className="mt-1 font-semibold text-foreground">{study.industry}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted-foreground">Services</dt>
                  <dd className="mt-1 font-semibold text-foreground">{d.services.join(", ")}</dd>
                </div>
                {study.url && (
                  <div>
                    <dt className="text-sm text-muted-foreground">Live site</dt>
                    <dd className="mt-1">
                      <a href={study.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline">
                        {study.url.replace(/^https?:\/\//, "")} <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>
            </Container>
          </section>

          {/* Hero image */}
          <section className="py-16 lg:py-20">
            <Container>
              <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
                <BrowserFrame src={study.image} alt={`${study.client} homepage`} eager className="[&_img]:aspect-[16/8.5]" />
              </motion.div>
            </Container>
          </section>

          {/* Results band — only when the client has confirmed figures */}
          {d.results.length > 0 && (
          <section className="bg-ink text-ink-foreground">
            <Container className="grid gap-10 py-16 lg:grid-cols-[1fr_2fr] lg:items-center">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">The result</p>
              <div className="flex flex-wrap items-end gap-x-16 gap-y-8">
                {d.results.map((r) => (
                  <div key={r.label}>
                    <p className="font-display text-7xl font-semibold leading-none md:text-8xl"><CountUp value={r.value} /></p>
                    <p className="mt-3 text-lg text-ink-muted">{r.label}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          )}

          {/* Challenge + client facts */}
          <section className="py-16 lg:py-24">
            <Container className="grid gap-16 lg:grid-cols-[2fr_1fr]">
              <motion.div {...reveal}>
                <Eyebrow className="mb-5">The challenge</Eyebrow>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">{d.challengeHeading ?? "The challenge"}</h2>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary">{d.challenge}</p>
              </motion.div>
              <motion.aside {...reveal} className="self-start border border-border p-8" aria-label={`About ${study.client}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">About {study.client}</p>
                <ul className="mt-5 space-y-3">
                  {d.clientFacts.map((f) => (
                    <li key={f} className="flex gap-3 text-[15px] text-text-secondary">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </motion.aside>
            </Container>
          </section>

          {/* Approach */}
          <section className="border-t border-border bg-secondary py-16 lg:py-24">
            <Container>
              <SectionHeader eyebrow="Our approach" title="What we built" />
              <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
                {d.approach.map((a, i) => (
                  <motion.div key={a.title} {...revealDelay(i)} className="border-t-2 border-foreground pt-6">
                    <p className="font-display text-sm font-semibold text-primary">0{i + 1}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{a.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{a.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Gallery */}
          <section className="py-16 lg:py-24">
            <Container>
              <SectionHeader eyebrow="Inside the build" title="Key experiences" />
              <div className="space-y-20">
                {d.gallery.map((g, i) => (
                  <motion.figure key={g.src} {...reveal} className={i % 2 === 1 ? "lg:pl-24" : "lg:pr-24"}>
                    <div className="overflow-hidden border border-border bg-secondary shadow-[0_24px_60px_-32px_rgba(15,23,42,0.35)]">
                      <Parallax distance={24}>
                        <img src={g.src} alt={g.alt} loading="lazy" className="block w-full scale-[1.06]" />
                      </Parallax>
                    </div>
                    <figcaption className="mt-5 flex gap-4 text-muted-foreground">
                      <span className="font-display font-semibold text-foreground">0{i + 1}</span>
                      {g.caption}
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </Container>
          </section>

          {/* Mobile */}
          {d.mobileImage && (
            <section className="border-t border-border bg-secondary py-16 lg:py-24">
              <Container className="grid items-center gap-16 lg:grid-cols-2">
                <motion.div {...reveal}>
                  <Eyebrow className="mb-5">Responsive</Eyebrow>
                  <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Just as clear on a phone</h2>
                  <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                    Executives often first see a vendor on mobile. Every section was designed to read cleanly at phone size, with the primary call to action always within reach.
                  </p>
                </motion.div>
                <motion.div {...reveal} className="mx-auto w-full max-w-[300px]">
                  <div className="overflow-hidden rounded-[2.25rem] border-[10px] border-ink bg-ink shadow-[0_40px_80px_-40px_rgba(15,23,42,0.6)]">
                    <img src={d.mobileImage} alt={`${study.client} on mobile`} loading="lazy" className="block w-full rounded-[1.5rem]" />
                  </div>
                </motion.div>
              </Container>
            </section>
          )}

          {/* Services used */}
          {serviceLinks.length > 0 && (
            <section className="border-t border-border py-14">
              <Container>
                <SectionHeader eyebrow="Services" title="Capabilities on this project" />
                <div className="grid border-l border-t border-border md:grid-cols-3">
                  {serviceLinks.map((s) => (
                    <Link key={s.slug} to={s.path} className="group flex flex-col border-b border-r border-border p-8 transition-colors hover:bg-secondary">
                      <div className="flex items-start justify-between">
                        <s.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">{s.name}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{s.summary}</p>
                    </Link>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* More work */}
          <section className="border-t border-border bg-secondary py-16">
            <Container>
              <SectionHeader
                eyebrow="More work"
                title="Explore other projects"
                action={
                  <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                    <ArrowLeft className="h-4 w-4" /> All work
                  </Link>
                }
              />
              <div className="grid gap-12 md:grid-cols-2">
                {more.map((c) => (
                  <Link key={c.slug} to={c.detail ? `/portfolio/${c.slug}` : "/portfolio"} className="group">
                    <BrowserFrame src={c.image} alt={`${c.client} website`} />
                    <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{c.industry}</p>
                    <h3 className="mt-2 inline-flex items-center gap-2 font-display text-2xl text-foreground group-hover:text-primary">
                      {c.client} <ArrowRight className="h-5 w-5" />
                    </h3>
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
