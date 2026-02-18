import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Users,
  Briefcase,
  Award,
  FolderOpen,
  Layers,
  Building2,
  HelpCircle,
  Mail,
  ChevronRight
} from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "advantage", label: "Why Us", icon: Award },
  { id: "portfolio", label: "Portfolio", icon: FolderOpen },
  { id: "process", label: "Process", icon: Layers },
  { id: "industries", label: "Industries", icon: Building2 },
  { id: "faq", label: "FAQ", icon: HelpCircle },
  { id: "contact", label: "Contact", icon: Mail },
];

export const VerticalNav = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50 hidden lg:block"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        animate={{ width: isExpanded ? 180 : 56 }}
        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white rounded-r-xl overflow-hidden border border-l-0 border-gray-200/70 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.06),0_4px_20px_-4px_rgba(0,0,0,0.04)]"
      >
        {/* Header */}
        <div className="px-3 py-4 border-b border-gray-100">
          <motion.div
            animate={{ opacity: isExpanded ? 1 : 0 }}
            className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]"
          >
            {isExpanded && "Navigate"}
          </motion.div>
        </div>

        {/* Navigation Items */}
        <div className="py-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 text-left
                  transition-all duration-300 relative group
                  ${isActive
                    ? "text-red-600 bg-red-50/80"
                    : "text-gray-400 hover:text-gray-900 hover:bg-gray-50"
                  }
                `}
              >
                {/* Active Indicator */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      initial={{ opacity: 0, scaleY: 0 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      exit={{ opacity: 0, scaleY: 0 }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-red-500 rounded-r-full"
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <div className={`
                  relative transition-transform duration-300
                  ${isActive ? "scale-110" : "group-hover:scale-105"}
                `}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Label */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className={`text-[13px] font-medium whitespace-nowrap flex-1 ${
                        isActive ? "text-red-600" : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Chevron for Active */}
                {isExpanded && isActive && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-red-500"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Progress Indicator */}
        <div className="px-3 pb-4 pt-2 border-t border-gray-100">
          <div className="relative h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="absolute left-0 top-0 h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
              style={{
                width: `${((navItems.findIndex(i => i.id === activeSection) + 1) / navItems.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          {isExpanded && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] text-gray-400 mt-2 text-center font-medium"
            >
              {navItems.findIndex(i => i.id === activeSection) + 1} of {navItems.length}
            </motion.p>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};
