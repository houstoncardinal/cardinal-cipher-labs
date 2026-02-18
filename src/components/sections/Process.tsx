import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Zap, Clock, Target, ClipboardList, Code2, Rocket } from "lucide-react";

const phases = [
  {
    number: "01",
    title: "Discovery Call",
    duration: "30-60 mins",
    description: "Comprehensive consultation to understand your business vision, challenges, and market goals.",
    icon: Target,
  },
  {
    number: "02",
    title: "Strategy & Planning",
    duration: "3-5 days",
    description: "Detailed roadmap with timelines, technology stack, and project milestones tailored to your market.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Development Sprint",
    duration: "72hrs - 2 weeks",
    description: "Agile development with regular updates, prototypes, and collaborative feedback sessions.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Launch & Support",
    duration: "Ongoing",
    description: "Seamless deployment with ongoing maintenance, optimization, and dedicated support.",
    icon: Rocket,
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-32 lg:py-40 relative overflow-hidden bg-[#FAFAFA]">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* Vertical red accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />

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
                className="w-16 h-px bg-gradient-to-r from-red-500 to-red-300"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-xs tracking-[0.3em] uppercase text-red-500 font-semibold">
                How We Work
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-[1.1]">
              Your journey from idea to market dominance
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              We specialize in expedited services delivered in less than 72 hours when requested.
              Enterprise-grade solutions with startup speed.
            </p>

            {/* Highlight box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl border border-gray-200/70 p-6 mb-10 shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center">
                  <Zap size={18} className="text-red-500" />
                </div>
                <span className="text-sm font-semibold text-gray-900">Expedited Delivery</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Need it faster? We offer 72-hour rush delivery for urgent projects.
              </p>
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
            {/* Vertical red line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-[3px] bg-gradient-to-b from-red-500 via-red-400/40 to-transparent rounded-full"
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
                    className="absolute left-0 top-0 w-12 h-12 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-12 h-12 bg-white rounded-xl border border-gray-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex items-center justify-center group-hover:border-red-200 group-hover:shadow-[0_4px_16px_rgba(239,68,68,0.1)] transition-all duration-300">
                      <phase.icon size={20} className="text-red-500" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="bg-white rounded-2xl border border-gray-200/70 p-6 shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-gray-300/60 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-xs tracking-[0.2em] text-red-500 font-bold">
                        PHASE {phase.number}
                      </span>
                      <span className="text-xs text-gray-400 px-3 py-1 bg-gray-50 border border-gray-100 rounded-md flex items-center gap-1.5 font-medium">
                        <Clock size={11} className="text-red-400" />
                        {phase.duration}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl text-gray-900 mb-3 group-hover:text-gray-800 transition-all">
                      {phase.title}
                    </h3>

                    <p className="text-sm text-gray-500 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
