import { ArrowRight, Check, Star, Shield, Clock, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

export function HealthcareIndustry() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Healthcare Website Design & Digital Marketing | Cardinal Consulting",
      description: "Specialized healthcare web design and digital marketing services for medical practices, clinics, and healthcare providers. HIPAA-compliant websites that attract patients.",
      url: `${siteConfig.url}/industry/healthcare`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Industries", url: `${siteConfig.url}/#industries` },
      { name: "Healthcare", url: `${siteConfig.url}/industry/healthcare` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Healthcare Website Design & Digital Marketing | Cardinal Consulting"
        description="HIPAA-compliant healthcare websites that attract more patients. Expert medical web design, patient portal integration, medical SEO, and healthcare digital marketing. Houston & nationwide."
        keywords={["healthcare website design", "medical website design", "doctor website design", "clinic website", "HIPAA compliant website", "healthcare digital marketing", "medical SEO", "patient portal development", "healthcare web development Houston", "medical practice website", "hospital website design", "telehealth website", "healthcare app development", "medical content marketing", "physician website design"]}
        url={`${siteConfig.url}/industry/healthcare`}
        schemas={schemas}
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
              <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                Healthcare Industry
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
            >
              Healthcare Websites That Build{" "}
              <span className="text-red-600">Patient Trust</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
            >
              HIPAA-compliant websites designed for medical practices, clinics, and healthcare providers. 
              Attract more patients with a professional online presence.
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
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 text-gray-700 font-semibold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all"
              >
                View Portfolio
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
              Healthcare Web Solutions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored for the healthcare industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HIPAA-Compliant Websites",
                description: "Secure, compliant websites that protect patient data and meet healthcare regulations.",
                icon: Shield,
              },
              {
                title: "Patient Portal Integration",
                description: "Seamless integration with existing patient management systems and EMR/EHR.",
                icon: Users,
              },
              {
                title: "Online Appointment Booking",
                description: "Streamlined scheduling systems that reduce no-shows and improve efficiency.",
                icon: Clock,
              },
              {
                title: "Medical SEO",
                description: "Local SEO strategies to help patients find your practice online.",
                icon: Star,
              },
              {
                title: "Healthcare Content Marketing",
                description: "Educational content that establishes authority and attracts patients.",
                icon: Check,
              },
              {
                title: "Reputation Management",
                description: "Build and manage your online reviews to attract more patients.",
                icon: Star,
              },
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

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl text-gray-900 mb-6">
                Why Healthcare Providers Choose Cardinal
              </h2>
              <div className="space-y-4">
                {[
                  "HIPAA-compliant development practices",
                  "Experience with medical practices of all sizes",
                  "Fast, mobile-responsive websites",
                  "Integration with healthcare systems",
                  "Ongoing support and maintenance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Grow Your Practice?</h3>
              <p className="text-gray-600 mb-6">
                Get a custom healthcare website that converts visitors into patients.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-red-700 transition-all"
              >
                Schedule Consultation
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help your healthcare practice attract more patients.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all"
          >
            Get Started Today
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
