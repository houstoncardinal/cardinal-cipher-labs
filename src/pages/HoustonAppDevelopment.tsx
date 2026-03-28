import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Smartphone, Code, Zap, Shield, Users, TrendingUp, Globe, ChevronDown, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const appTypes = [
  {
    icon: Smartphone,
    title: "iOS App Development Houston",
    description: "Native iPhone and iPad apps built with Swift for the best performance and App Store rankings. Designed to delight Houston users.",
    features: ["Swift & SwiftUI", "App Store optimization", "Apple Pay integration", "Push notifications"]
  },
  {
    icon: Code,
    title: "Android App Development Houston",
    description: "Native Android apps built with Kotlin. We build apps that perform flawlessly across all Android devices for Houston and beyond.",
    features: ["Kotlin & Jetpack Compose", "Google Play optimization", "Material Design", "Android Auto"]
  },
  {
    icon: Globe,
    title: "Cross-Platform Apps (React Native)",
    description: "One codebase, both iOS and Android. React Native apps that feel native — a cost-effective solution for Houston startups and businesses.",
    features: ["React Native / Expo", "Single codebase", "Native performance", "Faster to market"]
  },
  {
    icon: Zap,
    title: "Progressive Web Apps (PWA)",
    description: "App-like experiences delivered through the browser. No app store required — perfect for Houston businesses wanting a fast digital product.",
    features: ["Works offline", "Installable on any device", "Push notifications", "Faster than native apps"]
  },
  {
    icon: Shield,
    title: "Enterprise App Development",
    description: "Complex enterprise applications for Houston corporations — from internal tools to customer-facing platforms with enterprise-grade security.",
    features: ["HIPAA compliant development", "SSO & active directory", "Custom integrations", "24/7 support SLA"]
  },
  {
    icon: TrendingUp,
    title: "App Store Optimization (ASO)",
    description: "We make sure your Houston app gets found in the App Store and Google Play. ASO to maximize downloads and organic installs.",
    features: ["Keyword research", "Screenshot optimization", "Review management", "Competitive analysis"]
  }
];

const process = [
  { step: "01", title: "Discovery & Strategy", description: "We meet with your Houston team to understand your vision, users, and business goals. We define the MVP and roadmap." },
  { step: "02", title: "UX/UI Design", description: "Our Houston designers create wireframes and high-fidelity mockups. You see exactly what will be built before a line of code is written." },
  { step: "03", title: "Development Sprints", description: "Agile 2-week sprints. You see progress every step of the way with live demos and weekly check-ins." },
  { step: "04", title: "QA & Testing", description: "Rigorous testing across devices, operating systems, and edge cases. We don't ship bugs to your Houston users." },
  { step: "05", title: "App Store Launch", description: "We handle App Store and Google Play submission, screenshots, descriptions, and ASO from day one." },
  { step: "06", title: "Post-Launch Support", description: "Ongoing maintenance, performance monitoring, user feedback integration, and feature updates for your Houston app." }
];

const industries = [
  "Healthcare & Telehealth", "Legal & LegalTech", "Finance & FinTech",
  "Real Estate & PropTech", "Restaurants & Food Delivery", "E-Commerce & Retail",
  "Construction & Field Service", "Education & EdTech", "Fitness & Wellness",
  "Transportation & Logistics", "Energy & Oil & Gas", "Professional Services"
];

const caseStudies = [
  {
    app: "Houston Telehealth Platform",
    industry: "Healthcare",
    result: "HIPAA-compliant iOS/Android app launched in 10 weeks. 25,000 patients onboarded in 3 months.",
    metrics: ["25K users in 90 days", "HIPAA compliant", "4.8★ App Store"]
  },
  {
    app: "Houston Real Estate App",
    industry: "Real Estate",
    result: "Property search and virtual tour app for Houston market. #1 in App Store for 'Houston homes' keyword.",
    metrics: ["#1 App Store ranking", "50K+ downloads", "4.9★ rating"]
  },
  {
    app: "Houston Restaurant Ordering App",
    industry: "Food & Beverage",
    result: "Multi-location ordering app for Houston restaurant chain. Online orders went from 0 to $180K/month.",
    metrics: ["$180K/mo online orders", "8 locations integrated", "Zero commission fees"]
  },
  {
    app: "Houston Field Service App",
    industry: "Construction",
    result: "Mobile workforce management app for Houston contractor. Reduced dispatching time by 70%.",
    metrics: ["-70% dispatch time", "200+ technicians", "GPS tracking"]
  }
];

const faqs = [
  {
    question: "How much does app development cost in Houston?",
    answer: "App development costs in Houston vary based on complexity. A simple MVP app typically costs $25,000-$60,000, a mid-complexity app $60,000-$150,000, and enterprise apps $150,000+. Cardinal Consulting offers transparent project quotes with no hidden fees. We also offer phased development plans that let Houston businesses start with an MVP and scale up. Contact us for a free estimate tailored to your specific app idea."
  },
  {
    question: "What's the best app development company near me in Houston?",
    answer: "Cardinal Consulting is Houston's top-rated app development company with 127 verified reviews and a 4.9-star rating. We've delivered 500+ projects for Houston businesses across healthcare, legal, finance, real estate, restaurants, and more. We're located at 2100 West Loop S Fwy, Houston, TX 77027, so we can meet in person to discuss your app project. Our team has built apps that have been featured in the App Store and achieved #1 rankings in their categories."
  },
  {
    question: "How long does it take to build an app in Houston?",
    answer: "App development timelines at Cardinal Consulting: MVP apps take 8-12 weeks, standard apps take 12-20 weeks, and complex enterprise apps take 20-40 weeks. We use agile sprints so you see working software every 2 weeks. For Houston businesses with urgent timelines, we offer rapid prototyping that can get you a testable prototype in 2-3 weeks."
  },
  {
    question: "Should I build an iOS app, Android app, or both?",
    answer: "For most Houston businesses, we recommend starting with React Native (cross-platform) to reach both iOS and Android users with a single codebase — this is more cost-effective and faster to market. If your app has very performance-intensive requirements or needs deep platform integration, we'll recommend native iOS (Swift) or Android (Kotlin) development. We'll advise based on your specific Houston market and user demographics."
  },
  {
    question: "Can you build a HIPAA-compliant app for my Houston healthcare business?",
    answer: "Absolutely. We are experienced in building HIPAA-compliant healthcare apps for Houston medical practices, telehealth platforms, and healthcare tech companies. Our apps implement proper data encryption, access controls, audit trails, and Business Associate Agreements (BAAs). We've built HIPAA-compliant apps for Houston healthcare providers that have passed security audits. Compliance is built in from day one, not added as an afterthought."
  },
  {
    question: "Do you offer app development for Houston startups?",
    answer: "Yes! We love working with Houston startups. We offer startup-friendly packages including MVP development, pitch deck support, investor demo preparation, and post-launch growth support. We've helped Houston startups raise funding after launching their apps with us. Our agile process is perfect for startups that need to move fast and iterate based on user feedback."
  },
  {
    question: "What happens after my Houston app launches?",
    answer: "We offer comprehensive post-launch support for all Houston app clients: 24/7 crash monitoring, bug fixes, OS update compatibility, App Store compliance updates, performance optimization, user analytics review, and feature additions. Most Houston clients stay with us long-term because we're invested in the success of their app, not just the initial launch."
  }
];

const reviews = [
  { name: "Dr. Patricia L.", company: "Houston Telehealth Startup", text: "Cardinal built our HIPAA-compliant telemedicine app in 10 weeks. The attention to security and user experience was outstanding. We're the top-rated health app in the Houston App Store.", rating: 5 },
  { name: "Kevin T.", company: "Houston Real Estate Tech", text: "They built a complex property search app that outperforms Zillow in our Houston market. 50,000 downloads in 6 months. Best app development company in Houston without a doubt.", rating: 5 },
  { name: "Sandra M.", company: "Houston Restaurant Group", text: "Our ordering app went from idea to live in 3 months. We now process $180K in monthly orders with zero third-party commissions. Incredible ROI.", rating: 5 },
  { name: "James B.", company: "Houston Construction Company", text: "The field service app they built completely changed how we run our Houston operations. Our teams are more efficient and customers love the real-time updates.", rating: 5 }
];

const generateSchemas = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.visitcardinal.com/houston-app-development#localbusiness",
    "name": "Cardinal Consulting — #1 App Development Company Houston TX",
    "alternateName": ["Cardinal App Development Houston", "App Development Company Houston", "App Development Company Near Me Houston", "Best App Developer Houston"],
    "description": "Houston's top-rated mobile app development company. iOS apps, Android apps, React Native cross-platform, and enterprise apps for Houston businesses. 500+ projects delivered.",
    "url": "https://www.visitcardinal.com/houston-app-development",
    "telephone": "+12819017016",
    "email": "hello@visitcardinal.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2100 West Loop S Fwy",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77027",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.7399,
      "longitude": -95.4617
    },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": reviews.map(r => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": r.name },
      "reviewBody": r.text,
      "reviewRating": { "@type": "Rating", "ratingValue": r.rating, "bestRating": 5 }
    })),
    "areaServed": [
      { "@type": "City", "name": "Houston", "containedInPlace": { "@type": "State", "name": "Texas" } },
      { "@type": "State", "name": "Texas" },
      { "@type": "Country", "name": "United States" }
    ],
    "sameAs": [
      "https://www.facebook.com/visitcardinal",
      "https://www.linkedin.com/company/visitcardinal",
      "https://twitter.com/cardinalconsult"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "App Development Houston TX",
    "alternateName": ["Mobile App Development Houston", "App Development Company Houston", "App Development Company Near Me", "iOS App Development Houston", "Android App Development Houston"],
    "description": "Professional mobile app development for Houston businesses. Native iOS, Android, and React Native cross-platform apps. HIPAA-compliant, enterprise-grade, App Store optimized.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.visitcardinal.com/houston-app-development#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston",
      "containedInPlace": { "@type": "State", "name": "Texas" }
    },
    "serviceType": "Mobile App Development"
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
      { "@type": "ListItem", "position": 2, "name": "Houston App Development", "item": "https://www.visitcardinal.com/houston-app-development" }
    ]
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
};

export function HoustonAppDevelopmentPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="#1 App Development Company Houston TX | Mobile App Developer Near Me"
        description="Houston's best app development company. iOS, Android & React Native apps for Houston businesses. HIPAA-compliant, enterprise-grade. App development company near me — call (281) 901-7016."
        keywords={[
          "app development company Houston", "app development company near me Houston",
          "mobile app development Houston", "app developer Houston TX", "iOS app development Houston",
          "Android app development Houston", "React Native Houston", "best app developer Houston",
          "#1 app development company Houston", "Houston mobile app developer",
          "custom app development Houston", "enterprise app development Houston",
          "HIPAA compliant app development Houston", "Houston app development agency",
          "app development near me Houston", "Houston startup app development",
          "app development services Houston TX", "top app development company Houston"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-app-development"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 App Development Company — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Houston's Best{' '}
                <span className="text-red-600">App Development</span>{' '}
                Company
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                iOS apps, Android apps, and cross-platform mobile apps built for Houston businesses.
                From startups to enterprise — we build apps that users love and businesses grow on.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                Looking for an "app development company near me" in Houston? We're at 2100 West Loop S Fwy — serving all Houston businesses with world-class mobile app development.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free App Estimate <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["500+ Projects Delivered", "4.9★ Average Rating", "HIPAA Compliant", "Free Consultation"].map(badge => (
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
                  { value: "500+", label: "Projects Delivered" },
                  { value: "4.9★", label: "Average App Store Rating" },
                  { value: "8 Wks", label: "MVP Delivery Speed" },
                  { value: "#1", label: "App Dev Company Houston" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* APP TYPES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Houston App Development Services</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Every Type of App, Built in Houston</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Whether you need a consumer app, enterprise platform, or MVP — we've built it for Houston businesses.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {appTypes.map((app, i) => (
                  <motion.div key={app.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <app.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{app.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{app.description}</p>
                    <ul className="space-y-2">
                      {app.features.map(f => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">How We Build</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Our Houston App Development Process</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {process.map((step, i) => (
                  <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <div className="text-5xl font-bold text-red-100 font-serif mb-4">{step.step}</div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* INDUSTRIES */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Houston Industries We Build Apps For</h2>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                {industries.map(ind => (
                  <span key={ind} className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors">{ind}</span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston App Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Apps That Changed Houston Businesses</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.app} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.industry}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{study.app}</h3>
                    <p className="text-gray-600 text-sm mb-5">{study.result}</p>
                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map(m => (
                        <span key={m} className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{m}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* REVIEWS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Clients Love Our Apps</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((r, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                    <div className="flex mb-3">{[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</div>
                    <p className="text-gray-600 text-sm mb-4">"{r.text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston App Development — FAQ</h2>
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

          {/* CTA */}
          <section className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
                  Ready to Build Your Houston App?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Get a free consultation and app estimate. We'll help you go from idea to launch — faster than any other app development company in Houston.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free App Estimate <ArrowRight className="w-4 h-4" />
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

          {/* From the Blog */}
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-8">From Our Blog</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { title: "AI Automation for Small Business: The 2026 Guide", slug: "ai-automation-small-business-2026", tag: "AI & Automation" },
                  { title: "No-Code vs. Custom Development in 2026", slug: "no-code-vs-custom-development", tag: "App Development" },
                  { title: "Custom Website vs. Template: Real Cost Breakdown", slug: "custom-website-vs-template-cost", tag: "Web Development" },
                ].map((a) => (
                  <Link key={a.slug} to={`/blog/${a.slug}`} className="block p-6 bg-gray-50 rounded-xl border border-gray-100 hover:border-red-200 hover:shadow-sm transition-all duration-200 group">
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">{a.tag}</span>
                    <h3 className="font-semibold text-gray-900 mt-2 group-hover:text-red-600 transition-colors leading-snug">{a.title}</h3>
                    <span className="text-sm text-gray-500 mt-2 inline-block">Read article →</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-8">Related Services</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {[
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "Houston Web Developer", href: "/houston-web-developer" },
                  { label: "Houston SEO Agency", href: "/houston-seo" },
                  { label: "Rush Prototyping", href: "/rush-prototyping" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="block text-center px-4 py-4 bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-sm text-sm font-semibold text-gray-700 hover:text-red-600 transition-all duration-200">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HoustonAppDevelopmentPage;
