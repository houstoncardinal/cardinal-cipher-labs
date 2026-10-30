import { useRef } from "react";
import { flushSync } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { applyTheme, setPreference, useTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/**
 * Quiet light/dark switch for the header. The new theme spreads out from the button in a
 * circle (View Transitions API), with an instant fallback where that isn't supported.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLButtonElement>(null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  const toggle = () => {
    const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
    const root = document.documentElement;
    const commit = () => {
      root.classList.add("theme-switching");
      flushSync(() => setPreference(next));
      applyTheme(next);
    };
    const done = () => requestAnimationFrame(() => root.classList.remove("theme-switching"));

    if (!doc.startViewTransition || reduce) {
      commit();
      done();
      return;
    }
    const r = ref.current?.getBoundingClientRect();
    const x = r ? r.left + r.width / 2 : window.innerWidth - 40;
    const y = r ? r.top + r.height / 2 : 36;
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
    const transition = doc.startViewTransition(commit);
    transition.ready
      .then(() => {
        root.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          { duration: 650, easing: "cubic-bezier(0.16, 1, 0.3, 1)", pseudoElement: "::view-transition-new(root)" },
        );
      })
      .finally(done);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      className={cn(
        "group relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border text-foreground/80 transition-colors hover:border-foreground/30 hover:text-foreground",
        className,
      )}
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-foreground/[0.04] opacity-0 transition-opacity group-hover:opacity-100" />
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.svg
            key="moon"
            viewBox="0 0 24 24"
            className="relative h-[18px] w-[18px]"
            initial={{ rotate: -70, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 70, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.5 14.2A8.5 8.5 0 1 1 9.8 3.5a6.6 6.6 0 0 0 10.7 10.7Z" />
            <motion.circle cx="17.5" cy="5.5" r="0.9" fill="currentColor" stroke="none" initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.5, 1] }} transition={{ duration: 1.2, delay: 0.2 }} />
          </motion.svg>
        ) : (
          <motion.svg
            key="sun"
            viewBox="0 0 24 24"
            className="relative h-[18px] w-[18px]"
            initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            fill="none"
            stroke="currentColor"
            strokeWidth={1.7}
            strokeLinecap="round"
          >
            <circle cx="12" cy="12" r="4.2" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
              <motion.line
                key={deg}
                x1="12"
                y1="2.6"
                x2="12"
                y2="4.6"
                transform={`rotate(${deg} 12 12)`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.25, delay: 0.08 + i * 0.03 }}
              />
            ))}
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
