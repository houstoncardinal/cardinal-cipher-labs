import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Scale, 
  TrendingUp, 
  Cpu, 
  Brain 
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    description: "HIPAA-compliant systems, patient portals, and clinical workflow automation.",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Case management platforms, client intake systems, and secure document handling.",
  },
  {
    icon: TrendingUp,
    name: "Financial",
    description: "Regulatory-compliant fintech, trading dashboards, and secure transaction systems.",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Developer platforms, SaaS infrastructure, and enterprise software architecture.",
  },
  {
    icon: Brain,
    name: "AI & Automation",
    description: "Custom AI implementations, ML pipelines, and intelligent process automation.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-card relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Industry Verticals
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto">
            Deep expertise across regulated and high-stakes industries
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-8 text-center group hover:bg-secondary/50 transition-colors duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-border group-hover:border-primary/30 transition-colors duration-300">
                <industry.icon size={28} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
