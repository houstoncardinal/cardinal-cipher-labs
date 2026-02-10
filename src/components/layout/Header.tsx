import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ["hsl(var(--background) / 0)", "hsl(var(--background) / 0.95)"]
  );
  
  const headerBorder = useTransform(
    scrollY,
    [0, 100],
    ["hsl(var(--border) / 0)", "hsl(var(--border) / 0.5)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: headerBg,
        borderBottom: `1px solid`,
        borderColor: headerBorder,
        backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
      }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div 
              className="w-9 h-9 bg-primary flex items-center justify-center relative overflow-hidden"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-primary-foreground font-serif text-lg font-semibold relative z-10">C</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="flex flex-col">
              <span className="text-foreground font-serif text-xl tracking-tight leading-none">
                Cardinal
              </span>
              <span className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">
                Consulting
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#')) {
                    const hash = item.href.substring(1);
                    if (window.location.pathname === '/') {
                      e.preventDefault();
                      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 tracking-wide uppercase group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-px bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* CTA & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a 
              href="tel:281-901-7016" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              whileHover={{ x: 2 }}
            >
              <Phone size={14} className="group-hover:text-primary transition-colors" />
              <span>(281) 901-7016</span>
            </motion.a>
            <ThemeToggle />
            <Button variant="executive" size="sm" className="relative overflow-hidden group" asChild>
              <a href="/contact">
                <span className="relative z-10">Free Consultation</span>
                <motion.div
                  className="absolute inset-0 bg-foreground"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="lg:hidden overflow-hidden glass-strong"
      >
        <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors py-3 tracking-wide uppercase border-b border-border/30"
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, x: -20 }}
              animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {item.label}
            </motion.a>
          ))}
          <div className="pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <a 
                href="tel:281-901-7016" 
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <Phone size={14} className="text-primary" />
                <span>(281) 901-7016</span>
              </a>
              <ThemeToggle />
            </div>
            <Button variant="primary" size="sm" className="w-full" asChild>
              <a href="/contact">Free Consultation</a>
            </Button>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
}
