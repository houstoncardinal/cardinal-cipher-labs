import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Rocket, Zap, Clock, ArrowRight, Check, Star, CheckCircle2,
  Globe, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchemas,
} from "@/lib/schema-generators";

const benefits = [
  {
    title: "Launch Before Competitors",
    description:
      "In Houston's fast-moving business market, being first online matters. We get your site live in 72 hours so you capture leads while others are still in planning meetings.",
  },
  {
    title: "Start Generating Leads Immediately",
    description:
      "Every day offline is revenue lost. A live website means Google can index you, visitors can find you, and prospects can call you — starting this week.",
  },
  {
    title: "Reduce Time-to-Market Dramatically",
    description:
      "Traditional agencies take 4–12 weeks. Our streamlined process delivers the same professional quality in days, cutting your time-to-market by up to 90%.",
  },
  {
    title: "Validate Before Over-Investing",
    description:
      "Launch lean, test with real Houston customers, and invest in features that actually drive results. No more spending months on a site no one tested.",
  },
  {
    title: "Build Investor & Partner Confidence",
    description:
      "Whether you're pitching Houston investors or signing a partnership deal, a polished live website signals you're serious, credible, and ready for business.",
  },
  {
    title: "Stay Ahead of Market Trends",
    description:
      "The Houston market moves fast — energy, healthcare, real estate, tech. Rapid delivery means you can act on opportunities the moment they arise.",
  },
];

const process = [
  {
    day: "Day 1–2",
    title: "Discovery & Strategy",
    description:
      "We kick off with a deep-dive call to learn your Houston business, target audience, and goals. We define your sitemap, select proven page templates, gather your content and brand assets, and deliver a clear project roadmap. You know exactly what's being built before a single line of code is written.",
  },
  {
    day: "Day 3–5",
    title: "Design & Development",
    description:
      "Our team works in parallel — designers and developers simultaneously — using component-driven architecture and battle-tested UI systems. We build mobile-first, performance-optimized pages with Houston-specific SEO baked in from day one. You review a staging preview and approve before we finalize.",
  },
  {
    day: "Day 6–7",
    title: "QA, SEO & Launch",
    description:
      "We run thorough cross-browser and cross-device testing, configure your domain, set up Google Analytics and Search Console, submit your sitemap, and go live. You receive a launch checklist and 30-day post-launch support so you're never left hanging.",
  },
];

const testimonials = [
  {
    author: "Marcus T.",
    title: "Owner, Bayou City HVAC — Houston, TX",
    body: "I needed a website fast before a big trade show in the Energy Corridor. Cardinal had us live in 4 days — professional, mobile-friendly, and already ranking on Google within 2 weeks. Unbelievable service.",
    rating: 5,
  },
  {
    author: "Priya S.",
    title: "Founder, Katy Med Spa — Katy, TX",
    body: "We opened a new location in Katy and needed a site immediately. Cardinal delivered a beautiful site with online booking in 72 hours. We had our first web booking the day after launch. These guys are the real deal.",
    rating: 5,
  },
  {
    author: "James R.",
    title: "CEO, Pearland Logistics — Pearland, TX",
    body: "Our old site was embarrassing. Cardinal rebuilt it from scratch in under a week and it looks like a Fortune 500 company made it. The speed was incredible — 5 days from first call to fully live.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How fast can you build a website in Houston?",
    answer:
      "We can launch a professional website for your Houston business in as little as 72 hours. Landing pages and single-page sites can go live in 1–2 days. Small business websites with 5–10 pages typically launch in 3–5 days. Larger sites with custom features, e-commerce, or integrations take 1–2 weeks. We serve clients in Houston proper and all surrounding areas including The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, and League City.",
  },
  {
    question: "Do you serve The Woodlands, Sugar Land, Katy, and other Houston suburbs?",
    answer:
      "Absolutely. Cardinal Cipher Labs serves all of Greater Houston — including The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, League City, Pasadena, Conroe, Friendswood, Bellaire, River Oaks, and every neighborhood in between. We work remotely and in-person, so location is never a barrier. We also serve clients across Texas, nationwide, and internationally.",
  },
  {
    question: "Can I get a rush website built the same week in Houston?",
    answer:
      "Yes — same-week delivery is our specialty. If you contact us Monday morning, your website can be live by Friday. We offer true rush delivery for Houston businesses that need to move fast: new business launches, upcoming events, trade shows, investor pitches, or rebrand rollouts. Call us at (281) 901-7016 to get started today.",
  },
  {
    question: "What is the fastest way to get a website built in Houston TX?",
    answer:
      "The fastest way is to call or contact Cardinal Cipher Labs directly at (281) 901-7016. We'll schedule a same-day kickoff call, gather your content and brand assets, and begin building immediately. Our team works in parallel using a proven rapid-build system so we're not waiting on one person at a time. Most Houston clients are surprised when we ask for approval on a working staging site just 48–72 hours after our first call.",
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

const relatedServices = [
  { label: "Houston Web Design", href: "/houston-web-design" },
  { label: "App Development Houston", href: "/houston-app-development" },
  { label: "Houston Web Developer", href: "/houston-web-developer" },
  { label: "Houston SEO Company", href: "/houston-seo-company" },
  { label: "Rush Prototyping", href: "/rush-prototyping" },
  { label: "Web Development Services", href: "/services/web-development" },
];

export default function RapidDelivery() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Fast Website Design Houston | Live in 72 Hours | Cardinal Cipher Labs",
      description:
        "Houston's fastest website design agency. Get a professional, SEO-optimized website live in as little as 72 hours. Serving Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, and all of Greater Houston TX.",
      url: `${siteConfig.url}/rapid-delivery`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Fast Website Design Houston", url: `${siteConfig.url}/rapid-delivery` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/rapid-delivery#service`,
      name: "Fast Website Design Houston — 72-Hour Delivery",
      description:
        "Professional website design and development delivered in as little as 72 hours. Serving Houston TX businesses and clients nationwide and worldwide.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}#organization`,
        name: "Cardinal Cipher Labs",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Houston",
          addressRegion: "TX",
          addressCountry: "US",
        },
        telephone: "+12819017016",
      },
      areaServed: [
        { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "The Woodlands" },
        { "@type": "City", name: "Sugar Land" },
        { "@type": "City", name: "Katy" },
        { "@type": "City", name: "Pearland" },
        { "@type": "City", name: "Cypress" },
        { "@type": "State", name: "Texas" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "Australia" },
      ],
      offers: {
        "@type": "Offer",
        priceRange: "$$",
        availability: "https://schema.org/InStock",
      },
      serviceType: "Web Design",
    },
    ...generateFAQSchemas(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Fast Website Design Houston | 72-Hour Delivery | Cardinal Cipher Labs"
        description="Houston's fastest website design agency. Get a professional, SEO-optimized website live in as little as 72 hours. Serving The Woodlands, Sugar Land, Katy, Pearland, Cypress, and all of Greater Houston TX. Call (281) 901-7016."
        keywords={[
          "fast website design houston",
          "rapid web development houston texas",
          "72 hour website houston",
          "rush website design houston",
          "same week website houston",
          "quick website design houston tx",
          "houston web design fast delivery",
          "rush web development houston",
          "emergency website design houston",
          "fast website launch houston",
          "website in 3 days houston",
          "rapid website houston texas",
          "the woodlands web design fast",
          "sugar land website design fast",
          "katy tx fast web design",
          "pearland website design rush",
          "houston website design same week",
          "fast web agency houston tx",
        ]}
        url={`${siteConfig.url}/rapid-delivery`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <Rocket className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Fast Website Design — Houston TX
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Houston's Fastest Website Design —{" "}
                  <span className="text-red-600">Live in 72 Hours</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
                >
                  While other Houston agencies are still scheduling discovery calls, your new
                  website will already be live. We build fast, we build right, and we build for
                  results — for businesses across Houston, The Woodlands, Sugar Land, Katy,
                  Pearland, and all of Greater Houston TX.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-base text-gray-500 mb-10 max-w-xl mx-auto"
                >
                  Rapid website design for Houston small businesses, startups, and enterprises.
                  Professional. SEO-ready. Mobile-first. Delivered in as little as 72 hours.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Get My Fast Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button size="lg" variant="outline">
                      Call (281) 901-7016
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20">
                {[
                  { icon: Rocket, value: "500+", label: "Projects Delivered" },
                  { icon: Clock, value: "72-Hr", label: "Minimum Delivery" },
                  { icon: Star, value: "4.9★", label: "Client Rating" },
                  { icon: MapPin, value: "Houston TX", label: "Based & Serving Nationwide" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-7 h-7 text-red-400 mx-auto mb-2" />
                    <div className="font-serif text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Why Speed Matters for Houston Businesses
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Houston's economy is one of the most competitive in the country. Every day
                  without a professional website is a day your competitors are winning customers
                  that should be yours.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Our 72-Hour Houston Website Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  A streamlined, battle-tested process built specifically for fast delivery without
                  sacrificing quality or SEO performance. Here's exactly how we get your Houston
                  website live in record time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {process.map((step, i) => (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <div className="text-xs uppercase tracking-wider text-red-600 font-bold mb-2">
                        {step.day}
                      </div>
                      <h3 className="font-serif text-2xl text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Neighborhoods */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Local Houston Coverage
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Serving All of Greater Houston
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Cardinal Cipher Labs is a Houston-based web design agency proudly serving
                  businesses across the entire Greater Houston metro area. Whether you're in
                  Midtown Houston, The Woodlands, or anywhere in between, we deliver fast, local
                  service with a deep understanding of the Houston market.
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {houstonNeighborhoods.map((hood, i) => (
                  <motion.div
                    key={hood}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    <MapPin className="w-3 h-3 text-red-600" />
                    {hood}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <p className="text-gray-600 leading-relaxed">
                  From The Woodlands to Pearland, from Katy to Pasadena, we know the Houston
                  market. We understand what Houston customers search for online, and we build
                  websites that rank in local Houston search results. Our fast delivery means you
                  can have a Houston-optimized website live before your next business week even
                  starts.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  What Houston Clients Say
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Real results from real Houston businesses who needed fast, professional websites.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full flex flex-col">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">"{t.body}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{t.author}</div>
                        <div className="text-sm text-gray-500">{t.title}</div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Fast Website Design Houston — FAQ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Answers to the most common questions from Houston business owners about our
                  rapid website design and delivery service.
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8">
                      <div className="flex items-start gap-4">
                        <Check className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif text-xl text-gray-900 mb-3">
                            {faq.question}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Serving Houston + Nationwide + Worldwide */}
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <Globe className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
                  Based in Houston TX — Serving Clients Everywhere
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Based in Houston TX, we serve clients across Texas, nationwide across the US,
                  and internationally including Canada, UK, Australia, and more. Wherever you are,
                  we can build your website fast. Our rapid delivery process is fully remote-ready
                  — we collaborate via video call, shared tools, and async communication so
                  distance is never a barrier. Houston is home, but the world is our client base.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-8 text-center">
                Explore Related Houston Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-center gap-1 p-3 rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 text-sm font-medium text-gray-700 transition-all text-center"
                  >
                    {link.label}{" "}
                    <ArrowRight className="ml-1 w-3 h-3 text-red-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Zap className="w-10 h-10 text-red-400 mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Ready to Launch Your Houston Website Fast?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                  Get a free consultation and a fast quote for your Houston web design project.
                  We'll tell you exactly how long it takes and what it costs — no fluff, no
                  runaround. Call us now or start online.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:281-901-7016">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      Call (281) 901-7016
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                    >
                      Start Online <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
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
