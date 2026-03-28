import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, HelpCircle, Shield, Zap, Crown, RefreshCw, TrendingUp, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema, generateServiceSchemas } from "@/lib/schema-generators";

const websiteTiers = [
  {
    icon: Zap,
    name: "SMB Starter",
    price: "$3,000",
    priceSuffix: "one-time",
    description: "For small businesses that need a fast, professional website to get found online.",
    features: [
      "Up to 5-page custom website",
      "Mobile-first responsive design",
      "On-page SEO setup & meta tags",
      "Contact form & Google Maps",
      "Google Analytics integration",
      "2 rounds of revisions",
      "30-day post-launch support",
      "Core Web Vitals optimized",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    icon: Shield,
    name: "SMB Growth",
    price: "$8,000",
    priceSuffix: "one-time",
    description: "For growing businesses that need a full-featured site built to generate leads and rank on Google.",
    features: [
      "Up to 20 custom pages",
      "Premium design & micro-animations",
      "Advanced SEO & schema markup",
      "Blog / CMS integration",
      "Lead capture forms & automations",
      "E-commerce ready",
      "Analytics dashboard",
      "3 rounds of revisions",
      "90-day post-launch support",
      "PageSpeed 95+ guaranteed",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    icon: Crown,
    name: "Enterprise",
    price: "$25,000+",
    priceSuffix: "custom quote",
    description: "Fully custom solutions for companies with complex needs, integrations, and large teams.",
    features: [
      "Unlimited pages & sections",
      "Custom APIs & integrations",
      "Enterprise-grade security",
      "Multi-location / multi-language",
      "Custom admin dashboards",
      "Load testing & optimization",
      "Dedicated project manager",
      "Priority support SLA",
      "12-month maintenance included",
      "Quarterly strategy consulting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const seoTiers = [
  {
    name: "SEO Foundation",
    price: "$1,500/mo",
    description: "Local SEO to dominate your city and get consistent leads every month.",
    features: [
      "Google Business Profile optimization",
      "On-page SEO (up to 10 pages/mo)",
      "Local citation building",
      "Monthly keyword rank tracking",
      "Technical SEO audits",
      "Monthly performance report",
    ],
  },
  {
    name: "SEO Growth",
    price: "$2,500/mo",
    description: "Comprehensive SEO to outrank competitors and build lasting organic traffic.",
    features: [
      "Everything in Foundation",
      "Content marketing (4 blogs/mo)",
      "Link building & authority growth",
      "Competitor gap analysis",
      "Schema markup expansion",
      "Bi-weekly strategy calls",
    ],
    popular: true,
  },
  {
    name: "SEO Domination",
    price: "$4,000/mo",
    description: "Aggressive, full-scale SEO for businesses that want to own their market.",
    features: [
      "Everything in Growth",
      "8 long-form blog articles/mo",
      "PR & digital outreach",
      "Core Web Vitals monitoring",
      "Multi-location SEO",
      "Weekly reporting & calls",
    ],
  },
];

const carePlans = [
  {
    name: "Care Essentials",
    price: "$299/mo",
    description: "Keep your site secure, updated, and running smoothly.",
    features: [
      "Monthly plugin & software updates",
      "Daily cloud backups",
      "Uptime monitoring (24/7)",
      "Security scanning & malware removal",
      "1 hr content updates/mo",
    ],
  },
  {
    name: "Care Plus",
    price: "$499/mo",
    description: "Proactive maintenance with performance improvements and priority support.",
    features: [
      "Everything in Essentials",
      "Quarterly design refreshes",
      "Core Web Vitals monitoring",
      "3 hrs content updates/mo",
      "Priority 24-hr support response",
      "Monthly analytics review",
    ],
    popular: true,
  },
  {
    name: "Care Pro",
    price: "$799/mo",
    description: "Full-service digital partner — your site always improving, never stagnant.",
    features: [
      "Everything in Plus",
      "6 hrs development updates/mo",
      "A/B testing & CRO suggestions",
      "New feature development",
      "Dedicated account manager",
      "Quarterly strategy sessions",
    ],
  },
];

const faqs = [
  { q: "What's the difference between SMB Starter and SMB Growth?", a: "SMB Starter is a lean, fast-to-launch site for businesses that need an online presence now. SMB Growth is a full-featured lead generation engine — more pages, higher SEO investment, and analytics tooling built in from day one. Most clients who are actively trying to grow revenue choose Growth." },
  { q: "Do you offer payment plans?", a: "Yes. We offer a simple 50/50 split: 50% to start, 50% at launch. For projects over $10,000 we can also structure milestone-based payments. Ask about this during your free consultation." },
  { q: "Why should I add an SEO retainer after my website launches?", a: "A website without SEO is like a billboard in the desert — nobody sees it. Our SEO retainers are what drive consistent, compounding organic traffic month over month. Most clients see first-page rankings within 90 days and significant lead increases by month 6." },
  { q: "What's included in a Website Care Plan?", a: "Care Plans keep your site secure, fast, and up-to-date without you lifting a finger. This includes software updates, backups, uptime monitoring, and content edits each month. Without a maintenance plan, websites become vulnerable to hacks and performance degradation within 6-12 months." },
  { q: "Can I upgrade my package later?", a: "Absolutely. All our solutions are built to scale. You can add pages, upgrade your SEO tier, or layer on a Care Plan at any time." },
  { q: "Do you offer discounts for nonprofits?", a: "Yes, we offer special pricing for qualified nonprofits. Contact us to discuss your project and budget." },
];

export default function Pricing() {
  const schemas = [
    ...generateServiceSchemas(),
    generateWebPageSchema({
      name: "Pricing — Cardinal Consulting",
      description: "Transparent pricing for web design, SEO retainers, and website care plans for Houston businesses. SMB packages from $3,000.",
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
      description: "Web design, SEO retainer, and website care plan pricing for Houston businesses.",
      provider: { "@id": `${siteConfig.url}#organization` },
      numberOfItems: websiteTiers.length,
      itemListElement: websiteTiers.map((tier, i) => ({
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
        title="Pricing — Web Design, SEO & Care Plans | Cardinal Consulting Houston"
        description="Transparent pricing for web design ($3K–$8K), SEO retainers ($1,500–$4,000/mo), and website care plans ($299–$799/mo). Houston SMB and Enterprise packages available."
        url={`${siteConfig.url}/pricing`}
        schemas={schemas}
        keywords={["web design pricing houston", "SEO retainer pricing", "website care plan", "houston web development cost", "digital agency pricing", "website maintenance pricing"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center">
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Transparent Pricing</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Simple, Honest Pricing</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">No hidden fees. No locked-in contracts. Just clear investment tiers built to grow Houston businesses. Call <a href="tel:281-901-7016" className="text-primary font-semibold">(281) 901-7016</a> for a custom quote.</p>
              </motion.div>
            </div>
          </section>

          {/* Website Packages */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Website Design &amp; Development</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">One-time investment. Fully custom. No templates.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {websiteTiers.map((tier, i) => (
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

          {/* SEO Retainers */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">Primary Revenue Driver</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">SEO Monthly Retainers</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">The highest-ROI investment for Houston businesses. Consistent organic leads every month — compounding over time.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {seoTiers.map((tier, i) => (
                  <motion.div key={tier.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard
                      elevation={tier.popular ? 4 : 2}
                      borderStyle={tier.popular ? "metallic-crimson" : "metallic-platinum"}
                      className={`p-8 h-full relative ${tier.popular ? "border-primary" : ""}`}
                    >
                      {tier.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Best Value</div>
                      )}
                      <h3 className="font-serif text-xl text-foreground mb-2">{tier.name}</h3>
                      <div className="font-serif text-3xl text-primary mb-2">{tier.price}</div>
                      <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                      <ul className="space-y-3 mb-8">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${tier.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={tier.popular ? "default" : "outline"} asChild>
                        <Link to="/contact">Start SEO <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Website Care Plans */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                  <RefreshCw className="w-4 h-4 text-primary" />
                  <span className="text-xs tracking-[0.2em] uppercase text-primary font-semibold">Monthly Plans</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Website Care Plans</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Keep your website fast, secure, and always improving — without touching a single line of code yourself.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {carePlans.map((plan, i) => (
                  <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard
                      elevation={plan.popular ? 4 : 2}
                      borderStyle={plan.popular ? "metallic-crimson" : "metallic-platinum"}
                      className={`p-8 h-full relative ${plan.popular ? "border-primary" : ""}`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Most Popular</div>
                      )}
                      <h3 className="font-serif text-xl text-foreground mb-2">{plan.name}</h3>
                      <div className="font-serif text-3xl text-primary mb-2">{plan.price}</div>
                      <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={plan.popular ? "default" : "outline"} asChild>
                        <Link to="/contact">Get This Plan <ArrowRight className="ml-2 w-4 h-4" /></Link>
                      </Button>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 lg:py-32 bg-card/50">
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
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Not Sure Which Plan Fits?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's talk. Every project starts with a free consultation. Call <a href="tel:281-901-7016" className="text-primary font-semibold">(281) 901-7016</a> or schedule online.</p>
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
