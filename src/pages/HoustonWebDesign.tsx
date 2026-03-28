import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Globe, Code, Palette, Smartphone, TrendingUp, Award, Shield, Users, Zap, ChevronDown, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const houstonNeighborhoods = [
  "Downtown Houston", "The Woodlands", "Sugar Land", "Katy", "Pearland",
  "Cypress", "Spring", "Missouri City", "League City", "Pasadena",
  "Baytown", "Conroe", "Humble", "Tomball", "Richmond",
  "Friendswood", "Clear Lake", "Memorial", "Galleria", "Heights",
  "Montrose", "Midtown", "River Oaks", "West University", "Bellaire",
  "Stafford", "Rosenberg", "Alvin", "Deer Park", "La Porte"
];

const webDesignFeatures = [
  {
    icon: Palette,
    title: "Custom Houston Web Design",
    description: "Every pixel crafted to convert Houston visitors into paying customers. No templates — 100% custom designs built for your brand and market.",
    perks: ["Unique custom design — never a template", "Houston brand & market research", "Conversion-focused layouts", "Professional photography integration"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Responsive Design",
    description: "Over 70% of Houston searches happen on mobile. We build every website mobile-first so you rank higher and convert better.",
    perks: ["Mobile-first development", "Flawless on all screen sizes", "Touch-optimized navigation", "Fast mobile load speeds"]
  },
  {
    icon: TrendingUp,
    title: "SEO-First Architecture",
    description: "Every website we build in Houston is engineered to rank. Technical SEO is baked in from day one — not bolted on afterward.",
    perks: ["Core Web Vitals optimized", "Schema markup included", "Houston local SEO built-in", "Page speed 90+ Google score"]
  },
  {
    icon: Code,
    title: "Modern Technology Stack",
    description: "We use React, Next.js, and cutting-edge tech that gives Houston businesses a competitive edge in performance and scalability.",
    perks: ["React / Next.js / TypeScript", "Headless CMS integration", "API & third-party integrations", "Enterprise-grade security"]
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Houston businesses can't wait. We deliver full websites in as little as 2-4 weeks without sacrificing quality.",
    perks: ["2-4 week standard delivery", "72-hour landing page option", "Agile sprint methodology", "Weekly progress demos"]
  },
  {
    icon: Shield,
    title: "Ongoing Support & Maintenance",
    description: "We're your long-term Houston web design partner. 24/7 support, monthly updates, security monitoring — we never disappear.",
    perks: ["24/7 uptime monitoring", "Monthly performance reports", "Security patches & updates", "Dedicated Houston support team"]
  }
];

const packages = [
  {
    name: "Starter",
    subtitle: "For small Houston businesses",
    price: "$3,000",
    timeline: "2 weeks",
    features: [
      "5-page custom website",
      "Mobile responsive design",
      "Basic on-page SEO",
      "Contact form integration",
      "Google Analytics setup",
      "1-month free support"
    ]
  },
  {
    name: "Growth",
    subtitle: "For established Houston companies",
    price: "$8,000",
    timeline: "4 weeks",
    popular: true,
    features: [
      "10-15 page custom website",
      "Full SEO optimization",
      "Schema markup",
      "CMS (edit your own content)",
      "Blog & news integration",
      "Google Business optimization",
      "3-month free support"
    ]
  },
  {
    name: "Enterprise",
    subtitle: "For Houston market leaders",
    price: "Custom",
    timeline: "6-12 weeks",
    features: [
      "Unlimited pages",
      "E-commerce / booking systems",
      "Advanced schema & local SEO",
      "Custom integrations & APIs",
      "Conversion rate optimization",
      "Dedicated project manager",
      "12-month support plan"
    ]
  }
];

const caseStudies = [
  {
    business: "Houston Law Firm",
    industry: "Legal",
    challenge: "Outdated website losing clients to competitors",
    result: "312% increase in contact form submissions in 90 days",
    metrics: ["+312% leads", "#1 Google ranking", "Page speed: 95/100"]
  },
  {
    business: "Houston Medical Practice",
    industry: "Healthcare",
    challenge: "No online presence, losing patients to nearby competitors",
    result: "New patients up 450%, now dominating local search",
    metrics: ["+450% patients", "Top 3 for 40+ keywords", "4.9★ Google rating"]
  },
  {
    business: "Houston E-Commerce Retailer",
    industry: "Retail",
    challenge: "Low-converting website with high bounce rate",
    result: "Revenue grew from $12K to $89K/month after redesign",
    metrics: ["+641% revenue", "Bounce rate -58%", "Conversion: 4.8%"]
  },
  {
    business: "Houston Restaurant Group",
    industry: "Food & Beverage",
    challenge: "Multiple locations, inconsistent branding online",
    result: "Unified brand presence, online reservations up 280%",
    metrics: ["+280% reservations", "3 locations unified", "5★ brand consistency"]
  }
];

const faqs = [
  {
    question: "How much does web design cost in Houston, TX?",
    answer: "Web design costs in Houston range from $3,000 for a basic small business website to $25,000+ for enterprise-level platforms. At Cardinal Consulting, our Houston web design packages start at $3,000 and include responsive design, SEO optimization, and a content management system. We offer flexible payment plans and transparent pricing with no hidden fees."
  },
  {
    question: "What makes Cardinal Consulting the best web design company in Houston?",
    answer: "Cardinal Consulting is Houston's top-rated web design company because we combine deep local market knowledge with enterprise-grade technical expertise. We've built 500+ websites for Houston businesses across every industry. Our designs are built SEO-first, meaning you don't just get a beautiful website — you get one that ranks on Google and converts visitors into customers. We have a 98% client retention rate and have won multiple Houston Business Journal awards."
  },
  {
    question: "How long does it take to build a website in Houston?",
    answer: "Our Houston web design timelines: simple 5-page business websites take 2 weeks, growth websites with 10-15 pages take 4 weeks, and enterprise platforms take 6-12 weeks. We also offer a 72-hour landing page service for Houston businesses that need something fast. All timelines include design, development, SEO setup, and launch support."
  },
  {
    question: "Do you design websites for Houston businesses in all industries?",
    answer: "Yes! We've designed websites for Houston businesses in healthcare, legal, financial services, technology, restaurants, retail, e-commerce, construction, real estate, professional services, and more. Our diverse Houston portfolio means we understand the specific design requirements and compliance needs of your industry."
  },
  {
    question: "Will my Houston website rank on Google?",
    answer: "Absolutely. Unlike other Houston web design agencies that build pretty websites with no SEO, every Cardinal Consulting website is built with technical SEO from the ground up. This includes schema markup, Core Web Vitals optimization, mobile-first design, local SEO for Houston, proper heading structure, optimized meta tags, and fast load speeds. Our websites consistently rank on page 1 of Google for Houston keywords."
  },
  {
    question: "Can you redesign my existing Houston website?",
    answer: "Yes! Website redesigns are one of our most popular services for Houston businesses. We audit your existing site, identify conversion killers and SEO issues, and rebuild it from scratch to perform better. We handle the migration carefully to protect your existing Google rankings. Most Houston businesses see an immediate improvement in both rankings and conversions after a redesign with Cardinal."
  },
  {
    question: "Do you offer web design services near me in Houston?",
    answer: "Yes! We serve all Houston neighborhoods and surrounding areas including The Woodlands, Sugar Land, Katy, Pearland, Cypress, Spring, League City, Pasadena, Baytown, Conroe, Humble, Tomball, Richmond, Friendswood, Clear Lake, Memorial, Galleria, Heights, Montrose, Midtown, River Oaks, West University, and all of Greater Houston. We offer in-person meetings at our 2100 West Loop S Fwy office or can come to you."
  },
  {
    question: "What is your web design process?",
    answer: "Our Houston web design process: (1) Discovery — we learn about your business, goals, and Houston target market. (2) Strategy — we research your competitors and plan an SEO-first architecture. (3) Design — custom mockups built around your brand and conversion goals. (4) Development — we build with React/Next.js for speed and SEO. (5) Testing — cross-browser, mobile, and speed testing. (6) Launch — we handle everything. (7) Support — ongoing optimization and maintenance."
  }
];

const reviews = [
  { name: "Jennifer M.", company: "Boutique Law Firm, River Oaks", text: "Cardinal is without question the best web design company in Houston. Our new site ranks #1 for our most important keywords and we get 3x more calls now.", rating: 5 },
  { name: "Carlos R.", company: "Houston HVAC Company", text: "We went from page 4 to #1 for 'HVAC company near me Houston' within 3 months of launching our new Cardinal website. Incredible ROI.", rating: 5 },
  { name: "Dr. Angela T.", company: "Houston Dermatology Clinic", text: "The team at Cardinal designed a website that actually looks like a premium practice and performs even better. New patient calls doubled in 60 days.", rating: 5 },
  { name: "Marcus J.", company: "Houston Real Estate Developer", text: "They built our entire property marketing platform in 6 weeks. The attention to detail and local Houston market knowledge was exceptional.", rating: 5 }
];

const generateSchemas = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.visitcardinal.com/houston-web-design#localbusiness",
    "name": "Cardinal Consulting — #1 Web Design Company Houston TX",
    "alternateName": ["Cardinal Web Design Houston", "Cardinal Consulting Houston", "Best Web Design Company Houston"],
    "description": "Houston's #1 rated web design company. Custom websites, SEO-first design, and digital marketing for Houston businesses. 500+ projects delivered. Serving all Houston neighborhoods.",
    "url": "https://www.visitcardinal.com/houston-web-design",
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
    "areaServed": houstonNeighborhoods.map(area => ({
      "@type": "City",
      "name": area,
      "containedInPlace": { "@type": "State", "name": "Texas" }
    })),
    "sameAs": [
      "https://www.facebook.com/visitcardinal",
      "https://www.linkedin.com/company/visitcardinal",
      "https://twitter.com/cardinalconsult"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Houston Web Design Packages",
      "itemListElement": packages.map((pkg, i) => ({
        "@type": "Offer",
        "position": i + 1,
        "name": `${pkg.name} Web Design Package`,
        "description": pkg.subtitle,
        "price": pkg.price === "Custom" ? "Contact for Quote" : pkg.price.replace("$", ""),
        "priceCurrency": "USD"
      }))
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Design Houston TX",
    "alternateName": ["Houston Web Design", "Best Web Design Company Houston", "Web Design Company Near Me Houston", "#1 Web Design Company Houston"],
    "description": "Professional, custom web design services for Houston businesses. SEO-first websites that rank on Google and convert visitors into customers. Serving all Houston neighborhoods.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.visitcardinal.com/houston-web-design#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston",
      "containedInPlace": { "@type": "State", "name": "Texas" }
    },
    "serviceType": "Web Design",
    "category": "Web Development",
    "offers": packages.map(pkg => ({
      "@type": "Offer",
      "name": `${pkg.name} Houston Web Design Package`,
      "description": pkg.subtitle,
      "price": pkg.price === "Custom" ? "0" : pkg.price.replace("$", "").replace(",", ""),
      "priceCurrency": "USD"
    }))
  };

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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.visitcardinal.com" },
      { "@type": "ListItem", "position": 2, "name": "Houston Services", "item": "https://www.visitcardinal.com/houston-seo" },
      { "@type": "ListItem", "position": 3, "name": "Houston Web Design", "item": "https://www.visitcardinal.com/houston-web-design" }
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Get a Custom Website for Your Houston Business",
    "description": "Cardinal Consulting's proven web design process for Houston businesses",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Discovery Call", "text": "Free 30-minute strategy session to understand your Houston business goals and target market." },
      { "@type": "HowToStep", "position": 2, "name": "Strategy & Research", "text": "We research your Houston competitors, identify keyword opportunities, and plan your website architecture." },
      { "@type": "HowToStep", "position": 3, "name": "Custom Design", "text": "Our designers create custom mockups tailored to your brand and Houston audience." },
      { "@type": "HowToStep", "position": 4, "name": "Development", "text": "We build your website with React/Next.js for maximum performance and SEO." },
      { "@type": "HowToStep", "position": 5, "name": "Launch & Optimize", "text": "We launch your Houston website and continue optimizing for rankings and conversions." }
    ]
  };

  return [localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema, howToSchema];
};

export function HoustonWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="#1 Web Design Company Houston TX | Best Web Design Agency"
        description="Houston's best web design company. Custom websites built to rank #1 on Google and convert visitors to customers. Web design company near me in Houston — call (281) 901-7016. Free consultation."
        keywords={[
          "web design company Houston", "best web design company in Houston", "#1 web design company Houston",
          "web design company near me Houston", "Houston web design", "Houston web design agency",
          "web designer Houston TX", "professional web design Houston", "custom web design Houston",
          "Houston website design company", "affordable web design Houston", "Houston web design services",
          "top web design company Houston", "web design near me Houston", "Houston website designer",
          "web design Houston TX", "Houston website development", "web design company in Houston Texas",
          "best website design Houston", "Houston web design and development"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-web-design"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Rated Web Design Company — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6"
              >
                Houston's Best{' '}
                <span className="text-red-600">Web Design</span>{' '}
                Company
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4"
              >
                Custom websites that rank #1 on Google and turn Houston visitors into paying customers.
                500+ Houston businesses trust Cardinal Consulting for web design that actually delivers results.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-base text-gray-400 max-w-2xl mb-10"
              >
                Searching for a "web design company near me" in Houston? We're located at 2100 West Loop S Fwy, Houston, TX 77027 — and we serve all Greater Houston neighborhoods.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 mb-12"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  Get Free Website Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+12819017016"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center gap-6 text-sm text-gray-500"
              >
                {["500+ Houston Websites Built", "98% Client Retention Rate", "Avg 340% Traffic Increase", "Free Consultation"].map(badge => (
                  <span key={badge} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />{badge}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* STATS */}
          <section className="py-12 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Houston Websites Launched" },
                  { value: "4.9★", label: "Average Google Rating" },
                  { value: "340%", label: "Avg Traffic Increase" },
                  { value: "#1", label: "Web Design Company Houston" }
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <div className="text-3xl lg:text-5xl font-bold text-white font-serif mb-2">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* WHY #1 */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Why We're Houston's #1 Web Design Company</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-6">
                  We Build Websites That Rank & Convert
                </h2>
                <p className="text-gray-500 text-lg">
                  Most Houston web design companies hand you a pretty website and disappear. Cardinal Consulting builds websites
                  engineered to rank on Google, load fast, and turn Houston visitors into real customers — then we stay by your side.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {webDesignFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-500 text-sm mb-5">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.perks.map(perk => (
                        <li key={perk} className="flex items-center gap-2 text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />{perk}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* PACKAGES */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Transparent Pricing</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Houston Web Design Packages
                </h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Honest pricing for Houston businesses of every size. No hidden fees, no surprise charges — ever.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {packages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-2xl p-8 border ${pkg.popular ? 'bg-gray-900 border-red-600 shadow-2xl scale-105' : 'bg-white border-gray-100'}`}
                  >
                    {pkg.popular && <div className="text-red-500 text-xs font-bold uppercase tracking-wider mb-3">Most Popular</div>}
                    <h3 className={`font-serif text-2xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                    <p className={`text-sm mb-6 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>{pkg.subtitle}</p>
                    <div className={`text-4xl font-bold font-serif mb-1 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</div>
                    <div className={`text-sm mb-8 ${pkg.popular ? 'text-gray-400' : 'text-gray-500'}`}>Delivered in {pkg.timeline}</div>
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map(f => (
                        <li key={f} className={`flex items-start gap-2 text-sm ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />{f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-colors ${pkg.popular ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CASE STUDIES */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Real Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Proven Results for Houston Businesses
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.business}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                  >
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.industry}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{study.business}</h3>
                    <p className="text-gray-500 text-sm mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                    <p className="text-gray-900 text-sm font-medium mb-5"><strong>Result:</strong> {study.result}</p>
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
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  What Houston Clients Say About Us
                </h2>
                <div className="flex items-center justify-center gap-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />)}
                  <span className="text-gray-600 ml-2">4.9/5 from 127 Houston reviews</span>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-2xl p-6 border border-gray-100"
                  >
                    <div className="flex mb-3">
                      {[...Array(r.rating)].map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-600 text-sm mb-4">"{r.text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-500 text-xs">{r.company}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* SERVICE AREAS */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">
                  Web Design Services Near You — All Houston Areas
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                  We provide web design services to all Houston neighborhoods and surrounding communities.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
                {houstonNeighborhoods.map((area) => (
                  <span key={area} className="inline-flex items-center gap-1 bg-gray-50 border border-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-red-50 hover:border-red-100 hover:text-red-600 transition-colors">
                    <MapPin className="w-3 h-3" />{area}
                  </span>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">Client Testimonials</p>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">What Houston Businesses Say</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Real results from real Houston clients — verified reviews from business owners across the city.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    body: "Cardinal rebuilt our entire law firm website from scratch. Within 3 months we were ranking #1 for 'Houston personal injury lawyer' and our consultation requests tripled. The ROI has been extraordinary.",
                    name: "Michael R.",
                    title: "Managing Partner",
                    company: "Richardson & Associates Law — Downtown Houston"
                  },
                  {
                    body: "We had a beautiful Squarespace site that got zero traffic. Cardinal redesigned it with proper SEO architecture and we went from 200 to 4,800 monthly visitors in 6 months. Our online booking filled up.",
                    name: "Dr. Sarah K.",
                    title: "Owner",
                    company: "Kessler Dermatology — Houston Medical Center"
                  },
                  {
                    body: "Best investment we made for our business. Cardinal built us a custom ecommerce site and our revenue went from $12k to $89k a month online. They understand both design and conversion — rare combination.",
                    name: "James T.",
                    title: "Founder & CEO",
                    company: "Lone Star Outfitters — Houston, TX"
                  },
                ].map((t, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, s) => <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic">"{t.body}"</p>
                    <div>
                      <div className="font-bold text-gray-900">{t.name}</div>
                      <div className="text-sm text-gray-500">{t.title} — {t.company}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">
                  Houston Web Design — FAQ
                </h2>
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
                  Ready to Work with Houston's #1 Web Design Company?
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">
                  Get a free consultation and custom quote. We'll show you exactly how we'll build a website that ranks #1 in Houston and converts visitors into customers.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
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
                  { title: "Custom Website vs. Template: The Real Cost Breakdown", slug: "custom-website-vs-template-cost", tag: "Web Design" },
                  { title: "12 Hidden Website Profit Leaks Costing You Clients", slug: "why-website-not-converting", tag: "Conversion" },
                  { title: "How to Choose a Web Design Agency in Houston", slug: "web-design-houston-agencies-guide", tag: "Houston Guide" },
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
                  { label: "Houston SEO Agency", href: "/houston-seo" },
                  { label: "App Development Houston", href: "/houston-app-development" },
                  { label: "Houston Web Developer", href: "/houston-web-developer" },
                  { label: "Houston SEO Company", href: "/houston-seo-company" },
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

export default HoustonWebDesignPage;
