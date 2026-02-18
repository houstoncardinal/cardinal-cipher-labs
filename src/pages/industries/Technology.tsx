import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Cpu, Code2, Cloud, Server, ArrowRight, Check, ChevronDown,
  Star, Layers, Zap, Rocket, FileCode, Search, BarChart3, Megaphone,
  Shield, Users, Clock, Target
} from "lucide-react";

const stats = [
  { value: "100+", label: "Tech Projects Delivered" },
  { value: "95+", label: "Lighthouse Score" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Client Rating" },
];

const services = [
  {
    icon: Layers,
    title: "SaaS Website Design",
    description: "Conversion-optimized marketing sites and product pages for SaaS platforms. We design landing pages, pricing tables, feature comparisons, and onboarding flows that turn visitors into trial signups and paying customers.",
  },
  {
    icon: Rocket,
    title: "Tech Startup Branding",
    description: "Full brand identity systems for early-stage and growth-stage startups. Logo, color systems, typography, pitch deck design, and brand guidelines that communicate credibility and vision to investors and users alike.",
  },
  {
    icon: FileCode,
    title: "Developer Documentation",
    description: "Beautiful, searchable documentation sites built with MDX, Docusaurus, or custom solutions. API references, SDK guides, quickstart tutorials, and interactive code examples that developers actually enjoy reading.",
  },
  {
    icon: Server,
    title: "API Portal Development",
    description: "Custom developer portals with interactive API explorers, authentication flows, rate limit dashboards, and usage analytics. We build portals that reduce support tickets and accelerate third-party integrations.",
  },
  {
    icon: Search,
    title: "Tech Company SEO",
    description: "Technical SEO strategies tailored for software companies. Schema markup for software applications, developer blog optimization, documentation indexing, and content strategies that rank for high-intent technical keywords.",
  },
  {
    icon: Megaphone,
    title: "Product Launch Marketing",
    description: "Go-to-market digital campaigns for product launches, feature releases, and version upgrades. Landing pages, email sequences, social campaigns, and Product Hunt launch strategies that generate buzz and downloads.",
  },
];

const differentiators = [
  {
    icon: Code2,
    title: "We Speak Your Language",
    description: "Our team includes engineers who have shipped production code at scale. We understand APIs, CI/CD pipelines, microservices, and developer experience because we live it every day. No translating business jargon — we get it.",
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    description: "Every tech company website we build scores 95+ on Lighthouse. We optimize bundle sizes, implement code splitting, leverage edge caching, and fine-tune Core Web Vitals because your audience notices milliseconds.",
  },
  {
    icon: Cloud,
    title: "Built to Scale",
    description: "From Series A startup to enterprise traffic spikes during Product Hunt launches — our architectures handle it all. Serverless backends, CDN-first delivery, and auto-scaling infrastructure ensure your site never goes down.",
  },
  {
    icon: Shield,
    title: "Security-First Approach",
    description: "SOC 2 awareness, OWASP best practices, CSP headers, dependency auditing, and secure authentication flows. We build with the same security standards your engineering team expects from production infrastructure.",
  },
];

const results = [
  {
    company: "B2B SaaS Platform",
    metric: "340%",
    description: "Increase in free trial signups after redesigning the marketing site with conversion-optimized landing pages, interactive product demos, and streamlined onboarding flows.",
    tags: ["SaaS Website", "Conversion Optimization", "UX Design"],
  },
  {
    company: "Developer Tools Startup",
    metric: "5x",
    description: "Growth in developer adoption within 6 months of launching a new documentation site with interactive API explorer, code playgrounds, and searchable SDK references.",
    tags: ["Developer Docs", "API Portal", "Content Strategy"],
  },
  {
    company: "Enterprise Software Company",
    metric: "#1 on Google",
    description: "Achieved top ranking for 15+ high-intent technical keywords through comprehensive SEO strategy including structured data, technical blog content, and developer-focused link building.",
    tags: ["Technical SEO", "Content Marketing", "Schema Markup"],
  },
];

const process = [
  { step: "01", title: "Technical Discovery", description: "Deep dive into your product, tech stack, target developer persona, and competitive landscape. We audit your existing digital presence and identify high-impact opportunities." },
  { step: "02", title: "Architecture & Strategy", description: "Define information architecture, sitemap, content strategy, and technical requirements. Select the optimal tech stack — whether that's Next.js, Astro, Docusaurus, or a custom build." },
  { step: "03", title: "Design & Prototyping", description: "Create high-fidelity designs in Figma with interactive prototypes. Every component is designed for dark mode compatibility, code snippet rendering, and technical content layouts." },
  { step: "04", title: "Development & Integration", description: "Build with clean, typed code using React, TypeScript, and Tailwind. Integrate with your CMS, analytics, authentication provider, and existing developer tools ecosystem." },
  { step: "05", title: "QA & Performance Tuning", description: "Comprehensive testing across browsers, devices, and screen readers. Performance profiling, bundle analysis, Core Web Vitals optimization, and security audit before launch." },
  { step: "06", title: "Launch & Iterate", description: "Coordinated launch with SEO submission, analytics verification, and monitoring setup. Post-launch we track metrics, run A/B tests, and iterate based on real user data." },
];

const faqs = [
  {
    question: "What tech stack do you use for SaaS marketing websites?",
    answer: "We primarily build SaaS marketing sites with Next.js and React for the frontend, Tailwind CSS for styling, and deploy on Vercel or AWS for edge-optimized delivery. For content management, we integrate headless CMS solutions like Sanity, Contentful, or Storyblok so your marketing team can update content without engineering involvement. Every build includes TypeScript for type safety and Framer Motion for polished animations.",
  },
  {
    question: "Can you build developer documentation sites?",
    answer: "Absolutely. We have deep experience building documentation platforms using Docusaurus, Nextra, MDX-based custom solutions, and Mintlify. Our documentation sites include full-text search, version switching, interactive API explorers with live code examples, syntax-highlighted code blocks, and OpenAPI/Swagger integration. We can also build custom developer portals with authentication, API key management, and usage dashboards.",
  },
  {
    question: "How do you approach SEO for technology companies?",
    answer: "Tech company SEO requires a specialized approach. We implement SoftwareApplication and WebAPI schema markup, optimize for developer-intent keywords, create technical content strategies targeting bottom-of-funnel queries, and build topic clusters around your product categories. We also focus on documentation SEO — ensuring your docs pages rank for how-to queries that drive qualified developer traffic to your platform.",
  },
  {
    question: "What's your experience with product launch campaigns?",
    answer: "We've supported dozens of product launches from pre-seed startups to enterprise feature releases. Our launch playbook includes dedicated landing pages with countdown timers and early access forms, Product Hunt launch preparation, email nurture sequences, social media campaigns, and developer community outreach. We typically start launch preparation 6-8 weeks before the target date.",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer: "We work with technology companies at every stage — from pre-seed startups building their first marketing site to Series C companies redesigning their entire digital presence. For early-stage startups, we offer streamlined packages that deliver a professional, conversion-optimized website quickly so you can focus on building your product and raising your next round.",
  },
  {
    question: "How long does a typical tech company website project take?",
    answer: "Timeline depends on scope. A SaaS marketing site with 8-12 pages typically takes 4-6 weeks. A full developer documentation portal takes 6-10 weeks. A complete rebrand with website, documentation, and marketing collateral takes 10-14 weeks. We use agile sprints with weekly demos so you see progress continuously and can provide feedback early and often.",
  },
];

const pageUrl = "https://visitcardinal.com/industries/technology";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technology Company Website Development & Marketing",
    description: "Professional website development and digital marketing services for technology companies, SaaS platforms, and software startups in Houston TX and nationwide.",
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
    name: "Technology Industry Web Development & Digital Marketing",
    description: "SaaS website design, tech startup branding, developer documentation, API portal development, tech company SEO, and product launch marketing services.",
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
    serviceType: "Web Development and Digital Marketing for Technology Companies",
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "47",
      bestRating: "5",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://visitcardinal.com/industries" },
      { "@type": "ListItem", position: 3, name: "Technology", item: pageUrl },
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

export default function Technology() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Technology Company Website Development & Marketing | Houston TX"
        description="SaaS website design, tech startup web development, and software company marketing. Developer documentation, API portals, and product launch campaigns. 100+ tech projects delivered."
        keywords={[
          "SaaS website design",
          "tech startup web development",
          "software company marketing",
          "developer documentation site",
          "API portal development",
          "technology company SEO",
          "product launch marketing",
          "Houston tech web development",
        ]}
        schemas={schemas}
        url={pageUrl}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <VerticalNav />
        
        <main>

          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Industries", href: "/industries" }, { label: "Technology" }]} />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-50 flex items-center justify-center rounded-lg">
                    <Cpu className="w-7 h-7 text-red-600" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-red-600 font-medium">Technology Industry</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                  Technology Company Website Development & Digital Marketing
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mb-8 leading-relaxed">
                  We build high-performance websites and run growth-focused marketing for SaaS platforms, developer tools, tech startups, API documentation sites, and enterprise software companies.
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

          {/* Services for Technology */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Digital Services for Technology Companies
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  From SaaS marketing sites to developer documentation portals — every service is tailored to how technology companies acquire users and grow revenue.
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
                    className="bg-white border border-gray-200 rounded-lg p-6 h-full shadow-sm hover:shadow-md hover:border-red-200 transition-all"
                  >
                    <service.icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Tech Companies Choose Us */}
          <section className="py-20 lg:py-28 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Why Tech Companies Choose Cardinal
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We are not a generic agency. We understand the technology industry from the inside because we are technologists ourselves.
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
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg">
                      <diff.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{diff.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                    </div>
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
                  Results That Speak for Themselves
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Real outcomes from real technology companies we have partnered with.
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
                    className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                  >
                    <div className="font-serif text-5xl text-red-600 mb-3">{result.metric}</div>
                    <h3 className="font-serif text-lg text-gray-900 mb-3">{result.company}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{result.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-red-50 text-red-600 rounded-full font-medium"
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
                  Our Process for Technology Companies
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  An agile, engineer-friendly process designed for teams that ship fast and iterate often.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, i) => (
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
                  Common questions from technology companies considering working with us.
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
                    className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
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
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Ready to Elevate Your Tech Company's Digital Presence?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8">
                  Let's build something your engineering team and your marketing team will both love. Free consultation, no obligations.
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
