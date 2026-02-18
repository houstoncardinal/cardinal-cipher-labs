import { ArrowRight, Check, Star, Shield, Hammer, Building } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function ConstructionIndustry() {
  return (
    <>
      <SEOHead
        title="Construction Company Website Design | Cardinal Consulting"
        description="Professional websites for construction companies, contractors, and builders. Showcase your projects with a powerful online presence."
        keywords={["construction website design", "contractor website", "builder marketing", "construction company website", "renovation company website"]}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
      
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
              <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Construction Industry</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
              Construction Websites That <span className="text-red-600">Build Trust</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Professional websites for construction companies and contractors. Showcase your projects and win more bids.
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
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Construction Web Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for construction companies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Construction Websites", description: "Professional websites that showcase your projects.", icon: Building },
              { title: "Project Portfolios", description: "Beautiful galleries of completed projects.", icon: Hammer },
              { title: "Lead Generation", description: "Convert visitors into project inquiries.", icon: Star },
              { title: "Service Pages", description: "Detailed pages for each service offering.", icon: Shield },
              { title: "Local SEO", description: "Rank #1 for local construction searches.", icon: Star },
              { title: "Mobile Responsive", description: "Websites that work on any device.", icon: Shield },
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
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Build Your Online Presence?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how we can help your construction company attract more clients.</p>
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
