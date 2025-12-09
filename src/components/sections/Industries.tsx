import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
              className="group bg-background p-10 text-center relative overflow-hidden"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty("--mouse-x", `${x}%`);
                e.currentTarget.style.setProperty("--mouse-y", `${y}%`);
              }}
            >
              {/* Hover gradient */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(var(--primary) / 0.1), transparent 40%)`,
                }}
              />

              <motion.div 
                className="relative w-20 h-20 mx-auto mb-8 flex items-center justify-center border border-border/50 group-hover:border-primary/30 transition-all duration-500"
                whileHover={{ rotate: 5, scale: 1.05 }}
              >
                <industry.icon size={32} className="text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                
                {/* Corner decorations */}
                <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-primary/0 group-hover:border-primary/50 transition-all duration-300" />
              </motion.div>

              <h3 className="font-serif text-2xl text-foreground mb-3 relative">
                {industry.name}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 relative">
                {industry.description}
              </p>

              <motion.span 
                className="inline-block text-xs text-primary tracking-wider uppercase relative"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {industry.stat}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
