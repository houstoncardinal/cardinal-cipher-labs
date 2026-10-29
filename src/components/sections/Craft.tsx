import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Container, Eyebrow } from "@/components/site/primitives";
import { SCULPTURE_ANCHORS, SystemSculpture } from "@/components/site/three";
import { scrollToY } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const chapters = [
  {
    key: "Understand",
    title: "We learn your business before we design anything.",
    body: "How you operate, where work slows down, what your customers need, and what growth looks like to you — mapped before a single pixel is placed.",
    tags: ["Operations", "Workflow", "Goals", "Customers"],
  },
  {
    key: "Map",
    title: "Then we map the workflow behind it.",
    body: "Every inquiry, hand-off, follow-up, and payment connected into one clear flow — with the repetitive work automated away.",
    tags: ["Lead routing", "Automated follow-ups", "Scheduling", "Invoicing"],
  },
  {
    key: "Build",
    title: "We build the system, not just the site.",
    body: "Custom websites, CRMs, client portals, and platforms engineered around the way your team actually works.",
    tags: ["Websites", "CRMs", "Client portals", "Platforms"],
  },
  {
    key: "Convert",
    title: "So every visitor gets a powerful experience.",
    body: "Faster for your team, clearer for your customers, and designed to turn more visitors into clients — and keep them coming back.",
    tags: ["Efficient", "High-converting", "Informative", "Memorable"],
  },
];

// Scroll windows: a short intro, then four chapters
const INTRO_END = 0.12;
const WINDOWS: [number, number][] = [
  [0.13, 0.34],
  [0.34, 0.55],
  [0.55, 0.76],
  [0.76, 1],
];
// Sculpture state per scroll position: each form holds through its chapter and morphs across the boundaries
const MORPH_IN = [0, 0.1, 0.16, 0.31, 0.37, 0.52, 0.58, 0.73, 0.79, 1];
const MORPH_OUT = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

/** One layer of a chapter (title, body, tags), offset by `lag` so the layers arrive in sequence. */
function useLayer(progress: MotionValue<number>, i: number, lag: number) {
  const [s, e] = WINDOWS[i];
  const last = i === WINDOWS.length - 1;
  const range = [s + lag, s + 0.05 + lag, last ? 2 : e - 0.05, last ? 3 : e];
  return {
    opacity: useTransform(progress, range, [0, 1, 1, last ? 1 : 0]),
    y: useTransform(progress, range, [36 + lag * 400, 0, 0, last ? 0 : -36]),
    filter: useTransform(progress, range, ["blur(10px)", "blur(0px)", "blur(0px)", last ? "blur(0px)" : "blur(10px)"]),
  };
}

function Chapter({ c, i, progress }: { c: (typeof chapters)[number]; i: number; progress: MotionValue<number> }) {
  const last = i === chapters.length - 1;
  // Title, body, and tags arrive in layers for depth
  const title = useLayer(progress, i, 0);
  const body = useLayer(progress, i, 0.012);
  const tags = useLayer(progress, i, 0.024);
  const pointerEvents = useTransform(title.opacity, (v) => (v > 0.6 ? "auto" : "none"));

  return (
    <motion.div style={{ pointerEvents }} className="absolute inset-x-0 top-0">
      <motion.p style={title} className="font-display text-sm font-semibold text-primary">
        0{i + 1} — {c.key}
      </motion.p>
      <motion.h3 style={title} className="mt-3 font-display text-[1.9rem] leading-[1.12] text-foreground md:text-5xl xl:text-[3.4rem]">
        {c.title}
      </motion.h3>
      <motion.p style={body} className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:mt-5 md:text-lg">
        {c.body}
      </motion.p>
      <motion.ul style={tags} className="mt-5 flex flex-wrap gap-2">
        {c.tags.map((t) => (
          <li key={t} className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {t}
          </li>
        ))}
        {last && (
          <li>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1 text-xs font-semibold text-ink-foreground transition-colors hover:bg-primary"
            >
              Map your system with us <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </li>
        )}
      </motion.ul>
    </motion.div>
  );
}

function NavItem({ i, progress, onSelect }: { i: number; progress: MotionValue<number>; onSelect: () => void }) {
  const [s, e] = WINDOWS[i];
  const fill = useTransform(progress, [s, e], [0, 1]);
  const color = useTransform(progress, [s - 0.01, s + 0.02, e - 0.02, e], ["hsl(var(--muted-foreground))", "hsl(var(--foreground))", "hsl(var(--foreground))", "hsl(var(--muted-foreground))"]);
  return (
    <button type="button" onClick={onSelect} className="group flex-1 text-left" aria-label={`Go to ${chapters[i].key}`}>
      <span className="relative block h-px overflow-hidden bg-border">
        <motion.span className="absolute inset-0 origin-left bg-foreground" style={{ scaleX: fill }} />
      </span>
      <motion.span style={{ color }} className="mt-2.5 block text-[11px] font-semibold uppercase tracking-[0.14em] transition-opacity group-hover:opacity-70">
        {chapters[i].key}
      </motion.span>
    </button>
  );
}

/**
 * Pinned, scroll-scrubbed story: why we're not an average web developer. A three.js
 * particle field flows from dust → your business → your workflow → the platform → a
 * conversion funnel, with labels pinned to the scene. All copy is in the DOM for SEO.
 */
export function Craft() {
  const ref = useRef<HTMLElement>(null);
  const labels = useRef<Record<string, HTMLElement | null>>({});
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const morph = useTransform(scrollYProgress, MORPH_IN, MORPH_OUT);

  const introOpacity = useTransform(scrollYProgress, [0, 0.07, INTRO_END], [1, 1, 0]);
  const introScale = useTransform(scrollYProgress, [0, INTRO_END], [1, 0.94]);
  const introBlur = useTransform(scrollYProgress, [0.05, INTRO_END], ["blur(0px)", "blur(12px)"]);
  const introPointer = useTransform(introOpacity, (v) => (v > 0.5 ? "auto" : "none"));
  const storyOpacity = useTransform(scrollYProgress, [0.1, 0.15], [0, 1]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    const [s, e] = WINDOWS[i];
    const top = el.getBoundingClientRect().top + window.scrollY;
    scrollToY(top + ((s + e) / 2) * (el.offsetHeight - window.innerHeight));
  };

  return (
    <section ref={ref} id="craft" aria-labelledby="craft-title" className="relative h-[420vh] border-t border-border bg-background lg:h-[500vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <SystemSculpture morph={morph} labels={labels} />

        {/* Labels pinned to points in the 3D scene (positioned every frame by SystemSculpture) */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {SCULPTURE_ANCHORS.map((a) => (
            <div
              key={a.id}
              ref={(el) => {
                labels.current[a.id] = el;
              }}
              className="absolute left-0 top-0 opacity-0 will-change-transform"
            >
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background/85 py-1 pl-2 pr-3 text-[11px] font-semibold text-foreground shadow-[0_8px_24px_-12px_rgba(15,23,42,0.35)] backdrop-blur md:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {a.label}
              </span>
            </div>
          ))}
        </div>

        {/* Intro statement over drifting dust */}
        <motion.div
          style={{ opacity: introOpacity, scale: introScale, filter: introBlur, pointerEvents: introPointer }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          <div className="relative max-w-4xl text-center">
            {/* Soft paper backing so the drifting dust never competes with the copy */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-16 -inset-y-20 -z-10 bg-[radial-gradient(closest-side,hsl(var(--background)/0.94),hsl(var(--background)/0.7)_55%,transparent)]"
            />
            <Eyebrow className="mb-6">How we think</Eyebrow>
            <h2 id="craft-title" className="font-display text-4xl leading-[1.08] text-foreground md:text-6xl xl:text-7xl">
              Not just websites.{" "}
              <span className="text-primary">Systems</span> that make your business easier to run.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We're not an average web developer. We study how your business works, then build the website, CRM, or platform that makes it work better.
            </p>
            <div aria-hidden className="mx-auto mt-10 flex w-fit flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Scroll to explore
              <span className="relative block h-10 w-px overflow-hidden bg-border">
                <span className="absolute inset-x-0 top-0 h-1/2 animate-[scroll-cue_1.8s_ease-in-out_infinite] bg-foreground motion-reduce:hidden" />
              </span>
            </div>
          </div>
        </motion.div>

        {/* The story */}
        <motion.div style={{ opacity: storyOpacity }} className="absolute inset-0">
          <Container className="relative flex h-full flex-col justify-end pb-10 pt-24 lg:justify-center lg:pb-0">
            <div className="lg:max-w-[44%]">
              <Eyebrow className="mb-5 hidden lg:inline-flex">How we think</Eyebrow>
              <div className="relative h-[19.5rem] md:h-[23rem] xl:h-[25rem]">
                {chapters.map((c, i) => (
                  <Chapter key={c.key} c={c} i={i} progress={scrollYProgress} />
                ))}
              </div>
              <nav aria-label="How we think chapters" className="mt-4 flex max-w-md gap-3">
                {chapters.map((c, i) => (
                  <NavItem key={c.key} i={i} progress={scrollYProgress} onSelect={() => goTo(i)} />
                ))}
              </nav>
            </div>
          </Container>
        </motion.div>
      </div>
    </section>
  );
}
