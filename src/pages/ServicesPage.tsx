import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, CheckCircle2, Star, Zap, Shield, Globe, Smartphone, Search, Megaphone, Palette, MousePointer } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";

const services = [
  {
    icon: Globe,
    category: "WEB DEVELOPMENT",
    title: "Custom Website Development",
    description: "Enterprise-grade websites engineered with cutting-edge frameworks. Blazing-fast performance, bulletproof security, and pixel-perfect design that converts.",
    price: "$10,000",
    priceLabel: "Starting at",
    capabilities: ["Enterprise Sites", "E-commerce", "API Architecture", "CMS Integration"],
    highlights: ["99.9% Uptime", "90+ Lighthouse", "WCAG 2.1 AA"],
    gradient: "from-blue-600 to-cyan-500",
    lightGradient: "from-blue-500/5 to-cyan-500/5",
    iconBg: "bg-blue-600",
    tagBg: "bg-blue-50 text-blue-700 border-blue-100",
    link: "/services/web-development",
  },
  {
    icon: Smartphone,
    category: "MOBILE APPS",
    title: "Mobile & Web Applications",
    description: "Native and cross-platform applications that deliver seamless experiences. Built for millions of users with offline-first architecture and real-time sync.",
    price: "Custom",
    priceLabel: "Tailored pricing",
    capabilities: ["iOS & Android", "Web Applications", "Cross-Platform", "App Optimization"],
    highlights: ["60fps Native", "2M+ Downloads", "4.8 App Rating"],
    gradient: "from-violet-600 to-purple-500",
    lightGradient: "from-violet-500/5 to-purple-500/5",
    iconBg: "bg-violet-600",
    tagBg: "bg-violet-50 text-violet-700 border-violet-100",
    link: "/services/mobile-apps",
  },
  {
    icon: Search,
    category: "SEO & ANALYTICS",
    title: "SEO & Analytics Services",
    description: "Data-driven SEO strategies that dominate search rankings. Technical audits, content optimization, and advanced analytics that move the needle.",
    price: "Custom",
    priceLabel: "Based on scope",
    capabilities: ["Technical SEO", "Schema Markup", "Analytics Setup", "Ranking Strategy"],
    highlights: ["250% Avg Traffic", "Page 1 Rankings", "180+ #1 Keywords"],
    gradient: "from-emerald-600 to-teal-500",
    lightGradient: "from-emerald-500/5 to-teal-500/5",
    iconBg: "bg-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    link: "/services/seo-analytics",
  },
  {
    icon: Megaphone,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Campaigns",
    description: "Multi-channel campaigns engineered for ROI. Precision targeting, creative excellence, and transparent attribution across every touchpoint.",
    price: "Custom",
    priceLabel: "Performance-based",
    capabilities: ["PPC Advertising", "Social Media", "Email Marketing", "Content Strategy"],
    highlights: ["350% Avg ROI", "$2M+ Revenue", "45% Cost Cut"],
    gradient: "from-orange-600 to-amber-500",
    lightGradient: "from-orange-500/5 to-amber-500/5",
    iconBg: "bg-orange-600",
    tagBg: "bg-orange-50 text-orange-700 border-orange-100",
    link: "/services/digital-marketing",
  },
  {
    icon: Palette,
    category: "BRAND IDENTITY",
    title: "Brand Identity Design",
    description: "Strategic brand systems that command attention and build trust. From logo conception to comprehensive guidelines that scale across every medium.",
    price: "Custom",
    priceLabel: "Comprehensive packages",
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Collateral"],
    highlights: ["200+ Brands", "50+ Awards", "98% Satisfaction"],
    gradient: "from-rose-600 to-pink-500",
    lightGradient: "from-rose-500/5 to-pink-500/5",
    iconBg: "bg-rose-600",
    tagBg: "bg-rose-50 text-rose-700 border-rose-100",
    link: "/services/brand-identity",
  },
  {
    icon: MousePointer,
    category: "UX/UI DESIGN",
    title: "UX/UI Experience Optimization",
    description: "Research-driven design that converts. User testing, information architecture, and interface systems that delight users and drive business outcomes.",
    price: "Custom",
    priceLabel: "Project-based pricing",
    capabilities: ["User Research", "Interface Design", "Conversion Optimization", "A/B Testing"],
    highlights: ["40% Conv. Lift", "60% Task Success", "35% Less Bounce"],
    gradient: "from-indigo-600 to-blue-500",
    lightGradient: "from-indigo-500/5 to-blue-500/5",
    iconBg: "bg-indigo-600",
    tagBg: "bg-indigo-50 text-indigo-700 border-indigo-100",
    link: "/services/ux-ui",
  },
];

const processSteps = [
  { number: "01", title: "Discovery", description: "We dive deep into your business, goals, and target audience to build a foundation for success." },
  { number: "02", title: "Strategy", description: "Our team crafts a customized roadmap aligned with your objectives and market opportunities." },
  { number: "03", title: "Design", description: "We create stunning, user-centric designs that capture your brand essence and engage customers." },
  { number: "04", title: "Development", description: "Our engineers bring designs to life with clean, scalable code and cutting-edge technology." },
  { number: "05", title: "Launch", description: "We rigorously test and deploy your project, ensuring a smooth transition to production." },
  { number: "06", title: "Growth", description: "We provide ongoing support and optimization to help your digital presence continuously improve." },
];

export default function ServicesPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  const schemas = [
    generateWebPageSchema({
      name: "Our Services — Cardinal Consulting",
      description: "Explore our comprehensive digital services including web development, mobile apps, SEO, digital marketing, brand identity, and UX/UI design.",
      url: `${siteConfig.url}/services`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Services", url: `${siteConfig.url}/services` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Web Design, Mobile Apps & Digital Marketing Services"
        description="Premium digital services from Houston's top agency. Custom web development, mobile apps, SEO, and digital marketing that drive real business results."
        url={`${siteConfig.url}/services`}
        schemas={schemas}
        keywords={["web development services", "mobile app development", "SEO services", "digital marketing agency", "brand identity design", "UX UI design services"]
        }
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div ref={headerRef} initial={{ opacity: 0, y: 30 }} animate={isHeaderInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">← Back to Home</Link>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center rounded-xl"><Globe className="w-7 h-7 text-primary" /></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary font-semibold">Our Services</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Digital Excellence<br />
                  <span className="text-muted-foreground">Delivered Flawlessly</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">From custom websites and mobile apps to SEO and digital marketing — we build the digital infrastructure that turns visitors into customers.</p>
              </motion.div>
            </div>
          </section>

          {/* Services Grid - Homepage Style */}
          <section className="py-24 lg:py-32 bg-[#FAFAFA]">
            {/* Subtle grid */}
            <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            
            {/* Vertical red accent lines */}
            <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
            <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                {services.map((service, i) => {
                  const [isHovered, setIsHovered] = useState(false);
                  const cardRef = useRef<HTMLDivElement>(null);

                  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
                    if (!cardRef.current) return;
                    const rect = cardRef.current.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    cardRef.current.style.setProperty("--mouse-x", `${x}%`);
                    cardRef.current.style.setProperty("--mouse-y", `${y}%`);
                  };

                  return (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, y: 60 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="group relative"
                    >
                      <Link to={service.link} className="block h-full">
                        <div
                          ref={cardRef}
                          onMouseEnter={() => setIsHovered(true)}
                          onMouseLeave={() => setIsHovered(false)}
                          onMouseMove={handleMouseMove}
                          className="relative h-full rounded-[20px] bg-white p-8 lg:p-10 transition-all duration-700 overflow-hidden
                            border border-gray-200/70
                            shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]
                            hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1),0_10px_30px_-10px_rgba(0,0,0,0.05)]
                            hover:border-gray-300/60
                            hover:-translate-y-3
                          "
                        >
                          {/* Mouse-follow radial glow */}
                          <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[20px]"
                            style={{
                              background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.015), transparent 40%)',
                            }}
                          />

                          {/* Gradient wash on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[20px]`} />

                          {/* Left accent bar — always visible, expands on hover */}
                          <motion.div
                            className={`absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b ${service.gradient} rounded-full`}
                            initial={{ scaleY: 0.35, opacity: 0.4, originY: 0 }}
                            animate={isHovered
                              ? { scaleY: 1, opacity: 1, originY: 0 }
                              : { scaleY: 0.35, opacity: 0.4, originY: 0 }
                            }
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          />

                          <div className="relative flex flex-col h-full">
                            {/* Top row: Icon + Category + Index */}
                            <div className="flex items-start justify-between mb-8">
                              <div className="flex items-center gap-4">
                                <motion.div
                                  className={`w-12 h-12 ${service.iconBg} rounded-xl flex items-center justify-center shadow-lg`}
                                  animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                >
                                  <service.icon size={22} className="text-white" strokeWidth={1.8} />
                                </motion.div>
                                <div>
                                  <span className="text-[10px] font-bold tracking-[0.3em] text-gray-400 block">
                                    {service.category}
                                  </span>
                                </div>
                              </div>
                              <span className="text-sm font-mono text-gray-200 font-semibold mt-1">
                                0{i + 1}
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="font-serif text-[22px] lg:text-[26px] text-gray-900 mb-4 leading-[1.2] tracking-tight group-hover:text-gray-800 transition-colors">
                              {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[14px] text-gray-500 leading-[1.7] mb-7 flex-grow">
                              {service.description}
                            </p>

                            {/* Highlight metrics row */}
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-7">
                              {service.highlights.map((highlight, idx) => (
                                <motion.div
                                  key={highlight}
                                  initial={{ opacity: 0 }}
                                  whileInView={{ opacity: 1 }}
                                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                                  className="flex items-center gap-1.5"
                                >
                                  <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                                  <span className="text-[11px] font-semibold text-gray-600">{highlight}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Capability tags */}
                            <div className="flex flex-wrap gap-2 mb-8">
                              {service.capabilities.map((cap, idx) => (
                                <motion.span
                                  key={cap}
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  whileInView={{ opacity: 1, scale: 1 }}
                                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                                  className={`text-[10px] font-semibold px-3 py-1.5 rounded-md border tracking-wide transition-all duration-300 ${service.tagBg}`}
                                >
                                  {cap}
                                </motion.span>
                              ))}
                            </div>

                            {/* Bottom: Price + CTA */}
                            <div className="flex items-end justify-between pt-7 border-t border-gray-100 group-hover:border-gray-200 transition-colors">
                              <div>
                                <span className="text-[10px] text-gray-400 uppercase tracking-[0.15em] font-semibold block">{service.priceLabel}</span>
                                <div className="font-serif text-[30px] font-bold text-gray-900 leading-none mt-1">{service.price}</div>
                              </div>
                              <motion.div
                                className={`inline-flex items-center gap-2 text-[11px] font-bold tracking-wider uppercase px-5 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-md`}
                                animate={isHovered ? { x: 3, scale: 1.02 } : { x: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                              >
                                <span>Explore</span>
                                <ArrowUpRight size={13} />
                              </motion.div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-secondary/20">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Process</span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">How We Deliver Excellence</h2>
                <p className="text-muted-foreground max-w-xl mx-auto">A proven methodology refined across 500+ successful projects.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {processSteps.map((step, i) => (
                  <motion.div key={step.number} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-8 h-full">
                      <div className="flex items-start gap-4">
                        <div className="font-serif text-4xl font-bold text-primary/20">{step.number}</div>
                        <div>
                          <h3 className="font-serif text-xl text-foreground mb-2">{step.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust Signals */}
          <section className="py-20 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { icon: Star, label: "4.9/5 Average Rating", value: "500+" },
                  { icon: Shield, label: "Projects Completed", value: "98%" },
                  { icon: Zap, label: "On-Time Delivery", value: "24/7" },
                  { icon: CheckCircle2, label: "Client Satisfaction", value: "24hr" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <stat.icon size={24} className="mx-auto mb-3 text-primary" />
                    <div className="font-serif text-3xl text-foreground font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Transform Your Business?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss your project and find the perfect solution for your needs.</p>
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
