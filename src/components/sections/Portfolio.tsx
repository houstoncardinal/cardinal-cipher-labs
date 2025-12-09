import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

const caseStudies = [
  {
    image: "/portfolio/vargas.png",
    category: "Tax Preparation Services",
    title: "Vargas Tax",
    description: "Powerful website for tax preparation services with customized quick action widgets, powerful SEO for all of America, and customized landing pages for each individual service.",
    tags: ["Tax Services", "Quick Actions", "Landing Pages"],
    metrics: [
      { value: "1000+", label: "Clients" },
      { value: "15+", label: "Services" },
      { value: "98%", label: "Satisfaction" },
    ],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    image: "/portfolio/clearledger.png",
    category: "Bookkeeping Services",
    title: "ClearLedger Solutions",
    description: "Trusted Financial Partner specializing in accurate, reliable, and transparent bookkeeping services tailored to small businesses and entrepreneurs.",
    tags: ["Bookkeeping", "Small Business", "Financial Services"],
    metrics: [
      { value: "500+", label: "Clients" },
      { value: "99.9%", label: "Accuracy" },
      { value: "4.9/5", label: "Rating" },
    ],
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    image: "/portfolio/blutouch.png",
    category: "Pool & Spa Services",
    title: "BluTouch Pools & Spas",
    description: "Expert Service & Attention to Detail. Over 10 years' experience in swimming pool maintenance, award-winning pool design team specializing in new pool construction.",
    tags: ["Pool Services", "Maintenance", "Construction"],
    metrics: [
      { value: "10+", label: "Years" },
      { value: "200+", label: "Pools" },
      { value: "4.8/5", label: "Rating" },
    ],
    color: "from-cyan-500/20 to-sky-500/20",
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-background/50 backdrop-blur-sm border border-border/50 overflow-hidden"
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
                  className="absolute bottom-6 left-6 font-serif text-8xl text-foreground/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
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
                  className="flex gap-10 pt-8 border-t border-border/50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {caseStudies[activeIndex].metrics.map((metric, i) => (
                    <motion.div 
                      key={metric.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <div className="font-serif text-3xl text-foreground">{metric.value}</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{metric.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
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
                  className="relative h-1 w-12 bg-border/50 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: i === activeIndex ? "100%" : "0%" }}
                    transition={{ duration: i === activeIndex ? 5 : 0.3 }}
                  />
                </button>
              ))}
            </div>

            {/* Arrow navigation */}
            <div className="flex items-center gap-2">
              <motion.button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} className="text-muted-foreground" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} className="text-muted-foreground" />
              </motion.button>
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
