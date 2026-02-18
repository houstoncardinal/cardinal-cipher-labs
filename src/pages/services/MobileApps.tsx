import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { VerticalNav } from "@/components/layout/VerticalNav";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { generateServicePageSchemas } from "@/lib/service-schema-generators";
import { siteConfig } from "@/lib/seo-config";
import {
  Smartphone, Cpu, Cloud, Lock, Zap, RefreshCw, ArrowRight, Check,
  Apple, Monitor, Quote, Star, ChevronDown, Wifi, BatteryCharging,
  Fingerprint, Bell, MapPin, Camera, Shield, CheckCircle,
  XCircle, ArrowUpRight, Sparkles, TrendingUp, Globe, Palette, Megaphone
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  { icon: Smartphone, title: "Native Performance", description: "Apps built with React Native, Flutter, and Swift/Kotlin for true native performance delivering 60fps animations and instant response times on iOS and Android." },
  { icon: Cloud, title: "Cloud Backend Integration", description: "Seamless backend integration with real-time data sync, offline-first capabilities, and automatic conflict resolution using Firebase, AWS Amplify, or custom APIs." },
  { icon: Lock, title: "Secure by Design", description: "Enterprise-grade security with biometric authentication (Face ID, fingerprint), end-to-end encryption, secure keychain storage, and certificate pinning." },
  { icon: Zap, title: "Optimized Performance", description: "Smooth 60fps animations, lazy loading, memory optimization, and intelligent caching for exceptional user experience even on older devices." },
  { icon: RefreshCw, title: "OTA Updates", description: "Push updates instantly without App Store approval delays using CodePush and EAS Updates, so your users always have the latest features." },
  { icon: Bell, title: "Push Notifications", description: "Intelligent push notification systems with segmentation, A/B testing, deep linking, and analytics to maximize engagement and retention." },
  { icon: MapPin, title: "Location Services", description: "GPS tracking, geofencing, location-based features, and mapping integration with Google Maps and Apple Maps SDKs." },
  { icon: Camera, title: "Device Integration", description: "Full access to device capabilities including camera, AR, NFC, Bluetooth, health sensors, and native file system." },
  { icon: Wifi, title: "Offline-First Architecture", description: "Apps that work seamlessly without internet connectivity with automatic data sync when connection is restored." },
];

const platforms = [
  { icon: Apple, name: "iOS", description: "Native iOS apps for iPhone and iPad with Swift, SwiftUI, and UIKit. App Store optimization and review-compliant submissions." },
  { icon: Smartphone, name: "Android", description: "Native Android apps with Kotlin, Jetpack Compose, and Material Design 3. Google Play Store optimization and automated testing." },
  { icon: Monitor, name: "Cross-Platform", description: "React Native and Flutter apps for both platforms from a single codebase. Up to 90% code sharing with native performance." },
];

const techStack = [
  { category: "iOS", items: ["Swift", "SwiftUI", "UIKit", "Core Data", "ARKit"] },
  { category: "Android", items: ["Kotlin", "Jetpack Compose", "Room DB", "Hilt DI", "CameraX"] },
  { category: "Cross-Platform", items: ["React Native", "Flutter", "Expo", "Dart", "TypeScript"] },
  { category: "Backend", items: ["Firebase", "AWS Amplify", "Supabase", "GraphQL", "WebSockets"] },
];

const packages = [
  {
    name: "MVP",
    price: "$15,000",
    description: "Launch your idea quickly with a focused minimum viable product",
    features: ["Core features only (up to 8 screens)", "Single platform (iOS or Android)", "Basic UI/UX design", "API integration & backend setup", "App Store/Play Store submission", "Push notification setup", "Analytics integration", "30-day bug fixes"],
    popular: false,
  },
  {
    name: "Professional",
    price: "$35,000",
    description: "Full-featured application for growing businesses",
    features: ["Complete feature set (up to 20 screens)", "iOS & Android (cross-platform)", "Custom UI/UX design with animations", "Push notifications & deep linking", "Analytics & crash reporting", "Admin dashboard & CMS", "In-app purchases / subscriptions", "3 months post-launch support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$75,000+",
    description: "Complex, mission-critical business solutions",
    features: ["Advanced functionality (unlimited screens)", "All platforms + web app", "Enterprise SSO & security", "Custom backend microservices", "Offline-first architecture", "Security audit & penetration testing", "Dedicated development team", "12 months support & maintenance"],
    popular: false,
  },
];

const stats = [
  { value: "50+", label: "Apps Delivered" },
  { value: "2M+", label: "Total Downloads" },
  { value: "4.8★", label: "Avg Store Rating" },
  { value: "98%", label: "Client Satisfaction" },
];

const process = [
  { step: "01", title: "Discovery & Ideation", description: "Deep dive into your app concept, target users, competitive analysis, and feature prioritization using user story mapping." },
  { step: "02", title: "UX Research & Wireframing", description: "User personas, journey mapping, wireframes, and interactive prototypes validated through user testing sessions." },
  { step: "03", title: "Visual Design", description: "High-fidelity mockups following iOS HIG and Material Design guidelines with custom animations and micro-interactions." },
  { step: "04", title: "Agile Development", description: "Two-week sprint cycles with continuous integration, automated testing, and bi-weekly demo sessions for stakeholder feedback." },
  { step: "05", title: "QA & Beta Testing", description: "Comprehensive testing across 50+ device configurations, beta testing via TestFlight/Firebase Distribution, and performance profiling." },
  { step: "06", title: "Launch & Growth", description: "App Store optimization, submission management, post-launch monitoring, crash analytics, and iterative improvement based on user data." },
];

const testimonials = [
  { author: "Jennifer Williams", title: "CEO, Startup Accelerate", body: "Cardinal helped us launch our MVP in just 8 weeks. The app now has over 200,000 downloads and a 4.9-star rating. Their agile approach made all the difference.", rating: 5 },
  { author: "Robert Garcia", title: "Head of Digital, Financial Services Corp", body: "The fintech app Cardinal built handles over $50M in monthly transactions with zero security incidents. Their security-first approach is truly enterprise-grade.", rating: 5 },
  { author: "Lisa Park", title: "Product Manager, HealthTech Solutions", body: "Our patient management app reduced appointment no-shows by 65%. The offline-first architecture means doctors in rural areas can still access critical data.", rating: 5 },
];

const faqs = [
  { question: "Should I build a native or cross-platform app?", answer: "It depends on your requirements. Cross-platform (React Native/Flutter) is ideal for most business apps, offering 90% code sharing and faster development. Native is best for apps requiring heavy device integration, AR/VR, or games. We'll recommend the best approach during our free consultation." },
  { question: "How long does it take to develop a mobile app?", answer: "An MVP typically takes 6-8 weeks, a full-featured app 12-16 weeks, and enterprise solutions 16-24 weeks. We follow agile methodology with bi-weekly releases, so you see progress from week one." },
  { question: "Do you handle App Store and Play Store submissions?", answer: "Yes, we handle the entire submission process including app screenshots, descriptions, keywords, compliance documentation, and communication with Apple/Google review teams. We also optimize your listing for better discoverability (ASO)." },
  { question: "Can you update an existing app or add new features?", answer: "Absolutely. We regularly take over existing codebases, perform code audits, and add new features or modernize the app. We'll assess the current codebase quality and recommend the best path forward." },
  { question: "How do you ensure app security?", answer: "We implement multiple security layers: certificate pinning, secure keychain storage, biometric authentication, data encryption at rest and in transit, obfuscation, jailbreak/root detection, and regular security audits following OWASP Mobile guidelines." },
  { question: "What happens after the app launches?", answer: "We provide post-launch support packages (30 days to 12 months) that include crash monitoring, performance optimization, OS update compatibility, feature iterations based on analytics, and ongoing bug fixes." },
];

const serviceUrl = `${siteConfig.url}/services/mobile-apps`;

const schemas = generateServicePageSchemas({
  serviceName: "Mobile & Web App Development Services",
  serviceDescription: "Custom mobile app development for iOS and Android. React Native, Flutter, and native development with enterprise-grade security and performance.",
  serviceType: "SoftwareDevelopment",
  serviceUrl,
  category: "Mobile App Development",
  breadcrumbs: [
    { name: "Home", url: siteConfig.url },
    { name: "Services", url: `${siteConfig.url}/#services` },
    { name: "Mobile Apps", url: serviceUrl },
  ],
  techStack,
  features: features.map(f => ({ title: f.title, description: f.description })),
  faqs,
  offers: packages.map(p => ({ name: p.name, price: p.price, description: p.description, features: p.features })),
  process: process.map(p => ({ name: p.title, description: p.description })),
  reviews: testimonials.map(t => ({ author: t.author, authorTitle: t.title.split(",")[0], company: t.title.split(",").slice(1).join(",").trim(), rating: t.rating, body: t.body, date: "2025-02-10" })),
  aggregateRating: { ratingValue: 4.8, reviewCount: 52 },
  duration: "P8W",
});

export default function MobileApps() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SEOHead title="Mobile & Web App Development" description="Custom mobile app development for iOS & Android. React Native, Flutter & native development with enterprise security. 50+ apps, 2M+ downloads. Free consultation." keywords={["mobile app development Houston", "iOS app development company", "Android app development agency", "React Native development services", "enterprise mobile app development", "fintech app development", "cross-platform apps", "Flutter"]} schemas={schemas} url={serviceUrl} />
      <div className="min-h-screen bg-background">
        <Header />
        <VerticalNav />
        
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <Breadcrumbs items={[{ label: "Services", href: "/#services" }, { label: "Mobile Apps" }]} />
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Smartphone className="w-7 h-7 text-primary" /></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary font-medium">Mobile Apps</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Mobile & Web Applications</h1>
                <p className="service-description text-xl text-muted-foreground max-w-2xl mb-8">Custom mobile apps and web applications that streamline business operations. Built for native performance, enterprise security, and exceptional user experience.</p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Discuss Your App <ArrowRight className="ml-2 w-4 h-4" /></Link></Button>
                  <Button size="lg" variant="outline" asChild><Link to="/portfolio">See Our Apps</Link></Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-16 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="font-serif text-4xl md:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground tracking-wide uppercase">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Platforms */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Platforms We Build For</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Native and cross-platform solutions tailored to your business requirements and budget.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {platforms.map((p, i) => (
                  <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-8 text-center h-full"><p.icon className="w-12 h-12 text-primary mx-auto mb-4" /><h3 className="font-serif text-2xl text-foreground mb-2">{p.name}</h3><p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p></LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">What Sets Our Apps Apart</h2><p className="text-muted-foreground max-w-2xl mx-auto">Built with the latest technologies, best practices, and deep platform expertise.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{features.map((f, i) => (<motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="p-6 h-full"><f.icon className="w-10 h-10 text-primary mb-4" /><h3 className="font-serif text-xl text-foreground mb-2">{f.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p></LuxuryCard></motion.div>))}</div></div></section>

          {/* Trust & Certifications */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Trust & Certifications</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Industry-recognized partnerships and compliance standards that ensure quality and security.</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
                {[
                  { name: "AWS Advanced Consulting Partner", icon: Shield },
                  { name: "Google Cloud Partner", icon: Shield },
                  { name: "SOC 2 Type II Compliant", icon: Shield },
                  { name: "Apple Developer Program", icon: Shield },
                  { name: "Google Play Console Partner", icon: Shield },
                ].map((cert, i) => (
                  <motion.div key={cert.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 text-center h-full flex flex-col items-center justify-center">
                      <cert.icon className="w-10 h-10 text-primary mb-3" />
                      <p className="text-sm font-medium text-foreground leading-tight">{cert.name}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Technology Stack</h2><p className="text-muted-foreground max-w-2xl mx-auto">Industry-leading technologies for every platform and use case.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">{techStack.map((s, i) => (<motion.div key={s.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-6 h-full"><h3 className="font-serif text-lg text-primary mb-4">{s.category}</h3><ul className="space-y-2">{s.items.map(item => (<li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><div className="w-1.5 h-1.5 bg-primary/60 rounded-full" />{item}</li>))}</ul></LuxuryCard></motion.div>))}</div></div></section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our App Development Process</h2><p className="text-muted-foreground max-w-2xl mx-auto">Agile methodology with transparent communication and bi-weekly demos.</p></motion.div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{process.map((item, i) => (<motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><div className="text-6xl font-serif text-primary/20 mb-2">{item.step}</div><h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p></motion.div>))}</div></div></section>

          {/* App Success Metrics */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">App Success Metrics</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Real before-and-after results from our client app launches.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { metric: "Downloads", before: "0", after: "200K+", icon: TrendingUp },
                  { metric: "Store Rating", before: "N/A", after: "4.8\u2605", icon: Star },
                  { metric: "User Retention", before: "Industry 25%", after: "Our 65%", icon: Sparkles },
                  { metric: "Crash Rate", before: "Industry 2%", after: "Our 0.1%", icon: Shield },
                ].map((item, i) => (
                  <motion.div key={item.metric} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full text-center">
                      <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-serif text-lg text-foreground mb-4">{item.metric}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <span className="text-muted-foreground line-through">{item.before}</span>
                          <ArrowRight className="w-4 h-4 text-primary" />
                          <span className="text-primary font-semibold">{item.after}</span>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Client Success Stories</h2><p className="text-muted-foreground max-w-2xl mx-auto">Real results from real app launches.</p></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{testimonials.map((t, i) => (<motion.div key={t.author} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className="p-8 h-full"><Quote className="w-8 h-8 text-primary/30 mb-4" /><p className="text-sm text-muted-foreground leading-relaxed mb-6">"{t.body}"</p><div className="flex items-center gap-1 mb-2">{Array.from({ length: t.rating }).map((_, j) => <Star key={j} className="w-4 h-4 text-primary fill-primary" />)}</div><div className="font-medium text-foreground text-sm">{t.author}</div><div className="text-xs text-muted-foreground">{t.title}</div></LuxuryCard></motion.div>))}</div></div></section>

          {/* Why Cardinal for Mobile */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Cardinal for Mobile</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">See how our mobile development approach compares to the competition.</p>
              </motion.div>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Category</div>
                  <div className="text-sm font-medium text-primary uppercase tracking-wider text-center">Cardinal</div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider text-center">Others</div>
                </div>
                {[
                  { category: "Platform Expertise", cardinal: "Native + Cross-Platform expertise", others: "Only cross-platform" },
                  { category: "Security", cardinal: "Enterprise security (biometric, encryption)", others: "Basic auth only" },
                  { category: "App Store Optimization", cardinal: "App Store optimization included", others: "Extra cost" },
                  { category: "Post-Launch Support", cardinal: "12-month support & updates", others: "30-day warranty" },
                  { category: "Architecture", cardinal: "Offline-first architecture", others: "Online only" },
                ].map((row, i) => (
                  <motion.div key={row.category} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <LuxuryCard className="p-4 mb-3">
                      <div className="grid grid-cols-3 gap-4 items-center">
                        <div className="font-medium text-sm text-foreground">{row.category}</div>
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-foreground">{row.cardinal}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm">
                          <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span className="text-muted-foreground">{row.others}</span>
                        </div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing */}
          <section className="py-24 lg:py-32 bg-card/50"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Investment Options</h2><p className="text-muted-foreground max-w-2xl mx-auto">Flexible packages designed for different project scopes and budgets.</p></motion.div><div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">{packages.map((pkg, i) => (<motion.div key={pkg.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}><LuxuryCard className={`p-8 h-full relative ${pkg.popular ? "border-primary" : ""}`} borderStyle={pkg.popular ? "metallic-crimson" : "metallic-platinum"}>{pkg.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-medium">Recommended</div>}<div className="text-center mb-6"><h3 className="font-serif text-2xl text-foreground mb-2">{pkg.name}</h3><div className="font-serif text-4xl text-primary mb-2">{pkg.price}</div><p className="text-sm text-muted-foreground">{pkg.description}</p></div><ul className="space-y-3 mb-8">{pkg.features.map(f => (<li key={f} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" /><span className="text-muted-foreground">{f}</span></li>))}</ul><Button className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : ""}`} variant={pkg.popular ? "default" : "outline"} asChild><Link to="/contact">Get Quote</Link></Button></LuxuryCard></motion.div>))}</div></div></section>

          {/* FAQs */}
          <section className="py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-12"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16"><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Frequently Asked Questions</h2><p className="text-muted-foreground max-w-2xl mx-auto">Common questions about our app development services.</p></motion.div><div className="max-w-3xl mx-auto space-y-4">{faqs.map((faq, i) => (<motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}><LuxuryCard className="overflow-hidden"><button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left"><h3 className="font-serif text-lg text-foreground pr-4">{faq.question}</h3><ChevronDown className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} /></button>{openFaq === i && <div className="px-6 pb-6"><p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p></div>}</LuxuryCard></motion.div>))}</div></div></section>

          {/* Related Services */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Related Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Complement your mobile app with our other expert services.</p>
              </motion.div>
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                {[
                  { title: "Web Development", description: "Full-stack web applications that complement your mobile experience with shared backend and consistent branding.", icon: Globe, href: "/services/web-development" },
                  { title: "UX/UI Design", description: "Research-driven interface design that maximizes user engagement, retention, and conversion across all platforms.", icon: Palette, href: "/services/web-development" },
                  { title: "Digital Marketing", description: "App Store optimization, user acquisition campaigns, and growth strategies to maximize your app's reach.", icon: Megaphone, href: "/contact" },
                ].map((service, i) => (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Link to={service.href}>
                      <LuxuryCard className="p-8 h-full group hover:border-primary/50 transition-colors">
                        <service.icon className="w-10 h-10 text-primary mb-4" />
                        <h3 className="font-serif text-xl text-foreground mb-2 flex items-center gap-2">{service.title} <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" /></h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                      </LuxuryCard>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5"><div className="container mx-auto px-6 lg:px-12 text-center"><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Build Your App?</h2><p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's turn your idea into a powerful mobile experience. Free consultation, no obligations.</p><Button size="lg" className="bg-primary hover:bg-primary/90" asChild><Link to="/contact">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Link></Button></motion.div></div></section>
        </main>
        <Footer />
      </div>
    </>
  );
}
