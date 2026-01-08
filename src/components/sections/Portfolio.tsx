import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Trophy, Users, Star } from "lucide-react";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { MagneticButton } from "@/components/ui/magnetic-button";

const caseStudies = [
  {
    image: "/portfolio/vargas.png",
    category: "Tax Preparation Services",
    title: "Vargas Tax Services",
    description: "Professional tax preparation platform with customized quick action widgets, powerful SEO coverage across America, and dedicated landing pages for each individual service offering.",
    tags: ["Tax Preparation", "Quick Actions", "Landing Pages"],
    metrics: [
      { value: "1000+", label: "Clients" },
      { value: "15+", label: "Services" },
      { value: "98%", label: "Satisfaction" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    image: "/portfolio/blutouch.png",
    category: "Luxury Pool Design",
    title: "BluTouch Pools & Spas",
    description: "Houston's premier custom pool builder featuring 3-D reality view technology, personal consultations, and award-winning design team crafting luxury backyard oases.",
    tags: ["Custom Pools", "3D Design", "Luxury Spas"],
    metrics: [
      { value: "200+", label: "Pools Built" },
      { value: "10+", label: "Years" },
      { value: "4.9/5", label: "Rating" },
    ],
    color: "from-cyan-500/20 to-sky-500/20",
  },
  {
    image: "/portfolio/clearledger.png",
    category: "Financial Services",
    title: "ClearLedger Solutions",
    description: "Trusted financial partner providing accurate, reliable, and transparent bookkeeping services tailored specifically for small businesses and entrepreneurs.",
    tags: ["Bookkeeping", "Small Business", "Financial"],
    metrics: [
      { value: "500+", label: "Clients" },
      { value: "99.9%", label: "Accuracy" },
      { value: "4.9/5", label: "Rating" },
    ],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    image: "/clients/houinc.png",
    category: "Construction Excellence",
    title: "Houston Enterprise",
    description: "Leading Houston construction company transforming dreams into reality with residential and commercial projects built on quality, integrity, and innovation.",
    tags: ["Residential", "Commercial", "Renovations"],
    metrics: [
      { value: "50+", label: "Projects" },
      { value: "100%", label: "On-Time" },
      { value: "5-Star", label: "Reviews" },
    ],
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    image: "/clients/ccr.jpg",
    category: "Disaster Restoration",
    title: "United CCR",
    description: "2025 Aggie 100 Honoree delivering commercial construction, emergency restoration, and facilities maintenance across the southern U.S. with expert craftsmanship.",
    tags: ["Restoration", "Construction", "Emergency"],
    metrics: [
      { value: "24/7", label: "Response" },
      { value: "100+", label: "Properties" },
      { value: "Aggie 100", label: "Honoree" },
    ],
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    image: "/clients/iac.png",
    category: "Chiropractic Care",
    title: "Injury Assistance Centers",
    description: "Dallas-Fort Worth's dedicated care provider for motor vehicle collisions, slip and fall incidents, and workplace injuries with a holistic approach to wellness.",
    tags: ["Chiropractic", "Injury Care", "Wellness"],
    metrics: [
      { value: "5+", label: "Locations" },
      { value: "10K+", label: "Patients" },
      { value: "4.8/5", label: "Rating" },
    ],
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    image: "/clients/apnclinic.png",
    category: "Pain Management",
    title: "APN Clinic",
    description: "Interventional pain management specialists treating traumatic brain injury and PTSD. Proud opiate-free facility specializing in auto accident and personal injury patients.",
    tags: ["Pain Management", "TBI", "PTSD Treatment"],
    metrics: [
      { value: "100%", label: "Opiate-Free" },
      { value: "Expert", label: "Care" },
      { value: "4.9/5", label: "Rating" },
    ],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    image: "/clients/abqmri.png",
    category: "Medical Imaging",
    title: "ABQ MRI",
    description: "Superior quality MRI and X-Ray center with cutting-edge technology, the most knowledgeable physicians and radiologists, delivering fast accurate diagnostic reports.",
    tags: ["MRI Imaging", "X-Ray", "Diagnostics"],
    metrics: [
      { value: "Fast", label: "Reports" },
      { value: "Advanced", label: "Tech" },
      { value: "5-Star", label: "Care" },
    ],
    color: "from-sky-500/20 to-blue-500/20",
  },
  {
    image: "/clients/hougenpros.png",
    category: "IT & Automation",
    title: "HiTech Logic",
    description: "Engineering competitive advantage through intelligent automation and AI-powered managed services delivering 50% cost savings and 75% faster incident resolution.",
    tags: ["AI Automation", "Managed IT", "Cloud Ops"],
    metrics: [
      { value: "85%", label: "Fewer Alerts" },
      { value: "4.5x", label: "Faster" },
      { value: "99.98%", label: "Uptime" },
    ],
    color: "from-indigo-500/20 to-violet-500/20",
  },
  {
    image: "/clients/reactivate.png",
    category: "Legal Excellence",
    title: "SVR Law Firm",
    description: "Trusted Texas trial lawyers with proven expertise in personal injury and criminal defense, delivering superior legal strategies and a commitment to achieving the best results.",
    tags: ["Personal Injury", "Criminal Defense", "Trial Law"],
    metrics: [
      { value: "100+", label: "Cases Won" },
      { value: "Free", label: "Consultation" },
      { value: "5-Star", label: "Reviews" },
    ],
    color: "from-slate-500/20 to-zinc-500/20",
  },
];

export function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % caseStudies.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <section id="portfolio" className="py-32 lg:py-40 bg-card/30 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute -left-40 top-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
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
              Client Success Stories
            </span>
            <motion.div 
              className="w-16 h-px bg-gradient-to-l from-transparent via-primary to-primary/30"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-4xl mx-auto leading-[1.1]">
            Transforming businesses across industries
          </h2>
        </motion.div>

        {/* Featured Case Study */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            >
              <LuxuryCard
                elevation={4}
                borderStyle="metallic-crimson"
                glassStrength="medium"
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden inset-luxury"
              >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video lg:aspect-auto group">
                <motion.img
                  src={caseStudies[activeIndex].image}
                  alt={caseStudies[activeIndex].title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8 }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${caseStudies[activeIndex].color} opacity-40`} />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
                
                {/* Project number */}
                <motion.div
                  className="absolute bottom-6 left-6 font-serif text-8xl text-gradient-primary"
                  style={{
                    WebkitTextStroke: "2px hsl(var(--primary) / 0.5)",
                    WebkitTextFillColor: "transparent",
                    opacity: 0.3
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 0.3, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  0{activeIndex + 1}
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-10 lg:p-16 flex flex-col justify-center relative">
                <motion.span 
                  className="text-xs tracking-[0.25em] text-primary mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {caseStudies[activeIndex].category.toUpperCase()}
                </motion.span>
                
                <motion.h3 
                  className="font-serif text-3xl lg:text-4xl text-foreground mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {caseStudies[activeIndex].title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {caseStudies[activeIndex].description}
                </motion.p>

                {/* Tags */}
                <motion.div 
                  className="flex flex-wrap gap-2 mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {caseStudies[activeIndex].tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-xs px-4 py-1.5 bg-secondary/50 text-text-secondary tracking-wide border border-border/50"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Metrics */}
                <motion.div
                  className="flex flex-wrap gap-4 pt-8 border-t border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {caseStudies[activeIndex].metrics.map((metric, i) => {
                    const icons = [Trophy, Users, Star];
                    const Icon = icons[i];
                    return (
                      <motion.div
                        key={metric.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <LuxuryCard
                          elevation={2}
                          hoverLift={true}
                          className="px-6 py-4"
                        >
                          <div className="flex items-center gap-3">
                            <Icon size={20} className="text-primary" />
                            <div>
                              <div className="font-serif text-2xl text-foreground sheen-metallic">{metric.value}</div>
                              <div className="text-xs text-muted-foreground uppercase tracking-wider mt-0.5">{metric.label}</div>
                            </div>
                          </div>
                        </LuxuryCard>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
              </LuxuryCard>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            {/* Progress indicators */}
            <div className="flex items-center gap-3">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`relative h-0.5 w-16 bg-border/50 overflow-hidden ${
                    i === activeIndex ? "glow-luxury-hover" : ""
                  }`}
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary/80 to-primary"
                    initial={{ width: 0 }}
                    animate={{ width: i === activeIndex ? "100%" : "0%" }}
                    transition={{
                      duration: i === activeIndex ? 5 : 0.3,
                      ease: "easeOut"
                    }}
                  />
                </button>
              ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-2">
              <MagneticButton strength={20}>
                <LuxuryCard
                  elevation={1}
                  hoverLift={true}
                  rippleOnClick={true}
                  className="w-14 h-14 flex items-center justify-center p-0 cursor-pointer group"
                  onClick={prevSlide}
                >
                  <ChevronLeft size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </LuxuryCard>
              </MagneticButton>
              <MagneticButton strength={20}>
                <LuxuryCard
                  elevation={1}
                  hoverLift={true}
                  rippleOnClick={true}
                  className="w-14 h-14 flex items-center justify-center p-0 cursor-pointer group"
                  onClick={nextSlide}
                >
                  <ChevronRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </LuxuryCard>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group tracking-wide uppercase"
            whileHover={{ x: 4 }}
          >
            <span>View All Client Success Stories</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
