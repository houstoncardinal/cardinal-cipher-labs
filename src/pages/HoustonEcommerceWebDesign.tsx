import { ArrowRight, Check, Star, MapPin, Phone, Clock, Mail, ShoppingBag, CreditCard, TrendingUp, Package, Smartphone, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/seo-config";

const features = [
  {
    icon: ShoppingBag,
    title: "Shopify & WooCommerce Development",
    description: "Expert Shopify and WooCommerce development for Houston online stores. We build custom themes, migrate existing stores, and optimize for conversion — not just appearance.",
    perks: ["Custom Shopify theme development", "WooCommerce on WordPress", "Migration from any platform", "Custom checkout flows"]
  },
  {
    icon: TrendingUp,
    title: "Custom Checkout Optimization",
    description: "The average ecommerce checkout abandonment rate is 70%. We reduce that with optimized checkout flows, trust signals, and smart UX proven to increase Houston store conversions.",
    perks: ["One-page checkout design", "Guest checkout optimization", "Cart abandonment recovery", "A/B tested trust signals"]
  },
  {
    icon: Search,
    title: "Product SEO & Schema Markup",
    description: "Get your Houston products ranking in Google Shopping and organic results. Product schema, category page optimization, and long-tail keyword strategy that drives qualified buyers.",
    perks: ["Product schema (Price, Availability)", "Google Shopping feed setup", "Category page SEO", "Long-tail keyword targeting"]
  },
  {
    icon: CreditCard,
    title: "Payment Gateway Integration",
    description: "Stripe, Square, PayPal, Affirm, AfterPay — we integrate all major payment gateways and buy-now-pay-later options that Houston shoppers expect and trust.",
    perks: ["Stripe & Square integration", "Affirm & Klarna BNPL", "ACH & wire for B2B", "Tax calculation (TaxJar/Avalara)"]
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Real-time inventory sync across your Houston storefront, warehouse, and any third-party marketplaces. We integrate with ShipStation, Fishbowl, and custom inventory systems.",
    perks: ["ShipStation integration", "Multi-warehouse inventory", "Low stock alerts", "Amazon/eBay channel sync"]
  },
  {
    icon: Smartphone,
    title: "Mobile Commerce Optimization",
    description: "Over 60% of Houston ecommerce traffic is mobile. We build mobile-first stores with swipe-friendly product galleries, fast load times, and thumb-optimized checkout flows.",
    perks: ["Mobile-first product galleries", "Apple Pay & Google Pay", "Progressive Web App option", "Core Web Vitals 90+ score"]
  }
];

const caseStudies = [
  {
    store: "Luna Boutique — Galleria Area Fashion",
    industry: "Apparel & Accessories",
    before: "Shopify starter template with $12,000/month in revenue — poor mobile experience, no SEO strategy, abandoned cart rate over 80%",
    after: "Custom Shopify redesign with checkout optimization — grew to $89,000/month in 9 months, abandoned cart recovery generates $8,000/month additional revenue",
    metrics: ["$12K to $89K/month", "Abandoned cart recovery", "-35% cart abandonment rate"]
  },
  {
    store: "Texas Trail Outdoor Gear, The Woodlands",
    industry: "Outdoor & Sporting Goods",
    before: "WooCommerce store with slow load times (8 seconds), no product SEO, ranking nowhere for category keywords",
    after: "Rebuilt on optimized WooCommerce platform — organic traffic grew 641% in 12 months, now top 3 for major outdoor gear categories",
    metrics: ["+641% organic traffic", "Load time: 8s to 1.2s", "Top 3 category rankings"]
  },
  {
    store: "Lone Star Provisions — Texas Food Brand",
    industry: "Food & Specialty Products",
    before: "Small-batch Texas food brand selling locally at markets only — no ecommerce presence, struggling to scale beyond Houston",
    after: "Custom ecommerce site with subscription model — 5x revenue growth in year one, shipping nationwide, featured in Houston Chronicle",
    metrics: ["5x revenue growth", "Nationwide shipping", "Subscription model launched"]
  },
  {
    store: "Gulf Coast Supply Co. — B2B Wholesale",
    industry: "Industrial & Wholesale",
    before: "Energy sector industrial supplier taking orders by phone and fax only — inefficient, prone to errors, limiting growth",
    after: "Custom B2B wholesale portal with tiered pricing, purchase order management, and account-based ordering — $2.4M in first-year online orders",
    metrics: ["$2.4M year-1 online orders", "B2B portal launched", "Order errors eliminated"]
  }
];

const testimonials = [
  {
    name: "Maria L.",
    role: "Owner",
    company: "Luna Boutique, Houston Galleria",
    text: "Our ecommerce sales increased from $12,000 to $89,000 per month after Cardinal redesigned our Shopify store. The checkout optimization alone recovered thousands in abandoned carts every month. Best investment our boutique has ever made.",
    rating: 5
  },
  {
    name: "Ryan P.",
    role: "Founder",
    company: "Texas Trail Outdoor Gear, The Woodlands",
    text: "641% organic traffic growth in 12 months. Our WooCommerce store went from invisible to the top 3 in every product category we compete in. Cardinal understands ecommerce SEO better than any agency we've worked with.",
    rating: 5
  },
  {
    name: "Tamara B.",
    role: "CEO",
    company: "Lone Star Provisions, Houston",
    text: "Cardinal turned our local Texas food brand into a nationwide ecommerce business. The subscription model they built keeps our customers coming back every month. Revenue is 5x what it was before and we ship to all 50 states now.",
    rating: 5
  },
  {
    name: "Frank O.",
    role: "President",
    company: "Gulf Coast Supply Co., Houston",
    text: "We were a phone-and-fax company for 30 years. Cardinal built us a B2B wholesale portal and we did $2.4 million in online orders in the first year. The ROI is extraordinary and our operations team actually has less work now.",
    rating: 5
  }
];

const faqs = [
  {
    question: "Should I use Shopify, WooCommerce, or a custom ecommerce platform?",
    answer: "The right platform depends on your Houston business's complexity, budget, and growth plans. Shopify is best for product-focused retailers who want a fast launch with less maintenance — ideal for Houston boutiques, gift shops, and brands doing under $1M/year. WooCommerce on WordPress is best for businesses that need deep customization, content marketing integration, and control — ideal for Houston businesses with complex catalogs or strong SEO content strategies. Custom platforms are best for B2B wholesale, marketplace models, or businesses with unique requirements that Shopify and WooCommerce can't handle. Cardinal Consulting builds all three — we'll recommend the right one for your specific Houston business after a free consultation."
  },
  {
    question: "How much does an ecommerce website cost in Houston?",
    answer: "Ecommerce website costs in Houston: Shopify store setup (custom theme, product import, payment gateway) — $4,000–$12,000. WooCommerce store (custom theme, full optimization, SEO) — $6,000–$18,000. Custom ecommerce platform — $25,000–$100,000+. B2B wholesale portal — $15,000–$50,000. All packages include mobile optimization, payment gateway integration, and Google Analytics setup. Most Houston ecommerce stores built by Cardinal see positive ROI within 6–12 months from increased conversion rates, recovered abandoned carts, and improved Google rankings. We offer monthly payment plans for qualifying Houston businesses."
  },
  {
    question: "How long does it take to build an ecommerce website?",
    answer: "Ecommerce website timelines at Cardinal Consulting: Simple Shopify store (under 50 products) — 2–3 weeks. Full Shopify or WooCommerce store with custom design and SEO — 4–6 weeks. Large catalog stores (500+ SKUs) — 6–10 weeks. Custom B2B portal — 8–16 weeks. We can launch a functional ecommerce store in 72 hours for Houston businesses with urgent go-live needs (like a holiday sale or product launch). Standard timelines include design approval, development, product import, payment testing, and go-live support."
  },
  {
    question: "What payment gateways can you integrate?",
    answer: "We integrate all major payment gateways for Houston ecommerce stores: Stripe (credit/debit cards, ACH, bank transfers), Square (ideal for businesses with physical Houston locations), PayPal (consumer trust, international payments), Authorize.Net (enterprise and B2B), and buy-now-pay-later options including Affirm, Klarna, AfterPay, and Sezzle. For Houston B2B wholesale stores, we also integrate Net 30/Net 60 payment terms, purchase order workflows, and ACH payment collection. Texas sales tax collection is handled automatically through TaxJar or Avalara integration."
  },
  {
    question: "Can you integrate my ecommerce site with my inventory system?",
    answer: "Yes. We integrate Houston ecommerce stores with all major inventory and fulfillment systems: ShipStation (multi-carrier shipping), ShipBob and Flexport (3PL fulfillment), Fishbowl (manufacturing inventory), QuickBooks and Xero (accounting sync), and custom ERP systems. For Houston businesses with physical retail locations, we sync inventory between your online store and point-of-sale systems (Square, Shopify POS, Lightspeed) so you never oversell. Multi-warehouse support is available for Houston businesses with multiple fulfillment locations."
  },
  {
    question: "How do you optimize product pages for Google?",
    answer: "Product page SEO for Houston ecommerce stores is a specialty. We implement: Product schema markup (name, price, availability, review aggregates) so your products appear in Google Shopping rich results; keyword-optimized product titles and descriptions targeting how Houston shoppers actually search; category page SEO with topical authority content; internal linking between related products and categories; image alt text optimization; page speed optimization so product pages load under 2 seconds; and FAQ sections on high-value product pages. We've grown Houston ecommerce organic traffic by 400–640% within 12 months of implementing this strategy."
  },
  {
    question: "What is abandoned cart recovery and how does it work?",
    answer: "Abandoned cart recovery automatically sends emails or SMS messages to shoppers who added products to their cart but didn't complete checkout. It's one of the highest-ROI features in ecommerce — typically recovering 5–15% of abandoned carts, which for a Houston store doing $50,000/month could mean $2,500–$7,500 in additional monthly revenue. We set up a 3-email sequence: an immediate reminder (within 1 hour), a follow-up with a discount offer (24 hours), and a final reminder (72 hours). We also implement exit-intent popups that capture email addresses before a shopper leaves. Combined, these strategies significantly reduce revenue lost from shopping cart abandonment."
  },
  {
    question: "Can Cardinal help us scale from a local Houston store to selling nationally?",
    answer: "Yes — scaling Houston ecommerce businesses nationally is one of our core specialties. We've helped Houston food brands, Texas merchandise companies, apparel boutiques, and specialty retailers grow from local to national. The strategy involves: building a website architecture that supports national SEO (state-level landing pages, regional targeting), implementing nationwide shipping rates and fulfillment partners like ShipBob or ShipStation, adding trust signals for out-of-state buyers (reviews, return policy prominence, customer photos), and paid advertising expansion through Google Shopping and Meta ads to reach target demographics nationally. Several of our Houston clients are now selling in all 50 states."
  }
];

const neighborhoods = [
  "The Woodlands", "Sugar Land", "Katy", "Pearland", "Cypress", "Spring",
  "League City", "Pasadena", "Conroe", "Friendswood", "Bellaire", "River Oaks"
];

const relatedServices = [
  { title: "Houston Web Design", description: "Custom website design for Houston businesses — built to rank and convert visitors.", href: "/houston-web-design", label: "Web Design" },
  { title: "Digital Marketing", description: "Google Shopping, Meta ads, and email marketing to drive Houston ecommerce sales.", href: "/services/digital-marketing", label: "Marketing" },
  { title: "Houston SEO Company", description: "Full-service SEO for Houston ecommerce stores — product pages to category SEO.", href: "/houston-seo-company", label: "SEO Company" },
  { title: "Houston Web Developer", description: "Expert web development for complex ecommerce requirements and custom integrations.", href: "/houston-web-developer", label: "Web Dev" }
];

const generateSchemas = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "eCommerce Website Design Houston TX",
    "alternateName": ["Shopify Developer Houston", "WooCommerce Houston", "Online Store Design Houston"],
    "description": "Houston's top ecommerce website design agency. Shopify, WooCommerce, and custom stores with checkout optimization, product SEO, and Houston-to-nationwide fulfillment.",
    "url": "https://www.visitcardinal.com/houston-ecommerce-website-design",
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
    "serviceType": "eCommerce Website Design"
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
      { "@type": "ListItem", "position": 3, "name": "eCommerce Website Design Houston", "item": "https://www.visitcardinal.com/houston-ecommerce-website-design" }
    ]
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "eCommerce Website Design Houston | Shopify & WooCommerce Developer Houston TX",
    "description": "Houston's top ecommerce website design agency. Shopify, WooCommerce, and custom stores with checkout optimization, product SEO, and Houston-to-nationwide fulfillment.",
    "url": "https://www.visitcardinal.com/houston-ecommerce-website-design",
    "isPartOf": { "@type": "WebSite", "url": "https://www.visitcardinal.com", "name": "Cardinal Consulting" }
  };

  return [serviceSchema, faqSchema, breadcrumbSchema, webPageSchema];
};

export default function HoustonEcommerceWebDesignPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="eCommerce Website Design Houston | Shopify & WooCommerce Developer Houston TX"
        description="Houston's top ecommerce website design agency. Shopify, WooCommerce, and custom stores with checkout optimization, product SEO, and Houston-to-nationwide fulfillment. Free audit — (281) 901-7016."
        keywords={[
          "ecommerce website design houston", "shopify developer houston", "woocommerce houston",
          "online store houston", "ecommerce development houston", "shopify store houston",
          "woocommerce developer houston tx", "ecommerce web design houston", "online store design houston",
          "houston ecommerce agency", "shopify expert houston", "custom ecommerce houston",
          "b2b ecommerce houston", "product website houston", "houston online store builder",
          "ecommerce seo houston", "checkout optimization houston", "houston ecommerce consultant"
        ]}
        schemas={generateSchemas()}
        url="https://www.visitcardinal.com/houston-ecommerce-website-design"
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
                <span className="text-sm font-semibold text-gray-900">Houston's #1 eCommerce Website Design Agency — 4.9★ (127 Reviews)</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[1.1] mb-6">
                eCommerce Website Design Houston —{' '}
                <span className="text-red-600">Shopify, WooCommerce & Custom Online Stores</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg lg:text-xl text-gray-500 max-w-2xl mb-4">
                Houston's diverse economy — energy sector merchandise, Texas-brand products, Galleria boutiques, and food brands — deserves ecommerce stores built to convert and scale. Cardinal Consulting builds Houston online stores from $12K/month to $89K/month and beyond.
              </motion.p>

              <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-gray-400 max-w-2xl mb-10">
                Shopify, WooCommerce, or fully custom — we build ecommerce stores optimized for conversions, product SEO, and Houston-to-nationwide growth.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 mb-12">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                  Get Free eCommerce Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+12819017016" className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                  <Phone className="w-4 h-4" /> Call (281) 901-7016
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                {["Shopify & WooCommerce Experts", "Google Shopping Optimization", "Checkout Abandonment Recovery", "Free Consultation"].map(badge => (
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
                  { value: "+641%", label: "Best Organic Traffic Growth" },
                  { value: "$89K", label: "Monthly Revenue (Client Best)" },
                  { value: "-35%", label: "Cart Abandonment Reduction" },
                  { value: "3 Wks", label: "Fastest Store Launch" }
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">eCommerce Services</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Everything Your Houston Online Store Needs</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">From Galleria boutiques to B2B industrial suppliers — we build ecommerce for every type of Houston business.</p>
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
                <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-3 block">Houston eCommerce Results</span>
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston Online Stores Cardinal Helped Scale</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div key={study.store} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white rounded-2xl p-8 border border-gray-100">
                    <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">{study.industry}</span>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">{study.store}</h3>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">Houston eCommerce Owners Trust Cardinal</h2>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-gray-900 mb-4">eCommerce Website Design Houston — FAQ</h2>
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
                <h2 className="font-serif text-2xl lg:text-4xl text-gray-900 mb-4">Serving Houston eCommerce Businesses & Beyond</h2>
                <p className="text-gray-500">We build online stores for businesses across the entire greater Houston metro.</p>
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
                <h2 className="font-serif text-3xl lg:text-5xl text-white mb-6">Ready to Grow Your Houston Online Store?</h2>
                <p className="text-gray-400 max-w-2xl mx-auto mb-10">Get a free ecommerce audit. We'll identify exactly what's holding your Houston store back from its full revenue potential.</p>
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-colors">
                    Get Free eCommerce Audit <ArrowRight className="w-4 h-4" />
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
