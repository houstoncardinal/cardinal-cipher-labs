import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-card relative">
      {/* Accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">
                Contact
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Let's start your digital transformation
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
              Ready to elevate your business with cutting-edge digital solutions? 
              We're here to turn your vision into reality.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:hello@cardinalhtx.com" className="text-foreground hover:text-primary transition-colors block">
                    hello@cardinalhtx.com
                  </a>
                  <a href="mailto:support@cardinalhtx.com" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    support@cardinalhtx.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                  <a href="tel:281-901-7016" className="text-foreground hover:text-primary transition-colors block">
                    (281) 901-7016
                  </a>
                  <span className="text-muted-foreground text-sm">Available 24/7</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Office</div>
                  <span className="text-foreground block">2100 West Loop S Fwy</span>
                  <span className="text-muted-foreground text-sm">Houston, TX 77027</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Hours</div>
                  <span className="text-foreground block">Mon-Fri: 9AM-6PM</span>
                  <span className="text-muted-foreground text-sm">Sat-Sun: By appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background border border-border p-8 lg:p-10"
          >
            <h3 className="font-serif text-2xl text-foreground mb-6">Get Started Today</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Service of Interest *
                </label>
                <select 
                  required
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors"
                >
                  <option value="" className="bg-background">Select a service</option>
                  <option value="web" className="bg-background">Web Development</option>
                  <option value="mobile" className="bg-background">Mobile App Development</option>
                  <option value="seo" className="bg-background">SEO & Analytics</option>
                  <option value="marketing" className="bg-background">Digital Marketing</option>
                  <option value="branding" className="bg-background">Brand Identity</option>
                  <option value="ux" className="bg-background">UX/UI Design</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  How can we help? *
                </label>
                <textarea
                  rows={4}
                  required
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full group">
                Send Message
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                ✓ 24-hour response • ✓ No commitment required • ✓ Free consultation
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
