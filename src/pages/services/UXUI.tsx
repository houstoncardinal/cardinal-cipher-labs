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
  MousePointer, Users, BarChart3, Layers, Smartphone, TestTube, ArrowRight,
  Check, Eye, Zap, Quote, Star, ChevronDown, Accessibility, Figma, Gauge,
  ScanLine, PenTool, CheckCircle, XCircle, Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: Users, title: "User Research & Discovery", description: "Deep understanding of your users through in-depth interviews, surveys, contextual inquiry, card sorting, behavioral analytics, and persona development." },
  { icon: Layers, title: "Information Architecture", description: "Intuitive content organization, navigation structures, and user flows designed through tree testing and validated with real users for effortless wayfinding." },
  { icon: MousePointer, title: "Interface Design", description: "Beautiful, functional interfaces designed in Figma with pixel-perfect attention to detail, micro-interactions, and design systems that scale across products." },
  { icon: Smartphone, title: "Responsive & Adaptive Design", description: "Seamless experiences across all devices — mobile, tablet, desktop, and emerging form factors — with platform-specific patterns for iOS and Android." },
  { icon: TestTube, title: "Usability Testing & A/B Testing", description: "Moderated and unmoderated usability testing, A/B and multivariate testing, first-click testing, and five-second tests for data-driven design decisions." },
  { icon: BarChart3, title: "Conversion Rate Optimization", description: "Strategic improvements that turn visitors into customers through funnel analysis, heatmap insights, session recordings, and behavioral optimization." },
  { icon: Accessibility, title: "Accessibility & Inclusive Design", description: "WCAG 2.1 AA/AAA compliance audits, screen reader optimization, keyboard navigation, color contrast, and inclusive design patterns for all abilities." },
  { icon: ScanLine, title: "Design Systems", description: "Scalable component libraries, design tokens, documentation, and governance frameworks that ensure consistency across products and teams." },
  { icon: PenTool, title: "Prototyping & Animation", description: "High-fidelity interactive prototypes with production-ready micro-animations, transitions, and motion design using Figma, Principle, and Framer." },
];

const techStack = [
  { category: "Design", items: ["Figma", "Sketch", "Adobe XD", "Illustrator", "Photoshop"] },
  { category: "Prototyping", items: ["Figma Prototyping", "Principle", "ProtoPie", "Framer", "InVision"] },
  { category: "Research", items: ["Maze", "UserTesting", "Hotjar", "Optimal Workshop", "Dovetail"] },
  { category: "Handoff", items: ["Zeplin", "Storybook", "Tokens Studio", "Supernova", "Specify"] },
];

const packages = [
  {
    name: "UX Audit",
    price: "$3,500",
    description: "Identify critical usability issues and improvement opportunities",
    features: ["Comprehensive heuristic evaluation", "User flow analysis & optimization", "Accessibility audit (WCAG 2.1)", "Competitor UX benchmarking", "Analytics review & insights", "Prioritized recommendations report", "1-hour presentation & Q&A", "30-day follow-up support"],
    popular: false,
  },
  {
    name: "Design Sprint",
    price: "$15,000",
    description: "Rapid prototype & validate in 5 days",
    features: ["5-day Google Ventures design sprint", "User research & persona development", "User journey mapping", "Wireframes & interactive prototypes", "Usability testing (5 participants)", "Design specifications & assets", "Implementation roadmap", "2 months implementation support"],
    popular: true,
  },
  {
    name: "Full Redesign",
    price: "$35,000+",
    description: "Complete experience transformation with design system",
    features: ["Extensive user research (20+ interviews)", "Complete design system & component library", "High-fidelity prototypes (all screens)", "Usability testing (3 rounds)", "Accessibility compliance (WCAG 2.1 AA)", "Developer handoff with documentation", "Design tokens & Storybook integration", "3 months iteration & support"],
    popular: false,
  },
];

const stats = [
  { value: "40%", label: "Avg Conversion Lift" },
  { value: "60%", label: "Task Success Increase" },
  { value: "35%", label: "Bounce Rate Reduction" },
  { value: "4.8★", label: "Client Satisfaction" },
];

const metrics = [
  { label: "User Satisfaction Score", before: "3.2", after: "4.7", improvement: "+47%" },
  { label: "Task Completion Rate", before: "62%", after: "89%", improvement: "+44%" },
  { label: "Time on Task", before: "4.5min", after: "1.8min", improvement: "-60%" },
  { label: "Conversion Rate", before: "2.1%", after: "4.8%", improvement: "+129%" },
];

const process = [
  { step: "01", title: "Research & Discovery", description: "Understand users, business goals, and competitive landscape through interviews, surveys, analytics review, and stakeholder workshops." },
  { step: "02", title: "Define & Strategize", description: "Create personas, user journey maps, success metrics, and design principles that guide every decision throughout the project." },
  { step: "03", title: "Ideate & Wireframe", description: "Explore multiple solutions through sketching, wireframing, and rapid prototyping. Diverge before converging on the best approach." },
  { step: "04", title: "Design & Prototype", description: "Build high-fidelity interactive prototypes in Figma with micro-animations, design tokens, and responsive variants for testing." },
  { step: "05", title: "Test & Validate", description: "Validate designs with real users through moderated testing, A/B tests, and analytics. Measure against success metrics." },
  { step: "06", title: "Iterate & Deliver", description: "Refine based on test data, prepare developer handoff with design specs, and support implementation through QA and launch." },
];

const testimonials = [
  { author: "Rachel Chen", title: "VP Product, CloudScale Platform", body: "Cardinal's UX redesign increased our SaaS trial-to-paid conversion by 129%. Their research-driven approach uncovered user pain points we never knew existed. The design system they built saves our team hundreds of hours.", rating: 5 },
  { author: "Michael Torres", title: "CTO, FinanceFlow App", body: "Our mobile app's user satisfaction score went from 3.2 to 4.7 after Cardinal's redesign. They reduced our key user flow from 12 steps to 4. Brilliantly simple.", rating: 5 },
  { author: "Karen Walsh", title: "Head of Digital, Metro Health Network", body: "The patient portal redesign reduced support calls by 73%. Cardinal made complex medical workflows feel intuitive. Their accessibility expertise meant we exceeded WCAG compliance.", rating: 5 },
];

const faqs = [
  { question: "What's the difference between UX and UI design?", answer: "UX (User Experience) design focuses on the overall experience — research, user flows, information architecture, and usability. UI (User Interface) design focuses on the visual layer — colors, typography, spacing, and interactive elements. We provide both, ensuring your product is both strategically sound and visually stunning." },
  { question: "How do you measure the success of a UX project?", answer: "We establish baseline metrics before starting (conversion rates, task completion, satisfaction scores, support tickets) and measure improvements after launch. Common KPIs include conversion rate lift, task success rate, time-on-task reduction, NPS/CSAT improvement, and support cost reduction." },
  { question: "Do you work with existing design systems?", answer: "Yes, we work with existing systems (extending and improving them) or create new ones from scratch. We support all major platforms including Figma libraries, Storybook, design tokens, and can integrate with tools like Specify or Tokens Studio for design-to-code workflows." },
  { question: "How many users do you test with?", answer: "Research shows 5 users catch 85% of usability issues. For our UX Audit, we test with 5 participants. Design Sprint includes 5 participants. Full Redesign includes 3 rounds of 5-8 participants each. For quantitative A/B testing, we calculate sample sizes based on statistical significance requirements." },
  { question: "Do you design for mobile and desktop?", answer: "Yes, we design responsive experiences for all screen sizes. We follow a mobile-first approach, then scale up to tablet and desktop. For native apps, we follow platform-specific guidelines (Apple HIG, Material Design) while maintaining your brand's visual identity." },
  { question: "How do you handle developer handoff?", answer: "We use Figma with detailed specs, design tokens, and component documentation. We provide responsive behavior annotations, interaction specifications, edge case designs, and error states. We stay involved during development for QA reviews and design support." },
];

const comparisons = [
  { cardinal: "Research-driven design backed by user data", typical: "Aesthetics-only with no user validation" },
  { cardinal: "40% average conversion lift with measured results", typical: "No metrics or success tracking" },
  { cardinal: "Usability testing included in every engagement", typical: "Testing is an extra cost add-on" },
  { cardinal: "Complete design system delivery with documentation", typical: "One-off mockups with no system" },
  { cardinal: "Accessibility (WCAG 2.1) baked into every design", typical: "Accessibility not considered at all" },
];

const certifications = [
  "Nielsen Norman Group Certified",
  "Google UX Design Certified",
  "IAAP CPACC Certified",
  "Figma Certified Partner",
  "UXPA Member",
  "W3C WCAG Contributor",
];

const relatedServices = [
  { title: "Web Development", href: "/services/web-development", description: "Pixel-perfect implementation of your designs" },
  { title: "Mobile Apps", href: "/services/mobile-apps", description: "Native app experiences with great UX" },
  { title: "Brand Identity", href: "/services/brand-identity", description: "Visual identity that your UI reflects" },
];

const serviceUrl = `${siteConfig.url}/services/ux-ui`;

const schemas = generateServicePageSchemas({
  serviceName: "UX/UI Design & Experience Optimization",
  serviceDescription: "User-centered design and interface optimization that creates exceptional digital experiences. Research-backed design that drives conversions and delights users.",
  serviceType: "UXDesignService",
  serviceUrl,
  category: "UX/UI Design",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "UX/UI Design", url: serviceUrl },
  ],
  faqs,
  offers: packages.map(p => ({ name: p.name, price: p.price, description: p.description, features: p.features })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({ author: t.author, authorTitle: t.title.split(",")[0], company: t.title.split(",").slice(1).join(",").trim(), rating: t.rating, body: t.body, date: "2025-01-28" })),
  aggregateRating: { ratingValue: 4.8, reviewCount: 61 },
  duration: "P4W",
  techStack,
  features: services.map(s => ({ title: s.title, description: s.description })),
});

export default function UXUI() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="UX/UI Design & Experience Optimization" description="40% average conversion lift from expert UX/UI design. User research, prototyping, design systems & accessibility. Research-driven design that delivers results." keywords={["UX design", "UI design", "user experience", "interface design", "conversion optimization", "A/B testing", "design system", "accessibility audit", "UX design agency Houston", "UI design services", "user experience consulting", "conversion rate optimization agency", "design system development"]} schemas={schemas} url={serviceUrl} />
      <div className="min-h-screen bg-background">
        <Header /><VerticalNav />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "UX/UI Design" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6"><div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><MousePointer className="w-7 h-7 text-primary" /></div><span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">UX/UI Design</span></div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">UX/UI Experience Optimization</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">User-centered design and interface optimization that creates exceptional digital experiences. Research-backed, data-driven design that converts visitors into customers.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Get UX Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">See Case Studies</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 border-y border-border/50"><div className="container mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center"><div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{s.value}</div><div className="text-sm text-muted-foreground">{s.label}</div></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">UX/UI Services</h2><p className="text-muted-foreground max-w-2xl mx-auto">Research-driven design that puts users first and business outcomes at the center.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="p-6 h-full"><s.icon className="w-10 h-10 text-primary mb-4" /><h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          {/* Measurable Impact */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Measurable Impact</h2><p className="text-muted-foreground max-w-2xl mx-auto">Average improvements we deliver for our clients — measured, not estimated.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{metrics.map((m, i) => (<motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 text-center h-full"><h3 className="text-sm text-muted-foreground mb-4">{m.label}</h3><div className="flex items-center justify-center gap-4 mb-2"><span className="text-lg text-muted-foreground line-through">{m.before}</span><Zap className="w-4 h-4 text-primary" /><span className="text-2xl font-serif text-foreground">{m.after}</span></div><div className="text-primary font-medium">{m.improvement}</div></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Design Tools & Platform</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{techStack.map((s, i) => (<motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 h-full"><h3 className="font-serif text-lg text-primary mb-4">{s.category}</h3><ul className="space-y-2">{s.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />{item}</li>))}</ul></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Design Process</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{process.map((item, i) => (<motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div><h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Client Success Stories</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (<motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-8 h-full"><Quote className="w-8 h-8 text-primary/30 mb-4" /><p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p><div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div><div className="font-medium text-foreground text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.title}</div></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">UX/UI Packages</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{packages.map((pkg, i) => (<motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>{pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Recommended</div>}<div className="text-center mb-6"><h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3><div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div><p className="text-sm text-muted-foreground">{pkg.description}</p></div><ul className="space-y-3 mb-8">{pkg.features.map(f => (<li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}</ul><Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild><Link to="/contact">Get Started</Link></Button></LuxuryCard></motion.div>))}</div></div></section>

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

          <section className="py-24 lg:py-32 bg-primary/5"><div className="container mx-auto px-6 lg:px-12 text-center"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Eye className="w-12 h-12 text-primary mx-auto mb-6" /><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Elevate Your User Experience?</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Get a free UX audit and discover opportunities to increase conversions and delight users.</p><Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Request Free Audit <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></motion.div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
