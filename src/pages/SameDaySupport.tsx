import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Clock, Headphones, MessageCircle, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateOrganizationSchema, generateWebPageSchema, generateBreadcrumbSchema } from "@/lib/schema-generators";

const benefits = [
  { title: "Same-Day Response", description: "Get answers within hours, not days." },
  { title: "Dedicated Team", description: "Your own team that knows your project." },
  { title: "Priority Support", description: "Jump the queue with premium support." },
  { title: "Flexible Communication", description: "Phone, email, or chat—your choice." }
];

export default function SameDaySupport() {
  const schemas = [
    generateOrganizationSchema(),
    generateWebPageSchema({
      name: "Same-Day Support & Fast Response | 24/7 Customer Service",
      description: "Get same-day support responses from our dedicated team. Fast, responsive web development support when you need it.",
      url: `${siteConfig.url}/same-day-support`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Same-Day Support", url: `${siteConfig.url}/same-day-support` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Same-Day Web Development Support | Fast Response Team | Cardinal Consulting"
        description="Get same-day support responses from our dedicated web development team. Fast, responsive support when you need it most. No ticket queues, no automated responses—real help from real people."
        keywords={["same day web support", "fast web development support", "web development customer service", "responsive web agency", "quick website help", "Houston web developer support", "website maintenance support", "emergency website fix", "website down support", "dedicated web team", "priority web support", "web agency support Houston", "fast website updates", "website bug fix", "web development help"]}
        url={`${siteConfig.url}/same-day-support`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Same-Day Support</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Answers in <span className="text-red-600">Hours, Not Days</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Dedicated support that responds the same day. No automated responses, no ticket queues—just real help from your personal team.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
                  <Link to="/contact"><Button size="lg" variant="outline"><Phone className="mr-2 w-4 h-4" /> (281) 901-7016</Button></Link>
                </motion.div>
              </div>
            </div>
          </section>
          <section className="py-24 bg-white">
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
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Need Fast Help?</h2>
                <p className="text-gray-600 max-w-xl mx-auto mb-8">We're here to help—reach out anytime.</p>
                <Link to="/contact"><Button size="lg" className="bg-red-600 hover:bg-red-700">Get In Touch <ArrowRight className="ml-2 w-4 h-4" /></Button></Link>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
