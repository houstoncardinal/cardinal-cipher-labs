import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Shield, Target, Lightbulb, Users, Award, Globe, 
  CheckCircle, Briefcase, GraduationCap, Star, TrendingUp 
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { 
  generateOrganizationSchema, generatePersonSchemas, 
  generateBreadcrumbSchema, generateWebPageSchema, generateReviewSchemas 
} from "@/lib/schema-generators";

const values = [
  { icon: Shield, title: "Integrity First", description: "We build on trust. Every recommendation, every line of code, every strategy is crafted with your best interests at the center." },
  { icon: Target, title: "Precision Engineering", description: "We don't do approximations. Our solutions are architected with surgical precision to solve your exact business challenges." },
  { icon: Lightbulb, title: "Relentless Innovation", description: "We stay ahead of the curve, leveraging cutting-edge technologies to give your business an unfair competitive advantage." },
  { icon: Users, title: "Partnership Mentality", description: "We're not vendors — we're partners. Your success is our success, and we invest deeply in every relationship." },
];

const milestones = [
  { year: "2020", title: "Founded in Houston", description: "Cardinal Consulting established with a mission to deliver enterprise-grade solutions to businesses of all sizes." },
  { year: "2021", title: "First Enterprise Client", description: "Secured our first Fortune 500 engagement, delivering a cloud migration saving $2M annually." },
  { year: "2022", title: "National Expansion", description: "Expanded operations coast-to-coast, serving clients across healthcare, finance, and technology sectors." },
  { year: "2023", title: "Industry Recognition", description: "Named to Houston Business Journal Fast 100 and Inc. 5000 Fastest Growing Companies." },
  { year: "2024", title: "AI Division Launch", description: "Launched dedicated AI & Machine Learning practice, helping enterprises leverage intelligent automation." },
  { year: "2025", title: "Global Reach", description: "Extended services internationally with clients across North America, Europe, and Asia Pacific." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Active Clients" },
  { value: "99.9%", label: "Client Retention" },
  { value: "4.9★", label: "Average Rating" },
];

const certifications = siteConfig.expertise.certifications;

export default function About() {
  const schemas = [
    generateOrganizationSchema(),
    ...generatePersonSchemas(),
    ...generateReviewSchemas(),
    generateWebPageSchema({
      name: "About Cardinal Consulting",
      description: "Learn about Cardinal Consulting's mission, team, and commitment to delivering enterprise-grade digital solutions.",
      url: `${siteConfig.url}/about`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "About", url: `${siteConfig.url}/about` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "@id": `${siteConfig.url}/about`,
      name: "About Cardinal Consulting",
      description: "Our story, mission, and the team behind enterprise-grade digital transformation.",
      url: `${siteConfig.url}/about`,
      mainEntity: { "@id": `${siteConfig.url}#organization` },
    },
  ];

  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Cardinal Consulting — a Houston-based enterprise software development and consulting firm delivering cutting-edge digital solutions since 2020."
        url={`${siteConfig.url}/about`}
        schemas={schemas}
        keywords={["about cardinal consulting", "software consulting firm", "Houston tech company", "enterprise consulting"]}
      />

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
            <div className="container mx-auto px-6 lg:px-12 relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl">
                <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-6 hover:underline">← Back to Home</Link>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><Briefcase className="w-7 h-7 text-primary" /></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">About Us</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
                  Engineering Excellence,<br />Delivered.
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">
                  We are Cardinal Consulting — a team of engineers, strategists, and designers obsessed with building digital solutions that transform businesses.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link to="/contact">Work With Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/portfolio">See Our Work</Link>
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
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Story */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">Our Story</span>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">Built from the ground up with a singular mission</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Cardinal Consulting was founded in 2020 by Hunain Qureshi with a clear vision: bring enterprise-grade engineering excellence to businesses of every size. What started as a one-person consultancy in Houston has grown into a full-service digital agency serving clients across multiple continents.</p>
                    <p>We've helped healthcare providers build HIPAA-compliant platforms, enabled financial institutions to migrate to the cloud securely, and empowered startups to launch MVPs in record time. Every project teaches us something new, and every client relationship makes us stronger.</p>
                    <p>Today, Cardinal Consulting stands as a trusted technology partner for organizations ready to make bold moves in their digital transformation journey.</p>
                  </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <LuxuryCard elevation={4} borderStyle="metallic-crimson" className="p-10">
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-serif text-2xl text-foreground mb-2">Hunain Qureshi</h3>
                        <p className="text-primary text-sm mb-4">Founder & CEO</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{siteConfig.team[0].description}</p>
                      </div>
                      <div className="space-y-3">
                        {siteConfig.team[0].credentials.map((cred) => (
                          <div key={cred} className="flex items-center gap-3 text-sm">
                            <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{cred}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </LuxuryCard>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Core Values</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">The principles that guide every decision, every project, and every relationship.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, i) => (
                  <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <value.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Our Journey</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Key milestones that have shaped Cardinal Consulting.</p>
              </motion.div>
              <div className="max-w-3xl mx-auto space-y-8">
                {milestones.map((m, i) => (
                  <motion.div key={m.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-6">
                    <div className="text-4xl font-serif text-primary/30 w-20 flex-shrink-0">{m.year}</div>
                    <div className="border-l-2 border-primary/20 pl-6 pb-8">
                      <h3 className="font-serif text-xl text-foreground mb-2">{m.title}</h3>
                      <p className="text-sm text-muted-foreground">{m.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Certifications & Compliance</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Industry-recognized certifications that validate our expertise and commitment to excellence.</p>
              </motion.div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {certifications.map((cert, i) => (
                  <motion.div key={cert} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 text-center h-full">
                      <Award className="w-8 h-8 text-primary mx-auto mb-3" />
                      <p className="text-sm text-foreground font-medium">{cert}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-primary/5">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Ready to Work Together?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's discuss how Cardinal Consulting can accelerate your digital transformation.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
