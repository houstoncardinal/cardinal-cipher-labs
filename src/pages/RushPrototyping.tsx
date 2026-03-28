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

const features = [
  {
    title: "48-Hour MVP Delivery",
    description:
      "Get a functional minimum viable product in your hands within 48 hours. We strip away non-essentials and build only what's needed to validate your idea with real Houston users. No bloat, no delays.",
  },
  {
    title: "Real Working Prototypes",
    description:
      "Not static mockups — actual working prototypes with real data, real interactions, and real user flows. Houston investors and early customers can click, use, and respond to something tangible from day one.",
  },
  {
    title: "Houston Market Validation",
    description:
      "We help you design your MVP for the Houston market — understanding local industry verticals like energy, healthcare, real estate, and logistics so your prototype resonates with the users you need to impress.",
  },
  {
    title: "Rapid Iteration Cycles",
    description:
      "Ship, test, learn, repeat. Our agile process allows you to release an MVP, gather user feedback within days, and ship an improved version the following week. No waiting months for a second round.",
  },
  {
    title: "Investor-Ready Demos",
    description:
      "Whether you're pitching Houston angel investors, venture firms, or corporate partners, our prototypes are polished enough to take to any demo day or investor meeting with full confidence.",
  },
  {
    title: "Pathway to Full Product",
    description:
      "Your MVP is just the beginning. We document everything — architecture, decisions, roadmap — so the transition from prototype to production-ready product is smooth, fast, and cost-effective.",
  },
];

const process = [
  {
    day: "Day 1–2",
    title: "Scope & Architecture",
    description:
      "We hold an intensive scoping session to define your MVP's core user story, the one problem it solves, and the minimum set of features required to test that solution with real users. We map out the technical architecture, choose the fastest build stack for your use case, and finalize a scope that we can realistically ship within 48–72 hours. Houston startup founders are often surprised how focused — and powerful — a well-scoped MVP can be.",
  },
  {
    day: "Day 3–5",
    title: "Rapid Build & Integration",
    description:
      "Our developers build in sprints, delivering working modules each day rather than waiting until the end. We use pre-built UI systems, proven backend patterns, and lean integrations to accelerate development without sacrificing stability. You'll receive daily progress updates and can review the staging environment at any point. By the end of Day 5, you have a fully functional MVP ready for user testing.",
  },
  {
    day: "Day 6–7",
    title: "Test, Polish & Hand-Off",
    description:
      "We run user acceptance testing, fix edge cases, polish the UI to a presentable level, and deliver your prototype on a live URL. You receive complete documentation, credentials, and a clear product roadmap for Phase 2. We also support your first round of user testing sessions — helping you structure feedback loops so you get actionable data from your first real users in Houston and beyond.",
  },
];

const testimonials = [
  {
    author: "Daniel F.",
    title: "Co-Founder, EnergyTrack — Houston, TX",
    body: "We needed an MVP for a pitch to an energy company in the Galleria area in just 5 days. Cardinal built a full prototype with a working dashboard that blew the client away. We closed the deal. Genuinely the fastest and most impressive team I've worked with.",
    rating: 5,
  },
  {
    author: "Alicia M.",
    title: "CEO, HealthBridge Houston — Houston Medical Center",
    body: "I had a healthcare app concept and needed something tangible for a TEDx Houston pitch. Cardinal delivered a polished, clickable prototype in under a week. The audience thought it was a finished product. We had 30 people sign up for beta the same evening.",
    rating: 5,
  },
  {
    author: "Brian C.",
    title: "Founder, PropMatch — The Woodlands, TX",
    body: "Rapid prototyping from Cardinal was a game-changer. We had a real estate app concept and weren't sure if it would resonate with Houston buyers. They built the MVP in 6 days, we tested with 20 people in The Woodlands, and now we're in full development with paying customers already lined up.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How fast can you build an MVP or prototype in Houston?",
    answer:
      "We deliver functional MVPs in 48–72 hours for simple apps and 5–7 days for more complex platforms. Simple landing-page MVPs with lead capture and core content can go live in under 48 hours. Web app MVPs with user authentication, dashboards, and database integrations typically take 5–7 days. Full-featured prototypes with third-party API integrations take 1–2 weeks. We serve Houston proper and all surrounding cities — The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, League City, Pasadena, Conroe, and more.",
  },
  {
    question: "Do you do rush prototyping for Houston startups and businesses?",
    answer:
      "Yes — rush prototyping is one of our most-requested services for Houston startups, especially those in the energy tech, healthcare, real estate, and logistics sectors that Houston is known for. We offer dedicated rush tracks with same-week delivery, daily progress check-ins, and direct developer communication. If you have a pitch, demo day, or investor meeting coming up in Houston and need a working prototype fast, call us at (281) 901-7016 and we'll start immediately.",
  },
  {
    question: "What is the difference between an MVP and a prototype in Houston app development?",
    answer:
      "A prototype is typically a visual or partially-functional representation of an app — great for user testing, investor demos, and internal alignment. An MVP (minimum viable product) is a fully functional application with real features, real data, and real users. At Cardinal Cipher Labs, we build both: clickable prototypes for early validation, and working MVPs for actual market testing. Houston founders often start with a prototype, get feedback, then move to an MVP — and we support that entire journey.",
  },
  {
    question: "Can I get a rush prototype built the same week in Houston TX?",
    answer:
      "Yes. Same-week prototyping and MVP delivery is our specialty. Contact us Monday morning and we can have a working prototype or MVP in your hands by Friday. Our team in Houston is ready to kick off projects immediately — we schedule a same-day discovery call, align on scope, and begin building within hours. Call (281) 901-7016 or fill out our contact form to get started today. We also work with Houston clients in The Woodlands, Sugar Land, Katy, Pearland, Cypress, and all surrounding areas.",
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
  { label: "Fast Website Delivery", href: "/rapid-delivery" },
  { label: "App Development Houston", href: "/houston-app-development" },
  { label: "Web Development Services", href: "/services/web-development" },
  { label: "Mobile App Services", href: "/services/mobile-apps" },
  { label: "Houston Web Design", href: "/houston-web-design" },
  { label: "Houston Web Developer", href: "/houston-web-developer" },
];

export default function RushPrototyping() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Rush Prototyping Houston | MVP Development Houston Texas | Cardinal Cipher Labs",
      description:
        "Houston's top rush prototyping and MVP development agency. Get a working app prototype or minimum viable product in 48–72 hours. Serving Houston, The Woodlands, Sugar Land, Katy, Pearland, Cypress, and all of Greater Houston TX.",
      url: `${siteConfig.url}/rush-prototyping`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Rush Prototyping Houston", url: `${siteConfig.url}/rush-prototyping` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/rush-prototyping#service`,
      name: "Rush Prototyping & MVP Development Houston Texas",
      description:
        "Rapid MVP and app prototype development for Houston startups and businesses. Get a working prototype in 48–72 hours. Serving Greater Houston TX and clients nationwide and worldwide.",
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
      serviceType: "Software Development",
    },
    ...generateFAQSchemas(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Rush Prototyping Houston | MVP Development Houston Texas | Cardinal Cipher Labs"
        description="Houston's fastest rush prototyping and MVP development agency. Get a working app prototype in 48–72 hours. Serving Houston, The Woodlands, Sugar Land, Katy, Pearland, and all of Greater Houston TX. Call (281) 901-7016."
        keywords={[
          "rush prototyping houston",
          "mvp development houston texas",
          "rapid prototype houston",
          "app prototype houston tx",
          "minimum viable product houston",
          "startup mvp houston",
          "fast app prototype houston",
          "same week mvp houston",
          "mvp development houston",
          "prototype development houston texas",
          "rush app development houston",
          "the woodlands mvp development",
          "sugar land app prototyping",
          "katy tx startup mvp",
          "houston startup app development",
          "investor demo app houston",
          "rapid mvp houston tx",
          "houston mvp agency",
        ]}
        url={`${siteConfig.url}/rush-prototyping`}
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
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Rush Prototyping — Houston TX
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Rush Prototyping &{" "}
                  <span className="text-red-600">MVP Development</span> in Houston Texas
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
                >
                  Stop waiting months to validate your app idea. Cardinal Cipher Labs builds
                  functional MVPs and app prototypes in as little as 48 hours — for Houston
                  startups, energy tech companies, healthcare innovators, real estate platforms,
                  and entrepreneurs across The Woodlands, Katy, Sugar Land, and Greater Houston.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-base text-gray-500 mb-10 max-w-xl mx-auto"
                >
                  Investor pitches, demo days, user testing, or market validation — we deliver
                  working products, not just wireframes. Real apps. Real fast. Houston TX.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Start My MVP Today <ArrowRight className="ml-2 w-4 h-4" />
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
                  { icon: Clock, value: "48-Hour", label: "MVP Delivery" },
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

          {/* Features */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Why Houston Businesses Choose Rush Prototyping
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Houston is a city built on bold bets and fast execution. Whether you're in
                  energy tech, healthcare, real estate, or consumer apps, our rush prototyping
                  service gives you the speed advantage you need to outpace the competition.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
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
                  Our Houston MVP Build Process
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  A proven, disciplined sprint process refined over 500+ projects. We move fast
                  by planning smart — every hour on the prototype is maximized because we've done
                  this before for Houston clients across every industry vertical.
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
                  Cardinal Cipher Labs is a Houston-based prototyping and development agency
                  serving startups and businesses across the entire Greater Houston metro. Whether
                  you're a founder in Midtown, a tech company in The Woodlands, a healthcare
                  startup near the Texas Medical Center, or a real estate platform in Sugar Land —
                  we're your local MVP partner.
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
                  Houston's startup scene is growing fast — from Greentown Labs to Station Houston
                  to the Texas Medical Center innovation hub. We understand the local ecosystem and
                  build prototypes that resonate with Houston investors, partners, and users. Our
                  deep familiarity with the Houston market means faster decisions, fewer
                  misunderstandings, and a final product your target audience will actually use.
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
                  What Houston Founders Say
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Real results from Houston startups and entrepreneurs who needed functional
                  prototypes and MVPs delivered fast.
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
                  Rush Prototyping Houston — FAQ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Common questions from Houston founders and business owners about our rush
                  prototyping and MVP development service.
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
                  we can build your MVP fast. Our remote-ready process means we collaborate
                  seamlessly across time zones — using video calls, shared project boards, and
                  async updates to keep things moving at sprint speed regardless of geography.
                  Houston is home, but great products know no borders.
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
                <Rocket className="w-10 h-10 text-red-400 mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Ready to Build Your Houston MVP?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                  Don't let your idea sit in a Google Doc for another month. Let's build something
                  real, fast. Call us now or start your project online — we can kick off today and
                  have your prototype in your hands by end of week.
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
