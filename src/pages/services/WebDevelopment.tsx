import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Globe, 
  Code2, 
  Zap, 
  Shield, 
  Layers, 
  Database,
  ArrowRight,
  Check,
  Star,
  Clock,
  Users,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Code2,
    title: "Modern Tech Stack",
    description: "Built with React, TypeScript, and modern frameworks for peak performance and maintainability."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for speed with lazy loading, code splitting, and edge caching strategies."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security with SSL, data encryption, and compliance-ready infrastructure."
  },
  {
    icon: Layers,
    title: "Scalable Architecture",
    description: "Built to grow with your business, from startup to enterprise-level traffic."
  },
  {
    icon: Database,
    title: "CMS Integration",
    description: "Seamless content management with headless CMS solutions for easy updates."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Content delivered worldwide with sub-second load times from any location."
  }
];

const packages = [
  {
    name: "Starter",
    price: "$5,000",
    description: "Perfect for small businesses and startups",
    features: [
      "5-page responsive website",
      "Mobile-first design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "30-day support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$10,000",
    description: "Ideal for growing businesses",
    features: [
      "Up to 15 pages",
      "Custom design & animations",
      "Advanced SEO optimization",
      "CMS integration",
      "E-commerce ready",
      "Analytics dashboard",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "For large organizations",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "API integrations",
      "Multi-language support",
      "Load testing & optimization",
      "Priority support",
      "12 months maintenance"
    ],
    popular: false
  }
];

const stats = [
  { value: "150+", label: "Websites Launched" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "< 2s", label: "Avg Load Time" },
  { value: "4.9★", label: "Client Rating" }
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your business goals, target audience, and competitive landscape." },
  { step: "02", title: "Strategy", description: "Creating a comprehensive plan including sitemap, wireframes, and tech stack." },
  { step: "03", title: "Design", description: "Crafting stunning visuals that align with your brand and convert visitors." },
  { step: "04", title: "Development", description: "Building with clean, maintainable code and rigorous quality assurance." },
  { step: "05", title: "Launch", description: "Thorough testing, SEO optimization, and seamless deployment." },
  { step: "06", title: "Growth", description: "Ongoing support, analytics monitoring, and continuous improvements." }
];

export default function WebDevelopment() {
  return (
    <>
      <SEOHead
        title="Custom Website Development Services | Cardinal Consulting"
        description="Professional custom website development with modern technologies. Responsive, fast, and SEO-optimized websites that drive business growth."
        keywords={['custom website development', 'web development services', 'responsive web design', 'enterprise websites']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">
                  ← Back to Services
                </Link>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center">
                    <Globe className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Web Development</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Custom Website Development
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Professional, responsive websites built with modern technologies. From simple business sites to complex e-commerce platforms that drive real results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#portfolio">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Why Choose Our Web Development
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We build websites that don't just look great—they perform exceptionally.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <feature.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Our Development Process
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that delivers exceptional results every time.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, i) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                  >
                    <div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div>
                    <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Investment Options
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparent pricing with packages designed for every business size.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {packages.map((pkg, i) => (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard 
                      className={`p-8 h-full relative ${pkg.popular ? 'border-primary' : ''}`}
                      borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">
                          Most Popular
                        </div>
                      )}
                      <div className="text-center mb-6">
                        <h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3>
                        <div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div>
                        <p className="text-sm text-muted-foreground">{pkg.description}</p>
                      </div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                        variant={pkg.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <Link to="/#contact">Get Started</Link>
                      </Button>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Ready to Build Your Website?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's discuss your project and create something exceptional together.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/#contact">
                    Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}
