import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun } from "lucide-react";

export function ThemeToggle() {
  // Always use light mode - dark mode disabled
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Force light mode - always remove dark class
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }, []);

  // Prevent flash by not rendering until mounted
  if (!mounted) {
    return (
      <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-border/50 bg-background/50 backdrop-blur-sm">
        <Sun size={18} className="text-foreground" />
      </div>
    );
  }

  // Theme toggle removed - site is now light mode only
  return (
    <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-border/50 bg-background/50 backdrop-blur-sm">
      <Sun size={18} className="text-foreground" />
    </div>
  );
}
