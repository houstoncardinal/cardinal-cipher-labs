import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

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
  return (
    <section id="advantage" className="py-24 lg:py-32 bg-card relative">
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

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 pr-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Feature</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Traditional</span>
                </th>
                <th className="text-center py-4 px-4 bg-primary/5">
                  <span className="text-xs uppercase tracking-wider text-primary">Cardinal</span>
                </th>
                <th className="text-right py-4 pl-4">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">Advantage</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <motion.tr
                  key={row.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border-b border-border/50 hover:bg-secondary/30 transition-colors"
                >
                  <td className="py-5 pr-4">
                    <div className="font-medium text-foreground">{row.feature}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{row.description}</div>
                  </td>
                  <td className="text-center py-5 px-4">
                    <div className="flex items-center justify-center gap-2">
                      <X size={14} className="text-destructive/70" />
                      <span className="text-sm text-muted-foreground">{row.traditional}</span>
                    </div>
                  </td>
                  <td className="text-center py-5 px-4 bg-primary/5">
                    <div className="flex items-center justify-center gap-2">
                      <Check size={14} className="text-primary" />
                      <span className="text-sm text-foreground font-medium">{row.cardinal}</span>
                    </div>
                  </td>
                  <td className="text-right py-5 pl-4">
                    <span className="text-xs px-3 py-1 bg-primary/10 text-primary tracking-wide">
                      {row.advantage}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
