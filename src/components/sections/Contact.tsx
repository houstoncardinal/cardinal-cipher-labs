import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle, Check, Sparkles, Zap, ChevronLeft, User, Building, MessageSquare, Calendar } from "lucide-react";

const serviceOptions = [
  { value: "web", label: "Web Development", icon: "🌐", desc: "Custom websites & web apps" },
  { value: "mobile", label: "Mobile Apps", icon: "📱", desc: "iOS & Android applications" },
  { value: "seo", label: "SEO & Analytics", icon: "📈", desc: "Search optimization" },
  { value: "marketing", label: "Digital Marketing", icon: "🚀", desc: "Ads & campaigns" },
  { value: "branding", label: "Brand Identity", icon: "✨", desc: "Logo & visual design" },
  { value: "ux", label: "UX/UI Design", icon: "🎨", desc: "User experience design" },
];

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000", desc: "Quick projects" },
  { value: "5k-10k", label: "$5,000 – $10,000", desc: "Standard website" },
  { value: "10k-25k", label: "$10,000 – $25,000", desc: "Complex web app" },
  { value: "25k-50k", label: "$25,000 – $50,000", desc: "Full platform" },
  { value: "50k-plus", label: "$50,000+", desc: "Enterprise solution" },
  { value: "not-sure", label: "Not sure yet", desc: "Need guidance" },
];

const inputClass =
  "w-full bg-gray-50/50 border-2 border-gray-100 rounded-xl px-5 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-4 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all duration-300 text-[15px] font-medium";

const labelClass =
  "text-xs uppercase tracking-[0.12em] text-gray-500 mb-3 block font-bold group-focus-within:text-red-500 transition-colors";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 relative overflow-hidden bg-[#FAFAFA]">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Vertical red accent lines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />
      <div className="absolute right-[8%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-red-400/15 to-transparent" />

      <div ref={ref} className="container mx-auto px-6 lg:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <motion.div
                className="w-16 h-px bg-gradient-to-r from-red-500 to-red-300"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-xs tracking-[0.3em] uppercase text-red-500 font-semibold">
                Contact
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-8 leading-[1.1]">
              Let's start your digital transformation
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-12">
              Ready to elevate your business with cutting-edge digital solutions? We're here to
              turn your vision into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  primary: "hunain@visitcardinal.com",
                  secondary: "support@visitcardinal.com",
                  href: "mailto:hunain@visitcardinal.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  primary: "(281) 901-7016",
                  secondary: "Available 24/7",
                  href: "tel:281-901-7016",
                },
                {
                  icon: MapPin,
                  label: "Office",
                  primary: "2100 West Loop S Fwy",
                  secondary: "Houston, TX 77027",
                },
                {
                  icon: Clock,
                  label: "Hours",
                  primary: "Mon-Fri: 9AM-6PM",
                  secondary: "Sat-Sun: By appointment",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-5"
                >
                  <div className="w-12 h-12 bg-white rounded-xl border border-gray-200/70 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center shrink-0 group-hover:border-red-200 group-hover:shadow-[0_4px_12px_rgba(239,68,68,0.08)] transition-all duration-300">
                    <item.icon size={20} className="text-red-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1 font-medium">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-900 hover:text-red-500 transition-colors block font-medium"
                      >
                        {item.primary}
                      </a>
                    ) : (
                      <span className="text-gray-900 block font-medium">{item.primary}</span>
                    )}
                    <span className="text-sm text-gray-500">{item.secondary}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="bg-white rounded-2xl border border-gray-200/70 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_4px_20px_-4px_rgba(0,0,0,0.06)] p-8 lg:p-12 relative overflow-hidden">
              {/* Decorative corner gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-red-50 to-transparent pointer-events-none" />

              <h3 className="font-serif text-2xl text-gray-900 mb-2 relative">Get Started Today</h3>
              <p className="text-sm text-gray-400 mb-8 relative">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, duration: 0.6 }}
                    className="w-20 h-20 mx-auto mb-6 bg-red-50 rounded-full flex items-center justify-center relative"
                  >
                    <CheckCircle size={40} className="text-red-500" />
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-red-300"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: [1, 1.8, 2.2], opacity: [0.8, 0.3, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="font-serif text-2xl text-gray-900 mb-3"
                  >
                    Thank You!
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-500"
                  >
                    We'll be in touch within 24 hours.
                  </motion.p>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-5 relative"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>

                  {/* Name fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label htmlFor="firstName" className={labelClass}>
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className={inputClass}
                        placeholder="John"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className={labelClass}>
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className={inputClass}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  {/* Contact fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label htmlFor="email" className={labelClass}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className={inputClass}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className={labelClass}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Services multi-select */}
                  <div>
                    <label className={labelClass}>Services of Interest *</label>
                    <input
                      type="hidden"
                      name="services"
                      value={selectedServices.join(", ")}
                    />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {serviceOptions.map((service) => {
                        const isSelected = selectedServices.includes(service.value);
                        return (
                          <button
                            key={service.value}
                            type="button"
                            onClick={() => toggleService(service.value)}
                            className={`relative flex items-center gap-2 px-3 py-2.5 rounded-lg border text-[12px] font-medium transition-all duration-200 text-left ${
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

                  {/* Website URL + Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="group">
                      <label htmlFor="website" className={labelClass}>
                        Existing Website
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        className={inputClass}
                        placeholder="https://yoursite.com"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="budget" className={labelClass}>
                        Project Budget *
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        required
                        className={`${inputClass} appearance-none cursor-pointer`}
                      >
                        <option value="">Select budget range</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label htmlFor="message" className={labelClass}>
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  {/* Submit */}
                  <MagneticButton strength={35}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-[13px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send
                            size={16}
                            className="transition-transform group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </MagneticButton>

                  <p className="text-xs text-gray-400 text-center">
                    24-hour response &middot; No commitment required &middot; Free consultation
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
