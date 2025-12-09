import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Megaphone, 
  Palette, 
  MousePointer,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    category: "WEB DEVELOPMENT",
    title: "Custom Website Development",
    description: "Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms.",
    price: "$2,500",
    capabilities: ["Enterprise Sites", "E-commerce", "API Architecture", "CMS Integration"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Smartphone,
    category: "MOBILE APPS",
    title: "Mobile & Web Applications",
    description: "Custom mobile apps and web applications that streamline business operations. Built for performance and scalability.",
    price: "$5,000",
    capabilities: ["iOS & Android", "Web Applications", "Cross-Platform", "App Optimization"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Search,
    category: "SEO & ANALYTICS",
    title: "SEO & Analytics Services",
    description: "Comprehensive SEO optimization and analytics solutions that drive real results and qualified traffic.",
    price: "$1,500",
    capabilities: ["Technical SEO", "Schema Markup", "Analytics Setup", "Ranking Strategy"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Megaphone,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Campaigns",
    description: "Strategic digital marketing campaigns that drive growth. From social media to email marketing with measurable results.",
    price: "$2,000",
    capabilities: ["PPC Advertising", "Social Media", "Email Marketing", "Content Strategy"],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Palette,
    category: "BRAND IDENTITY",
    title: "Brand Identity Design",
    description: "Complete brand identity solutions that make your business stand out. Cohesive visual identities that resonate.",
    price: "$1,200",
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Collateral"],
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: MousePointer,
    category: "UX/UI DESIGN",
    title: "UX/UI Experience Optimization",
    description: "User-centered design and interface optimization that creates exceptional digital experiences and drives conversions.",
    price: "$1,800",
    capabilities: ["User Research", "Interface Design", "Conversion Optimization", "A/B Testing"],
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
      className="group relative"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
        e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
      }}
    >
      <div className="card-enterprise h-full bg-card/50 backdrop-blur-sm border border-border/50 p-8 transition-all duration-500 hover:border-primary/30 hover:bg-card/80">
        {/* Gradient background on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
        
        <div className="relative flex flex-col h-full">
          {/* Category */}
          <motion.span 
            className="text-[10px] tracking-[0.25em] text-primary mb-4 inline-block"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          >
            {service.category}
          </motion.span>

          {/* Icon */}
          <motion.div 
            className="w-14 h-14 bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110"
            whileHover={{ rotate: 5 }}
          >
            <service.icon size={26} className="text-primary transition-transform group-hover:scale-110" />
          </motion.div>

          {/* Title */}
          <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-gradient-primary transition-all">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
            {service.description}
          </p>

          {/* Capabilities */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.capabilities.map((cap, i) => (
              <motion.span
                key={cap}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 + i * 0.05 }}
                className="text-[10px] px-2.5 py-1 bg-secondary/50 text-text-secondary tracking-wide border border-border/50 group-hover:border-primary/20 transition-colors"
              >
                {cap}
              </motion.span>
            ))}
          </div>

          {/* Price & Link */}
          <div className="flex items-center justify-between pt-5 border-t border-border/50 group-hover:border-primary/20 transition-colors">
            <div>
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Starting at</span>
              <div className="font-serif text-2xl text-foreground">{service.price}</div>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs text-foreground hover:text-primary transition-colors group/link tracking-wide uppercase"
              whileHover={{ x: 4 }}
            >
              <span>Learn More</span>
              <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Connection lines between cards */}
      {index < services.length - 1 && index % 3 !== 2 && (
        <motion.div
          className="absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent hidden lg:block"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        />
      )}
    </motion.div>
  );
}

export function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="services" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-primary to-primary/30"
              initial={{ scaleX: 0 }}
              animate={isHeaderInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl leading-[1.1]">
            Digital solutions that grow your business
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            End-to-end digital solutions designed to transform businesses. From custom websites to comprehensive digital marketing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute -right-20 top-1/3 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
