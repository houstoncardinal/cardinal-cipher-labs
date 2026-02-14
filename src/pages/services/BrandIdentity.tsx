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
  Palette, Layers, PenTool, BookOpen, Printer, Eye, ArrowRight, Check,
  Sparkles, Quote, Star, ChevronDown, Lightbulb, Figma, Box, Type, Image
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const services = [
  { icon: PenTool, title: "Logo Design", description: "Distinctive, memorable logos crafted through extensive exploration. We present 5-8 unique concepts refined through collaborative iteration to capture your brand's DNA." },
  { icon: Palette, title: "Color Systems", description: "Strategic color palettes grounded in color psychology that evoke the right emotions, ensure brand consistency, and meet WCAG accessibility contrast requirements." },
  { icon: BookOpen, title: "Brand Guidelines", description: "Comprehensive 40-80 page style guides with usage rules, spacing, clear space, minimum sizes, do's/don'ts, and application examples for every touchpoint." },
  { icon: Type, title: "Typography & Visual Identity", description: "Custom typography selection and pairing, iconography systems, graphic elements, patterns, and illustration style that create a cohesive visual language." },
  { icon: Printer, title: "Print & Physical Collateral", description: "Business cards, letterheads, envelopes, packaging, signage, vehicle wraps, trade show materials, and marketing collateral designed to impress." },
  { icon: Eye, title: "Brand Strategy & Positioning", description: "Market positioning, competitive analysis, brand archetype definition, messaging frameworks, tone of voice, and brand story development." },
  { icon: Image, title: "Digital Brand Assets", description: "Social media templates, email signatures, presentation templates, website design guidelines, and digital ad templates for consistent online presence." },
  { icon: Lightbulb, title: "Brand Naming & Taglines", description: "Creative naming services with trademark screening, domain availability checks, and tagline development that captures your brand's value proposition." },
  { icon: Box, title: "Packaging Design", description: "Product packaging, unboxing experiences, label design, and sustainable packaging solutions that stand out on shelves and delight customers." },
];

const techStack = [
  { category: "Design", items: ["Adobe Illustrator", "Figma", "Sketch", "InDesign", "Photoshop"] },
  { category: "Animation", items: ["After Effects", "Lottie", "Rive", "Cinema 4D", "Blender"] },
  { category: "Prototyping", items: ["Figma Prototyping", "InVision", "Principle", "Origami Studio", "ProtoPie"] },
  { category: "Production", items: ["Adobe XD", "Zeplin", "Webflow", "Brandpad", "Frontify"] },
];

const packages = [
  {
    name: "Essentials",
    price: "$5,000",
    description: "Perfect for startups and small businesses establishing their first brand identity",
    features: ["Logo design (5 concepts, 3 revisions)", "Primary & secondary color palette", "Typography selection & pairing", "Basic brand guidelines (20 pages)", "Business card & letterhead design", "Social media profile assets", "Favicon & app icon", "All source files delivered"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$12,000",
    description: "Complete brand identity for established businesses ready to level up",
    features: ["Logo design (8 concepts, unlimited revisions)", "Full color system with applications", "Custom typography & icon set", "40-page brand guidelines book", "Complete stationery suite", "Marketing collateral templates", "Social media template kit (20 templates)", "Email signature & presentation template"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "Full brand transformation for organizations requiring strategic repositioning",
    features: ["Brand strategy workshop (2 days)", "Comprehensive brand audit", "Logo & complete visual identity", "80+ page brand guidelines", "Packaging & environmental design", "Brand launch campaign assets", "Brand voice & messaging framework", "12-month brand guardianship"],
    popular: false,
  },
];

const stats = [
  { value: "200+", label: "Brands Created" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Industry Awards" },
];

const process = [
  { step: "01", title: "Discovery & Research", description: "Deep dive into your business values, mission, target audience, competitive landscape, and aspirational brands through stakeholder workshops and market analysis." },
  { step: "02", title: "Strategy & Positioning", description: "Define brand archetype, positioning statement, messaging framework, value proposition, and personality traits that differentiate you in the marketplace." },
  { step: "03", title: "Creative Exploration", description: "Explore 5-8 unique creative directions through moodboards, concept presentations, and initial logo explorations for stakeholder review." },
  { step: "04", title: "Design Refinement", description: "Iterate and perfect the chosen direction with detailed feedback rounds, testing across applications, and stress-testing in various contexts." },
  { step: "05", title: "System Development", description: "Build the complete brand system — color palettes, typography, patterns, icons, photography direction, and comprehensive guidelines." },
  { step: "06", title: "Launch & Guardianship", description: "Roll out the new brand across all touchpoints with launch assets, team training, and ongoing brand consistency monitoring." },
];

const testimonials = [
  { author: "Alexandra Rivera", title: "Founder, Bloom Wellness Co.", body: "Cardinal created a brand identity that perfectly captures our holistic wellness philosophy. The brand book is stunning — every team member knows exactly how to represent our brand consistently.", rating: 5 },
  { author: "Marcus Thompson", title: "CEO, NovaTech Solutions", body: "The rebrand Cardinal delivered helped us close 3x more enterprise deals. Prospects immediately perceive us as a market leader. The ROI on brand investment is undeniable.", rating: 5 },
  { author: "Elena Vasquez", title: "CMO, GreenPath Organics", body: "Our packaging design stands out on every shelf. Cardinal understood our sustainability values and translated them into a visual identity that resonates with our conscious consumers.", rating: 5 },
];

const faqs = [
  { question: "How long does a brand identity project take?", answer: "The Essentials package typically takes 3-4 weeks, Professional takes 6-8 weeks, and Enterprise projects take 10-14 weeks. We follow a structured process with clear milestones and regular check-ins so you always know where we are." },
  { question: "What's the difference between a logo and a brand identity?", answer: "A logo is one element of your brand identity. A complete brand identity includes your logo, color system, typography, iconography, photography direction, patterns, brand voice, messaging guidelines, and application rules. It's the entire visual and verbal system that makes your brand recognizable and consistent." },
  { question: "Do you provide the source files?", answer: "Yes, all packages include complete source files (AI, EPS, SVG, PDF, PNG) for every deliverable. You own the intellectual property and can use the files with any designer or printer in the future." },
  { question: "Can you rebrand an existing business?", answer: "Absolutely. We've completed 80+ rebranding projects. We start with a brand audit to understand what's working and what needs to change, then develop a strategic transition plan to minimize disruption while maximizing the impact of your new identity." },
  { question: "How do you ensure the brand resonates with our audience?", answer: "We start with extensive research — audience analysis, competitor benchmarking, and stakeholder interviews. We test concepts against your target demographics and refine based on feedback. Every design decision is backed by strategic rationale, not just aesthetics." },
  { question: "Do you offer ongoing brand management?", answer: "Yes, our Enterprise package includes 12-month brand guardianship where we review all brand applications, provide feedback, create new assets as needed, and ensure consistency as your brand is applied across new touchpoints." },
];

const serviceUrl = `${siteConfig.url}/services/brand-identity`;

const schemas = generateServicePageSchemas({
  serviceName: "Brand Identity Design Services",
  serviceDescription: "Complete brand identity solutions including logo design, brand guidelines, visual identity systems, and brand strategy that make your business unforgettable.",
  serviceType: "DesignService",
  serviceUrl,
  category: "Brand Identity Design",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "Brand Identity", url: serviceUrl },
  ],
  faqs,
  offers: packages.map(p => ({ name: p.name, price: p.price, description: p.description, features: p.features })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({ author: t.author, authorTitle: t.title.split(",")[0], company: t.title.split(",").slice(1).join(",").trim(), rating: t.rating, body: t.body, date: "2025-02-05" })),
  aggregateRating: { ratingValue: 4.9, reviewCount: 94 },
  duration: "P3W",
});

export default function BrandIdentity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="Brand Identity Design Services" description="Complete brand identity design — logos, guidelines, visual systems. 200+ brands created, 98% satisfaction, 50+ awards. Transform how the world sees your business." keywords={["brand identity design", "logo design", "brand guidelines", "visual identity", "brand strategy", "branding agency", "Houston brand design"]} schemas={schemas} url={serviceUrl} />
      <div className="min-h-screen bg-background">
        <Header /><VerticalNav /><MobileToolbar />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Brand Identity" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6"><div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Palette className="w-7 h-7 text-primary" /></div><span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Brand Identity</span></div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Brand Identity Design</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">Complete brand identity solutions that make your business unforgettable. From strategic positioning to cohesive visual systems — we build brands that resonate, differentiate, and endure.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Start Your Branding <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">View Our Work</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-16 border-y border-border/50"><div className="container mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((s, i) => (<motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center"><div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{s.value}</div><div className="text-sm text-muted-foreground">{s.label}</div></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Branding Services</h2><p className="text-muted-foreground max-w-2xl mx-auto">Every element crafted to tell your unique story and build lasting recognition.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s, i) => (<motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="p-6 h-full"><s.icon className="w-10 h-10 text-primary mb-4" /><h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Design Tools & Software</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{techStack.map((s, i) => (<motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 h-full"><h3 className="font-serif text-lg text-primary mb-4">{s.category}</h3><ul className="space-y-2">{s.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />{item}</li>))}</ul></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Branding Process</h2></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{process.map((item, i) => (<motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div><h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What Our Clients Say</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (<motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-8 h-full"><Quote className="w-8 h-8 text-primary/30 mb-4" /><p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p><div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div><div className="font-medium text-foreground text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.title}</div></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Branding Packages</h2></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{packages.map((pkg, i) => (<motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>{pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Most Popular</div>}<div className="text-center mb-6"><h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3><div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div><p className="text-sm text-muted-foreground">{pkg.description}</p></div><ul className="space-y-3 mb-8">{pkg.features.map(f => (<li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}</ul><Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild><Link to="/contact">Get Started</Link></Button></LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2></motion.div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left"><h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3><ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>}</LuxuryCard></motion.div>))}</div></div></section>

          <section className="py-24 lg:py-32 bg-primary/5"><div className="container mx-auto px-6 lg:px-12 text-center"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><Sparkles className="w-12 h-12 text-primary mx-auto mb-6" /><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Transform Your Brand?</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's create a brand identity that sets you apart and stands the test of time.</p><Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></motion.div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
