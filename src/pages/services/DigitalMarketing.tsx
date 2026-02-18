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
  Megaphone, Target, Users, Mail, BarChart3, Video, ArrowRight, Check,
  TrendingUp, Quote, Star, ChevronDown, Share2, PenTool, Zap, Radio, MousePointer,
  CheckCircle, XCircle, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: Target, title: "PPC Advertising", description: "Strategic Google Ads, Microsoft Ads, and programmatic campaigns with AI-powered bidding optimization, audience targeting, and continuous ROAS improvement." },
  { icon: Users, title: "Social Media Marketing", description: "Platform-specific content strategies and community management across LinkedIn, Instagram, Facebook, TikTok, and X with paid amplification and influencer partnerships." },
  { icon: Mail, title: "Email Marketing & Automation", description: "Automated email sequences, drip campaigns, behavioral triggers, and personalized content that nurture leads through your funnel with 40%+ open rates." },
  { icon: Video, title: "Video & Content Marketing", description: "High-value content creation including blog posts, whitepapers, case studies, video scripts, and interactive content that attracts and converts your ideal customers." },
  { icon: BarChart3, title: "Marketing Analytics & Attribution", description: "Multi-touch attribution modeling, custom dashboards, conversion tracking, and deep insights that connect every marketing dollar to revenue." },
  { icon: MousePointer, title: "Conversion Rate Optimization", description: "A/B testing, multivariate testing, heatmap analysis, user session recordings, and funnel optimization to maximize conversion rates across all channels." },
  { icon: Share2, title: "Influencer & Partnership Marketing", description: "Strategic influencer identification, campaign management, affiliate program setup, and co-marketing partnerships that expand reach authentically." },
  { icon: Radio, title: "Podcast & Audio Marketing", description: "Podcast production, sponsorship placement, audio ad creation, and podcast SEO to reach audiences through the fastest-growing media channel." },
  { icon: PenTool, title: "Brand Storytelling", description: "Compelling brand narratives, messaging frameworks, and content pillars that differentiate your brand and create emotional connections with your audience." },
];

const techStack = [
  { category: "Advertising", items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Microsoft Ads", "Programmatic"] },
  { category: "Automation", items: ["HubSpot", "Marketo", "Mailchimp", "ActiveCampaign", "Klaviyo"] },
  { category: "Analytics", items: ["GA4", "Looker Studio", "Amplitude", "Mixpanel", "Segment"] },
  { category: "Social", items: ["Hootsuite", "Sprout Social", "Buffer", "Canva", "CapCut"] },
];

const packages = [
  {
    name: "Starter",
    price: "$2,500/mo",
    description: "Perfect for small businesses building their digital presence",
    features: ["2 marketing channels managed", "Social media management (3 platforms)", "Monthly email campaigns (4 sends)", "Basic PPC management ($2K ad spend)", "Content creation (4 pieces/mo)", "Monthly analytics reporting", "Dedicated account manager", "Monthly strategy call"],
    popular: false,
  },
  {
    name: "Growth",
    price: "$5,000/mo",
    description: "For scaling businesses ready to accelerate growth",
    features: ["4 marketing channels managed", "Advanced PPC management ($10K ad spend)", "Content creation (8 pieces/mo)", "Email automation sequences", "Social media advertising", "A/B testing & CRO", "Custom analytics dashboard", "Bi-weekly strategy calls"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$10,000+/mo",
    description: "Full-service marketing for market leaders",
    features: ["Unlimited channels managed", "Enterprise PPC (unlimited ad spend)", "Video production & editing", "Influencer partnership management", "Advanced attribution modeling", "Custom marketing technology stack", "Dedicated marketing team", "Weekly strategy & reporting"],
    popular: false,
  },
];

const stats = [
  { value: "350%", label: "Avg ROI" },
  { value: "$2M+", label: "Revenue Generated" },
  { value: "45%", label: "Avg Cost Reduction" },
  { value: "100+", label: "Campaigns Managed" },
];

const caseStudies = [
  { industry: "E-commerce", result: "420% ROAS", description: "Google Shopping & Facebook Ads with dynamic retargeting" },
  { industry: "B2B Tech", result: "3x Leads", description: "LinkedIn & content marketing with ABM strategy" },
  { industry: "Healthcare", result: "65% Lower CPA", description: "Google Ads optimization with HIPAA-compliant landing pages" },
  { industry: "Real Estate", result: "200+ Leads/mo", description: "Facebook lead generation with video testimonials" },
];

const process = [
  { step: "01", title: "Market Research & Audit", description: "Comprehensive analysis of your market, competitors, target audience, and current marketing performance to identify gaps and opportunities." },
  { step: "02", title: "Strategy & Planning", description: "Custom marketing strategy with channel selection, budget allocation, content calendar, campaign timelines, and measurable KPIs." },
  { step: "03", title: "Creative Development", description: "Ad creative, landing pages, email templates, social content, and marketing assets designed for maximum conversion." },
  { step: "04", title: "Campaign Launch", description: "Staged campaign rollout with precise audience targeting, A/B testing from day one, and real-time budget optimization." },
  { step: "05", title: "Optimization & Scaling", description: "Continuous performance monitoring, creative testing, audience expansion, and budget reallocation to maximize ROI." },
  { step: "06", title: "Report & Iterate", description: "Transparent reporting with attribution analysis, learnings documentation, and data-driven recommendations for next phase." },
];

const testimonials = [
  { author: "James Mitchell", title: "CEO, E-commerce Direct", body: "Cardinal's marketing team generated $1.2M in revenue from a $200K ad spend. Their attribution modeling showed us exactly which channels were driving sales. Game-changing.", rating: 5 },
  { author: "Dr. Sarah Lee", title: "Practice Owner, Premier Dental Group", body: "We went from 15 new patients per month to 85. Cardinal's Google Ads and local marketing strategy completely transformed our practice growth.", rating: 5 },
  { author: "Tom Henderson", title: "VP Marketing, CloudScale Tech", body: "Our LinkedIn content strategy generates 50+ qualified demo requests per month. Cardinal understands B2B marketing at a deep level.", rating: 5 },
];

const faqs = [
  { question: "How quickly will I see results from digital marketing?", answer: "PPC campaigns can generate leads within the first week. Social media growth typically shows in 2-3 months. Email marketing ROI is often visible within the first month. We set realistic timelines during onboarding and provide weekly progress updates from day one." },
  { question: "What marketing channels should my business use?", answer: "It depends on your audience, industry, and goals. B2B companies typically see best results from LinkedIn, Google Ads, and email. B2C brands often excel with Instagram, Facebook, and TikTok. We analyze your target audience and competitors to recommend the optimal channel mix." },
  { question: "How much should I spend on digital marketing?", answer: "We recommend investing 7-12% of revenue for growth-stage companies and 3-5% for established brands. Our minimum recommended ad spend is $2,000/month per channel for meaningful results. We'll help you allocate budget across channels for maximum ROI." },
  { question: "How do you measure marketing ROI?", answer: "We implement multi-touch attribution tracking that connects every touchpoint to revenue. You'll see exactly how many leads, sales, and dollars each channel generates through custom dashboards updated in real-time." },
  { question: "Do you create the content and ad creative?", answer: "Yes, our team includes copywriters, designers, and video editors who create all marketing assets. This includes ad creative, social media content, email templates, landing pages, blog posts, and video content — all optimized for performance." },
  { question: "Can you work with our existing marketing team?", answer: "Absolutely. We frequently augment in-house teams, providing specialized expertise in areas like PPC, content strategy, or analytics. We integrate into your workflows and complement your team's strengths." },
];

const comparisons = [
  { cardinal: "Multi-touch attribution modeling across all channels", typical: "Last-click only attribution that misses the full picture" },
  { cardinal: "Custom creative team designing original assets", typical: "Stock templates and generic ad copy" },
  { cardinal: "350% average ROI with transparent tracking", typical: "No ROI tracking or accountability" },
  { cardinal: "All channels managed under one unified strategy", typical: "Single channel focus with siloed execution" },
  { cardinal: "Transparent reporting with real revenue metrics", typical: "Vanity metrics like impressions and likes" },
];

const certifications = [
  "Google Partner",
  "Meta Business Partner",
  "HubSpot Certified",
  "Google Analytics Certified",
  "LinkedIn Marketing Certified",
  "Klaviyo Partner",
];

const relatedServices = [
  { title: "SEO & Analytics", href: "/services/seo-analytics", description: "Organic growth to complement paid campaigns" },
  { title: "Web Development", href: "/services/web-development", description: "High-converting landing pages and websites" },
  { title: "Brand Identity", href: "/services/brand-identity", description: "Consistent brand across all marketing channels" },
];

const serviceUrl = `${siteConfig.url}/services/digital-marketing`;

const schemas = generateServicePageSchemas({
  serviceName: "Digital Marketing Services",
  serviceDescription: "Strategic digital marketing campaigns that drive growth. PPC, social media, email marketing, content strategy with measurable ROI and transparent reporting.",
  serviceType: "MarketingService",
  serviceUrl,
  category: "Digital Marketing",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "Digital Marketing", url: serviceUrl },
  ],
  faqs,
  offers: packages.map(p => ({ name: p.name, price: p.price, description: p.description, features: p.features })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({ author: t.author, authorTitle: t.title.split(",")[0], company: t.title.split(",").slice(1).join(",").trim(), rating: t.rating, body: t.body, date: "2025-01-20" })),
  aggregateRating: { ratingValue: 4.9, reviewCount: 73 },
  duration: "P1M",
  techStack,
  features: services.map(s => ({ title: s.title, description: s.description })),
});

export default function DigitalMarketing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="Digital Marketing Services" description="350% average ROI digital marketing. PPC, social media, email & content marketing with transparent attribution. $2M+ revenue generated. Free marketing audit." keywords={["digital marketing", "PPC advertising", "social media marketing", "email marketing", "content strategy", "Google Ads management", "Houston digital marketing", "Houston digital marketing agency", "PPC management services", "social media marketing company", "email marketing automation", "B2B digital marketing"]} schemas={schemas} url={serviceUrl} />
      <div className="min-h-screen bg-background">
        <Header /><VerticalNav /><MobileToolbar />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Digital Marketing" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6"><div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Megaphone className="w-7 h-7 text-primary" /></div><span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Digital Marketing</span></div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Digital Marketing Campaigns</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">Strategic digital marketing campaigns that drive measurable growth. From PPC to content marketing — every dollar tracked, every result proven.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Get Marketing Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">See Results</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 border-y border-border/50"><div className="container mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center"><div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{s.value}</div><div className="text-sm text-muted-foreground">{s.label}</div></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Marketing Services</h2><p className="text-muted-foreground max-w-2xl mx-auto">Full-funnel marketing strategies that attract, engage, and convert at every touchpoint.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="p-6 h-full"><s.icon className="w-10 h-10 text-primary mb-4" /><h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Campaign Results</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{caseStudies.map((c, i) => (<motion.div key={c.industry} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 text-center h-full"><div className="text-xs text-muted-foreground mb-2">{c.industry}</div><div className="font-serif text-3xl text-primary mb-2">{c.result}</div><p className="text-sm text-muted-foreground">{c.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Marketing Technology Stack</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{techStack.map((s, i) => (<motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 h-full"><h3 className="font-serif text-lg text-primary mb-4">{s.category}</h3><ul className="space-y-2">{s.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />{item}</li>))}</ul></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Marketing Process</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{process.map((item, i) => (<motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div><h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (<motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-8 h-full"><Quote className="w-8 h-8 text-primary/30 mb-4" /><p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p><div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div><div className="font-medium text-foreground text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.title}</div></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Marketing Packages</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{packages.map((pkg, i) => (<motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>{pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Best Value</div>}<div className="text-center mb-6"><h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3><div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div><p className="text-sm text-muted-foreground">{pkg.description}</p></div><ul className="space-y-3 mb-8">{pkg.features.map(f => (<li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}</ul><Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild><Link to="/contact">Get Started</Link></Button></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2></motion.div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left"><h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3><ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>}</LuxuryCard></motion.div>))}</div></div></section>

          {/* Trust & Certifications */}
          <section className="py-16 border-b border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-8"><span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Trusted & Certified</span></div>
              <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                {certifications.map((cert, i) => (
                  <motion.div key={cert} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground whitespace-nowrap">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Cardinal */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Choose Cardinal</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">See the difference a world-class team makes.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                {comparisons.map((c, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                    <LuxuryCard className="p-6 h-full">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-foreground text-sm mb-1">{c.cardinal}</div>
                          <div className="text-xs text-muted-foreground flex items-center gap-1"><XCircle className="w-3 h-3" /> {c.typical}</div>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Related Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Explore complementary services to maximize your digital impact.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {relatedServices.map((s, i) => (
                  <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={s.href}>
                      <LuxuryCard className="p-6 h-full hover:border-primary transition-colors">
                        <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                        <span className="text-primary text-sm flex items-center gap-1">Learn more <ArrowRight className="w-3 h-3" /></span>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 lg:py-32 bg-primary/5"><div className="container mx-auto px-6 lg:px-12 text-center"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Grow Your Business?</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Get a free marketing audit and discover untapped growth opportunities.</p><Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Get Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></motion.div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
