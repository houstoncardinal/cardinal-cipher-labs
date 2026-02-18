import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Trophy, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generatePortfolioSchemas, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";

const caseStudies = [
  { image: "/portfolio/vargas.png", category: "Tax Preparation Services", title: "Vargas Tax Services", description: "Professional tax preparation platform with customized quick action widgets, powerful SEO coverage across America, and dedicated landing pages for each individual service offering.", tags: ["Tax Preparation", "Quick Actions", "Landing Pages"], metrics: [{ value: "1000+", label: "Clients" }, { value: "15+", label: "Services" }, { value: "98%", label: "Satisfaction" }], url: "https://vargastax.com" },
  { image: "/portfolio/blutouch.png", category: "Luxury Pool Design", title: "BluTouch Pools & Spas", description: "Houston's premier custom pool builder featuring 3-D reality view technology, personal consultations, and award-winning design team crafting luxury backyard oases.", tags: ["Custom Pools", "3D Design", "Luxury Spas"], metrics: [{ value: "200+", label: "Pools Built" }, { value: "10+", label: "Years" }, { value: "4.9/5", label: "Rating" }], url: "https://blutouchpools.com" },
  { image: "/portfolio/clearledger.png", category: "Financial Services", title: "ClearLedger Solutions", description: "Trusted financial partner providing accurate, reliable, and transparent bookkeeping services tailored specifically for small businesses and entrepreneurs.", tags: ["Bookkeeping", "Small Business", "Financial"], metrics: [{ value: "500+", label: "Clients" }, { value: "99.9%", label: "Accuracy" }, { value: "4.9/5", label: "Rating" }], url: "https://clearledger.com" },
  { image: "/portfolio/houinc.png", category: "Construction Excellence", title: "Houston Enterprise", description: "Leading Houston construction company transforming dreams into reality with residential and commercial projects built on quality, integrity, and innovation.", tags: ["Residential", "Commercial", "Renovations"], metrics: [{ value: "50+", label: "Projects" }, { value: "100%", label: "On-Time" }, { value: "5-Star", label: "Reviews" }] },
  { image: "/portfolio/unitedccr.png", category: "Disaster Restoration", title: "United CCR", description: "2025 Aggie 100 Honoree delivering commercial construction, emergency restoration, and facilities maintenance across the southern U.S. with expert craftsmanship.", tags: ["Restoration", "Construction", "Emergency"], metrics: [{ value: "24/7", label: "Response" }, { value: "100+", label: "Properties" }, { value: "Aggie 100", label: "Honoree" }] },
  { image: "/portfolio/apnclinic.png", category: "Pain Management", title: "APN Clinic", description: "Interventional pain management specialists treating traumatic brain injury and PTSD. Proud opiate-free facility specializing in auto accident and personal injury patients.", tags: ["Pain Management", "TBI", "PTSD Treatment"], metrics: [{ value: "100%", label: "Opiate-Free" }, { value: "Expert", label: "Care" }, { value: "4.9/5", label: "Rating" }] },
  { image: "/portfolio/abqmri.png", category: "Medical Imaging", title: "ABQ MRI", description: "Superior quality MRI and X-Ray center with cutting-edge technology, the most knowledgeable physicians and radiologists, delivering fast accurate diagnostic reports.", tags: ["MRI Imaging", "X-Ray", "Diagnostics"], metrics: [{ value: "Fast", label: "Reports" }, { value: "Advanced", label: "Tech" }, { value: "5-Star", label: "Care" }] },
  { image: "/portfolio/hitechlogic.png", category: "IT & Automation", title: "HiTech Logic", description: "Engineering competitive advantage through intelligent automation and AI-powered managed services delivering 50% cost savings and 75% faster incident resolution.", tags: ["AI Automation", "Managed IT", "Cloud Ops"], metrics: [{ value: "85%", label: "Fewer Alerts" }, { value: "4.5x", label: "Faster" }, { value: "99.98%", label: "Uptime" }] },
  { image: "/portfolio/svrlawfirm.png", category: "Legal Excellence", title: "SVR Law Firm", description: "Trusted Texas trial lawyers with proven expertise in personal injury and criminal defense, delivering superior legal strategies and a commitment to achieving the best results.", tags: ["Personal Injury", "Criminal Defense", "Trial Law"], metrics: [{ value: "100+", label: "Cases Won" }, { value: "Free", label: "Consultation" }, { value: "5-Star", label: "Reviews" }] },
  { image: "/portfolio/axiomio.png", category: "Enterprise Technology", title: "AxiomIO", description: "Enterprise technology solutions provider delivering scalable infrastructure, cloud migration, and digital transformation services for Fortune 500 companies.", tags: ["Enterprise", "Cloud Solutions", "Digital Transformation"], metrics: [{ value: "500+", label: "Enterprise Clients" }, { value: "99.99%", label: "Uptime" }, { value: "24/7", label: "Support" }] },
  { image: "/portfolio/allhoustonproperty.png", category: "Real Estate", title: "All Houston Property", description: "Comprehensive real estate platform featuring property listings, market analysis, and expert guidance for buying, selling, and investing in Houston properties.", tags: ["Real Estate", "Property Listings", "Market Analysis"], metrics: [{ value: "1000+", label: "Properties" }, { value: "500+", label: "Happy Clients" }, { value: "15+", label: "Years Experience" }] },
  { image: "/portfolio/hougenpros.png", category: "Property Management", title: "Hou Gen Pros", description: "Professional property management services delivering comprehensive solutions for residential and commercial properties across the Houston metropolitan area.", tags: ["Property Management", "Residential", "Commercial"], metrics: [{ value: "300+", label: "Properties Managed" }, { value: "98%", label: "Occupancy Rate" }, { value: "4.9/5", label: "Rating" }] },
];

export default function PortfolioPage() {
  const schemas = [
    ...generatePortfolioSchemas(),
    generateWebPageSchema({
      name: "Our Portfolio — Cardinal Consulting",
      description: "Explore our portfolio of enterprise-grade digital solutions across healthcare, finance, construction, and more.",
      url: `${siteConfig.url}/portfolio`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Portfolio", url: `${siteConfig.url}/portfolio` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${siteConfig.url}/portfolio`,
      name: "Cardinal Consulting Portfolio",
      description: "Case studies and client success stories from Cardinal Consulting.",
      url: `${siteConfig.url}/portfolio`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: caseStudies.length,
        itemListElement: caseStudies.map((cs, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "CreativeWork",
            name: cs.title,
            description: cs.description,
            creator: { "@id": `${siteConfig.url}#organization` },
          },
        })),
      },
    },
  ];

  return (
    <>
      <SEOHead
        title="Portfolio & Case Studies"
        description="Explore Cardinal Consulting's portfolio of enterprise-grade digital solutions. See how we've transformed businesses across healthcare, finance, legal, and construction industries."
        url={`${siteConfig.url}/portfolio`}
        schemas={schemas}
        keywords={["portfolio", "case studies", "client work", "web development portfolio", "enterprise solutions"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">← Back to Home</Link>
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Work</span>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Client Success Stories</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">Real results for real businesses. Explore how we've helped organizations across industries achieve their digital transformation goals.</p>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "50+", label: "Clients Served" },
                  { value: "150+", label: "Projects Delivered" },
                  { value: "10+", label: "Industries" },
                  { value: "98%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 gap-8">
                {caseStudies.map((cs, i) => (
                  <motion.div key={cs.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}>
                    <LuxuryCard elevation={3} borderStyle="metallic-platinum" className="overflow-hidden h-full">
                      <div className="relative aspect-video overflow-hidden">
                        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        <span className="absolute top-4 left-4 text-[10px] tracking-[0.2em] uppercase bg-primary/90 text-primary-foreground px-3 py-1">{cs.category}</span>
                      </div>
                      <div className="p-8">
                        <h3 className="font-serif text-2xl text-foreground mb-3">{cs.title}</h3>
                        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{cs.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {cs.tags.map((tag) => (
                            <span key={tag} className="text-xs px-3 py-1 bg-secondary/50 text-muted-foreground border border-border/50">{tag}</span>
                          ))}
                        </div>
                        <div className="flex gap-4 pt-6 border-t border-border/50">
                          {cs.metrics.map((m, mi) => {
                            const icons = [Trophy, Users, Star];
                            const Icon = icons[mi];
                            return (
                              <div key={m.label} className="flex items-center gap-2">
                                <Icon size={14} className="text-primary" />
                                <div>
                                  <div className="font-serif text-lg text-foreground">{m.value}</div>
                                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Your Project Could Be Next</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's create something extraordinary together. Start with a free consultation.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
