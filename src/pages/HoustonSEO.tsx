import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Globe, Search, TrendingUp, Users, Award, Zap, Target, BarChart3, Building2, Shield, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

// Comprehensive Houston Areas
const houstonAreas = [
  "Downtown Houston", "The Woodlands", "Sugar Land", "Katy", "Pearland", 
  "Cypress", "Spring", "Missouri City", "League City", "Pasadena", 
  "Baytown", "Conroe", "Humble", "Tomball", "Richmond", 
  "Friendswood", "Galveston", "Clear Lake", "Memorial", "Galleria Area",
  "Heights", "Montrose", "Midtown", "River Oaks", "West University"
];

// Services Data
const services = [
  {
    icon: Globe,
    title: "Houston Web Design",
    description: "Custom, conversion-focused websites designed specifically for Houston businesses. Our designs capture your brand essence while driving results.",
    features: ["Custom Houston Website Design", "Responsive Mobile Design", "UX/UI Optimization", "Conversion Rate Optimization"],
    link: "/services/web-development"
  },
  {
    icon: Search,
    title: "Houston SEO Services",
    description: "Dominate Houston search results with our proven local SEO strategies. Get found by customers searching for your services.",
    features: ["Local SEO Houston", "Google Business Profile", "On-Page SEO", "Houston Citation Building"],
    link: "/services/seo"
  },
  {
    icon: TrendingUp,
    title: "Houston Digital Marketing",
    description: "Comprehensive digital marketing campaigns that deliver measurable ROI for Houston businesses.",
    features: ["Houston PPC Advertising", "Social Media Marketing", "Email Marketing", "Content Marketing"],
    link: "/services/digital-marketing"
  },
  {
    icon: Zap,
    title: "Houston App Development",
    description: "Native and cross-platform mobile apps built for Houston enterprises and startups.",
    features: ["iOS App Development", "Android App Development", "React Native Apps", "App Store Optimization"],
    link: "/services/mobile-apps"
  },
  {
    icon: Award,
    title: "Houston Brand Identity",
    description: "Build a powerful brand that resonates with Houston audiences and stands out from competitors.",
    features: ["Logo Design Houston", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    link: "/services/brand-identity"
  },
  {
    icon: Target,
    title: "Houston Analytics & ROI",
    description: "Data-driven insights to optimize your digital presence and maximize your marketing ROI.",
    features: ["Analytics Setup", "ROI Tracking", "Performance Reports", "A/B Testing"],
    link: "/services/seo"
  }
];

// Why Choose Reasons
const reasons = [
  { title: "Houston-Based Experts", description: "Our team lives and works in Houston. We understand the local market, your customers, and what it takes to succeed in the Space City." },
  { title: "500+ Houston Projects", description: "We've helped over 500 Houston businesses transform their online presence and grow their customer base." },
  { title: "98% Client Retention", description: "Our long-term partnerships speak for themselves. Most clients stay with us for years because we deliver results." },
  { title: "Proven SEO Results", description: "Houston businesses we've worked with have seen an average 340% increase in organic traffic within 6 months." },
  { title: "Transparent Pricing", description: "No hidden fees, no surprise charges. You'll always know exactly what you're investing in." },
  { title: "24/7 Houston Support", description: "Our Houston-based support team is always available to help you succeed, day or night." }
];

// Case Studies
const caseStudies = [
  {
    industry: "Legal",
    title: "Houston Law Firm SEO",
    metrics: [
      { label: "Organic Traffic", before: "850/mo", after: "3,740/mo", change: "+340%" },
      { label: "Keyword Rankings", before: "Page 3", after: "#1-3", change: "Top 3" },
      { label: "Monthly Leads", before: "12", after: "67", change: "+458%" }
    ]
  },
  {
    industry: "Healthcare", 
    title: "Houston Medical Practice",
    metrics: [
      { label: "Search Visibility", before: "2%", after: "89%", change: "+4350%" },
      { label: "New Patients", before: "8/mo", after: "45/mo", change: "+462%" },
      { label: "Google Reviews", before: "12", after: "89", change: "+641%" }
    ]
  },
  {
    industry: "E-Commerce",
    title: "Houston Retail Website",
    metrics: [
      { label: "Revenue", before: "$12K/mo", after: "$89K/mo", change: "+641%" },
      { label: "Conversion Rate", before: "1.2%", after: "4.8%", change: "+300%" },
      { label: "Avg Order Value", before: "$45", after: "$78", change: "+73%" }
    ]
  },
  {
    industry: "Technology",
    title: "Houston Startup Launch",
    metrics: [
      { label: "Launch Time", before: "6 months", after: "8 weeks", change: "60% Faster" },
      { label: "User Acquisition", before: "0", after: "25,000+", change: "25K+" },
      { label: "Funding Secured", before: "$0", after: "$2.5M", change: "$2.5M" }
    ]
  }
];

// Testimonials
const testimonials = [
  { name: "Michael R.", company: "Richardson Law Firm", text: "Cardinal transformed our online presence. We went from page 3 to #1 for 'Houston personal injury lawyer' and our leads tripled.", rating: 5 },
  { name: "Dr. Sarah C.", company: "Houston Dermatology", text: "Our new patient appointments increased by 450% after Cardinal rebuilt our website and optimized for local SEO.", rating: 5 },
  { name: "James O.", company: "TechBridge Houston", text: "The best investment we made for our startup. Our app launched on time and exceeded user expectations.", rating: 5 },
  { name: "Maria L.", company: "Luna Boutique", text: "Our e-commerce sales increased by 500% after their optimization work. Incredible results.", rating: 5 }
];

// FAQs
const faqs = [
  { question: "How much does web design cost in Houston?", answer: "Houston web design costs vary based on complexity. At Cardinal Consulting, our Houston web design packages start at $3,000 for small business websites and range up to $25,000+ for enterprise solutions. All packages include responsive design, SEO optimization, and a content management system. We offer flexible payment plans for Houston businesses of all sizes." },
  { question: "How long does SEO take in Houston?", answer: "Houston SEO typically shows significant results within 3-6 months. However, competitive industries may take longer. We provide monthly progress reports so you can track your Houston SEO performance from day one. Most clients see first-page rankings within 4-6 months for less competitive keywords." },
  { question: "Why choose a Houston-based web design agency?", answer: "A Houston-based agency understands the local market, competition, and customer behavior in the Space City. We can meet in person, understand local business trends, and provide Houston-specific insights that out-of-town agencies miss. Plus, you get better communication and faster response times." },
  { question: "Do you offer ongoing Houston SEO services?", answer: "Yes! We offer monthly SEO packages starting at $1,500/month for Houston businesses. This includes ongoing optimization, content creation, link building, and monthly reporting. Our retainers are month-to-month with no long-term contracts required." },
  { question: "Can you help my Houston business rank on Google?", answer: "Absolutely! We've helped hundreds of Houston businesses achieve first-page rankings for competitive keywords. Our local SEO expertise includes Google Business Profile optimization, Houston citation building, local content strategies, and review management. We focus on Houston-specific keywords that drive real customers to your business." },
  { question: "What industries do you work with in Houston?", answer: "We serve all Houston industries including healthcare, legal, financial services, technology, retail, e-commerce, construction, real estate, restaurants, and professional services. Our diverse Houston portfolio means we understand the unique digital needs of each sector." }
];

// Stats
const stats = [
  { value: "500+", label: "Houston Projects" },
  { value: "98%", label: "Client Retention" },
  { value: "340%", label: "Avg Traffic Increase" },
  { value: "24/7", label: "Houston Support" }
];

// Comprehensive Schema
const generateSchemas = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://visitcardinal.com/houston-seo#localbusiness",
    "name": "Cardinal Consulting - Houston Web Design & SEO",
    "alternateName": "Cardinal Houston",
    "description": "Houston's premier web design and SEO agency. Custom websites, local SEO, and digital marketing services for Houston businesses.",
    "url": "https://visitcardinal.com/houston-seo",
    "telephone": "+12819017016",
    "email": "hunain@visitcardinal.com",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "areaServed": houstonAreas.map(area => ({
      "@type": "City",
      name: area,
      "containedInPlace": { "@type": "State", name: "Texas" }
    })),
    "sameAs": [
      "https://www.facebook.com/visitcardinal",
      "https://www.linkedin.com/company/visitcardinal",
      "https://www.instagram.com/visitcardinal"
    ]
  };

  const serviceSchema = [
    "Web Design Houston", "Houston SEO", "Houston Digital Marketing", 
    "Houston Web Development", "Houston Mobile App Development",
    "Houston Brand Identity", "Houston UI/UX Design"
  ].map(service => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service,
    "provider": { "@id": "https://visitcardinal.com/houston-seo#localbusiness" },
    "areaServed": {
      "@type": "City",
      name: "Houston",
      "containedInPlace": { "@type": "State", name: "Texas" }
    }
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, "name": "Home", "item": "https://visitcardinal.com" },
      { "@type": "ListItem", position: 2, "name": "Houston SEO & Web Design", "item": "https://visitcardinal.com/houston-seo" }
    ]
  };

  return [localBusinessSchema, ...serviceSchema, faqSchema, breadcrumbSchema];
};

export function HoustonSEOPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Houston Web Design & SEO Agency | #1 Rated Houston Digital Marketing | Cardinal Consulting"
        description="Houston's #1 web design and SEO agency. Custom websites, local SEO, and digital marketing that drive real results. 500+ Houston clients. Call (281) 901-7016 for free consultation."
        keywords={[
          "web design Houston", "Houston SEO", "Houston website design", "Houston SEO company",
          "Houston digital marketing", "Houston web developer", "Houston SEO services",
          "Houston web design agency", "best SEO Houston", "Houston local SEO",
          "Houston website developer", "Houston WordPress", "Houston e-commerce",
          "Houston mobile app development", "Houston brand identity"
        ]}
        schemas={generateSchemas()}
        url="https://visitcardinal.com/houston-seo"
      />

      <div className="min-h-screen bg-white">
        <Header />

        <main>
          {/* HERO SECTION */}
          <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-red-50/60 blur-3xl" />
              <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-red-50/40 blur-3xl" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative">
              {/* Rating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-red-50 border border-red-100 rounded-full px-4 py-2 mb-8"
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-900">5.0 Rated — Houston's #1 Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6"
              >
                Houston's Premier{' '}
                <span className="text-red-600">Web Design</span> &{' '}
                <span className="text-red-600">SEO</span> Agency
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-10"
              >
                We help Houston businesses dominate search results and convert visitors into customers. 
                500+ Houston companies trust us for web design, SEO, and digital marketing that delivers measurable results.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  Get Free SEO Audit
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />500+ Houston Projects
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />98% Retention
                </span>
                <span className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-500" />24/7 Support
                </span>
              </motion.div>
            </div>
          </section>

          {/* STATS SECTION */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES GRID */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Houston Services</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Everything Houston Businesses Need
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  From custom web design to local SEO, we provide comprehensive digital solutions tailored for Houston businesses.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-xl transition-all group"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link} className="inline-flex items-center gap-1 text-red-600 font-medium text-sm group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY CHOOSE SECTION */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Why Houston Businesses Choose Cardinal
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  We're not just another Houston web design company. We're your partner in digital growth.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, i) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8"
                  >
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{reason.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Proven Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Results for Houston Businesses
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full">{study.industry}</span>
                      <h3 className="font-serif text-xl font-bold text-gray-900">{study.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {study.metrics.map((metric, j) => (
                        <div key={j} className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{metric.label}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-400 line-through text-sm">{metric.before}</span>
                            <ArrowRight className="w-3 h-3 text-gray-300" />
                            <span className="font-bold text-gray-900">{metric.after}</span>
                            <span className="text-green-600 text-xs font-bold bg-green-50 px-2 py-0.5 rounded-full">{metric.change}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICE AREAS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">
                  Houston Areas We Serve
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-3"
              >
                {houstonAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors cursor-default"
                  >
                    <MapPin className="w-3 h-3" />{area}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* TESTIMONIALS */}
          <section className="py-24 lg:py-28 bg-gray-50/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  What Houston Clients Say
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex mb-3">
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"{t.text}"</p>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ SECTION */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-2xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
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

          {/* CONTACT / CTA SECTION */}
          <section className="py-24 lg:py-28 bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-30" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%)' }} />
            
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Building2 className="w-12 h-12 text-red-500 mx-auto mb-6" />
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
                  Ready to Dominate Houston Search?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Join 500+ Houston businesses that have transformed their online presence with Cardinal Consulting. 
                  Get your free SEO audit and custom strategy today.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
                  >
                    Get Free SEO Audit
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href="tel:+12819017016"
                    className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Call (281) 901-7016
                  </a>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />2100 West Loop S, Houston, TX
                  </span>
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />hunain@visitcardinal.com
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />Mon-Fri 9AM-6PM
                  </span>
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

export default HoustonSEOPage;
