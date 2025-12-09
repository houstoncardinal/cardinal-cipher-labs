import { motion } from "framer-motion";

const phases = [
  {
    number: "01",
    title: "Discovery & Assessment",
    description: "Comprehensive analysis of current infrastructure, requirements gathering, and strategic objective definition.",
  },
  {
    number: "02",
    title: "Architecture & Planning",
    description: "Technical specification development, system architecture design, and implementation roadmap creation.",
  },
  {
    number: "03",
    title: "Engineering & Development",
    description: "Iterative development sprints with continuous quality assurance, security audits, and stakeholder reviews.",
  },
  {
    number: "04",
    title: "Deployment & Integration",
    description: "Staged rollout with minimal disruption, legacy system migration, and operational handoff protocols.",
  },
  {
    number: "05",
    title: "Operations & Evolution",
    description: "Ongoing monitoring, performance optimization, and continuous improvement based on operational data.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-24 lg:py-32 relative">
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
                Engagement Model
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Precision at every phase
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Our methodology is built for enterprise requirements—rigorous, 
              transparent, and designed to deliver measurable outcomes at each milestone.
            </p>
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
                
                {/* Phase number */}
                <span className="text-xs tracking-[0.2em] text-primary mb-2 block">
                  PHASE {phase.number}
                </span>
                
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
