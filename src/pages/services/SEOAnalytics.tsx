import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Search, 
  BarChart3, 
  Target, 
  TrendingUp, 
  FileCode, 
  Globe,
  ArrowRight,
  Check,
  Zap,
  Eye
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: FileCode,
    title: "Technical SEO Audit",
    description: "Comprehensive analysis of site architecture, crawlability, indexing, and Core Web Vitals."
  },
  {
    icon: Target,
    title: "Keyword Strategy",
    description: "Data-driven keyword research targeting high-intent, low-competition opportunities."
  },
  {
    icon: Globe,
    title: "On-Page Optimization",
    description: "Content optimization, meta tags, schema markup, and internal linking strategies."
  },
  {
    icon: TrendingUp,
    title: "Link Building",
    description: "White-hat backlink acquisition from authoritative, relevant industry sources."
  },
  {
    icon: BarChart3,
    title: "Analytics Setup",
    description: "GA4, Search Console, and custom dashboards for actionable insights."
  },
  {
    icon: Eye,
    title: "Rank Tracking",
    description: "Daily ranking monitoring with competitor analysis and opportunity alerts."
  }
];

const packages = [
  {
    name: "SEO Audit",
    price: "$2,500",
    description: "One-time comprehensive analysis",
    features: [
      "Technical SEO audit",
      "Keyword gap analysis",
      "Competitor research",
      "Content recommendations",
      "Prioritized action plan",
      "60-page report"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "$3,500/mo",
    description: "Ongoing optimization",
    features: [
      "Monthly SEO optimization",
      "Content strategy",
      "Link building (5-10/mo)",
      "Technical improvements",
      "Monthly reporting",
      "Strategy calls"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$7,500/mo",
    description: "Full-service SEO",
    features: [
      "Dedicated SEO manager",
      "Content creation (8 posts)",
      "Aggressive link building",
      "International SEO",
      "Weekly reporting",
      "Priority support"
    ],
    popular: false
  }
];

const stats = [
  { value: "250%", label: "Avg Traffic Increase" },
  { value: "#1-3", label: "Avg Rankings" },
  { value: "85%", label: "Clients Page 1" },
  { value: "180+", label: "Keywords Ranked" }
];

const results = [
  {
    client: "Healthcare Provider",
    metric: "312%",
    description: "Organic traffic increase in 6 months"
  },
  {
    client: "E-commerce Brand",
    metric: "#1",
    description: "Ranking for primary keyword"
  },
  {
    client: "B2B SaaS",
    metric: "45%",
    description: "Increase in qualified leads"
  },
  {
    client: "Local Business",
    metric: "5x",
    description: "Google Maps visibility growth"
  }
];

export default function SEOAnalytics() {
  return (
    <>
      <SEOHead
        title="SEO & Analytics Services | Cardinal Consulting"
        description="Comprehensive SEO optimization and analytics solutions that drive real results. Technical SEO, schema markup, and ranking strategies for sustainable growth."
        keywords={['SEO services', 'search engine optimization', 'analytics setup', 'technical SEO', 'keyword strategy']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent" />
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
                  <div className="w-14 h-14 bg-green-500/10 flex items-center justify-center">
                    <Search className="w-7 h-7 text-green-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">SEO & Analytics</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  SEO & Analytics Services
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Comprehensive SEO optimization and analytics solutions that drive real results and qualified traffic to your business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Get Free SEO Audit <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#portfolio">View Case Studies</Link>
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
                  Our SEO Methodology
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A data-driven approach that delivers sustainable, long-term results.
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

          {/* Results */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Real Results for Real Clients
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We don't just promise results—we deliver them.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((result, i) => (
                  <motion.div
                    key={result.client}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 text-center h-full">
                      <div className="font-serif text-4xl text-primary mb-2">{result.metric}</div>
                      <h3 className="font-medium text-foreground mb-1">{result.client}</h3>
                      <p className="text-sm text-muted-foreground">{result.description}</p>
                    </LuxuryCard>
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
                  SEO Investment Options
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Transparent pricing with measurable ROI.
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
                  Ready to Dominate Search Results?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get a free SEO audit and discover your growth potential.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/#contact">
                    Claim Free Audit <ArrowRight className="ml-2 w-4 h-4" />
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
