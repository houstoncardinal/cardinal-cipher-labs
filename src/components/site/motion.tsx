// Signature motion system. Slow, precise, typography-led. Everything here respects
// prefers-reduced-motion (via <MotionConfig reducedMotion="user"> in App and the
// explicit checks below) and renders complete, readable content in pre-rendered HTML.
import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Headline that rises word by word from behind a mask. */
export function RevealText({
  text,
  className,
  wordClassName,
  delay = 0,
  trigger = "inView",
}: {
  text: string;
  className?: string;
  /** Applied to each word (e.g. gradient text, which must sit on the moving element). */
  wordClassName?: string;
  delay?: number;
  trigger?: "inView" | "mount";
}) {
  const words = text.split(" ");
  const target = { y: "0%" };
  return (
    <span className={className}>
      {words.map((w, i) => (
        // The space must sit between the clipped blocks: trailing whitespace inside an
        // inline-block is dropped by the browser and the words would run together.
        <Fragment key={i}>
          <span className="inline-block overflow-hidden pb-[0.24em] align-bottom -mb-[0.24em]">
            <motion.span
              className={cn("inline-block will-change-transform", wordClassName)}
              initial={{ y: "105%" }}
              {...(trigger === "mount" ? { animate: target } : { whileInView: target, viewport: { once: true, margin: "-40px" } })}
              transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.045 }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </Fragment>
      ))}
    </span>
  );
}

/** Animated number: "500+" counts 0→500 and keeps the suffix. Non-numeric values render as-is. */
export function CountUp({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^([^\d]*)(\d[\d,]*\.?\d*)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const isClient = typeof window !== "undefined";
  const [display, setDisplay] = useState<string | null>(match && isClient && !reduce ? "0" : null);

  useEffect(() => {
    if (!match || reduce || !inView) return;
    const [, , num] = match;
    const target = parseFloat(num.replace(/,/g, ""));
    const decimals = (num.split(".")[1] ?? "").length;
    const commas = num.includes(",");
    const controls = animate(0, target, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => {
        const fixed = v.toFixed(decimals);
        setDisplay(commas ? Number(fixed).toLocaleString("en-US", { minimumFractionDigits: decimals }) : fixed);
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, reduce]);

  if (!match) return <span className={className}>{value}</span>;
  const [, prefix, num, suffix] = match;
  return (
    <span ref={ref} className={cn("tabular-nums", className)} aria-label={value}>
      <span aria-hidden>
        {prefix}
        {display ?? num}
        {suffix}
      </span>
    </span>
  );
}

/** Hairline that draws itself left to right. */
export function DrawLine({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden
      className={cn("block origin-left", className)}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, ease: EASE, delay }}
    />
  );
}

/** Soft light that follows the pointer across a dark section. */
export function Spotlight({ children, className, background }: { children: ReactNode; className?: string; background?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${e.clientX - r.left}px`);
    el.style.setProperty("--spot-y", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onPointerMove={onMove} className={cn("group/spot relative isolate overflow-hidden", className)}>
      {background}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-700 group-hover/spot:opacity-100 motion-reduce:hidden"
        style={{ background: "radial-gradient(520px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255, 255, 255, 0.06), transparent 60%)" }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

/** Image unveiled top-to-bottom while settling from a slight zoom. */
export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.2, ease: EASE }}
    >
      <motion.div
        initial={{ scale: 1.08 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 1.6, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/** Slow vertical drift for gallery imagery. */
export function Parallax({ children, className, distance = 40 }: { children: ReactNode; className?: string; distance?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}

/** Thin crimson reading-progress line (rendered under the header). */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-primary" style={{ scaleX }} />;
}

/** Fades page content in on route changes — but not on first load, so pre-rendered content never flashes. */
export function PageFade({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const first = useRef(true);
  useEffect(() => {
    first.current = false;
  }, []);
  return (
    <motion.div key={pathname} initial={first.current ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.45, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/**
 * Gallery-style cursor label: over any element with data-cursor="…", a small ink pill
 * follows the pointer showing that text. Fine pointers only; the native cursor stays visible.
 */
export function CursorLabel() {
  const [label, setLabel] = useState<string | null>(null);
  const x = useSpring(0, { stiffness: 500, damping: 40 });
  const y = useSpring(0, { stiffness: 500, damping: 40 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX + 18);
      y.set(e.clientY + 18);
      const el = (e.target as Element | null)?.closest?.("[data-cursor]");
      setLabel(el ? el.getAttribute("data-cursor") : null);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] whitespace-nowrap bg-ink px-4 py-2 text-xs font-semibold text-ink-foreground shadow-lg"
      style={{ x, y }}
      initial={false}
      animate={{ opacity: label ? 1 : 0, scale: label ? 1 : 0.8 }}
      transition={{ duration: 0.2 }}
    >
      {label} →
    </motion.div>
  );
}
