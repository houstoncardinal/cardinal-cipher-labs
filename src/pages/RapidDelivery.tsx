import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { 
  Rocket, Zap, Clock, ArrowRight, Check, Star, Shield, 
  Globe, Smartphone, Palette, Code2, Calendar, Users,
  TrendingUp, Award, CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

const benefits = [
  "Launch faster than your competition",
  "Start generating leads immediately",
  "Reduce time-to-market significantly",
  "Stay ahead of market trends",
  "Validate your business idea quickly",
  "Build investor confidence early"
];

const process = [
  { day: "Day 1-2", title: "Discovery & Planning", description: "We learn your business, define goals, and create a detailed project roadmap." },
  { day: "Day 3-5", title: "Design & Development", description: "Our team builds your website/app with rapid iteration cycles." },
  { day: "Day 6-7", title: "Testing & Launch", description: "Rigorous testing ensures quality, then we launch your project." }
];

const testimonials = [
  { author: "Jennifer M.", title: "CEO, TechStart", body: "Cardinal delivered our MVP in just 10 days. We raised our seed round the following month!", rating: 5 },
  { author: "David K.", title: "Founder, HealthApp", body: "The speed was incredible. We went from idea to launched product in under 2 weeks.", rating: 5 },
  { author: "Sarah L.", title: "Director, Ecommerce", body: "Our new e-commerce site was live in 5 days. The quality was outstanding.", rating: 5 }
];

export default function RapidDelivery() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Fast Website Delivery in 72 Hours | Rapid Web Development Services",
      description: "Get your website delivered in as little as 72 hours. Our rapid web development services help you launch faster, compete sooner, and start generating results.",
      url: `${siteConfig.url}/rapid-delivery`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Rapid Delivery", url: `${siteConfig.url}/rapid-delivery` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Fast Website Delivery in 72 Hours | Rapid Web Development Houston"
        description="Get your website delivered in as little as 72 hours. Our rapid web development services help you launch faster, compete sooner, and start generating results. Houston & nationwide."
        keywords={["rapid web development", "fast website delivery", "72 hour website", "quick web design", "expedited web development", "fast launch website", "Houston web developer", "rush website design", "quick turnaround web design", "fast website build", "website in a week", "emergency web development", "same week website", "rapid website launch", "fast web agency Houston"]}
        url={`${siteConfig.url}/rapid-delivery`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          {/* Hero */}
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <Rocket className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Rapid Delivery</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Launch Your Website in as Little as <span className="text-red-600">72 Hours</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                  While others take months, you'll be live in days. Our rapid delivery process gets your business online fast—so you can start generating results immediately.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700">
                      Get Fast Quote <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline">See Our Work</Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Speed Badges */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                {[
                  { icon: Clock, value: "72 hrs", label: "Minimum" },
                  { icon: Zap, value: "2 weeks", label: "Standard" },
                  { icon: Rocket, value: "Any size", label: "Project scope" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center"
                  >
                    <stat.icon className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <div className="font-serif text-3xl text-gray-900 font-bold">{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Why Speed Matters</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">In today's fast-moving market, faster delivery means competitive advantage.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, i) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-6 h-full">
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4" />
                      <p className="text-gray-700 font-medium">{benefit}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Our Rapid Process</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">A streamlined approach designed for speed without compromising quality.</p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {process.map((step, i) => (
                  <motion.div
                    key={step.day}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <div className="text-xs uppercase tracking-wider text-red-600 font-bold mb-2">{step.day}</div>
                      <h3 className="font-serif text-2xl text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 lg:py-32 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">What Clients Say</h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                  <motion.div
                    key={t.author}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <LuxuryCard className="p-8 h-full">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(t.rating)].map((_, j) => <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                      </div>
                      <p className="text-gray-600 mb-4">"{t.body}"</p>
                      <div>
                        <div className="font-medium text-gray-900">{t.author}</div>
                        <div className="text-sm text-gray-500">{t.title}</div>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-24 lg:py-32 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Ready to Launch Fast?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">Get a free consultation and fast quote for your project.</p>
                <Link to="/contact">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
