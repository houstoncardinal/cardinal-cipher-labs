import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Megaphone, 
  Target, 
  Users, 
  Mail, 
  BarChart3, 
  Video,
  ArrowRight,
  Check,
  TrendingUp,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Strategic Google Ads and paid social campaigns with optimized ROAS."
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Engaging content and community management across all major platforms."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email sequences that nurture leads and drive conversions."
  },
  {
    icon: Video,
    title: "Content Marketing",
    description: "Valuable content that attracts, engages, and converts your ideal customers."
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description: "Deep insights and attribution modeling to optimize your marketing spend."
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "A/B testing and funnel optimization to maximize your conversion rates."
  }
];

const packages = [
  {
    name: "Starter",
    price: "$2,500/mo",
    description: "Perfect for small businesses",
    features: [
      "2 marketing channels",
      "Social media management",
      "Monthly email campaigns",
      "Basic analytics",
      "Monthly reporting",
      "Strategy call"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "$5,000/mo",
    description: "For scaling businesses",
    features: [
      "4 marketing channels",
      "PPC management ($5k spend)",
      "Content creation (8 pieces)",
      "Email automation",
      "Advanced analytics",
      "Bi-weekly strategy calls"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$10,000+/mo",
    description: "Full-service marketing",
    features: [
      "Unlimited channels",
      "PPC management (unlimited)",
      "Video production",
      "Influencer partnerships",
      "Custom dashboards",
      "Dedicated account manager"
    ],
    popular: false
  }
];

const stats = [
  { value: "350%", label: "Avg ROI" },
  { value: "$2M+", label: "Revenue Generated" },
  { value: "45%", label: "Avg Cost Reduction" },
  { value: "100+", label: "Campaigns Managed" }
];

const caseStudies = [
  {
    industry: "E-commerce",
    result: "420% ROAS",
    description: "Google Shopping & Facebook Ads"
  },
  {
    industry: "B2B Tech",
    result: "3x Leads",
    description: "LinkedIn & Content Marketing"
  },
  {
    industry: "Healthcare",
    result: "65% Lower CPA",
    description: "Google Ads Optimization"
  },
  {
    industry: "Real Estate",
    result: "200+ Leads/mo",
    description: "Facebook Lead Generation"
  }
];

export default function DigitalMarketing() {
  return (
    <>
      <SEOHead
        title="Digital Marketing Services | Cardinal Consulting"
        description="Strategic digital marketing campaigns that drive growth. PPC advertising, social media marketing, email campaigns, and content strategy with measurable results."
        keywords={['digital marketing', 'PPC advertising', 'social media marketing', 'email marketing', 'content strategy']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
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
                  <div className="w-14 h-14 bg-orange-500/10 flex items-center justify-center">
                    <Megaphone className="w-7 h-7 text-orange-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Digital Marketing</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Digital Marketing Campaigns
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Strategic digital marketing campaigns that drive growth. From social media to email marketing with measurable, real-world results.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Get Marketing Audit <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#portfolio">See Results</Link>
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
                  Marketing Services
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Full-funnel marketing strategies that attract, engage, and convert.
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

          {/* Case Studies */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Campaign Results
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Real results from recent marketing campaigns.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudies.map((study, i) => (
                  <motion.div
                    key={study.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 text-center h-full">
                      <div className="text-xs text-muted-foreground mb-2">{study.industry}</div>
                      <div className="font-serif text-3xl text-primary mb-2">{study.result}</div>
                      <p className="text-sm text-muted-foreground">{study.description}</p>
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
                  Marketing Packages
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Scalable solutions designed for growth at every stage.
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
                          Best Value
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
                  Ready to Grow Your Business?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Get a free marketing audit and discover untapped opportunities.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/#contact">
                    Get Free Audit <ArrowRight className="ml-2 w-4 h-4" />
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
