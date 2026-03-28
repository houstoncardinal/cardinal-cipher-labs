import { ArrowRight, Check, Star, Shield, Cpu, Zap, Bot, Phone, BrainCircuit, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "Can you build a website for our AI or machine learning startup?",
    answer: "Absolutely. We specialize in building high-impact websites for AI companies, ML startups, and automation platforms. Our work includes interactive product demos, API documentation, investor-ready pitch decks integrated as web experiences, and conversion-optimized landing pages that drive demo requests and sign-ups.",
  },
  {
    question: "Do you build AI chatbot integrations for websites?",
    answer: "Yes. We build and integrate custom AI chatbots powered by GPT-4, Claude, and other LLMs into existing websites. Chatbots can handle lead qualification, customer support, appointment booking, and complex FAQ handling. We also build the chatbot training pipelines and admin dashboards.",
  },
  {
    question: "Can you help our automation company rank on Google?",
    answer: "Yes. Our AI/automation SEO strategy targets terms like 'AI automation company Houston', 'workflow automation software', 'RPA consulting', 'AI chatbot development', and competitor comparison terms. We build technical and content SEO strategies specifically designed for the AI/automation market.",
  },
  {
    question: "Do you build websites for robotics or hardware AI companies?",
    answer: "Yes. We've built digital presence for robotics companies, computer vision startups, and industrial AI firms. Our work includes product showcase pages, technical spec sheets optimized for search, video integration for demos, and B2B lead generation strategies targeting enterprise buyers.",
  },
  {
    question: "How do you help AI companies attract investors with their website?",
    answer: "We build investor-grade AI company websites with compelling product storytelling, technology deep-dives, team credibility pages, traction metrics, and press/media sections. Our SEO strategies also drive earned media that impresses VCs during due diligence.",
  },
];

const services = [
  { name: "AI Product Websites", description: "Modern websites that showcase your AI products with interactive demos and compelling storytelling." },
  { name: "Automation Platform Sites", description: "Websites for RPA, workflow automation, and process intelligence platforms." },
  { name: "AI Chatbot Integration", description: "Custom AI chatbots powered by GPT-4/Claude for lead gen, support, and user engagement." },
  { name: "Developer API Documentation", description: "Beautiful, searchable API docs that attract developers and accelerate adoption." },
  { name: "AI/Automation SEO", description: "Rank for high-value AI and automation keywords in Google." },
  { name: "Lead Generation Systems", description: "Convert website visitors into demo requests, trials, and qualified sales pipeline." },
];

export function AIAutomationIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "AI & Automation",
    industryDescription: "Cutting-edge websites for AI companies, machine learning startups, automation platforms, and robotics firms in Houston, TX. AI chatbot integrations, developer docs, and AI/automation SEO.",
    industryUrl: `${siteConfig.url}/industry/ai-automation`,
    keywords: ["AI company website design Houston", "automation company website", "machine learning web development Houston", "AI startup marketing", "chatbot development Houston", "artificial intelligence marketing Houston", "AI SaaS website", "automation platform website", "AI SEO Houston"],
    services,
    faqs: industryFaqs,
  });

  return (
    <>
      <SEOHead
        title="AI & Automation Company Website Design Houston | AI Marketing Agency"
        description="Houston's top AI web design agency. Cutting-edge websites for AI companies, automation startups, and ML firms. AI chatbot integrations, API documentation, and AI/automation SEO. Call (281) 901-7016."
        keywords={["AI company website design Houston", "automation company website", "machine learning web development", "AI startup marketing Houston", "chatbot development website", "artificial intelligence marketing Houston", "AI SaaS website", "automation platform website", "AI SEO Houston", "robotics company website"]}
        url={`${siteConfig.url}/industry/ai-automation`}
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
                  <Cpu className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">AI & Automation</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  AI & Automation Websites That{" "}<span className="text-red-600">Attract & Convert</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Cutting-edge websites for AI companies, automation platforms, and machine learning startups in Houston, TX. Showcase your technology, attract investors, and drive demo requests.
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
                  { value: "GPT-4", label: "AI Integrations" },
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
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">AI & Automation Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for Houston AI companies and automation startups</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "AI Product Websites", description: "Modern websites that showcase your AI products with interactive demos and compelling narratives.", icon: BrainCircuit },
                  { title: "Automation Platform Sites", description: "High-converting websites for RPA, workflow automation, and process intelligence platforms.", icon: Zap },
                  { title: "AI Chatbot Integration", description: "Custom chatbots powered by GPT-4 and Claude for lead gen, support, and user engagement.", icon: Bot },
                  { title: "Developer API Documentation", description: "Searchable docs with API references, code playgrounds, and onboarding guides.", icon: Shield },
                  { title: "AI/Automation SEO", description: "Rank for 'AI automation company', 'workflow automation software', and competitor terms.", icon: TrendingUp },
                  { title: "Investor-Ready Presence", description: "Web presence that impresses VCs with traction metrics, team credibility, and technology showcase.", icon: Star },
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
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why AI Companies Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "We build with the latest AI/ML tech — GPT-4, Claude, LangChain, vector DBs",
                      "Custom AI chatbot integrations for lead gen and customer support",
                      "SEO expertise for competitive AI/automation keywords",
                      "Developer-grade documentation that accelerates API adoption",
                      "Investor-grade web presence that passes VC due diligence",
                      "Houston-based team that understands the AI startup ecosystem",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Showcase Your AI?</h3>
                  <p className="text-gray-600 mb-6">Get a cutting-edge AI company website that drives demos and attracts investors. Free consultation, no obligation.</p>
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
                <h2 className="font-serif text-4xl text-gray-900 mb-4">AI Website FAQs</h2>
                <p className="text-gray-600">Common questions from AI founders and automation companies</p>
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
                  { label: "App Development", href: "/houston-app-development" },
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "Web Developer Houston", href: "/houston-web-developer" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Mobile Apps", href: "/services/mobile-apps" },
                  { label: "SEO Company Houston", href: "/houston-seo-company" },
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Showcase Your AI?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how Cardinal Consulting can help your Houston AI company stand out and dominate the market.</p>
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
