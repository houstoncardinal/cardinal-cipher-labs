import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe,
  Smartphone,
  Search,
  Megaphone,
  Palette,
  MousePointer,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Star,
  Zap,
  Shield,
} from "lucide-react";

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

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
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
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
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
                0{index + 1}
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
              {service.highlights.map((highlight, i) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + i * 0.08 }}
                  className="flex items-center gap-1.5"
                >
                  <CheckCircle2 size={12} className="text-emerald-500 flex-shrink-0" />
                  <span className="text-[11px] font-semibold text-gray-600">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {service.capabilities.map((cap, i) => (
                <motion.span
                  key={cap}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.04 }}
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
}

const trustSignals = [
  { icon: Star, label: "4.9/5 Average Rating" },
  { icon: Shield, label: "SOC 2 & ISO 27001" },
  { icon: Zap, label: "72-Hour Rush Available" },
];

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden bg-[#FAFAFA]">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Vertical red accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/8 to-transparent" />

      {/* Ambient orbs */}
      <motion.div
        className="absolute -left-40 top-20 w-[500px] h-[500px] bg-red-100/20 rounded-full blur-[120px]"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-40 bottom-20 w-[500px] h-[500px] bg-blue-100/15 rounded-full blur-[120px]"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          {/* Top accent line */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-red-300"
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-[11px] tracking-[0.3em] uppercase text-red-500 font-semibold">
              What We Build
            </span>
            <motion.div
              className="w-16 h-px bg-gradient-to-l from-transparent via-red-500 to-red-300"
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.75rem] text-gray-900 leading-[1.08] tracking-tight mb-5">
            Websites, Apps &{" "}
            <span className="relative inline-block">
              Marketing
              <motion.div
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 via-red-400 to-transparent rounded-full"
                initial={{ scaleX: 0, originX: 0 }}
                animate={isHeaderInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </span>
            <br />
            <span className="text-gray-400">That Drive Real Results</span>
          </h2>

          <p className="text-base lg:text-[17px] text-gray-500 max-w-2xl mx-auto leading-relaxed mt-8">
            From custom websites and mobile apps to SEO and digital marketing — we build the digital infrastructure that turns visitors into customers and clicks into revenue.
          </p>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-8 mb-16"
        >
          {trustSignals.map((signal, i) => (
            <div key={signal.label} className="flex items-center gap-2">
              <signal.icon size={14} className="text-red-500" />
              <span className="text-[12px] text-gray-500 font-medium">{signal.label}</span>
              {i < trustSignals.length - 1 && (
                <div className="w-px h-4 bg-gray-200 ml-6" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 text-center"
        >
          <p className="text-sm text-gray-400 mb-6">Not sure which service is right for you?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white text-sm font-semibold tracking-wide rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
          >
            Schedule a Free Consultation
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
