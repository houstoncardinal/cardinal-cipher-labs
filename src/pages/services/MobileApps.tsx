import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Smartphone, 
  Cpu, 
  Cloud, 
  Lock, 
  Zap, 
  RefreshCw,
  ArrowRight,
  Check,
  Apple,
  Monitor
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Smartphone,
    title: "Native Performance",
    description: "Apps built with React Native and Flutter for true native performance on iOS and Android."
  },
  {
    icon: Cloud,
    title: "Cloud Integration",
    description: "Seamless backend integration with real-time sync and offline-first capabilities."
  },
  {
    icon: Lock,
    title: "Secure by Design",
    description: "Enterprise-grade security with biometric auth, encryption, and secure data storage."
  },
  {
    icon: Zap,
    title: "Optimized Speed",
    description: "Smooth 60fps animations and instant load times for exceptional user experience."
  },
  {
    icon: RefreshCw,
    title: "OTA Updates",
    description: "Push updates instantly without App Store approval delays using CodePush."
  },
  {
    icon: Cpu,
    title: "API Architecture",
    description: "RESTful and GraphQL APIs designed for scalability and maintainability."
  }
];

const platforms = [
  {
    icon: Apple,
    name: "iOS",
    description: "Native iOS apps for iPhone and iPad with Swift and SwiftUI."
  },
  {
    icon: Smartphone,
    name: "Android",
    description: "Native Android apps with Kotlin and Jetpack Compose."
  },
  {
    icon: Monitor,
    name: "Cross-Platform",
    description: "React Native and Flutter for both platforms from a single codebase."
  }
];

const packages = [
  {
    name: "MVP",
    price: "$15,000",
    timeline: "6-8 weeks",
    description: "Launch your idea quickly",
    features: [
      "Core features only",
      "Single platform (iOS or Android)",
      "Basic UI/UX design",
      "API integration",
      "App Store submission",
      "30-day bug fixes"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$35,000",
    timeline: "12-16 weeks",
    description: "Full-featured application",
    features: [
      "Complete feature set",
      "iOS & Android",
      "Custom UI/UX design",
      "Push notifications",
      "Analytics integration",
      "Admin dashboard",
      "3 months support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$75,000+",
    timeline: "16-24 weeks",
    description: "Complex business solutions",
    features: [
      "Advanced functionality",
      "All platforms + web",
      "Enterprise integrations",
      "Custom backend",
      "Security audit",
      "Dedicated team",
      "12 months support"
    ],
    popular: false
  }
];

const stats = [
  { value: "50+", label: "Apps Delivered" },
  { value: "2M+", label: "Total Downloads" },
  { value: "4.8★", label: "Avg Store Rating" },
  { value: "98%", label: "Client Satisfaction" }
];

export default function MobileApps() {
  return (
    <>
      <SEOHead
        title="Mobile & Web App Development Services | Cardinal Consulting"
        description="Custom mobile app development for iOS and Android. React Native, Flutter, and native development with enterprise-grade security and performance."
        keywords={['mobile app development', 'iOS app development', 'Android app development', 'React Native', 'Flutter']}
      />
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 via-transparent to-transparent" />
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
                  <div className="w-14 h-14 bg-purple-500/10 flex items-center justify-center">
                    <Smartphone className="w-7 h-7 text-purple-500" />
                  </div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Mobile Apps</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Mobile & Web Applications
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  Custom mobile apps and web applications that streamline business operations. Built for performance, scalability, and exceptional user experience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/#contact">
                      Discuss Your App <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/#portfolio">See Our Apps</Link>
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

          {/* Platforms */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  Platforms We Build For
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Native and cross-platform solutions for every business need.
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {platforms.map((platform, i) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 text-center h-full">
                      <platform.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                      <h3 className="font-serif text-2xl text-foreground mb-2">{platform.name}</h3>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  What Sets Our Apps Apart
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Built with the latest technologies and best practices.
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
                  Flexible packages designed for different project scopes and budgets.
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
                        <div className="font-serif text-4xl text-primary mb-1">{pkg.price}</div>
                        <div className="text-xs text-muted-foreground mb-2">{pkg.timeline}</div>
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
                        <Link to="/#contact">Get Quote</Link>
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
                  Ready to Build Your App?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's turn your idea into a powerful mobile experience.
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
