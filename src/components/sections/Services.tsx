import { motion } from "framer-motion";
import { 
  Globe, 
  Smartphone, 
  Search, 
  Megaphone, 
  Palette, 
  MousePointer,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    category: "WEB DEVELOPMENT",
    title: "Custom Website Development",
    description: "Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms.",
    price: "$2,500",
    capabilities: ["Enterprise Sites", "E-commerce", "API Architecture", "CMS Integration"],
  },
  {
    icon: Smartphone,
    category: "MOBILE APPS",
    title: "Mobile & Web Applications",
    description: "Custom mobile apps and web applications that streamline business operations. Built for performance and scalability.",
    price: "$5,000",
    capabilities: ["iOS & Android", "Web Applications", "Cross-Platform", "App Optimization"],
  },
  {
    icon: Search,
    category: "SEO & ANALYTICS",
    title: "SEO & Analytics Services",
    description: "Comprehensive SEO optimization and analytics solutions that drive real results and qualified traffic.",
    price: "$1,500",
    capabilities: ["Technical SEO", "Schema Markup", "Analytics Setup", "Ranking Strategy"],
  },
  {
    icon: Megaphone,
    category: "DIGITAL MARKETING",
    title: "Digital Marketing Campaigns",
    description: "Strategic digital marketing campaigns that drive growth. From social media to email marketing with measurable results.",
    price: "$2,000",
    capabilities: ["PPC Advertising", "Social Media", "Email Marketing", "Content Strategy"],
  },
  {
    icon: Palette,
    category: "BRAND IDENTITY",
    title: "Brand Identity Design",
    description: "Complete brand identity solutions that make your business stand out. Cohesive visual identities that resonate.",
    price: "$1,200",
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Identity", "Print Collateral"],
  },
  {
    icon: MousePointer,
    category: "UX/UI DESIGN",
    title: "UX/UI Experience Optimization",
    description: "User-centered design and interface optimization that creates exceptional digital experiences and drives conversions.",
    price: "$1,800",
    capabilities: ["User Research", "Interface Design", "Conversion Optimization", "A/B Testing"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-xs tracking-[0.3em] uppercase text-primary">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground max-w-3xl">
            Digital solutions that grow your business
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            End-to-end digital solutions designed to transform businesses. From custom websites to comprehensive digital marketing.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border p-8 hover:border-primary/30 transition-all duration-500"
            >
              <div className="flex flex-col h-full">
                {/* Category */}
                <span className="text-[10px] tracking-[0.2em] text-primary mb-4">
                  {service.category}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon size={24} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-[10px] px-2 py-1 bg-secondary text-text-secondary tracking-wide"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Price & Link */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-xs text-muted-foreground">Starting at</span>
                    <div className="font-serif text-xl text-foreground">{service.price}</div>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs text-foreground hover:text-primary transition-colors group/link tracking-wide uppercase"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight size={12} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
