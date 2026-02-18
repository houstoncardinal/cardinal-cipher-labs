import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { MobileToolbar } from "@/components/layout/MobileToolbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Building2, HardHat, Ruler, Wrench, ArrowRight, Check,
  ChevronDown, Star, MapPin, Search, TrendingUp, Shield,
  Users, Smartphone, Globe, Megaphone
} from "lucide-react";

const stats = [
  { value: "35+", label: "Construction Companies Served" },
  { value: "300%", label: "Average Lead Increase" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Client Rating" },
];

const services = [
  {
    icon: Building2,
    title: "Construction Company Websites",
    description: "Custom-built, responsive websites designed specifically for general contractors, home builders, and commercial construction firms. Showcase your portfolio, certifications, and project timelines with professional layouts that convert visitors into qualified leads.",
  },
  {
    icon: TrendingUp,
    title: "Contractor Lead Generation",
    description: "Data-driven lead generation systems built for the construction industry. From optimized landing pages and PPC campaigns to quote request funnels, we deliver a steady pipeline of homeowners and businesses actively seeking construction services.",
  },
  {
    icon: Ruler,
    title: "Project Portfolio Development",
    description: "Stunning before-and-after galleries, interactive project timelines, and detailed case studies that showcase your craftsmanship. We build portfolio systems that let prospective clients explore your work by project type, budget, and location.",
  },
  {
    icon: Search,
    title: "Construction SEO & Local Marketing",
    description: "Dominate local search results for high-intent keywords like 'general contractor near me' and 'home builder Houston.' We optimize your Google Business Profile, build local citations, and create content strategies that rank on page one.",
  },
  {
    icon: Megaphone,
    title: "Builder Branding & Identity",
    description: "Professional brand identity systems for construction companies — from logos and truck wraps to hard hat decals and jobsite signage. We create cohesive visual identities that project trust, reliability, and craftsmanship across every touchpoint.",
  },
  {
    icon: Smartphone,
    title: "Field Service App Development",
    description: "Custom mobile applications for field teams — project management dashboards, daily log tracking, safety checklists, photo documentation, and real-time crew communication tools that keep your jobsites running efficiently.",
  },
];

const differentiators = [
  {
    icon: HardHat,
    title: "Deep Construction Industry Knowledge",
    description: "Our team understands the construction business inside and out — from permit timelines and subcontractor management to bonding requirements and seasonal demand cycles. We speak your language and build solutions that reflect how you actually work.",
  },
  {
    icon: TrendingUp,
    title: "Proven Lead Generation Systems",
    description: "We don't just build beautiful websites — we engineer lead machines. Our construction clients see an average 300% increase in qualified leads within 6 months through optimized funnels, local SEO, and targeted paid advertising campaigns.",
  },
  {
    icon: MapPin,
    title: "Local SEO Domination",
    description: "Construction is a local business. We ensure your company appears at the top of Google Maps and local search results in every service area you cover, driving phone calls and quote requests from homeowners and property managers in your market.",
  },
  {
    icon: Shield,
    title: "Reliability You Can Count On",
    description: "Just like you build structures that stand the test of time, we build digital assets with 99.9% uptime, enterprise-grade security, and ongoing support. Your website works as hard as your crew — 24/7, rain or shine.",
  },
];

const results = [
  {
    company: "Houston General Contracting Firm",
    metric: "340%",
    description: "Increase in qualified leads within 4 months of launching their new website and local SEO campaign. Monthly quote requests jumped from 12 to 53, resulting in $1.2M in new project bookings.",
    tags: ["Website Redesign", "Local SEO", "Lead Generation"],
  },
  {
    company: "Residential Home Builder",
    metric: "Page 1",
    description: "Achieved first-page Google rankings for 28 high-value keywords including 'custom home builder Houston' and 'luxury home construction TX.' Organic traffic increased by 520% year over year.",
    tags: ["SEO Strategy", "Content Marketing", "Google Business Profile"],
  },
  {
    company: "Commercial Renovation Company",
    metric: "4.2x ROI",
    description: "Generated $3.8M in new contracts through a combined digital marketing and website portfolio strategy. The interactive project showcase became their top sales tool for closing enterprise clients.",
    tags: ["Portfolio Development", "PPC Campaigns", "Brand Identity"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Site Assessment",
    description: "We learn your construction business inside and out — your specialties, service areas, ideal project types, competitive landscape, and growth goals. We audit your current digital presence and identify opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Blueprint",
    description: "Like a construction blueprint, we create a detailed digital strategy including sitemap, wireframes, keyword research, content plan, and technology recommendations tailored to the construction industry.",
  },
  {
    step: "03",
    title: "Design & Branding",
    description: "Our designers craft professional, trust-building visuals that showcase your craftsmanship. Project galleries, team pages, certification badges, and service area maps — all designed to convert visitors into leads.",
  },
  {
    step: "04",
    title: "Development & Build-Out",
    description: "We build your website with clean, fast code optimized for mobile devices — because your prospects are searching from jobsites and trucks. CMS integration lets your team update projects and content easily.",
  },
  {
    step: "05",
    title: "SEO & Launch",
    description: "Comprehensive SEO setup including local schema markup, Google Business Profile optimization, citation building, and analytics configuration. We launch with a thorough QA process across all devices and browsers.",
  },
  {
    step: "06",
    title: "Growth & Optimization",
    description: "Post-launch, we continuously optimize your lead funnels, monitor rankings, manage your online reputation, and refine paid campaigns. Monthly reporting keeps you informed on leads, traffic, and ROI.",
  },
];

const faqs = [
  {
    question: "How long does it take to build a construction company website?",
    answer: "A professional construction website typically takes 4-6 weeks from kickoff to launch. This includes discovery, design, development, content creation, and SEO setup. Complex sites with custom features like project management portals or estimating tools may take 8-12 weeks. We provide a detailed timeline during the discovery phase so you know exactly what to expect.",
  },
  {
    question: "What makes a construction website different from a regular business website?",
    answer: "Construction websites need specialized features: project portfolio galleries with before/after imagery, service area maps, certification and license displays, subcontractor portals, safety record showcases, and lead capture forms optimized for quote requests. We also optimize for construction-specific search terms and ensure mobile performance for on-the-go access from jobsites.",
  },
  {
    question: "How do you generate leads for construction companies?",
    answer: "We use a multi-channel approach: SEO to rank for high-intent keywords like 'general contractor near me,' Google Ads targeting homeowners searching for construction services, optimized landing pages with quote request forms, Google Business Profile management for local visibility, and retargeting campaigns. Our clients see an average 300% increase in qualified leads within 6 months.",
  },
  {
    question: "Do you help with Google Business Profile and local SEO?",
    answer: "Absolutely. Local SEO is critical for construction companies. We fully optimize your Google Business Profile with accurate NAP data, service categories, project photos, and review management. We also build local citations across 50+ directories, create location-specific landing pages, and implement local schema markup to dominate the map pack in your service areas.",
  },
  {
    question: "Can you build a project management app for our field crews?",
    answer: "Yes, we develop custom field service applications tailored to construction workflows. Features include daily log tracking, photo documentation, safety checklists, crew scheduling, material tracking, punch list management, and real-time communication. These apps work offline on jobsites and sync when connectivity is restored.",
  },
  {
    question: "What is the investment for construction company digital marketing?",
    answer: "Our construction website packages start at $5,000 for a professional 5-page site and range to $25,000+ for enterprise solutions with custom portals. Monthly digital marketing retainers (SEO, PPC, content) typically range from $2,000-$8,000 depending on your market and goals. We provide detailed proposals during our free consultation so there are no surprises.",
  },
];

const pageUrl = "https://visitcardinal.com/industries/construction";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Construction Company Website Development & Marketing",
    description: "Professional website development, SEO, and digital marketing services for construction companies, general contractors, and home builders in Houston TX and nationwide.",
    url: pageUrl,
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Construction Company Digital Marketing & Web Development",
    description: "Custom website development, contractor lead generation, construction SEO, and digital marketing services tailored for the construction industry.",
    provider: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Houston",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    serviceType: "Digital Marketing for Construction",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "35",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://visitcardinal.com/#industries" },
      { "@type": "ListItem", position: 3, name: "Construction", item: pageUrl },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Construction() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Construction Company Website Development & Marketing | Houston TX"
        description="Professional construction website design, contractor marketing, and builder website development. Lead generation, local SEO, and digital marketing for construction companies in Houston TX."
        keywords={[
          "construction website design",
          "contractor marketing Houston",
          "builder website development",
          "construction company SEO",
          "contractor lead generation",
          "construction digital marketing",
          "general contractor website",
          "home builder marketing",
          "construction company branding",
        ]}
        schemas={schemas}
        url={pageUrl}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <VerticalNav />
        <MobileToolbar />
        <main>

          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Industries", href: "/#industries" }, { label: "Construction" }]} />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-50 border border-red-100 flex items-center justify-center">
                    <HardHat className="w-7 h-7 text-red-600" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">Construction Industry</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                  Construction Company Website Development & Digital Marketing
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
                  We build powerful digital foundations for construction companies — contractor websites, project portfolio showcases, lead generation systems, construction SEO, and branding that wins bids and builds trust.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-900 text-sm font-medium hover:border-gray-900 transition-colors"
                  >
                    View Our Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-gray-200">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-4xl lg:text-5xl text-red-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services for Construction */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Digital Services for Construction Companies
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  From your first website to a full digital marketing engine, we provide everything construction companies need to generate leads and grow their business online.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md hover:border-gray-300 transition-all"
                  >
                    <service.icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Construction Companies Choose Us */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Why Construction Companies Choose Us
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We don't just understand digital marketing — we understand the construction business. That combination drives real results.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {differentiators.map((diff, i) => (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 shadow-sm p-8"
                  >
                    <div className="w-12 h-12 bg-red-50 border border-red-100 flex items-center justify-center mb-4">
                      <diff.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{diff.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Real Results for Construction Companies
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Our construction clients don't just get websites — they get measurable business growth.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {results.map((result, i) => (
                  <motion.div
                    key={result.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white border border-gray-200 shadow-sm p-8"
                  >
                    <div className="font-serif text-5xl text-red-600 mb-3">{result.metric}</div>
                    <h3 className="font-serif text-lg text-gray-900 mb-3">{result.company}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{result.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-red-50 text-red-600 border border-red-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Our Construction Digital Process
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  A proven, methodical approach — just like building a structure, we start with a solid foundation and build up from there.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-6xl font-serif text-red-600/20 mb-2">{item.step}</div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Common questions from construction company owners about our digital services.
                </p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-white border border-gray-200 shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="font-serif text-lg text-gray-900 pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-28 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <HardHat className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Ready to Build Your Digital Presence?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                  Let's create a website and marketing strategy that generates real leads for your construction business. Free consultation, no obligations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors"
                >
                  Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
}
