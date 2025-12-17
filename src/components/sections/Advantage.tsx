import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Check, X, Sparkles } from "lucide-react";

const comparisons = [
  {
    feature: "Transparent Pricing",
    description: "Clear, upfront costs",
    traditional: "Hidden fees & surprises",
    cardinal: "100% Transparent",
    advantage: "No Surprises",
  },
  {
    feature: "Project Delivery",
    description: "From concept to launch",
    traditional: "3-6 months",
    cardinal: "2-4 weeks",
    advantage: "Lightning Fast",
  },
  {
    feature: "Custom Solutions",
    description: "Tailored to your needs",
    traditional: "Template-based",
    cardinal: "Fully Custom",
    advantage: "Bespoke Design",
  },
  {
    feature: "Monthly Management",
    description: "Hands-free operations",
    traditional: "Project-only",
    cardinal: "Full Management",
    advantage: "Hands-Free",
  },
  {
    feature: "Support Quality",
    description: "When you need assistance",
    traditional: "24-48 hour response",
    cardinal: "Same-day response",
    advantage: "Premium Support",
  },
  {
    feature: "Technology Stack",
    description: "Modern, scalable solutions",
    traditional: "Outdated tools",
    cardinal: "Cutting-edge",
    advantage: "Future-Ready",
  },
];

export function Advantage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="advantage" className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-float-3d" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float-3d" style={{ animationDelay: "2s" }} />

      <div ref={ref} className="container mx-auto px-6 lg:px-12">
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
              The Cardinal Advantage
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto">
            Why Businesses Choose Cardinal Consulting
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            We combine cutting-edge technology with deep market expertise to deliver results that traditional agencies can't match.
          </p>
        </motion.div>

        {/* EXPLOSIVE Comparison Table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-x-auto"
        >
          <LuxuryCard
            elevation={4}
            borderStyle="metallic-platinum"
            glassStrength="medium"
            className="p-0 overflow-hidden"
          >
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-border/30 bg-secondary/20">
                  <th className="text-left py-6 px-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Feature</span>
                  </th>
                  <th className="text-center py-6 px-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Traditional</span>
                  </th>
                  <th className="text-center py-6 px-6 bg-primary/10 relative">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <div className="relative flex items-center justify-center gap-2">
                      <Sparkles size={14} className="text-primary animate-pulse-subtle" />
                      <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Cardinal</span>
                      <Sparkles size={14} className="text-primary animate-pulse-subtle" />
                    </div>
                  </th>
                  <th className="text-right py-6 px-6">
                    <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Advantage</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                    className="border-b border-border/30 group hover:bg-primary/5 transition-all duration-300"
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="py-6 px-6">
                      <motion.div
                        className="font-medium text-foreground text-lg"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {row.feature}
                      </motion.div>
                      <div className="text-xs text-muted-foreground mt-1">{row.description}</div>
                    </td>
                    <td className="text-center py-6 px-6">
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          whileHover={{ rotate: -90, scale: 1.3 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <X size={18} className="text-destructive drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        </motion.div>
                        <span className="text-sm text-muted-foreground">{row.traditional}</span>
                      </div>
                    </td>
                    <td className="text-center py-6 px-6 bg-primary/5 relative group-hover:bg-primary/10 transition-all">
                      {/* Glow effect on hover */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{
                          background: 'radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)'
                        }}
                      />
                      <div className="flex items-center justify-center gap-3 relative z-10">
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <Check size={18} className="text-primary drop-shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
                        </motion.div>
                        <span className="text-sm text-foreground font-bold">{row.cardinal}</span>
                      </div>
                    </td>
                    <td className="text-right py-6 px-6">
                      <motion.span
                        className="inline-flex items-center gap-2 text-xs px-4 py-2 bg-gradient-to-r from-primary/20 to-primary/10 text-primary tracking-wide border border-primary/30 sheen-metallic font-medium"
                        whileHover={{
                          scale: 1.05,
                          boxShadow: "0 0 20px hsl(var(--primary) / 0.5)"
                        }}
                      >
                        <motion.div
                          className="w-1.5 h-1.5 bg-primary rounded-full"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        {row.advantage}
                      </motion.span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </LuxuryCard>
        </motion.div>
      </div>
    </section>
  );
}
