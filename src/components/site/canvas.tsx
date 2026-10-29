// Tactile layer on top of the signature motion system in ./motion: kinetic type,
// marquees, and pointer-reactive surfaces. Everything respects prefers-reduced-motion
// and touches window/document only inside effects, so SSR prerendering stays safe.
// WebGL pieces live in ./three.
import { useRef, type ReactNode } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { cn } from "@/lib/utils";

// ── Marquees ─────────────────────────────────────────────────────────────────

/**
 * Seamless infinite strip. `children` is called once per copy; copy 1 is a visual
 * duplicate, so it should render hidden/untabbable content. Pauses on hover.
 */
export function Marquee({
  children,
  duration = 40,
  reverse,
  className,
  gapClassName = "gap-x-16 pr-16",
}: {
  children: (copy: 0 | 1) => ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
  gapClassName?: string;
}) {
  return (
    <div
      className={cn(
        "group/marquee flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]",
        "motion-reduce:justify-center motion-reduce:[mask-image:none]",
        className,
      )}
    >
      {([0, 1] as const).map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1 || undefined}
          className={cn(
            "flex shrink-0 items-center animate-marquee group-hover/marquee:[animation-play-state:paused]",
            "motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-10",
            copy === 1 && "motion-reduce:hidden",
            gapClassName,
          )}
          style={{ animationDuration: `${duration}s`, animationDirection: reverse ? "reverse" : "normal" }}
        >
          {children(copy)}
        </div>
      ))}
    </div>
  );
}

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/**
 * Giant kinetic type band. Drifts on its own and surges with scroll speed,
 * reversing direction when you scroll back up. Purely decorative.
 */
export function VelocityMarquee({
  words,
  baseVelocity = 2.5,
  className,
}: {
  words: string[];
  baseVelocity?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);
  const direction = useRef(-1);

  useAnimationFrame((_, delta) => {
    if (reduce) return;
    const f = factor.get();
    if (f < 0) direction.current = 1;
    else if (f > 0) direction.current = -1;
    let move = direction.current * baseVelocity * (delta / 1000);
    move += move * Math.abs(f);
    baseX.set(baseX.get() + move);
  });

  const run = (
    <span className="flex shrink-0 items-center">
      {words.map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={cn(
              "px-6 font-display text-6xl font-semibold leading-none tracking-tight md:text-8xl lg:text-[9rem]",
              i % 2 === 1 ? "text-transparent [-webkit-text-stroke:1.5px_hsl(var(--foreground))]" : "text-foreground",
            )}
          >
            {w}
          </span>
          <span className="px-2 text-4xl text-primary md:text-6xl">✦</span>
        </span>
      ))}
    </span>
  );

  return (
    <div aria-hidden className={cn("overflow-hidden whitespace-nowrap py-10 md:py-14", className)}>
      <motion.div className="flex w-max" style={{ x: reduce ? "-25%" : x }}>
        {run}
        {run}
        {run}
        {run}
      </motion.div>
    </div>
  );
}

// ── Tactile interactions ─────────────────────────────────────────────────────

/** Card that tilts toward the pointer in 3D with an accent glare. Mouse only. */
export function TiltCard({
  children,
  className,
  max = 7,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    ref.current.style.setProperty("--gx", `${px * 100}%`);
    ref.current.style.setProperty("--gy", `${py * 100}%`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1000 }}
      className={cn("group/tilt relative will-change-transform", className)}
    >
      {children}
      {glare && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-500 group-hover/tilt:opacity-100"
          style={{ background: "radial-gradient(420px circle at var(--gx, 50%) var(--gy, 50%), rgba(255, 255, 255, 0.35), transparent 55%)" }}
        />
      )}
    </motion.div>
  );
}

/** Pulls its child toward the pointer, then springs back. */
export function Magnetic({ children, strength = 0.35, className }: { children: ReactNode; strength?: number; className?: string }) {
  const reduce = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 220, damping: 15, mass: 0.4 });
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div onPointerMove={onMove} onPointerLeave={onLeave} style={{ x, y }} className={cn("inline-block", className)}>
      {children}
    </motion.div>
  );
}
