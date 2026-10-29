import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, X, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface Theme {
  id: string;
  name: string;
  description: string;
  primary: string;
  primaryGradientEnd?: string;
  preview: string;
}

const themes: Theme[] = [
  {
    id: "cardinal-crimson",
    name: "Cardinal Crimson",
    description: "Classic bold red accent",
    primary: "352 72% 36%",
    preview: "linear-gradient(135deg, #EA580C, #991B1B)",
  },
  {
    id: "warm-terracotta",
    name: "Warm Terracotta",
    description: "Earthy, sophisticated terracotta",
    primary: "18 45% 42%",
    preview: "linear-gradient(135deg, #C75B39, #8B4332)",
  },
  {
    id: "luxury-gold",
    name: "Luxury Gold",
    description: "Premium golden gradient",
    primary: "45 60% 45%",
    primaryGradientEnd: "35 70% 50%",
    preview: "linear-gradient(135deg, #D4A853, #C9A227)",
  },
  {
    id: "emerald-growth",
    name: "Emerald Growth",
    description: "Fresh, growth-focused green",
    primary: "150 60% 40%",
    preview: "linear-gradient(135deg, #10B981, #059669)",
  },
  {
    id: "royal-blue",
    name: "Royal Blue",
    description: "Professional, trustworthy blue",
    primary: "220 70% 45%",
    preview: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
  },
  {
    id: "deep-purple",
    name: "Deep Purple",
    description: "Creative, modern purple",
    primary: "270 60% 45%",
    preview: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
  },
  {
    id: "sunset-orange",
    name: "Sunset Orange",
    description: "Warm, energetic orange",
    primary: "25 85% 50%",
    preview: "linear-gradient(135deg, #F97316, #EA580C)",
  },
  {
    id: "rose-pink",
    name: "Rose Pink",
    description: "Soft, elegant pink",
    primary: "340 70% 45%",
    preview: "linear-gradient(135deg, #EC4899, #DB2777)",
  },
  {
    id: "ocean-teal",
    name: "Ocean Teal",
    description: "Calm, sophisticated teal",
    primary: "175 60% 40%",
    preview: "linear-gradient(135deg, #14B8A6, #0D9488)",
  },
  {
    id: "midnight-navy",
    name: "Midnight Navy",
    description: "Bold, authoritative navy",
    primary: "225 60% 35%",
    preview: "linear-gradient(135deg, #1E3A8A, #1E40AF)",
  },
  {
    id: "ruby-red",
    name: "Ruby Red",
    description: "Rich, luxurious ruby",
    primary: "350 75% 45%",
    preview: "linear-gradient(135deg, #E11D48, #BE123C)",
  },
  {
    id: "amber-glow",
    name: "Amber Glow",
    description: "Warm, inviting amber",
    primary: "35 85% 50%",
    preview: "linear-gradient(135deg, #F59E0B, #D97706)",
  },
];

const STORAGE_KEY = "accent-theme";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const end = theme.primaryGradientEnd ?? theme.primary;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty(
    "--gradient-primary",
    `linear-gradient(135deg, hsl(${theme.primary}), hsl(${end}))`
  );
};

export function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [previewTheme, setPreviewTheme] = useState<Theme | null>(null);
  const [currentTheme, setCurrentTheme] = useState<string>("sunset-orange");

  // Read saved theme on the client only (keeps SSR prerender working)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && themes.some((t) => t.id === saved)) {
      setCurrentTheme(saved);
    }
  }, []);

  useEffect(() => {
    const theme = themes.find((t) => t.id === currentTheme);
    if (theme) {
      applyTheme(theme);
    }
  }, [currentTheme]);

  const clearPreview = () => {
    const savedTheme = themes.find((t) => t.id === currentTheme);
    if (savedTheme) {
      applyTheme(savedTheme);
    }
    setPreviewTheme(null);
  };

  const handleThemeSelect = (theme: Theme) => {
    localStorage.setItem(STORAGE_KEY, theme.id);
    setCurrentTheme(theme.id);
    setPreviewTheme(null);
    setIsOpen(false);
  };

  const handlePreview = (theme: Theme) => {
    setPreviewTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
          "bg-primary text-primary-foreground hover:shadow-lg hover:scale-105",
          isOpen && "ring-2 ring-offset-2 ring-primary"
        )}
        aria-label="Change theme"
      >
        <Palette className="h-5 w-5" />
        {isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full"
          />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setIsOpen(false);
                clearPreview();
              }}
              className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm lg:hidden"
            />

            {/* Theme panel: centered modal on mobile, dropdown on desktop.
                Positioning lives on the wrapper so framer-motion's transform
                doesn't override the centering translate. */}
            <div
              className={cn(
                "fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2",
                "lg:absolute lg:left-auto lg:right-0 lg:top-full lg:mt-2 lg:translate-x-0 lg:translate-y-0"
              )}
            >
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-[min(20rem,calc(100vw-2rem))] max-h-[85vh] overflow-y-auto bg-background border border-border rounded-2xl shadow-2xl"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      Theme Colors
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      clearPreview();
                    }}
                    className="p-1 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <X className="h-5 w-5 text-muted-foreground" />
                  </button>
                </div>

                {/* Preview indicator */}
                {previewTheme && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-4 p-3 rounded-xl bg-primary/10 border border-primary/20"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <Palette className="h-4 w-4 text-primary" />
                      <span className="font-medium text-foreground">Previewing: {previewTheme.name}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Click to apply, or close to cancel
                    </p>
                  </motion.div>
                )}

                {/* Theme grid */}
                <div className="grid gap-3">
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.id}
                      type="button"
                      onClick={() => handleThemeSelect(theme)}
                      onMouseEnter={() => handlePreview(theme)}
                      onMouseLeave={clearPreview}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={cn(
                        "relative group p-4 rounded-xl border-2 transition-all duration-200",
                        "text-left hover:shadow-lg",
                        currentTheme === theme.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50 bg-background"
                      )}
                    >
                      {/* Color preview */}
                      <div
                        className="w-full h-12 rounded-lg mb-3 shadow-inner"
                        style={{ background: theme.preview }}
                      />

                      {/* Theme info */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {theme.name}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {theme.description}
                          </p>
                        </div>

                        {/* Checkmark for current theme */}
                        {currentTheme === theme.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white"
                          >
                            <Check className="h-4 w-4" />
                          </motion.div>
                        )}
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center">
                    Hover to preview, click to apply
                  </p>
                </div>
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
