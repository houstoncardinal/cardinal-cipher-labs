import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, Briefcase, MapPin, Clock, Code2, Palette, BarChart3, 
  Megaphone, Heart, Zap, Globe, GraduationCap, Users, Coffee 
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema-generators";

const openings = [
  { title: "Senior Full-Stack Developer", department: "Engineering", location: "Houston, TX / Remote", type: "Full-Time", icon: Code2, description: "Build enterprise-grade applications with React, Node.js, and cloud infrastructure. Lead technical architecture decisions.", requirements: ["5+ years full-stack experience", "React/TypeScript expertise", "AWS or GCP experience", "Strong system design skills"] },
  { title: "UX/UI Designer", department: "Design", location: "Houston, TX / Remote", type: "Full-Time", icon: Palette, description: "Craft exceptional user experiences for enterprise clients. Design interfaces that balance beauty with functionality.", requirements: ["3+ years UX/UI experience", "Figma proficiency", "Design system experience", "Portfolio required"] },
  { title: "SEO & Analytics Specialist", department: "Marketing", location: "Remote", type: "Full-Time", icon: BarChart3, description: "Drive organic growth for our clients through advanced SEO strategies, schema markup, and data-driven analytics.", requirements: ["3+ years SEO experience", "Technical SEO knowledge", "Google Analytics expertise", "Schema markup skills"] },
  { title: "Digital Marketing Strategist", department: "Marketing", location: "Houston, TX / Remote", type: "Full-Time", icon: Megaphone, description: "Develop and execute multi-channel marketing campaigns for enterprise clients across various industries.", requirements: ["4+ years marketing experience", "PPC & social media expertise", "Content strategy skills", "Analytics proficiency"] },
  { title: "DevOps Engineer", department: "Engineering", location: "Remote", type: "Full-Time", icon: Zap, description: "Design and maintain CI/CD pipelines, cloud infrastructure, and deployment automation for enterprise applications.", requirements: ["3+ years DevOps experience", "Kubernetes/Docker expertise", "Terraform/IaC experience", "AWS/GCP certification preferred"] },
  { title: "Project Manager", department: "Operations", location: "Houston, TX", type: "Full-Time", icon: Briefcase, description: "Lead cross-functional teams to deliver complex digital projects on time and within budget.", requirements: ["5+ years PM experience", "Agile/Scrum certification", "Technical project background", "Client-facing skills"] },
];

const perks = [
  { icon: Heart, title: "Health & Wellness", description: "Comprehensive medical, dental, and vision coverage for you and your family." },
  { icon: Globe, title: "Remote-First", description: "Work from anywhere. We trust our team to deliver excellence from wherever they're most productive." },
  { icon: GraduationCap, title: "Learning Budget", description: "$3,000 annual learning stipend for courses, conferences, books, and certifications." },
  { icon: Coffee, title: "Flexible PTO", description: "Unlimited paid time off with a minimum 3-week vacation policy. Rest fuels excellence." },
  { icon: Zap, title: "Latest Tech", description: "Top-of-the-line equipment and tools. MacBook Pro, monitors, and any software you need." },
  { icon: Users, title: "Team Retreats", description: "Annual company retreats and quarterly team events to build lasting connections." },
];

export default function Careers() {
  const schemas = [
    generateWebPageSchema({
      name: "Careers at Cardinal Consulting",
      description: "Join our team of engineers, designers, and strategists building enterprise-grade digital solutions.",
      url: `${siteConfig.url}/careers`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Careers", url: `${siteConfig.url}/careers` },
    ]),
    ...openings.map((job) => ({
      "@context": "https://schema.org",
      "@type": "JobPosting",
      title: job.title,
      description: job.description,
      datePosted: "2025-01-15",
      validThrough: "2025-12-31",
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: siteConfig.name,
        sameAs: siteConfig.url,
        logo: siteConfig.logo,
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Houston",
          addressRegion: "TX",
          addressCountry: "US",
        },
      },
      jobLocationType: job.location.includes("Remote") ? "TELECOMMUTE" : undefined,
      applicantLocationRequirements: job.location.includes("Remote")
        ? { "@type": "Country", name: "United States" }
        : undefined,
      industry: "Software Development",
      occupationalCategory: job.department,
    })),
  ];

  return (
    <>
      <SEOHead
        title="Careers"
        description="Join Cardinal Consulting — we're hiring engineers, designers, and strategists to build enterprise-grade digital solutions. Remote-friendly, competitive benefits."
        url={`${siteConfig.url}/careers`}
        schemas={schemas}
        keywords={["careers at cardinal consulting", "software developer jobs Houston", "remote tech jobs", "UX designer jobs"]}
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
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Careers</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Build the Future With Us</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mb-8">We're looking for exceptional people who want to do meaningful work. If you're passionate about building technology that transforms businesses, we'd love to hear from you.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <a href="#openings">View Open Positions <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Culture Stats */}
          <section className="py-16 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: "100%", label: "Remote-Friendly" },
                  { value: "$3K", label: "Learning Budget" },
                  { value: "Unlimited", label: "PTO Policy" },
                  { value: "4.9★", label: "Glassdoor Rating" },
                ].map((stat, i) => (
                  <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                    <div className="font-serif text-4xl lg:text-5xl text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Perks */}
          <section className="py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Why Work at Cardinal</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">We believe exceptional work comes from exceptional people — and exceptional people deserve exceptional benefits.</p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {perks.map((perk, i) => (
                  <motion.div key={perk.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <perk.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-xl text-foreground mb-2">{perk.title}</h3>
                      <p className="text-sm text-muted-foreground">{perk.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Open Positions */}
          <section id="openings" className="py-24 lg:py-32 bg-card/50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Open Positions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">Find your next opportunity. All positions include competitive salary, equity, and full benefits.</p>
              </motion.div>
              <div className="max-w-4xl mx-auto space-y-6">
                {openings.map((job, i) => (
                  <motion.div key={job.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard elevation={2} className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <job.icon className="w-6 h-6 text-primary" />
                            <h3 className="font-serif text-xl text-foreground">{job.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                          <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1"><Briefcase size={12} />{job.department}</span>
                            <span className="flex items-center gap-1"><MapPin size={12} />{job.location}</span>
                            <span className="flex items-center gap-1"><Clock size={12} />{job.type}</span>
                          </div>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 shrink-0" asChild>
                          <Link to="/contact">Apply Now <ArrowRight className="ml-2 w-4 h-4" /></Link>
                        </Button>
                      </div>
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
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Don't See Your Role?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">We're always looking for talented individuals. Send us your resume and we'll reach out when the right opportunity opens up.</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                  <Link to="/contact">Send Your Resume <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
