import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Shield, Lock, CheckCircle2, ArrowRight, Server, FileKey, Eye, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Lock, title: "SSL/TLS Encryption", description: "Enterprise-grade encryption for all data in transit." },
  { icon: FileKey, title: "HIPAA Compliant", description: "Full compliance for healthcare applications." },
  { icon: Server, title: "SOC 2 Ready", description: "Infrastructure meets rigorous security standards." },
  { icon: Eye, title: "24/7 Monitoring", description: "Real-time threat detection and response." }
];

const certifications = ["HIPAA", "SOC 2", "PCI DSS", "GDPR", "ISO 27001"];

export default function EnterpriseSecurity() {
  return (
    <>
      <SEOHead
        title="Enterprise Security & Compliance | Secure Web Development"
        description="Bank-level security for your website. SSL, HIPAA, SOC 2 compliant web development. Protect your business and customer data with enterprise-grade security."
        keywords={["enterprise security", "HIPAA compliant web development", "SOC 2 security", "SSL encryption", "secure web development", "data protection"]}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <Shield className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Enterprise Security</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Bank-Level Security for Your <span className="text-red-600">Business</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                  Enterprise-grade security that protects your business and customer data. Sleep easy knowing your digital assets are secure.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Get Secure Quote <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <Link to="/portfolio"><Button size="lg" variant="outline">View Our Work</Button></Link>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <f.icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-gray-600">{f.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Compliance Certifications</h2>
              </motion.div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {certifications.map((cert) => (
                  <motion.div key={cert} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="px-6 py-3 bg-white rounded-full border border-gray-200">
                    <span className="font-semibold text-gray-700">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Secure Your Business Today</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">Get a free security assessment for your project.</p>
                <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Start Secure Project <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
