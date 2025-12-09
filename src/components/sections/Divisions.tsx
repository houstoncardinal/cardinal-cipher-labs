import { motion } from "framer-motion";
import { 
  Globe, 
  BarChart3, 
  Search, 
  Building2, 
  Palette,
  ArrowUpRight 
} from "lucide-react";

const divisions = [
  {
    icon: Globe,
    title: "Digital Infrastructure",
    code: "DIV-01",
    description: "Web platforms, enterprise applications, and software systems engineered for scale, security, and performance.",
    capabilities: ["Web Applications", "Enterprise Software", "API Architecture", "Cloud Infrastructure"],
  },
  {
    icon: BarChart3,
    title: "Intelligence & Dashboards",
    code: "DIV-02",
    description: "AI systems, analytics platforms, and automation frameworks that transform data into operational intelligence.",
    capabilities: ["AI Integration", "Business Intelligence", "Process Automation", "Predictive Analytics"],
  },
  {
    icon: Search,
    title: "Search & Authority",
    code: "DIV-03",
    description: "SEO infrastructure, structured data implementation, and listing management for digital authority and visibility.",
    capabilities: ["Technical SEO", "Schema Markup", "Listing Management", "Authority Building"],
  },
  {
    icon: Building2,
    title: "Industry Solutions",
    code: "DIV-04",
    description: "Specialized digital operations for Healthcare, Legal, Financial Services, Technology, and AI-forward organizations.",
    capabilities: ["Healthcare Systems", "Legal Tech", "FinTech Solutions", "AI Operations"],
  },
  {
    icon: Palette,
    title: "Branding & Physical",
    code: "DIV-05",
    description: "Identity systems, print collateral, and branded physical assets that extend digital precision into the tangible.",
    capabilities: ["Brand Identity", "Print Design", "Apparel Systems", "Environmental Graphics"],
  },
];

export function Divisions() {
  return (
    <section id="divisions" className="py-24 lg:py-32 relative">
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
              Operational Divisions
            </span>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground max-w-2xl">
            Five disciplines. One integrated operation.
          </h2>
        </motion.div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {divisions.map((division, index) => (
            <motion.div
              key={division.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card border border-border p-8 lg:p-10 hover:border-primary/30 transition-all duration-500 ${
                index === 4 ? "lg:col-span-2" : ""
              }`}
            >
              {/* Code badge */}
              <div className="absolute top-6 right-6 text-xs tracking-widest text-text-tertiary">
                {division.code}
              </div>

              <div className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <division.icon size={24} className="text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {division.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {division.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {division.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="text-xs px-3 py-1 bg-secondary text-text-secondary tracking-wide"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors group/link"
                >
                  <span className="tracking-wide uppercase">Explore Division</span>
                  <ArrowUpRight size={14} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
