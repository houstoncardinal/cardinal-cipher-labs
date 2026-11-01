import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Fly = { x: number; y: number; vx: number; vy: number; r: number; phase: number; speed: number; color: string };

// Warm firefly glow, with the occasional brand crimson spark
const COLORS = ["255, 226, 122", "255, 236, 160", "255, 186, 92", "214, 255, 140", "226, 71, 93"];

/**
 * Glowing fireflies drifting and blinking on a canvas, from Hunain's earliest memory of being
 * drawn to color and light. They lean gently toward the pointer. Fills its parent (which needs
 * `relative`), pauses offscreen, and renders a still scene for reduced motion.
 */
export function Fireflies({ className, density = 1 }: { className?: string; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let flies: Fly[] = [];
    let raf = 0;
    let visible = true;
    const pointer = { x: -9999, y: -9999 };

    const seed = () => {
      const count = Math.round(Math.min(60, Math.max(14, (w * h) / 16000)) * density);
      flies = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1.2 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 1.2,
        color: COLORS[Math.random() < 0.12 ? 4 : Math.floor(Math.random() * 4)],
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const f of flies) {
        if (!reduce) {
          // Wander, drift toward the pointer when close, wrap at the edges
          f.vx += (Math.random() - 0.5) * 0.03;
          f.vy += (Math.random() - 0.5) * 0.03;
          const dx = pointer.x - f.x;
          const dy = pointer.y - f.y;
          const d = Math.hypot(dx, dy);
          if (d < 160 && d > 1) {
            f.vx += (dx / d) * 0.02;
            f.vy += (dy / d) * 0.02;
          }
          f.vx = Math.max(-0.6, Math.min(0.6, f.vx * 0.99));
          f.vy = Math.max(-0.6, Math.min(0.6, f.vy * 0.99));
          f.x = (f.x + f.vx + w) % w;
          f.y = (f.y + f.vy + h) % h;
        }
        const pulse = reduce ? 0.8 : Math.max(0, Math.sin(t * 0.001 * f.speed + f.phase)) ** 2;
        if (pulse < 0.02) continue;
        const glow = f.r * 7;
        const g = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, glow);
        g.addColorStop(0, `rgba(${f.color}, ${0.9 * pulse})`);
        g.addColorStop(0.25, `rgba(${f.color}, ${0.35 * pulse})`);
        g.addColorStop(1, `rgba(${f.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(f.x, f.y, glow, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (t: number) => {
      draw(t);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    };

    resize();
    draw(performance.now());
    if (!reduce) raf = requestAnimationFrame(loop);

    const ro = new ResizeObserver(() => {
      resize();
      if (reduce) draw(0);
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible && !reduce) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    const move = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.y = e.clientY - r.top;
    };
    const leave = () => {
      pointer.x = pointer.y = -9999;
    };
    const host = canvas.parentElement;
    host?.addEventListener("pointermove", move);
    host?.addEventListener("pointerleave", leave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      host?.removeEventListener("pointermove", move);
      host?.removeEventListener("pointerleave", leave);
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}
