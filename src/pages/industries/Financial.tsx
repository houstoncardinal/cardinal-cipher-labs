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
  TrendingUp, Shield, Lock, BarChart3, ArrowRight, Check,
  ChevronDown, Star, Building2, Calculator, Landmark, CreditCard,
  Search, FileText, Users, Clock, Zap, Award
} from "lucide-react";

/* ─── Data ──────────────────────────────────────────────────────── */

const stats = [
  { value: "40+", label: "Financial Clients Served" },
  { value: "PCI DSS", label: "Compliant Infrastructure" },
  { value: "99.99%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Average Client Rating" },
];

const services = [
  {
    icon: Landmark,
    title: "Financial Advisor Websites",
    description:
      "Authoritative, trust-building websites for RIAs, wealth managers, and independent financial advisors. SEC and FINRA compliant designs with lead capture funnels, client portals, and automated appointment scheduling that convert prospects into long-term clients.",
  },
  {
    icon: Calculator,
    title: "Accounting Firm Marketing",
    description:
      "Full-service digital marketing for CPA firms, bookkeepers, and accounting practices. From local SEO domination during tax season to year-round content marketing, we help accounting professionals attract and retain high-value clients.",
  },
  {
    icon: CreditCard,
    title: "Fintech App Development",
    description:
      "Custom fintech platforms built with bank-grade security. Payment processing apps, budgeting tools, investment dashboards, and lending platforms engineered for scalability, regulatory compliance, and frictionless user experiences.",
  },
  {
    icon: Lock,
    title: "Secure Payment Integration",
    description:
      "PCI DSS Level 1 compliant payment gateways and processing systems. Stripe, Square, Plaid, and custom payment integrations with tokenization, encryption at rest, and fraud detection to protect every transaction.",
  },
  {
    icon: Search,
    title: "Financial Services SEO",
    description:
      "Dominate search results for high-intent financial keywords. Our YMYL-focused SEO strategies include E-E-A-T optimization, authoritative backlink building, local pack domination, and content strategies that position you as a trusted industry leader.",
  },
  {
    icon: FileText,
    title: "Tax Preparation Websites",
    description:
      "Conversion-optimized websites for tax preparation firms, enrolled agents, and seasonal tax services. Secure document upload portals, client intake forms, appointment booking, and integrated CRM systems that streamline your entire workflow.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Security-First Architecture",
    description:
      "Every line of code undergoes security review. SOC 2 Type II compliant development processes, AES-256 encryption, penetration testing, and continuous vulnerability scanning protect your clients' sensitive financial data around the clock.",
  },
  {
    icon: Lock,
    title: "Regulatory Compliance Built In",
    description:
      "We build to meet SEC, FINRA, PCI DSS, SOX, and state-level regulatory requirements from day one. Our compliance-aware development framework ensures your digital presence meets every audit requirement without costly rework.",
  },
  {
    icon: Award,
    title: "Trust & Credibility Design",
    description:
      "Financial services live and die by trust. Our designs strategically position trust signals — certifications, testimonials, security badges, and transparent disclosures — to convert skeptical visitors into confident clients.",
  },
  {
    icon: TrendingUp,
    title: "Conversion-Driven Performance",
    description:
      "Data-backed design decisions optimized for financial services KPIs. A/B tested CTAs, optimized lead funnels, and behavioral analytics deliver measurable ROI that compound over time — just like the portfolios you manage.",
  },
];

const results = [
  {
    client: "Regional Wealth Management Firm",
    metric: "312%",
    label: "Increase in Qualified Leads",
    description:
      "Redesigned their digital presence with a modern, trust-focused website and targeted Google Ads campaigns. Organic traffic grew 4x within 6 months, and the cost per acquisition dropped by 58%.",
  },
  {
    client: "Multi-Location CPA Practice",
    metric: "47%",
    label: "Revenue Growth in Year One",
    description:
      "Built a local SEO strategy targeting 12 metro areas, combined with a client portal that automated 80% of document collection. The firm scaled from 3 to 7 locations without adding administrative staff.",
  },
  {
    client: "Fintech Startup (Series A)",
    metric: "150K+",
    label: "Users in First 6 Months",
    description:
      "Designed and developed a consumer lending platform from MVP to market launch. The intuitive UX achieved a 4.8-star app store rating, and the platform processed over $28M in transactions during its first year.",
  },
];

const process = [
  {
    step: "01",
    title: "Compliance & Discovery",
    description:
      "We audit your regulatory landscape (SEC, FINRA, PCI DSS, state regulations), analyze competitors, and map your ideal client journey from first touchpoint to long-term retention.",
  },
  {
    step: "02",
    title: "Security Architecture",
    description:
      "Designing infrastructure with defense-in-depth: encrypted databases, tokenized data flows, role-based access control, and penetration-tested environments before a single pixel is placed.",
  },
  {
    step: "03",
    title: "Trust-Centered UX Design",
    description:
      "Crafting interfaces that communicate authority and reliability. Every element — from typography to micro-interactions — is designed to build confidence and guide visitors toward conversion.",
  },
  {
    step: "04",
    title: "Development & Integration",
    description:
      "Building with bank-grade code quality standards. API integrations with Plaid, Stripe, Yodlee, and your existing CRM/portfolio management systems, all with comprehensive audit logging.",
  },
  {
    step: "05",
    title: "Security Testing & QA",
    description:
      "OWASP Top 10 vulnerability scanning, PCI DSS compliance verification, WCAG accessibility testing, load testing under peak traffic conditions, and third-party security audits before launch.",
  },
  {
    step: "06",
    title: "Launch & Ongoing Compliance",
    description:
      "Phased rollout with real-time monitoring, automated compliance checks, quarterly security reviews, and continuous optimization based on conversion analytics and regulatory updates.",
  },
];

const faqs = [
  {
    question: "How do you ensure PCI DSS compliance for financial websites?",
    answer:
      "We implement PCI DSS compliance at every layer: encrypted data transmission via TLS 1.3, tokenized payment processing through certified providers like Stripe and Braintree, no storage of raw card data on your servers, network segmentation, regular vulnerability scans, and comprehensive audit trails. We also provide documentation to support your annual PCI compliance assessments.",
  },
  {
    question: "Can you build SEC and FINRA compliant websites for financial advisors?",
    answer:
      "Absolutely. We have extensive experience building for registered investment advisors and broker-dealers. Our sites include required regulatory disclosures, ADV document hosting, compliant testimonial displays under the new SEC Marketing Rule, proper risk disclaimers, archived content for recordkeeping requirements, and pre-approval workflows for marketing materials.",
  },
  {
    question: "What security measures do you implement for fintech applications?",
    answer:
      "Our fintech security stack includes AES-256 encryption at rest and in transit, OAuth 2.0 and multi-factor authentication, role-based access control, API rate limiting and DDoS protection, real-time fraud detection algorithms, SOC 2 Type II compliant infrastructure, automated penetration testing, and 24/7 security monitoring with incident response protocols.",
  },
  {
    question: "How long does a financial services website project typically take?",
    answer:
      "A standard financial advisor or accounting firm website takes 6-8 weeks. More complex projects like fintech platforms or client portals with secure document exchange typically take 12-20 weeks. Timeline depends on regulatory requirements, integrations needed, and compliance review cycles. We provide detailed milestones during the discovery phase.",
  },
  {
    question: "Do you offer ongoing compliance monitoring and maintenance?",
    answer:
      "Yes. Financial services websites require continuous compliance attention. Our maintenance plans include quarterly security audits, automated vulnerability scanning, SSL certificate management, regulatory update monitoring, compliance documentation updates, uptime monitoring with 15-minute response SLAs, and priority support for any compliance-related issues.",
  },
  {
    question: "Can you integrate with financial data providers and banking APIs?",
    answer:
      "We integrate with all major financial data providers including Plaid (account linking and verification), Yodlee (data aggregation), Morningstar (investment data), Bloomberg (market data), as well as payment processors, lending platforms, and core banking systems. We handle OAuth flows, webhook management, and data normalization across providers.",
  },
];

/* ─── JSON-LD Schemas ───────────────────────────────────────────── */

const pageUrl = "https://visitcardinal.com/industries/financial";

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Financial Services Website Development & Marketing",
    description:
      "Expert financial services website development, fintech app design, and digital marketing for financial advisors, accounting firms, and fintech startups in Houston TX.",
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
    name: "Financial Services Web Development & Digital Marketing",
    description:
      "PCI DSS compliant website development, fintech application design, accounting firm marketing, and SEO services for financial services companies.",
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
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceType: "Financial Services Website Development",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://visitcardinal.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://visitcardinal.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Financial Services",
        item: pageUrl,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  },
];

/* ─── Animations ────────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ─── Component ─────────────────────────────────────────────────── */

export default function Financial() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Financial Services Website Development & Marketing | Houston TX"
        description="Expert financial website design, accounting firm marketing, and fintech development in Houston TX. PCI DSS compliant, conversion-driven digital solutions for financial services companies."
        url={pageUrl}
        keywords={[
          "financial website design",
          "accounting firm marketing",
          "fintech development Houston",
          "financial advisor website",
          "PCI DSS compliant website",
          "tax preparation website design",
          "financial services SEO",
          "secure payment integration",
        ]}
        schemas={schemas}
      />

      <Header />
      <VerticalNav />
      <MobileToolbar />

      <main className="min-h-screen bg-white text-gray-900">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
          {/* subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/3" />

          <div className="relative container mx-auto px-6 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Financial Services" },
              ]}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-4xl"
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Financial Services Industry
              </motion.div>

              <motion.h1
                variants={fadeUp}
                custom={1}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] mb-6"
              >
                Financial Services{" "}
                <span className="text-red-600">Website Development</span>{" "}
                & Digital Marketing
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-3xl mb-8"
              >
                We build secure, compliant, and conversion-driven digital
                experiences for fintech platforms, accounting firms,
                bookkeeping services, financial advisors, and tax preparation
                companies. Bank-grade security meets world-class design.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-colors"
                >
                  View Financial Projects
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────── */}
        <section className="py-16 border-y border-gray-100 bg-gray-50/50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i}
                  className="text-center"
                >
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Services for Financial ──────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mb-16"
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                What We Build
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Digital Solutions for Financial Services
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 leading-relaxed">
                From regulatory-compliant advisor websites to full-scale fintech
                platforms, every solution is engineered for security, trust, and
                measurable growth.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  variants={fadeUp}
                  custom={i}
                  className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-red-200 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-red-50 text-red-600 mb-5 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                    <svc.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-[15px]">
                    {svc.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Why Financial Companies Choose Us ───────────────── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mb-16"
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                Why Cardinal
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Why Financial Companies Choose Us
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 leading-relaxed">
                Financial services demand a partner that understands compliance,
                security, and the weight of client trust. Here is why firms
                across the industry choose Cardinal.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-6"
            >
              {differentiators.map((d, i) => (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  custom={i}
                  className="flex gap-5 bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-50 text-red-600">
                    <d.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold mb-2">
                      {d.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      {d.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Results ──────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mb-16"
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                Proven Results
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Real Outcomes for Financial Clients
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 leading-relaxed">
                Numbers don't lie. Here's a snapshot of what we've delivered for
                financial services companies just like yours.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {results.map((r, i) => (
                <motion.div
                  key={r.client}
                  variants={fadeUp}
                  custom={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <div className="font-serif text-5xl font-bold text-red-600 mb-2">
                    {r.metric}
                  </div>
                  <div className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                    {r.label}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                    {r.description}
                  </p>
                  <div className="text-xs text-gray-400 font-medium pt-4 border-t border-gray-100">
                    {r.client}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Process ──────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mb-16"
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                Our Process
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                From Compliance Audit to Launch
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 leading-relaxed">
                A battle-tested six-phase methodology designed specifically for
                the regulatory demands and security expectations of financial
                services.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  variants={fadeUp}
                  custom={i}
                  className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
                >
                  <span className="font-serif text-6xl font-bold text-gray-100 absolute top-4 right-6 select-none">
                    {p.step}
                  </span>
                  <div className="relative">
                    <h3 className="font-serif text-xl font-bold mb-3">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── FAQs ─────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mb-16"
            >
              <motion.p variants={fadeUp} custom={0} className="text-sm font-semibold text-red-600 uppercase tracking-wider mb-3">
                FAQ
              </motion.p>
              <motion.h2 variants={fadeUp} custom={1} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5">
                Frequently Asked Questions
              </motion.h2>
              <motion.p variants={fadeUp} custom={2} className="text-lg text-gray-500 leading-relaxed">
                Common questions from financial services companies exploring a
                digital partnership with Cardinal.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl space-y-4"
            >
              {faqs.map((faq, i) => {
                const isOpen = openFAQ === i;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFAQ(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-6 pb-5 text-gray-500 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-200 bg-red-50 text-red-700 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Trusted by 40+ Financial Firms
              </motion.div>

              <motion.h2
                variants={fadeUp}
                custom={1}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-5"
              >
                Ready to Elevate Your Financial Brand?
              </motion.h2>

              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto"
              >
                Schedule a free strategy session and discover how Cardinal can
                build a secure, compliant, and high-converting digital presence
                that earns the trust your clients expect.
              </motion.p>

              <motion.div variants={fadeUp} custom={3}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-lg"
                >
                  Schedule Your Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.p
                variants={fadeUp}
                custom={4}
                className="mt-5 text-sm text-gray-400"
              >
                No contracts. No obligations. Just a conversation about growth.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
