import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  MousePointer, 
  Users, 
  BarChart3, 
  Layers, 
  Smartphone, 
  TestTube,
  ArrowRight,
  Check,
  Eye,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Users,
    title: "User Research",
    description: "Deep understanding of your users through interviews, surveys, and behavioral analysis."
  },
  {
    icon: Layers,
    title: "Information Architecture",
    description: "Intuitive content organization and navigation that guides users effortlessly."
  },
  {
    icon: MousePointer,
    title: "Interface Design",
    description: "Beautiful, functional interfaces that delight users and drive engagement."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Seamless experiences across all devices, from mobile to desktop."
  },
  {
    icon: TestTube,
    title: "A/B Testing",
    description: "Data-driven optimization through rigorous testing and analysis."
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    description: "Strategic improvements that turn visitors into customers."
  }
];

const packages = [
  {
    name: "UX Audit",
    price: "$3,500",
    description: "Identify improvement opportunities",
    features: [
      "Comprehensive UX review",
      "Heuristic evaluation",
      "User flow analysis",
      "Accessibility audit",
      "Competitor benchmarking",
      "Prioritized recommendations"
    ],
    popular: false
  },
  {
    name: "Design Sprint",
    price: "$15,000",
    description: "Rapid prototype & validate",
    features: [
      "5-day design sprint",
      "User research & personas",
      "Wireframes & prototypes",
      "User testing sessions",
      "Design specifications",
      "Implementation support"
    ],
    popular: true
  },
  {
    name: "Full Redesign",
    price: "$35,000+",
    description: "Complete experience transformation",
    features: [
      "Extensive user research",
      "Complete design system",
      "High-fidelity prototypes",
      "Usability testing",
      "Developer handoff",
      "3 months iteration support"
    ],
    popular: false
  }
];

const stats = [
  { value: "40%", label: "Avg Conversion Lift" },
  { value: "60%", label: "Task Success Increase" },
  { value: "35%", label: "Bounce Rate Reduction" },
  { value: "4.8★", label: "Client Satisfaction" }
];

const process = [
  { step: "01", title: "Research", description: "Understand users, business goals, and competitive landscape." },
  { step: "02", title: "Define", description: "Create personas, user journeys, and success metrics." },
  { step: "03", title: "Ideate", description: "Explore solutions through sketching and wireframing." },
  { step: "04", title: "Prototype", description: "Build interactive prototypes for testing and validation." },
  { step: "05", title: "Test", description: "Validate designs with real users and gather feedback." },
  { step: "06", title: "Iterate", description: "Refine based on data and implement improvements." }
];

const metrics = [
  { label: "User Satisfaction Score", before: "3.2", after: "4.7", improvement: "+47%" },
  { label: "Task Completion Rate", before: "62%", after: "89%", improvement: "+44%" },
  { label: "Time on Task", before: "4.5min", after: "1.8min", improvement: "-60%" },
  { label: "Conversion Rate", before: "2.1%", after: "4.8%", improvement: "+129%" }
];

export default function UXUI() {
  return (
    <>
      <SEOHead
        title="UX/UI Design & Experience Optimization | Cardinal Consulting"
        description="User-centered design and interface optimization that creates exceptional digital experiences and drives conversions. Research-backed design that delivers results."
        keywords={['UX design', 'UI design', 'user experience', 'interface design', 'conversion optimization', 'A/B testing']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-transparent" />
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
                  <div className="w-14 h-14 bg-indigo-500/10 flex items-center justify-center">
                    <MousePointer className="w-7 h-7 text-indigo-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">UX/UI Design</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  UX/UI Experience Optimization
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  User-centered design and interface optimization that creates exceptional digital experiences and drives conversions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Get UX Audit <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#portfolio">See Case Studies</Link>
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
                  UX/UI Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Research-driven design that puts users first.
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

          {/* Results Metrics */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Measurable Impact
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Average improvements we deliver for our clients.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 text-center h-full">
                      <h3 className="text-sm text-muted-foreground mb-4">{metric.label}</h3>
                      <div className="flex items-center justify-center gap-4 mb-2">
                        <span className="text-lg text-muted-foreground line-through">{metric.before}</span>
                        <Zap className="w-4 h-4 text-primary" />
                        <span className="text-2xl font-serif text-foreground">{metric.after}</span>
                      </div>
                      <div className="text-primary font-medium">{metric.improvement}</div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Our Design Process
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that delivers exceptional user experiences.
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
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  UX/UI Packages
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Solutions tailored to your project scope and goals.
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
                          Recommended
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
                <Eye className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Ready to Elevate Your User Experience?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get a free UX audit and discover opportunities for improvement.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/#contact">
                    Request Free Audit <ArrowRight className="ml-2 w-4 h-4" />
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
