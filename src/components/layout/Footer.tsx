import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Web Development", href: "#services" },
    { label: "Mobile Applications", href: "#services" },
    { label: "SEO & Analytics", href: "#services" },
    { label: "Digital Marketing", href: "#services" },
    { label: "Brand Identity", href: "#services" },
    { label: "UX/UI Design", href: "#services" },
  ],
  industries: [
    { label: "Healthcare", href: "#industries" },
    { label: "Legal", href: "#industries" },
    { label: "Financial", href: "#industries" },
    { label: "Technology", href: "#industries" },
    { label: "Construction", href: "#industries" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
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
              <div className="flex flex-col">
                <span className="text-foreground font-serif text-xl tracking-tight leading-none">
                  Cardinal
                </span>
                <span className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase">
                  Consulting
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm mb-6">
              Premier digital agency specializing in web development, app development, 
              and digital marketing for businesses worldwide.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>2100 West Loop S Fwy, Houston, TX 77027</p>
              <p>
                <a href="mailto:hello@cardinalhtx.com" className="hover:text-foreground transition-colors">
                  hello@cardinalhtx.com
                </a>
              </p>
              <p>
                <a href="tel:281-901-7016" className="hover:text-foreground transition-colors">
                  (281) 901-7016
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
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

          {/* Industries */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Industries
            </h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
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
          </div>
        </div>
      </div>
    </footer>
  );
}
