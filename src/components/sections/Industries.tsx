import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuxuryCard } from "@/components/ui/luxury-card";
import {
  Stethoscope,
  Scale,
  TrendingUp,
  Cpu,
  Brain,
  Building2
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-compliant systems, patient portals, and clinical workflow automation.",
    stat: "50+ clients",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Case management platforms, client intake systems, and secure document handling.",
    stat: "30+ firms",
  },
  {
    icon: TrendingUp,
    name: "Financial",
    description: "Regulatory-compliant fintech, trading dashboards, and secure transaction systems.",
    stat: "40+ clients",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Developer platforms, SaaS infrastructure, and enterprise software architecture.",
    stat: "100+ projects",
  },
  {
    icon: Brain,
    name: "AI & Automation",
    description: "Custom AI implementations, ML pipelines, and intelligent process automation.",
    stat: "25+ systems",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Project management tools, contractor portals, and field service applications.",
    stat: "35+ companies",
  },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-32 lg:py-40 bg-card/30 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-px bg-gradient-to-r from-transparent via-primary to-primary/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Industry Verticals
            </span>
            <motion.div 
              className="w-16 h-px bg-gradient-to-l from-transparent via-primary to-primary/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl mx-auto leading-[1.1]">
            Deep expertise across regulated industries
          </h2>
        </motion.div>

        {/* Industries Grid - EXPLOSIVE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const animations = ["animate-explosive-entrance", "animate-mega-bounce", "animate-spiral-in", "animate-zoom-blast"];
            const animationClass = isInView ? animations[index % animations.length] : "";
            const borders = ["metallic-gold", "metallic-crimson", "metallic-platinum", "none"];
            const borderStyle = borders[index % borders.length] as "metallic-gold" | "metallic-crimson" | "metallic-platinum" | "none";

            return (
              <motion.div
                key={industry.name}
                className={`ultra-hover-lift card-3d-flip color-shift-glow ${animationClass}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                  animationFillMode: "both"
                }}
              >
                <LuxuryCard
                  elevation={3}
                  borderStyle={borderStyle}
                  hoverLift={true}
                  cornerDecorations={true}
                  className="p-10 text-center group h-full"
                >
                  {/* EXPLOSIVE ICON with 3D rotation */}
                  <motion.div
                    className="relative w-24 h-24 mx-auto mb-8 flex items-center justify-center glow-luxury-hover"
                    whileHover={{
                      scale: 1.3,
                      rotateY: 360,
                      rotateX: 15
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      rotateY: { duration: 0.6 }
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl" />
                    <industry.icon size={40} className="text-primary relative z-10 drop-shadow-[0_0_15px_rgba(var(--primary),0.5)]" />

                    {/* Pulsing rings */}
                    {[...Array(2)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 border-2 border-primary/30 rounded-full"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{
                          scale: [1, 1.5, 2],
                          opacity: [0.8, 0.3, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.4,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>

                  <h3 className="font-serif text-3xl text-foreground mb-4 relative group-hover:text-gradient-primary transition-all">
                    {industry.name}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 relative">
                    {industry.description}
                  </p>

                  {/* Stat badge with sheen */}
                  <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 sheen-metallic"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-primary tracking-wider uppercase font-medium">
                      {industry.stat}
                    </span>
                  </motion.div>
                </LuxuryCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
