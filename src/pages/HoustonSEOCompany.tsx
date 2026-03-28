import { ArrowRight, Check, CheckCircle, Star, MapPin, Phone, Clock, Mail, Search, TrendingUp, BarChart3, Globe, Target, Shield, Zap, ChevronDown, Users } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const seoServices = [
  {
    icon: Search,
    title: "Houston Local SEO",
    description: "Dominate Google for 'near me' searches in Houston. We optimize your Google Business Profile, build local citations, and get you found by Houston customers.",
    features: ["Google Business Profile optimization", "Houston citation building", "Local keyword targeting", "'Near me' search optimization"]
  },
  {
    icon: TrendingUp,
    title: "On-Page SEO Optimization",
    description: "Complete optimization of your website's content, structure, and technical elements for Houston keywords that drive real customers.",
    features: ["Keyword research & mapping", "Title tag & meta optimization", "Content optimization", "Internal linking strategy"]
  },
  {
    icon: BarChart3,
    title: "Technical SEO",
    description: "Fix the behind-the-scenes technical issues that prevent your Houston website from ranking. We audit and resolve every technical blocker.",
    features: ["Site speed optimization", "Core Web Vitals", "Schema markup", "Crawlability & indexability"]
  },
  {
    icon: Globe,
    title: "Link Building",
    description: "White-hat link building to boost your Houston domain authority. We earn high-quality backlinks from reputable Houston and national publications.",
    features: ["Houston business directory links", "Guest posting outreach", "Digital PR for Houston", "Competitor backlink analysis"]
  },
  {
    icon: Target,
    title: "Content Marketing SEO",
    description: "SEO-driven content that ranks for Houston keywords and converts readers into customers. Blog posts, landing pages, and city-specific content.",
    features: ["Houston keyword content", "Blog content strategy", "Landing page copywriting", "City-specific service pages"]
  },
  {
    icon: Shield,
    title: "SEO Audit & Strategy",
    description: "Comprehensive SEO audit of your Houston website with a detailed roadmap for ranking improvement. Understand exactly why you're not ranking #1.",
    features: ["Full technical audit", "Competitor analysis", "Keyword opportunity map", "90-day action plan"]
  }
];

const rankingResults = [
  { keyword: "Houston personal injury lawyer", before: "Page 4, #38", after: "#1", change: "37 positions up" },
  { keyword: "web design company Houston", before: "Page 5, #47", after: "#1-3", change: "44 positions up" },
  { keyword: "Houston HVAC company near me", before: "Page 3, #26", after: "#2", change: "24 positions up" },
  { keyword: "Houston medical spa", before: "Not ranking", after: "#1", change: "0 to #1" },
  { keyword: "app development company Houston", before: "Page 6, #54", after: "#1-5", change: "Top 5" },
  { keyword: "best SEO company Houston", before: "Page 4, #33", after: "#1", change: "32 positions up" }
];

const process = [
  { step: "01", title: "Free SEO Audit", description: "We audit your Houston website for free — identifying every technical issue, missed keyword opportunity, and competitive gap." },
  { step: "02", title: "Houston Keyword Research", description: "We research the exact keywords your Houston customers are searching for and map them to pages on your site." },
  { step: "03", title: "On-Page Optimization", description: "We optimize every page on your site for targeted Houston keywords — titles, content, schema, internal links, and more." },
  { step: "04", title: "Technical Fixes", description: "We fix speed issues, crawlability problems, and technical errors that are preventing Google from ranking your Houston site." },
  { step: "05", title: "Link Building", description: "We build high-quality backlinks from Houston publications, business directories, and industry sites." },
  { step: "06", title: "Monthly Reporting", description: "Transparent monthly reports showing your Houston keyword rankings, traffic growth, and ROI. No vanity metrics — just results." }
];

const caseStudies = [
  {
    business: "Houston Personal Injury Law Firm",
    challenge: "Stuck on page 4 for 'Houston personal injury lawyer' — losing cases to competitors",
    result: "Reached #1 ranking in 4 months. Monthly leads went from 12 to 67.",
    metrics: ["#1 Google ranking", "+458% leads", "4 months to #1"]
  },
  {
    business: "Houston Medical Practice",
    challenge: "Zero online presence — patients finding competitors instead",
    result: "Top 3 for 40+ Houston medical keywords. New patient calls up 450%.",
    metrics: ["+450% new patients", "40+ keywords in top 3", "4.9★ Google profile"]
  },
  {
    business: "Houston HVAC Company",
    challenge: "'Near me' searches going to 3 Houston competitors",
    result: "Now ranking #1-2 for all Houston HVAC 'near me' searches. Leads tripled.",
    metrics: ["#1 'near me' Houston", "+300% service calls", "3x revenue growth"]
  },
  {
    business: "Houston E-Commerce Store",
    challenge: "Low organic traffic, relying only on paid ads",
    result: "Organic traffic up 640% in 6 months. Reduced ad spend by $8,000/month.",
    metrics: ["+640% organic traffic", "-$8K/mo ad spend", "6 months to results"]
  }
];

const faqs = [
  {
    question: "What is the best SEO company in Houston?",
    answer: "Cardinal Consulting is Houston's top-rated SEO company with 127 verified reviews and a 4.9-star average rating. We've helped 500+ Houston businesses rank on page 1 of Google for competitive keywords. Unlike most Houston SEO agencies that use black-hat tactics or sell packages that don't deliver, Cardinal Consulting focuses on sustainable, white-hat SEO that ranks Houston businesses for years. Our average client sees a 340% increase in organic traffic within 6 months."
  },
  {
    question: "How long does SEO take to work in Houston?",
    answer: "Houston SEO results typically start appearing within 2-4 months, with significant improvements by month 6. Less competitive Houston keywords can rank within 60 days, while highly competitive terms like 'Houston personal injury lawyer' may take 4-6 months to reach page 1. We send monthly progress reports from day one so you always see what's improving. Unlike paid ads, SEO results compound over time — after 12 months, your Houston site becomes a lead generation machine."
  },
  {
    question: "How much does SEO cost for Houston businesses?",
    answer: "Houston SEO pricing at Cardinal Consulting starts at $1,500/month for local SEO packages targeting your immediate Houston neighborhood, $2,500/month for competitive Houston-wide campaigns, and $4,000+/month for aggressive multi-keyword campaigns competing with the top Houston players in your industry. All packages include monthly reporting, and we offer month-to-month contracts — no long-term lock-in. The average Houston business earns $5-10 for every $1 spent on SEO with us."
  },
  {
    question: "Why is my Houston business not showing up on Google?",
    answer: "The most common reasons Houston businesses don't rank on Google: (1) No Google Business Profile or unoptimized profile, (2) Missing or thin local content, (3) Technical SEO issues preventing Google from crawling your site, (4) No local backlinks or citations, (5) Slow website speed, (6) No schema markup. A free Cardinal Consulting SEO audit will identify exactly which of these issues are holding your Houston business back and give you a clear action plan."
  },
  {
    question: "What is local SEO and why does my Houston business need it?",
    answer: "Local SEO is the practice of optimizing your online presence to rank for location-specific searches — like 'web design company Houston' or 'restaurant near me Houston.' For Houston businesses, local SEO is critical because 97% of people search online for local businesses, and 80% of searches lead to a purchase within 24 hours. Without local SEO, Houston customers are finding and calling your competitors instead of you. Cardinal Consulting specializes in getting Houston businesses found for exactly the searches their customers are making."
  },
  {
    question: "Do you offer SEO services for Houston businesses in all industries?",
    answer: "Yes! Cardinal Consulting provides SEO services for Houston businesses in all industries: law firms, medical practices, HVAC, plumbing, restaurants, retail, e-commerce, real estate, construction, financial services, technology, and more. We have industry-specific experience and understand the competitive landscape for each Houston market. We tailor our SEO strategy to your specific Houston industry, competitor set, and customer search behavior."
  },
  {
    question: "What's the difference between SEO and PPC for Houston businesses?",
    answer: "PPC (Google Ads) gets you to the top of Google immediately but stops the moment you stop paying. SEO takes longer to show results but builds lasting organic rankings that drive free traffic forever. For Houston businesses, we recommend a combined approach: use PPC for immediate leads while SEO builds your long-term ranking foundation. Most of our Houston SEO clients are able to reduce or eliminate their ad spend within 12 months as organic traffic replaces paid traffic."
  }
];

const reviews = [
  { name: "Amanda K.", company: "Houston Law Firm", text: "Best SEO company in Houston, hands down. We went from page 4 to #1 for our most competitive keyword in 4 months. Our phone rings constantly now.", rating: 5 },
  { name: "Dr. James W.", company: "Houston Dermatology", text: "Cardinal's SEO work is remarkable. We rank top 3 for every Houston medical search that matters to us. New patients call specifically saying they found us on Google.", rating: 5 },
  { name: "Roberto S.", company: "Houston HVAC Company", text: "The 'near me' SEO they did for us was game-changing. We now get 3x the service calls we used to. Every dollar we spend with Cardinal comes back as multiple dollars in business.", rating: 5 },
  { name: "Kelly M.", company: "Houston Online Retailer", text: "Cardinal grew our organic traffic by 640% in 6 months and cut our Google Ads spend in half. True SEO experts who understand the Houston market.", rating: 5 }
];

const generateSchemas = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.visitcardinal.com/houston-seo-company#localbusiness",
    "name": "Cardinal Consulting — #1 SEO Company Houston TX",
    "alternateName": ["Best SEO Company Houston", "Houston SEO Company", "SEO Agency Houston TX", "Top SEO Company Houston", "Houston Local SEO Company"],
    "description": "Houston's best SEO company. Local SEO, technical SEO, and content marketing to rank your Houston business #1 on Google. 500+ Houston clients. Proven results in 90 days.",
    "url": "https://www.visitcardinal.com/houston-seo-company",
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
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SEO Services Houston TX",
    "alternateName": ["Houston SEO Company", "Best SEO Company Houston", "Local SEO Houston", "Houston SEO Agency", "SEO Optimization Houston"],
    "description": "Professional SEO services for Houston businesses. Local SEO, technical SEO, link building, and content marketing. Rank #1 on Google for Houston keywords.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.visitcardinal.com/houston-seo-company#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston",
      "containedInPlace": { "@type": "State", "name": "Texas" }
    }
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
      { "@type": "ListItem", "position": 2, "name": "Houston SEO", "item": "https://www.visitcardinal.com/houston-seo" },
      { "@type": "ListItem", "position": 3, "name": "Houston SEO Company", "item": "https://www.visitcardinal.com/houston-seo-company" }
    ]
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema];
};

export function HoustonSEOCompanyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="#1 SEO Company Houston TX | Best Houston SEO Agency"
        description="Houston's #1 SEO company. Local SEO, technical SEO & content marketing to rank your Houston business #1 on Google. Free SEO audit — call (281) 901-7016. 500+ Houston clients."
        keywords={[
          "SEO company Houston", "best SEO company Houston", "#1 SEO company Houston",
          "Houston SEO company", "SEO agency Houston TX", "local SEO Houston",
          "Houston SEO services", "top SEO company Houston", "Houston search engine optimization",
          "SEO expert Houston", "Houston SEO specialist", "best SEO agency Houston",
          "SEO services Houston TX", "Houston local SEO company", "affordable SEO Houston",
          "Houston SEO consultant", "professional SEO Houston", "Houston SEO optimization",
          "Google ranking Houston", "Houston website ranking"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-seo-company"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Rated SEO Company — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Houston's Best{' '}
                <span className="text-red-600">SEO Company</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                We rank Houston businesses #1 on Google for the searches that matter.
                Local SEO, technical SEO, content marketing, and link building — all proven to deliver results for Houston companies.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                Average results: 340% increase in organic traffic within 6 months. Free SEO audit for all Houston businesses — no strings attached.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free SEO Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["500+ Houston Clients Ranked", "340% Avg Traffic Increase", "Results in 90 Days", "Month-to-Month Contracts"].map(badge => (
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
                  { value: "500+", label: "Houston Businesses Ranked" },
                  { value: "340%", label: "Avg Organic Traffic Increase" },
                  { value: "4.9★", label: "Average Client Rating" },
                  { value: "#1", label: "SEO Company Houston TX" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Our Houston SEO Services</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Everything Your Houston Business Needs to Rank</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seoServices.map((service, i) => (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map(f => (
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

          {/* RANKING RESULTS */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Real Rankings</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Keywords We've Ranked #1</h2>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {rankingResults.map((result, i) => (
                  <motion.div key={result.keyword} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-6 border border-gray-100 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">"{result.keyword}"</div>
                      <div className="text-sm text-gray-500">Before: <span className="line-through">{result.before}</span></div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-red-600 font-serif">{result.after}</div>
                      <div className="text-xs text-green-600 font-bold bg-green-50 px-2 py-0.5 rounded-full">{result.change}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* PROCESS */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Our Houston SEO Process</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {process.map((step, i) => (
                  <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-2xl p-8">
                    <div className="text-5xl font-bold text-red-100 font-serif mb-4">{step.step}</div>
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-500 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Proven SEO Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston SEO Case Studies</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.business} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{study.business}</h3>
                    <p className="text-gray-500 text-sm mb-2"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-900 text-sm font-medium mb-5"><strong>Result:</strong> {study.result}</p>
                    <div className="flex flex-wrap gap-3">
                      {study.metrics.map(m => <span key={m} className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{m}</span>)}
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">What Houston SEO Clients Say</h2>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston SEO Company — FAQ</h2>
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

          {/* SEO Pricing */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-3xl lg:text-4xl text-gray-900 mb-4">
                  Houston SEO Pricing
                </motion.h2>
                <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-gray-600 max-w-2xl mx-auto">
                  Month-to-month. No long-term contracts. Average Houston client earns $5–$10 for every $1 invested.
                </motion.p>
              </div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { name: "SEO Foundation", price: "$1,500/mo", desc: "Local SEO to dominate your city.", features: ["Google Business Profile optimization", "On-page SEO (up to 10 pages/mo)", "Local citation building", "Monthly rank tracking", "Technical SEO audits", "Monthly performance report"], popular: false },
                  { name: "SEO Growth", price: "$2,500/mo", desc: "Comprehensive SEO to outrank competitors.", features: ["Everything in Foundation", "Content marketing (4 blogs/mo)", "Link building & authority growth", "Competitor gap analysis", "Schema markup expansion", "Bi-weekly strategy calls"], popular: true },
                  { name: "SEO Domination", price: "$4,000/mo", desc: "Own your entire Houston market.", features: ["Everything in Growth", "8 long-form blog articles/mo", "PR & digital outreach", "Core Web Vitals monitoring", "Multi-location SEO", "Weekly reporting & calls"], popular: false },
                ].map((pkg, i) => (
                  <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative rounded-2xl border-2 p-8 ${pkg.popular ? "border-red-600 shadow-xl" : "border-gray-200"}`}>
                    {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">Best Value</div>}
                    <h3 className="font-serif text-xl text-gray-900 mb-1">{pkg.name}</h3>
                    <div className="font-serif text-3xl text-red-600 mb-1">{pkg.price}</div>
                    <p className="text-sm text-gray-500 mb-6">{pkg.desc}</p>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map(f => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className={`block text-center py-3 px-6 rounded-full font-semibold transition-colors ${pkg.popular ? "bg-red-600 text-white hover:bg-red-700" : "border-2 border-gray-200 text-gray-700 hover:border-red-200 hover:bg-red-50"}`}>
                      Get Started
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
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">
                  Ready to Rank #1 in Houston?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Get your free Houston SEO audit today. We'll show you exactly why you're not ranking and give you a roadmap to page 1. No commitment required.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free SEO Audit <ArrowRight className="w-4 h-4" />
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
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-8">From Our SEO Blog</p>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { title: "Schema Markup That Actually Moves Rankings", slug: "schema-markup-seo-guide", tag: "SEO Strategy" },
                  { title: "How to Rank Inside ChatGPT and AI Search Results", slug: "ai-search-ranking", tag: "AEO & AI Search" },
                  { title: "SEO vs AEO vs GEO: The Future of Search in 2026", slug: "seo-vs-aeo-vs-geo", tag: "Future of SEO" },
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
                  { label: "Houston SEO Agency", href: "/houston-seo" },
                  { label: "App Development Houston", href: "/houston-app-development" },
                  { label: "SEO & Analytics Services", href: "/services/seo-analytics" },
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

export default HoustonSEOCompanyPage;
