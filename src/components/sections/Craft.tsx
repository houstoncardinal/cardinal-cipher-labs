import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useMotionValue, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { RevealText } from "@/components/site/motion";
import { SCULPTURE_ANCHORS, SystemSculpture } from "@/components/site/three";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const CHAPTER_MS = 6200;

const chapters = [
  {
    key: "Understand",
    title: "Understand the business behind the brief.",
    body: "We map your goals, customer journey, and operational bottlenecks before design begins, so the solution solves the right problem.",
    tags: ["Goals", "Customers", "Bottlenecks"],
  },
  {
    key: "Map",
    title: "Connect the steps that move work forward.",
    body: "We connect lead capture, handoffs, follow-up, scheduling, and payment into a clear flow—with repetitive work automated.",
    tags: ["Lead routing", "Follow-up", "Scheduling"],
  },
  {
    key: "Build",
    title: "Build the tools your team will actually use.",
    body: "Your website, CRM, and client portal work as one system, designed around the way your team already operates.",
    tags: ["Websites", "CRMs", "Portals"],
  },
  {
    key: "Convert",
    title: "Turn a better experience into measurable growth.",
    body: "Clearer journeys help more visitors become clients, while better-connected systems make every inquiry easier to serve.",
    tags: ["More inquiries", "Less manual work", "Better retention"],
  },
];

/**
 * "How we think": a normal-height section (no scroll pinning) where the story plays in place.
 * While the section is on screen, chapters advance on their own with a visible progress line;
 * visitors can pick any chapter, hover to pause, or use the play/pause control. The three.js
 * scene transitions between forms on each chapter change. All copy is in the DOM for SEO.
 */
export function Craft() {
  const ref = useRef<HTMLElement>(null);
  const labels = useRef<Record<string, HTMLElement | null>>({});
  const reduce = useReducedMotion();
  const inView = useInView(ref, { amount: 0.45 });
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [paused, setPaused] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const progress = useMotionValue(0);
  const scene = useMotionValue(0); // 0 = drifting dust until the section is first seen

  const playing = inView && !hovering && !paused && !reduce;

  useEffect(() => {
    if (inView && !revealed) setRevealed(true);
  }, [inView, revealed]);

  useEffect(() => {
    scene.set(revealed ? active + 1 : 0);
  }, [active, revealed, scene]);

  // Autoplay clock: fills the active chapter's line, then advances
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const next = progress.get() + (now - last) / CHAPTER_MS;
      last = now;
      if (next >= 1) {
        progress.set(0);
        setActive((a) => (a + 1) % chapters.length);
      } else progress.set(next);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, progress]);

  const select = (i: number) => {
    progress.set(0);
    setActive(i);
  };

  return (
    <section
      ref={ref}
      id="craft"
      aria-labelledby="craft-title"
      onPointerEnter={(e) => e.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="relative overflow-hidden border-t border-border bg-background py-8 sm:py-10 lg:py-12"
    >
      {/* Phones: headline → scene → chapters. Desktop: headline + chapters left, scene right. */}
      <Container className="grid gap-3 sm:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] lg:gap-x-10 lg:gap-y-0">
        <div className="lg:col-start-1 lg:row-start-1">
          <Eyebrow className="mb-2">How we think</Eyebrow>
          <h2 id="craft-title" className="font-display text-[1.65rem] leading-[1.08] text-foreground md:text-4xl lg:text-[2.35rem]">
            <RevealText text="Not just websites." />{" "}
            <span className="text-primary">
              <RevealText text="Systems" delay={0.1} />
            </span>{" "}
            <RevealText text="that make your business easier to run." delay={0.15} />
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            One connected digital system that brings in more clients and makes the work behind every sale easier.
          </p>
        </div>

        {/* Scene */}
        <div className="relative aspect-[16/9] w-full self-center sm:aspect-[16/8] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-[16/11]">
          <SystemSculpture scene={scene} labels={labels} />
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {SCULPTURE_ANCHORS.map((a) => (
              <div
                key={a.id}
                ref={(el) => {
                  labels.current[a.id] = el;
                }}
                className="absolute left-0 top-0 opacity-0 will-change-transform"
              >
                <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/90 py-1 pl-2 pr-3 text-[11px] font-semibold text-foreground shadow-[0_10px_28px_-14px_rgba(15,23,42,0.45)] md:text-xs">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50 motion-reduce:hidden" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  {a.label}
                </span>
              </div>
            ))}
          </div>
          {/* Which chapter is showing */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="rounded-full border border-border bg-background/90 px-3 py-1 font-display text-xs font-semibold tabular-nums text-foreground backdrop-blur"
              >
                0{active + 1} / 0{chapters.length} · {chapters[active].key}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <div className="lg:col-start-1 lg:row-start-2">
          <ol className="border-t border-border lg:mt-4" aria-label="How we work, in four steps">
            {chapters.map((c, i) => {
              const on = i === active;
              return (
                <li key={c.key} className="border-b border-border">
                  <button type="button" onClick={() => select(i)} aria-expanded={on} aria-controls={`craft-panel-${i}`} className="group flex w-full items-baseline gap-3 py-2 text-left">
                    <span className={cn("font-display text-xs font-semibold tabular-nums transition-colors", on ? "text-primary" : "text-muted-foreground")}>0{i + 1}</span>
                    <span className={cn("min-w-0 flex-1 truncate font-display text-base font-semibold transition-colors md:text-lg", on ? "text-foreground" : "text-muted-foreground group-hover:text-foreground")}>
                      {c.key}
                      <span className={cn("ml-2 hidden font-sans text-sm font-normal sm:inline", on ? "text-muted-foreground" : "text-muted-foreground/70")}>— {c.title}</span>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        id={`craft-panel-${i}`}
                        key="panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <div className="pb-2 pl-7">
                          <p className="font-display text-base font-semibold leading-snug text-foreground sm:hidden">{c.title}</p>
                          <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground sm:mt-0">{c.body}</p>
                          <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="What this step covers">
                            {c.tags.map((t, k) => (
                              <motion.li
                                key={t}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, ease: EASE, delay: 0.15 + k * 0.05 }}
                                className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-foreground"
                              >
                                {t}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Progress line for the playing chapter */}
                  <span aria-hidden className="relative -mt-px block h-0.5 overflow-hidden">
                    {on && <motion.span className="absolute inset-0 origin-left bg-primary" style={{ scaleX: reduce ? 1 : progress }} />}
                  </span>
                </li>
              );
            })}
          </ol>

          {/* Always-visible next step */}
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              to="/contact"
              className="group/cta inline-flex h-10 items-center gap-2 bg-ink px-4 text-sm font-semibold text-ink-foreground transition-colors hover:bg-primary"
            >
              Map your system with us <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" />
            </Link>
            <Link to="/portfolio" className="text-sm font-semibold text-foreground underline-offset-4 hover:text-primary hover:underline">
              See systems we've built
            </Link>
            {!reduce && (
              <button
                type="button"
                onClick={() => setPaused((p) => !p)}
                aria-label={paused ? "Play the steps" : "Pause the steps"}
                className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {paused ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
                {paused ? "Play" : hovering ? "Paused" : "Pause"}
              </button>
            )}
          </div>
          <p className="mt-2 text-[11px] text-muted-foreground">Free consultation · Response within 24 hours</p>
        </div>
      </Container>
    </section>
  );
}
