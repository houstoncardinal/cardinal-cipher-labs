import { useRef } from "react";
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "framer-motion";
import { DraftingCompass, FileCheck2, MessagesSquare, Rocket, type LucideIcon } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

const steps: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: MessagesSquare, title: "Free consultation", description: "We learn your business, goals, constraints, and what success looks like to your leadership." },
  { icon: FileCheck2, title: "Clear plan & price", description: "You receive a written scope, timeline, and investment before any work begins." },
  { icon: DraftingCompass, title: "Design & delivery", description: "We work in short cycles with regular reviews, so you see progress and approve each step." },
  { icon: Rocket, title: "Launch & improve", description: "We launch, measure results against your goals, and keep optimizing with ongoing support." },
];
const n = steps.length;

function Step({ step, i, progress }: { step: (typeof steps)[number]; i: number; progress: MotionValue<number> }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  // The ring warms to the accent as the line reaches it; the connector fills toward the next step
  const lit = useTransform(progress, [i / n, i / n + 0.06], [0, 1]);
  const ring = useTransform(lit, (v) => `hsl(var(--primary) / ${0.15 + v * 0.5})`);
  const fill = useTransform(progress, [i / n + 0.04, (i + 1) / n], [0, 1]);
  const last = i === n - 1;

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }}
      className="group relative flex gap-5 pb-9 last:pb-0 lg:flex-col lg:items-center lg:gap-0 lg:px-5 lg:pb-0 lg:text-center"
    >
      {/* Connector to the next step: vertical on phones/tablets, horizontal on desktop */}
      {!last && (
        <span aria-hidden className="absolute bottom-0 left-[27px] top-[60px] w-px bg-border lg:bottom-auto lg:left-[calc(50%+40px)] lg:top-8 lg:h-px lg:w-[calc(100%-80px)]">
          <motion.span className="absolute inset-0 origin-top bg-primary lg:hidden" style={{ scaleY: fill }} />
          <motion.span className="absolute inset-0 hidden origin-left bg-primary lg:block" style={{ scaleX: fill }} />
        </span>
      )}

      {/* Icon in a hairline ring with an orbiting accent */}
      <div className="relative h-14 w-14 shrink-0 lg:h-16 lg:w-16">
        <motion.span aria-hidden className="absolute inset-0 rounded-full border bg-background transition-transform duration-700 group-hover:scale-110" style={{ borderColor: ring }} />
        <motion.span aria-hidden style={{ opacity: lit }} className="absolute inset-0 animate-[spin_6s_linear_infinite] motion-reduce:animate-none">
          <span className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary" />
        </motion.span>
        <span aria-hidden className="absolute inset-[5px] rounded-full border border-dashed border-foreground/10 opacity-0 transition-opacity duration-700 group-hover:animate-[spin_12s_linear_infinite] group-hover:opacity-100 motion-reduce:hidden" />
        <step.icon
          aria-hidden
          strokeWidth={1.15}
          style={{ ["--draw-delay" as string]: `${0.2 + i * 0.18}s` }}
          className={cn(
            "absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-foreground transition-colors duration-500 group-hover:text-primary lg:h-7 lg:w-7",
            !reduce && "icon-draw",
            !reduce && inView && "is-drawn",
          )}
        />
      </div>

      <div className="min-w-0 pt-1 lg:mt-6 lg:pt-0">
        <p className="font-display text-xs font-semibold tabular-nums tracking-[0.2em] text-primary">0{i + 1}</p>
        <h3 className="mt-1.5 text-lg font-semibold text-foreground lg:text-xl">{step.title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground lg:mx-auto lg:max-w-[16rem]">{step.description}</p>
      </div>
    </motion.li>
  );
}

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const progress = reduce ? scrollYProgress : smooth;

  return (
    <div className="border-t border-border bg-secondary py-14 lg:py-20">
      <Container>
        <SectionHeader
          split
          eyebrow="How we work"
          title="From first call to launch in four clear steps"
          description="Every engagement follows the same disciplined process, so you always know what happens next. Need it fast? Many projects can be delivered in 72 hours."
          className="mb-10 lg:mb-14"
        />
        <ol ref={ref} className="relative grid lg:grid-cols-4">
          {steps.map((s, i) => (
            <Step key={s.title} step={s} i={i} progress={progress} />
          ))}
        </ol>
      </Container>
    </div>
  );
}
