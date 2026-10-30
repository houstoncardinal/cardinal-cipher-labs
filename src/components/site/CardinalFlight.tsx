import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Bird = { id: number; dir: 1 | -1; top: number; size: number; far: boolean; dur: number; lift: number; phase: number };

/**
 * Now and then a cardinal (sometimes two, sometimes a smaller one in the distance) flies across
 * the page in bursts of flaps and glides. Purely decorative: fixed, behind the header, never
 * intercepts the pointer, pauses while the tab is hidden, and is off for reduced motion.
 */
export function CardinalFlight() {
  const reduce = useReducedMotion();
  const [birds, setBirds] = useState<Bird[]>([]);
  const seq = useRef(0);

  const launch = useCallback(() => {
    const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
    const top = 14 + Math.random() * 50;
    const count = Math.random() < 0.3 ? 2 : 1;
    const next: Bird[] = Array.from({ length: count }, (_, i) => {
      const far = i === 0 && Math.random() < 0.25;
      return {
        id: ++seq.current,
        dir,
        top: top + i * (6 + Math.random() * 6),
        size: far ? 30 + Math.random() * 10 : 52 + Math.random() * 22,
        far,
        dur: (far ? 15 : 10) + Math.random() * 4 + i * 0.8,
        lift: (Math.random() - 0.5) * 120,
        phase: i * 0.7 + Math.random() * 0.4,
      };
    });
    setBirds((b) => [...b, ...next]);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let timer = window.setTimeout(function loop() {
      if (!document.hidden) launch();
      timer = window.setTimeout(loop, 22000 + Math.random() * 26000);
    }, 5000 + Math.random() * 4000);
    return () => clearTimeout(timer);
  }, [reduce, launch]);

  if (reduce) return null;
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[44] overflow-hidden">
      {birds.map((b) => (
        <motion.div
          key={b.id}
          className="absolute left-0"
          style={{ top: `${b.top}%`, opacity: b.far ? 0.55 : 1, filter: b.far ? "blur(0.6px)" : undefined }}
          initial={{ x: b.dir === 1 ? "-14vw" : "110vw", y: 0, rotate: 0 }}
          animate={{
            x: b.dir === 1 ? "110vw" : "-14vw",
            y: [0, -30 + b.lift * 0.3, 10 + b.lift * 0.6, -20 + b.lift, b.lift * 0.8],
            rotate: [0, -6 * b.dir, 3 * b.dir, -4 * b.dir, 0],
          }}
          transition={{ duration: b.dur, delay: b.phase, ease: [0.45, 0.05, 0.55, 0.95] }}
          onAnimationComplete={() => setBirds((all) => all.filter((x) => x.id !== b.id))}
        >
          <div style={{ transform: b.dir === -1 ? "scaleX(-1)" : undefined }}>
            <FlyingCardinal size={b.size} delay={b.phase} />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/** Flat, geometric cardinal in side view (matches the brand illustration's palette). */
function FlyingCardinal({ size, delay }: { size: number; delay: number }) {
  const wing = { animationDelay: `${delay}s` };
  return (
    <svg viewBox="0 0 120 80" width={size} height={(size * 80) / 120} className="cc-bird overflow-visible">
      {/* far wing */}
      <path className="cc-wing cc-wing-far" style={wing} d="M70 40C68 25 61 12 50 3l-4 6-5-4-1 7-7-1 3 7-6 1 6 6c5 6 11 11 15 15z" fill="#6f1221" />
      {/* tail */}
      <path d="M38 42 6 35l7 9-8 11 33-5z" fill="#861828" />
      {/* body + belly */}
      <path d="M32 45c10-14 38-17 54-9 6 4 5 14-4 18-14 6-37 5-50-9z" fill="#a21c2f" />
      <path d="M52 51c12 7 27 5 34-5-2 8-12 13-25 12-6-1-9-3-9-7z" fill="#bb2340" />
      {/* crest (swept back), head, mask, eye, beak */}
      <path d="M78 30 64 15l23 10z" fill="#c42a42" />
      <circle cx="88" cy="35" r="9.5" fill="#a21c2f" />
      <path d="M87 30.5c5-3.5 12 0 12 6-2 5-7 7-12 3.5-1.6-2.7-1.6-7 0-9.5z" fill="#111a2e" />
      <circle cx="91" cy="34" r="1.5" fill="#fff" />
      <path d="M97.5 32.5 109 37l-11.5 4.2z" fill="#e86f15" />
      {/* near wing: primaries with a notched trailing edge, lighter coverts on top */}
      <path className="cc-wing" style={wing} d="M72 41C70 24 62 9 48 0l-4 7-6-4-1 8-8-1 3 8-7 1 7 7c6 6 13 11 18 15z" fill="#8a1628" />
      <path className="cc-wing" style={wing} d="M72 41c-1-10-5-19-12-26-2 7-4 12-9 16 5 3 9 6 11 10z" fill="#a21c2f" />
        </svg>
  );
}
