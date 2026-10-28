import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlanCard } from "@/components/services/PlanCard";
import { BrowserFrame, Container, Eyebrow, SectionHeader, reveal, revealDelay } from "@/components/site/primitives";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import { getService, type ServiceDefinition } from "@/lib/services-catalog";
import { getCaseStudies } from "@/lib/case-studies";

function buildSchemas(service: ServiceDefinition) {
  const serviceUrl = `${siteConfig.url}${service.path}`;
  return generateServicePageSchemas({
    serviceName: service.seo.serviceName,
    serviceDescription: service.seo.serviceDescription,
    serviceType: service.seo.serviceType,
    serviceUrl,
    category: service.seo.category,
    breadcrumbs: [
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
      { name: service.name, url: serviceUrl },
    ],
    faqs: service.faqs,
    offers: service.tiers.map((t) => ({ name: t.name, price: t.price, description: t.bestFor, features: t.features })),
    process: service.process.map((p) => ({ name: p.title, description: p.description })),
    reviews: (service.testimonials ?? []).map((t) => ({
      author: t.author,
      authorTitle: t.title.split(",")[0],
      company: t.title.split(",").slice(1).join(",").trim(),
      rating: t.rating,
      body: t.body,
      date: service.seo.reviewDate,
    })),
    aggregateRating: service.seo.aggregateRating,
    duration: service.seo.duration,
    keywords: service.seo.keywords,
    features: service.included.map((f) => ({ title: f.title, description: f.description })),
  });
}

/**
 * Shared layout for every /services/* page. Fixed order:
 * Hero → Stats → Where we help / Capabilities → Selected work → Engagement models
 * → Approach → Client perspective → FAQ → Related. Content lives in services-catalog.ts.
 */
export function ServicePageLayout({ service }: { service: ServiceDefinition }) {
  const related = service.related.map(getService);
  const work = getCaseStudies(service.caseStudies ?? []);
  const [featured, ...otherQuotes] = service.testimonials ?? [];

  return (
    <>
      <SEOHead
        title={service.seo.title}
        description={service.seo.description}
        keywords={service.seo.keywords}
        schemas={buildSchemas(service)}
        url={`${siteConfig.url}${service.path}`}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          {/* Hero */}
          <section className="border-b border-border bg-secondary">
            <Container className="pb-20 pt-10 lg:pb-24 lg:pt-12">
              <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: service.name }]} />
              <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                  <Eyebrow className="mb-6">{service.name}</Eyebrow>
                  <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">{service.headline}</h1>
                  <p className="service-description mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">{service.summary}</p>
                  <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                    <Link to="/contact" className="inline-flex h-12 items-center gap-2 bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
                      Talk to our team <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href="#engagements" className="inline-flex items-center gap-2 font-semibold text-foreground underline-offset-4 hover:underline">
                      View engagement models <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>

                <motion.aside
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="self-end border border-border bg-background p-8"
                  aria-label="Engagement models at a glance"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Ways to engage</p>
                  <ul className="mt-4 divide-y divide-border">
                    {service.tiers.map((tier) => (
                      <li key={tier.name} className="py-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{tier.level}</p>
                        <p className="mt-1 font-medium text-foreground">{tier.name}</p>
                        {tier.timeline && (
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <Clock className="h-3.5 w-3.5" /> {tier.timeline}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.aside>
              </div>
            </Container>
          </section>

          {/* Stats */}
          {service.stats && service.stats.length > 0 && (
            <section className="bg-ink text-ink-foreground">
              <Container className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
                {service.stats.map((s, i) => (
                  <div key={s.label} className={i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}>
                    <div className="font-display text-4xl font-semibold lg:text-5xl">{s.value}</div>
                    <div className="mt-2 text-sm text-ink-muted">{s.label}</div>
                  </div>
                ))}
              </Container>
            </section>
          )}

          {/* Where we help + capabilities */}
          <section className="py-24 lg:py-32">
            <Container>
              <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
                <motion.div {...reveal}>
                  <Eyebrow className="mb-5">Where we help</Eyebrow>
                  <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">The challenges we solve</h2>
                  <ol className="mt-8 space-y-6">
                    {service.whoItsFor.map((item, i) => (
                      <li key={item} className="flex gap-5 border-t border-border pt-6">
                        <span className="font-display text-sm font-semibold text-primary">0{i + 1}</span>
                        <span className="text-lg leading-snug text-foreground">{item}</span>
                      </li>
                    ))}
                  </ol>
                </motion.div>
                <div>
                  <motion.div {...reveal}>
                    <Eyebrow className="mb-5">Capabilities</Eyebrow>
                    <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">What's included</h2>
                  </motion.div>
                  <div className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2">
                    {service.included.map((f, i) => (
                      <motion.div key={f.title} {...revealDelay(i)} className="border-t border-border pt-6">
                        <f.icon className="mb-4 h-6 w-6 text-primary" strokeWidth={1.75} />
                        <h3 className="text-lg font-semibold text-foreground">{f.title}</h3>
                        <p className="mt-2 leading-relaxed text-muted-foreground">{f.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Industry research — every figure cites its source */}
          {service.research && service.research.length > 0 && (
            <section className="border-t border-border bg-ink py-20 text-ink-foreground lg:py-24">
              <Container>
                <SectionHeader inverted eyebrow="What the research says" title={`Why ${service.name} matters`} />
                <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
                  {service.research.map((r, i) => (
                    <motion.figure key={r.label} {...revealDelay(i)} className="flex flex-col bg-ink p-8 lg:p-10">
                      <p className="font-display text-5xl font-semibold leading-none lg:text-6xl">{r.value}</p>
                      <p className="mt-5 flex-1 text-lg leading-relaxed text-ink-foreground/85">{r.label}</p>
                      <figcaption className="mt-6 border-t border-white/10 pt-4 text-sm text-ink-muted">
                        Source:{" "}
                        {r.url ? (
                          <a href={r.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-ink-foreground">
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
              </Container>
            </section>
          )}

          {/* Selected work */}
          {work.length > 0 && (
            <section className="border-t border-border bg-secondary py-24 lg:py-32">
              <Container>
                <SectionHeader
                  eyebrow="Selected work"
                  title="Recent client outcomes"
                  action={
                    <Link to="/portfolio" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                      View all work <ArrowRight className="h-4 w-4" />
                    </Link>
                  }
                />
                <div className="grid gap-8 md:grid-cols-3">
                  {work.map((c, i) => (
                    <motion.article key={c.slug} {...revealDelay(i)}>
                      <BrowserFrame src={c.image} alt={`${c.client} website`} />
                      <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{c.industry}</p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">{c.client}</h3>
                      <p className="mt-2 leading-relaxed text-muted-foreground">{c.summary}</p>
                      {c.detail && (
                        <Link to={`/portfolio/${c.slug}`} className="mt-4 inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
                          Read the case study <ArrowRight className="h-4 w-4" />
                        </Link>
                      )}
                    </motion.article>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* Engagement models */}
          <section id="engagements" className="scroll-mt-24 border-t border-border py-24 lg:py-32">
            <Container>
              <SectionHeader
                eyebrow="Engagement models"
                title="Three ways to work with us"
                description="Every engagement is scoped to your goals after an initial consultation. Start where it makes sense and expand as you grow."
              />
              <div className="grid gap-6 md:grid-cols-3">
                {service.tiers.map((tier, i) => (
                  <motion.div key={tier.name} {...revealDelay(i)}>
                    <PlanCard tier={tier} showPrice={false} />
                  </motion.div>
                ))}
              </div>
              <p className="mt-10 text-muted-foreground">
                Looking for budget guidance?{" "}
                <Link to={`/pricing#${service.slug}`} className="font-semibold text-foreground underline underline-offset-4 hover:text-primary">
                  See our pricing guide
                </Link>
                .
              </p>
            </Container>
          </section>

          {/* Approach */}
          <section className="border-t border-border bg-secondary py-24 lg:py-32">
            <Container>
              <SectionHeader eyebrow="Our approach" title="A clear path from first conversation to results" />
              <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {service.process.map((step, i) => (
                  <motion.li key={step.title} {...revealDelay(i)} className="border-t-2 border-foreground pt-6">
                    <p className="font-display text-sm font-semibold text-primary">Step {i + 1}</p>
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* Client perspective */}
          {featured && (
            <section className="border-t border-border py-24 lg:py-32">
              <Container>
                <Eyebrow className="mb-10">Client perspective</Eyebrow>
                <motion.figure {...reveal} className="max-w-4xl">
                  <blockquote className="font-display text-2xl font-medium leading-snug text-foreground md:text-3xl lg:text-4xl">
                    “{featured.body}”
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4">
                    <span className="h-px w-10 bg-primary" />
                    <span>
                      <span className="block font-semibold text-foreground">{featured.author}</span>
                      <span className="text-sm text-muted-foreground">{featured.title}</span>
                    </span>
                  </figcaption>
                </motion.figure>
                {otherQuotes.length > 0 && (
                  <div className="mt-16 grid gap-10 border-t border-border pt-12 md:grid-cols-2">
                    {otherQuotes.map((t) => (
                      <motion.figure key={t.author} {...reveal}>
                        <blockquote className="text-lg leading-relaxed text-text-secondary">“{t.body}”</blockquote>
                        <figcaption className="mt-5">
                          <span className="block font-semibold text-foreground">{t.author}</span>
                          <span className="text-sm text-muted-foreground">{t.title}</span>
                        </figcaption>
                      </motion.figure>
                    ))}
                  </div>
                )}
              </Container>
            </section>
          )}

          {/* FAQ */}
          <section className="border-t border-border bg-secondary py-24 lg:py-32">
            <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <motion.div {...reveal}>
                <Eyebrow className="mb-5">FAQ</Eyebrow>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Common questions</h2>
                <p className="mt-4 text-muted-foreground">
                  Don't see your question?{" "}
                  <Link to="/contact" className="font-semibold text-foreground underline underline-offset-4">Ask our team</Link>.
                </p>
              </motion.div>
              <Accordion type="single" collapsible className="border-t border-border">
                {service.faqs.map((faq, i) => (
                  <AccordionItem key={faq.question} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </section>

          {/* Related */}
          <section className="border-t border-border py-24">
            <Container>
              <SectionHeader eyebrow="Related services" title="Often paired with" />
              <div className="grid border-l border-t border-border md:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.slug} to={r.path} className="group flex flex-col border-b border-r border-border p-8 transition-colors hover:bg-secondary">
                    <div className="flex items-start justify-between">
                      <r.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-foreground" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold text-foreground">{r.name}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{r.summary}</p>
                  </Link>
                ))}
              </div>
              {service.localLinks.length > 0 && (
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                  <span className="font-semibold text-foreground">In Houston:</span>
                  {service.localLinks.map((l) => (
                    <Link key={l.href} to={l.href} className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
