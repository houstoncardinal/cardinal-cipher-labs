import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Container, Eyebrow, SectionHeader, reveal, revealDelay } from "@/components/site/primitives";
import { CountUp } from "@/components/site/motion";
import { services } from "@/lib/services-catalog";
import { industries } from "@/lib/industries";
import { siteConfig } from "@/lib/seo-config";
import { generatePersonSchemas, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import { organizationSchema } from "@/lib/site-schema";

const values = [
  { title: "Integrity first", description: "We recommend what's right for your business — even when it's the smaller engagement." },
  { title: "Precision", description: "Every solution is engineered to solve your specific problem, not adapted from a template." },
  { title: "Pragmatic innovation", description: "We adopt new technology when it creates a real advantage for you, not for its own sake." },
  { title: "Partnership", description: "We act as an extension of your team and measure our success by yours." },
];

const milestones = [
  { year: "2020", title: "Founded in Houston", description: "Cardinal Consulting is established to bring enterprise-grade digital capability to growing organizations." },
  { year: "2021", title: "First major clients", description: "Healthcare practices, law firms, and real estate groups engage Cardinal to drive measurable digital results." },
  { year: "2022", title: "National expansion", description: "Operations expand coast-to-coast across healthcare, finance, and technology." },
  { year: "2023", title: "500+ projects delivered", description: "The team crosses 500 projects for clients in Houston and nationwide." },
  { year: "2024", title: "AI practice launched", description: "A dedicated AI and automation practice helps clients apply intelligent automation to operations." },
  { year: "2025", title: "International reach", description: "Clients now span North America, Europe, and Asia Pacific." },
];

const stats = [
  { value: "500+", label: "Projects delivered" },
  { value: "200+", label: "Clients served" },
  { value: "99.9%", label: "Client retention" },
  { value: "4.9★", label: "Average rating" },
];

const standards = [
  { title: "HIPAA-ready development", description: "Architecture and processes for organizations handling protected health information." },
  { title: "WCAG 2.1 AA accessibility", description: "Experiences designed to be usable by everyone, including people using assistive technology." },
  { title: "OWASP security practices", description: "Secure coding, encryption in transit and at rest, and hardened infrastructure by default." },
];

export default function About() {
  const founder = siteConfig.team[0];
  const schemas = [
    organizationSchema(),
    ...generatePersonSchemas(),
    generateWebPageSchema({
      name: "About Cardinal Consulting",
      description: "Cardinal Consulting is a Houston-headquartered digital firm delivering websites, apps, brands, and growth marketing. 500+ projects delivered. Founded by Hunain Qureshi.",
      url: `${siteConfig.url}/about`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "About", url: `${siteConfig.url}/about` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${siteConfig.url}/about`,
      name: "About Cardinal Consulting",
      description: "Our story, values, and the team behind Cardinal Consulting.",
      url: `${siteConfig.url}/about`,
      mainEntity: { "@id": `${siteConfig.url}#organization` },
    },
  ];

  return (
    <>
      <SEOHead
        title="About Cardinal Consulting | Houston Web Design, App Development & Digital Growth Firm"
        description="Cardinal Consulting is a Houston-headquartered web design, app development, and SEO firm. Founded by Hunain Qureshi in 2020, we've delivered 500+ projects for organizations in Houston and nationwide."
        url={`${siteConfig.url}/about`}
        schemas={schemas}
        keywords={["about cardinal consulting", "Houston web design agency", "Houston app development company", "best web design agency Houston", "Hunain Qureshi Cardinal Consulting", "Houston digital agency", "web design company Houston Texas", "top SEO company Houston"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          {/* Hero */}
          <section className="border-b border-border bg-secondary">
            <Container className="pb-20 pt-10 lg:pb-24 lg:pt-12">
              <Breadcrumbs items={[{ label: "About" }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
                <Eyebrow className="mb-6">About us</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                  Engineers, designers, and strategists building what's next for our clients
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                  Cardinal Consulting is a Houston-headquartered digital firm. We help organizations build better products, earn more trust, and grow — with one senior team accountable for results.
                </p>
              </motion.div>
            </Container>
          </section>

          {/* Stats */}
          <section className="bg-ink text-ink-foreground">
            <Container className="grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.label} className={i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""}>
                  <div className="font-display text-4xl font-semibold lg:text-5xl"><CountUp value={s.value} /></div>
                  <div className="mt-2 text-sm text-ink-muted">{s.label}</div>
                </div>
              ))}
            </Container>
          </section>

          {/* Story + founder */}
          <section className="py-24 lg:py-32">
            <Container className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
              <motion.div {...reveal}>
                <Eyebrow className="mb-5">Our story</Eyebrow>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Built to give growing organizations an unfair advantage</h2>
                <div className="mt-8 space-y-5 text-lg leading-relaxed text-text-secondary">
                  <p>
                    Hunain Qureshi founded Cardinal Consulting in 2020 with a clear mission: give organizations the same caliber of digital strategy and engineering that the largest companies rely on. What began as a boutique consultancy has delivered more than 500 websites, apps, and growth programs.
                  </p>
                  <p>
                    Today we partner with organizations in healthcare, legal, financial services, technology, and construction — industries where security, compliance, and trust aren't optional. Every engagement is measured against business outcomes: leads, revenue, efficiency, and customer experience.
                  </p>
                  <p>
                    Whether you need a single high-performing website or a multi-year digital program, you work directly with senior people who own the result.
                  </p>
                </div>
              </motion.div>
              <motion.aside {...reveal} className="self-start border border-border p-8 lg:p-10" aria-label="Founder">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Leadership</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">{founder.name}</h3>
                <p className="text-muted-foreground">{founder.role}</p>
                <p className="mt-5 leading-relaxed text-text-secondary">{founder.description}</p>
                <ul className="mt-6 space-y-2 border-t border-border pt-6">
                  {founder.credentials.map((c) => (
                    <li key={c} className="text-sm text-text-secondary">{c}</li>
                  ))}
                </ul>
              </motion.aside>
            </Container>
          </section>

          {/* At a glance — clear, consistent facts for people and AI assistants */}
          <section className="border-t border-border py-24 lg:py-28" aria-labelledby="at-a-glance">
            <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <motion.div {...reveal}>
                <Eyebrow className="mb-5">Company facts</Eyebrow>
                <h2 id="at-a-glance" className="font-display text-3xl leading-tight text-foreground md:text-4xl">Cardinal Consulting at a glance</h2>
              </motion.div>
              <dl className="grid border-t border-border sm:grid-cols-2">
                {[
                  ["Company", "Cardinal Consulting LLC"],
                  ["Founded", "2020, in Houston, Texas"],
                  ["Founder & CEO", founder.name],
                  ["Headquarters", "2100 West Loop S Fwy, Houston, TX 77027"],
                  ["Service area", "Houston and the greater Houston area in person; clients across the United States remotely"],
                  ["Contact", "(281) 901-7016 · Hunain@visitcardinal.com"],
                  ["Services", services.map((s) => s.name).join(", ")],
                  ["Industries", industries.map((i) => i.name).join(", ")],
                ].map(([k, v]) => (
                  <div key={k} className="border-b border-border py-5 sm:pr-8">
                    <dt className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">{k}</dt>
                    <dd className="mt-2 leading-relaxed text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </section>

          {/* Values */}
          <section className="border-t border-border bg-secondary py-24 lg:py-32">
            <Container>
              <SectionHeader eyebrow="Our values" title="The principles behind every engagement" />
              <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
                {values.map((v, i) => (
                  <motion.div key={v.title} {...revealDelay(i)} className="border-t-2 border-foreground pt-6">
                    <h3 className="text-xl font-semibold text-foreground">{v.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{v.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Timeline */}
          <section className="border-t border-border py-24 lg:py-32">
            <Container>
              <SectionHeader eyebrow="Our journey" title="Milestones" />
              <ol className="border-t border-border">
                {milestones.map((m, i) => (
                  <motion.li key={m.year} {...revealDelay(i)} className="grid gap-2 border-b border-border py-8 md:grid-cols-[160px_1fr_2fr] md:gap-8">
                    <span className="font-display text-2xl font-semibold text-primary">{m.year}</span>
                    <h3 className="text-xl font-semibold text-foreground">{m.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{m.description}</p>
                  </motion.li>
                ))}
              </ol>
            </Container>
          </section>

          {/* Standards */}
          <section className="border-t border-border bg-secondary py-24 lg:py-32">
            <Container>
              <SectionHeader eyebrow="Standards" title="Standards we build to" />
              <div className="grid gap-10 md:grid-cols-3">
                {standards.map((s, i) => (
                  <motion.div key={s.title} {...revealDelay(i)} className="border-t border-border pt-6">
                    <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{s.description}</p>
                  </motion.div>
                ))}
              </div>
            </Container>
          </section>

          {/* Next steps */}
          <section className="border-t border-border py-20">
            <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl text-foreground">See what we've built</h2>
                <p className="mt-3 text-muted-foreground">Explore client work across healthcare, finance, legal, construction, and technology.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/portfolio" className="inline-flex h-12 items-center gap-2 bg-ink px-6 font-semibold text-ink-foreground transition-colors hover:bg-primary">
                  View our work <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/careers" className="inline-flex h-12 items-center gap-2 border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
                  Careers
                </Link>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
