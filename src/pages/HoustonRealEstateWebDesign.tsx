import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, Home, Search, Users, Video, TrendingUp, Globe, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/seo-config";

const features = [
  {
    icon: Search,
    title: "IDX MLS Integration",
    description: "Real-time MLS property search directly on your website. Buyers search Houston listings without leaving your site — no redirects to HAR.com, Zillow, or competitor portals.",
    perks: ["HAR MLS real-time feed", "Advanced search filters (price, beds, neighborhood)", "Saved search & alerts for buyers", "Mobile-optimized map search"]
  },
  {
    icon: Users,
    title: "Lead Capture & CRM Integration",
    description: "Every visitor who searches properties is a potential client. We build lead capture at every touchpoint and integrate with your CRM — Follow Up Boss, Salesforce, kvCORE, or HubSpot.",
    perks: ["Follow Up Boss & kvCORE integration", "Behavioral lead scoring", "Auto-response email sequences", "Buyer registration gating"]
  },
  {
    icon: Home,
    title: "Property Search & Filters",
    description: "Sophisticated property search with filters for price range, neighborhood, school district, HOA, waterfront, lot size, and any Houston-specific criteria buyers care about.",
    perks: ["School district filtering", "Houston neighborhood maps", "Price history displays", "Days on market tracking"]
  },
  {
    icon: Video,
    title: "Virtual Tour Integration",
    description: "Matterport 3D tours, video walkthroughs, and drone footage embedded directly into property pages. Houston luxury buyers expect virtual access before scheduling showings.",
    perks: ["Matterport 3D integration", "YouTube video embed", "Drone footage galleries", "Virtual open house hosting"]
  },
  {
    icon: Globe,
    title: "Agent & Team Profiles",
    description: "Professional agent profile pages with production stats, neighborhoods served, client reviews, and direct contact — so buyers connect with the right agent immediately.",
    perks: ["Production stats display", "Languages spoken", "Neighborhoods of expertise", "Direct booking for consultations"]
  },
  {
    icon: TrendingUp,
    title: "Houston Neighborhood Pages",
    description: "Dedicated pages for River Oaks, The Woodlands, Katy, Sugar Land, Memorial, and every Houston neighborhood — each ranking independently for neighborhood-specific buyer searches.",
    perks: ["Per-neighborhood market stats", "School information integration", "Local business highlights", "Neighborhood SEO optimization"]
  }
];

const caseStudies = [
  {
    client: "The Whitmore Real Estate Team, Houston",
    type: "Residential Team",
    before: "8 buyer leads per month from website — most leads came from Zillow and HAR.com referrals, paying $1,800/month in lead fees",
    after: "67 organic buyer leads/month from own website — eliminated $1,800/month lead fees, now ranking top 3 for Houston buyer searches",
    metrics: ["8 to 67 leads/month", "Eliminated Zillow fees", "Top 3 Houston buyer rankings"]
  },
  {
    client: "Houston Heights Property Management",
    type: "Property Management",
    before: "Managing 85 units manually — no online tenant portal, maintenance requests by phone, owner reporting by email spreadsheet",
    after: "Online platform managing 200+ units — tenant portal, online maintenance requests, owner dashboards, vacancy marketing automated",
    metrics: ["85 to 200+ units managed", "Tenant portal launched", "Online leasing automations"]
  },
  {
    client: "Sterling Luxury Group, River Oaks",
    type: "Luxury Real Estate",
    before: "Competing with well-established luxury brokers in River Oaks — no Google presence for high-value keywords, losing clients to HAR.com browsing",
    after: "Top 3 Google ranking for 'River Oaks homes for sale' and 'luxury real estate Houston' — $4.2M in closed transactions attributed to website leads in year one",
    metrics: ["Top 3 River Oaks SEO", "$4.2M in web-sourced closings", "#1 luxury Houston ranking"]
  },
  {
    client: "Meridian Commercial Real Estate, Houston",
    type: "Commercial Real Estate",
    before: "Commercial firm with no digital presence — all deals through broker network and referrals, missing investor inquiries from Google",
    after: "Commercial listing portal launched — 28 new investor inquiries in first 90 days, first $3.8M commercial deal closed from website lead",
    metrics: ["28 investor inquiries (90 days)", "$3.8M web-sourced deal", "Commercial listing portal"]
  }
];

const testimonials = [
  {
    name: "Ashley W.",
    role: "Team Lead",
    company: "The Whitmore Real Estate Team, Houston",
    text: "We went from paying Zillow $1,800 a month for leads to generating 67 leads a month from our own website — for free. Cardinal's IDX integration and SEO work completely transformed our business. Best real estate website investment in Houston.",
    rating: 5
  },
  {
    name: "Derek F.",
    role: "Owner",
    company: "Houston Heights Property Management",
    text: "Our tenant portal went from 0 to handling 200+ units seamlessly. Online maintenance requests, owner dashboards, automated leasing — Cardinal built a system that runs our property management business on autopilot.",
    rating: 5
  },
  {
    name: "Patricia S.",
    role: "Broker/Owner",
    company: "Sterling Luxury Group, River Oaks",
    text: "We rank top 3 for luxury Houston searches and closed $4.2 million in transactions from website leads in the first year. Cardinal understands the Houston luxury real estate market and built a website that reflects our brand perfectly.",
    rating: 5
  },
  {
    name: "Robert M.",
    role: "Principal Broker",
    company: "Meridian Commercial Real Estate, Houston",
    text: "Cardinal built us a commercial listing portal that generated 28 investor inquiries in 90 days. Our first website-sourced deal was a $3.8 million transaction. The ROI is staggering. Every commercial broker in Houston needs this.",
    rating: 5
  }
];

const faqs = [
  {
    question: "What is IDX and how does it work on my real estate website?",
    answer: "IDX (Internet Data Exchange) is a technology that allows licensed real estate agents to display MLS (Multiple Listing Service) listings on their own website. In Houston, this means your website can show all HAR (Houston Association of Realtors) MLS listings in real time — buyers search properties directly on your site instead of leaving for Zillow, HAR.com, or competitor sites. Cardinal Consulting integrates HAR IDX so that every search, save, and inquiry goes to you. IDX also gives your website massive SEO value — every property listing becomes an indexed page that Google can rank for address-specific searches."
  },
  {
    question: "How much does a real estate website cost in Houston?",
    answer: "Real estate website costs in Houston: Agent website with IDX — $4,500–$9,000. Team website with full IDX, lead capture, and CRM — $8,000–$18,000. Brokerage website with team profiles and advanced features — $15,000–$35,000. Property management platform — $12,000–$40,000 depending on tenant portal complexity. All packages include Houston HAR IDX integration, lead capture optimization, and Google Analytics. Unlike Placester or Real Geeks subscription platforms that charge $300–$600/month forever, Cardinal builds websites you own outright. The SEO value alone typically delivers ROI within the first 2–3 transactions."
  },
  {
    question: "What is the difference between IDX and VOW for real estate websites?",
    answer: "IDX (Internet Data Exchange) allows you to display a subset of MLS listings on your website — the listings that participating brokerages have authorized to be shown. VOW (Virtual Office Website) goes further — it allows buyers to access the full MLS database after registering, including information not available on public IDX feeds like days on market history, price reduction history, and sold data. VOW requires a real estate license and a formal agreement with HAR. Cardinal Consulting builds both IDX and VOW-compliant real estate websites. For most Houston agents and teams, IDX is sufficient. For brokerages competing with Zillow and HAR.com, VOW provides a competitive advantage."
  },
  {
    question: "How long does it take to build a real estate website with IDX?",
    answer: "Cardinal Consulting delivers most Houston real estate websites in 3–6 weeks. A solo agent IDX site — 2–3 weeks. Team website with custom design, full IDX, lead capture, and CRM integration — 4–6 weeks. Full brokerage platform with team profiles, market reports, and advanced IDX — 6–10 weeks. HAR IDX approval from the Houston Association of Realtors takes 3–5 business days after submission — we handle this process as part of your project. We can expedite timelines for agents with upcoming relaunches or market events."
  },
  {
    question: "What are the best lead capture strategies for Houston real estate websites?",
    answer: "The highest-converting lead capture strategies for Houston real estate websites are: (1) Buyer registration gates — require sign-up after 3–5 property views to continue searching; (2) Home valuation tools — 'What is my home worth in [Houston neighborhood]?' captures seller leads; (3) Neighborhood market reports — email gated reports on River Oaks, The Woodlands, Katy median prices; (4) Saved search and alerts — buyers register to save searches and receive new listing notifications; (5) Contact forms on every listing page — 'Schedule a Showing' and 'Ask a Question' forms with low friction. Cardinal Consulting implements all of these for Houston real estate websites and integrates captures directly into CRM workflows."
  },
  {
    question: "Should I use HAR.com instead of building my own website?",
    answer: "HAR.com is an excellent resource that drives significant traffic — but it ranks HAR, not you. Your profile on HAR.com builds HAR's brand, not yours. When buyers search 'Houston homes for sale,' they find HAR.com and choose from multiple agents competing on the same platform. Your own website ranks your name, your brand, your neighborhood expertise, and your reviews. The agents consistently closing the most Houston deals have both a strong HAR presence AND a high-ranking independent website that captures buyers who search specifically for an agent, not just a listing database. Both are important — own your platform while leveraging HAR's traffic."
  },
  {
    question: "How do you optimize a real estate website for Houston neighborhood searches?",
    answer: "Houston neighborhood SEO requires dedicated landing pages for each neighborhood you serve — River Oaks homes for sale, The Woodlands real estate, Katy TX homes, Sugar Land luxury homes, and Memorial Houston real estate. Each page needs: unique market statistics updated monthly (median price, days on market, price per square foot), neighborhood guide content (schools, amenities, commute times), IDX search filtered to that neighborhood, sold data showcasing your expertise, and local buyer testimonials from that area. Cardinal Consulting builds this neighborhood page infrastructure for Houston realtors and it consistently produces top-3 Google rankings for neighborhood-specific buyer searches within 4–6 months."
  },
  {
    question: "What is the difference between a single agent, team, and brokerage website?",
    answer: "Single agent websites focus on one agent's personal brand, neighborhood expertise, and client reviews — usually 5–10 pages plus IDX. Team websites add individual agent profiles, team production stats, and a shared lead routing system — the lead goes to the team, not just one agent. Brokerage websites are more complex: they include all agent profiles, brokerage-level branding, recruitment pages, and sometimes separate IDX feeds per agent. The architectural and SEO decisions differ significantly between these types. Cardinal Consulting builds all three for Houston real estate businesses and will recommend the right approach based on your business model and growth goals."
  }
];

const neighborhoods = [
  "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring",
  "League City", "Pasadena", "Conroe", "Friendswood", "Bellaire", "River Oaks"
];

const relatedServices = [
  { title: "Houston SEO", description: "Rank #1 in Houston for real estate and neighborhood-specific buyer searches.", href: "/houston-seo", label: "SEO" },
  { title: "Houston Web Design", description: "Custom website design for Houston businesses — built to rank and convert.", href: "/houston-web-design", label: "Web Design" },
  { title: "Construction Industry", description: "Websites for Houston home builders, contractors, and construction companies.", href: "/industry/construction", label: "Construction" },
  { title: "Houston Web Developer", description: "Expert web development for complex real estate platforms and IDX integrations.", href: "/houston-web-developer", label: "Web Dev" }
];

const generateSchemas = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Real Estate Website Design Houston TX",
    "alternateName": ["Realtor Website Houston", "IDX Website Houston", "Property Management Website Houston"],
    "description": "Houston's #1 real estate website design agency. IDX MLS integration, lead capture, property search, and SEO for realtors and property management companies.",
    "url": "https://www.visitcardinal.com/houston-real-estate-website-design",
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
    "serviceType": "Real Estate Website Design"
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
      { "@type": "ListItem", "position": 3, "name": "Real Estate Website Design Houston", "item": "https://www.visitcardinal.com/houston-real-estate-website-design" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Real Estate Website Design Houston | IDX Website & Realtor Website Houston TX",
    "description": "Houston's #1 real estate website design agency. IDX MLS integration, lead capture, property search, and SEO for realtors and property management companies.",
    "url": "https://www.visitcardinal.com/houston-real-estate-website-design",
    "isPartOf": { "@type": "WebSite", "url": "https://www.visitcardinal.com", "name": "Cardinal Consulting" }
  };

  return [serviceSchema, faqSchema, breadcrumbSchema, webPageSchema];
};

export default function HoustonRealEstateWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Real Estate Website Design Houston | IDX Website & Realtor Website Houston TX"
        description="Houston's #1 real estate website design agency. IDX MLS integration, lead capture, property search, and SEO for realtors and property management companies. Free consultation — (281) 901-7016."
        keywords={[
          "real estate website design houston", "realtor website houston", "IDX website houston",
          "property management website houston", "real estate agent website houston", "realtor web design houston tx",
          "houston IDX integration", "har mls website houston", "real estate seo houston",
          "property search website houston", "houston real estate website", "luxury real estate website houston",
          "commercial real estate website houston", "river oaks real estate website", "the woodlands realtor website",
          "real estate lead generation houston", "home valuation website houston", "property management platform houston"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-real-estate-website-design"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 Real Estate Website Design Agency — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                Real Estate Website Design Houston —{' '}
                <span className="text-red-600">IDX Integration, Lead Capture & MLS Listings</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Houston is one of America's largest real estate markets — River Oaks luxury estates, The Woodlands master-planned communities, Katy suburban growth, and Sugar Land family neighborhoods. Your website needs to rank, capture, and convert Houston home buyers and sellers.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                We build HAR MLS IDX-integrated real estate websites for Houston agents, teams, brokerages, and property management companies — all optimized to rank on Google and convert visitors into clients.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free Real Estate Website Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["HAR MLS IDX Integration", "Follow Up Boss & kvCORE", "Neighborhood SEO Pages", "Free Consultation"].map(badge => (
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
                  { value: "8→67", label: "Leads/Month (Client Result)" },
                  { value: "$4.2M", label: "Web-Sourced Closings (Client)" },
                  { value: "#1", label: "Neighborhood Rankings Achieved" },
                  { value: "HAR", label: "MLS IDX Integration Included" }
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Real Estate Website Features</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Everything Houston Realtors Need Online</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">From solo agents in Memorial to luxury brokerages in River Oaks — we build every type of Houston real estate website.</p>
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston Real Estate Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Realtors Cardinal Helped Dominate Online</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.client} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.type}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{study.client}</h3>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Realtors Trust Cardinal</h2>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Real Estate Website Design Houston — FAQ</h2>
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
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Serving Houston Real Estate Professionals & Beyond</h2>
                <p className="text-gray-500">We build real estate websites for agents and brokerages across the entire greater Houston metro.</p>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Own Your Houston Real Estate Market Online?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free real estate website consultation and SEO analysis. We'll show you exactly how to generate more buyer and seller leads from Google.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free Real Estate Consultation <ArrowRight className="w-4 h-4" />
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
