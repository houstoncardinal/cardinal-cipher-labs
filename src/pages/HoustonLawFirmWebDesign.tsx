import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Scale, FileText, Users, Shield, TrendingUp, Award, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/seo-config";

const features = [
  {
    icon: Users,
    title: "Attorney Profile Pages",
    description: "Compelling attorney bios that build trust before the first call. Credentials, bar admissions, case results, and professional headshots — all optimized for Google's E-E-A-T signals.",
    perks: ["Bar admission & credentials display", "Practice area expertise tags", "Video introduction integration", "Google My Business profile sync"]
  },
  {
    icon: FileText,
    title: "Online Case Intake Forms",
    description: "Secure, HIPAA-grade intake forms that capture qualified leads 24/7. Conditional logic routes cases to the right attorney instantly — so no lead goes cold.",
    perks: ["Conditional logic routing", "Electronic signature support", "Auto-responder emails", "CRM integration (Clio, MyCase)"]
  },
  {
    icon: Award,
    title: "Case Results & Verdicts Pages",
    description: "Showcase your wins. Properly formatted verdict and settlement pages that comply with Texas Bar advertising rules while demonstrating your firm's track record.",
    perks: ["Texas Bar Rule 7 compliant disclaimers", "Structured data for case results", "Filter by practice area", "Confidential case anonymization"]
  },
  {
    icon: Scale,
    title: "Practice Area Landing Pages",
    description: "Dedicated pages for every practice area — personal injury, family law, criminal defense, immigration, and more — each optimized to rank for high-value Houston legal keywords.",
    perks: ["Individual SEO optimization per page", "Harris County court procedure guides", "FAQ sections for each area", "Internal linking architecture"]
  },
  {
    icon: Shield,
    title: "Client Portal Integration",
    description: "Seamless integration with Clio, MyCase, or Filevine so clients can track their case, upload documents, and communicate securely — reducing your staff's administrative burden.",
    perks: ["Clio & MyCase integration", "Secure document sharing", "Case status tracking", "Encrypted client messaging"]
  },
  {
    icon: Search,
    title: "Local SEO for Lawyers",
    description: "Rank #1 in Houston for your practice area. We optimize for 'personal injury lawyer Houston,' 'divorce attorney Houston,' and every high-intent legal search your clients make.",
    perks: ["Google Business Profile optimization", "Harris County citations", "Legal directory submissions", "Review generation strategy"]
  }
];

const caseStudies = [
  {
    firm: "Galleria-Area Personal Injury Firm",
    practice: "Personal Injury",
    before: "42 contact form submissions/month, ranking on page 3 for 'Houston personal injury lawyer'",
    after: "+458% lead increase — 234 qualified submissions/month, ranking #1 for 3 major PI keywords",
    metrics: ["+458% leads/month", "#1 for 'personal injury lawyer Houston'", "3.2x case acceptance rate"]
  },
  {
    firm: "Downtown Houston Immigration Attorney",
    practice: "Immigration Law",
    before: "Zero organic traffic, relying entirely on referrals and paid ads costing $8,000/month",
    after: "Ranked #1 for 'immigration lawyer Houston' — reduced ad spend to $1,200/month, 180% more consultations",
    metrics: ["#1 immigration keyword", "-85% ad spend", "+180% consultations"]
  },
  {
    firm: "West Houston Family Law Firm",
    practice: "Family Law",
    before: "8 consultation requests/month, outdated website with no mobile optimization",
    after: "8x consultation requests — 67/month — plus top-3 ranking for 'divorce attorney Houston' and 'child custody lawyer Houston'",
    metrics: ["8x consultation volume", "Top 3 divorce attorney ranking", "4.9★ Google rating"]
  },
  {
    firm: "Harris County Divorce Attorney",
    practice: "Divorce & Family",
    before: "Buried on page 4 for key divorce terms, losing clients to competitors with inferior track records",
    after: "Moved to #1 for 'divorce attorney Houston TX' in 5 months — firm revenue increased 210%",
    metrics: ["Page 4 to #1 ranking", "+210% firm revenue", "5-month timeline"]
  }
];

const testimonials = [
  {
    name: "Michael R.",
    role: "Managing Partner",
    company: "Richardson Injury Law, Houston TX",
    text: "Cardinal took us from page 4 to #1 for 'Houston personal injury lawyer' in 4 months. Our leads tripled and case quality improved dramatically. They understand Texas Bar advertising rules and built everything compliant. Best investment our firm has made.",
    rating: 5
  },
  {
    name: "Esperanza V.",
    role: "Owner & Lead Attorney",
    company: "Vargas Immigration Law Group, Houston",
    text: "We were invisible online before Cardinal. Now we rank #1 for immigration law in Houston and our consultation calendar is booked 3 weeks out. The intake forms they built capture exactly the client information I need before the first call.",
    rating: 5
  },
  {
    name: "Amanda K.",
    role: "Senior Partner",
    company: "Kessler & Associates Family Law, Houston",
    text: "We interviewed 5 Houston web design agencies and Cardinal was in a different league. They understand law firm marketing, not just web design. Within 3 months we rank top 3 for every family law keyword that matters in Harris County.",
    rating: 5
  },
  {
    name: "Derek O.",
    role: "Attorney",
    company: "O'Brien Criminal Defense, Houston TX",
    text: "My practice went from 4 new client calls a week to over 20. The website is professional, fast, and actually converts visitors into consultations. Cardinal knows what Houston lawyers need to compete online.",
    rating: 5
  }
];

const faqs = [
  {
    question: "How much does a law firm website cost in Houston?",
    answer: "Law firm websites in Houston typically range from $5,000 for a solo attorney site to $25,000+ for large multi-practice firms. Cardinal Consulting offers transparent, flat-fee packages: our Attorney Starter package begins at $5,000 (5 pages, intake form, SEO), the Firm Growth package at $12,000 (full practice area pages, client portal, advanced SEO), and custom Enterprise packages for large Houston firms. All packages include Texas Bar advertising compliance review, mobile optimization, and 90 days of support. We also offer monthly payment plans so Houston firms can get started without a large upfront investment."
  },
  {
    question: "How long does it take to build a law firm website?",
    answer: "Cardinal Consulting delivers most Houston law firm websites in 3–6 weeks. A solo attorney site can be live in 2–3 weeks. Multi-attorney firms with complex practice area pages, client portal integration, and custom intake workflows typically take 5–7 weeks. We use an agile process — you see a working design after week 1 and provide feedback throughout. We never disappear for weeks and come back with a surprise. Every week you get a progress update and a live preview of your site."
  },
  {
    question: "How do you ensure my website complies with Texas State Bar advertising rules?",
    answer: "Texas Disciplinary Rules of Professional Conduct Rule 7 governs attorney advertising, and we take compliance seriously. Every Cardinal law firm website includes: required disclaimers on all case result and testimonial pages, 'Attorney Advertising' notices where required, no guarantees of outcomes language, proper treatment of 'specialist' designations per SBOT rules, and referral fee disclosures where applicable. We have built dozens of Texas law firm websites and stay current with State Bar of Texas advertising guidelines. We can also submit your website for SBOT pre-approval if required."
  },
  {
    question: "Are your law firm intake forms secure and confidential?",
    answer: "Absolutely. All client intake forms built by Cardinal Consulting use 256-bit SSL encryption, are hosted on HIPAA-grade infrastructure, and comply with attorney-client privilege requirements. We use secure form providers (not basic HTML forms) that ensure data is transmitted encrypted and stored securely. Access is limited to authorized firm staff only. We also integrate with legal practice management software like Clio and MyCase so intake data flows directly into your case management system without any insecure exports or copy-paste."
  },
  {
    question: "How do you help my Houston law firm rank on Google?",
    answer: "We use a multi-layer local SEO strategy built specifically for Houston law firms: (1) Practice area landing pages targeting high-value keywords like 'personal injury lawyer Houston' and 'divorce attorney Harris County,' (2) Google Business Profile optimization for Houston and surrounding suburbs, (3) Citations on legal directories (Avvo, Justia, FindLaw, Martindale), (4) Schema markup for legal services, attorneys, and FAQ pages, (5) Review generation systems to build your 5-star reputation, and (6) Content strategy targeting long-tail questions Houston clients search before hiring an attorney."
  },
  {
    question: "Should my law firm website be mobile-first?",
    answer: "Yes — it is not optional. Over 73% of legal searches in Houston happen on mobile devices, and people searching for a lawyer after a car accident or arrest are almost always on their phone. Google also ranks mobile-first, meaning a poor mobile experience directly hurts your search rankings. Every Cardinal law firm website is built mobile-first: fast load times on 4G networks, large tap targets for phone and form buttons, click-to-call integration prominently placed, and responsive layouts that look professional on every screen size."
  },
  {
    question: "How do I rank #1 for 'personal injury lawyer Houston'?",
    answer: "Ranking #1 for 'personal injury lawyer Houston' is one of the most competitive SEO goals in Texas — but we've done it. The strategy requires: a dedicated personal injury landing page with deep, authoritative content (2,000+ words), detailed case result pages demonstrating your firm's track record, a strong Google Business Profile with consistent reviews, citations across 50+ legal and local directories, technical SEO (page speed, schema, Core Web Vitals), and ongoing content (blog posts, FAQ pages, local legal guides). We've helped Houston PI firms move from page 3 to #1 within 4–6 months using this approach."
  },
  {
    question: "Why shouldn't I just use an Avvo or LegalZoom template instead?",
    answer: "Avvo and legal directory profiles get your firm listed — but they rank Avvo, not you. Every click goes to their platform, not your firm. LegalZoom website templates are generic, lack SEO customization, and don't stand out in Houston's competitive legal market. A custom Cardinal Consulting law firm website ranks in Google under your own domain, captures leads directly to you with no commission or referral fee, is fully compliant with Texas Bar rules, integrates with your preferred practice management software, and builds your brand — not Avvo's. The firms ranking #1 in Houston for competitive legal keywords own their own websites."
  }
];

const neighborhoods = [
  "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring",
  "League City", "Pasadena", "Conroe", "Friendswood", "Bellaire", "River Oaks"
];

const relatedServices = [
  { title: "Houston SEO", description: "Rank #1 in Houston for your highest-value keywords with our proven local SEO strategy.", href: "/houston-seo", label: "Houston SEO" },
  { title: "Houston Web Design", description: "Custom website design for Houston businesses — built to rank, built to convert.", href: "/houston-web-design", label: "Web Design" },
  { title: "Houston Web Developer", description: "Expert web development for complex Houston business requirements.", href: "/houston-web-developer", label: "Web Development" },
  { title: "SEO & Analytics", description: "Data-driven SEO and analytics to measure and grow your organic traffic.", href: "/services/seo-analytics", label: "SEO Analytics" }
];

const generateSchemas = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Law Firm Website Design Houston TX",
    "alternateName": ["Attorney Website Design Houston", "Legal Website Design Houston", "Lawyer Website Houston"],
    "description": "Professional law firm website design for Houston attorneys. HIPAA-compliant intake forms, attorney profiles, case result pages, Texas Bar compliant advertising, and local SEO to rank on page 1.",
    "url": "https://www.visitcardinal.com/houston-law-firm-website-design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cardinal Consulting",
      "telephone": "+12819017016",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2100 West Loop S Fwy",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77027",
        "addressCountry": "US"
      }
    },
    "areaServed": { "@type": "City", "name": "Houston", "containedInPlace": { "@type": "State", "name": "Texas" } },
    "serviceType": "Law Firm Web Design"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visitcardinal.com" },
      { "@type": "ListItem", "position": 2, "name": "Houston Web Design", "item": "https://www.visitcardinal.com/houston-web-design" },
      { "@type": "ListItem", "position": 3, "name": "Law Firm Website Design Houston", "item": "https://www.visitcardinal.com/houston-law-firm-website-design" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Law Firm Website Design Houston | Attorney Website Design Houston TX",
    "description": "Houston's top law firm website design agency. HIPAA-compliant intake forms, attorney profiles, case result pages, and local SEO that puts your firm on page 1.",
    "url": "https://www.visitcardinal.com/houston-law-firm-website-design",
    "isPartOf": { "@type": "WebSite", "url": "https://www.visitcardinal.com", "name": "Cardinal Consulting" }
  };

  return [serviceSchema, faqSchema, breadcrumbSchema, webPageSchema];
};

export default function HoustonLawFirmWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Law Firm Website Design Houston | Attorney Website Design Houston TX"
        description="Houston's top law firm website design agency. HIPAA-compliant intake forms, attorney profiles, case result pages, and local SEO that puts your firm on page 1. Call (281) 901-7016."
        keywords={[
          "law firm website design houston", "attorney website design houston", "legal website houston",
          "lawyer website houston", "personal injury lawyer website houston", "law firm web design houston tx",
          "attorney website houston tx", "legal web design houston", "houston law firm seo",
          "lawyer seo houston", "divorce attorney website houston", "immigration lawyer website houston",
          "criminal defense website houston", "family law website houston", "houston bar compliant website",
          "law firm marketing houston", "attorney marketing houston", "legal website design texas"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-law-firm-website-design"
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />)}</div>
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Law Firm Website Design Agency — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Law Firm Website Design Houston —{' '}
                <span className="text-red-600">Built to Win Cases & Clients</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Houston lawyers trust Cardinal Consulting to build websites that rank #1 on Google, capture qualified leads 24/7, and comply with Texas Bar advertising rules. From downtown Houston firms to Galleria-area practices — we build websites that win.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                We've helped personal injury firms, immigration attorneys, family law practices, and criminal defense lawyers dominate Harris County Google searches.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free Law Firm Website Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["Texas Bar Advertising Compliant", "HIPAA-Grade Intake Forms", "Clio & MyCase Integration", "Free Consultation"].map(badge => (
                  <span key={badge} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" />{badge}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: "+458%", label: "Average Lead Increase" },
                  { value: "#1", label: "Google Rankings Achieved" },
                  { value: "100%", label: "Texas Bar Compliant" },
                  { value: "3 Wks", label: "Average Delivery Time" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">What We Build</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Law Firm Website Features That Convert</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Every feature built for Houston attorneys — from downtown law firms to Galleria-area practices.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.perks.map(p => (
                        <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston Law Firm Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Real Results for Houston Law Firms</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">From Harris County courtrooms to page-1 Google rankings — here's what our Houston attorney clients achieved.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.firm} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.practice}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{study.firm}</h3>
                    <div className="space-y-3 mb-5">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Before</span>
                        <p className="text-gray-600 text-sm mt-1">{study.before}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">After</span>
                        <p className="text-gray-700 text-sm mt-1">{study.after}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map(m => (
                        <span key={m} className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{m}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Attorneys Trust Cardinal</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-gray-600 text-sm mb-4">"{t.text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-red-600 text-xs font-medium">{t.role}</div>
                    <div className="text-gray-500 text-xs">{t.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Law Firm Website Design Houston — FAQ</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NEIGHBORHOODS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Serving Houston Law Firms & Beyond</h2>
                <p className="text-gray-500">We build websites for attorneys across the greater Houston metro area.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                {neighborhoods.map(n => (
                  <span key={n} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors">{n}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* RELATED SERVICES */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Related Services</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedServices.map((s, i) => (
                  <motion.div key={s.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={s.href} className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all group">
                      <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{s.label}</span>
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm">{s.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Dominate Houston Legal Search Results?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free website audit and SEO analysis for your Houston law firm. We'll show you exactly how to outrank competing attorneys.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free Law Firm Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" /> Call (281) 901-7016
                  </a>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />2100 West Loop S Fwy, Houston, TX 77027</span>
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4" />hello@visitcardinal.com</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Mon–Fri 9AM–6PM CST</span>
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
