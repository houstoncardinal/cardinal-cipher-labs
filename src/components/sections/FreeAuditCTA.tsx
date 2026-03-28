import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

const auditIncludes = [
  "PageSpeed & Core Web Vitals score",
  "SEO keyword gap analysis",
  "Competitor ranking comparison",
  "Technical SEO issues report",
  "Conversion rate opportunities",
];

export function FreeAuditCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 to-red-700">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full mb-4">
              <Search className="w-3.5 h-3.5 text-white" />
              <span className="text-white text-xs font-semibold uppercase tracking-wider">Free — No Obligation</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
              Get Your Free Website Audit
            </h2>
            <p className="text-red-100 mb-6 leading-relaxed">
              In 48 hours, we'll send you a detailed audit showing exactly why your website isn't converting — and what to do about it. 100% free, zero sales pressure.
            </p>
            <ul className="space-y-2 mb-8">
              {auditIncludes.map((item) => (
                <li key={item} className="flex items-center gap-2 text-white text-sm">
                  <CheckCircle className="w-4 h-4 text-red-200 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact?service=audit"
                className="inline-flex items-center gap-2 bg-white text-red-600 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors"
              >
                Claim Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:281-901-7016"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                Call (281) 901-7016
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
          >
            <p className="text-white font-serif text-lg mb-6">What you'll discover:</p>
            <div className="space-y-4">
              {[
                { label: "Current Google ranking position", value: "for your top 10 keywords" },
                { label: "PageSpeed score", value: "vs. your top competitors" },
                { label: "Missing revenue", value: "from SEO gaps per month" },
                { label: "Quick wins", value: "you can implement this week" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-300 rounded-full mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-red-200 text-xs">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/20 text-center">
              <p className="text-red-200 text-xs">Delivered within 48 hours · No credit card required</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
