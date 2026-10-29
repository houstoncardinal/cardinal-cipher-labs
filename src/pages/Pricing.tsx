import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlanCard } from "@/components/services/PlanCard";
import { Container, Eyebrow, reveal, revealDelay } from "@/components/site/primitives";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema, generateServiceSchemas } from "@/lib/schema-generators";
import { carePlans, priceToNumber, services } from "@/lib/services-catalog";

const faqs = [
  { q: "How is pricing structured?", a: "Every service has three engagement levels: Foundation, Growth, and Enterprise. Websites, apps, branding, and design are project-based. SEO, marketing, and care plans are monthly. You receive a written scope and price before any work begins." },
  { q: "How are larger programs priced?", a: "Enterprise engagements and multi-service programs are scoped individually based on goals, timeline, integrations, and compliance requirements. We'll provide a detailed proposal after a discovery conversation." },
  { q: "What are the payment terms?", a: "Projects are typically billed 50% at kickoff and 50% at launch. For projects over $5,000 we can structure milestone-based payments." },
  { q: "Are monthly services locked into a contract?", a: "No. SEO, marketing, and care plans are month-to-month — no long-term contracts." },
  { q: "Why invest in SEO after launch?", a: "A new website needs to be found. SEO builds steady, compounding traffic from Google every month, so your site keeps generating pipeline long after launch." },
  { q: "Can we change levels later?", a: "Yes. You can move between levels, add services, or add a care plan at any time." },
  { q: "Do you offer nonprofit pricing?", a: "Yes, we offer special pricing for qualified nonprofits. Contact us to discuss your project and budget." },
];

export default function Pricing() {
  const allOffers = [
    ...services.flatMap((s) => s.tiers.map((t) => ({ ...t, serviceName: s.name }))),
      ];

  const schemas = [
    ...generateServiceSchemas(),
    generateWebPageSchema({
      name: "Pricing Guide — Cardinal Consulting",
      description: "Engagement levels and pricing for web development, mobile apps, brand identity, UX/UI design, SEO, digital marketing, and website care plans.",
      url: `${siteConfig.url}/pricing`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Pricing", url: `${siteConfig.url}/pricing` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "OfferCatalog",
      "@id": `${siteConfig.url}/pricing`,
      name: "Cardinal Consulting Pricing",
      description: "Engagement levels and pricing for every Cardinal Consulting service.",
      provider: { "@id": `${siteConfig.url}#organization` },
      numberOfItems: allOffers.length,
      itemListElement: allOffers.map((tier, i) => {
        const price = priceToNumber(tier.price);
        return {
          "@type": "Offer",
          position: i + 1,
          name: `${tier.serviceName} — ${tier.name}`,
          description: tier.bestFor,
          ...(price !== undefined && {
            priceSpecification: {
              "@type": tier.billing === "per month" ? "UnitPriceSpecification" : "PriceSpecification",
              priceCurrency: "USD",
              ...(tier.billing === "starting price" ? { minPrice: price } : { price }),
              ...(tier.billing === "per month" && { unitText: "MONTH" }),
            },
          }),
        };
      }),
    },
  ];

  return (
    <>
      <SEOHead
        title="Pricing — Web Design, SEO & Care Plans | Cardinal Consulting Houston"
        description="Pricing guide for Cardinal Consulting: websites from $1,500, commerce from $3,500, mobile apps from $5K, SEO from $1,500/mo, and website care plans from $299/mo. Enterprise programs scoped individually."
        url={`${siteConfig.url}/pricing`}
        schemas={schemas}
        keywords={["web design pricing houston", "SEO retainer pricing", "website care plan", "houston web development cost", "digital agency pricing", "website maintenance pricing"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-[72px]">
          {/* Hero */}
          <section className="border-b border-border bg-secondary">
            <Container className="pb-16 pt-10 lg:pb-20 lg:pt-12">
              <Breadcrumbs items={[{ label: "Pricing" }]} />
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
                <Eyebrow className="mb-6">Pricing guide</Eyebrow>
                <h1 className="font-display text-4xl leading-[1.05] text-foreground md:text-5xl lg:text-6xl">Transparent investment, scoped to your goals</h1>
                <p className="mt-6 text-lg leading-relaxed text-text-secondary md:text-xl">
                  Every service has three engagement levels — Foundation, Growth, and Enterprise. Use this guide for budgeting; your final scope and price are confirmed in writing before work begins.
                </p>
              </motion.div>
              <nav aria-label="Jump to service" className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm">
                {services.map((s) => (
                  <a key={s.slug} href={`#${s.slug}`} className="font-medium text-text-secondary underline-offset-4 hover:text-foreground hover:underline">
                    {s.name}
                  </a>
                ))}
              </nav>
            </Container>
          </section>

          {services.map((s, i) => (
            <section key={s.slug} id={s.slug} className={`scroll-mt-24 border-b border-border py-20 lg:py-24 ${i % 2 === 1 ? "bg-secondary" : ""}`}>
              <Container>
                <motion.div {...reveal} className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{s.group}</p>
                    <h2 className="mt-2 font-display text-3xl text-foreground md:text-4xl">{s.name}</h2>
                    <p className="mt-3 text-muted-foreground">{s.summary}</p>
                  </div>
                  <Link to={s.path} className="inline-flex shrink-0 items-center gap-2 font-semibold text-foreground hover:text-primary">
                    About {s.name} <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                <div className="grid gap-6 md:grid-cols-3">
                  {s.tiers.map((tier, ti) => (
                    <motion.div key={tier.name} {...revealDelay(ti)}>
                      <PlanCard tier={tier} serviceSlug={s.slug} />
                    </motion.div>
                  ))}
                </div>
              </Container>
            </section>
          ))}

          {/* FAQ */}
          <section className="bg-secondary py-24 lg:py-32">
            <Container className="grid gap-12 lg:grid-cols-[1fr_2fr]">
              <motion.div {...reveal}>
                <Eyebrow className="mb-5">FAQ</Eyebrow>
                <h2 className="font-display text-3xl leading-tight text-foreground md:text-4xl">Pricing questions</h2>
              </motion.div>
              <Accordion type="single" collapsible className="border-t border-border">
                {faqs.map((faq, i) => (
                  <AccordionItem key={faq.q} value={`faq-${i}`} className="border-border">
                    <AccordionTrigger className="py-6 text-left text-lg font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                    <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Container>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
