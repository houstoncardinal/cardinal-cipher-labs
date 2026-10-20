import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { serviceGroups, services } from "@/lib/services-catalog";
import { industries } from "@/lib/industries";

type PanelId = "services" | "industries";

const simpleLinks = [
  { label: "Work", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="Cardinal Consulting home">
      <span className="flex h-9 w-9 items-center justify-center bg-primary font-display text-lg font-semibold text-primary-foreground">C</span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-[19px] font-semibold tracking-tight", inverted ? "text-ink-foreground" : "text-foreground")}>Cardinal</span>
        <span className={cn("mt-1 text-[10px] font-medium uppercase tracking-[0.22em]", inverted ? "text-ink-muted" : "text-muted-foreground")}>Consulting</span>
      </span>
    </Link>
  );
}

function ServicesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">
      <div>
        <p className="font-display text-2xl font-semibold text-foreground">Services</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          One senior team to build, design, and grow your digital business.
        </p>
        <Link to="/services" onClick={onNavigate} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
          All services <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-8 sm:grid-cols-3">
        {serviceGroups.map((g) => (
          <div key={g.group}>
            <p className="mb-4 border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{g.title}</p>
            <ul className="space-y-4">
              {services.filter((s) => s.group === g.group).map((s) => (
                <li key={s.slug}>
                  <Link to={s.path} onClick={onNavigate} className="group block">
                    <span className="font-medium text-foreground group-hover:text-primary">{s.name}</span>
                    <span className="mt-0.5 block text-sm text-muted-foreground">{s.menuBlurb}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function IndustriesPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_3fr]">
      <div>
        <p className="font-display text-2xl font-semibold text-foreground">Industries</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Deep experience in regulated and high-stakes industries.
        </p>
      </div>
      <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-3">
        {industries.map((ind) => (
          <li key={ind.href}>
            <Link to={ind.href} onClick={onNavigate} className="group flex gap-3">
              <ind.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>
                <span className="font-medium text-foreground group-hover:text-primary">{ind.name}</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{ind.blurb}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openPanel, setOpenPanel] = useState<PanelId | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<PanelId | null>(null);
  const closeTimer = useRef<number>();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpenPanel(null);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPanel(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const open = (id: PanelId) => {
    window.clearTimeout(closeTimer.current);
    setOpenPanel(id);
  };
  const scheduleClose = () => {
    closeTimer.current = window.setTimeout(() => setOpenPanel(null), 120);
  };

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(`${href}/`);

  const navLinkClass = (active: boolean) =>
    cn(
      "relative inline-flex h-[72px] items-center gap-1 text-[15px] font-medium transition-colors",
      "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform",
      active ? "text-foreground after:scale-x-100" : "text-text-secondary hover:text-foreground hover:after:scale-x-100",
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-background/95 backdrop-blur transition-shadow",
          isScrolled || openPanel ? "border-border shadow-[0_1px_0_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.12)]" : "border-transparent",
        )}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <Logo />

          <nav aria-label="Main" className="hidden items-center gap-9 lg:flex">
            {(["services", "industries"] as PanelId[]).map((id) => (
              <button
                key={id}
                type="button"
                aria-expanded={openPanel === id}
                aria-controls={`panel-${id}`}
                onMouseEnter={() => open(id)}
                onClick={() => setOpenPanel(openPanel === id ? null : id)}
                className={navLinkClass(openPanel === id || isActive(id === "services" ? "/services" : "/industry"))}
              >
                {id === "services" ? "Services" : "Industries"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", openPanel === id && "rotate-180")} />
              </button>
            ))}
            {simpleLinks.map((l) => (
              <Link key={l.href} to={l.href} onMouseEnter={scheduleClose} className={navLinkClass(isActive(l.href))}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <a href="tel:281-901-7016" className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-foreground">
              <Phone className="h-4 w-4" /> (281) 901-7016
            </a>
            <Link
              to="/contact"
              className="inline-flex h-11 items-center gap-2 bg-ink px-5 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="-mr-2 p-2 text-foreground lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop mega panels */}
        <AnimatePresence>
          {openPanel && (
            <motion.div
              id={`panel-${openPanel}`}
              key={openPanel}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
              onMouseEnter={() => open(openPanel)}
              className="absolute inset-x-0 top-full hidden border-b border-border bg-background lg:block"
            >
              <div className="mx-auto w-full max-w-[1280px] px-10 py-10">
                {openPanel === "services" ? (
                  <ServicesPanel onNavigate={() => setOpenPanel(null)} />
                ) : (
                  <IndustriesPanel onNavigate={() => setOpenPanel(null)} />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-background lg:hidden"
          >
            <nav aria-label="Mobile" className="px-6 py-6">
              {(["services", "industries"] as PanelId[]).map((id) => (
                <div key={id} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setMobileSection(mobileSection === id ? null : id)}
                    aria-expanded={mobileSection === id}
                    className="flex w-full items-center justify-between py-4 text-left text-lg font-medium text-foreground"
                  >
                    {id === "services" ? "Services" : "Industries"}
                    <ChevronDown className={cn("h-5 w-5 transition-transform", mobileSection === id && "rotate-180")} />
                  </button>
                  {mobileSection === id && (
                    <ul className="space-y-3 pb-5">
                      {(id === "services"
                        ? [{ label: "All services", href: "/services" }, ...services.map((s) => ({ label: s.name, href: s.path }))]
                        : industries.map((i) => ({ label: i.name, href: i.href }))
                      ).map((item) => (
                        <li key={item.href}>
                          <Link to={item.href} className="block text-text-secondary hover:text-primary">{item.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
              {[...simpleLinks, { label: "Pricing", href: "/pricing" }, { label: "Careers", href: "/careers" }].map((l) => (
                <Link key={l.href} to={l.href} className="block border-b border-border py-4 text-lg font-medium text-foreground">
                  {l.label}
                </Link>
              ))}
              <div className="mt-8 space-y-3">
                <Link to="/contact" className="flex h-12 items-center justify-center gap-2 bg-ink font-semibold text-ink-foreground">
                  Contact us <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:281-901-7016" className="flex h-12 items-center justify-center gap-2 border border-border font-medium text-foreground">
                  <Phone className="h-4 w-4" /> (281) 901-7016
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
