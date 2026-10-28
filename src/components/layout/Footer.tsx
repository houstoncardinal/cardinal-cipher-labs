import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Logo } from "@/components/layout/Header";
import { services } from "@/lib/services-catalog";
import { industries } from "@/lib/industries";

const company = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const local = [
  { label: "Houston SEO Company", href: "/houston-seo-company" },
  { label: "Web Design Houston", href: "/houston-web-design" },
  { label: "App Development Houston", href: "/houston-app-development" },
  { label: "Web Developer Houston", href: "/houston-web-developer" },
  { label: "Houston SEO Services", href: "/houston-seo" },
  { label: "Law Firm Web Design", href: "/houston-law-firm-website-design" },
  { label: "Medical Web Design", href: "/houston-medical-website-design" },
  { label: "Restaurant Web Design", href: "/houston-restaurant-website-design" },
  { label: "eCommerce Web Design", href: "/houston-ecommerce-website-design" },
  { label: "Real Estate Web Design", href: "/houston-real-estate-website-design" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{title}</h4>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="text-sm text-ink-foreground/80 transition-colors hover:text-ink-foreground">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      {/* Closing CTA */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between lg:px-10 lg:py-20">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl leading-tight text-ink-foreground md:text-4xl">Let's talk about what's next for your business.</h2>
            <p className="mt-4 text-ink-muted">Tell us about your goals. We respond within 24 hours.</p>
          </div>
          <Link to="/contact" className="inline-flex h-12 shrink-0 items-center gap-2 bg-primary px-6 font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
          <div>
            <Logo inverted />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
              Websites, apps, brands, and growth marketing for mid-market and enterprise organizations. Headquartered in Houston, serving clients nationwide.
            </p>
            <address className="mt-6 space-y-1.5 text-sm not-italic text-ink-foreground/80">
              <p>2100 West Loop S Fwy, Houston, TX 77027</p>
              <p><a href="mailto:hello@visitcardinal.com" className="hover:text-ink-foreground">hello@visitcardinal.com</a></p>
              <p><a href="tel:281-901-7016" className="hover:text-ink-foreground">(281) 901-7016</a></p>
            </address>
          </div>
          <Column title="Services" links={services.map((s) => ({ label: s.name, href: s.path }))} />
          <Column title="Industries" links={industries.map((i) => ({ label: i.name, href: i.href }))} />
          <Column title="Company" links={company} />
          <Column title="Houston" links={local} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Cardinal Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-ink-foreground">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-ink-foreground">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
