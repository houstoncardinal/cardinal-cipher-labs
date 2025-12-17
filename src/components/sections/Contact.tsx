import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 lg:py-40 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <motion.div
        className="absolute -right-40 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

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
                className="w-16 h-px bg-gradient-to-r from-primary to-primary/30"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                Contact
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-[1.1]">
              Let's start your digital transformation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ready to elevate your business with cutting-edge digital solutions? 
              We're here to turn your vision into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", primary: "hunain@visitcardinal.com", secondary: "support@visitcardinal.com", href: "mailto:hunain@visitcardinal.com" },
                { icon: Phone, label: "Phone", primary: "(281) 901-7016", secondary: "Available 24/7", href: "tel:281-901-7016" },
                { icon: MapPin, label: "Office", primary: "2100 West Loop S Fwy", secondary: "Houston, TX 77027" },
                { icon: Clock, label: "Hours", primary: "Mon-Fri: 9AM-6PM", secondary: "Sat-Sun: By appointment" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-5"
                >
                  <LuxuryCard
                    elevation={1}
                    hoverLift={true}
                    className="w-14 h-14 flex items-center justify-center shrink-0 p-0"
                  >
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }}>
                      <item.icon size={22} className="text-primary" />
                    </motion.div>
                  </LuxuryCard>
                  <div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-foreground hover:text-primary transition-colors block font-medium">
                        {item.primary}
                      </a>
                    ) : (
                      <span className="text-foreground block font-medium">{item.primary}</span>
                    )}
                    <span className="text-sm text-muted-foreground">{item.secondary}</span>
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
            <LuxuryCard
              elevation={4}
              borderStyle="metallic-platinum"
              glassStrength="strong"
              className="p-8 lg:p-12 inset-luxury"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent" />
              
              <h3 className="font-serif text-2xl text-foreground mb-8 relative">Get Started Today</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                      duration: 0.6
                    }}
                    className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center glow-luxury-hover relative"
                  >
                    <CheckCircle size={40} className="text-primary" />
                    {/* Pulse rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute inset-0 rounded-full border-2 border-primary/30"
                        initial={{ scale: 1, opacity: 0.8 }}
                        animate={{ scale: [1, 1.8, 2.2], opacity: [0.8, 0.3, 0] }}
                        transition={{
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity,
                          ease: "easeOut"
                        }}
                      />
                    ))}
                  </motion.div>
                  <motion.h4
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="font-serif text-2xl text-foreground mb-3"
                  >
                    Thank You!
                  </motion.h4>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-muted-foreground"
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
                  className="space-y-6 relative"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="firstName" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full bg-background/50 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="John"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="lastName" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full bg-background/50 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full bg-background/50 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="group">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        className="w-full bg-background/50 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="service" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full bg-background/50 border border-border px-4 py-4 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-background">Select a service</option>
                      <option value="web" className="bg-background">Web Development</option>
                      <option value="mobile" className="bg-background">Mobile App Development</option>
                      <option value="seo" className="bg-background">SEO & Analytics</option>
                      <option value="marketing" className="bg-background">Digital Marketing</option>
                      <option value="branding" className="bg-background">Brand Identity</option>
                      <option value="ux" className="bg-background">UX/UI Design</option>
                    </select>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block group-focus-within:text-primary transition-colors">
                      How can we help? *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full bg-background/50 border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-background transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <MagneticButton strength={35}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group relative overflow-hidden"
                      disabled={isSubmitting}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={16} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                    </Button>
                  </MagneticButton>

                  <p className="text-xs text-muted-foreground text-center">
                    ✓ 24-hour response • ✓ No commitment required • ✓ Free consultation
                  </p>
                </form>
              )}
            </LuxuryCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
