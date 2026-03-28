import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Shield, Calendar, Users, Video, Heart, TrendingUp, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/seo-config";

const features = [
  {
    icon: Shield,
    title: "HIPAA Compliant Forms & Infrastructure",
    description: "Every patient form, contact submission, and intake flow is built on HIPAA-compliant infrastructure with Business Associate Agreements, 256-bit encryption, and audit trails.",
    perks: ["BAA-backed form providers", "256-bit SSL encryption", "Audit log compliance", "No-PHI insecure submissions"]
  },
  {
    icon: Calendar,
    title: "Online Appointment Booking",
    description: "Let patients book 24/7 without calling. We integrate with your EHR — Athenahealth, Epic, Kareo, or Practice Fusion — so appointments flow directly into your schedule.",
    perks: ["Athenahealth, Epic, Kareo integration", "Insurance verification pre-booking", "SMS & email reminders", "New patient vs. existing patient flows"]
  },
  {
    icon: Users,
    title: "Patient Portal Integration",
    description: "Seamless patient portal access from your website — forms, visit summaries, lab results, and secure messaging. Works with healow, FollowMyHealth, and custom portals.",
    perks: ["healow & FollowMyHealth compatible", "Secure patient messaging", "Lab result access", "Prescription refill requests"]
  },
  {
    icon: Video,
    title: "Telehealth Platform Design",
    description: "Custom telehealth landing pages and patient entry flows for Doxy.me, Teladoc, or your own HIPAA-compliant video platform. Convert more patients to virtual care.",
    perks: ["HIPAA-compliant video integration", "Telehealth SEO optimization", "Insurance-eligible telehealth pages", "Bilingual patient instructions"]
  },
  {
    icon: Heart,
    title: "Doctor & Provider Profiles",
    description: "Comprehensive provider profiles with credentials, specialties, languages spoken, insurance accepted, and patient reviews — built to match Google's healthcare E-E-A-T standards.",
    perks: ["NPI number and board certification display", "Insurance accepted lists", "Languages spoken", "Video introduction support"]
  },
  {
    icon: TrendingUp,
    title: "Medical SEO Optimization",
    description: "Rank on page 1 for 'dermatologist near me Houston,' 'pediatrician Houston TX,' and every specialty search your future patients make. Texas Medical Center area expertise.",
    perks: ["Healthcare schema markup", "Google Business Profile optimization", "Healthgrades & Zocdoc citations", "'Near me' ranking strategy"]
  }
];

const caseStudies = [
  {
    practice: "Houston Dermatology Associates",
    specialty: "Dermatology",
    before: "Outdated website with no online booking — patients calling to schedule, front desk overwhelmed, losing new patients to competitors",
    after: "+450% new patient appointment bookings after launching online scheduling and dermatology SEO — now fully booked 3 weeks in advance",
    metrics: ["+450% appointments", "Fully booked schedule", "Top 3 for 'Houston dermatologist'"]
  },
  {
    practice: "Gulf Coast Pain Management",
    specialty: "Pain Management",
    before: "Zero organic search presence — new website launched from scratch with no traffic, no rankings, $4,200/month in Google Ads with poor ROI",
    after: "Ranked in top 3 for 'pain management Houston' within 6 months — new patient volume tripled, ad spend reduced by 60%",
    metrics: ["Top 3 pain management ranking", "3x new patient volume", "-60% ad spend"]
  },
  {
    practice: "Heights Pediatric Group",
    specialty: "Pediatrics",
    before: "Steady patient base but not growing — parents finding competitors on Google, no online reviews, no appointment booking online",
    after: "Doubled new patient registrations year-over-year — #1 for 'pediatrician Houston Heights' — 200+ verified Google reviews",
    metrics: ["2x new patient registrations", "#1 Heights pediatrician", "200+ Google reviews"]
  },
  {
    practice: "NextCare Urgent Care (5 Houston Locations)",
    specialty: "Urgent Care",
    before: "5 locations with inconsistent online presence — different phone numbers listed, incorrect hours on Google, no unified booking platform",
    after: "Unified all 5 locations under one platform — check-in wait times reduced, online check-in increased 340%, revenue per location up 28%",
    metrics: ["+340% online check-ins", "5 locations unified", "+28% revenue/location"]
  }
];

const testimonials = [
  {
    name: "Dr. Sarah C.",
    role: "Medical Director",
    company: "Houston Dermatology Associates",
    text: "Our new patient appointments increased 450% after Cardinal rebuilt our website and optimized for local SEO. The HIPAA compliance was handled perfectly — no concerns, no violations. They're the #1 medical web design company in Houston for a reason.",
    rating: 5
  },
  {
    name: "Dr. Marcus T.",
    role: "Founder",
    company: "Gulf Coast Pain Management, Houston",
    text: "I was skeptical a website could make that much difference. Within 6 months of working with Cardinal, I had to hire two additional staff to handle the new patient volume. The pain management SEO they implemented is extraordinary.",
    rating: 5
  },
  {
    name: "Dr. Linda P.",
    role: "Owner",
    company: "Heights Pediatric Group, Houston",
    text: "Cardinal understands healthcare marketing. They built our site fully HIPAA compliant, integrated our patient portal perfectly, and our online reviews went from 12 to 200+. Parents find us on Google now instead of us finding them.",
    rating: 5
  },
  {
    name: "James N.",
    role: "Regional Operations Director",
    company: "NextCare Urgent Care Houston",
    text: "Managing 5 locations under one website platform seemed impossible. Cardinal built a unified system that's made operations dramatically more efficient. Online check-ins are up 340% and patient satisfaction scores improved across all locations.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Is your medical website design HIPAA compliant?",
    answer: "Yes — HIPAA compliance is non-negotiable for every medical website we build at Cardinal Consulting. This includes: signed Business Associate Agreements (BAAs) with all third-party vendors who handle PHI, 256-bit SSL encryption on all form submissions, HIPAA-compliant hosting infrastructure (not generic shared hosting), audit logs for all data access, no PHI transmission through standard contact forms, and staff access controls. We've built HIPAA-compliant websites for Houston dermatology clinics, pain management practices, pediatric groups, and urgent care chains. Your compliance is built in from day one, not retrofitted later."
  },
  {
    question: "What patient portal options do you integrate with?",
    answer: "We integrate Houston medical practice websites with all major EHR and patient portal systems including: Athenahealth (with healow portal), Epic (MyChart integration), Kareo, Practice Fusion, Modernizing Medicine, eClinicalWorks, DrChrono, and custom portal solutions. We build the portal login and access link into your website so patients have a seamless experience — they never feel like they're leaving your brand. We also help practices near the Texas Medical Center and Houston Methodist system integrate with TMC-affiliated platforms."
  },
  {
    question: "Can you integrate telemedicine into my Houston practice website?",
    answer: "Absolutely. We've integrated telehealth platforms into dozens of Houston medical practice websites including Doxy.me, Teladoc, Zoom for Healthcare (HIPAA Business Associate Agreement available), and custom HIPAA-compliant video solutions. We build patient-facing telehealth landing pages that explain the process, handle insurance eligibility questions, provide pre-appointment instructions in English and Spanish, and link to your telehealth entry portal. Telehealth pages also rank well for 'virtual doctor Houston' and 'telemedicine Houston' searches."
  },
  {
    question: "How long does it take to build a medical practice website?",
    answer: "For a solo physician or small practice (3-5 providers), Cardinal Consulting typically delivers in 3–5 weeks. Multi-location medical groups with complex portal integration, multilingual content, and full SEO optimization take 6–10 weeks. Urgent care and hospital-affiliated clinic websites with multiple service lines take 8–12 weeks. We use an agile process so you see your website taking shape from week 1. HIPAA compliance review and testing adds approximately 1 week to the standard timeline but is essential."
  },
  {
    question: "How do you help my Houston practice rank for 'doctor near me'?",
    answer: "Ranking for 'doctor near me' or 'specialist near me' in Houston requires a local SEO strategy combining: an optimized Google Business Profile with accurate NAP (name, address, phone), photos, and regular posts; citation consistency across Healthgrades, Zocdoc, WebMD, Doximity, and 40+ health directories; practice area pages targeting specific specialties and Houston neighborhoods; schema markup for physicians, medical organizations, and services; patient review generation to build your star rating; and mobile-first technical performance (Google ranks fast mobile sites higher in local results)."
  },
  {
    question: "Can you build a website for a multi-provider Houston practice?",
    answer: "Yes — multi-provider websites are our specialty. We build individual provider profile pages for each physician, PA, NP, or specialist with their credentials, board certifications, NPI numbers, residencies, and specialties. Patients can search and filter providers by specialty, insurance accepted, location, and language. Each provider profile is individually SEO-optimized so 'Dr. Smith Houston cardiologist' ranks for that specific provider, not just the practice name. We've built multi-provider websites for Houston medical groups ranging from 3 to 40+ providers."
  },
  {
    question: "Do you integrate with EHR/EMR systems for appointment booking?",
    answer: "Yes. We build real-time appointment booking that integrates directly with your EHR — patients see actual available time slots from your schedule, not a generic 'request an appointment' form. We've integrated with Athenahealth, Epic, Kareo, Practice Fusion, and Modernizing Medicine. The booking widget is embedded in your website with your branding — patients never see a generic third-party booking page. New patient intake forms capture insurance information, reason for visit, and medical history before the appointment so your staff saves time."
  },
  {
    question: "Is your medical website design ADA/WCAG accessible?",
    answer: "Yes. Every medical website Cardinal Consulting builds meets WCAG 2.1 AA accessibility standards, which is both a legal requirement under the ADA and a best practice for serving all Houston patients. This includes: sufficient color contrast ratios (4.5:1 minimum), keyboard navigation for all interactive elements, screen reader compatibility with ARIA labels, alt text for all images, accessible form labels, captioning for video content, and no flashing content. ADA accessibility is not optional for medical practices — it protects you from litigation and ensures every Houston patient can access your services online."
  }
];

const neighborhoods = [
  "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring",
  "League City", "Pasadena", "Conroe", "Friendswood", "Bellaire", "River Oaks"
];

const relatedServices = [
  { title: "Enterprise Security", description: "HIPAA-grade security, penetration testing, and compliance infrastructure for healthcare organizations.", href: "/enterprise-security", label: "Security" },
  { title: "Houston SEO", description: "Rank #1 in Houston for medical specialty searches and 'near me' healthcare queries.", href: "/houston-seo", label: "SEO" },
  { title: "Houston Web Design", description: "Custom website design for all Houston businesses — built to rank and convert.", href: "/houston-web-design", label: "Web Design" },
  { title: "Healthcare Industry", description: "Specialized digital solutions for the healthcare industry and Texas Medical Center ecosystem.", href: "/industry/healthcare", label: "Healthcare" }
];

const generateSchemas = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medical Practice Website Design Houston TX",
    "alternateName": ["Doctor Website Design Houston", "HIPAA Compliant Website Houston", "Healthcare Website Design Houston"],
    "description": "HIPAA-compliant medical practice website design for Houston doctors, clinics, and specialists. Online booking, patient portal integration, telehealth, and local SEO near the Texas Medical Center.",
    "url": "https://www.visitcardinal.com/houston-medical-website-design",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Cardinal Consulting",
      "telephone": "+12819017016",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2100 West Loop S Fwy",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "postalCode": "77027",
        "addressCountry": "US"
      }
    },
    "areaServed": { "@type": "City", "name": "Houston", "containedInPlace": { "@type": "State", "name": "Texas" } },
    "serviceType": "Medical Website Design"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visitcardinal.com" },
      { "@type": "ListItem", "position": 2, "name": "Houston Web Design", "item": "https://www.visitcardinal.com/houston-web-design" },
      { "@type": "ListItem", "position": 3, "name": "Medical Practice Website Design Houston", "item": "https://www.visitcardinal.com/houston-medical-website-design" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Medical Practice Website Design Houston | HIPAA Compliant Doctor Website Houston TX",
    "description": "Houston's #1 medical website design agency. HIPAA-compliant patient portals, online booking, and SEO for doctors, clinics, and specialists. Texas Medical Center experts.",
    "url": "https://www.visitcardinal.com/houston-medical-website-design",
    "isPartOf": { "@type": "WebSite", "url": "https://www.visitcardinal.com", "name": "Cardinal Consulting" }
  };

  return [serviceSchema, faqSchema, breadcrumbSchema, webPageSchema];
};

export default function HoustonMedicalWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Medical Practice Website Design Houston | HIPAA Compliant Doctor Website Houston TX"
        description="Houston's #1 medical website design agency. HIPAA-compliant patient portals, online booking, and SEO for doctors, clinics, and specialists. Texas Medical Center experts. Call (281) 901-7016."
        keywords={[
          "medical website design houston", "doctor website houston", "healthcare website houston",
          "HIPAA compliant website houston", "medical practice website houston", "doctor website design houston tx",
          "healthcare web design houston", "medical practice seo houston", "patient portal website houston",
          "telehealth website design houston", "hospital website design houston", "clinic website houston",
          "Texas Medical Center web design", "physician website houston", "specialist website houston",
          "dermatologist website houston", "pediatrician website houston", "urgent care website houston"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-medical-website-design"
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8">
                <div className="flex">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />)}</div>
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Medical Website Design Agency — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Medical Practice Website Design Houston —{' '}
                <span className="text-red-600">HIPAA Compliant, Built to Fill Appointment Books</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Houston is home to the Texas Medical Center — the world's largest medical complex with 106,000 employees and 60+ institutions including Houston Methodist and MD Anderson. Stand out with a website as exceptional as your practice.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                Cardinal Consulting builds HIPAA-compliant medical websites for Houston doctors, clinics, and specialists — with online booking, patient portals, telehealth integration, and SEO that fills your schedule.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free Practice Website Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["HIPAA Compliant Infrastructure", "BAA Agreements Included", "EHR Integration", "Free Consultation"].map(badge => (
                  <span key={badge} className="flex items-center gap-2"><Check className="w-4 h-4 text-green-500" />{badge}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: "+450%", label: "Average New Patient Increase" },
                  { value: "100%", label: "HIPAA Compliant Projects" },
                  { value: "106K", label: "TMC Employees in Our Backyard" },
                  { value: "4 Wks", label: "Average Delivery Time" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FEATURES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Medical Website Features</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Every Feature Houston Medical Practices Need</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">From solo physicians near the Texas Medical Center to multi-location urgent care chains across Houston.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.perks.map(p => (
                        <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston Medical Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Practices That Transformed Their Online Presence</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.practice} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.specialty}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{study.practice}</h3>
                    <div className="space-y-3 mb-5">
                      <div className="bg-gray-50 rounded-xl p-4">
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Before</span>
                        <p className="text-gray-600 text-sm mt-1">{study.before}</p>
                      </div>
                      <div className="bg-green-50 rounded-xl p-4">
                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">After</span>
                        <p className="text-gray-700 text-sm mt-1">{study.after}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map(m => (
                        <span key={m} className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{m}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Doctors Trust Cardinal</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex mb-3">{[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-gray-600 text-sm mb-4">"{t.text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-red-600 text-xs font-medium">{t.role}</div>
                    <div className="text-gray-500 text-xs">{t.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Medical Website Design Houston — FAQ</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* NEIGHBORHOODS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Serving Houston Medical Practices & Beyond</h2>
                <p className="text-gray-500">We build HIPAA-compliant medical websites for practices across the greater Houston metro area.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                {neighborhoods.map(n => (
                  <span key={n} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors">{n}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* RELATED SERVICES */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Related Services</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedServices.map((s, i) => (
                  <motion.div key={s.href} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={s.href} className="block bg-white rounded-2xl p-6 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all group">
                      <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{s.label}</span>
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">{s.title}</h3>
                      <p className="text-gray-500 text-sm">{s.description}</p>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Fill Your Houston Practice Schedule?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free HIPAA compliance audit and medical SEO analysis. We'll show you exactly how to attract more patients online while staying fully compliant.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free Medical Website Audit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors">
                    <Phone className="w-4 h-4" /> Call (281) 901-7016
                  </a>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />2100 West Loop S Fwy, Houston, TX 77027</span>
                  <span className="flex items-center gap-2"><Mail className="w-4 h-4" />hello@visitcardinal.com</span>
                  <span className="flex items-center gap-2"><Clock className="w-4 h-4" />Mon–Fri 9AM–6PM CST</span>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
