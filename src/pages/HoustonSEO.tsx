import { ArrowRight, Check, Star, MapPin, Phone, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function HoustonSEOPage() {
  return (
    <>
      <SEOHead
        title="Web Design Houston | Houston SEO & Digital Marketing | Cardinal Consulting"
        description="Houston's premier web design and SEO agency. We specialize in web design Houston businesses trust, local SEO, and digital marketing that drives results."
        keywords={["web design Houston", "Houston SEO", "Houston website design", "Houston digital marketing", "Houston web developer", "local SEO Houston", "SEO services Houston"]}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
            >
              <MapPin className="w-4 h-4 text-red-600" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                Serving Houston & Surrounding Areas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
            >
              Houston's Premier{" "}
              <span className="text-red-600">Web Design</span> & SEO Agency
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              We help Houston businesses grow with professional web design, local SEO, and digital marketing. 
              Trusted by businesses across the Greater Houston area.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all"
              >
                Get Free SEO Audit
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-gray-700 font-semibold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
              >
                View Our Work
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Houston Service Areas */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center">
            <p className="text-gray-500 mb-4">Proudly serving businesses in:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Houston", "The Woodlands", "Sugar Land", "Pearland", "Katy", "Cypress", "Spring", "League City", "Baytown", "Missouri City"].map((area) => (
                <span key={area} className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Houston Web Design & SEO Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for Houston businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Web Design",
                description: "Unique, professional websites tailored to your Houston business brand.",
              },
              {
                title: "Houston Local SEO",
                description: "Rank #1 in Houston searches for your business keywords.",
              },
              {
                title: "E-commerce Solutions",
                description: "Online stores that drive sales for Houston retailers.",
              },
              {
                title: "WordPress Development",
                description: "Easy-to-manage websites built on the world's top platform.",
              },
              {
                title: "SEO Optimization",
                description: "Technical SEO to improve your search rankings.",
              },
              {
                title: "Digital Marketing",
                description: "PPC, social media, and content marketing campaigns.",
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all"
              >
                <h3 className="font-serif text-xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Houston Businesses Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-gray-900 mb-6">
                Why Houston Businesses Trust Cardinal
              </h2>
              <div className="space-y-4">
                {[
                  "Houston-based team with local market knowledge",
                  "Proven results for businesses across industries",
                  "Responsive, reliable ongoing support",
                  "Transparent pricing and reporting",
                  "Fast-loading, SEO-optimized websites",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Grow Your Houston Business?</h3>
              <p className="text-gray-600 mb-6">
                Get a custom digital strategy for your Houston business.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
              >
                Schedule Free Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Get Found in Houston
            </h2>
            <p className="text-gray-400 mb-10">
              Contact us today for a free SEO audit and consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-white">
                <Phone className="w-5 h-5 text-red-500" />
                <span>(281) 901-7016</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-5 h-5 text-red-500" />
                <span>Mon-Fri 9AM-6PM CST</span>
              </div>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all"
            >
              Start Your Project
              <ArrowRight size={18} />
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
