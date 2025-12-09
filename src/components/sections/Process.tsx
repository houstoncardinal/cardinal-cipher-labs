import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30-60 mins",
    description: "Comprehensive consultation to understand your business vision, challenges, and market goals.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "3-5 days",
    description: "Detailed roadmap with timelines, technology stack, and project milestones tailored to your market.",
  },
  {
    number: "03",
    title: "Development Sprint",
    duration: "72hrs - 2 weeks",
    description: "Agile development with regular updates, prototypes, and collaborative feedback sessions.",
  },
  {
    number: "04",
    title: "Launch & Support",
    duration: "Ongoing",
    description: "Seamless deployment with ongoing maintenance, optimization, and dedicated support.",
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                How We Work
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Your journey from idea to market dominance
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              We specialize in expedited services delivered in less than 72 hours when requested. 
              Enterprise-grade solutions with startup speed.
            </p>

            <Button variant="primary" size="lg" className="group" asChild>
              <a href="#contact">
                Schedule Discovery Call
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Right Column - Phases */}
          <div className="space-y-0">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative border-l border-border pl-8 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-background border border-border group-hover:border-primary group-hover:bg-primary/20 transition-colors duration-300" />
                
                {/* Phase number & duration */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-xs tracking-[0.2em] text-primary">
                    PHASE {phase.number}
                  </span>
                  <span className="text-xs text-muted-foreground px-2 py-0.5 bg-secondary">
                    {phase.duration}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {phase.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
