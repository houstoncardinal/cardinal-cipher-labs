import { ArrowRight, Check, Star, Shield, TrendingUp, Lock, BarChart2, Phone, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "Do you build SEC and FINRA compliant financial websites?",
    answer: "Yes. We understand the compliance landscape for financial advisors, registered investment advisors (RIAs), broker-dealers, and CPAs. Our websites include required disclosures, compliant ADV Part 2 links, and content review processes that satisfy SEC and FINRA guidelines.",
  },
  {
    question: "Can you build a secure client portal for our financial firm?",
    answer: "Absolutely. We build secure, encrypted client portals for document sharing, account statements, and client communications. All portals are protected with multi-factor authentication and meet financial industry security standards.",
  },
  {
    question: "What financial keywords can you help us rank for in Houston?",
    answer: "We help financial firms rank for high-value terms like 'financial advisor Houston', 'CPA near me', 'wealth management Houston', 'financial planner Houston TX', 'tax advisor Houston', and more. Our financial SEO strategies are specifically designed for competitive Houston markets.",
  },
  {
    question: "How do you help financial firms generate leads online?",
    answer: "We combine SEO, conversion-optimized landing pages, lead magnet funnels (free consultations, tax guides, retirement calculators), and targeted Google Ads to drive qualified leads to financial firms. Every strategy is built around your specific ideal client profile.",
  },
  {
    question: "What is the typical cost for a financial advisor website?",
    answer: "A professional financial advisor website starts at $3,000 for a 5–8 page site. Larger RIA firm websites with client portals, compliance features, and custom content typically range $8,000–$20,000. We provide detailed quotes after a free consultation.",
  },
];

const services = [
  { name: "Financial Advisor Websites", description: "Professional websites that establish credibility and trust with high-net-worth prospects." },
  { name: "Client Portal Integration", description: "Secure portals for account access, document sharing, and client communications." },
  { name: "Financial SEO", description: "Rank #1 for financial services keywords in Houston and your target markets." },
  { name: "Content Marketing", description: "Educational content — market insights, tax guides, retirement calculators — that attracts clients." },
  { name: "Lead Generation", description: "Convert more website visitors into qualified consultation requests." },
  { name: "Compliance-Ready Design", description: "Websites that meet SEC, FINRA, and state regulatory requirements." },
];

export function FinancialIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "Financial Services",
    industryDescription: "Professional websites for financial advisors, CPAs, wealth managers, and fintech companies in Houston, TX. SEC/FINRA-compliant financial web design and digital marketing.",
    industryUrl: `${siteConfig.url}/industry/financial`,
    keywords: ["financial services website design Houston", "financial advisor website", "CPA firm website Houston", "fintech web development", "financial marketing agency Houston", "wealth management website", "SEC compliant website", "financial SEO Houston"],
    services,
    faqs: industryFaqs,
    compliance: ["SEC Compliant", "FINRA Guidelines", "ADA Accessible", "SSL Encrypted"],
  });

  return (
    <>
      <SEOHead
        title="Financial Services Website Design Houston | Financial Advisor SEO & Marketing"
        description="Houston's top financial web design agency. SEC/FINRA-compliant websites for financial advisors, CPAs, wealth managers, and fintech companies. Rank #1 on Google and generate qualified leads. Call (281) 901-7016."
        keywords={["financial services website design Houston", "financial advisor website", "accountant website design", "CPA firm website Houston", "fintech web development", "financial marketing agency Houston", "wealth management website", "financial SEO Houston", "investment firm website", "SEC compliant website"]}
        url={`${siteConfig.url}/industry/financial`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>

          {/* Hero */}
          <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
                  <DollarSign className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Financial Industry</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Financial Websites That Build{" "}<span className="text-red-600">Trust & Wealth</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Professional, compliance-ready websites for Houston financial advisors, CPAs, wealth managers, and fintech companies. Establish credibility and attract more high-value clients.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
                    Get Free Consultation <ArrowRight size={18} />
                  </Link>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-700 font-semibold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
                    View Portfolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 bg-red-600">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "4.9★", label: "Client Rating" },
                  { value: "#1", label: "Google Rankings" },
                  { value: "100%", label: "Compliance Ready" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl md:text-4xl text-white font-bold">{stat.value}</div>
                    <div className="text-red-100 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Financial Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for Houston financial professionals</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Financial Advisor Websites", description: "Professional websites that establish credibility and attract high-net-worth clients.", icon: Shield },
                  { title: "Secure Client Portals", description: "Encrypted portals for document sharing, account statements, and client communications.", icon: Lock },
                  { title: "Financial SEO Houston", description: "Rank #1 for 'financial advisor Houston', 'CPA near me', 'wealth management Houston', and more.", icon: TrendingUp },
                  { title: "Content Marketing", description: "Market insights, retirement guides, and tax tips that attract and convert prospects.", icon: BarChart2 },
                  { title: "Lead Generation Funnels", description: "Convert website visitors into consultation requests with optimized landing pages.", icon: Star },
                  { title: "Compliance-Ready Design", description: "Websites built to meet SEC, FINRA, and state regulatory advertising requirements.", icon: Check },
                ].map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <service.icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why Houston Financial Firms Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "SEC, FINRA, and state bar compliance built into every website",
                      "Secure, encrypted client portals with multi-factor authentication",
                      "Financial SEO targeting high-net-worth search intent keywords",
                      "Fast Core Web Vitals scores for better Google rankings",
                      "ADA-accessible design for all clients",
                      "Houston-based team with deep financial industry knowledge",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Grow Your Financial Practice?</h3>
                  <p className="text-gray-600 mb-6">Get a compliance-ready website that attracts more high-value clients. Free consultation, no obligation.</p>
                  <div className="space-y-3">
                    <Link to="/contact" className="flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-red-700 transition-all w-full justify-center">
                      Schedule Free Consultation <ArrowRight size={16} />
                    </Link>
                    <a href="tel:281-901-7016" className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-red-200 transition-all w-full justify-center">
                      <Phone size={16} className="text-red-600" /> (281) 901-7016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-gray-900 mb-4">Financial Website FAQs</h2>
                <p className="text-gray-600">Common questions from Houston financial firms about web design and digital marketing</p>
              </div>
              <div className="space-y-6">
                {industryFaqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border border-gray-100 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-8 text-center">Explore Our Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "SEO Company Houston", href: "/houston-seo-company" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "SEO & Analytics", href: "/services/seo-analytics" },
                  { label: "Brand Identity", href: "/services/brand-identity" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="flex items-center justify-center gap-1 p-3 rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 text-sm font-medium text-gray-700 transition-all text-center">
                    {link.label} <ArrowRight className="w-3 h-3 text-red-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Grow Your Financial Practice?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how Cardinal Consulting can help your Houston financial firm attract more high-value clients.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
                  Get Started Today <ArrowRight size={18} />
                </Link>
                <a href="tel:281-901-7016" className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-8 py-4 rounded-xl hover:border-white transition-all">
                  <Phone size={18} /> (281) 901-7016
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
