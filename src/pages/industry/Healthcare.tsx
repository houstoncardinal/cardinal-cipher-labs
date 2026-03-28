import { ArrowRight, Check, Star, Shield, Clock, Users, Heart, Activity, FileText, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "Do you build HIPAA-compliant healthcare websites?",
    answer: "Yes. Every healthcare website we build is HIPAA-compliant by design — encrypted forms, secure hosting, strict data handling policies, and no PHI stored on-site. We work with your compliance team to ensure all requirements are met before launch.",
  },
  {
    question: "How long does it take to build a medical practice website?",
    answer: "A standard medical website takes 2–4 weeks. Websites with patient portal integrations or custom booking systems take 4–8 weeks. We offer rapid delivery options — fully launched in as little as 72 hours — for practices that need to get online quickly.",
  },
  {
    question: "Can you integrate with our existing EMR/EHR system?",
    answer: "Yes. We integrate with major EMR/EHR platforms including Epic, Cerner, Athenahealth, DrChrono, and more. Custom API integrations are also available. Your existing workflows remain intact while your online presence gets a major upgrade.",
  },
  {
    question: "Do you offer medical SEO services to attract more patients?",
    answer: "Absolutely. Our Houston healthcare SEO strategies help medical practices rank #1 on Google for searches like 'primary care doctor near me', 'pediatrician Houston', and other high-value patient search terms. We also manage Google Business Profile to maximize local visibility.",
  },
  {
    question: "How much does a healthcare website cost?",
    answer: "Healthcare websites start at $3,000 for a basic 5-page practice site. Complex sites with patient portals, appointment booking, and EMR integration typically range from $8,000–$25,000. We offer transparent pricing with no hidden fees. Contact us for a free custom quote.",
  },
];

const services = [
  { name: "HIPAA-Compliant Websites", description: "Secure, compliant websites that protect patient data and meet all healthcare regulations." },
  { name: "Patient Portal Integration", description: "Seamless integration with EMR/EHR systems including Epic, Cerner, and Athenahealth." },
  { name: "Online Appointment Booking", description: "Streamlined scheduling systems that reduce no-shows and improve efficiency." },
  { name: "Medical SEO", description: "Local SEO strategies to help patients find your practice #1 on Google." },
  { name: "Healthcare Content Marketing", description: "Educational content that establishes medical authority and attracts patients." },
  { name: "Reputation Management", description: "Build and manage your online reviews across Google, Healthgrades, and Zocdoc." },
];

export function HealthcareIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "Healthcare",
    industryDescription: "HIPAA-compliant healthcare websites, patient portal integration, and medical SEO for medical practices, clinics, and healthcare providers in Houston, TX and nationwide.",
    industryUrl: `${siteConfig.url}/industry/healthcare`,
    keywords: ["healthcare website design Houston", "medical website design", "HIPAA compliant website", "patient portal development", "medical SEO Houston", "doctor website design", "clinic website Houston", "healthcare digital marketing"],
    services,
    faqs: industryFaqs,
    compliance: ["HIPAA Compliant", "ADA Accessible", "SSL Encrypted"],
  });

  return (
    <>
      <SEOHead
        title="Healthcare Website Design Houston | HIPAA-Compliant Medical Websites"
        description="Houston's top healthcare web design agency. HIPAA-compliant medical websites, patient portal integration, EMR/EHR connections, and medical SEO that attracts more patients. 500+ projects. Call (281) 901-7016."
        keywords={["healthcare website design Houston", "medical website design", "doctor website design", "clinic website Houston", "HIPAA compliant website", "healthcare digital marketing", "medical SEO Houston", "patient portal development", "healthcare web development Houston", "medical practice website"]}
        url={`${siteConfig.url}/industry/healthcare`}
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
                  <Heart className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Healthcare Industry</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Healthcare Websites That Build{" "}<span className="text-red-600">Patient Trust</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  HIPAA-compliant websites designed for medical practices, clinics, and healthcare providers in Houston, TX. Attract more patients and grow your practice.
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
                  { value: "72 hrs", label: "Fastest Launch" },
                  { value: "100%", label: "HIPAA Compliant" },
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
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Healthcare Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions tailored for Houston medical practices and healthcare providers nationwide</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "HIPAA-Compliant Websites", description: "Secure, compliant websites that protect patient data and meet all healthcare regulations.", icon: Shield },
                  { title: "Patient Portal Integration", description: "Seamless integration with Epic, Cerner, Athenahealth, and other EMR/EHR systems.", icon: Users },
                  { title: "Online Appointment Booking", description: "Streamlined scheduling systems that reduce no-shows and improve practice efficiency.", icon: Clock },
                  { title: "Medical SEO", description: "Rank #1 on Google for 'doctor near me', 'clinic Houston', and other patient search terms.", icon: Star },
                  { title: "Healthcare Content Marketing", description: "Educational content that establishes medical authority and attracts new patients.", icon: FileText },
                  { title: "Reputation Management", description: "Build and manage your reviews on Google, Healthgrades, Zocdoc, and RateMDs.", icon: Activity },
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
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why Houston Healthcare Providers Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "HIPAA-compliant development with ADA accessibility standards",
                      "Experience with medical practices, hospitals, and specialty clinics",
                      "Fast, mobile-first websites that rank on Google",
                      "Integration with all major EMR/EHR and practice management systems",
                      "Ongoing support, security updates, and maintenance included",
                      "Houston-based agency — local expertise, national reach",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Grow Your Practice?</h3>
                  <p className="text-gray-600 mb-6">Get a custom healthcare website that converts visitors into patients. Free consultation, no obligation.</p>
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
                <h2 className="font-serif text-4xl text-gray-900 mb-4">Healthcare Website FAQs</h2>
                <p className="text-gray-600">Common questions from medical practices about web design and digital marketing</p>
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
                  { label: "SEO Company Houston", href: "/houston-seo-company" },
                  { label: "Web Development", href: "/services/web-development" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
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
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Transform Your Online Presence?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Let's discuss how Cardinal Consulting can help your Houston healthcare practice attract more patients online.
              </p>
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
