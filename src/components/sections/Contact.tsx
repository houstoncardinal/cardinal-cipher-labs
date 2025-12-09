import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

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
                Initiate Contact
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Request a strategic briefing
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
              Initial consultations are complimentary. Share your operational objectives 
              and we'll prepare a preliminary assessment of how Cardinal can support your mission.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:briefings@cardinal.consulting" className="text-foreground hover:text-primary transition-colors">
                    briefings@cardinal.consulting
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Direct Line</div>
                  <a href="tel:+18885551234" className="text-foreground hover:text-primary transition-colors">
                    +1 (888) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Headquarters</div>
                  <span className="text-foreground">
                    New York · San Francisco · London
                  </span>
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
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Division of Interest
                </label>
                <select className="w-full bg-transparent border border-border px-4 py-3 text-foreground focus:outline-none focus:border-primary/50 transition-colors">
                  <option value="" className="bg-background">Select a division</option>
                  <option value="infrastructure" className="bg-background">Digital Infrastructure</option>
                  <option value="intelligence" className="bg-background">Intelligence & Dashboards</option>
                  <option value="search" className="bg-background">Search & Authority</option>
                  <option value="industry" className="bg-background">Industry Solutions</option>
                  <option value="branding" className="bg-background">Branding & Physical</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                  Project Overview
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Describe your operational objectives and timeline..."
                />
              </div>

              <Button variant="primary" size="lg" className="w-full group">
                Submit Briefing Request
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                All communications are confidential. Response within 24 business hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
