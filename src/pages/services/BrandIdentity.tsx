import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Palette, 
  Layers, 
  PenTool, 
  BookOpen, 
  Printer, 
  Eye,
  ArrowRight,
  Check,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: PenTool,
    title: "Logo Design",
    description: "Distinctive, memorable logos that capture your brand's essence and stand the test of time."
  },
  {
    icon: Palette,
    title: "Color Systems",
    description: "Strategic color palettes that evoke the right emotions and ensure brand consistency."
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description: "Comprehensive style guides that ensure consistent brand application across all touchpoints."
  },
  {
    icon: Layers,
    title: "Visual Identity",
    description: "Complete visual systems including typography, iconography, and graphic elements."
  },
  {
    icon: Printer,
    title: "Print Collateral",
    description: "Business cards, letterheads, packaging, and marketing materials that impress."
  },
  {
    icon: Eye,
    title: "Brand Strategy",
    description: "Positioning, messaging, and voice that differentiates you in the marketplace."
  }
];

const packages = [
  {
    name: "Essentials",
    price: "$5,000",
    description: "Perfect for startups",
    features: [
      "Logo design (3 concepts)",
      "Primary color palette",
      "Typography selection",
      "Basic brand guidelines",
      "Business card design",
      "Social media assets"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$12,000",
    description: "Complete brand identity",
    features: [
      "Logo design (5 concepts)",
      "Full color system",
      "Custom typography",
      "40-page brand book",
      "Stationery suite",
      "Marketing templates",
      "Icon set"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$25,000+",
    description: "Full brand transformation",
    features: [
      "Brand strategy workshop",
      "Logo & visual identity",
      "Comprehensive guidelines",
      "Packaging design",
      "Environmental graphics",
      "Brand launch support",
      "Ongoing consultation"
    ],
    popular: false
  }
];

const stats = [
  { value: "200+", label: "Brands Created" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
  { value: "50+", label: "Industry Awards" }
];

const process = [
  { step: "01", title: "Discovery", description: "Deep dive into your business, values, audience, and competition." },
  { step: "02", title: "Strategy", description: "Define positioning, messaging, and brand personality." },
  { step: "03", title: "Concepts", description: "Explore multiple creative directions for your visual identity." },
  { step: "04", title: "Refinement", description: "Iterate and perfect the chosen direction with your feedback." },
  { step: "05", title: "Guidelines", description: "Document everything in a comprehensive brand book." },
  { step: "06", title: "Launch", description: "Roll out your new brand across all touchpoints." }
];

export default function BrandIdentity() {
  return (
    <>
      <SEOHead
        title="Brand Identity Design Services | Cardinal Consulting"
        description="Complete brand identity solutions that make your business stand out. Logo design, brand guidelines, and visual identity systems that resonate with your audience."
        keywords={['brand identity design', 'logo design', 'brand guidelines', 'visual identity', 'brand strategy']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 via-transparent to-transparent" />
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
                  <div className="w-14 h-14 bg-rose-500/10 flex items-center justify-center">
                    <Palette className="w-7 h-7 text-rose-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Brand Identity</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Brand Identity Design
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Complete brand identity solutions that make your business stand out. Cohesive visual identities that resonate with your audience and build lasting recognition.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Start Your Branding <ArrowRight className="ml-2 w-4 h-4" />
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

          {/* Services */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Branding Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Every element crafted to tell your unique story.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, i) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <service.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
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
                  Our Branding Process
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A collaborative journey to discover and define your brand.
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
                  Branding Packages
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Investment options for every stage of your brand journey.
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
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Ready to Transform Your Brand?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's create a brand identity that sets you apart.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/#contact">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
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
