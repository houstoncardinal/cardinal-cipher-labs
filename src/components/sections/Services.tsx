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
import { LuxuryCard } from "@/components/ui/luxury-card";

const services = [
  {
    icon: Globe,
    category: "WEB DEVELOPMENT",
    title: "Custom Website Development",
    description: "Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms.",
    price: "$10,000",
    priceNote: "Custom quotes available",
    capabilities: ["Enterprise Sites", "E-commerce", "API Architecture", "CMS Integration"],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Smartphone,
    category: "MOBILE APPS",
    title: "Mobile & Web Applications",
    description: "Custom mobile apps and web applications that streamline business operations. Built for performance and scalability.",
    price: "Custom",
    priceNote: "Tailored to your needs",
    capabilities: ["iOS & Android", "Web Applications", "Cross-Platform", "App Optimization"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Search,
    category: "SEO & ANALYTICS",
    title: "SEO & Analytics Services",
    description: "Comprehensive SEO optimization and analytics solutions that drive real results and qualified traffic.",
    price: "Custom",
    priceNote: "Based on scope",
    capabilities: ["Technical SEO", "Schema Markup", "Analytics Setup", "Ranking Strategy"],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Megaphone,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Campaigns",
    description: "Strategic digital marketing campaigns that drive growth. From social media to email marketing with measurable results.",
    price: "Custom",
    priceNote: "Performance-based",
    capabilities: ["PPC Advertising", "Social Media", "Email Marketing", "Content Strategy"],
    gradient: "from-orange-500/20 to-amber-500/20",
  },
  {
    icon: Palette,
    category: "BRAND IDENTITY",
    title: "Brand Identity Design",
    description: "Complete brand identity solutions that make your business stand out. Cohesive visual identities that resonate.",
    price: "Custom",
    priceNote: "Comprehensive packages",
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Collateral"],
    gradient: "from-rose-500/20 to-red-500/20",
  },
  {
    icon: MousePointer,
    category: "UX/UI DESIGN",
    title: "UX/UI Experience Optimization",
    description: "User-centered design and interface optimization that creates exceptional digital experiences and drives conversions.",
    price: "Custom",
    priceNote: "Project-based pricing",
    capabilities: ["User Research", "Interface Design", "Conversion Optimization", "A/B Testing"],
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const animations = ["animate-explosive-entrance", "animate-mega-bounce", "animate-spiral-in", "animate-zoom-blast", "animate-explosive-entrance", "animate-mega-bounce"];
  const animationClass = isInView ? animations[index % animations.length] : "";

  return (
    <motion.div
      ref={ref}
      className={`group relative card-3d-flip ultra-hover-lift color-shift-glow ${animationClass}`}
      style={{
        animationDelay: `${index * 0.1}s`,
        animationFillMode: "both"
      }}
    >
      <LuxuryCard
        elevation={3}
        borderStyle="metallic-platinum"
        hoverLift={true}
        cornerDecorations={true}
        rippleOnClick={true}
        className="h-full p-8 transition-all duration-500 hover:border-primary/30"
      >
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

          {/* EXPLOSIVE Icon with Particle Ring */}
          <motion.div
            className="relative w-20 h-20 bg-secondary/50 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-all duration-500 glow-luxury-hover"
            whileHover={{
              rotateY: 360,
              scale: 1.3,
              rotateZ: 10
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              rotateY: { duration: 0.8 }
            }}
          >
            {/* Explosive glow background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Rotating particle ring */}
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * 360;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 bg-primary/50 rounded-full"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((angle * Math.PI) / 180) * 35,
                      Math.cos((angle * Math.PI) / 180) * 45,
                      Math.cos((angle * Math.PI) / 180) * 35
                    ],
                    y: [
                      Math.sin((angle * Math.PI) / 180) * 35,
                      Math.sin((angle * Math.PI) / 180) * 45,
                      Math.sin((angle * Math.PI) / 180) * 35
                    ],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.5, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.1,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              );
            })}

            {/* Pulsing rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-primary/30 rounded-sm"
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{
                  scale: [1, 1.8, 2.5],
                  opacity: [0.8, 0.3, 0]
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.6,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
            ))}

            <service.icon size={32} className="text-primary relative z-10 drop-shadow-[0_0_15px_rgba(var(--primary),0.6)]" />
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
                transition={{ duration: 0.3, delay: index * 0.15 + 0.3 + i * 0.05 }}
                className={`text-[10px] px-3 py-1.5 bg-secondary/50 text-text-secondary tracking-wide border transition-all sheen-metallic ${
                  i === 0 ? "border-metallic-gold" : "border-border/50 group-hover:border-primary/20"
                }`}
                whileHover={{ scale: 1.05 }}
              >
                {cap}
              </motion.span>
            ))}
          </div>

          {/* Price & Link */}
          <div className="flex items-center justify-between pt-5 border-t border-border/50 group-hover:border-primary/20 transition-colors">
            <div className="sheen-metallic">
              <span className="text-[10px] text-muted-foreground uppercase tracking-wider">{service.priceNote}</span>
              <div className="font-serif text-3xl font-bold text-foreground group-hover:animate-number-flip">{service.price}</div>
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
      </LuxuryCard>

      {/* Connection lines between cards */}
      {index < services.length - 1 && index % 3 !== 2 && (
        <motion.div
          className="absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/50 via-primary/30 to-transparent hidden lg:block group-hover:from-primary group-hover:via-primary/50 transition-all duration-500 animate-pulse-subtle"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 perspective-1000">
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
