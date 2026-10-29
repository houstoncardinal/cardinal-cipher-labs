import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { FileText, MessageCircle, PenTool, Rocket, type LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: MessageCircle, title: "Free consultation", description: "We learn your business, goals, constraints, and what success looks like to your leadership." },
  { icon: FileText, title: "Clear plan & price", description: "You receive a written scope, timeline, and investment before any work begins." },
  { icon: PenTool, title: "Design & delivery", description: "We work in short cycles with regular reviews, so you see progress and approve each step." },
  { icon: Rocket, title: "Launch & improve", description: "We launch, measure results against your goals, and keep optimizing with ongoing support." },
];

function Step({ step, i, progress }: { step: (typeof steps)[number]; i: number; progress: MotionValue<number> }) {
  // The node lights as the drawn line reaches it
  const at = i / steps.length;
  const lit = useTransform(progress, [at, at + 0.08], [0, 1]);
  const ring = useTransform(lit, [0, 1], [0.6, 1]);
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
      className="group relative pl-10 lg:pl-0 lg:pt-10"
    >
      <span
        aria-hidden
        className="absolute left-0 top-[31px] z-10 sm:top-[35px] flex h-[18px] w-[18px] -translate-x-1/2 items-center justify-center rounded-full border border-border bg-background lg:left-8 lg:top-0 lg:-translate-y-1/2"
      >
        <motion.span className="h-2.5 w-2.5 rounded-full bg-primary" style={{ opacity: lit, scale: ring }} />
        <motion.span className="absolute inset-[-6px] rounded-full border border-primary/40" style={{ opacity: lit, scale: ring }} />
      </span>

      <div className="relative h-full overflow-hidden border border-border bg-background p-5 transition-all sm:p-6 duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_30px_60px_-35px_rgba(15,23,42,0.4)] lg:p-7">
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-3 hidden select-none font-display text-[4.5rem] sm:block font-semibold leading-none text-transparent transition-all duration-700 [-webkit-text-stroke:1px_hsl(var(--border))] group-hover:-translate-y-1 group-hover:[-webkit-text-stroke-color:hsl(var(--foreground)/0.25)]"
        >
          {i + 1}
        </span>
        <div className="relative flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center bg-ink text-ink-foreground transition-transform duration-500 group-hover:scale-105">
            <step.icon className="h-[18px] w-[18px]" strokeWidth={1.6} />
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Step {i + 1}</p>
        </div>
        <h3 className="relative mt-4 text-xl font-semibold text-foreground">{step.title}</h3>
        <p className="relative mt-2.5 text-[15px] leading-relaxed text-muted-foreground">{step.description}</p>
        <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-foreground transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </div>
    </motion.li>
  );
}

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const progress = reduce ? scrollYProgress : smooth;

  return (
    <div className="border-t border-border bg-secondary py-14 lg:py-24">
      <Container>
        <SectionHeader
          split
          eyebrow="How we work"
          title="From first call to launch in four clear steps"
          description="Every engagement follows the same disciplined process, so you always know what happens next. Need it fast? Many projects can be delivered in 72 hours."
        />
        <ol ref={ref} className="relative grid gap-5 lg:grid-cols-4 lg:gap-5">
          {/* Track + the line that draws itself with scroll: vertical on small screens, horizontal on large */}
          <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-border lg:bottom-auto lg:right-0 lg:h-px lg:w-auto" />
          <motion.span aria-hidden className="absolute bottom-0 left-0 top-0 w-px origin-top bg-primary lg:hidden" style={{ scaleY: progress }} />
          <motion.span aria-hidden className="absolute left-0 right-0 top-0 hidden h-px origin-left bg-primary lg:block" style={{ scaleX: progress }} />
          {steps.map((s, i) => (
            <Step key={s.title} step={s} i={i} progress={progress} />
          ))}
        </ol>
      </Container>
    </div>
  );
}
