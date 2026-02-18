import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe, Check, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/seo-config";
import { generateContactPageSchema, generateBreadcrumbSchema, generateWebPageSchema, generateLocalBusinessSchema } from "@/lib/schema-generators";

const contactMethods = [
  { icon: Mail, label: "Email", primary: "hunain@visitcardinal.com", secondary: "support@visitcardinal.com", href: "mailto:hunain@visitcardinal.com", description: "Send us an email anytime" },
  { icon: Phone, label: "Phone", primary: "(281) 901-7016", secondary: "Available 24/7", href: "tel:281-901-7016", description: "Talk to our team directly" },
  { icon: MapPin, label: "Office", primary: "2100 West Loop S Fwy", secondary: "Houston, TX 77027", description: "Visit our headquarters" },
  { icon: Clock, label: "Hours", primary: "Mon-Fri: 9AM-6PM", secondary: "Sat-Sun: By appointment", description: "Business hours (CST)" },
];

const faqs = [
  { q: "How quickly can you start on my project?", a: "We typically begin within 1-2 weeks of signing the agreement, depending on current capacity and project complexity. We also offer our Rapid Prototyping service with 72-hour delivery for urgent projects, or standard deliveries between 72 hours and 2 weeks depending on project scope." },
  { q: "Do you offer free consultations?", a: "Yes! We offer a no-obligation 30-minute consultation to understand your needs and provide an initial assessment." },
  { q: "What's your typical project timeline?", a: "We offer flexible delivery options to match your needs. Our Rapid Prototyping service delivers in as little as 72 hours for urgent projects. Standard delivery ranges from 72 hours to 2 weeks depending on project scope. More complex applications may take 3-6 months. We provide detailed timelines during discovery." },
  { q: "Do you work with clients outside of Houston?", a: "Absolutely. We serve clients across North America, Europe, and Asia Pacific with seamless remote collaboration." },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (value: string) => {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 1500);
  };

  const schemas = [
    generateContactPageSchema(),
    generateLocalBusinessSchema(),
    generateWebPageSchema({
      name: "Contact Cardinal Consulting",
      description: "Get in touch with Cardinal Consulting for a free consultation on your digital transformation project.",
      url: `${siteConfig.url}/contact`,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: siteConfig.url },
      { name: "Contact", url: `${siteConfig.url}/contact` },
    ]),
  ];

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Contact Cardinal Consulting for a free consultation. Call (281) 901-7016 or visit our Houston office. Enterprise software development and digital transformation experts."
        url={`${siteConfig.url}/contact`}
        schemas={schemas}
        keywords={["contact cardinal consulting", "free consultation", "Houston software company", "digital transformation consultation"]}
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
                  <div className="w-14 h-14 bg-primary/10 flex items-center justify-center"><MessageSquare className="w-7 h-7 text-primary" /></div>
                  <span className="text-xs tracking-[0.3em] uppercase text-primary">Contact Us</span>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">Let's Build Something Extraordinary</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">Ready to transform your business? We're here to listen, strategize, and deliver.</p>
              </motion.div>
            </div>
          </section>

          {/* Contact Methods */}
          <section className="py-16 border-y border-border/50">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method, i) => (
                  <motion.div key={method.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <LuxuryCard className="p-6 h-full text-center">
                      <method.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2">{method.label}</div>
                      {method.href ? (
                        <a href={method.href} className="text-foreground font-medium hover:text-primary transition-colors block">{method.primary}</a>
                      ) : (
                        <span className="text-foreground font-medium block">{method.primary}</span>
                      )}
                      <span className="text-xs text-muted-foreground block mt-1">{method.secondary}</span>
                    </LuxuryCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Form + FAQ */}
          <section className="py-24 lg:py-32 bg-[#FAFAFA]">
            <div className="container mx-auto px-6 lg:px-12">
              <div className="grid lg:grid-cols-2 gap-16">
                {/* Form - Light Theme Advanced */}
                <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_20px_-4px_rgba(0,0,0,0.06)] p-8 lg:p-12">
                    <h3 className="font-serif text-2xl text-gray-900 mb-2">Get Started Today</h3>
                    <p className="text-sm text-gray-400 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                    {isSubmitted ? (
                      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                        <CheckCircle size={48} className="text-red-500 mx-auto mb-4" />
                        <h3 className="font-serif text-2xl text-gray-900 mb-2">Thank You!</h3>
                        <p className="text-gray-500">We'll be in touch within 24 hours.</p>
                      </motion.div>
                    ) : (
                      <form name="contact-page" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
                        <input type="hidden" name="form-name" value="contact-page" />
                        <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
                        {/* Name fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="group">
                            <label htmlFor="cp-firstName" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">First Name *</label>
                            <input type="text" id="cp-firstName" name="firstName" required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="John" />
                          </div>
                          <div className="group">
                            <label htmlFor="cp-lastName" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Last Name *</label>
                            <input type="text" id="cp-lastName" name="lastName" required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="Smith" />
                          </div>
                        </div>
                        {/* Contact fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="group">
                            <label htmlFor="cp-email" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Email Address *</label>
                            <input type="email" id="cp-email" name="email" required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="john@company.com" />
                          </div>
                          <div className="group">
                            <label htmlFor="cp-phone" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Phone Number *</label>
                            <input type="tel" id="cp-phone" name="phone" required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="(555) 123-4567" />
                          </div>
                        </div>
                        {/* Company + Website */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          <div className="group">
                            <label htmlFor="cp-company" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Company</label>
                            <input type="text" id="cp-company" name="company" className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="Your Company" />
                          </div>
                          <div className="group">
                            <label htmlFor="cp-website" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Existing Website</label>
                            <input type="url" id="cp-website" name="website" className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium" placeholder="https://yoursite.com" />
                          </div>
                        </div>
                        {/* Services multi-select */}
                        <div>
                          <label className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Services of Interest *</label>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                            {[
                              { value: "web", label: "Web Development" },
                              { value: "mobile", label: "Mobile Apps" },
                              { value: "seo", label: "SEO & Analytics" },
                              { value: "marketing", label: "Digital Marketing" },
                              { value: "branding", label: "Brand Identity" },
                              { value: "ux", label: "UX/UI Design" },
                            ].map((service) => {
                              const isSelected = selectedServices.includes(service.value);
                              return (
                                <button
                                  key={service.value}
                                  type="button"
                                  onClick={() => toggleService(service.value)}
                                  className={`relative flex items-center justify-center gap-2 px-3 py-2.5 rounded-lg border text-[12px] font-medium transition-all duration-200 ${
                                    isSelected
                                      ? "bg-red-50 border-red-300 text-red-700"
                                      : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                                  }`}
                                >
                                  <div
                                    className={`w-4 h-4 rounded flex items-center justify-center shrink-0 transition-colors ${
                                      isSelected
                                        ? "bg-red-500"
                                        : "border border-gray-300"
                                    }`}
                                  >
                                    {isSelected && <Check size={10} className="text-white" />}
                                  </div>
                                  <span>{service.label}</span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                        {/* Budget */}
                        <div className="group">
                          <label htmlFor="cp-budget" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">Project Budget *</label>
                          <select id="cp-budget" name="budget" required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium appearance-none">
                            <option value="">Select budget range</option>
                            <option value="under-5k">Under $5,000</option>
                            <option value="5k-10k">$5,000 – $10,000</option>
                            <option value="10k-25k">$10,000 – $25,000</option>
                            <option value="25k-50k">$25,000 – $50,000</option>
                            <option value="50k-plus">$50,000+</option>
                          </select>
                        </div>
                        {/* Message */}
                        <div className="group">
                          <label htmlFor="cp-message" className="text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold">How can we help? *</label>
                          <textarea id="cp-message" name="message" rows={4} required className="w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium resize-none" placeholder="Tell us about your project, goals, and timeline..." />
                        </div>
                        {/* Submit */}
                        <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed group">
                          {isSubmitting ? "Sending..." : <>Send Message <Send size={16} className="transition-transform group-hover:translate-x-1" /></>}
                        </button>
                        <p className="text-xs text-gray-400 text-center">24-hour response • No commitment required • Free consultation</p>
                      </form>
                    )}
                  </div>
                </motion.div>

                {/* FAQ */}
                <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                  <h2 className="font-serif text-3xl text-foreground mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {faqs.map((faq, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                        <LuxuryCard className="p-6">
                          <h3 className="font-serif text-lg text-foreground mb-2">{faq.q}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                        </LuxuryCard>
                      </motion.div>
                    ))}
                  </div>

                  {/* Map placeholder */}
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-8">
                    <LuxuryCard elevation={3} className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-6 h-6 text-primary" />
                        <h3 className="font-serif text-xl text-foreground">Global Reach, Local Presence</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Headquartered in Houston, TX — serving clients worldwide.</p>
                      <div className="bg-secondary/30 border border-border/50 p-6 text-center">
                        <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                        <p className="text-sm text-foreground font-medium">2100 West Loop S Fwy</p>
                        <p className="text-xs text-muted-foreground">Houston, TX 77027</p>
                      </div>
                    </LuxuryCard>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
