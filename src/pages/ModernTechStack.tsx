import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Code2, ArrowRight, CheckCircle2, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const technologies = [
  { name: "React", description: "Modern UI library for dynamic interfaces" },
  { name: "Next.js", description: "Production-grade framework for fast apps" },
  { name: "TypeScript", description: "Type-safe code for fewer bugs" },
  { name: "Tailwind CSS", description: "Utility-first styling for rapid development" }
];

const benefits = [
  { title: "99.9% Uptime", description: "Reliable infrastructure that keeps your site running." },
  { title: "Fast Performance", description: "Optimized code loads quickly on any device." },
  { title: "Future Proof", description: "Modern tech scales as your business grows." },
  { title: "SEO Friendly", description: "Built for search engine visibility." }
];

export default function ModernTechStack() {
  return (
    <>
      <SEOHead
        title="Modern Tech Stack Development | React, Next.js, TypeScript"
        description="We build with React, Next.js, and TypeScript for fast, scalable, future-proof websites. Modern technology that grows with your business."
        keywords={["React development", "Next.js development", "TypeScript development", "modern web development", "future proof website", "scalable web development"]}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
                  <Code2 className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Modern Tech Stack</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Built with <span className="text-red-600">Future-Proof</span> Technology
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  We use the latest technologies—React, Next.js, TypeScript—to build fast, scalable websites that grow with your business.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <Link to="/portfolio"><Button size="lg" variant="outline">View Our Work</Button></Link>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {technologies.map((tech, i) => (
                  <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full text-center">
                      <Code2 className="w-10 h-10 text-red-600 mx-auto mb-4" />
                      <h3 className="font-serif text-lg text-gray-900 mb-2">{tech.name}</h3>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((b, i) => (
                  <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="font-serif text-lg text-gray-900 mb-2">{b.title}</h3>
                      <p className="text-gray-600 text-sm">{b.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Ready for Modern Tech?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">Let's build something great with cutting-edge technology.</p>
                <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Start Your Project <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
