import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Palette,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Check,
  Star,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchemas,
} from "@/lib/schema-generators";

const designProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We start every project with an in-depth discovery session to understand your Houston business, your competitors, your target audience, and your goals. We research your market — whether you're a law firm in Midtown, a medical practice near the Medical Center, or a luxury retailer in River Oaks — and build a creative strategy that positions you ahead of the competition.",
  },
  {
    step: "02",
    title: "Wireframes & Architecture",
    description:
      "Before a single color is chosen, we map your website's structure with detailed wireframes. Every page layout, user flow, and content hierarchy is planned strategically to maximize conversions and guide Houston visitors toward contacting you. This ensures the final design is both beautiful and purposeful.",
  },
  {
    step: "03",
    title: "Bespoke Visual Design",
    description:
      "This is where your brand comes to life. Our designers craft every pixel from scratch — typography, color palettes, imagery, spacing, animations — tailored specifically to your brand identity and Houston audience. No template libraries, no stock UI kits. 100% original design created exclusively for you.",
  },
  {
    step: "04",
    title: "Development & QA",
    description:
      "Our developers build your custom design with clean, fast, semantic code using React and modern web standards. Every component is hand-coded for performance, accessibility, and SEO. We QA on 15+ devices and browsers, testing load speeds, mobile responsiveness, and Core Web Vitals before launch.",
  },
  {
    step: "05",
    title: "Launch & Growth",
    description:
      "We launch your custom website with zero-downtime deployment, submit it to Google Search Console, configure analytics, and set up conversion tracking. Post-launch, we offer ongoing support, SEO monitoring, and design updates to keep your Houston business growing month after month.",
  },
];

const customBenefits = [
  {
    title: "Higher Conversion Rates",
    description:
      "Custom websites are designed around your specific customer journey. Unlike templates built for everyone, your site guides Houston visitors through a strategic path to conversion — resulting in more calls, form fills, and sales. Our clients average a 3–5x increase in lead generation after launching a custom site.",
  },
  {
    title: "100% Unique Brand Identity",
    description:
      "Templates are used by thousands of businesses across Houston and the world. A custom design is exclusively yours — no competitor will ever have the same look. This uniqueness builds instant brand recognition and credibility with your Houston audience from the first click.",
  },
  {
    title: "Stronger Brand Authority",
    description:
      "Houston clients judge your professionalism in milliseconds. A bespoke, luxurious design signals that your business is established, trustworthy, and serious. Law firms, medical practices, and Energy Corridor companies we've worked with report dramatically higher trust from new clients after switching to a custom design.",
  },
  {
    title: "Superior SEO Performance",
    description:
      "Custom code is lean, fast, and clean — with no bloated template CSS/JS dragging down your PageSpeed scores. Our custom builds consistently achieve 95–100 on Google PageSpeed Insights, which directly improves your Google rankings for Houston searches. Templates typically score 45–65.",
  },
  {
    title: "Lightning-Fast Load Speeds",
    description:
      "We code only what your site needs — no unused plugins, no overloaded theme frameworks. Your custom website loads in under 1.5 seconds, which reduces bounce rates, improves user experience for Houston visitors on mobile, and satisfies Google's Core Web Vitals requirements for ranking.",
  },
  {
    title: "Infinite Scalability",
    description:
      "As your Houston business grows, your custom site grows with it. Need a new service page? A client portal? An appointment booking system? Because we built it from scratch, adding new features is clean and straightforward — no plugin conflicts, no theme limitations. Your investment compounds over time.",
  },
];

const houstonIndustries = [
  {
    industry: "Houston Law Firms",
    description:
      "We design authoritative, conversion-optimized websites for personal injury, family law, criminal defense, and corporate law firms across Houston, Midtown, the Galleria, and the suburbs. Our law firm sites rank on page one and generate qualified client inquiries.",
  },
  {
    industry: "Medical Practices — Texas Medical Center",
    description:
      "Custom healthcare websites for dermatologists, orthopedic surgeons, cosmetic surgeons, and specialty clinics serving patients across the Texas Medical Center, Greenway Plaza, and Greater Houston. HIPAA-aware design with patient-focused UX.",
  },
  {
    industry: "Energy Corridor Businesses",
    description:
      "We create sophisticated corporate websites and client portals for energy companies, engineering firms, and oilfield services businesses headquartered in Houston's Energy Corridor — built to attract Fortune 500 clients and international contracts.",
  },
  {
    industry: "River Oaks Luxury Brands",
    description:
      "Bespoke, high-end website design for luxury retailers, interior designers, private wealth advisors, and exclusive service businesses serving Houston's River Oaks, Memorial, and Tanglewood communities. Every pixel reflects the prestige your brand demands.",
  },
  {
    industry: "Galleria-Area Retailers",
    description:
      "Custom e-commerce and brand websites for boutiques, jewelers, and specialty retailers around the Houston Galleria and Uptown District. We design for both in-store traffic and online sales, with product photography integration and seamless checkout experiences.",
  },
  {
    industry: "Downtown Houston Companies",
    description:
      "Corporate, financial services, consulting, and professional services firms in Downtown Houston trust Cardinal for websites that command respect. Our Downtown clients include B2B companies, commercial real estate firms, and enterprise software businesses.",
  },
];

const houstonNeighborhoods = [
  "The Woodlands",
  "Sugar Land",
  "Katy",
  "Pearland",
  "Cypress",
  "Spring",
  "League City",
  "Pasadena",
  "Conroe",
  "Friendswood",
  "Bellaire",
  "River Oaks",
];

const faqs = [
  {
    question: "How much does custom website design cost in Houston?",
    answer:
      "Custom website design in Houston typically ranges from $5,000 to $50,000+ depending on scope, complexity, and number of pages. A custom small-business website with 5–8 pages generally starts around $5,000–$10,000. For Houston law firms, medical practices, or e-commerce businesses needing custom functionality, pricing ranges from $10,000–$30,000. Enterprise-level custom websites for Energy Corridor corporations or large Houston businesses start at $30,000+. We provide transparent quotes with no hidden fees — call (281) 901-7016 for a free estimate.",
  },
  {
    question: "How long does custom web design take in Houston?",
    answer:
      "A custom website design project in Houston typically takes 4–8 weeks from kickoff to launch. Week 1–2 covers discovery and wireframing, Week 2–4 covers design and client revisions, Week 4–7 covers development and QA, and Week 7–8 covers testing, SEO setup, and launch. Rush projects (2–3 weeks) are available for Houston businesses with urgent timelines — contact us at (281) 901-7016 to discuss expedited delivery options.",
  },
  {
    question: "Why choose custom over WordPress in Houston?",
    answer:
      "WordPress websites — even 'premium' themes — are pre-built templates shared by hundreds of thousands of businesses. In Houston's competitive market, a template cannot differentiate your brand. Custom websites built with React and modern code achieve 95–100 PageSpeed scores vs. WordPress's typical 40–60, rank higher on Google for Houston searches, load 3x faster on mobile, require zero plugin maintenance, and are never susceptible to WordPress plugin security vulnerabilities. Custom is faster, safer, more unique, and more effective at generating Houston leads.",
  },
  {
    question: "Do you design websites for Houston small businesses?",
    answer:
      "Absolutely. We proudly serve Houston small businesses across all industries and budgets — from solo practitioners in Katy and Sugar Land to growing companies in The Woodlands and Pearland. We offer scaled custom design packages starting around $5,000 that give small Houston businesses a unique, professional online presence that competes with larger firms. We believe every Houston business deserves a custom website — not a generic template.",
  },
];

const testimonials = [
  {
    name: "Amanda K.",
    title: "Partner",
    company: "Kessler & Associates Law, Houston",
    quote:
      "We interviewed five Houston web design agencies and Cardinal was in a completely different league. They built us a 100% custom site that reflects our firm's prestige. Within three months of launching, we rank top 3 for every legal keyword that matters to us and our client intake has doubled.",
    stars: 5,
  },
  {
    name: "Dr. Sarah C.",
    title: "Medical Director",
    company: "Houston Dermatology Associates",
    quote:
      "Cardinal designed a completely custom website for our practice near the Medical Center. It's stunning, it loads instantly, and our new patient appointments increased 450% in six months. We've had patients specifically mention they chose us because our website looked more professional than our competitors.",
    stars: 5,
  },
  {
    name: "Maria L.",
    title: "Owner",
    company: "Luna Boutique, Houston Galleria",
    quote:
      "As a luxury boutique in the Galleria area, our website had to match the quality of our merchandise. Cardinal delivered a completely bespoke design that I'm genuinely proud to share with clients. Our e-commerce sales increased 500% and our bounce rate dropped from 78% to 31%. Worth every penny.",
    stars: 5,
  },
];

export default function CustomDesign() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Custom Website Design Houston | 100% Bespoke Web Design Houston Texas",
      description:
        "Houston's premier custom website design agency. 100% bespoke web design built from scratch — no templates, no shortcuts. Serving law firms, medical practices, luxury brands, and businesses across Houston TX.",
      url: `${siteConfig.url}/custom-design`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Custom Website Design Houston", url: `${siteConfig.url}/custom-design` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/custom-design#service`,
      name: "Custom Website Design Houston — 100% Bespoke Web Design",
      description:
        "100% custom website design crafted from scratch for Houston businesses. No templates, no shortcuts. Every pixel designed exclusively for your brand. Serving Houston TX and clients nationwide and worldwide.",
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: [
        { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "State", name: "Texas" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Custom Web Design Services Houston",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Business Website Design Houston" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Web Design Houston TX" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom E-Commerce Design Houston" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bespoke Landing Page Design Houston" } },
        ],
      },
    },
    ...generateFAQSchemas([
      {
        question: "How much does custom website design cost in Houston?",
        answer:
          "Custom website design in Houston typically ranges from $5,000 to $50,000+ depending on scope, complexity, and number of pages. Small-business custom websites generally start around $5,000–$10,000. For Houston law firms, medical practices, or e-commerce businesses, pricing ranges from $10,000–$30,000. Enterprise-level custom websites for Energy Corridor corporations start at $30,000+. We provide transparent quotes with no hidden fees.",
      },
      {
        question: "How long does custom web design take in Houston?",
        answer:
          "A custom website design project in Houston typically takes 4–8 weeks from kickoff to launch. Discovery and wireframing takes 1–2 weeks, design and revisions take 2–3 weeks, development and QA takes 2–3 weeks, and launch prep takes 1 week. Rush projects (2–3 weeks) are available for Houston businesses with urgent timelines.",
      },
      {
        question: "Why choose custom over WordPress in Houston?",
        answer:
          "Custom websites built with React achieve 95–100 PageSpeed scores vs. WordPress's typical 40–60, rank higher on Google for Houston searches, load 3x faster on mobile, require zero plugin maintenance, and are never susceptible to WordPress security vulnerabilities. Custom design also ensures your Houston business has a completely unique brand presence that no competitor can duplicate.",
      },
      {
        question: "Do you design websites for Houston small businesses?",
        answer:
          "Absolutely. We proudly serve Houston small businesses across all industries — from solo practitioners in Katy and Sugar Land to growing companies in The Woodlands and Pearland. We offer scaled custom design packages starting around $5,000 that give small Houston businesses a unique, professional online presence that competes with larger firms.",
      },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Custom Website Design Houston | 100% Bespoke Web Design Houston Texas"
        description="Houston's #1 custom website design agency. 100% bespoke web design built from scratch — no templates. Serving law firms, medical practices, luxury brands & small businesses across Houston TX. Call (281) 901-7016."
        keywords={[
          "custom website design houston",
          "bespoke web design houston texas",
          "custom web designer houston",
          "luxury web design houston tx",
          "no template website houston",
          "custom web design agency houston",
          "houston custom website",
          "professional web design houston",
          "unique website design houston",
          "custom business website houston",
          "houston law firm web design",
          "medical practice web design houston",
          "custom landing page houston",
          "high end web design houston",
          "houston web design from scratch",
        ]}
        url={`${siteConfig.url}/custom-design`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Houston's #1 Custom Web Design Agency
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6"
                >
                  Custom Website Design in Houston Texas —{" "}
                  <span className="text-red-600">Built From Scratch, Zero Templates</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
                >
                  Cardinal Consulting crafts 100% bespoke websites exclusively for your brand. No
                  templates, no cookie-cutter designs — just original, high-converting custom web
                  design built for Houston businesses that demand the best.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                      Get a Free Custom Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      Call (281) 901-7016
                    </Button>
                  </a>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-sm text-gray-500"
                >
                  Free consultation · No commitment · Houston-based team
                </motion.p>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="py-10 bg-red-600">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                {[
                  { value: "500+", label: "Custom Designs Delivered" },
                  { value: "100%", label: "Unique — Zero Templates" },
                  { value: "4.9★", label: "Average Client Rating" },
                  { value: "Houston TX", label: "Headquartered & Serving Nationwide" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-red-100 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Custom Design — 6 Benefits */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Sparkles className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Why Custom Beats Templates
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  6 Reasons Houston Businesses Choose Custom Web Design
                </h2>
                <p className="text-gray-600 text-lg">
                  Templates were built for the masses. Your Houston business deserves something built
                  exclusively for you.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customBenefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7 h-full">
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4 flex-shrink-0" />
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Design Process — 5 Steps */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Layers className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Our Process
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  How We Build Your Custom Houston Website
                </h2>
                <p className="text-gray-600 text-lg">
                  A proven 5-step process refined across 500+ custom design projects — structured to
                  deliver results, on time and on budget.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {designProcess.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7">
                      <div className="flex gap-6 items-start">
                        <div className="flex-shrink-0 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-serif text-xl text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Industries We Serve */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Palette className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Houston Industries
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Houston Brands We've Designed For
                </h2>
                <p className="text-gray-600 text-lg">
                  From the Texas Medical Center to the Energy Corridor, we design custom websites for
                  Houston's most demanding industries.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {houstonIndustries.map((item, i) => (
                  <motion.div
                    key={item.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7 h-full border-l-4 border-l-red-600">
                      <h3 className="font-serif text-lg text-gray-900 mb-3">{item.industry}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  What Houston Clients Say
                </h2>
                <p className="text-gray-600 text-lg">
                  Real results from real Houston businesses that invested in custom web design.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7 h-full flex flex-col">
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: t.stars }).map((_, s) => (
                          <Star key={s} className="w-4 h-4 fill-red-600 text-red-600" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-6 italic">
                        "{t.quote}"
                      </p>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-gray-500 text-xs">
                          {t.title} · {t.company}
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Neighborhoods */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Greater Houston Service Area
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Custom Web Design Across All Houston Neighborhoods
                </h2>
                <p className="text-gray-600 text-lg">
                  We serve businesses across Greater Houston — from The Woodlands to Pearland, from Katy
                  to League City and everywhere in between.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {houstonNeighborhoods.map((neighborhood, i) => (
                  <motion.div
                    key={neighborhood}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100"
                  >
                    <Check className="w-4 h-4 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700 text-sm font-medium">{neighborhood}</span>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-500 text-sm">
                  Don't see your area?{" "}
                  <a href="tel:281-901-7016" className="text-red-600 font-semibold hover:underline">
                    Call (281) 901-7016
                  </a>{" "}
                  — we serve all of Greater Houston and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* Houston FAQs */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Custom Web Design Houston — Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-lg">
                  Answers to the most common questions from Houston business owners about custom website
                  design.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7">
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Serving Houston + Nationwide + Worldwide */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Globe className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Our Reach
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">
                  Serving Houston, Texas, the Nation & the World
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Cardinal Consulting is Houston-based and Houston-proud — but our custom web design
                  work extends far beyond the 713 and 281 area codes.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: <MapPin className="w-8 h-8 text-red-600" />,
                    title: "Houston & Greater Texas",
                    description:
                      "Deep roots in Houston's business community. We serve companies across Harris County, Fort Bend, Montgomery, Galveston, and Brazoria counties. From Downtown Houston to Conroe, from Katy to League City — we know the Houston market inside and out.",
                  },
                  {
                    icon: <Check className="w-8 h-8 text-red-600" />,
                    title: "Nationwide United States",
                    description:
                      "We design custom websites for businesses in every state. Our fully remote-capable workflow means we deliver the same white-glove Houston-quality service to clients in New York, Los Angeles, Chicago, Miami, Dallas, and everywhere in between.",
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-red-600" />,
                    title: "International & Worldwide",
                    description:
                      "Custom web design for international businesses, multinational corporations, and global e-commerce brands. We've delivered projects for clients in Europe, Asia Pacific, the Middle East, and Latin America. Wherever you are, we can build your custom website.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <LuxuryCard className="p-7 h-full text-center">
                      <div className="flex justify-center mb-4">{item.icon}</div>
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-8 text-center">
                Explore Related Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "Web Developer Houston", href: "/houston-web-developer" },
                  { label: "UX/UI Design", href: "/services/ux-ui" },
                  { label: "Brand Identity", href: "/services/brand-identity" },
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "Web Development", href: "/services/web-development" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-center gap-1 p-3 rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 text-sm font-medium text-gray-700 transition-all text-center"
                  >
                    {link.label} <ArrowRight className="ml-1 w-3 h-3 text-red-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6">
                  <Sparkles className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Get Started Today
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Ready for a Website Built Exclusively for Your Brand?
                </h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
                  Stop blending in with template websites. Let's build something custom, powerful, and
                  uniquely yours. Free consultation — no commitment.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10">
                      Start Your Custom Design <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button size="lg" variant="outline" className="border-red-200 text-red-600 hover:bg-red-50">
                      Call (281) 901-7016
                    </Button>
                  </a>
                </div>
                <p className="text-gray-500 text-sm">
                  Houston's custom web design experts · 500+ projects delivered · 4.9★ rated
                </p>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
