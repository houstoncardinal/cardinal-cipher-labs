import { ArrowRight, Check, Star, Shield, Code, Database, Zap, Globe, Phone, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "Do you build websites for SaaS companies?",
    answer: "Yes. SaaS website design is one of our core specialties. We build high-converting SaaS marketing sites with product demos, pricing pages, feature showcases, and integrations with tools like HubSpot, Intercom, and Stripe. We've launched SaaS products that acquired their first 1,000 users in under 30 days.",
  },
  {
    question: "Can you build developer documentation websites?",
    answer: "Absolutely. We build beautiful, searchable developer documentation with syntax highlighting, API reference pages, interactive code playgrounds, and versioning support. Our docs sites are optimized for developer experience and Google search visibility.",
  },
  {
    question: "How do you help tech startups rank on Google?",
    answer: "We combine technical SEO (Core Web Vitals, structured data, crawlability), content strategy (comparison pages, integration pages, developer guides), and link building to rank tech companies for high-intent terms like 'best [software category]', '[competitor] alternative', and '[use case] software'.",
  },
  {
    question: "Do you work with B2B technology companies?",
    answer: "Yes. B2B tech is our sweet spot. We build account-based marketing websites, G2 review optimization strategies, case study pages, and ROI calculators that appeal to B2B buyers and generate qualified pipeline for sales teams.",
  },
  {
    question: "Can you redesign our existing SaaS website without disrupting traffic?",
    answer: "Yes. We use a careful migration strategy — maintaining all existing URLs, implementing proper 301 redirects, preserving canonical tags, and monitoring rankings throughout the redesign. Most clients see their organic traffic increase, not decrease, after a Cardinal redesign.",
  },
];

const services = [
  { name: "SaaS Website Design", description: "High-converting SaaS marketing sites with product demos, pricing pages, and onboarding flows." },
  { name: "Product Demo Integration", description: "Interactive demos, free trial flows, and feature showcases that drive sign-ups." },
  { name: "Developer Documentation", description: "Beautiful, searchable developer docs with API references and code playgrounds." },
  { name: "Tech SEO", description: "Rank for '[competitor] alternative', '[category] software', and other high-intent tech terms." },
  { name: "B2B Lead Generation", description: "Account-based marketing sites, ROI calculators, and case study pages." },
  { name: "App Development", description: "Custom web and mobile apps to extend your SaaS platform." },
];

export function TechnologyIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "Technology",
    industryDescription: "Modern websites for SaaS companies, tech startups, IT services, and technology firms in Houston, TX. B2B tech marketing, developer documentation, and SaaS SEO.",
    industryUrl: `${siteConfig.url}/industry/technology`,
    keywords: ["technology company website design Houston", "SaaS website design", "IT company website Houston", "tech startup marketing", "software company website", "B2B tech marketing Houston", "developer documentation website", "SaaS SEO Houston"],
    services,
    faqs: industryFaqs,
  });

  return (
    <>
      <SEOHead
        title="Technology & SaaS Website Design Houston | Tech Company Marketing Agency"
        description="Houston's top tech website design agency. SaaS websites, developer documentation, B2B tech marketing, and SEO for technology companies and IT firms. 500+ projects. Call (281) 901-7016."
        keywords={["technology company website design Houston", "SaaS website design", "IT company website Houston", "tech startup marketing", "software company website", "SaaS marketing agency Houston", "tech SEO services", "developer documentation website", "B2B tech marketing", "startup web design Houston"]}
        url={`${siteConfig.url}/industry/technology`}
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
                  <Code className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Technology Industry</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Technology Websites That{" "}<span className="text-red-600">Drive Growth</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  High-converting websites for SaaS companies, tech startups, and IT services firms in Houston, TX. Showcase your product, generate trials, and dominate search.
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
                  { value: "10x", label: "Avg Traffic Growth" },
                  { value: "72 hrs", label: "Fastest Launch" },
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
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Technology Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for Houston tech companies and SaaS startups</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "SaaS Websites", description: "High-converting marketing sites with demos, pricing pages, and onboarding flows.", icon: Layers },
                  { title: "Product Demo Integration", description: "Interactive demos and free trial flows that convert visitors into users.", icon: Zap },
                  { title: "Developer Documentation", description: "Beautiful, searchable docs with API references and code playgrounds.", icon: Code },
                  { title: "Tech SEO Houston", description: "Rank for '[competitor] alternative', '[category] software', and high-intent B2B tech terms.", icon: Globe },
                  { title: "B2B Lead Generation", description: "ROI calculators, case studies, and landing pages that drive qualified pipeline.", icon: Database },
                  { title: "Custom App Development", description: "Web and mobile apps to extend your platform's capabilities.", icon: Star },
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
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why Houston Tech Companies Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "SaaS-specific conversion optimization and onboarding flows",
                      "Technical SEO expertise — Core Web Vitals, structured data, crawlability",
                      "Integrations with HubSpot, Segment, Intercom, Stripe, and more",
                      "Experienced in React, Next.js, and modern frontend frameworks",
                      "Fast launch — MVP sites live in as little as 72 hours",
                      "Houston-based dev team that understands the local tech ecosystem",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Launch Your Tech Product?</h3>
                  <p className="text-gray-600 mb-6">Get a high-converting SaaS website that drives trials and revenue. Free consultation, no obligation.</p>
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
                <h2 className="font-serif text-4xl text-gray-900 mb-4">Tech Website FAQs</h2>
                <p className="text-gray-600">Common questions from SaaS founders and tech teams</p>
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
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "Web Developer Houston", href: "/houston-web-developer" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Mobile Apps", href: "/services/mobile-apps" },
                  { label: "UX/UI Design", href: "/services/ux-ui" },
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Showcase Your Technology?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how Cardinal Consulting can help your Houston tech company stand out and grow.</p>
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
