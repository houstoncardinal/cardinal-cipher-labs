import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import {
  HeartPulse, Shield, Monitor, Users, ArrowRight, Check,
  Stethoscope, Brain, Lock, Activity, Search, Clock,
  ChevronDown, TrendingUp, Award, Smartphone, FileText,
  ClipboardCheck, Layers, BarChart3, Zap, Globe
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const stats = [
  { value: "50+", label: "Healthcare Clients" },
  { value: "100%", label: "HIPAA Compliant" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const services = [
  {
    icon: Shield,
    title: "HIPAA-Compliant Websites",
    description: "Secure, fully HIPAA-compliant healthcare websites with encrypted data transmission, secure patient forms, and comprehensive audit logging. We ensure your digital presence meets every federal compliance requirement while delivering an exceptional user experience.",
  },
  {
    icon: Monitor,
    title: "Patient Portal Development",
    description: "Custom patient portals that empower individuals to schedule appointments, access medical records, view lab results, manage prescriptions, and communicate securely with their care team — all from any device.",
  },
  {
    icon: Smartphone,
    title: "Telemedicine Platforms",
    description: "End-to-end telemedicine solutions with HIPAA-compliant video conferencing, virtual waiting rooms, e-prescribing integration, and seamless EHR connectivity. Enable your practice to deliver care anywhere, anytime.",
  },
  {
    icon: TrendingUp,
    title: "Medical Practice Marketing",
    description: "Data-driven digital marketing strategies designed for healthcare providers. From physician referral programs to patient acquisition campaigns, we help practices grow their patient base while maintaining compliance with healthcare advertising regulations.",
  },
  {
    icon: Layers,
    title: "EHR & System Integrations",
    description: "Seamless integrations with leading EHR/EMR systems including Epic, Cerner, Athenahealth, and eClinicalWorks. We connect your digital platforms with practice management, billing, and clinical workflow tools through HL7 FHIR and custom APIs.",
  },
  {
    icon: Search,
    title: "Healthcare SEO",
    description: "Specialized search engine optimization for medical practices, hospitals, and healthcare organizations. We optimize for local healthcare searches, medical condition keywords, and provider directories to drive qualified patient traffic to your website.",
  },
];

const differentiators = [
  {
    icon: Lock,
    title: "HIPAA & Compliance Expertise",
    description: "Every solution we build is designed from the ground up with HIPAA, HITECH, and ADA compliance in mind. Our team undergoes annual compliance training, and we conduct thorough security assessments on every healthcare project before launch.",
  },
  {
    icon: Brain,
    title: "Deep Healthcare Domain Knowledge",
    description: "Our team includes developers and strategists with extensive experience in the healthcare industry. We understand clinical workflows, patient engagement challenges, regulatory nuances, and the unique demands of medical practice operations.",
  },
  {
    icon: Activity,
    title: "Proven Patient Engagement Results",
    description: "Our healthcare digital solutions consistently increase patient engagement by 60% or more. From appointment booking to telehealth adoption, we design experiences that patients actually want to use — reducing no-shows and improving outcomes.",
  },
  {
    icon: Clock,
    title: "Rapid, Compliant Deployment",
    description: "We deliver healthcare projects on aggressive timelines without cutting corners on compliance or security. Our proven healthcare development framework accelerates delivery while ensuring every requirement is thoroughly documented and tested.",
  },
];

const caseStudies = [
  {
    title: "Multi-Location Medical Group",
    metric: "340%",
    metricLabel: "Increase in Online Appointments",
    description: "Designed and developed a HIPAA-compliant website with integrated patient portal and online scheduling for a 12-location medical group in Houston. Online appointment bookings increased 340% within the first 90 days of launch.",
    tags: ["Patient Portal", "Online Scheduling", "HIPAA Compliant"],
  },
  {
    title: "Regional Telehealth Provider",
    metric: "10,000+",
    metricLabel: "Monthly Virtual Visits",
    description: "Built a custom telemedicine platform supporting video consultations, e-prescribing, and EHR integration. The platform scaled from 500 to over 10,000 monthly virtual visits while maintaining 99.99% uptime and full HIPAA compliance.",
    tags: ["Telemedicine", "EHR Integration", "Scalable Architecture"],
  },
  {
    title: "Specialty Dental Practice",
    metric: "215%",
    metricLabel: "Growth in New Patient Leads",
    description: "Implemented a comprehensive healthcare SEO and digital marketing strategy for a specialty dental practice. Organic search traffic increased 180% and new patient leads grew by 215% within six months.",
    tags: ["Healthcare SEO", "Digital Marketing", "Local Search"],
  },
];

const process = [
  { step: "01", title: "Healthcare Discovery", description: "We conduct a comprehensive analysis of your practice, patient demographics, clinical workflows, competitive landscape, and compliance requirements through stakeholder interviews and technical audits." },
  { step: "02", title: "Compliance Architecture", description: "Designing a HIPAA-compliant technical architecture with encrypted data storage, secure APIs, role-based access controls, audit logging, and business associate agreements — all documented for regulatory review." },
  { step: "03", title: "Patient-Centered Design", description: "Creating intuitive, accessible interfaces that prioritize the patient experience. Our designs undergo usability testing with real patients and staff to ensure adoption and satisfaction across all demographics." },
  { step: "04", title: "Secure Development", description: "Building with HIPAA-compliant development practices including encrypted data handling, secure authentication, penetration testing, and code reviews by security specialists with healthcare experience." },
  { step: "05", title: "Compliance Testing & QA", description: "Rigorous testing including HIPAA security assessments, WCAG 2.1 AA accessibility audits, cross-browser and device testing, load testing, and comprehensive vulnerability scanning before any patient data touches the system." },
  { step: "06", title: "Launch & Ongoing Support", description: "Managed deployment with zero-downtime transitions, staff training sessions, patient communication support, and ongoing monitoring with 24/7 incident response and regular compliance reviews." },
];

const faqs = [
  {
    question: "What does HIPAA-compliant web development actually involve?",
    answer: "HIPAA-compliant web development encompasses encrypting all protected health information (PHI) both in transit and at rest, implementing role-based access controls, maintaining detailed audit logs of all data access, executing Business Associate Agreements (BAAs) with all technology vendors, conducting regular security risk assessments, and ensuring secure backup and disaster recovery procedures. At Cardinal Consulting, we handle all of these requirements as part of our standard healthcare development process.",
  },
  {
    question: "Can you integrate our website with our existing EHR/EMR system?",
    answer: "Yes, we specialize in EHR/EMR integrations. We have extensive experience integrating with Epic, Cerner, Athenahealth, eClinicalWorks, Allscripts, and many other systems. We utilize HL7 FHIR APIs, direct database connections, and custom middleware to ensure seamless data flow between your website, patient portal, and clinical systems while maintaining full HIPAA compliance throughout.",
  },
  {
    question: "How long does it take to build a healthcare website or patient portal?",
    answer: "A standard healthcare practice website typically takes 4-6 weeks. A custom patient portal with scheduling, messaging, and records access takes 8-12 weeks. A full telemedicine platform with video, e-prescribing, and EHR integration takes 12-20 weeks. These timelines include comprehensive compliance testing and security audits. We provide detailed project timelines during our initial discovery phase.",
  },
  {
    question: "Do you offer ongoing HIPAA compliance monitoring and maintenance?",
    answer: "Absolutely. We offer ongoing HIPAA compliance maintenance packages that include regular security scans, vulnerability assessments, software updates, SSL certificate management, audit log reviews, annual risk assessments, and 24/7 incident response. Our healthcare clients also receive priority support with guaranteed response times for any compliance-related issues.",
  },
  {
    question: "How do you handle healthcare SEO differently from regular SEO?",
    answer: "Healthcare SEO requires a specialized approach. We optimize for medical condition keywords, physician directories, local healthcare searches ('doctor near me'), and symptom-based queries. We ensure all medical content follows Google's E-E-A-T guidelines (Experience, Expertise, Authoritativeness, Trustworthiness), which is critical for health-related search rankings. We also manage your Google Business Profile, Healthgrades, Vitals, and other medical directory listings for maximum local visibility.",
  },
  {
    question: "What healthcare advertising regulations do you comply with?",
    answer: "We ensure full compliance with FTC guidelines for healthcare advertising, AMA ethical guidelines for physician marketing, state-specific medical advertising laws, CAN-SPAM and TCPA regulations for patient communications, and HIPAA requirements for using patient testimonials or reviews. Our marketing team stays current with all regulatory changes to protect your practice from compliance violations.",
  },
];

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Healthcare Digital Solutions | Cardinal Consulting",
    description: "HIPAA-compliant healthcare website development, patient portal solutions, telemedicine platforms, and medical practice digital marketing services in Houston, TX. Trusted by 50+ healthcare organizations.",
    url: "https://visitcardinal.com/industries/healthcare",
    publisher: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Healthcare Website Development & Digital Marketing",
    serviceType: "HealthcareWebDevelopment",
    provider: {
      "@type": "Organization",
      name: "Cardinal Consulting",
      url: "https://visitcardinal.com",
    },
    areaServed: [
      { "@type": "City", name: "Houston" },
      { "@type": "State", name: "Texas" },
      { "@type": "Country", name: "United States" },
    ],
    description: "Professional HIPAA-compliant healthcare web development, patient portals, telemedicine platforms, EHR integrations, and medical practice marketing. Serving healthcare organizations in Houston, TX and nationwide.",
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://visitcardinal.com/#industries" },
      { "@type": "ListItem", position: 3, name: "Healthcare", item: "https://visitcardinal.com/industries/healthcare" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

export default function Healthcare() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Healthcare Website Development & Digital Marketing | Houston TX"
        description="HIPAA-compliant healthcare website development, patient portals, telemedicine platforms & medical practice marketing in Houston TX. Trusted by 50+ healthcare organizations. Free consultation."
        keywords={[
          "healthcare website design",
          "HIPAA compliant web development",
          "medical practice marketing Houston",
          "patient portal development",
          "telemedicine platform development",
          "healthcare SEO",
          "medical website design Houston",
          "HIPAA compliant website",
          "healthcare digital marketing",
          "EHR integration services",
          "doctor website design",
          "hospital website development",
          "healthcare app development Houston TX",
        ]}
        schemas={schemas}
        url="https://visitcardinal.com/industries/healthcare"
      />
      <div className="min-h-screen bg-white">
        <Header />
        <VerticalNav />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/60 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Industries", href: "/#industries" }, { label: "Healthcare" }]} />
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center">
                    <HeartPulse className="w-7 h-7 text-red-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-red-500 font-medium">Healthcare Industry</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-6">
                  Healthcare Digital Solutions
                </h1>
                <p className="text-xl text-gray-500 max-w-2xl mb-8">
                  HIPAA-compliant websites, patient portals, telemedicine platforms, and digital marketing strategies purpose-built for healthcare organizations. We help medical practices, hospitals, and health systems deliver exceptional patient experiences online.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Start Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 border border-gray-200 text-gray-900 px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    View Healthcare Work
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-4xl lg:text-5xl text-red-500 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services for Healthcare */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Digital Services for Healthcare Organizations
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  From HIPAA-compliant website development to patient acquisition marketing, we deliver end-to-end digital solutions that help healthcare providers grow their practice and improve patient outcomes.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6 h-full hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Healthcare Companies Choose Us */}
          <section className="py-20 lg:py-28 bg-gray-50/60">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Why Healthcare Organizations Choose Cardinal
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We combine deep healthcare domain expertise with world-class digital capabilities to deliver solutions that are both clinically sound and technologically advanced.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {differentiators.map((diff, i) => (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-8 h-full">
                      <div className="w-12 h-12 bg-red-50 border border-red-100 rounded-xl flex items-center justify-center mb-4">
                        <diff.icon className="w-6 h-6 text-red-500" />
                      </div>
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{diff.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{diff.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies / Results */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Real Results for Healthcare Clients
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Measurable impact across patient engagement, practice growth, and digital transformation for healthcare organizations of every size.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-8 h-full flex flex-col">
                      <div className="font-serif text-4xl text-red-500 mb-1">{study.metric}</div>
                      <div className="text-sm font-medium text-gray-900 mb-4">{study.metricLabel}</div>
                      <h3 className="font-serif text-lg text-gray-900 mb-3">{study.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">{study.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-red-50 text-red-500 border border-red-100 px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-20 lg:py-28 bg-gray-50/60">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Our Healthcare Development Process
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  A compliance-first methodology designed specifically for healthcare organizations, ensuring every digital touchpoint meets the highest standards of security and patient experience.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-6xl font-serif text-red-500/20 mb-2">{item.step}</div>
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-20 lg:py-28">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Healthcare Web Development FAQs
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Common questions about HIPAA-compliant web development, patient portals, and healthcare digital marketing services.
                </p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        className="w-full flex items-center justify-between p-6 text-left"
                      >
                        <h3 className="font-serif text-lg text-gray-900 pr-4">{faq.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                            openFaq === i ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openFaq === i && (
                        <div className="px-6 pb-6">
                          <p className="text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 lg:py-28 bg-red-50/50">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-4">
                  Ready to Transform Your Healthcare Practice?
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-8">
                  Let's discuss how we can build a HIPAA-compliant digital presence that grows your practice and improves patient engagement. Free consultation, no obligations.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Schedule Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
