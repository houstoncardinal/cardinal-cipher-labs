import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { animate, motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Gauge, Layers, Zap } from "lucide-react";

/**
 * "Exploded build" hero visual: a website pulled apart into its layers —
 * code → wireframe → components → finished browser — floating in CSS 3D.
 * Real DOM (not WebGL) keeps every line of text crisp at any resolution.
 * Designed at a fixed 560×500 canvas and scaled to its container.
 */

const DESIGN_W = 560;
const DESIGN_H = 500;
const PLANE_W = 340;
const PLANE_H = 236;
const LAYER_GAP = 80;

// ── Code layer content ───────────────────────────────────────────────────────
type Tok = [string, string];
const C = { kw: "#FDA4AF", fn: "#7DD3FC", str: "#A7F3D0", tag: "#FDE68A", txt: "#CBD5E1", dim: "#64748B" };
const codeLines: Tok[][] = [
  [["import", C.kw], [" { Hero, Metrics } ", C.txt], ["from", C.kw], [' "@/ui"', C.str]],
  [],
  [["export default function ", C.kw], ["Home", C.fn], ["() {", C.txt]],
  [["  return", C.kw], [" (", C.txt]],
  [["    <", C.txt], ["Layout", C.tag], [" theme", C.fn], ["=", C.txt], ['"enterprise"', C.str], [">", C.txt]],
  [["      <", C.txt], ["Hero", C.tag], [" title", C.fn], ["=", C.txt], ['"Built to scale"', C.str], [" />", C.txt]],
  [["      <", C.txt], ["Metrics", C.tag], [" live", C.fn], [" />", C.txt]],
  [["      <", C.txt], ["CTA", C.tag], [" href", C.fn], ["=", C.txt], ['"/contact"', C.str], [" />", C.txt]],
  [["    </", C.txt], ["Layout", C.tag], [">", C.txt]],
  [["  );", C.txt]],
  [["}", C.txt]],
];

function useTypedLines(total: number, enabled: boolean) {
  const [count, setCount] = useState(enabled ? 0 : total);
  useEffect(() => {
    if (!enabled) return;
    let n = 0;
    const id = window.setInterval(() => {
      n = n >= total + 6 ? 0 : n + 1; // pause on the finished file, then retype
      setCount(Math.min(n, total));
    }, 260);
    return () => window.clearInterval(id);
  }, [total, enabled]);
  return count;
}

// ── Building blocks ──────────────────────────────────────────────────────────
function Plane({ z, children, className = "", style }: { z: MotionValue<number>; children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <motion.div
      className={`absolute left-0 top-0 ${className}`}
      style={{ width: PLANE_W, height: PLANE_H, z, transformStyle: "preserve-3d", ...style }}
    >
      {children}
    </motion.div>
  );
}

/** Dashed vertical connector at a plane corner, rising through the stack. */
function Pillar({ x, y, height }: { x: number; y: number; height: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute w-px"
      style={{
        left: x,
        top: y,
        height,
        transformOrigin: "top",
        transform: "rotateX(90deg)",
        backgroundImage: "linear-gradient(to bottom, hsl(var(--primary) / 0.55) 50%, transparent 50%)",
        backgroundSize: "1px 6px",
      }}
    />
  );
}

function Chip({ children, className, delay, reduce }: { children: ReactNode; className: string; delay: number; reduce: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -6, 0] }}
      transition={
        reduce
          ? { duration: 0.4, delay }
          : { opacity: { duration: 0.5, delay }, y: { duration: 5, delay, repeat: Infinity, ease: "easeInOut" } }
      }
      className={`absolute z-10 flex items-center gap-2 border border-border bg-background/95 px-3 py-2 text-[12px] font-medium text-foreground shadow-[0_12px_30px_-14px_rgba(15,23,42,0.4)] ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function HeroBuildStack() {
  const reduce = !!useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Fit the fixed design canvas to the column width
  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => setScale(Math.min(entry.contentRect.width / DESIGN_W, 1.25)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // spread: 0 = layers collapsed flat, 1 = fully exploded
  const spread = useMotionValue(reduce ? 1 : 0);
  const drift = useMotionValue(0);
  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    const run = async () => {
      await new Promise((r) => setTimeout(r, 450));
      await animate(spread, 1, { type: "spring", stiffness: 60, damping: 14 });
      if (cancelled) return;
      animate(spread, [1, 0.82, 1], { duration: 7, repeat: Infinity, ease: "easeInOut" });
    };
    run();
    const d = animate(drift, [0, 1, 0], { duration: 14, repeat: Infinity, ease: "easeInOut" });
    return () => {
      cancelled = true;
      spread.stop();
      d.stop();
    };
  }, [reduce, spread, drift]);

  const zFor = (i: number) => (v: number) => i * LAYER_GAP * v;
  const z0 = useTransform(spread, zFor(0));
  const z1 = useTransform(spread, zFor(1));
  const z2 = useTransform(spread, zFor(2));
  const z3 = useTransform(spread, zFor(3));
  const pillarH = useTransform(spread, (v) => 3 * LAYER_GAP * v);
  const rotZ = useTransform(drift, [0, 1], [-38, -32]);
  const bob = useTransform(drift, [0, 1], [0, -10]);

  // Pointer tilt
  const tiltX = useSpring(0, { stiffness: 80, damping: 18 });
  const tiltY = useSpring(0, { stiffness: 80, damping: 18 });
  const onMove = (e: React.PointerEvent) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    tiltY.set(((e.clientX - r.left) / r.width - 0.5) * 12);
    tiltX.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const onLeave = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  const typed = useTypedLines(codeLines.length, !reduce);

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto w-full max-w-[640px]"
      style={{ height: DESIGN_H * scale }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      role="img"
      aria-label="Animated 3D illustration of a website being built in layers: code, wireframe, components, and the finished site."
    >
      <div className="absolute left-1/2 top-0 origin-top" style={{ width: DESIGN_W, height: DESIGN_H, transform: `translateX(-50%) scale(${scale})` }}>
        {/* Ambient glow */}
        <div aria-hidden className="pointer-events-none absolute inset-10 rounded-full bg-[radial-gradient(closest-side,hsl(var(--primary)/0.14),transparent)] blur-2xl" />

        <div className="absolute inset-0" style={{ perspective: 1600 }}>
          <motion.div className="absolute inset-0" style={{ rotateX: tiltX, rotateY: tiltY, y: bob, transformStyle: "preserve-3d" }}>
            {/* Isometric stage */}
            <motion.div
              className="absolute"
              style={{
                left: (DESIGN_W - PLANE_W) / 2,
                top: (DESIGN_H - PLANE_H) / 2 + 105,
                width: PLANE_W,
                height: PLANE_H,
                rotateX: 56,
                rotateZ: rotZ,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Floor shadow */}
              <div aria-hidden className="absolute -inset-6 bg-ink/25 blur-2xl" style={{ transform: "translateZ(-30px)" }} />

              {/* Layer 0 — code */}
              <Plane z={z0} className="overflow-hidden border border-white/10 bg-ink shadow-[0_30px_60px_-20px_rgba(15,23,42,0.6)]">
                <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                  <span className="ml-2 font-mono text-[9px] text-white/45">app/page.tsx</span>
                </div>
                <pre className="px-3 py-2 font-mono text-[9.5px] leading-[15px]">
                  {codeLines.slice(0, typed).map((line, i) => (
                    <div key={i} className="flex">
                      <span className="mr-3 w-3 select-none text-right" style={{ color: C.dim }}>{i + 1}</span>
                      {line.map(([t, color], j) => <span key={j} style={{ color }}>{t}</span>)}
                      {i === typed - 1 && !reduce && <span className="ml-0.5 inline-block h-[11px] w-[5px] animate-pulse bg-white/70" />}
                    </div>
                  ))}
                </pre>
              </Plane>

              {/* Layer 1 — wireframe & grid */}
              <Plane z={z1} className="border border-dashed border-primary/50">
                <div className="absolute inset-0 grid grid-cols-12 gap-1 px-2 opacity-60">
                  {Array.from({ length: 12 }).map((_, i) => <div key={i} className="bg-primary/[0.06]" />)}
                </div>
                <div className="absolute left-3 right-3 top-3 h-4 border border-dashed border-foreground/40" />
                <div className="absolute left-3 top-10 h-[92px] w-[150px] border border-dashed border-foreground/40" />
                <svg className="absolute right-3 top-10 h-[92px] w-[150px]" viewBox="0 0 150 92" preserveAspectRatio="none" aria-hidden>
                  <rect x="0.5" y="0.5" width="149" height="91" fill="none" stroke="currentColor" strokeDasharray="3 3" className="text-foreground/40" />
                  <path d="M0 0 L150 92 M150 0 L0 92" stroke="currentColor" className="text-foreground/25" />
                </svg>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute top-[150px] h-[60px] border border-dashed border-foreground/40" style={{ left: 12 + i * 107, width: 99 }} />
                ))}
                <span className="absolute -top-5 left-0 font-mono text-[9px] font-semibold text-primary">1280 × 720</span>
              </Plane>

              {/* Layer 2 — components */}
              <Plane z={z2}>
                <div className="absolute left-3 top-10 h-[92px] w-[150px] border border-border bg-background p-3 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.35)]">
                  <div className="h-2 w-16 bg-primary" />
                  <div className="mt-2 h-2.5 w-[120px] bg-foreground/85" />
                  <div className="mt-1.5 h-2.5 w-[90px] bg-foreground/85" />
                  <div className="mt-2 h-1.5 w-[110px] bg-muted-foreground/30" />
                  <div className="mt-3 h-4 w-14 bg-ink" />
                </div>
                <div className="absolute right-3 top-10 flex h-[92px] w-[150px] items-end gap-1.5 border border-border bg-background p-3 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.35)]">
                  {[38, 55, 46, 70, 62, 84, 92].map((h, i) => (
                    <motion.div
                      key={i}
                      className={i === 6 ? "flex-1 bg-primary" : "flex-1 bg-foreground/80"}
                      initial={{ height: reduce ? `${h}%` : "10%" }}
                      animate={reduce ? undefined : { height: [`${h * 0.55}%`, `${h}%`, `${h * 0.8}%`, `${h}%`] }}
                      transition={{ duration: 4.5, delay: 0.8 + i * 0.08, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
                {[0, 1, 2].map((i) => (
                  <div key={i} className="absolute top-[150px] flex h-[60px] flex-col justify-between border border-border bg-background p-2.5 shadow-[0_14px_30px_-12px_rgba(15,23,42,0.35)]" style={{ left: 12 + i * 107, width: 99 }}>
                    <div className="h-3 w-3 bg-primary/90" />
                    <div>
                      <div className="h-1.5 w-14 bg-foreground/80" />
                      <div className="mt-1 h-1 w-16 bg-muted-foreground/30" />
                    </div>
                  </div>
                ))}
              </Plane>

              {/* Layer 3 — finished browser (glass) */}
              <Plane z={z3} className="border border-foreground/15 bg-background/35 shadow-[0_40px_80px_-30px_rgba(15,23,42,0.45)]">
                <div className="flex items-center gap-1.5 border-b border-foreground/10 bg-background/90 px-3 py-[7px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FEBC2E]" />
                  <span className="h-1.5 w-1.5 rounded-full bg-[#28C840]" />
                  <div className="ml-3 flex h-3.5 flex-1 items-center bg-secondary px-2 font-mono text-[8px] text-muted-foreground">
                    https://yourcompany.com
                  </div>
                </div>
                <motion.div
                  aria-hidden
                  className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-primary/15 to-transparent"
                  initial={{ top: "10%" }}
                  animate={reduce ? undefined : { top: ["10%", "85%", "10%"] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </Plane>

              {/* Corner connectors */}
              <Pillar x={0} y={0} height={pillarH} />
              <Pillar x={PLANE_W} y={0} height={pillarH} />
              <Pillar x={0} y={PLANE_H} height={pillarH} />
              <Pillar x={PLANE_W} y={PLANE_H} height={pillarH} />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating status chips (2D, above the scene) */}
        <Chip className="left-2 top-8" delay={1.2} reduce={reduce}>
          <Layers className="h-3.5 w-3.5 text-primary" /> Design system · 48 components
        </Chip>
        <Chip className="right-0 top-[44%]" delay={1.5} reduce={reduce}>
          <Gauge className="h-3.5 w-3.5 text-emerald-600" /> Lighthouse <span className="font-semibold text-emerald-600">98</span>
        </Chip>
        <Chip className="bottom-0 left-0" delay={1.8} reduce={reduce}>
          <span className="relative flex h-2 w-2">
            {!reduce && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Deployed to edge · <Zap className="h-3 w-3 text-primary" /> 38 ms
        </Chip>
      </div>
    </div>
  );
}
