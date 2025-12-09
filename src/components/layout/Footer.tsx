import { motion } from "framer-motion";

const footerLinks = {
  divisions: [
    { label: "Digital Infrastructure", href: "#" },
    { label: "Intelligence & Dashboards", href: "#" },
    { label: "Search & Authority", href: "#" },
    { label: "Industry Solutions", href: "#" },
    { label: "Branding & Physical", href: "#" },
  ],
  company: [
    { label: "About Cardinal", href: "#" },
    { label: "Leadership", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  resources: [
    { label: "Case Studies", href: "#" },
    { label: "Insights", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "Support", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 lg:py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif text-lg font-semibold">C</span>
              </div>
              <span className="text-foreground font-serif text-xl tracking-tight">
                Cardinal Consulting
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Strategic digital infrastructure for organizations that demand 
              precision, security, and measurable outcomes.
            </p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-primary animate-pulse-subtle" />
              <span className="text-xs text-muted-foreground tracking-wider uppercase">
                Operations Active
              </span>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Divisions
            </h4>
            <ul className="space-y-3">
              {footerLinks.divisions.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Cardinal Consulting. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
