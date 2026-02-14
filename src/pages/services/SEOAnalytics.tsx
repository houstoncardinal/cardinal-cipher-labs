import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { MobileToolbar } from "@/components/layout/MobileToolbar";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import {
  Search, BarChart3, Target, TrendingUp, FileCode, Globe, ArrowRight,
  Check, Eye, Quote, Star, ChevronDown, Link2, FileSearch, Gauge,
  Languages, MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  { icon: FileCode, title: "Technical SEO Audit", description: "Comprehensive analysis of site architecture, crawlability, indexing issues, Core Web Vitals, mobile usability, and structured data errors with prioritized remediation plan." },
  { icon: Target, title: "Keyword Strategy & Research", description: "Data-driven keyword research targeting high-intent, low-competition opportunities using Ahrefs, SEMrush, and proprietary tools. Competitor gap analysis included." },
  { icon: Globe, title: "On-Page Optimization", description: "Content optimization, meta tags, schema markup implementation, internal linking strategies, content silos, and semantic HTML optimization for maximum relevance signals." },
  { icon: Link2, title: "Link Building & Digital PR", description: "White-hat backlink acquisition from authoritative, relevant industry sources through guest posting, HARO, digital PR campaigns, and strategic partnerships." },
  { icon: BarChart3, title: "Analytics & Reporting", description: "GA4 setup with custom events, Google Search Console optimization, custom Looker Studio dashboards, and monthly performance reports with actionable insights." },
  { icon: Eye, title: "Rank Tracking & Monitoring", description: "Daily ranking monitoring across 500+ keywords with competitor analysis, SERP feature tracking, and automated opportunity alerts for quick wins." },
  { icon: FileSearch, title: "Content Strategy & Creation", description: "Topical authority mapping, content gap analysis, editorial calendar creation, and SEO-optimized content that ranks and engages your target audience." },
  { icon: MapPin, title: "Local SEO & Google Business", description: "Google Business Profile optimization, local citation building, review management, and local pack ranking strategies for multi-location businesses." },
  { icon: Languages, title: "International SEO", description: "Hreflang implementation, international keyword research, content localization strategy, and geo-targeting for global market expansion." },
];

const techStack = [
  { category: "SEO Tools", items: ["Ahrefs", "SEMrush", "Screaming Frog", "Surfer SEO", "Clearscope"] },
  { category: "Analytics", items: ["Google Analytics 4", "Search Console", "Looker Studio", "Hotjar", "Microsoft Clarity"] },
  { category: "Technical", items: ["Schema.org", "JSON-LD", "Core Web Vitals", "PageSpeed Insights", "GTMetrix"] },
  { category: "Content", items: ["MarketMuse", "Frase", "Grammarly", "Hemingway", "Yoast SEO"] },
];

const packages = [
  {
    name: "SEO Audit",
    price: "$2,500",
    description: "One-time comprehensive analysis with actionable roadmap",
    features: ["100+ point technical SEO audit", "Keyword gap analysis (vs 3 competitors)", "Backlink profile analysis", "Content audit & recommendations", "Schema markup assessment", "60-page PDF report with prioritized actions", "1-hour strategy presentation", "30-day email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$3,500/mo",
    description: "Ongoing optimization for sustainable organic growth",
    features: ["Monthly technical SEO optimization", "Content strategy & optimization (4 pages)", "Link building (5-10 quality backlinks/mo)", "Schema markup implementation", "Monthly rank tracking (200 keywords)", "Google Business Profile management", "Custom analytics dashboard", "Bi-monthly strategy calls"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$7,500/mo",
    description: "Full-service SEO for aggressive market domination",
    features: ["Dedicated SEO manager & team", "Content creation (8 optimized posts/mo)", "Aggressive link building (15-25/mo)", "International & multi-location SEO", "Advanced schema implementation", "Weekly rank tracking (500+ keywords)", "Custom Looker Studio dashboards", "Weekly strategy calls & reporting"],
    popular: false,
  },
];

const stats = [
  { value: "250%", label: "Avg Traffic Increase" },
  { value: "#1-3", label: "Avg Rankings Achieved" },
  { value: "85%", label: "Clients on Page 1" },
  { value: "180+", label: "Keywords Ranked #1" },
];

const results = [
  { client: "Healthcare Provider", metric: "312%", description: "Organic traffic increase in 6 months with 45 first-page rankings" },
  { client: "E-commerce Brand", metric: "#1", description: "Ranking for primary $50K/mo keyword within 4 months" },
  { client: "B2B SaaS Company", metric: "45%", description: "Increase in qualified leads through organic search" },
  { client: "Local Business Chain", metric: "5x", description: "Google Maps visibility growth across 12 locations" },
];

const process = [
  { step: "01", title: "SEO Audit & Discovery", description: "Comprehensive technical audit, competitor analysis, keyword research, and current performance baseline to identify quick wins and long-term opportunities." },
  { step: "02", title: "Strategy Development", description: "Custom SEO roadmap with prioritized actions, keyword targets, content calendar, link building strategy, and monthly milestone goals." },
  { step: "03", title: "Technical Optimization", description: "Fix critical technical issues: site speed, crawlability, indexing, schema markup, Core Web Vitals, mobile usability, and internal linking." },
  { step: "04", title: "Content & On-Page", description: "Optimize existing content, create new SEO-driven content, implement schema markup, and build topical authority clusters." },
  { step: "05", title: "Off-Page & Link Building", description: "Strategic outreach, guest posting, digital PR, and partnership development to build domain authority and referral traffic." },
  { step: "06", title: "Monitor & Iterate", description: "Track rankings, traffic, conversions. Monthly reporting with data-driven recommendations for continuous improvement." },
];

const testimonials = [
  { author: "Dr. Amanda Foster", title: "Practice Owner, Houston Medical Center", body: "Cardinal's SEO work tripled our organic patient inquiries in 6 months. Their schema markup implementation made us the featured snippet for our top 10 keywords. Incredible ROI.", rating: 5 },
  { author: "Mark Davidson", title: "CMO, TechScale SaaS", body: "We went from page 3 to position 1 for our highest-value keyword. The content strategy they built generates 200+ qualified leads per month from organic search alone.", rating: 5 },
  { author: "Patricia Nguyen", title: "CEO, E-commerce Direct", body: "Our organic revenue increased 420% in the first year. Cardinal's technical SEO expertise fixed issues we didn't even know existed. Best marketing investment we've made.", rating: 5 },
];

const faqs = [
  { question: "How long does it take to see SEO results?", answer: "Most clients see measurable improvements within 3-4 months, with significant results at 6-12 months. Quick wins from technical fixes can show results in weeks. SEO is a long-term investment that compounds over time — the longer you invest, the stronger your results become." },
  { question: "What's the difference between on-page and off-page SEO?", answer: "On-page SEO covers everything on your website: content optimization, meta tags, schema markup, internal linking, and site speed. Off-page SEO involves building authority through backlinks, digital PR, social signals, and brand mentions from external sources." },
  { question: "Do you guarantee first page rankings?", answer: "No ethical SEO company can guarantee specific rankings as Google's algorithm considers 200+ factors. What we guarantee is a proven methodology, transparent reporting, and measurable ROI. Our track record shows 85% of clients achieve first-page rankings for their target keywords within 6-12 months." },
  { question: "What is schema markup and why does it matter?", answer: "Schema markup is structured data code that helps search engines understand your content. It enables rich results (star ratings, FAQs, prices, etc.) in search results, which dramatically increase click-through rates. We implement comprehensive schema including Organization, Service, FAQ, Review, and BreadcrumbList schemas." },
  { question: "How do you measure SEO success?", answer: "We track organic traffic, keyword rankings, conversion rates, click-through rates, domain authority, backlink quality, Core Web Vitals, and most importantly — revenue generated from organic search. You get a custom dashboard with real-time metrics and monthly detailed reports." },
  { question: "Can SEO work alongside paid advertising?", answer: "Absolutely — they complement each other perfectly. SEO builds long-term organic visibility while PPC provides immediate traffic. We coordinate both channels to maximize total search visibility and ensure consistent messaging across paid and organic results." },
];

const serviceUrl = `${siteConfig.url}/services/seo-analytics`;

const schemas = generateServicePageSchemas({
  serviceName: "SEO & Analytics Services",
  serviceDescription: "Comprehensive SEO optimization and analytics that drive real results. Technical SEO, schema markup, content strategy, and link building for sustainable organic growth.",
  serviceType: "SEOService",
  serviceUrl,
  category: "SEO & Analytics",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "SEO & Analytics", url: serviceUrl },
  ],
  faqs,
  offers: packages.map(p => ({ name: p.name, price: p.price, description: p.description, features: p.features })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({ author: t.author, authorTitle: t.title.split(",")[0], company: t.title.split(",").slice(1).join(",").trim(), rating: t.rating, body: t.body, date: "2025-03-01" })),
  aggregateRating: { ratingValue: 4.9, reviewCount: 67 },
  duration: "P1M",
});

export default function SEOAnalytics() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="SEO & Analytics Services" description="Drive 250% more organic traffic with expert SEO. Technical audits, schema markup, link building & analytics. 85% of clients reach page 1. Free SEO audit." keywords={["SEO services", "search engine optimization", "technical SEO", "schema markup", "link building", "SEO analytics", "Houston SEO company", "local SEO"]} schemas={schemas} url={serviceUrl} />
      <div className="min-h-screen bg-background">
        <Header /><VerticalNav /><MobileToolbar />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "SEO & Analytics" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6"><div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Search className="w-7 h-7 text-primary" /></div><span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">SEO & Analytics</span></div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">SEO & Analytics Services</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">Comprehensive SEO optimization and analytics solutions that drive real, measurable results. From technical audits to content strategy — we help you dominate search results.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Get Free SEO Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">View Case Studies</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/50"><div className="container mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center"><div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{s.value}</div><div className="text-sm text-muted-foreground">{s.label}</div></motion.div>))}</div></div></section>

          {/* Features */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our SEO Methodology</h2><p className="text-muted-foreground max-w-2xl mx-auto">A data-driven, comprehensive approach that delivers sustainable, long-term organic growth.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="p-6 h-full"><f.icon className="w-10 h-10 text-primary mb-4" /><h3 className="font-serif text-xl text-foreground mb-2">{f.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          {/* Results */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Real Results for Real Clients</h2><p className="text-muted-foreground max-w-2xl mx-auto">We don't just promise results — we deliver them, every single time.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{results.map((r, i) => (<motion.div key={r.client} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 text-center h-full"><div className="font-serif text-4xl text-primary mb-2">{r.metric}</div><h3 className="font-medium text-foreground mb-1">{r.client}</h3><p className="text-sm text-muted-foreground">{r.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          {/* Tech Stack */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Tools & Technologies</h2><p className="text-muted-foreground max-w-2xl mx-auto">Enterprise-grade SEO tools for data-driven decision making.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{techStack.map((s, i) => (<motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 h-full"><h3 className="font-serif text-lg text-primary mb-4">{s.category}</h3><ul className="space-y-2">{s.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />{item}</li>))}</ul></LuxuryCard></motion.div>))}</div></div></section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our SEO Process</h2><p className="text-muted-foreground max-w-2xl mx-auto">A proven 6-step methodology for sustainable organic growth.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{process.map((item, i) => (<motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div><h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>))}</div></div></section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (<motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-8 h-full"><Quote className="w-8 h-8 text-primary/30 mb-4" /><p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p><div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div><div className="font-medium text-foreground text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.title}</div></LuxuryCard></motion.div>))}</div></div></section>

          {/* Pricing */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">SEO Investment Options</h2><p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing with measurable ROI. Every dollar tracked.</p></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{packages.map((pkg, i) => (<motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>{pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Most Popular</div>}<div className="text-center mb-6"><h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3><div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div><p className="text-sm text-muted-foreground">{pkg.description}</p></div><ul className="space-y-3 mb-8">{pkg.features.map(f => (<li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}</ul><Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild><Link to="/contact">Get Started</Link></Button></LuxuryCard></motion.div>))}</div></div></section>

          {/* FAQs */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2></motion.div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left"><h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3><ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>}</LuxuryCard></motion.div>))}</div></div></section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5"><div className="container mx-auto px-6 lg:px-12 text-center"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Dominate Search Results?</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Get a free SEO audit and discover your untapped organic growth potential.</p><Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Claim Free SEO Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></motion.div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
