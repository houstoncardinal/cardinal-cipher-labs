import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, HelpCircle, Shield, Zap, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema, generateServiceSchemas } from "@/lib/schema-generators";

const tiers = [
  {
    icon: Zap,
    name: "Starter",
    price: "$5,000",
    priceSuffix: "starting at",
    description: "Perfect for small businesses and startups looking to establish a professional digital presence.",
    features: [
      "Up to 5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup & meta tags",
      "Contact form integration",
      "Google Analytics setup",
      "2 rounds of revisions",
      "30-day post-launch support",
      "Performance optimization",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Shield,
    name: "Professional",
    price: "$10,000",
    priceSuffix: "starting at",
    description: "Ideal for growing businesses that need a comprehensive digital solution with advanced features.",
    features: [
      "Up to 15 pages",
      "Custom design & animations",
      "Advanced SEO optimization",
      "Schema markup implementation",
      "CMS integration",
      "E-commerce ready",
      "Analytics dashboard",
      "3 rounds of revisions",
      "3 months post-launch support",
      "Speed & performance tuning",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    icon: Crown,
    name: "Enterprise",
    price: "Custom",
    priceSuffix: "tailored quote",
    description: "For large organizations requiring custom solutions, complex integrations, and ongoing strategic partnership.",
    features: [
      "Unlimited pages & sections",
      "Custom functionality & APIs",
      "Enterprise-grade security",
      "Multi-language support",
      "Custom admin dashboards",
      "Load testing & optimization",
      "Dedicated project manager",
      "Priority support SLA",
      "12 months maintenance",
      "Ongoing strategic consulting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const addons = [
  { name: "Monthly SEO Retainer", price: "$2,000/mo", description: "Ongoing SEO optimization, content strategy, and monthly reporting." },
  { name: "Digital Marketing Campaign", price: "$3,000/mo", description: "Multi-channel marketing including PPC, social media, and email campaigns." },
  { name: "Brand Identity Package", price: "$5,000", description: "Complete brand kit including logo, guidelines, typography, and color palette." },
  { name: "Mobile App Development", price: "From $15,000", description: "Native or cross-platform mobile applications for iOS and Android." },
  { name: "AI/ML Integration", price: "Custom", description: "Intelligent automation, chatbots, predictive analytics, and custom AI solutions." },
  { name: "Ongoing Maintenance", price: "$1,000/mo", description: "Regular updates, security patches, backups, and technical support." },
];

const faqs = [
  { q: "Why is your base price $10,000?", a: "Our base price reflects the enterprise-grade quality we deliver. Every project includes custom design, advanced SEO, performance optimization, and ongoing support. We invest heavily in each project to ensure measurable business results." },
  { q: "Do you offer payment plans?", a: "Yes. We typically split payments into milestones: 40% upfront, 30% at design approval, and 30% at launch. For larger projects, we can customize the payment schedule." },
  { q: "What's included in post-launch support?", a: "Post-launch support includes bug fixes, minor content updates, performance monitoring, and technical assistance. Extended support plans include feature additions and strategic consulting." },
  { q: "Can I upgrade my package later?", a: "Absolutely. We design all our solutions to be scalable. You can add features, pages, or upgrade to a higher tier as your business grows." },
  { q: "Do you offer discounts for nonprofits?", a: "Yes, we offer special pricing for qualified nonprofit organizations. Contact us to discuss your project and budget." },
];

export default function Pricing() {
  const schemas = [
    ...generateServiceSchemas(),
    generateWebPageSchema({
      name: "Pricing — Cardinal Consulting",
      description: "Transparent pricing for enterprise-grade web development, digital marketing, and consulting services.",
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
      description: "Service packages and pricing for enterprise digital solutions.",
      provider: { "@id": `${siteConfig.url}#organization` },
      numberOfItems: tiers.length,
      itemListElement: tiers.map((tier, i) => ({
        "@type": "Offer",
        position: i + 1,
        name: tier.name,
        description: tier.description,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: tier.price,
        },
      })),
    },
  ];

  return (
    <>
      <SEOHead
        title="Pricing"
        description="Transparent pricing for Cardinal Consulting's web development, digital marketing, and enterprise consulting services. Starting at $5,000 with custom enterprise options."
        url={`${siteConfig.url}/pricing`}
        schemas={schemas}
        keywords={["web development pricing", "software consulting rates", "enterprise development cost", "digital agency pricing"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Pricing</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Investment in Your Digital Future</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Transparent pricing with packages designed for every business size. Every project is custom-tailored to your specific needs.</p>
              </motion.div>
            </div>
          </section>

          {/* Pricing Tiers */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((tier, i) => (
                  <motion.div key={tier.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}>
                    <LuxuryCard
                      elevation={tier.popular ? 4 : 2}
                      borderStyle={tier.popular ? "metallic-crimson" : "metallic-platinum"}
                      className={`p-8 h-full relative ${tier.popular ? "border-primary" : ""}`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Most Popular</div>
                      )}
                      <div className="text-center mb-8">
                        <tier.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                        <h3 className="font-serif text-2xl text-foreground mb-2">{tier.name}</h3>
                        <div className="font-serif text-4xl text-primary mb-1">{tier.price}</div>
                        <p className="text-xs text-muted-foreground mb-4">{tier.priceSuffix}</p>
                        <p className="text-sm text-muted-foreground">{tier.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={tier.popular ? "default" : "outline"} asChild>
                        <Link to="/contact">{tier.cta} <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Add-ons */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Add-On Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Enhance your project with additional services tailored to your needs.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {addons.map((addon, i) => (
                  <motion.div key={addon.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-lg text-foreground">{addon.name}</h3>
                      </div>
                      <div className="text-primary font-serif text-xl mb-2">{addon.price}</div>
                      <p className="text-sm text-muted-foreground">{addon.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Pricing FAQs</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6">
                      <div className="flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Get Started?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Every project begins with a free, no-obligation consultation. Let's discuss your goals and create a custom proposal.</p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
