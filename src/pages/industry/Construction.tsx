import { ArrowRight, Check, Star, Shield, Hammer, Building, MapPin, Phone, Camera, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { SEOHead } from "@/components/SEOHead";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateIndustryPageSchemas } from "@/lib/service-schema-generators";

const industryFaqs = [
  {
    question: "What makes a great construction company website in Houston?",
    answer: "A great Houston construction website showcases completed projects with high-quality photos, lists specific services with local area coverage (Houston, Katy, Sugar Land, The Woodlands), has a clear quote request form, and ranks on Google for contractor searches near you. Cardinal builds all of this into every construction site we deliver.",
  },
  {
    question: "Can you help our construction company rank #1 on Google in Houston?",
    answer: "Yes. We specialize in contractor local SEO — helping Houston construction companies rank for 'general contractor Houston', 'home remodeling Houston TX', 'commercial construction near me', and dozens of other high-value search terms. Our strategies include Google Business Profile optimization, local citation building, and service area page creation.",
  },
  {
    question: "How do you showcase construction projects on a website?",
    answer: "We build stunning project portfolio sections with before/after photo galleries, detailed project descriptions, client testimonials, square footage and scope details, and location-specific keywords that help you rank in each service area. We also optimize all images for fast loading on mobile, where most contractor searches happen.",
  },
  {
    question: "Can you build a website that generates leads for bids and estimates?",
    answer: "Absolutely. Our construction websites are built for lead generation — clear calls-to-action, easy quote request forms, click-to-call buttons, and local trust signals (license numbers, insurance info, BBB badges). We also set up Google Local Services Ads and Google Business Profile for maximum visibility.",
  },
  {
    question: "How much does a construction company website cost in Houston?",
    answer: "Construction websites start at $3,000 for a 5–8 page site. Websites with project portfolio galleries, multiple service area pages, and lead generation integrations typically range $5,000–$12,000. We offer transparent pricing with no hidden fees. Contact us for a free quote.",
  },
];

const services = [
  { name: "Construction Company Websites", description: "Professional websites that showcase your projects and win more bids." },
  { name: "Project Portfolio Galleries", description: "Stunning before/after photo galleries of completed projects." },
  { name: "Contractor Local SEO", description: "Rank #1 on Google for 'contractor near me' and construction keywords in Houston." },
  { name: "Quote Request Systems", description: "Lead generation forms that convert visitors into bid requests 24/7." },
  { name: "Service Area Pages", description: "Location-specific pages for every city you serve across greater Houston." },
  { name: "Mobile-First Design", description: "Fast, responsive websites optimized for mobile — where most contractor searches happen." },
];

export function ConstructionIndustry() {
  const schemas = generateIndustryPageSchemas({
    industryName: "Construction",
    industryDescription: "Professional websites for Houston construction companies, contractors, and builders. Local SEO, project portfolio galleries, and lead generation for contractors across greater Houston, TX.",
    industryUrl: `${siteConfig.url}/industry/construction`,
    keywords: ["construction company website design Houston", "contractor website design Houston", "general contractor website Houston", "home remodeling website Houston", "construction SEO Houston", "contractor local SEO Houston", "builder marketing agency Houston", "construction lead generation"],
    services,
    faqs: industryFaqs,
    compliance: ["BBB Accredited Ready", "Licensed & Insured Badge Integration", "ADA Accessible"],
  });

  return (
    <>
      <SEOHead
        title="Construction Company Website Design Houston | Contractor SEO & Marketing"
        description="Houston's top construction web design agency. Professional contractor websites, project portfolio galleries, local SEO that ranks #1, and lead generation systems. 500+ projects. Call (281) 901-7016."
        keywords={["construction company website design Houston", "contractor website design Houston", "builder marketing agency Houston", "general contractor website", "renovation company website", "construction SEO Houston", "construction digital marketing", "project portfolio website", "construction lead generation Houston", "home builder website Houston"]}
        url={`${siteConfig.url}/industry/construction`}
        schemas={schemas}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>

          {/* Hero */}
          <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 rounded-full mb-8">
                  <Building className="w-4 h-4 text-red-600" />
                  <span className="text-[11px] tracking-[0.2em] uppercase text-red-600 font-semibold">Construction Industry</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-serif text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight mb-6">
                  Construction Websites That{" "}<span className="text-red-600">Win More Bids</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                  Professional websites for Houston construction companies and contractors. Showcase your projects, rank #1 on Google, and generate more quote requests every day.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
                    Get Free Consultation <ArrowRight size={18} />
                  </Link>
                  <Link to="/portfolio" className="inline-flex items-center gap-2 text-gray-700 font-semibold tracking-wider uppercase px-8 py-4 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
                    View Portfolio
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="py-12 bg-red-600">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Projects Delivered" },
                  { value: "4.9★", label: "Client Rating" },
                  { value: "#1", label: "Google Rankings" },
                  { value: "30+", label: "Houston Areas Served" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="font-serif text-3xl md:text-4xl text-white font-bold">{stat.value}</div>
                    <div className="text-red-100 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="text-center mb-16">
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">Construction Web Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions for Houston construction companies and contractors</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Construction Websites", description: "Professional websites that showcase your projects and establish credibility with prospective clients.", icon: Building },
                  { title: "Project Portfolio Galleries", description: "Stunning before/after photo galleries with project details, scope, and location info.", icon: Camera },
                  { title: "Contractor SEO Houston", description: "Rank #1 for 'general contractor Houston', 'home remodeling near me', and local construction terms.", icon: TrendingUp },
                  { title: "Quote Request Systems", description: "Conversion-optimized forms that capture project inquiries and bid requests 24/7.", icon: Hammer },
                  { title: "Service Area Pages", description: "Dedicated pages for every city you serve — Houston, Katy, Sugar Land, The Woodlands, and more.", icon: MapPin },
                  { title: "Mobile-First Design", description: "Fast-loading mobile sites — 70%+ of contractor searches happen on smartphones.", icon: Star },
                ].map((service, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl border border-gray-100 hover:border-red-100 hover:shadow-lg transition-all">
                    <service.icon className="w-10 h-10 text-red-600 mb-4" />
                    <h3 className="font-serif text-xl text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-4xl text-gray-900 mb-6">Why Houston Contractors Choose Cardinal</h2>
                  <div className="space-y-4">
                    {[
                      "Deep experience with Houston's construction and contractor market",
                      "Local SEO covering all 30+ greater Houston service areas",
                      "Project gallery optimization for Google image search",
                      "Google Business Profile setup and management included",
                      "Click-to-call and instant quote forms for mobile users",
                      "License number, insurance badge, and BBB integration for trust",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-red-600 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                  <h3 className="font-serif text-2xl text-gray-900 mb-4">Ready to Win More Projects?</h3>
                  <p className="text-gray-600 mb-6">Get a contractor website that generates leads and wins bids. Free consultation, no obligation.</p>
                  <div className="space-y-3">
                    <Link to="/contact" className="flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-red-700 transition-all w-full justify-center">
                      Schedule Free Consultation <ArrowRight size={16} />
                    </Link>
                    <a href="tel:281-901-7016" className="flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:border-red-200 transition-all w-full justify-center">
                      <Phone size={16} className="text-red-600" /> (281) 901-7016
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
              <div className="text-center mb-12">
                <h2 className="font-serif text-4xl text-gray-900 mb-4">Construction Website FAQs</h2>
                <p className="text-gray-600">Common questions from Houston contractors about web design and contractor marketing</p>
              </div>
              <div className="space-y-6">
                {industryFaqs.map((faq, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border border-gray-100 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 lg:px-12">
              <h2 className="font-serif text-2xl text-gray-900 mb-8 text-center">Explore Our Services</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { label: "Web Design Houston", href: "/houston-web-design" },
                  { label: "SEO Company Houston", href: "/houston-seo-company" },
                  { label: "Houston SEO Services", href: "/houston-seo" },
                  { label: "Digital Marketing", href: "/services/digital-marketing" },
                  { label: "SEO & Analytics", href: "/services/seo-analytics" },
                  { label: "Brand Identity", href: "/services/brand-identity" },
                ].map((link) => (
                  <Link key={link.href} to={link.href} className="flex items-center justify-center gap-1 p-3 rounded-xl border border-gray-200 hover:border-red-200 hover:bg-red-50 text-sm font-medium text-gray-700 transition-all text-center">
                    {link.label} <ArrowRight className="w-3 h-3 text-red-600 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 lg:px-12 text-center">
              <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Ready to Build Your Online Presence?</h2>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">Let's discuss how Cardinal Consulting can help your Houston construction company attract more clients and win more bids.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-red-700 transition-all">
                  Get Started Today <ArrowRight size={18} />
                </Link>
                <a href="tel:281-901-7016" className="inline-flex items-center gap-2 border border-gray-600 text-white font-semibold px-8 py-4 rounded-xl hover:border-white transition-all">
                  <Phone size={18} /> (281) 901-7016
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
