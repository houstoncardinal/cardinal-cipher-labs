import { ArrowRight, Check, Star, Shield, Cpu, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

export function AIAutomationIndustry() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "AI & Automation Website Design | Cardinal Consulting",
      description: "Modern websites for AI companies, automation services, and tech startups. Showcase your innovation with cutting-edge digital presence.",
      url: `${siteConfig.url}/industry/ai-automation`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Industries", url: `${siteConfig.url}/#industries` },
      { name: "AI & Automation", url: `${siteConfig.url}/industry/ai-automation` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="AI & Automation Company Website Design | Cardinal Consulting"
        description="Cutting-edge websites for AI companies, machine learning startups, and automation services. Showcase your technology, attract investors, and generate leads with expert web design and digital marketing."
        keywords={["AI company website design", "automation company website", "machine learning web development", "AI startup marketing", "chatbot development website", "artificial intelligence marketing", "AI SaaS website", "automation platform website", "AI product launch", "ML company branding", "Houston AI company website", "AI lead generation", "automation SEO", "AI content marketing", "robotics company website"]}
        url={`${siteConfig.url}/industry/ai-automation`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
      
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
              <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">AI & Automation</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
              AI & Automation Websites That <span className="text-red-600">Transform</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Cutting-edge websites for AI companies and automation services. Showcase your technology to the world.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
                Get Free Consultation <ArrowRight size={18} />
              </a>
              <a href="#portfolio" className="inline-flex items-center gap-2 text-gray-700 font-semibold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
                View Portfolio
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">AI & Automation Web Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for AI and automation companies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI Product Websites", description: "Modern websites that showcase your AI products.", icon: Cpu },
              { title: "Automation Platforms", description: "Websites for automation and workflow tools.", icon: Zap },
              { title: "Demo Integration", description: "Interactive product demos and trials.", icon: Star },
              { title: "Tech SEO", description: "Rank for AI and automation keywords.", icon: Star },
              { title: "Developer APIs", description: "Beautiful documentation for developers.", icon: Shield },
              { title: "Lead Generation", description: "Convert visitors into demo requests.", icon: Zap },
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

      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Showcase Your AI?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how we can help your AI company stand out.</p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
            Get Started Today <ArrowRight size={18} />
          </a>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
