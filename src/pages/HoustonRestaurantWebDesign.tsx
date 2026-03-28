import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, ShoppingCart, Calendar, Smartphone, TrendingUp, Globe, Camera, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/seo-config";

const features = [
  {
    icon: ShoppingCart,
    title: "Zero-Commission Online Ordering",
    description: "Keep 100% of every online order. We build direct ordering systems so Houston restaurants stop paying 15–30% commissions to DoorDash, Uber Eats, and Grubhub on orders you could own.",
    perks: ["0% commission on all orders", "Stripe & Square payment processing", "Menu builder with modifiers", "Order confirmation & tracking texts"]
  },
  {
    icon: Calendar,
    title: "OpenTable & Resy Integration",
    description: "Real-time reservation booking from your website. We integrate OpenTable, Resy, or a custom reservation system so Houston diners book directly — no friction, no third-party fees.",
    perks: ["OpenTable & Resy native integration", "Party size & seating preferences", "Waitlist management", "Private dining & event booking"]
  },
  {
    icon: Smartphone,
    title: "Mobile-First Menu Design",
    description: "Over 80% of Houston restaurant searches happen on mobile. Your menu needs to be gorgeous, fast, and scannable on any phone. We build menus that make mouths water.",
    perks: ["Photo-forward menu layouts", "Dietary filter tags (vegan, GF, spicy)", "Seasonal menu easy updates", "PDF menu viewer + web menu both"]
  },
  {
    icon: MapPin,
    title: "Google Maps & Local SEO",
    description: "Rank when Houstonians search 'tacos near me,' 'sushi Montrose,' or 'BBQ Heights.' We optimize your Google Business Profile and build local citations so you own your neighborhood.",
    perks: ["Google Business Profile optimization", "Yelp, TripAdvisor, OpenTable citations", "'Near me' keyword targeting", "Google Posts & menu updates"]
  },
  {
    icon: Globe,
    title: "Multi-Location Support",
    description: "One unified platform for all your Houston locations. Separate menus, hours, and ordering per location — all managed from one dashboard. Perfect for growing Houston restaurant groups.",
    perks: ["Per-location menu management", "Centralized order dashboard", "Location finder with maps", "Consistent branding across locations"]
  },
  {
    icon: Camera,
    title: "Food Photography Galleries",
    description: "Houston diners eat with their eyes first. We build visually stunning food galleries that showcase your dishes and your space — optimized for fast loading without sacrificing quality.",
    perks: ["Lazy-load image optimization", "Instagram feed integration", "Virtual restaurant tour", "Chef & team spotlight sections"]
  }
];

const caseStudies = [
  {
    restaurant: "La Paloma Taqueria, East End Houston",
    type: "Mexican Restaurant",
    before: "$0 in online ordering revenue — all walk-in and phone orders, losing lunch orders to delivery apps taking 28% commissions",
    after: "Launched direct ordering website — grew to $180,000/month in online orders within 8 months with zero commission fees",
    metrics: ["$180K/mo online orders", "0% commission", "8-month ramp-up"]
  },
  {
    restaurant: "Sakura Modern Japanese, Montrose",
    type: "Sushi & Japanese",
    before: "Beautiful restaurant, invisible online — barely 12 OpenTable reservations/week, relying on regulars only",
    after: "+280% reservation volume after Google Maps SEO and reservation website overhaul — booked out every Friday and Saturday 3 weeks in advance",
    metrics: ["+280% reservations", "Weekends fully booked", "Top 5 'sushi houston' ranking"]
  },
  {
    restaurant: "Lone Star BBQ Co. (8 Houston locations)",
    type: "BBQ Chain",
    before: "8 locations with 8 different websites, inconsistent menus online, no unified ordering platform, confusing customer experience",
    after: "Unified all 8 locations under one platform — online ordering revenue increased 340%, catering leads up 220%, consistent brand across all locations",
    metrics: ["+340% online revenue", "8 locations unified", "+220% catering inquiries"]
  },
  {
    restaurant: "Rolling Smoke BBQ Food Truck Fleet",
    type: "Food Truck",
    before: "4 food trucks with only Instagram presence — no website, customers didn't know schedule or how to find them or pre-order",
    after: "Mobile-first website with live location tracker, pre-ordering for events, and catering request form — booked solid 3 months in advance",
    metrics: ["4 trucks, 1 platform", "3-month booking backlog", "Catering revenue 5x"]
  }
];

const testimonials = [
  {
    name: "Carlos R.",
    role: "Owner",
    company: "La Paloma Taqueria, East End Houston",
    text: "Cardinal built us a direct ordering website and now we do $180,000 a month online without paying a single penny in commissions to DoorDash. In one year they paid for themselves 50 times over. Every Houston restaurant needs this.",
    rating: 5
  },
  {
    name: "Yuki T.",
    role: "Owner",
    company: "Sakura Modern Japanese, Montrose",
    text: "Our reservations went up 280% and we rank in the top 5 for sushi in Houston now. The website is absolutely beautiful — customers compliment the design before they even walk in. Worth every penny.",
    rating: 5
  },
  {
    name: "Bobby M.",
    role: "Founder",
    company: "Lone Star BBQ Co., Houston",
    text: "Managing 8 Houston BBQ locations used to be a website nightmare. Cardinal built one platform that handles all of them seamlessly. Our online ordering revenue grew 340% and catering inquiries doubled. Exceptional work.",
    rating: 5
  },
  {
    name: "Deja W.",
    role: "Owner & Pitmaster",
    company: "Rolling Smoke BBQ Food Trucks",
    text: "I never thought a food truck needed a professional website. Now my 4 trucks are booked solid 3 months ahead and we do major corporate catering events we never would have found without Cardinal's website. Game changer.",
    rating: 5
  }
];

const faqs = [
  {
    question: "How much does a restaurant website cost in Houston?",
    answer: "Restaurant website costs in Houston range from $3,500 for a simple menu and contact site to $15,000+ for a full online ordering platform with multi-location support. Cardinal Consulting's restaurant packages: Menu & Presence ($3,500) — beautiful menu, hours, contact, Google Maps optimization; Order-Ready ($7,500) — adds direct online ordering with zero commission fees; Restaurant Pro ($12,000+) — multi-location, reservation integration, catering portal, and full local SEO. The direct ordering system typically pays for itself in the first 2–3 months by eliminating third-party delivery app commissions."
  },
  {
    question: "What online ordering platforms do you integrate with?",
    answer: "We integrate with all major ordering platforms and also build custom zero-commission ordering systems. We work with Toast POS, Square for Restaurants, Olo, ChowNow, and Flipdish for direct ordering. For reservation systems, we integrate OpenTable, Resy, SevenRooms, and Tock. We also build fully custom ordering systems that are 100% owned by your restaurant with no monthly fees or commissions — ideal for Houston restaurants doing $30,000+ per month in online orders where commissions are a significant cost."
  },
  {
    question: "How do I rank on Google Maps for Houston restaurant searches?",
    answer: "Ranking on Google Maps for Houston restaurant searches requires: a fully optimized Google Business Profile with accurate NAP, menu photos, hours, and regular Google Posts; consistent citations on Yelp, TripAdvisor, OpenTable, and Yelp; a fast, mobile-first website with location-specific content; structured data schema markup for restaurants including menu, cuisine type, price range, and reservations; a proactive Google review generation strategy; and neighborhood-specific content like 'best tacos in Montrose' or 'sushi restaurant Midtown Houston.' We've ranked Houston restaurants in the top 3 for competitive searches within 3–5 months."
  },
  {
    question: "How easy is it to update my menu on my restaurant website?",
    answer: "Very easy. Every Cardinal restaurant website includes a content management system where you or your staff can update menu items, prices, descriptions, photos, hours, and specials without touching any code. Seasonal menu updates take 5–10 minutes. We also build seasonal menu scheduling so holiday menus go live automatically on the dates you set. If you'd rather we handle menu updates, our maintenance plan covers unlimited content updates for a flat monthly fee. Houston restaurant owners tell us the ease of menu updates is one of their favorite features."
  },
  {
    question: "Should I use delivery apps or build my own ordering system?",
    answer: "Both have a role, but the math strongly favors owning your ordering platform for regular customers. DoorDash, Uber Eats, and Grubhub charge 15–30% commission per order. If your Houston restaurant does $50,000/month in online orders, you're paying $7,500–$15,000/month in commissions. A custom ordering website costs a fraction of that annually. Our recommendation: use delivery apps for customer acquisition (new diners who discover you on the app), but convert those customers to your direct ordering website with loyalty incentives, packaging inserts, and '10% off your next direct order' promotions. Most Houston restaurants that implement this strategy shift 60–70% of their online orders to direct within 6 months."
  },
  {
    question: "How important is food photography for a restaurant website?",
    answer: "Extremely important. Studies show restaurant websites with professional food photography convert at 3–5x higher rates than sites with poor or stock images. In Houston's competitive dining scene — Montrose, Midtown, Heights, EaDo, Galleria — visual presentation is everything. We can recommend Houston food photographers who specialize in restaurant work, and we build your website to showcase those photos beautifully on all devices. Even for a casual taqueria or BBQ joint, good photography communicates freshness, quality, and authenticity. It's one of the highest-ROI investments a Houston restaurant can make."
  },
  {
    question: "Can you build a website for multiple Houston restaurant locations?",
    answer: "Yes — multi-location restaurant websites are a specialty. We build unified platforms that give each location its own page with unique hours, menus, phone numbers, and ordering systems, while maintaining consistent branding. Customers can find the nearest location, see that location's current specials, and order directly from that location. From an SEO perspective, each location page ranks independently for its neighborhood — so 'BBQ Katy TX' and 'BBQ The Woodlands' are separate optimized pages. We've built multi-location platforms for Houston restaurant groups ranging from 2 to 20+ locations."
  },
  {
    question: "How long does it take to build a restaurant website in Houston?",
    answer: "Timeline for Houston restaurant websites: Simple menu and presence site — 1–2 weeks. Online ordering site — 3–4 weeks (includes payment gateway setup, menu build, and ordering flow testing). Full-featured multi-location platform with reservation integration — 5–8 weeks. We can do emergency restaurant website launches in 72 hours for restaurants that have a grand opening, press coverage, or urgent need. We build using an iterative process so you have a working version to review after week 1 and provide feedback throughout."
  }
];

const neighborhoods = [
  "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring",
  "League City", "Pasadena", "Conroe", "Friendswood", "Bellaire", "River Oaks"
];

const relatedServices = [
  { title: "Houston Web Design", description: "Custom website design for all Houston businesses — mobile-first, conversion-focused.", href: "/houston-web-design", label: "Web Design" },
  { title: "Houston SEO", description: "Rank #1 on Google for your restaurant's most important local search terms.", href: "/houston-seo", label: "SEO" },
  { title: "Digital Marketing", description: "Social media, email campaigns, and digital ads to fill tables every night.", href: "/services/digital-marketing", label: "Marketing" },
  { title: "Houston SEO Company", description: "Full-service SEO agency for Houston businesses ready to dominate local search.", href: "/houston-seo-company", label: "SEO Company" }
];

const generateSchemas = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Restaurant Website Design Houston TX",
    "alternateName": ["Food Ordering Website Houston", "Restaurant Web Design Houston", "Online Ordering Website Houston"],
    "description": "Houston restaurant website design with zero-commission online ordering, OpenTable/Resy integration, Google Maps SEO, and mobile-first menus for the city's 10,000+ restaurants.",
    "url": "https://www.visitcardinal.com/houston-restaurant-website-design",
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
    "serviceType": "Restaurant Website Design"
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
      { "@type": "ListItem", "position": 3, "name": "Restaurant Website Design Houston", "item": "https://www.visitcardinal.com/houston-restaurant-website-design" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Restaurant Website Design Houston | Online Ordering & Reservation Websites Houston TX",
    "description": "Houston restaurant website design with online ordering, OpenTable/Resy integration, Google Maps SEO, and zero commission ordering for Houston's 10,000+ restaurants.",
    "url": "https://www.visitcardinal.com/houston-restaurant-website-design",
    "isPartOf": { "@type": "WebSite", "url": "https://www.visitcardinal.com", "name": "Cardinal Consulting" }
  };

  return [serviceSchema, faqSchema, breadcrumbSchema, webPageSchema];
};

export default function HoustonRestaurantWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Restaurant Website Design Houston | Online Ordering & Reservation Websites Houston TX"
        description="Houston restaurant website design with online ordering, OpenTable/Resy integration, Google Maps SEO, and zero commission ordering. 10,000+ Houston restaurants — stand out. Call (281) 901-7016."
        keywords={[
          "restaurant website design houston", "food ordering website houston", "restaurant website houston",
          "online ordering website houston", "menu website houston", "restaurant web design houston tx",
          "restaurant seo houston", "opentable integration houston", "houston restaurant marketing",
          "food delivery website houston", "resy integration houston", "restaurant google maps houston",
          "taqueria website houston", "sushi restaurant website houston", "bbq website houston",
          "food truck website houston", "houston restaurant online ordering", "zero commission ordering houston"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-restaurant-website-design"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Restaurant Website Design Agency — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Restaurant Website Design Houston —{' '}
                <span className="text-red-600">Online Ordering, Reservations & SEO That Fills Tables</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Houston has 10,000+ restaurants across Montrose, Midtown, Heights, EaDo, the Galleria, and beyond — representing every cuisine on earth. Your website needs to stand out, load fast on mobile, and convert hungry Houstonians into paying customers.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                We build Houston restaurant websites with zero-commission online ordering, real-time reservations, and Google Maps SEO — so you stop paying app commissions and start owning your customers.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free Restaurant Website Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["0% Commission Ordering", "OpenTable & Resy Integration", "Google Maps SEO Included", "Free Consultation"].map(badge => (
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
                  { value: "$180K", label: "Monthly Online Orders (Client Best)" },
                  { value: "0%", label: "Commission on Direct Orders" },
                  { value: "+280%", label: "Avg Reservation Increase" },
                  { value: "10K+", label: "Houston Restaurants We Compete In" }
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Restaurant Website Features</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Everything Houston Restaurants Need Online</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">From Montrose fine dining to Heights neighborhood taquerias — we build every type of Houston restaurant website.</p>
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston Restaurant Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Restaurants That Grew With Cardinal</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.restaurant} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.type}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{study.restaurant}</h3>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Restaurant Owners Love Cardinal</h2>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Restaurant Website Design Houston — FAQ</h2>
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
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Serving Houston Restaurants & Beyond</h2>
                <p className="text-gray-500">We build restaurant websites for every corner of the greater Houston metro area.</p>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Fill Your Tables & Stop Paying Commissions?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free restaurant website audit. We'll show you how to own your online ordering, rank higher on Google Maps, and grow your Houston restaurant.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free Restaurant Audit <ArrowRight className="w-4 h-4" />
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
