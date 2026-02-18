import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
  Palette, Layers, PenTool, BookOpen, Printer, Eye, ArrowRight, Check,
  Sparkles, Quote, Star, ChevronDown, Lightbulb, Box, Type, Image,
  CheckCircle, XCircle, Shield, Users, Target, TrendingUp, Award, Zap,
  Globe, ArrowUpRight, Paintbrush, PenLine, FileText, Ruler,
  Award as AwardIcon, Clock, CheckCircle2, Rocket, Sparkles as SparklesIcon,
  MessageSquare, Calendar, Zap as ZapIcon
} from "lucide-react";
import { Link } from "react-router-dom";

// Streamlined, high-converting services
const services = [
  { 
    icon: PenTool, 
    title: "Logo Design", 
    description: "Distinctive logos that capture your brand's essence.",
    gradient: "from-blue-600 to-cyan-500",
    lightGradient: "from-blue-500/5 to-cyan-500/5",
    iconBg: "bg-blue-600"
  },
  { 
    icon: Palette, 
    title: "Color Systems", 
    description: "Strategic palettes that evoke the right emotions.",
    gradient: "from-violet-600 to-purple-500",
    lightGradient: "from-violet-500/5 to-purple-500/5",
    iconBg: "bg-violet-600"
  },
  { 
    icon: BookOpen, 
    title: "Brand Guidelines", 
    description: "Comprehensive guides ensuring consistency everywhere.",
    gradient: "from-emerald-600 to-teal-500",
    lightGradient: "from-emerald-500/5 to-teal-500/5",
    iconBg: "bg-emerald-600"
  },
  { 
    icon: Type, 
    title: "Typography", 
    description: "Custom type that strengthens brand recognition.",
    gradient: "from-orange-600 to-amber-500",
    lightGradient: "from-orange-500/5 to-amber-500/5",
    iconBg: "bg-orange-600"
  },
  { 
    icon: Printer, 
    title: "Print Design", 
    description: "Business cards, packaging that commands attention.",
    gradient: "from-rose-600 to-pink-500",
    lightGradient: "from-rose-500/5 to-pink-500/5",
    iconBg: "bg-rose-600"
  },
  { 
    icon: Eye, 
    title: "Brand Strategy", 
    description: "Positioning that differentiates you from competitors.",
    gradient: "from-indigo-600 to-blue-500",
    lightGradient: "from-indigo-500/5 to-blue-500/5",
    iconBg: "bg-indigo-600"
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We dive deep into your business, values, and goals.", icon: Users },
  { step: "02", title: "Strategy", description: "We define your unique market position.", icon: Target },
  { step: "03", title: "Creative", description: "We explore bold directions until we find perfection.", icon: Lightbulb },
  { step: "04", title: "Refinement", description: "We perfect every detail based on your feedback.", icon: PenTool },
  { step: "05", title: "Development", description: "We build your complete brand system.", icon: Layers },
  { step: "06", title: "Launch", description: "We roll out your powerful new brand everywhere.", icon: Rocket },
];

const testimonials = [
  { author: "Alexandra Rivera", title: "Founder, Bloom Wellness Co.", body: "Cardinal created a brand identity that perfectly captures our philosophy. Our brand book is stunning.", rating: 5 },
  { author: "Marcus Thompson", title: "CEO, NovaTech Solutions", body: "The rebrand helped us close 3x more enterprise deals. Prospects immediately see us as market leaders.", rating: 5 },
  { author: "Elena Vasquez", title: "CMO, GreenPath Organics", body: "Our packaging stands out on every shelf. Cardinal understood our sustainability values perfectly.", rating: 5 },
];

const faqs = [
  { question: "How long does branding take?", answer: "Essentials: 3-4 weeks, Professional: 6-8 weeks, Enterprise: 10-14 weeks." },
  { question: "What's included?", answer: "Everything: logo, colors, typography, guidelines, source files, and more." },
  { question: "Do we own the files?", answer: "100% — you own all intellectual property." },
  { question: "Can you rebrand us?", answer: "Absolutely. 80+ rebrands completed with seamless transitions." },
];

const packages = [
  {
    name: "Essentials",
    price: "$5,000",
    description: "Perfect for startups",
    features: ["5 Logo Concepts", "Color Palette", "Typography", "20pg Guidelines", "Business Cards", "Source Files"],
    popular: false,
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    name: "Professional",
    price: "$12,000",
    description: "Most popular choice",
    features: ["8 Logo Concepts", "Full Color System", "Custom Typography", "40pg Guidelines", "All Stationery", "Social Templates", "Source Files"],
    popular: true,
    gradient: "from-red-500 to-rose-500"
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "For full transformation",
    features: ["Brand Strategy", "Complete Identity", "80pg Guidelines", "Packaging", "Launch Campaign", "12mo Support"],
    popular: false,
    gradient: "from-violet-600 to-purple-500"
  },
];

const stats = [
  { value: "200+", label: "Brands Created" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Awards Won" },
];

const trustBadges = [
  "Adobe Certified", "AIGA Member", "Pantone Partner", "GDUSA Winner"
];

const serviceUrl = `${siteConfig.url}/services/brand-identity`;

const schemas = generateServicePageSchemas({
  serviceName: "Brand Identity Design Services",
  serviceDescription: "Premium brand identity design — logos, guidelines, visual systems. 200+ brands transformed.",
  serviceType: "DesignService",
  serviceUrl,
  category: "Brand Identity",
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

// Optimized Visual Card Component
function VisualCard({ children, index, className = "" }: { children: React.ReactNode; index: number; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
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
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative rounded-[20px] bg-white p-8 transition-all duration-500 overflow-hidden
          border border-gray-200/70
          shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
          hover:border-gray-300/60
          hover:-translate-y-2
        "
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.02), transparent 40%)',
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}

// Service Card
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = service.icon;

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
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <Link to="/contact" className="block h-full">
        <div
          ref={cardRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className="relative h-full rounded-[20px] bg-white p-8 transition-all duration-500 overflow-hidden
            border border-gray-200/70
            shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]
            hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
            hover:border-gray-300/60
            hover:-translate-y-2
          "
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
            style={{
              background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(0,0,0,0.015), transparent 40%)',
            }}
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.lightGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]`} />
          
          <motion.div
            className={`absolute left-0 top-8 bottom-8 w-[3px] bg-gradient-to-b ${service.gradient} rounded-full`}
            initial={{ scaleY: 0.35, opacity: 0.4, originY: 0 }}
            animate={isHovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0.35, opacity: 0.4 }}
            transition={{ duration: 0.4 }}
          />

          <div className="relative">
            <motion.div
              className={`w-14 h-14 ${service.iconBg} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}
              animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Icon size={26} className="text-white" strokeWidth={1.8} />
            </motion.div>
            <h3 className="font-serif text-xl text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// Process Card
function ProcessCard({ item, index }: { item: typeof process[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = item.icon;

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
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative rounded-[20px] bg-white p-7 transition-all duration-500 overflow-hidden
          border border-gray-200/70
          shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
          hover:border-gray-300/60
          hover:-translate-y-2
        "
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[20px]"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(220,38,38,0.02), transparent 40%)',
          }}
        />
        
        <motion.div
          className="absolute left-0 top-6 bottom-6 w-[3px] bg-gradient-to-b from-red-500 to-rose-500 rounded-full"
          initial={{ scaleY: 0.35, opacity: 0.4, originY: 0 }}
          animate={isHovered ? { scaleY: 1, opacity: 1 } : { scaleY: 0.35, opacity: 0.4 }}
          transition={{ duration: 0.4 }}
        />

        <div className="relative flex items-start gap-4">
          <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="font-serif text-lg font-bold text-red-600">{item.step}</span>
          </div>
          <div>
            <h3 className="font-serif text-lg text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Pricing Card
function PricingCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
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
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className={`relative ${pkg.popular ? 'lg:-mt-4' : ''}`}
    >
      <div
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        className="relative h-full rounded-[20px] bg-white p-8 transition-all duration-500 overflow-hidden
          border border-gray-200/70
          shadow-[0_1px_2px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.03)]
          hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]
          hover:border-gray-300/60
          hover:-translate-y-2
        "
      >
        {pkg.popular && (
          <div className="absolute -top-px left-1/2 -translate-x-1/2">
            <div className={`px-6 py-2 bg-gradient-to-r ${pkg.gradient} text-white text-xs font-bold uppercase tracking-wider rounded-t-[20px]`}>
              Most Popular
            </div>
          </div>
        )}

        <div className="relative pt-3">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl text-gray-900 mb-1">{pkg.name}</h3>
            <div className="font-serif text-4xl font-bold text-gray-900">{pkg.price}</div>
            <p className="text-sm text-gray-500 mt-1">{pkg.description}</p>
          </div>

          <ul className="space-y-3 mb-8">
            {pkg.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm">
                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>

          <Button 
            className={`w-full ${pkg.popular ? `bg-gradient-to-r ${pkg.gradient} text-white` : 'bg-gray-900 text-white hover:bg-gray-800'}`}
            asChild
          >
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BrandIdentity() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <SEOHead 
        title="Brand Identity & Logo Design Agency Houston | Cardinal Consulting" 
        description="Transform your brand with Cardinal. Premium logos, brand guidelines, visual systems, and complete brand identity packages. 200+ brands transformed. Free consultation." 
        keywords={["brand identity design", "logo design agency", "brand guidelines", "visual identity design", "brand strategy", "Houston branding agency", "logo design Houston", "brand identity package", "corporate branding", "startup branding", "rebranding agency", "brand book design", "color palette design", "typography design", "brand system design", "packaging design", "business card design", "brand consulting", "brand positioning", "premium branding agency"]} 
        schemas={schemas} 
        url={serviceUrl} 
      />
      
      <div className="min-h-screen bg-[#FAFAFA]">
        <Header />
        <VerticalNav />
        
        
        <main>
          {/* Hero - Conversion Focused */}
          <section ref={heroRef} className="pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 via-transparent to-transparent" />
            
            {/* Ambient orbs */}
            <motion.div 
              className="absolute -left-40 top-20 w-[400px] h-[400px] bg-red-100/30 rounded-full blur-[100px]"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -right-40 bottom-20 w-[400px] h-[400px] bg-red-100/20 rounded-full blur-[100px]"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Brand Identity" }]} />
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={heroInView ? { opacity: 1, y: 0 } : {}} 
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6"
                >
                  <SparklesIcon className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-semibold tracking-wide text-gray-600">Award-Winning Agency</span>
                </motion.div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-5">
                  Brand Identity That{' '}
                  <span className="relative">
                    <span className="relative z-10">Dominates</span>
                    <span className="absolute bottom-1 left-0 right-0 h-3 bg-red-200/40 -z-10 rounded" />
                  </span>
                </h1>
                
                <p className="text-lg text-gray-500 max-w-xl mb-8 leading-relaxed">
                  Transform how the world sees your business. Strategic branding that builds trust, drives recognition, and converts customers.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-gray-900 hover:bg-gray-800 px-8" asChild>
                    <Link to="/contact">Start Your Brand <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="px-8" asChild>
                    <Link to="/portfolio">See Our Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats - Social Proof */}
          <section className="py-12 border-y border-gray-200 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Services - Core Offering */}
          <section className="py-24 lg:py-28 bg-[#FAFAFA]">
            <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/10 to-transparent" />
            <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/10 to-transparent" />

            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
                  Everything You Need
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                  A complete brand system that sets you apart from the competition.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <ServiceCard key={service.title} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Process - Trust Building */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
                  How We Build It
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                  A proven 6-step process that delivers results every time.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {process.map((item, i) => (
                  <ProcessCard key={item.step} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials - Social Proof */}
          <section className="py-24 lg:py-28 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mb-3">
                  What Clients Say
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <Quote className="w-8 h-8 text-red-500/30 mb-3" />
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.body}"</p>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <div className="font-medium text-gray-900 text-sm">{t.author}</div>
                      <div className="text-xs text-gray-500">{t.title}</div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing - Clear CTA */}
          <section className="py-24 lg:py-28 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-14"
              >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-3">
                  Simple Investment
                </h2>
                <p className="text-gray-500 max-w-lg mx-auto">
                  Transparent pricing. No hidden fees. Everything you need to succeed.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {packages.map((pkg, i) => (
                  <PricingCard key={pkg.name} pkg={pkg} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* Trust Badges */}
          <section className="py-10 border-y border-gray-200 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap justify-center gap-8">
                {trustBadges.map((badge, i) => (
                  <motion.div
                    key={badge}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-2 text-gray-500"
                  >
                    <Shield className="w-4 h-4" />
                    <span className="text-sm font-medium">{badge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQs - Quick Answers */}
          <section className="py-20 lg:py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="font-serif text-2xl md:text-3xl text-gray-900">Questions?</h2>
              </motion.div>

              <div className="max-w-2xl mx-auto space-y-3">
                {faqs.map((faq, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-50 rounded-xl overflow-hidden">
                      <button 
                        onClick={() => setOpenFaq(openFaq === i ? null : i)} 
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {openFaq === i && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5">
                              <p className="text-gray-600 text-sm">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="py-24 lg:py-28 bg-gray-900 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 opacity-30"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(220,38,38,0.3), transparent 50%), radial-gradient(circle at 70% 50%, rgba(220,38,38,0.2), transparent 50%)'
              }}
            />
            
            <div className="container mx-auto px-6 lg:px-12 relative text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <SparklesIcon className="w-10 h-10 text-red-500 mx-auto mb-5" />
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Ready to Stand Out?
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto mb-8">
                  Book your free 30-minute strategy call. No obligation.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8" asChild>
                    <Link to="/contact">Schedule Free Call <Calendar className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-white/5 px-8" asChild>
                    <Link to="/portfolio">View Portfolio</Link>
                  </Button>
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
