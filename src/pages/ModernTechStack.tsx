import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Code2,
  ArrowRight,
  CheckCircle2,
  Globe,
  MapPin,
  Check,
  Star,
  Zap,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchemas,
} from "@/lib/schema-generators";

const technologies = [
  {
    name: "React",
    badge: "UI Framework",
    whyWeUseIt:
      "React is the most battle-tested UI library on the planet, used by Meta, Netflix, Airbnb, and thousands of enterprise companies. Its component-based architecture means we write reusable, maintainable code that scales effortlessly as your Houston business grows.",
    houstonBenefit:
      "Houston businesses get faster, more interactive websites that keep visitors engaged longer — reducing bounce rates and increasing conversion rates compared to static HTML or WordPress sites.",
  },
  {
    name: "Next.js",
    badge: "Full-Stack Framework",
    whyWeUseIt:
      "Next.js is the production-grade React framework developed by Vercel. It provides server-side rendering (SSR), static site generation (SSG), automatic code splitting, and built-in image optimization — all of which are critical for achieving top Google rankings.",
    houstonBenefit:
      "Houston businesses that switch to Next.js see immediate improvements in Google PageSpeed scores (often from 40–60 up to 95–100), which directly translates to better rankings for Houston-area search terms.",
  },
  {
    name: "TypeScript",
    badge: "Type-Safe Language",
    whyWeUseIt:
      "TypeScript adds static typing to JavaScript, which catches bugs before they reach production, improves code documentation, and makes large codebases dramatically easier to maintain. Every Cardinal Consulting project is TypeScript-first by default.",
    houstonBenefit:
      "Houston businesses benefit from fewer bugs, faster development of new features, and lower long-term maintenance costs — because TypeScript code is self-documenting and far less prone to runtime errors than plain JavaScript.",
  },
  {
    name: "Tailwind CSS",
    badge: "Utility-First Styling",
    whyWeUseIt:
      "Tailwind CSS generates only the CSS your site actually uses — resulting in stylesheet files that are kilobytes, not megabytes. Combined with custom design systems, Tailwind gives us pixel-perfect control over every visual element while maintaining lightning-fast load speeds.",
    houstonBenefit:
      "Smaller CSS files mean faster page loads for Houston visitors on mobile — critical given that 70%+ of Houston web traffic is mobile. Faster mobile experiences directly improve Google Core Web Vitals scores.",
  },
  {
    name: "Node.js",
    badge: "Server-Side Runtime",
    whyWeUseIt:
      "Node.js powers our backend APIs, server-side logic, database connections, and integrations. Its non-blocking I/O model handles thousands of concurrent users efficiently — making it ideal for Houston businesses with high traffic or real-time features like live chat or booking systems.",
    houstonBenefit:
      "Houston businesses with appointment booking, client portals, e-commerce checkout, or CRM integrations get reliable, fast backend logic that never bottlenecks under load — even during peak hours or marketing campaigns.",
  },
  {
    name: "PostgreSQL",
    badge: "Relational Database",
    whyWeUseIt:
      "PostgreSQL is the world's most advanced open-source relational database. We use it for structured data that requires ACID compliance, complex queries, and long-term reliability. Combined with Supabase or direct hosting, PostgreSQL powers robust data-driven applications.",
    houstonBenefit:
      "Houston businesses that need patient records, legal case management, financial data, energy contract tracking, or customer databases get a rock-solid foundation that stores and retrieves data accurately and securely.",
  },
];

const performanceMetrics = [
  {
    value: "95+",
    label: "PageSpeed Score",
    sub: "Google Lighthouse",
    icon: <Zap className="w-6 h-6 text-red-600" />,
  },
  {
    value: "99.9%",
    label: "Uptime SLA",
    sub: "Enterprise-grade reliability",
    icon: <Shield className="w-6 h-6 text-red-600" />,
  },
  {
    value: "<2s",
    label: "Page Load Time",
    sub: "On 4G mobile connections",
    icon: <Zap className="w-6 h-6 text-red-600" />,
  },
  {
    value: "A+",
    label: "Core Web Vitals",
    sub: "LCP · FID · CLS",
    icon: <CheckCircle2 className="w-6 h-6 text-red-600" />,
  },
];

const comparisonRows = [
  {
    problem: "WordPress / Wix Problem",
    solution: "Modern Tech Stack Solution",
    problems: [
      {
        issue: "Slow load times (55–75 PageSpeed)",
        fix: "95–100 PageSpeed with React + Next.js — 3–4x faster than WordPress",
      },
      {
        issue: "Plugin conflicts and security vulnerabilities",
        fix: "Zero plugins — clean, purpose-built code with no third-party attack surface",
      },
      {
        issue: "Poor Core Web Vitals — hurts Google rankings",
        fix: "Excellent LCP, FID, and CLS scores — built-in by the framework",
      },
      {
        issue: "Wix locks your data, can't export your site",
        fix: "You own your code, hosting, and data — no vendor lock-in ever",
      },
      {
        issue: "Can't handle traffic spikes or scale features",
        fix: "Auto-scaling serverless architecture handles 10 to 10,000 concurrent users",
      },
      {
        issue: "Template look shared by thousands of competitors",
        fix: "100% custom design built from scratch — no business looks like yours",
      },
    ],
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
    question: "Why should Houston businesses use React instead of WordPress?",
    answer:
      "React-based websites built with Next.js consistently outperform WordPress in every metric that matters for Houston businesses: PageSpeed (95–100 vs. 40–65), Core Web Vitals (A+ vs. failing), security (zero plugins to exploit), and SEO performance. In Houston's competitive local search market — where law firms, medical practices, HVAC companies, and contractors are all fighting for page-one rankings — a React website gives you a significant technical SEO advantage over competitors still using WordPress. Additionally, React sites load 2–4x faster on mobile, which is critical given that 70%+ of Houston web searches happen on smartphones.",
  },
  {
    question: "Can you migrate my Houston business's Wix/WordPress site to React?",
    answer:
      "Yes — we specialize in migrating Houston businesses from Wix, WordPress, Squarespace, and legacy HTML sites to modern React/Next.js stacks. Our migration process is designed for zero downtime: we build and test your new site in parallel, set up all 301 redirects to preserve your existing Google rankings, and cut over during a low-traffic window. Houston businesses that migrate to our modern stack typically see their PageSpeed scores jump from the 40–60 range to 95–100 within days of launch. We've successfully migrated dozens of Houston law firms, medical practices, retail businesses, and service companies.",
  },
  {
    question: "Does a modern tech stack improve Google rankings for Houston businesses?",
    answer:
      "Yes, significantly. Google's Core Web Vitals (Largest Contentful Paint, First Input Delay, Cumulative Layout Shift) are confirmed ranking factors — and modern React/Next.js sites achieve A+ Core Web Vitals by default. For Houston businesses competing on keywords like 'Houston plumber,' 'Houston personal injury lawyer,' 'Houston dermatologist near me,' or 'Houston HVAC company,' even a modest improvement in PageSpeed and Core Web Vitals can push you from page 2 to page 1. Combined with proper Houston local SEO schema markup, our modern tech stack gives your business a compound technical advantage over competitors on WordPress and Wix.",
  },
  {
    question: "What Houston industries benefit most from React and Next.js?",
    answer:
      "Every Houston industry benefits, but those with the most competitive Google search environments see the biggest ROI: Houston law firms competing for high-value injury and family law keywords; Houston medical practices near the Texas Medical Center competing for patient acquisition; Houston Energy Corridor companies building enterprise client portals; Houston e-commerce retailers in the Galleria area needing fast, conversion-optimized shopping experiences; Houston real estate firms and PropTech startups needing property search with real-time data; Houston healthcare startups building HIPAA-compliant patient portals. If your Houston business depends on Google search or a fast, reliable web application, you need a modern tech stack.",
  },
];

const testimonials = [
  {
    name: "James O.",
    title: "CTO",
    company: "TechBridge Houston",
    quote:
      "Cardinal built our entire SaaS platform with React and TypeScript in 8 weeks. The code quality is exceptional — every component is clean, typed, and documented. Our app runs perfectly under load and the architecture has scaled effortlessly. Best web developer in Houston, full stop. Their modern stack helped us close a $2.5M seed round.",
    stars: 5,
  },
  {
    name: "Patricia L.",
    title: "CEO",
    company: "Houston Telehealth Startup",
    quote:
      "We needed a HIPAA-aware React application built fast. Cardinal delivered in 10 weeks — Next.js frontend, Node.js backend, PostgreSQL database. The site gets 95 on PageSpeed, loads in under 1.5 seconds on mobile, and has been rock-solid at 99.9% uptime. 25,000 patients onboarded in 3 months. Outstanding work.",
    stars: 5,
  },
  {
    name: "Kevin T.",
    title: "CEO",
    company: "Houston PropTech",
    quote:
      "They built a complex React property search application that out-performs every competitor in the Houston market. Real-time MLS data, map integration, lightning-fast search — all with a PageSpeed score of 97. 50,000 downloads in 6 months and 4.9 stars in the App Store. Cardinal truly understands modern development.",
    stars: 5,
  },
];

export default function ModernTechStack() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "React Next.js Web Development Houston | Modern Tech Stack Houston Texas",
      description:
        "Houston's premier React and Next.js web development agency. We build fast, scalable, SEO-optimized websites and web applications using TypeScript, Tailwind CSS, Node.js, and PostgreSQL. Serving Houston TX and clients nationwide.",
      url: `${siteConfig.url}/modern-tech-stack`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      {
        name: "Modern Tech Stack Development Houston",
        url: `${siteConfig.url}/modern-tech-stack`,
      },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/modern-tech-stack#service`,
      name: "React and Next.js Web Development Houston — Modern Tech Stack",
      description:
        "We build Houston businesses' websites and web applications with React, Next.js, TypeScript, Tailwind CSS, Node.js, and PostgreSQL for maximum performance, SEO, and scalability. Serving Houston TX nationwide and worldwide.",
      provider: {
        "@type": "Organization",
        "@id": `${siteConfig.url}#organization`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Houston",
          containedInPlace: { "@type": "State", name: "Texas" },
        },
        { "@type": "State", name: "Texas" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Worldwide" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Modern Tech Stack Web Development Houston",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "React Web Development Houston",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Next.js Development Houston Texas",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "TypeScript Web Developer Houston",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "WordPress to React Migration Houston",
            },
          },
        ],
      },
    },
    ...generateFAQSchemas([
      {
        question: "Why should Houston businesses use React instead of WordPress?",
        answer:
          "React-based websites built with Next.js consistently outperform WordPress in PageSpeed (95–100 vs. 40–65), Core Web Vitals (A+ vs. failing), security (zero plugins to exploit), and SEO performance. In Houston's competitive local search market, a React website gives you a significant technical SEO advantage. React sites also load 2–4x faster on mobile, which is critical given that 70%+ of Houston web searches happen on smartphones.",
      },
      {
        question: "Can you migrate my Houston business's Wix/WordPress site to React?",
        answer:
          "Yes — we specialize in migrating Houston businesses from Wix, WordPress, Squarespace, and legacy sites to modern React/Next.js stacks with zero downtime. We build and test your new site in parallel, set up all 301 redirects to preserve Google rankings, and cut over during low-traffic windows. Houston businesses that migrate typically see PageSpeed scores jump from 40–60 to 95–100 within days of launch.",
      },
      {
        question: "Does a modern tech stack improve Google rankings for Houston businesses?",
        answer:
          "Yes, significantly. Google's Core Web Vitals (LCP, FID, CLS) are confirmed ranking factors. Modern React/Next.js sites achieve A+ Core Web Vitals by default. For Houston businesses competing on local keywords, even a modest PageSpeed improvement can push you from page 2 to page 1. Combined with Houston local SEO schema markup, our modern stack gives your business a compound technical advantage over WordPress and Wix competitors.",
      },
      {
        question: "What Houston industries benefit most from React and Next.js?",
        answer:
          "Every Houston industry benefits, but those with the most competitive Google search see the biggest ROI: Houston law firms competing for injury and family law keywords; Houston medical practices near the Texas Medical Center; Energy Corridor companies building enterprise client portals; Galleria-area e-commerce retailers; Houston real estate firms and PropTech startups needing real-time property search; and Houston healthcare startups building HIPAA-compliant patient portals.",
      },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="React Next.js Web Development Houston | Modern Tech Stack Houston Texas"
        description="Houston's #1 React and Next.js web development agency. We build fast, scalable, SEO-optimized websites with TypeScript, Tailwind CSS & Node.js. 95+ PageSpeed guaranteed. Call (281) 901-7016."
        keywords={[
          "react web development houston",
          "nextjs developer houston texas",
          "typescript web developer houston",
          "modern web development houston tx",
          "react agency houston",
          "next.js web design houston",
          "houston react developer",
          "houston javascript developer",
          "wordpress to react migration houston",
          "fast website houston",
          "core web vitals houston",
          "headless website houston",
          "houston web application development",
          "houston full stack developer",
          "modern tech stack houston business",
        ]}
        url={`${siteConfig.url}/modern-tech-stack`}
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
                    Houston's #1 React & Next.js Development Agency
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6"
                >
                  Modern Tech Stack Web Development in Houston Texas —{" "}
                  <span className="text-red-600">React, Next.js & TypeScript</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
                >
                  We build Houston businesses' websites and web applications with the technologies that
                  dominate modern software: React, Next.js, TypeScript, Tailwind CSS, Node.js, and
                  PostgreSQL. The result? Blazing-fast, SEO-dominant, infinitely scalable digital
                  products that outperform WordPress and Wix in every measurable way.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8">
                      Get a Free Tech Consultation <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
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
                  Free consultation · 95+ PageSpeed guaranteed · Houston-based development team
                </motion.p>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="py-10 bg-red-600">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
                {[
                  { value: "500+", label: "Projects Built with Modern Stack" },
                  { value: "99.9%", label: "Uptime Across All Client Sites" },
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

          {/* Technologies Section — 6 Cards */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Code2 className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Our Technology Stack
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  The Technologies We Use — And Why They Win
                </h2>
                <p className="text-gray-600 text-lg">
                  Every technology in our stack was chosen because it delivers measurable advantages for
                  Houston businesses in performance, SEO, and long-term scalability.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-7 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                          <Code2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-serif text-lg text-gray-900 leading-tight">
                            {tech.name}
                          </h3>
                          <span className="text-xs text-red-600 font-semibold uppercase tracking-wide">
                            {tech.badge}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {tech.whyWeUseIt}
                      </p>
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
                          Houston Business Benefit
                        </p>
                        <p className="text-gray-700 text-sm leading-relaxed">{tech.houstonBenefit}</p>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Performance Benchmarks for Every Site We Build
                </h2>
                <p className="text-gray-400 text-lg">
                  These aren't aspirational numbers — they're standards we guarantee on every Houston
                  client project.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {performanceMetrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-gray-800 border border-gray-700"
                  >
                    <div className="flex justify-center mb-3">{metric.icon}</div>
                    <div className="text-4xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-gray-200 font-semibold text-sm mb-1">{metric.label}</div>
                    <div className="text-gray-500 text-xs">{metric.sub}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Houston Businesses Switch — Comparison */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-6"
                >
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    The Switch
                  </span>
                </motion.div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Why Houston Businesses Switch to Modern Tech
                </h2>
                <p className="text-gray-600 text-lg">
                  WordPress and Wix worked fine in 2015. In 2025's competitive Houston market, they're
                  holding your business back. Here's what the switch to modern React/Next.js actually
                  means.
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="bg-gray-100 rounded-xl p-4 mb-4 text-center">
                      <span className="font-semibold text-gray-600 text-sm uppercase tracking-wide">
                        WordPress / Wix Problems
                      </span>
                    </div>
                    <div className="space-y-3">
                      {comparisonRows[0].problems.map((row, i) => (
                        <motion.div
                          key={row.issue}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-100"
                        >
                          <div className="w-5 h-5 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-red-700 text-xs font-bold">✕</span>
                          </div>
                          <p className="text-gray-700 text-sm">{row.issue}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-red-600 rounded-xl p-4 mb-4 text-center">
                      <span className="font-semibold text-white text-sm uppercase tracking-wide">
                        Modern Tech Stack Solutions
                      </span>
                    </div>
                    <div className="space-y-3">
                      {comparisonRows[0].problems.map((row, i) => (
                        <motion.div
                          key={row.fix}
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.08 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100"
                        >
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <p className="text-gray-700 text-sm">{row.fix}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  What Houston Tech Clients Say
                </h2>
                <p className="text-gray-600 text-lg">
                  Real results from Houston businesses that chose modern technology over legacy
                  platforms.
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
                  Modern Web Development Across All Houston Neighborhoods
                </h2>
                <p className="text-gray-600 text-lg">
                  We build React and Next.js websites for businesses across Greater Houston — from The
                  Woodlands to Pearland, from Katy to League City.
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
                  React & Next.js Houston — Frequently Asked Questions
                </h2>
                <p className="text-gray-600 text-lg">
                  Common questions from Houston business owners about modern web development technology.
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
                  Cardinal Consulting is proudly Houston-based — but our modern web development work
                  extends to clients nationwide and around the globe.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  {
                    icon: <MapPin className="w-8 h-8 text-red-600" />,
                    title: "Houston & Greater Texas",
                    description:
                      "Deep roots in Houston's tech, energy, medical, and legal communities. We serve businesses across Harris County, Fort Bend, Montgomery, Galveston, and Brazoria counties. From Downtown Houston's skyscrapers to The Woodlands' growing tech corridor — we know what Houston businesses need to win online.",
                  },
                  {
                    icon: <Shield className="w-8 h-8 text-red-600" />,
                    title: "Nationwide United States",
                    description:
                      "Our remote-capable workflow delivers the same Houston-quality React and Next.js development to clients in every state. From New York law firms to Los Angeles e-commerce brands to Chicago SaaS startups — we build modern web applications for businesses that demand the best, regardless of geography.",
                  },
                  {
                    icon: <Globe className="w-8 h-8 text-red-600" />,
                    title: "International & Worldwide",
                    description:
                      "Modern tech stack development for international businesses, European enterprises, Asia Pacific companies, and global SaaS platforms. We've delivered React and Next.js applications for clients in the UK, Germany, UAE, Singapore, and across Latin America. Modern technology has no borders.",
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
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "Rush Prototyping", href: "/rush-prototyping" },
                  { label: "Houston SEO Company", href: "/houston-seo-company" },
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
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Get Started Today
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Ready to Leave WordPress Behind and Build Something Modern?
                </h2>
                <p className="text-gray-600 text-lg max-w-xl mx-auto mb-8">
                  Free consultation with Houston's top React and Next.js development team. We'll
                  review your current site, identify performance gaps, and show you exactly what a
                  modern tech stack would do for your Google rankings and conversions.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-10">
                      Start Your Modern Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-red-200 text-red-600 hover:bg-red-50"
                    >
                      Call (281) 901-7016
                    </Button>
                  </a>
                </div>
                <p className="text-gray-500 text-sm">
                  500+ modern projects delivered · 95+ PageSpeed guaranteed · 4.9★ rated Houston
                  developers
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
