import { ArrowRight, Check, Star, Shield, Clock, Users, Scale, FileText, Phone, Search } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "What makes a great law firm website?",
    answer: "A great law firm website establishes credibility instantly with attorney bios, practice area detail pages, client testimonials, and clear intake forms. It must load fast, rank on Google for local legal keywords, and be compliant with state bar advertising rules. Cardinal Consulting specializes in building all of this into every legal website we deliver.",
  },
  {
    question: "Can you help our law firm rank #1 on Google in Houston?",
    answer: "Yes. We provide comprehensive attorney SEO services targeting high-value terms like 'personal injury lawyer Houston', 'divorce attorney near me', 'criminal defense lawyer Houston TX', and more. Our SEO strategies have ranked Houston law firms in the #1 position for competitive legal keywords.",
  },
  {
    question: "Do you understand bar compliance rules for legal marketing?",
    answer: "Absolutely. We understand Texas State Bar advertising rules and build websites that comply with disclaimer requirements, attorney-client privilege protections, and proper use of 'attorney' vs. 'lawyer' terminology. Every law firm website we deliver is reviewed for bar compliance.",
  },
  {
    question: "How long does it take to build a law firm website?",
    answer: "A standard 10–15 page law firm website takes 3–5 weeks. Larger multi-attorney firm websites with case management integrations take 6–10 weeks. We offer expedited delivery for firms that need a site live quickly, sometimes as fast as 72 hours for basic launches.",
  },
  {
    question: "Do you provide legal content writing services?",
    answer: "Yes. Our team writes SEO-optimized legal content — practice area pages, blog posts, FAQ pages, and location pages — that ranks on Google and converts visitors into clients. All content is reviewed by experienced legal marketing professionals before publication.",
  },
];

const services = [
  { name: "Law Firm Websites", description: "Professional, credible websites that establish trust and convert visitors into clients." },
  { name: "Attorney SEO", description: "Rank #1 for high-value legal keywords in Houston and across Texas." },
  { name: "Case Evaluation Forms", description: "Streamlined intake forms that capture more qualified leads." },
  { name: "Legal Content Marketing", description: "Practice area pages, blogs, and FAQs that demonstrate expertise." },
  { name: "Reputation Management", description: "Build and manage Google, Avvo, and Martindale-Hubbell reviews." },
  { name: "Mobile-First Design", description: "Fast, responsive websites that work perfectly on any device." },
];

export function LegalIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "Legal",
    industryDescription: "Professional law firm websites, attorney SEO, and legal digital marketing for Houston law firms and attorneys nationwide. Bar-compliant websites that convert visitors into clients.",
    industryUrl: `${siteConfig.url}/industry/legal`,
    keywords: ["law firm website design Houston", "attorney website design", "legal marketing agency Houston", "lawyer SEO Houston", "personal injury lawyer website", "Houston law firm digital marketing"],
    services,
    faqs: industryFaqs,
    compliance: ["Texas State Bar Compliant", "ADA Accessible", "SSL Encrypted"],
  });

  return (
    <>
      <SEOHead
        title="Law Firm Website Design Houston | Attorney SEO & Legal Marketing"
        description="Houston's top legal web design agency. Professional law firm websites, attorney SEO that ranks #1 on Google, bar-compliant legal marketing, and case intake optimization. 500+ projects delivered. Call (281) 901-7016."
        keywords={["law firm website design Houston", "attorney website design", "legal marketing agency", "lawyer SEO Houston", "personal injury lawyer website", "law firm digital marketing Houston", "attorney SEO services", "legal content marketing", "Houston law firm website", "bar compliant website"]}
        url={`${siteConfig.url}/industry/legal`}
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
                  <Scale className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Legal Industry</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Legal Websites That Win{" "}<span className="text-red-600">More Cases</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Professional websites for Houston law firms and attorneys that convert visitors into clients. Rank #1 on Google and dominate your local legal market.
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
                  { value: "100%", label: "Bar Compliant" },
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
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Legal Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for Houston law firms and legal professionals</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Law Firm Websites", description: "Professional, credible websites that establish trust and convert visitors into clients.", icon: Shield },
                  { title: "Case Evaluation Forms", description: "Optimized intake forms that capture qualified leads 24/7.", icon: FileText },
                  { title: "Attorney SEO Houston", description: "Rank #1 for high-value legal keywords — personal injury, family law, criminal defense, and more.", icon: Search },
                  { title: "Legal Content Marketing", description: "Practice area pages, FAQs, and blog posts that demonstrate expertise and rank on Google.", icon: Star },
                  { title: "Review Management", description: "Build your reputation on Google, Avvo, Martindale-Hubbell, and Super Lawyers.", icon: Users },
                  { title: "Mobile-First Design", description: "Fast, responsive websites that work perfectly on any device — over 60% of legal searches happen on mobile.", icon: Clock },
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
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why Houston Law Firms Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "Texas State Bar advertising rules compliance built in",
                      "Attorney SEO that ranks for high-competition legal keywords",
                      "Secure case intake forms with client confidentiality protection",
                      "Fast loading websites (Core Web Vitals optimized)",
                      "ADA-accessible design for all users",
                      "Houston-based agency with local legal market knowledge",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Win More Cases?</h3>
                  <p className="text-gray-600 mb-6">Get a custom law firm website that converts visitors into clients. Free consultation, no obligation.</p>
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
                <h2 className="font-serif text-4xl text-gray-900 mb-4">Law Firm Website FAQs</h2>
                <p className="text-gray-600">Common questions from Houston attorneys about web design and legal marketing</p>
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
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Grow Your Law Practice?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how Cardinal Consulting can help your Houston law firm attract more clients online.</p>
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
