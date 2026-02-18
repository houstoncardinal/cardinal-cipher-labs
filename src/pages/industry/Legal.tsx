import { ArrowRight, Check, Star, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

export function LegalIndustry() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Law Firm Website Design & Legal Digital Marketing | Cardinal Consulting",
      description: "Professional law firm websites and digital marketing for attorneys. Convert more clients with a powerful online presence.",
      url: `${siteConfig.url}/industry/legal`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Industries", url: `${siteConfig.url}/#industries` },
      { name: "Legal", url: `${siteConfig.url}/industry/legal` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Law Firm Website Design & Legal Digital Marketing | Cardinal Consulting"
        description="Professional law firm websites and attorney digital marketing that convert visitors into clients. Expert legal SEO, case intake forms, and reputation management. Houston & nationwide."
        keywords={["law firm website design", "attorney website design", "legal marketing agency", "lawyer SEO", "personal injury lawyer website", "law firm digital marketing", "attorney SEO services", "legal content marketing", "law firm web development", "criminal defense lawyer website", "family law website", "immigration attorney website", "Houston law firm website", "legal lead generation", "bar compliant website"]}
        url={`${siteConfig.url}/industry/legal`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
      
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
            >
              <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Legal Industry</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
            >
              Legal Websites That Win{" "}
              <span className="text-red-600">More Cases</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              Professional websites for law firms that convert visitors into clients. 
              Stand out in a competitive legal market.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
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
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Legal Web Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for law firms and legal professionals</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Law Firm Websites", description: "Professional, credible websites that establish trust.", icon: Shield },
              { title: "Case Evaluation Forms", description: "Streamlined intake forms to capture more leads.", icon: Users },
              { title: "Attorney SEO", description: "Rank #1 for relevant legal keywords in your area.", icon: Star },
              { title: "Legal Content Marketing", description: "Educational content that demonstrates expertise.", icon: Check },
              { title: "Review Management", description: "Build and manage your online reputation.", icon: Star },
              { title: "Mobile-First Design", description: "Websites that work perfectly on any device.", icon: Clock },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all"
              >
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
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Grow Your Practice?</h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how we can help your law firm attract more clients.</p>
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
