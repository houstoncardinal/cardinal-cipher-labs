import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Clock, CheckCircle2, ArrowRight, Globe, MapPin,
  Check, Star, Phone, Shield, Zap, Wrench
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchemas,
} from "@/lib/schema-generators";

const supportTiers = [
  {
    name: "Essentials",
    price: "$299",
    period: "/mo",
    subtitle: "For Houston small businesses",
    description:
      "The foundational care plan for Houston small businesses that need reliable maintenance, security updates, and a team they can call when something goes wrong.",
    features: [
      "Up to 2 hours of support per month",
      "Same business-day response (8 hrs)",
      "Monthly security & plugin updates",
      "Weekly automated backups",
      "Uptime monitoring & alerts",
      "Monthly performance report",
      "Bug fixes & content tweaks",
      "Email & phone support",
    ],
    highlight: false,
  },
  {
    name: "Plus",
    price: "$499",
    period: "/mo",
    subtitle: "For growing Houston companies",
    description:
      "Expanded support for Houston businesses in fast-moving industries — oil & gas, real estate, medical practices — where downtime is simply not acceptable.",
    features: [
      "Up to 5 hours of support per month",
      "Priority 4-hour response guarantee",
      "Weekly security & plugin updates",
      "Daily automated backups",
      "Advanced uptime monitoring",
      "Core Web Vitals monitoring",
      "Emergency bug fixes included",
      "Dedicated support contact",
      "Monthly strategy call",
      "Phone, email & chat support",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "$799",
    period: "/mo",
    subtitle: "For Houston enterprises",
    description:
      "Full-coverage enterprise support for Houston companies that need near-instant response times, comprehensive monitoring, and proactive security posture management.",
    features: [
      "Up to 10 hours of support per month",
      "2-hour emergency response guarantee",
      "Daily security scans & hardening",
      "Real-time backups",
      "24/7 uptime & anomaly monitoring",
      "Performance optimization included",
      "Proactive security patching",
      "Dedicated account manager",
      "Bi-weekly strategy calls",
      "On-call weekend support",
      "SLA documentation available",
    ],
    highlight: false,
  },
];

const covered = [
  {
    icon: Zap,
    title: "Emergency Bug Fixes",
    description:
      "Something broke and customers are seeing errors? We jump on emergency bug fixes immediately — diagnosing the root cause, implementing a fix, and verifying resolution before closing the ticket. Houston businesses can't afford broken user experiences.",
  },
  {
    icon: Shield,
    title: "Security Patches & Hardening",
    description:
      "New vulnerabilities in WordPress, plugins, or dependencies are discovered every day. We apply critical security patches as soon as they're available, preventing exploits before hackers can target your Houston website. We also proactively harden configurations over time.",
  },
  {
    icon: Wrench,
    title: "Content Updates",
    description:
      "Need to update pricing, add a new team member, swap out a banner image, or post a blog article? Send us the request and we'll have it live — fast. No more waiting for a developer to be available for simple content changes.",
  },
  {
    icon: Clock,
    title: "Performance Issues",
    description:
      "Slow loading websites lose Houston customers. If your Core Web Vitals scores drop or pages start loading slowly, we diagnose and resolve the issue — whether it's server configuration, unoptimized images, bloated scripts, or database queries gone wrong.",
  },
  {
    icon: CheckCircle2,
    title: "Plugin & Dependency Updates",
    description:
      "Outdated plugins are the number-one cause of Houston website hacks. We stay on top of every update in your stack — testing compatibility in a staging environment before pushing to production so updates never break your live site.",
  },
  {
    icon: Phone,
    title: "Downtime Recovery",
    description:
      "Your website goes down and you lose every minute of visibility and revenue. Our uptime monitoring catches outages the moment they happen, and our team begins recovery immediately — restoring from backup, resolving hosting issues, or fixing the root cause fast.",
  },
];

const houstonBusinesses = [
  {
    sector: "Oil & Gas Companies",
    description:
      "Houston's energy sector is the backbone of the city's economy. Exploration companies, oilfield services firms, and clean energy startups operate at a pace where an offline website can mean missed RFPs, failed investor impressions, or disrupted B2B relationships. Our same-day support keeps Houston energy websites running 24/7.",
  },
  {
    sector: "Law Firms",
    description:
      "Downtown Houston law firms and suburban legal practices need websites that work flawlessly when potential clients are searching. A broken contact form or a crashed site during business hours means lost cases. Our priority support plans ensure Houston attorneys are always reachable online.",
  },
  {
    sector: "Medical Practices",
    description:
      "Houston medical practices — from Texas Medical Center specialists to neighborhood clinics — rely on online appointment booking, patient portals, and contact forms. Downtime or errors aren't just inconvenient, they can impact patient care. We provide same-day support tailored for healthcare websites.",
  },
  {
    sector: "Restaurants",
    description:
      "Houston's vibrant restaurant scene is driven by online visibility — reservations, online ordering, menus, and reviews. A broken order form on a Friday night or a crashed menu page during lunch rush costs real revenue. Our rapid response gets Houston restaurants back online fast.",
  },
  {
    sector: "Real Estate Agencies",
    description:
      "The Houston real estate market is one of the most competitive in the country. Realtors and property management companies depend on property listings, lead capture forms, and IDX integrations working perfectly around the clock. Our support plans protect Houston real estate websites every day of the year.",
  },
];

const houstonNeighborhoods = [
  "The Woodlands",
  "Sugar Land",
  "Katy",
  "Pearland",
  "Cypress",
  "Spring",
  "League City",
  "Pasadena",
  "Conroe",
  "Friendswood",
  "Bellaire",
  "River Oaks",
];

const testimonials = [
  {
    author: "Carlos M.",
    title: "Owner, Bayou Eats Restaurant Group — Midtown Houston, TX",
    body: "Our online ordering system crashed on a Saturday night during dinner service. Cardinal's team had it back online in under 2 hours. I called the support line and a real person answered. That kind of response is everything when you're running a restaurant. Best investment we've made.",
    rating: 5,
  },
  {
    author: "Jennifer L.",
    title: "Managing Broker, Houston Heights Realty — Heights, TX",
    body: "Our IDX integration broke on a Tuesday afternoon and property listings disappeared from our site. Cardinal diagnosed the issue within 30 minutes and had the fix deployed before the end of business day. We didn't lose a single lead. These guys are genuinely fast.",
    rating: 5,
  },
  {
    author: "Dr. Amir S.",
    title: "Medical Director, Clear Lake Family Medicine — Clear Lake, TX",
    body: "Our appointment booking form stopped working and we had no idea until a patient called to complain. Cardinal fixed it the same day and set up uptime monitoring so we'd never be caught off guard again. Their support plan is worth every penny for a medical practice.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "How fast do you respond to Houston website emergencies?",
    answer:
      "Our response time depends on your support tier. Essentials plan clients receive a same business-day response within 8 hours. Plus plan clients get a priority 4-hour response guarantee — our most popular option for Houston businesses in oil & gas, real estate, and medical practices that can't afford downtime. Pro plan clients receive a 2-hour emergency response guarantee with on-call weekend support. For website outages and critical emergencies, we treat every tier urgently and aim to begin triage immediately. Call us directly at (281) 901-7016 for the fastest response to a Houston website emergency.",
  },
  {
    question: "Do you provide 24/7 website support in Houston?",
    answer:
      "Our Pro plan includes on-call weekend support and uptime monitoring that runs 24 hours a day, 7 days a week — so we detect outages even outside of business hours and begin recovery immediately. Our Essentials and Plus plans include 24/7 automated uptime monitoring with immediate alerting, and our team is available during extended business hours for active support. For around-the-clock human response, the Pro plan at $799/month is the right fit. Houston businesses that truly cannot afford any downtime — including healthcare providers, e-commerce sites, and high-traffic service businesses — typically choose Pro.",
  },
  {
    question: "What Houston businesses need same-day web support?",
    answer:
      "Any Houston business where their website directly drives revenue or customer acquisition benefits from same-day support. This includes Houston restaurants that take online orders and reservations, medical practices that book appointments online, law firms that rely on contact forms for client intake, real estate agencies with live property listings and lead capture, oil & gas companies whose websites are their professional credibility in front of investors and enterprise clients, and e-commerce businesses where downtime means zero sales. If your website going offline for even a few hours would cost you money or clients, a same-day support plan is a business necessity — not a luxury. We serve all of these Houston industries and more.",
  },
  {
    question: "How do I get emergency website help in Houston TX?",
    answer:
      "The fastest way to get emergency website help in Houston is to call us directly at (281) 901-7016. Our support line connects you to a real team member — not a bot, not a ticket system. If you're already a support plan client, you'll reach your dedicated contact directly. If you're not yet on a plan, call us anyway — we offer emergency one-time support for Houston businesses in critical situations, and we can also onboard you to a care plan to prevent future emergencies. You can also reach us via the contact form at visitcardinal.com for non-urgent issues. Based in Houston TX, we're available to serve Houston businesses throughout Greater Houston, across Texas, and nationwide.",
  },
];

const relatedServices = [
  { label: "Houston Web Design", href: "/houston-web-design" },
  { label: "Houston Web Developer", href: "/houston-web-developer" },
  { label: "Rapid Delivery", href: "/rapid-delivery" },
  { label: "Web Development Services", href: "/services/web-development" },
  { label: "Houston SEO Company", href: "/houston-seo-company" },
  { label: "App Development Houston", href: "/houston-app-development" },
];

export default function SameDaySupport() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Same-Day Website Support Houston | Emergency Web Help Houston Texas",
      description:
        "Same-day website support for Houston businesses. 4-hour response guarantee, emergency bug fixes, security patches, downtime recovery, and 24/7 uptime monitoring. Serving oil & gas, law firms, medical practices, restaurants, and real estate agencies across Greater Houston TX.",
      url: `${siteConfig.url}/same-day-support`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Same-Day Website Support Houston", url: `${siteConfig.url}/same-day-support` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/same-day-support#service`,
      name: "Same-Day Website Support Houston — Emergency Web Help",
      description:
        "Same-day website support and emergency web help for Houston businesses. 4-hour response guarantee, bug fixes, security patches, performance issues, and downtime recovery. Serving Houston TX businesses in oil & gas, healthcare, legal, real estate, and restaurants.",
      provider: {
        "@type": "LocalBusiness",
        "@id": `${siteConfig.url}#organization`,
        name: "Cardinal Cipher Labs",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Houston",
          addressRegion: "TX",
          addressCountry: "US",
        },
        telephone: "+12819017016",
      },
      areaServed: [
        { "@type": "City", name: "Houston", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "The Woodlands" },
        { "@type": "City", name: "Sugar Land" },
        { "@type": "City", name: "Katy" },
        { "@type": "City", name: "Pearland" },
        { "@type": "State", name: "Texas" },
        { "@type": "Country", name: "United States" },
      ],
      offers: [
        {
          "@type": "Offer",
          name: "Essentials Support Plan",
          price: "299",
          priceCurrency: "USD",
          priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MON" },
        },
        {
          "@type": "Offer",
          name: "Plus Support Plan",
          price: "499",
          priceCurrency: "USD",
          priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MON" },
        },
        {
          "@type": "Offer",
          name: "Pro Support Plan",
          price: "799",
          priceCurrency: "USD",
          priceSpecification: { "@type": "UnitPriceSpecification", unitCode: "MON" },
        },
      ],
      serviceType: "Website Maintenance & Support",
    },
    ...generateFAQSchemas(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Same-Day Website Support Houston | Emergency Web Help Houston Texas"
        description="Same-day website support for Houston businesses. 4-hour response guarantee, emergency bug fixes, security patches, downtime recovery, and 24/7 monitoring. Serving oil & gas, law firms, medical practices, restaurants, and real estate agencies. Call (281) 901-7016."
        keywords={[
          "same day website support houston",
          "emergency web support houston texas",
          "website maintenance houston",
          "24 hour web support houston",
          "emergency website help houston",
          "website support houston tx",
          "website maintenance houston texas",
          "same day web help houston",
          "website down houston",
          "urgent website fix houston",
          "houston website emergency support",
          "web maintenance houston tx",
          "website care plans houston",
          "website bug fix houston",
          "houston website downtime recovery",
          "web support houston small business",
          "website monitoring houston texas",
          "rapid website support houston",
        ]}
        url={`${siteConfig.url}/same-day-support`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>

          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Same-Day Website Support — Houston TX
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Same-Day Website Support for Houston Businesses —{" "}
                  <span className="text-red-600">Response in 4 Hours</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
                >
                  Emergency bug fixes. Security patches. Downtime recovery. Content updates. Real
                  help from a real Houston team — not a ticket queue, not a bot, not a 3-day wait.
                  We respond the same day, guaranteed.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-base text-gray-500 mb-10 max-w-xl mx-auto"
                >
                  Serving Houston's oil & gas companies, law firms, medical practices, restaurants,
                  real estate agencies, and every business in between — across Greater Houston TX,
                  Texas-wide, and nationwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Get Same-Day Help <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <a href="tel:281-901-7016">
                    <Button size="lg" variant="outline">
                      Call (281) 901-7016
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="py-12 bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-20">
                {[
                  { icon: CheckCircle2, value: "500+", label: "Projects Supported" },
                  { icon: Clock, value: "4-Hr", label: "Response Guarantee" },
                  { icon: Star, value: "4.9★", label: "Client Rating" },
                  { icon: MapPin, value: "Houston TX", label: "Based & Serving Nationwide" },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-7 h-7 text-red-400 mx-auto mb-2" />
                    <div className="font-serif text-2xl md:text-3xl font-bold text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Support Tiers */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Houston Website Support Plans
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Three tiers designed for Houston businesses of every size — from solo entrepreneurs
                  in Spring to enterprise companies in the Energy Corridor. All plans include same-day
                  response, real human support, and 24/7 uptime monitoring.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {supportTiers.map((tier, i) => (
                  <motion.div
                    key={tier.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    {tier.highlight && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                        <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <LuxuryCard
                      className={`p-8 h-full flex flex-col ${
                        tier.highlight ? "border-red-200 ring-2 ring-red-100" : ""
                      }`}
                    >
                      <div className="mb-6">
                        <h3 className="font-serif text-2xl text-gray-900 mb-1">{tier.name}</h3>
                        <p className="text-sm text-gray-500 mb-4">{tier.subtitle}</p>
                        <div className="flex items-end gap-1 mb-3">
                          <span className="font-serif text-4xl font-bold text-gray-900">
                            {tier.price}
                          </span>
                          <span className="text-gray-500 pb-1">{tier.period}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{tier.description}</p>
                      </div>
                      <ul className="space-y-3 flex-1 mb-8">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button
                          size="lg"
                          className={`w-full ${
                            tier.highlight
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-gray-900 hover:bg-gray-800"
                          }`}
                        >
                          Get Started <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* What's Covered */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  What's Covered in Your Houston Support Plan
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  From emergency outage recovery to routine security patches, our Houston website
                  support plans are designed to keep your digital presence running perfectly — every
                  hour of every day.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {covered.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <item.icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Businesses We Support */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Houston Industry Expertise
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Houston Businesses We Support
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Houston moves fast — and its most critical industries can't afford a website that
                  doesn't. We specialize in rapid support for Houston's highest-stakes sectors.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {houstonBusinesses.map((biz, i) => (
                  <motion.div
                    key={biz.sector}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <h3 className="font-serif text-lg text-gray-900 mb-3">{biz.sector}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{biz.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Neighborhoods */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="inline-flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Local Houston Coverage
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Serving All of Greater Houston
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Cardinal Cipher Labs is a Houston-based web support agency serving businesses
                  across every corner of the Greater Houston metro. Whether you're in The Woodlands,
                  Pearland, Katy, or downtown Houston — our team responds fast because we know this
                  city and its businesses.
                </p>
              </motion.div>

              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {houstonNeighborhoods.map((hood, i) => (
                  <motion.div
                    key={hood}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    <MapPin className="w-3 h-3 text-red-600" />
                    {hood}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <p className="text-gray-600 leading-relaxed">
                  From The Woodlands to Pearland, from Sugar Land to Pasadena, from Katy to League
                  City — we understand what Houston businesses need from a web support team. We know
                  the pace, the industries, and the stakes. When your Houston website has a problem,
                  you want someone who understands your market calling you back — not a generic
                  offshore support desk. That's what sets Cardinal Cipher Labs apart.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  What Houston Clients Say
                </h2>
                <p className="text-gray-600 max-w-xl mx-auto">
                  Real Houston businesses — restaurants, real estate, medical practices — who
                  depended on us when it mattered most.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full flex flex-col">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-1">"{t.body}"</p>
                      <div>
                        <div className="font-semibold text-gray-900">{t.author}</div>
                        <div className="text-sm text-gray-500">{t.title}</div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Same-Day Website Support Houston — FAQ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Answers to the most common questions from Houston business owners about emergency
                  website support, response times, and care plan coverage.
                </p>
              </motion.div>

              <div className="max-w-3xl mx-auto space-y-6">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8">
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="font-serif text-xl text-gray-900 mb-3">{faq.question}</h3>
                          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Serving Houston + Nationwide + Worldwide */}
          <section className="py-16 bg-gray-50 border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <Globe className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
                  Based in Houston TX — Supporting Clients Everywhere
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cardinal Cipher Labs is headquartered in Houston, Texas, and proudly serves
                  businesses across the entire Greater Houston metro — including The Woodlands, Sugar
                  Land, Katy, Pearland, Cypress, Spring, League City, Pasadena, Conroe, and
                  Friendswood. We also support clients across all of Texas, nationwide across the
                  United States, and internationally in Canada, the United Kingdom, Australia, and
                  beyond. Our support process is fully remote-ready — we can access, diagnose, and
                  fix your website from anywhere, any time. Houston is home, but your website doesn't
                  care where we're based — it just needs to be fixed fast.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-8 text-center">
                Explore Related Houston Services
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {relatedServices.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-center justify-center gap-1 p-3 rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 text-sm font-medium text-gray-700 transition-all text-center"
                  >
                    {link.label}{" "}
                    <ArrowRight className="ml-1 w-3 h-3 text-red-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Clock className="w-10 h-10 text-red-400 mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Need Same-Day Help With Your Houston Website?
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                  Don't let a broken website cost you Houston customers. Call us right now for
                  immediate emergency support, or start online to join a monthly support plan. Real
                  people. Real speed. Real Houston.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:281-901-7016">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                      Call (281) 901-7016
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-900"
                    >
                      Get a Support Plan <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
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
