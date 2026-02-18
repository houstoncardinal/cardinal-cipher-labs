import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import {
  Globe, Code2, Zap, Shield, Layers, Database, ArrowRight, Check,
  Server, Gauge, Search, Lock, Smartphone, RefreshCw, Quote, Star,
  MonitorSmartphone, Rocket, Clock, Users, ChevronDown, Award,
  CheckCircle, XCircle, ShieldCheck, Building2,
  Stethoscope, Scale, Cpu, HardHat
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  { icon: Code2, title: "Modern Tech Stack", description: "Built with React, TypeScript, Next.js, and modern frameworks for peak performance, maintainability, and developer experience across your entire organization." },
  { icon: Zap, title: "Lightning Fast Performance", description: "Optimized for speed with lazy loading, code splitting, edge caching, image optimization, and Core Web Vitals scoring above 90 across all metrics." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-level security with SSL/TLS encryption, OWASP compliance, data encryption at rest and in transit, and compliance-ready infrastructure for HIPAA, SOC 2, and PCI DSS." },
  { icon: Layers, title: "Scalable Architecture", description: "Microservices and serverless architectures built to grow from startup to enterprise-level traffic handling millions of concurrent users." },
  { icon: Database, title: "CMS & Backend Integration", description: "Seamless content management with headless CMS solutions (Strapi, Contentful, Sanity) and custom admin dashboards for easy content updates." },
  { icon: Globe, title: "Global CDN Delivery", description: "Content delivered worldwide through Cloudflare, AWS CloudFront, and Vercel Edge Network with sub-second load times from any location on the planet." },
  { icon: Search, title: "SEO-First Architecture", description: "Server-side rendering, dynamic meta tags, JSON-LD schema markup, semantic HTML, and structured data optimized for maximum search engine visibility." },
  { icon: MonitorSmartphone, title: "Responsive & Accessible", description: "WCAG 2.1 AA compliant designs that work flawlessly across all devices, screen sizes, and assistive technologies including screen readers." },
  { icon: Gauge, title: "Performance Monitoring", description: "Real-time performance dashboards with uptime monitoring, error tracking, and automated alerts to ensure 99.99% availability." },
];

const techStack = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"] },
  { category: "Cloud & DevOps", items: ["AWS", "Vercel", "Docker", "Kubernetes", "CI/CD"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Firebase"] },
];

const packages = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small businesses and startups launching their first professional web presence",
    features: ["5-page responsive website", "Mobile-first design", "Basic SEO setup & schema markup", "Contact form with email integration", "Google Analytics setup", "2 rounds of revisions", "30-day post-launch support", "SSL certificate & hosting setup"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$10,000",
    description: "Ideal for growing businesses that need advanced functionality and custom features",
    features: ["Up to 15 pages", "Custom design & animations", "Advanced SEO with schema markup", "CMS integration (content management)", "E-commerce ready (up to 100 products)", "Analytics dashboard & conversion tracking", "Performance optimization (90+ Lighthouse)", "3 months post-launch support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "For large organizations requiring complex, mission-critical web applications",
    features: ["Unlimited pages & custom features", "Custom backend & API development", "Third-party API integrations", "Multi-language & internationalization", "Load testing & performance optimization", "Advanced security audit & compliance", "Priority 24/7 support", "12 months maintenance & updates"],
    popular: false,
  },
];

const stats = [
  { value: "150+", label: "Websites Launched" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "< 2s", label: "Avg Load Time" },
  { value: "4.9★", label: "Client Rating" },
];

const process = [
  { step: "01", title: "Discovery & Research", description: "We analyze your business goals, target audience, competitive landscape, and technical requirements through stakeholder interviews and market research." },
  { step: "02", title: "Strategy & Architecture", description: "Creating a comprehensive plan including information architecture, sitemap, wireframes, tech stack selection, and project timeline with clear milestones." },
  { step: "03", title: "UI/UX Design", description: "Crafting stunning, conversion-optimized visuals in Figma that align with your brand guidelines and create intuitive user journeys." },
  { step: "04", title: "Development & Integration", description: "Building with clean, maintainable code following best practices. Integrating APIs, CMS, payment systems, and third-party services." },
  { step: "05", title: "Testing & QA", description: "Comprehensive testing including cross-browser, responsive, accessibility (WCAG 2.1), performance, and security testing across all devices." },
  { step: "06", title: "Launch & Growth", description: "Thorough pre-launch checklist, SEO optimization, analytics setup, and seamless deployment with ongoing monitoring and continuous improvements." },
];

const testimonials = [
  { author: "Michael Chen", title: "CTO, Tech Innovations Inc.", body: "Cardinal Consulting delivered our corporate website 2 weeks ahead of schedule. The performance scores are incredible — 98 on Lighthouse across all metrics. Their attention to SEO and accessibility is unmatched.", rating: 5 },
  { author: "Sarah Martinez", title: "VP Marketing, Global Retail Solutions", body: "Our new e-commerce platform increased online sales by 340% in the first quarter. The website is blazing fast and beautifully designed. Best investment we've made.", rating: 5 },
  { author: "David Thompson", title: "Director of IT, Healthcare Systems Group", body: "The HIPAA-compliant patient portal Cardinal built handles over 50,000 monthly users with zero downtime. Their security-first approach gave us complete confidence.", rating: 5 },
];

const faqs = [
  { question: "How long does it take to build a custom website?", answer: "Timeline depends on complexity and chosen delivery option. With our Rapid Prototyping service, we can deliver in as little as 72 hours for urgent projects. Standard delivery ranges from 72 hours to 2 weeks depending on project scope. More complex e-commerce or enterprise platforms may take 4-8 weeks. We provide detailed timelines during the discovery phase and maintain transparent communication throughout." },
  { question: "What technologies do you use for web development?", answer: "We primarily build with React, Next.js, and TypeScript for the frontend, paired with Node.js, Python, or Go for backend services. We use PostgreSQL, MongoDB, or Supabase for databases, and deploy on AWS, Vercel, or Cloudflare depending on your needs." },
  { question: "Do you provide ongoing website maintenance?", answer: "Yes, all packages include post-launch support (30 days to 12 months depending on the package). We also offer monthly maintenance retainers that include security updates, performance monitoring, content updates, and technical support." },
  { question: "Will my website be optimized for search engines?", answer: "Absolutely. Every website we build includes comprehensive SEO optimization: server-side rendering for crawlability, JSON-LD schema markup, optimized meta tags, semantic HTML, Core Web Vitals optimization, XML sitemaps, and structured data. We follow Google's E-E-A-T guidelines." },
  { question: "Can you integrate my website with existing business systems?", answer: "Yes, we specialize in integrating websites with CRMs (Salesforce, HubSpot), ERPs, payment gateways (Stripe, PayPal), marketing automation tools, inventory management systems, and custom APIs. We've integrated with over 200 different third-party services." },
  { question: "Do you build e-commerce websites?", answer: "Yes, we build custom e-commerce solutions using headless commerce architectures with Shopify, WooCommerce, or fully custom solutions. Our e-commerce sites include product management, secure checkout, inventory tracking, and analytics dashboards." },
];

const certifications = [
  { name: "AWS Advanced Consulting Partner", icon: ShieldCheck },
  { name: "Microsoft Gold Partner", icon: Award },
  { name: "Google Cloud Partner", icon: ShieldCheck },
  { name: "ISO 27001 Certified", icon: Shield },
  { name: "SOC 2 Type II Compliant", icon: ShieldCheck },
  { name: "PCI DSS Compliant", icon: Lock },
];

const comparisonItems = [
  { category: "Tech Stack", cardinal: "Modern React/Next.js stack", typical: "WordPress templates" },
  { category: "Build Quality", cardinal: "Custom-built, hand-coded", typical: "Drag-and-drop builders" },
  { category: "Uptime", cardinal: "99.9% uptime SLA", typical: "No guarantee" },
  { category: "Security", cardinal: "Enterprise security included", typical: "Basic SSL only" },
  { category: "Project Management", cardinal: "Dedicated project manager", typical: "Shared resources" },
  { category: "SEO", cardinal: "Full schema markup & SEO", typical: "Basic meta tags" },
];

const caseStudy = {
  client: "Healthcare Systems Group",
  result: "HIPAA-compliant patient portal handling 50,000+ monthly users with zero downtime",
  metrics: [
    { value: "340%", label: "Increase in Online Engagement" },
    { value: "98", label: "Lighthouse Score" },
    { value: "0", label: "Security Incidents" },
  ],
};

const serviceUrl = `${siteConfig.url}/services/web-development`;

const schemas = generateServicePageSchemas({
  serviceName: "Custom Website Development Services",
  serviceDescription: "Professional custom website development with modern technologies. Responsive, fast, SEO-optimized websites that drive business growth and convert visitors into customers.",
  serviceType: "WebDevelopment",
  serviceUrl,
  category: "Web Development",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "Web Development", url: serviceUrl },
  ],
  faqs,
  techStack,
  features: features.map(f => ({ title: f.title, description: f.description })),
  offers: packages.map(p => ({
    name: p.name,
    price: p.price,
    description: p.description,
    features: p.features,
  })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({
    author: t.author,
    authorTitle: t.title.split(",")[0],
    company: t.title.split(",").slice(1).join(",").trim(),
    rating: t.rating,
    body: t.body,
    date: "2025-01-15",
  })),
  aggregateRating: { ratingValue: 4.9, reviewCount: 89 },
  duration: "P4W",
});

export default function WebDevelopment() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Custom Website Development Services"
        description="Professional custom website development with React, Next.js & TypeScript. Responsive, fast, SEO-optimized websites with 99.9% uptime. Get a free consultation."
        keywords={[
          "custom website development",
          "web development services",
          "responsive web design",
          "enterprise websites",
          "React development",
          "Next.js development",
          "SEO optimized websites",
          "e-commerce development",
          "Houston web developer",
          "custom website development Houston",
          "enterprise web application development",
          "React Next.js development agency",
          "HIPAA compliant web development",
          "e-commerce website development",
        ]}
        schemas={schemas}
        url={serviceUrl}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <VerticalNav />
        
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Web Development" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Globe className="w-7 h-7 text-primary" /></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Web Development</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Custom Website Development</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms — engineered for performance, security, and growth.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">View Our Work</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/50">
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
                    <div className="font-serif text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Choose Our Web Development</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">We build websites that don't just look great — they perform exceptionally, rank higher, and convert more visitors into customers.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <LuxuryCard className="p-6 h-full">
                      <feature.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust & Certifications */}
          <section className="py-20 lg:py-24 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Trust & Certifications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">We maintain the highest industry certifications and partnerships to deliver enterprise-grade solutions you can trust.</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <LuxuryCard className="p-5 h-full text-center">
                      <cert.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-xs text-muted-foreground font-medium leading-tight">{cert.name}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Technology Stack</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">We select the best technologies for your project — always modern, always battle-tested at scale.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {techStack.map((stack, i) => (
                  <motion.div key={stack.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <h3 className="font-serif text-lg text-primary mb-4">{stack.category}</h3>
                      <ul className="space-y-2">
                        {stack.items.map(item => (
                          <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Development Process</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">A proven, agile methodology that delivers exceptional results every time — on time and on budget.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, i) => (
                  <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                    <div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Don't take our word for it — hear from businesses we've transformed.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {testimonials.map((t, i) => (
                  <motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-8 h-full">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p>
                      <div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div>
                      <div className="font-medium text-foreground text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground">{t.title}</div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study Spotlight */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Case Study Spotlight</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">A closer look at how we deliver measurable results for our clients.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
              >
                <LuxuryCard className="p-8 md:p-12" borderStyle="metallic-crimson">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center">
                      <Stethoscope className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Featured Case Study</div>
                      <h3 className="font-serif text-2xl text-foreground">{caseStudy.client}</h3>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">{caseStudy.result}</p>
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    {caseStudy.metrics.map((metric, i) => (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="text-center"
                      >
                        <div className="font-serif text-3xl md:text-4xl text-primary mb-1">{metric.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    <Button variant="outline" asChild>
                      <Link to="/portfolio">View Full Portfolio <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </LuxuryCard>
              </motion.div>
            </div>
          </section>

          {/* Why Cardinal vs. Typical Agencies */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Cardinal vs. Typical Agencies</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">See the difference between a premium, engineering-first approach and commodity web development.</p>
              </motion.div>
              <div className="max-w-4xl mx-auto space-y-4">
                {/* Header Row */}
                <div className="grid grid-cols-3 gap-4 px-4 pb-2">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider"></div>
                  <div className="text-sm font-medium text-primary uppercase tracking-wider text-center">Cardinal Cipher Labs</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">Typical Agency</div>
                </div>
                {comparisonItems.map((item, i) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <LuxuryCard className="p-0 overflow-hidden">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="p-4 md:p-5">
                          <span className="text-sm font-medium text-foreground">{item.category}</span>
                        </div>
                        <div className="p-4 md:p-5 bg-primary/5 flex items-center gap-2 justify-center">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground font-medium">{item.cardinal}</span>
                        </div>
                        <div className="p-4 md:p-5 flex items-center gap-2 justify-center">
                          <XCircle className="w-4 h-4 text-muted-foreground/50 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{item.typical}</span>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investment Options</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing with packages designed for every business size. No hidden fees, ever.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {packages.map((pkg, i) => (
                  <motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>
                      {pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Most Popular</div>}
                      <div className="text-center mb-6">
                        <h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3>
                        <div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div>
                        <p className="text-sm text-muted-foreground">{pkg.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map(f => (
                          <li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>
                        ))}
                      </ul>
                      <Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild>
                        <Link to="/contact">Get Started</Link>
                      </Button>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to know about our web development services.</p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <LuxuryCard className="overflow-hidden">
                      <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                        <h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3>
                        <ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      {openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>}
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Related Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Complement your website with these powerful services.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                {[
                  { title: "SEO & Analytics", desc: "Maximize your website's visibility with comprehensive SEO optimization.", href: "/services/seo-analytics", icon: Search },
                  { title: "UX/UI Design", desc: "Create exceptional user experiences that convert visitors into customers.", href: "/services/ux-ui", icon: Layers },
                  { title: "Digital Marketing", desc: "Drive qualified traffic to your new website with strategic campaigns.", href: "/services/digital-marketing", icon: Rocket },
                ].map((s, i) => (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={s.href}>
                      <LuxuryCard className="p-6 h-full hover:border-primary/50 transition-colors">
                        <s.icon className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-serif text-lg text-foreground mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground">{s.desc}</p>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Industry Pages */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
                <h3 className="font-serif text-2xl text-foreground mb-2">Industries We Serve</h3>
                <p className="text-muted-foreground max-w-xl mx-auto text-sm">Specialized web development expertise across key industries.</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {[
                  { title: "Healthcare", href: "/industry/healthcare", icon: Stethoscope },
                  { title: "Legal", href: "/industry/legal", icon: Scale },
                  { title: "Financial", href: "/industry/financial", icon: Building2 },
                  { title: "Technology", href: "/industry/technology", icon: Cpu },
                  { title: "AI & Automation", href: "/industry/ai-automation", icon: Rocket },
                  { title: "Construction", href: "/industry/construction", icon: HardHat },
                ].map((ind, i) => (
                  <motion.div key={ind.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                    <Link to={ind.href}>
                      <LuxuryCard className="p-4 h-full text-center hover:border-primary/50 transition-colors">
                        <ind.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="text-xs font-medium text-muted-foreground">{ind.title}</span>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Build Your Website?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss your project and create something exceptional together. Free consultation, no obligations.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
