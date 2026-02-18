import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Palette, Sparkles, ArrowRight, CheckCircle2, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

const features = [
  { title: "100% Custom", description: "No templates. Every pixel designed for your brand." },
  { title: "Unique Branding", description: "Stand out with design that's uniquely yours." },
  { title: "Pixel Perfect", description: "Attention to detail in every element." },
  { title: "Responsive Design", description: "Looks great on all devices." }
];

export default function CustomDesign() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Custom Web Design | 100% Bespoke Website Design",
      description: "100% custom website design tailored to your brand. No templates, no cookie-cutter solutions. Get a unique, professional design that stands out.",
      url: `${siteConfig.url}/custom-design`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Custom Design", url: `${siteConfig.url}/custom-design` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="100% Custom Web Design Agency | Bespoke Website Design Houston"
        description="100% custom website design tailored to your brand. No templates, no cookie-cutter solutions. Every pixel crafted from scratch for a unique, professional design that converts visitors into clients."
        keywords={["custom web design agency", "bespoke website design", "unique website design", "custom brand design", "no template web design", "Houston custom web design", "custom website development", "luxury web design", "premium web design agency", "custom UI design", "brand identity web design", "custom landing page design", "high-end web design", "custom e-commerce design", "tailored website design"]}
        url={`${siteConfig.url}/custom-design`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
                  <Palette className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Fully Custom Design</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  100% Custom Design,<span className="text-red-600">Zero Templates</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Every project starts from scratch. No templates, no generic designs—just bespoke solutions crafted specifically for your brand.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Get Custom Quote <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <Link to="/portfolio"><Button size="lg" variant="outline">View Our Work</Button></Link>
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
                      <CheckCircle2 className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="font-serif text-lg text-gray-900 mb-2">{f.title}</h3>
                      <p className="text-gray-600 text-sm">{f.description}</p>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-24 bg-white">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Want a Unique Design?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">Let's create something special for your brand.</p>
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
