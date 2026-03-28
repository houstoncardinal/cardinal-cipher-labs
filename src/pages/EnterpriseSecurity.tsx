import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Shield, Lock, CheckCircle2, ArrowRight, Globe, MapPin,
  Check, Star, FileKey, Server, Eye, Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import {
  generateOrganizationSchema,
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateFAQSchemas,
} from "@/lib/schema-generators";

const securityFeatures = [
  {
    icon: Lock,
    title: "SSL/TLS Encryption",
    description:
      "Every website we build for Houston businesses ships with enterprise-grade SSL/TLS encryption. All data in transit is protected — keeping your customers' information safe and your Google rankings strong. Houston businesses require trust, and a locked padlock in the browser builds it instantly.",
    perks: [
      "256-bit SSL certificate installation",
      "HTTPS enforcement site-wide",
      "Mixed content audit & remediation",
      "Automatic certificate renewal",
    ],
  },
  {
    icon: FileKey,
    title: "HIPAA Compliant Development",
    description:
      "Houston is home to the Texas Medical Center — the largest medical complex in the world. Every healthcare website, patient portal, and health-tech app we build meets full HIPAA technical safeguard requirements, including audit logging, access controls, and encrypted PHI storage.",
    perks: [
      "PHI encryption at rest & in transit",
      "Role-based access control (RBAC)",
      "Audit logging & session management",
      "Business Associate Agreement (BAA) ready",
    ],
  },
  {
    icon: Server,
    title: "Secure Infrastructure Design",
    description:
      "Houston enterprises and SaaS companies operating at scale need infrastructure built with security, availability, and data integrity controls baked in from day one — not bolted on after the fact. We design multi-layered, hardened hosting environments that stand up to real-world threats.",
    perks: [
      "Infrastructure-as-code security policies",
      "Vulnerability management program",
      "Network segmentation & least-privilege access",
      "Third-party integration security vetting",
    ],
  },
  {
    icon: Eye,
    title: "Penetration Testing",
    description:
      "Before your Houston website or app goes live, our security team performs systematic penetration testing following the OWASP Top 10 methodology. We find vulnerabilities before the hackers do — SQL injection, XSS, CSRF, broken authentication, and more — delivering a full remediation report.",
    perks: [
      "OWASP Top 10 vulnerability testing",
      "Authenticated & unauthenticated scans",
      "Detailed findings & remediation report",
      "Re-test included post-remediation",
    ],
  },
  {
    icon: Shield,
    title: "DDoS Protection & WAF",
    description:
      "Houston businesses can't afford downtime. We deploy Web Application Firewalls (WAF) and DDoS mitigation layers that absorb and filter malicious traffic before it ever reaches your server. Your website stays online during attacks, protecting revenue and reputation.",
    perks: [
      "Layer 3/4/7 DDoS mitigation",
      "Web Application Firewall (WAF) rules",
      "Rate limiting & IP reputation filtering",
      "Real-time traffic anomaly alerting",
    ],
  },
  {
    icon: Zap,
    title: "Data Encryption & Secure Storage",
    description:
      "Sensitive business data — customer records, financial information, health records — is encrypted at rest using AES-256 and in transit using TLS 1.3. Houston companies in oil & gas, healthcare, and finance trust us because we treat their data like our own.",
    perks: [
      "AES-256 encryption at rest",
      "TLS 1.3 for all data in transit",
      "Encrypted database backups",
      "Secure secrets management (Vault/KMS)",
    ],
  },
];

const houstonIndustries = [
  {
    sector: "Healthcare — Texas Medical Center",
    description:
      "The Texas Medical Center in Houston is the largest medical complex on the planet, employing over 106,000 workers. We build HIPAA-compliant patient portals, telehealth platforms, medical practice websites, and health-tech applications for Houston healthcare providers, hospitals, and biotech startups. Every line of code meets HIPAA technical safeguard requirements.",
    examples: ["Patient portals", "Telehealth apps", "Medical practice websites", "Health-tech SaaS platforms"],
  },
  {
    sector: "Legal — Downtown Houston Law Firms",
    description:
      "Downtown Houston is home to hundreds of law firms — from solo practitioners to Am Law 100 giants. Attorney websites handle sensitive client inquiries, retainer agreements, and confidential case information. We build secure, professionally designed websites for Houston law firms that protect client data and comply with Texas State Bar advertising rules.",
    examples: ["Law firm websites", "Secure client portals", "Case intake forms", "Attorney directory platforms"],
  },
  {
    sector: "Financial — Houston Energy Companies",
    description:
      "Houston's energy sector — from oil & gas majors to clean energy startups — handles sensitive financial data that demands rigorous access controls, encrypted storage, and enterprise-grade security. We build secure financial portals, investor dashboards, and internal tools for Houston's energy and financial services community.",
    examples: ["Investor portals", "Energy trading dashboards", "Financial reporting tools", "Secure payment integrations"],
  },
  {
    sector: "Real Estate — Houston Property Management",
    description:
      "Houston's real estate market is one of the hottest in the United States. Property management platforms, tenant portals, and real estate agency websites process lease agreements, rental payments, and personal financial information. We secure every data point so Houston property managers and agents can focus on closing deals.",
    examples: ["Tenant portals", "Property management platforms", "Real estate agency websites", "Rental application portals"],
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
    author: "Dr. Angela M.",
    title: "CEO, Houston Integrated Health — Texas Medical Center, TX",
    body: "We needed a patient portal that was fully HIPAA compliant and also looked world-class. Cardinal delivered exactly that. Their security documentation was thorough, their BAA was ready on day one, and the portal has been running without a single incident. Best decision we made for our tech stack.",
    rating: 5,
  },
  {
    author: "Robert K.",
    title: "Managing Partner, Kessler & Walsh Law — Downtown Houston, TX",
    body: "Our previous website had a major vulnerability that exposed client inquiry forms. Cardinal audited us, rebuilt everything with encrypted submissions and a secure client portal, and we haven't had a security concern since. They understand what law firms actually need.",
    rating: 5,
  },
  {
    author: "Sarah T.",
    title: "CFO, Lone Star Capital Group — Houston Energy Corridor, TX",
    body: "We operate in the energy finance space and our investor portal needed enterprise-grade security. Cardinal's team knew exactly what that meant from day one — encrypted data, hardened access controls, proper audit trails. Zero hand-holding required. Truly enterprise-level work.",
    rating: 5,
  },
];

const faqs = [
  {
    question: "Do Houston healthcare websites need to be HIPAA compliant?",
    answer:
      "Yes — any Houston healthcare website that collects, transmits, or stores Protected Health Information (PHI) must comply with HIPAA's Technical, Physical, and Administrative Safeguards. This includes contact forms that ask about medical conditions, patient portals, appointment booking systems, telehealth platforms, and any system connected to an Electronic Health Record (EHR). The Texas Medical Center in Houston is the world's largest medical complex, making HIPAA compliance a critical concern for hundreds of healthcare organizations in the area. Cardinal Cipher Labs builds fully HIPAA-compliant websites and applications, including encrypted data storage, role-based access controls, audit logging, and Business Associate Agreements (BAA). Call us at (281) 901-7016 to discuss your Houston healthcare website security needs.",
  },
  {
    question: "What security standards do Houston businesses need to follow?",
    answer:
      "The required security standards depend on your Houston industry. Healthcare organizations must comply with HIPAA's Technical, Physical, and Administrative Safeguards. Businesses that process credit card payments must use certified payment processors and encrypt cardholder data. Companies handling EU customer data must meet GDPR requirements. All websites should follow OWASP Top 10 security best practices. Texas businesses are also subject to the Texas Privacy Protection Act. We help Houston businesses across all sectors identify their specific compliance requirements and build websites and applications that meet them. Contact us at (281) 901-7016 to discuss your compliance needs.",
  },
  {
    question: "Can you secure an existing Houston website?",
    answer:
      "Absolutely. We provide comprehensive security audits and hardening services for existing Houston websites regardless of the platform — WordPress, Webflow, React, Next.js, custom PHP, Shopify, and more. Our security audit covers the OWASP Top 10 vulnerabilities, SSL/TLS configuration, dependency vulnerabilities, access control weaknesses, injection flaws, and compliance gaps. After the audit, we deliver a prioritized remediation report and can implement all fixes for you. Many Houston businesses come to us after a security incident or ahead of a compliance audit — we help in both scenarios. Contact us at (281) 901-7016 to schedule your Houston website security audit.",
  },
  {
    question: "How do you protect Houston small business websites from hackers?",
    answer:
      "Houston small businesses are targeted by hackers more than most owners realize — bots scan for vulnerable websites around the clock. We protect Houston small business websites with a multi-layer security stack: SSL/TLS encryption to secure all data in transit, a Web Application Firewall (WAF) to block malicious traffic, automated malware scanning and removal, strong password policies and two-factor authentication for admin access, regular software and plugin updates to patch known vulnerabilities, automated backups with tested restoration procedures, and uptime monitoring with immediate alerts. For Houston small businesses on a budget, our security care plans start at $299/month and cover all of the above. Your website is your storefront — we make sure the locks are solid.",
  },
];

const relatedServices = [
  { label: "Houston Web Design", href: "/houston-web-design" },
  { label: "Houston Web Developer", href: "/houston-web-developer" },
  { label: "Web Development Services", href: "/services/web-development" },
  { label: "App Development Houston", href: "/houston-app-development" },
  { label: "Rapid Delivery", href: "/rapid-delivery" },
  { label: "Houston SEO Company", href: "/houston-seo-company" },
];

export default function EnterpriseSecurity() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Enterprise Website Security Houston | HIPAA Compliant Web Design Houston Texas",
      description:
        "Enterprise-grade website security for Houston businesses. HIPAA compliant web design, penetration testing, DDoS protection, and bank-level data encryption. Serving the Texas Medical Center, downtown Houston law firms, energy companies, and real estate agencies.",
      url: `${siteConfig.url}/enterprise-security`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Enterprise Website Security Houston", url: `${siteConfig.url}/enterprise-security` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${siteConfig.url}/enterprise-security#service`,
      name: "Enterprise Website Security Houston — HIPAA Compliant Web Design",
      description:
        "Enterprise-grade cybersecurity web design for Houston businesses. HIPAA compliant, GDPR ready. Penetration testing, DDoS protection, SSL/TLS encryption, and secure web development for Houston healthcare, legal, financial, and real estate industries.",
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
      offers: {
        "@type": "Offer",
        priceRange: "$$",
        availability: "https://schema.org/InStock",
      },
      serviceType: "Cybersecurity Web Design",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Houston Website Security Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "HIPAA Compliant Web Development Houston" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Secure Infrastructure Design Houston" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Penetration Testing Houston" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "DDoS Protection Houston" } },
        ],
      },
    },
    ...generateFAQSchemas(faqs),
  ];

  return (
    <>
      <SEOHead
        title="Enterprise Website Security Houston | HIPAA Compliant Web Design Houston Texas"
        description="Enterprise-grade website security for Houston businesses. HIPAA compliant web design, penetration testing, DDoS protection, and bank-level data encryption. Serving Texas Medical Center, Houston law firms, energy companies, and real estate. Call (281) 901-7016."
        keywords={[
          "enterprise website security houston",
          "hipaa compliant website houston",
          "secure web development houston texas",
          "cybersecurity web design houston",
          "hipaa compliant web design houston",
          "website security houston tx",
          "gdpr compliant website houston",
          "penetration testing houston",
          "ddos protection website houston",
          "secure web developer houston",
          "hipaa web developer houston texas",
          "healthcare website security houston",
          "law firm website security houston",
          "enterprise security web development houston",
          "data encryption website houston",
          "gdpr compliant website houston",
        ]}
        url={`${siteConfig.url}/enterprise-security`}
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
                  <Shield className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">
                    Enterprise Website Security — Houston TX
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Enterprise-Grade Website Security for{" "}
                  <span className="text-red-600">Houston Businesses</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto"
                >
                  HIPAA compliant web design. Penetration testing, DDoS protection, and bank-level
                  encryption — built specifically for Houston's healthcare, legal, financial,
                  and real estate industries.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="text-base text-gray-500 mb-10 max-w-xl mx-auto"
                >
                  Serving the Texas Medical Center, downtown Houston law firms, Houston energy companies,
                  and Greater Houston property management — and clients nationwide and worldwide.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Get a Security Assessment <ArrowRight className="ml-2 w-4 h-4" />
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
                  { icon: Shield, value: "500+", label: "Secured Projects" },
                  { icon: CheckCircle2, value: "100%", label: "HIPAA Ready" },
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

          {/* Security Features */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Houston Website Security Services
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Every security service we offer is engineered for Houston businesses operating in
                  regulated, high-stakes industries. We don't use templates or shortcuts — every
                  implementation is tailored to your specific compliance requirements and threat model.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {securityFeatures.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <feature.icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{feature.description}</p>
                      <ul className="space-y-2">
                        {feature.perks.map((perk) => (
                          <li key={perk} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                            {perk}
                          </li>
                        ))}
                      </ul>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Banner */}
          <section className="py-12 bg-white border-y border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold mb-6">
                Compliance Frameworks We Support
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {["HIPAA", "GDPR", "CCPA", "OWASP Top 10", "WCAG 2.1 AA", "SSL/TLS"].map((cert) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="px-6 py-3 bg-gray-50 rounded-full border border-gray-200"
                  >
                    <span className="font-semibold text-gray-700 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Industries We Secure */}
          <section className="py-24 lg:py-32 bg-white">
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
                  Houston Industries We Secure
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  Houston is a city of high-stakes industries. We understand the compliance landscape,
                  regulatory requirements, and specific threats facing each sector — and we build
                  accordingly.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {houstonIndustries.map((industry, i) => (
                  <motion.div
                    key={industry.sector}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <h3 className="font-serif text-xl text-gray-900 mb-3">{industry.sector}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{industry.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {industry.examples.map((ex) => (
                          <span
                            key={ex}
                            className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium"
                          >
                            {ex}
                          </span>
                        ))}
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Houston Neighborhoods */}
          <section className="py-24 lg:py-32 bg-gray-50">
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
                  Securing Houston Websites Across the Entire Metro
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                  Cardinal Cipher Labs is a Houston-based cybersecurity web design agency serving
                  businesses across every corner of Greater Houston. From The Woodlands medical
                  practices to Pearland law firms to Katy real estate agencies — we know the Houston
                  market and build for it.
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
                    className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 shadow-sm"
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
                  City — we understand the Houston business landscape. We know what HIPAA compliance
                  means for a Texas Medical Center clinic, what encrypted payment flows require for a
                  Galleria-area retailer, and what enterprise security looks like for an Energy Corridor company. Our
                  local expertise combined with enterprise-grade security knowledge makes us Houston's
                  most trusted cybersecurity web design team.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32 bg-white">
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
                  Real results from real Houston businesses — healthcare, legal, and financial — who
                  trusted us with their most critical web security requirements.
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
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">
                  Enterprise Website Security Houston — FAQ
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Answers to the most common questions from Houston business owners about HIPAA
                  compliance, website security certifications, and cybersecurity web design.
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
                        <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
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
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto text-center"
              >
                <Globe className="w-8 h-8 text-red-600 mx-auto mb-4" />
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900 mb-4">
                  Based in Houston TX — Securing Clients Everywhere
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Cardinal Cipher Labs is headquartered in Houston, Texas, and proudly serves clients
                  across the entire Greater Houston metro — including The Woodlands, Sugar Land, Katy,
                  Pearland, Cypress, Spring, League City, Pasadena, Conroe, and Friendswood. We also
                  serve clients across all of Texas, nationwide across the United States, and
                  internationally including Canada, the United Kingdom, Australia, and beyond. Whether
                  you're a Houston healthcare provider at the Texas Medical Center, a law firm in
                  downtown Houston, or a global enterprise looking for a Houston-based security partner,
                  we have the expertise and the infrastructure to protect your digital assets.
                  Enterprise-grade security without enterprise-level friction.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 bg-gray-50">
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
                <Shield className="w-10 h-10 text-red-400 mx-auto mb-6" />
                <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
                  Secure Your Houston Website Today
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                  Get a free security assessment for your Houston website or application. We'll identify
                  your vulnerabilities, map your compliance requirements, and give you a clear path to
                  enterprise-grade security. No obligation, no fluff. Call us now or start online.
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
                      Get Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
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
