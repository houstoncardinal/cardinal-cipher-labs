import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Zap, Rocket, Clock, ArrowRight, Star, CheckCircle2, Lightbulb, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Rocket, title: "MVP in Days", description: "Get your minimum viable product built in days, not months. Validate your idea fast." },
  { icon: Zap, title: "Rapid Iteration", description: "Quick feedback loops mean we can iterate and improve rapidly based on real user data." },
  { icon: Target, title: "Focus on Core Features", description: "We build only what you need to launch, keeping scope tight and delivery fast." },
  { icon: TrendingUp, title: "Quick Market Testing", description: "Test your hypothesis with real users faster than the competition." }
];

const useCases = [
  { title: "Startup MVP", description: "Validate your business idea with a functional prototype" },
  { title: "Product Launch", description: "Get to market quickly before competitors" },
  { title: "Investor Demo", description: "Impress investors with a working prototype" },
  { title: "Feature Testing", description: "Test new features with users before full build" }
];

export default function RushPrototyping() {
  return (
    <>
      <SEOHead
        title="Rush MVP & Prototype Development | Fast App Prototyping Services"
        description="Get your MVP or prototype built in record time. Our rush prototyping service helps startups and businesses validate ideas fast. Launch in days, not months."
        keywords={["rush MVP development", "prototype development", "fast prototyping", "MVP in days", "app prototyping", "startup MVP", "rapid prototype"]}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8"
                >
                  <Zap className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Rush Prototyping</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6"
                >
                  Launch Your MVP in <span className="text-red-600">Days, Not Months</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
                >
                  Validate your business idea with a working prototype. Test with real users, gather feedback, and iterate—fast.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Get Fast Quote <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <Link to="/portfolio"><Button size="lg" variant="outline">See Examples</Button></Link>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((f, i) => (
                  <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <f.icon className="w-10 h-10 text-red-600 mb-4" />
                      <h3 className="font-serif text-xl text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">When to Use Rapid Prototyping</h2>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((useCase, i) => (
                  <motion.div key={useCase.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full">
                      <Lightbulb className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="font-serif text-lg text-gray-900 mb-2">{useCase.title}</h3>
                      <p className="text-gray-600 text-sm">{useCase.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Ready to Build Fast?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">Let's discuss your prototype idea.</p>
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
