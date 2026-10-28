import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Process } from "@/components/sections/Process";
import { Container, Eyebrow, reveal, revealDelay } from "@/components/site/primitives";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";
import { serviceGroups, services } from "@/lib/services-catalog";

export default function ServicesPage() {
  const schemas = [
    generateWebPageSchema({
      name: "Our Services — Cardinal Consulting",
      description: "Web development, mobile apps, brand identity, UX/UI design, SEO, and digital marketing for mid-market and enterprise organizations.",
      url: `${siteConfig.url}/services`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Web Design, Mobile Apps & Digital Marketing Services"
        description="Websites, mobile apps, branding, UX/UI, SEO, and digital marketing from one senior team in Houston. Talk to our team: (281) 901-7016."
        url={`${siteConfig.url}/services`}
        schemas={schemas}
        keywords={["web development services", "mobile app development", "SEO services", "digital marketing agency", "brand identity design", "UX UI design services"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          <section className="border-b border-border bg-secondary">
            <Container className="pb-20 pt-10 lg:pb-24 lg:pt-12">
              <Breadcrumbs items={[{ label: "Services" }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-4xl">
                <Eyebrow className="mb-6">Services</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">
                  Everything you need to build, design, and grow your digital business
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl">
                  Four connected practices delivered by one senior team — so strategy, design, engineering, and growth work as a single program.
                </p>
              </motion.div>
            </Container>
          </section>

          {serviceGroups.map((g, gi) => (
            <section key={g.group} className="border-b border-border py-20 lg:py-24">
              <Container className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
                <motion.div {...reveal}>
                  <p className="font-display text-sm font-semibold text-primary">0{gi + 1}</p>
                  <h2 className="mt-2 font-display text-4xl text-foreground md:text-5xl">{g.title}</h2>
                  <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{g.description}</p>
                </motion.div>
                <ul className="border-t border-border">
                  {services.filter((s) => s.group === g.group).map((s, i) => (
                    <motion.li key={s.slug} {...revealDelay(i)} className="border-b border-border">
                      <Link to={s.path} className="group grid gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-start">
                        <s.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                        <div>
                          <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary">{s.name}</h3>
                          <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">{s.summary}</p>
                          <p className="mt-4 text-sm text-text-secondary">
                            {s.tiers.map((t) => t.name).join("  ·  ")}
                          </p>
                        </div>
                        <ArrowUpRight className="hidden h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground md:block" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </Container>
            </section>
          ))}

          <Process />

          <section className="border-t border-border py-16">
            <Container className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl text-foreground">Need budget guidance?</h2>
                <p className="mt-2 text-muted-foreground">Our pricing guide shows typical investment for each engagement level, plus website care plans.</p>
              </div>
              <Link to="/pricing" className="inline-flex h-12 shrink-0 items-center gap-2 border border-foreground px-6 font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background">
                View pricing guide <ArrowRight className="h-4 w-4" />
              </Link>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
