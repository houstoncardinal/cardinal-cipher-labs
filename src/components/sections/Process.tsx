import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Zap, Clock } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30-60 mins",
    description: "Comprehensive consultation to understand your business vision, challenges, and market goals.",
    icon: "🎯",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "3-5 days",
    description: "Detailed roadmap with timelines, technology stack, and project milestones tailored to your market.",
    icon: "📋",
  },
  {
    number: "03",
    title: "Development Sprint",
    duration: "72hrs - 2 weeks",
    description: "Agile development with regular updates, prototypes, and collaborative feedback sessions.",
    icon: "⚡",
  },
  {
    number: "04",
    title: "Launch & Support",
    duration: "Ongoing",
    description: "Seamless deployment with ongoing maintenance, optimization, and dedicated support.",
    icon: "🚀",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div 
                className="w-16 h-px bg-gradient-to-r from-primary to-primary/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                How We Work
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
              Your journey from idea to market dominance
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
              We specialize in expedited services delivered in less than 72 hours when requested. 
              Enterprise-grade solutions with startup speed.
            </p>

            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <LuxuryCard
                elevation={3}
                borderStyle="metallic-gold"
                hoverLift={true}
                className="p-6 mb-10"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Zap size={20} className="text-primary" />
                  </motion.div>
                  <span className="text-sm font-medium text-foreground">Expedited Delivery</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Need it faster? We offer 72-hour rush delivery for urgent projects.
                </p>
              </LuxuryCard>
            </motion.div>

            <MagneticButton strength={30}>
              <Button variant="primary" size="lg" className="group" asChild>
                <a href="#contact">
                  Schedule Discovery Call
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          {/* Right Column - Phases */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-primary/30 to-transparent glow-luxury-hover"
              initial={{ scaleY: 0, originY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
            />

            <div className="space-y-0">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="group relative pl-16 pb-16 last:pb-0"
                >
                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-0 top-0 w-16 h-16 flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                  >
                    <LuxuryCard
                      elevation={2}
                      hoverLift={true}
                      rippleOnClick={true}
                      className="w-16 h-16 flex items-center justify-center p-0 glow-luxury-hover"
                    >
                      <motion.span
                        className="text-2xl"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                      >
                        {phase.icon}
                      </motion.span>
                    </LuxuryCard>

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 border-2 border-primary/30 rounded-sm"
                      initial={{ scale: 1, opacity: 0.8 }}
                      animate={{ scale: [1, 1.5, 2], opacity: [0.8, 0.3, 0] }}
                      transition={{ duration: 2, delay: index * 0.15 + 0.4, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  {/* Content */}
                  <LuxuryCard
                    elevation={2}
                    borderStyle={index === 0 ? "metallic-crimson" : "none"}
                    hoverLift={true}
                    className="p-6"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs tracking-[0.2em] text-primary font-medium">
                        PHASE {phase.number}
                      </span>
                      <motion.span
                        className="text-xs text-muted-foreground px-3 py-1 bg-secondary/50 border border-border/50 sheen-metallic flex items-center gap-1.5"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Clock size={12} className="text-primary" />
                        {phase.duration}
                      </motion.span>
                    </div>

                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-gradient-primary transition-all">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </LuxuryCard>

                  {/* Connecting line to next phase */}
                  {index < phases.length - 1 && (
                    <motion.div
                      className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-primary/30 to-transparent"
                      initial={{ scaleY: 0 }}
                      animate={isInView ? { scaleY: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
