import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Scale, Shield, FileText, Users, ArrowRight, Check,
  ChevronDown, Star, Gavel, Lock, Search, BookOpen,
  MessageSquare, BarChart3, Clock, Briefcase, Building2
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const stats = [
  { value: "30+", label: "Law Firms Served" },
  { value: "100%", label: "Confidential" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Client Rating" },
];

const services = [
  {
    icon: Scale,
    title: "Law Firm Websites",
    description:
      "Professionally designed, ADA-compliant websites that establish trust and authority. Attorney bios, practice area pages, case results, and client testimonials — all optimized for conversions.",
  },
  {
    icon: Users,
    title: "Client Intake Portals",
    description:
      "Secure, branded intake systems that streamline new-client onboarding with e-signatures, conflict checks, document uploads, and automated follow-ups that reduce administrative overhead by up to 60%.",
  },
  {
    icon: FileText,
    title: "Case Management Systems",
    description:
      "Custom case management platforms with deadline tracking, document assembly, time entry, client communications, and integrations with Clio, MyCase, and PracticePanther.",
  },
  {
    icon: Search,
    title: "Legal SEO",
    description:
      "Dominate local search with practice-area landing pages, Google Business Profile optimization, legal directory citations, and content strategies targeting high-intent keywords like 'best personal injury lawyer near me'.",
  },
  {
    icon: BarChart3,
    title: "Attorney Marketing",
    description:
      "Full-funnel digital marketing including Google Ads for lawyers, social media management, email campaigns, retargeting, and reputation management across Avvo, Martindale-Hubbell, and Google.",
  },
  {
    icon: Lock,
    title: "Document Management",
    description:
      "Encrypted document portals with role-based access, version control, audit trails, and e-discovery support. Built to meet ABA ethical obligations and state bar data-security requirements.",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Attorney-Client Privilege Aware",
    description:
      "We build every system with confidentiality at its core. All data is encrypted at rest and in transit, access is role-restricted, and our processes are designed to preserve privilege and protect sensitive case information.",
  },
  {
    icon: Gavel,
    title: "Bar & Regulatory Compliance",
    description:
      "Our solutions comply with ABA Model Rules, state bar advertising guidelines, IOLTA trust-accounting requirements, and data-privacy regulations including CCPA and GDPR where applicable.",
  },
  {
    icon: BarChart3,
    title: "Measurable Results",
    description:
      "We track the metrics that matter — cost per lead, case value per marketing dollar, intake conversion rate, and organic keyword rankings — so you can tie every investment to actual revenue growth.",
  },
  {
    icon: BookOpen,
    title: "Deep Legal Industry Knowledge",
    description:
      "Our team understands the unique challenges of legal marketing: ethical advertising constraints, competitive practice areas, and the importance of thought leadership and peer recognition in driving referrals.",
  },
];

const results = [
  {
    firm: "Houston Personal Injury Firm",
    metric: "312%",
    label: "Increase in Organic Leads",
    description:
      "Redesigned the firm's website with practice-area silos, local SEO, and conversion-optimized landing pages. Monthly organic leads grew from 18 to 74 within six months.",
  },
  {
    firm: "Multi-Office Family Law Practice",
    metric: "4.2x",
    label: "Return on Ad Spend",
    description:
      "Launched targeted Google Ads campaigns across three metro areas with custom landing pages per practice area. Achieved a $4.20 return for every $1 spent on advertising.",
  },
  {
    firm: "Boutique Immigration Firm",
    metric: "58%",
    label: "Faster Client Onboarding",
    description:
      "Built a bilingual client intake portal with e-signatures and automated document collection. Reduced average onboarding time from 12 days to 5 days while improving client satisfaction scores.",
  },
];

const process = [
  {
    step: "01",
    title: "Legal Needs Assessment",
    description:
      "We meet with partners and practice-group leaders to understand your firm's goals, competitive positioning, ethical obligations, and technology environment.",
  },
  {
    step: "02",
    title: "Competitive & Compliance Audit",
    description:
      "We analyze your competitors' digital presence, review bar advertising rules in your jurisdictions, and audit your existing systems for security and compliance gaps.",
  },
  {
    step: "03",
    title: "Strategy & Information Architecture",
    description:
      "We develop a detailed digital roadmap — sitemap, keyword strategy, content plan, and technical architecture — tailored to your practice areas and target clients.",
  },
  {
    step: "04",
    title: "Design & Development",
    description:
      "Our designers craft authoritative, trust-building interfaces while our engineers build secure, fast, and accessible experiences using modern frameworks and encryption standards.",
  },
  {
    step: "05",
    title: "Testing & Compliance Review",
    description:
      "Every deliverable undergoes cross-browser testing, accessibility audits (WCAG 2.1 AA), security penetration testing, and a compliance review against applicable bar rules.",
  },
  {
    step: "06",
    title: "Launch & Ongoing Optimization",
    description:
      "We handle deployment, monitor performance, track lead generation metrics, and continuously optimize content, ads, and conversion paths to drive sustained growth.",
  },
];

const faqs = [
  {
    question: "Do you understand legal advertising ethics rules?",
    answer:
      "Yes. We stay current on the ABA Model Rules of Professional Conduct (especially Rules 7.1–7.3) and the advertising guidelines specific to every state in which our clients practice. All website copy, ad campaigns, and testimonials are reviewed for compliance before publication.",
  },
  {
    question: "How do you protect attorney-client privileged information?",
    answer:
      "All systems we build use AES-256 encryption at rest, TLS 1.3 in transit, and role-based access controls. We sign NDAs and business associate agreements as needed, and we never access client case data. Our infrastructure meets or exceeds the security recommendations of most state bar associations.",
  },
  {
    question: "Can you integrate with our existing case management software?",
    answer:
      "Absolutely. We have experience integrating with Clio, MyCase, PracticePanther, Litify, Smokeball, and many others via API. We can also build custom integrations with legacy or proprietary systems your firm may rely on.",
  },
  {
    question: "How long does a law firm website redesign take?",
    answer:
      "A typical law firm website with 10–20 practice area pages, attorney bios, and a client intake system takes 6–10 weeks from kickoff to launch. Larger projects with custom portals or case management features may take 12–16 weeks. We provide a detailed timeline during discovery.",
  },
  {
    question: "What kind of ROI can we expect from legal SEO?",
    answer:
      "Results vary by practice area and market, but our law firm clients typically see a 150–300% increase in organic leads within the first 6–9 months. For competitive practice areas like personal injury or criminal defense, ranking improvements for high-value keywords often translate directly into significant case revenue.",
  },
  {
    question: "Do you work with solo practitioners or only large firms?",
    answer:
      "We work with firms of every size — from solo practitioners launching their first website to AmLaw 200 firms overhauling their digital infrastructure. Our packages are scalable, and we tailor scope and pricing to your firm's size, goals, and budget.",
  },
];

/* ------------------------------------------------------------------ */
/*  JSON-LD Schemas                                                    */
/* ------------------------------------------------------------------ */

const pageUrl = "https://visitcardinal.com/industries/legal";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Law Firm Website Development & Legal Marketing | Houston TX",
  description:
    "Custom law firm website design, legal SEO, attorney marketing, and case management systems by Cardinal Consulting in Houston, TX.",
  url: pageUrl,
  isPartOf: { "@type": "WebSite", url: "https://visitcardinal.com" },
  publisher: {
    "@type": "Organization",
    name: "Cardinal Consulting",
    url: "https://visitcardinal.com",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Legal Website Development & Digital Marketing",
  description:
    "Professional website development, client intake systems, case management platforms, SEO, and digital marketing tailored exclusively for law firms and legal professionals.",
  provider: {
    "@type": "Organization",
    name: "Cardinal Consulting",
    url: "https://visitcardinal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2100 West Loop S Fwy",
      addressLocality: "Houston",
      addressRegion: "TX",
      postalCode: "77027",
      addressCountry: "US",
    },
  },
  areaServed: {
    "@type": "Place",
    name: "Houston, TX",
  },
  serviceType: "Legal Technology & Marketing",
};

const breadcrumbSchema = {
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
      name: "Legal",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
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
};

/* ------------------------------------------------------------------ */
/*  Animation helpers                                                  */
/* ------------------------------------------------------------------ */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Legal() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Law Firm Website Development & Legal Marketing | Houston TX"
        description="Custom law firm website design, legal SEO, attorney digital marketing, and case management systems. Trusted by 30+ firms in Houston and nationwide."
        url={pageUrl}
        keywords={[
          "law firm website design",
          "legal marketing agency Houston",
          "attorney SEO",
          "lawyer website development",
          "legal digital marketing",
          "client intake portal",
          "case management system",
          "law firm SEO",
          "legal web design Houston TX",
          "attorney website design",
          "legal technology consulting",
          "law firm digital strategy",
        ]}
        schemas={[webPageSchema, serviceSchema, breadcrumbSchema, faqSchema]}
      />

      <Header />
      <VerticalNav />
      

      <main className="min-h-screen bg-white text-gray-900">
        {/* ──────────────────── Hero ──────────────────── */}
        <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">
          {/* subtle background accent */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-red-50/60 blur-3xl" />
            <div className="absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full bg-gray-100/80 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-6 lg:px-12">
            <Breadcrumbs
              items={[
                { label: "Industries", href: "/industries" },
                { label: "Legal" },
              ]}
            />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="max-w-3xl"
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-1.5 text-sm font-medium text-red-600">
                <Scale className="h-4 w-4" />
                Legal Industry
              </span>

              <h1 className="mt-4 font-serif text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Legal Website Development
                <span className="text-red-500"> & Digital Marketing</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-500">
                We build high-performance law firm websites, secure client intake
                portals, custom case management platforms, and results-driven
                legal marketing campaigns — all designed to grow your practice
                while protecting client confidentiality.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-gray-800"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-900 transition hover:border-gray-300 hover:bg-gray-50"
                >
                  Explore Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ──────────────────── Stats ──────────────────── */}
        <section className="border-y border-gray-200/70 bg-gray-50/50 py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="text-center"
                >
                  <p className="font-serif text-3xl font-bold text-gray-900 lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── Services ──────────────────── */}
        <section id="services" className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                What We Deliver
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Digital Services for Law Firms
              </h2>
              <p className="mt-4 text-gray-500">
                From high-converting websites to secure case management systems,
                we provide end-to-end digital solutions tailored to the legal
                profession.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="group rounded-2xl border border-gray-200/70 bg-white p-8 shadow transition hover:shadow-lg"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                    <svc.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-gray-900">
                    {svc.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-500">
                    {svc.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── Why Law Firms Choose Us ──────────────────── */}
        <section className="bg-gray-50/50 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                Our Advantage
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why Law Firms Choose Cardinal
              </h2>
              <p className="mt-4 text-gray-500">
                We combine deep legal industry knowledge with elite digital
                execution to deliver results you can measure.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="flex gap-5 rounded-2xl border border-gray-200/70 bg-white p-8 shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500">
                      <item.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── Results ──────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                Proven Results
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Real Outcomes for Real Firms
              </h2>
              <p className="mt-4 text-gray-500">
                Our work speaks for itself. Here are a few recent examples of
                what we have achieved for our legal clients.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {results.map((r, i) => (
                <motion.div
                  key={r.firm}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-gray-200/70 bg-white p-8 shadow"
                >
                  <p className="font-serif text-4xl font-bold text-red-500">
                    {r.metric}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-900">
                    {r.label}
                  </p>
                  <hr className="my-5 border-gray-100" />
                  <p className="text-sm font-medium text-gray-900">{r.firm}</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {r.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── Process ──────────────────── */}
        <section className="bg-gray-50/50 py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                How We Work
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Our Legal-Specific Process
              </h2>
              <p className="mt-4 text-gray-500">
                A structured, compliance-aware approach designed for the unique
                demands of legal practices.
              </p>
            </motion.div>

            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((p, i) => (
                <motion.div
                  key={p.step}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  variants={fadeUp}
                  className="rounded-2xl border border-gray-200/70 bg-white p-8 shadow"
                >
                  <span className="font-serif text-3xl font-bold text-red-500/20">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-serif text-lg font-semibold text-gray-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-gray-500">
                    {p.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── FAQs ──────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mx-auto max-w-2xl text-center"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-red-500">
                FAQs
              </span>
              <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-gray-500">
                Common questions from law firms exploring digital
                transformation.
              </p>
            </motion.div>

            <div className="mx-auto mt-14 max-w-3xl divide-y divide-gray-200/70">
              {faqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i}
                    variants={fadeUp}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 py-6 text-left"
                    >
                      <span className="font-serif text-lg font-semibold text-gray-900">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-96 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="leading-relaxed text-gray-500">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────── CTA ──────────────────── */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl bg-gray-900 px-8 py-16 text-center text-white shadow-xl sm:px-16 lg:px-24"
            >
              {/* accent glow */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-500/10 blur-3xl" />

              <Scale className="mx-auto h-10 w-10 text-red-400" />
              <h2 className="mt-6 font-serif text-3xl font-bold sm:text-4xl">
                Ready to Grow Your Legal Practice?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Schedule a confidential consultation with our legal-industry
                specialists. We will audit your current digital presence and
                outline a strategy to generate more qualified leads and
                streamline your operations.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-3.5 text-sm font-semibold text-white shadow transition hover:bg-red-600"
                >
                  Get Your Free Audit
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  View Our Work
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
