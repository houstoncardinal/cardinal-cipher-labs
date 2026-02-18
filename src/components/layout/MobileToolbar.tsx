import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Briefcase, 
  FolderOpen, 
  Mail,
  Phone,
  ArrowUp,
  Sparkles
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const toolbarItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "services", label: "Services", icon: Briefcase },
  { id: "portfolio", label: "Work", icon: FolderOpen },
  { id: "contact", label: "Contact", icon: Mail },
];

export const MobileToolbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Show scroll to top after scrolling down
      setShowScrollTop(currentScrollY > 500);

      // Update active section
      const sections = toolbarItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const scrollPosition = currentScrollY + window.innerHeight / 2;

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Main Toolbar */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe"
          >
            {/* Premium Glass Container */}
            <div className="mx-3 mb-3">
              <div className="glass-strong rounded-2xl shadow-executive-4 overflow-hidden">
                {/* Gradient Top Border */}
                <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                <div className="px-2 py-2">
                  <div className="flex items-center justify-between">
                    {/* Navigation Items */}
                    <div className="flex-1 flex items-center justify-around">
                      {toolbarItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.id;

                        return (
                          <motion.button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            whileTap={{ scale: 0.9 }}
                            className={`
                              relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl
                              transition-all duration-300
                              ${isActive 
                                ? "text-primary" 
                                : "text-muted-foreground"
                              }
                            `}
                          >
                            {/* Active Background Glow */}
                            {isActive && (
                              <motion.div
                                layoutId="activeBackground"
                                className="absolute inset-0 bg-primary/10 rounded-xl"
                                transition={{ duration: 0.3 }}
                              />
                            )}
                            
                            {/* Icon with Pulse Effect */}
                            <div className="relative">
                              <Icon className={`w-5 h-5 transition-transform duration-300 ${isActive ? "scale-110" : ""}`} />
                              {isActive && (
                                <motion.div
                                  initial={{ scale: 1, opacity: 0.5 }}
                                  animate={{ scale: 1.5, opacity: 0 }}
                                  transition={{ duration: 1, repeat: Infinity }}
                                  className="absolute inset-0 bg-primary rounded-full"
                                />
                              )}
                            </div>
                            
                            {/* Label */}
                            <span className={`
                              text-[10px] font-medium transition-all duration-300
                              ${isActive ? "text-primary" : "text-muted-foreground"}
                            `}>
                              {item.label}
                            </span>

                            {/* Active Dot */}
                            {isActive && (
                              <motion.div
                                layoutId="activeDot"
                                className="absolute -bottom-0.5 w-1 h-1 bg-primary rounded-full"
                              />
                            )}
                          </motion.button>
                        );
                      })}
                    </div>

                    {/* Divider */}
                    <div className="w-px h-10 bg-border/50 mx-1" />

                    {/* Quick Actions */}
                    <div className="flex items-center gap-1 px-2">
                      {/* Call Button */}
                      <motion.a
                        href="tel:+15053189812"
                        whileTap={{ scale: 0.9 }}
                        className="relative p-2.5 rounded-xl bg-primary text-primary-foreground shadow-lg"
                      >
                        <Phone className="w-4 h-4" />
                        {/* Pulse Ring */}
                        <motion.div
                          initial={{ scale: 1, opacity: 0.6 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-primary rounded-xl"
                        />
                      </motion.a>

                      {/* Theme Toggle */}
                      <div className="p-1">
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safe Area Padding */}
                <div className="h-safe" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};
