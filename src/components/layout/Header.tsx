import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", hasMegaMenu: true },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const megaMenuServices = [
  {
    title: "Design",
    items: [
      { label: "Brand Identity", href: "/services/brand-identity", description: "Logos, brand guidelines & visual systems" },
      { label: "UI/UX Design", href: "/services/uxui", description: "User-centered design for web & mobile" },
    ]
  },
  {
    title: "Development",
    items: [
      { label: "Web Development", href: "/services/web-development", description: "Custom websites & web applications" },
      { label: "Mobile Apps", href: "/services/mobile-apps", description: "iOS & Android native applications" },
    ]
  },
  {
    title: "Marketing",
    items: [
      { label: "Digital Marketing", href: "/services/digital-marketing", description: "SEO, PPC & comprehensive campaigns" },
      { label: "SEO & Analytics", href: "/services/seo-analytics", description: "Data-driven growth strategies" },
    ]
  }
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[51] bg-white border-b border-gray-100"
        initial={{ y: -40 }}
        animate={{ y: isScrolled ? -40 : 0 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="w-full px-6 lg:px-12">
          <div className="flex items-center justify-between h-9 max-w-[1600px] mx-auto">
            <div className="flex items-center gap-5">
              <a
                href="tel:281-901-7016"
                className="flex items-center gap-2 text-[11px] text-gray-900 hover:text-red-600 transition-colors font-semibold uppercase tracking-wide"
              >
                <Phone size={10} className="text-red-500" />
                <span>(281) 901-7016</span>
              </a>
              <div className="w-px h-3 bg-gray-200" />
              <a
                href="mailto:hunain@visitcardinal.com"
                className="text-[11px] text-gray-900 hover:text-red-600 transition-colors font-semibold uppercase tracking-wide"
              >
                hunain@visitcardinal.com
              </a>
            </div>
            <div className="hidden md:flex items-center gap-5">
              <span className="text-[11px] text-gray-900 font-medium uppercase tracking-wide">Mon–Fri 9AM–6PM CST</span>
              <div className="w-px h-3 bg-gray-200" />
              <span className="text-[11px] text-gray-900 font-medium uppercase tracking-wide">Houston, TX</span>
              <motion.a
                href="/contact"
                className="text-[11px] text-red-600 hover:text-red-700 font-bold uppercase tracking-wide flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                Get Free Quote <ArrowRight size={10} />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main header */}
      <motion.header
        className="fixed left-0 right-0 z-50"
        animate={{ top: isScrolled ? 0 : 36 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        style={{
          backgroundColor: "white",
          boxShadow: isScrolled
            ? "0 1px 0 0 rgba(0,0,0,0.04), 0 4px 16px -2px rgba(0,0,0,0.06), 0 12px 40px -4px rgba(0,0,0,0.04)"
            : "0 1px 0 0 rgba(0,0,0,0.04), 0 2px 8px -2px rgba(0,0,0,0.03)",
        }}
      >
        {/* Subtle bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <motion.a
              href="/"
              className="flex items-center gap-3.5 group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center rounded-lg shadow-[0_2px_8px_rgba(220,38,38,0.25)]"
                  whileHover={{ rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <span className="text-white font-serif text-lg font-bold relative z-10">C</span>
                </motion.div>
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-serif text-xl tracking-tight leading-none font-semibold">
                  Cardinal
                </span>
                <span className="text-[9px] text-gray-400 tracking-[0.25em] uppercase mt-0.5 font-medium">
                  Consulting
                </span>
              </div>
              {/* Separator after logo */}
              <div className="hidden lg:block w-px h-8 bg-gray-200 ml-4" />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.hasMegaMenu && setIsMegaMenuOpen(true)}
                  onMouseLeave={() => item.hasMegaMenu && setIsMegaMenuOpen(false)}
                >
                  <motion.a
                    href={item.href}
                    className="relative text-[13px] text-gray-500 hover:text-gray-900 transition-all duration-300 tracking-wide uppercase px-4 py-2 rounded-lg hover:bg-gray-50 font-medium group cursor-pointer flex items-center gap-1"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    {item.label}
                    {item.hasMegaMenu && (
                      <svg className="inline-block ml-0.5 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                    <motion.span
                      className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-red-500 origin-left rounded-full"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.25 }}
                    />
                  </motion.a>
                </div>
              ))}
            </nav>

            {/* Mega Menu */}
            <AnimatePresence>
              {isMegaMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15),0_0_1px_rgba(0,0,0,0.08)] border-t border-gray-100"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                  
                  <div className="container mx-auto px-6 lg:px-12 py-12 relative">
                    <div className="grid grid-cols-3 gap-12">
                      {megaMenuServices.map((category, catIndex) => (
                        <div key={category.title} className="relative">
                          {/* Category indicator line */}
                          <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500 via-red-400 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                          <h4 className="text-[10px] tracking-[0.25em] uppercase text-gray-900 font-bold mb-6 pb-2 border-b border-gray-100">
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((service, itemIndex) => (
                              <li key={service.label}>
                                <motion.a
                                  href={service.href}
                                  className="group relative flex flex-col py-4 px-4 -mx-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: catIndex * 0.05 + itemIndex * 0.03 }}
                                >
                                  <div className="flex items-center gap-3">
                                    <span className="text-[15px] text-gray-900 font-semibold group-hover:text-red-600 transition-colors">
                                      {service.label}
                                    </span>
                                    <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-red-500 transition-all duration-300" />
                                  </div>
                                  <span className="text-[13px] text-gray-500 mt-1.5 leading-relaxed">
                                    {service.description}
                                  </span>
                                  {/* Hover accent line */}
                                  <div className="absolute bottom-0 left-4 right-4 h-[1px] bg-gradient-to-r from-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </motion.a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <div>
                          <p className="text-sm text-gray-500">Ready to start your project?</p>
                          <p className="text-lg text-gray-900 font-semibold mt-0.5">Let's build something extraordinary</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <motion.a
                          href="/portfolio"
                          className="text-[13px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
                          whileHover={{ x: 2 }}
                        >
                          View Our Work →
                        </motion.a>
                        <motion.a
                          href="/contact"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-500 text-white text-[12px] font-bold tracking-wider uppercase px-8 py-4 rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
                          whileHover={{ y: -2, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Start Your Project
                          <ArrowRight size={14} />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Right side: phone, theme, CTA */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Separator */}
              <div className="w-px h-8 bg-gray-200 mr-1" />

              <motion.a
                href="tel:281-901-7016"
                className="flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 group"
                whileHover={{ x: 1 }}
              >
                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                  <Phone size={12} className="text-red-500" />
                </div>
                <span className="font-medium">(281) 901-7016</span>
              </motion.a>

              {/* Separator */}
              <div className="w-px h-8 bg-gray-200" />

              <motion.a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gray-900 text-white text-[12px] font-bold tracking-wider uppercase px-6 py-3 rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.12)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.18)] group"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Free Consultation</span>
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </motion.a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="lg:hidden text-gray-900 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
            >
              <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-[13px] text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all py-3.5 px-4 tracking-wide uppercase font-medium rounded-lg border-b border-gray-50"
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.04 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="pt-6 space-y-4 border-t border-gray-100 mt-2">
                  <div className="flex items-center justify-between px-4">
                    <a
                      href="tel:281-901-7016"
                      className="flex items-center gap-2 text-sm text-gray-900 font-medium"
                    >
                      <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                        <Phone size={12} className="text-red-500" />
                      </div>
                      <span>(281) 901-7016</span>
                    </a>
                    {/* Theme toggle removed */}
                  </div>
                  <a
                    href="/contact"
                    className="flex items-center justify-center gap-2 w-full bg-gray-900 text-white text-[13px] font-bold tracking-wider uppercase px-6 py-3.5 rounded-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Free Consultation
                    <ArrowRight size={14} />
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
