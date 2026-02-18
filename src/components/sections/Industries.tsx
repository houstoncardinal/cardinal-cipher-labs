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
    color: "bg-rose-600",
    tagBg: "bg-rose-50 text-rose-600 border-rose-100",
  },
  {
    icon: Scale,
    name: "Legal",
    description: "Case management platforms, client intake systems, and secure document handling.",
    stat: "30+ firms",
    color: "bg-amber-600",
    tagBg: "bg-amber-50 text-amber-600 border-amber-100",
  },
  {
    icon: TrendingUp,
    name: "Financial",
    description: "Regulatory-compliant fintech, trading dashboards, and secure transaction systems.",
    stat: "40+ clients",
    color: "bg-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-600 border-emerald-100",
  },
  {
    icon: Cpu,
    name: "Technology",
    description: "Developer platforms, SaaS infrastructure, and enterprise software architecture.",
    stat: "100+ projects",
    color: "bg-blue-600",
    tagBg: "bg-blue-50 text-blue-600 border-blue-100",
  },
  {
    icon: Brain,
    name: "AI & Automation",
    description: "Custom AI implementations, ML pipelines, and intelligent process automation.",
    stat: "25+ systems",
    color: "bg-violet-600",
    tagBg: "bg-violet-50 text-violet-600 border-violet-100",
  },
  {
    icon: Building2,
    name: "Construction",
    description: "Project management tools, contractor portals, and field service applications.",
    stat: "35+ companies",
    color: "bg-orange-600",
    tagBg: "bg-orange-50 text-orange-600 border-orange-100",
  },
];

export function Industries() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="industries" className="py-32 lg:py-40 relative overflow-hidden bg-white">
      {/* Vertical red accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/10 to-transparent" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/10 to-transparent" />
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/6 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-gray-50 border border-gray-200/80 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-semibold">
              Industry Verticals
            </span>
          </motion.div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 max-w-4xl mx-auto leading-[1.1]">
            Deep expertise across regulated industries
          </h2>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {industries.map((industry, index) => {
            const industrySlug = industry.name === "AI & Automation" ? "ai-automation" : industry.name.toLowerCase().replace(/& /g, '-').replace(/ /g, '-');
            return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <a href={`/industry/${industrySlug}`} className="block">
                <div className="bg-white rounded-2xl border border-gray-200/70 p-8 text-center h-full shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] hover:border-gray-300/60 hover:-translate-y-2 transition-all duration-500">
                  {/* Icon */}
                  <motion.div
                    className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center"
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={`w-16 h-16 ${industry.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <industry.icon size={28} className="text-white" strokeWidth={1.8} />
                    </div>
                  </motion.div>

                  <h3 className="font-serif text-2xl text-gray-900 mb-3">
                    {industry.name}
                  </h3>

                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {industry.description}
                  </p>

                  {/* Stat badge */}
                  <span className={`inline-flex items-center gap-2 text-xs px-4 py-2 rounded-md border font-semibold tracking-wide ${industry.tagBg}`}>
                    <div className="w-1.5 h-1.5 bg-current rounded-full opacity-60" />
                    {industry.stat}
                  </span>
                </div>
              </a>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
