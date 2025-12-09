import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-card relative">
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
              Client Success Stories
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl mx-auto">
            Transforming businesses across industries
          </h2>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-background border border-border hover:border-primary/30 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video lg:aspect-auto">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs tracking-[0.2em] text-primary mb-2">
                    {study.category.toUpperCase()}
                  </span>
                  
                  <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                    {study.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-secondary text-text-secondary tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metrics */}
                  <div className="flex gap-8 pt-6 border-t border-border">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="font-serif text-2xl text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wider">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group tracking-wide uppercase"
          >
            <span>View All Client Success Stories</span>
            <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
