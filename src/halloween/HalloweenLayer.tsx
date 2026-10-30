import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { HALLOWEEN_ON, HUNT_REWARD, PUMPKINS } from "./config";
import { BatIcon, GhostIcon, PumpkinIcon, SpiderIcon, Tombstone } from "./art";
import "./halloween.css";

const OFF_KEY = "cc-spooky-off";
const FOUND_KEY = "cc-pumpkins";
const INTRO_KEY = "cc-hunt-intro";
const EASE = [0.16, 1, 0.3, 1] as const;

const store = {
  get(key: string) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string | null) {
    try {
      if (value === null) localStorage.removeItem(key);
      else localStorage.setItem(key, value);
    } catch {
      /* private mode: the hunt just won't persist */
    }
  },
};

/**
 * Seasonal layer that sits on top of the normal site: bats, a dangling spider, a moonlit hero,
 * a graveyard on the footer's edge, five hidden pumpkins to collect, and a "lights out" egg
 * (type b-o-o). Nothing in the page layout changes; every piece is pointer-events-none except
 * the things meant to be clicked. Visitors can switch it off from the hunt card.
 */
export function HalloweenLayer() {
  const [on, setOn] = useState(false);

  useEffect(() => {
    const off = new URLSearchParams(location.search).get("halloween") === "off";
    setOn(HALLOWEEN_ON && !off && store.get(OFF_KEY) !== "1");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("halloween", on);
    return () => document.documentElement.classList.remove("halloween");
  }, [on]);

  if (!on) return null;
  return (
    <Spooky
      onTurnOff={() => {
        store.set(OFF_KEY, "1");
        setOn(false);
      }}
    />
  );
}

function Spooky({ onTurnOff }: { onTurnOff: () => void }) {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [found, setFound] = useState<string[]>(() => {
    try {
      return JSON.parse(store.get(FOUND_KEY) || "[]");
    } catch {
      return [];
    }
  });
  const [celebrate, setCelebrate] = useState(false);
  const [lightsOut, setLightsOut] = useState(false);
  const bats = useBats(!!reduce);

  const collect = useCallback(
    (id: string) => {
      setFound((prev) => {
        if (prev.includes(id)) return prev;
        const next = [...prev, id];
        store.set(FOUND_KEY, JSON.stringify(next));
        if (next.length === PUMPKINS.length) setTimeout(() => setCelebrate(true), 700);
        return next;
      });
      bats.release(3);
    },
    [bats],
  );

  // Hidden egg: type "boo" anywhere outside a form field
  useEffect(() => {
    let typed = "";
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input, textarea, select, [contenteditable]")) return;
      typed = (typed + e.key.toLowerCase()).slice(-3);
      if (typed === "boo") {
        typed = "";
        setLightsOut(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <BatSky flocks={bats.flocks} onDone={bats.remove} />
      {!reduce && <Spider />}
      <HeroMoon pathname={pathname} />
      <Graveyard pathname={pathname} />
      <Pumpkins pathname={pathname} found={found} onCollect={collect} />
      <HuntChip found={found} onTurnOff={onTurnOff} onReward={() => setCelebrate(true)} />
      <AnimatePresence>{celebrate && <RewardCard onClose={() => setCelebrate(false)} />}</AnimatePresence>
      <AnimatePresence>{lightsOut && <LightsOut onDone={() => setLightsOut(false)} />}</AnimatePresence>
    </>
  );
}

/* ───────────────────────── Bats ───────────────────────── */

type Flock = { id: number; dir: 1 | -1; top: number; bats: { size: number; dy: number; delay: number; dur: number }[] };

function useBats(reduce: boolean) {
  const [flocks, setFlocks] = useState<Flock[]>([]);
  const seq = useRef(0);

  const release = useCallback(
    (count = 4 + Math.floor(Math.random() * 3), top?: number) => {
      if (reduce) return;
      const id = ++seq.current;
      setFlocks((f) => [
        ...f,
        {
          id,
          dir: Math.random() > 0.5 ? 1 : -1,
          top: top ?? 12 + Math.random() * 40,
          bats: Array.from({ length: count }, (_, i) => ({
            size: 18 + Math.random() * 16,
            dy: (Math.random() - 0.5) * 90,
            delay: i * 0.18 + Math.random() * 0.25,
            dur: 6 + Math.random() * 3,
          })),
        },
      ]);
    },
    [reduce],
  );
  const remove = useCallback((id: number) => setFlocks((f) => f.filter((x) => x.id !== id)), []);

  // An occasional flock, plus one whenever the theme flips to dark ("lights off")
  useEffect(() => {
    if (reduce) return;
    let timer = window.setTimeout(function loop() {
      if (!document.hidden) release();
      timer = window.setTimeout(loop, 28000 + Math.random() * 22000);
    }, 6000);
    const root = document.documentElement;
    let wasDark = root.classList.contains("dark");
    const mo = new MutationObserver(() => {
      const dark = root.classList.contains("dark");
      if (dark && !wasDark) release(7, 6);
      wasDark = dark;
    });
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => {
      clearTimeout(timer);
      mo.disconnect();
    };
  }, [reduce, release]);

  return { flocks, release, remove };
}

function BatSky({ flocks, onDone }: { flocks: Flock[]; onDone: (id: number) => void }) {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[45] overflow-hidden">
      {flocks.map((f) => (
        <div key={f.id} className="absolute inset-x-0" style={{ top: `${f.top}%` }}>
          {f.bats.map((b, i) => (
            <motion.div
              key={i}
              className="absolute left-0 top-0 text-ink dark:text-[#1d2440]"
              initial={{ x: f.dir === 1 ? "-12vw" : "112vw", y: b.dy }}
              animate={{
                x: f.dir === 1 ? "112vw" : "-12vw",
                y: [b.dy, b.dy - 50, b.dy + 25, b.dy - 70, b.dy - 20],
              }}
              transition={{ duration: b.dur, delay: b.delay, ease: "linear", y: { duration: b.dur, delay: b.delay, ease: "easeInOut" } }}
              onAnimationComplete={() => i === f.bats.length - 1 && onDone(f.id)}
            >
              <BatIcon className="hw-flap block" size={b.size} />
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ───────────────────────── Spider ───────────────────────── */

/** Hangs from under the header in the right gutter; its thread lengthens as you scroll. Click it and it scurries off. */
function Spider() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 18 });
  const drop = useTransform(smooth, [0, 1], [36, 300]);
  const [away, setAway] = useState(false);

  useEffect(() => {
    if (!away) return;
    const t = window.setTimeout(() => setAway(false), 45000);
    return () => clearTimeout(t);
  }, [away]);

  return (
    <div aria-hidden className="pointer-events-none fixed right-3 top-[72px] z-[35] hidden xl:block">
      <motion.div className="relative origin-top" animate={{ scaleY: away ? 0 : 1 }} transition={{ duration: away ? 0.5 : 1.4, ease: EASE }}>
        <motion.span className="absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gray-400/70" style={{ height: drop }} />
        <motion.div style={{ y: drop }}>
          <div className="hw-swing">
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setAway(true)}
            className="pointer-events-auto -ml-3 block h-6 w-6 cursor-pointer text-ink transition-transform hover:scale-110 dark:text-gray-300"
          >
            <SpiderIcon className="h-6 w-6" />
          </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── Portals into page sections ───────────────────────── */

/** Finds an element once the routed page has rendered (pages fade in, so retry briefly). */
function useTarget(find: () => HTMLElement | null, deps: unknown[]) {
  const [el, setEl] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setEl(null);
    let tries = 0;
    let timer = 0;
    let restore: (() => void) | undefined;
    const attempt = () => {
      const found = find();
      if (found) {
        if (getComputedStyle(found).position === "static") {
          found.style.position = "relative";
          restore = () => (found.style.position = "");
        }
        setEl(found);
      } else if (++tries < 12) timer = window.setTimeout(attempt, 300);
    };
    timer = window.setTimeout(attempt, 150);
    return () => {
      clearTimeout(timer);
      restore?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return el;
}

function HeroMoon({ pathname }: { pathname: string }) {
  const hero = useTarget(() => (pathname === "/" ? document.querySelector<HTMLElement>("#hero > div") : null), [pathname]);
  const [host, setHost] = useState<HTMLElement | null>(null);

  // Slot the moon in right after the hero's background grid: above the grid, behind the content
  useEffect(() => {
    if (!hero) return;
    const div = document.createElement("div");
    div.className = "pointer-events-none absolute inset-0";
    div.setAttribute("aria-hidden", "true");
    hero.insertBefore(div, hero.children[1] ?? null);
    setHost(div);
    return () => {
      div.remove();
      setHost(null);
    };
  }, [hero]);

  if (!host) return null;
  return createPortal(
    <div className="absolute right-[4%] top-[92px] h-24 w-24 sm:h-32 sm:w-32 lg:right-[3%] lg:top-[100px] lg:h-40 lg:w-40">
      <span className="hw-moon-disc absolute inset-0 rounded-full" />
      <BatIcon className="hw-moon-bat absolute left-1/2 top-1/2 text-ink dark:text-[#0b1022]" size={30} />
    </div>,
    host,
  );
}

const EPITAPHS = [
  { text: "RIP", label: "Here lies the slow website. It never loaded in time." },
  { text: "RIP", label: "Here lie the leads nobody followed up with." },
  { text: "RIP", label: "Here lies the spreadsheet that ran the whole business." },
];

/** Tombstones standing on the ground line of the footer's closing call-to-action, with a ghost that drifts up now and then. */
function Graveyard({ pathname }: { pathname: string }) {
  const el = useTarget(() => document.querySelector<HTMLElement>("footer > .border-b"), [pathname]);
  const [tip, setTip] = useState<number | null>(null);
  if (!el) return null;
  return createPortal(
    <div className="pointer-events-none absolute bottom-0 right-[6%] z-[1] flex items-end gap-1.5 md:left-[50%] md:right-auto">
      <GhostIcon className="hw-ghost absolute bottom-6 left-[38%] h-9 w-8 text-white/90" />
      {EPITAPHS.map((e, i) => (
        <div key={i} className="relative">
          <button
            type="button"
            aria-label={e.label}
            onMouseEnter={() => setTip(i)}
            onMouseLeave={() => setTip(null)}
            onFocus={() => setTip(i)}
            onBlur={() => setTip(null)}
            onClick={() => setTip((t) => (t === i ? null : i))}
            className="pointer-events-auto block text-[#1c2742] dark:text-[#18213b]"
          >
            <Tombstone text={e.text} className={i === 1 ? "h-12 w-11 sm:h-14 sm:w-[3.25rem]" : "h-9 w-8 sm:h-11 sm:w-10"} />
          </button>
          <AnimatePresence>
            {tip === i && (
              <motion.span
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                className="absolute bottom-full right-0 mb-2 w-52 bg-ink px-3 py-2 text-xs leading-snug text-ink-foreground shadow-lg"
              >
                {e.label} <span className="text-ink-muted">We build the cure.</span>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>,
    el,
  );
}

/* ───────────────────────── Pumpkin hunt ───────────────────────── */

function autoSection() {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("main section, main > div")).filter((s) => s.offsetHeight > 320);
  return sections[Math.min(2, sections.length - 1)] ?? null;
}

function spotFor(id: string) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return { side: h % 2 ? "left" : "right", top: 22 + (h % 50) } as const;
}

function Pumpkins({ pathname, found, onCollect }: { pathname: string; found: string[]; onCollect: (id: string) => void }) {
  const here = PUMPKINS.filter((p) => p.match(pathname) && !found.includes(p.id));
  return (
    <>
      {here.map((p) => (
        <HiddenPumpkin key={`${p.id}${pathname}`} id={p.id} selector={p.selector} pathname={pathname} onCollect={onCollect} />
      ))}
    </>
  );
}

function HiddenPumpkin({ id, selector, pathname, onCollect }: { id: string; selector?: string; pathname: string; onCollect: (id: string) => void }) {
  const el = useTarget(() => (selector ? document.querySelector<HTMLElement>(selector) : autoSection()), [pathname, selector]);
  const [popped, setPopped] = useState(false);
  if (!el) return null;
  const spot = spotFor(id);
  return createPortal(
    <span className="absolute z-30" style={{ top: `${spot.top}%`, [spot.side]: "max(6px, 1.6%)" }}>
      <AnimatePresence onExitComplete={() => onCollect(id)}>
        {!popped && (
          <motion.button
            type="button"
            aria-label="You found a hidden pumpkin. Collect it."
            onClick={() => setPopped(true)}
            exit={{ scale: 1.8, rotate: 20, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="block h-7 w-7 cursor-pointer opacity-80 transition-opacity hover:opacity-100 focus-visible:opacity-100 sm:h-8 sm:w-8"
          >
            <PumpkinIcon className="hw-pumpkin h-full w-full" />
          </motion.button>
        )}
      </AnimatePresence>
    </span>,
    el,
  );
}

function HuntChip({ found, onTurnOff, onReward }: { found: string[]; onTurnOff: () => void; onReward: () => void }) {
  const [open, setOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [bump, setBump] = useState(0);
  const total = PUMPKINS.length;
  const done = found.length === total;
  const first = useRef(true);

  useEffect(() => {
    if (store.get(INTRO_KEY)) return;
    const show = window.setTimeout(() => setIntro(true), 3500);
    const hide = window.setTimeout(() => {
      setIntro(false);
      store.set(INTRO_KEY, "1");
    }, 13000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setBump((b) => b + 1);
  }, [found.length]);

  return (
    <div className="fixed bottom-4 left-4 z-[38] flex flex-col items-start gap-2 sm:bottom-5 sm:left-5">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="w-[min(18rem,calc(100vw-2rem))] border border-border bg-background p-4 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">Halloween pumpkin hunt</p>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">
                  {found.length} of {total} found
                </p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="text-muted-foreground hover:text-foreground">
                <X className="h-4 w-4" />
              </button>
            </div>
            <ul className="mt-3 space-y-1.5">
              {PUMPKINS.map((p) => {
                const got = found.includes(p.id);
                return (
                  <li key={p.id} className="flex items-center gap-2 text-sm">
                    <PumpkinIcon className={got ? "h-4 w-4" : "h-4 w-4 opacity-25 grayscale"} />
                    <span className={got ? "text-muted-foreground line-through" : "text-foreground"}>{p.hint}</span>
                  </li>
                );
              })}
            </ul>
            {done ? (
              <button type="button" onClick={onReward} className="mt-4 inline-flex h-9 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground">
                See your treat <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Find all {total} for a treat. Tip: they like the edges of a page.</p>
            )}
            <button type="button" onClick={onTurnOff} className="mt-4 block text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline">
              Turn off Halloween mode
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        <motion.button
          key={bump}
          type="button"
          onClick={() => {
            setOpen((o) => !o);
            setIntro(false);
            store.set(INTRO_KEY, "1");
          }}
          aria-expanded={open}
          aria-label={`Halloween pumpkin hunt: ${found.length} of ${total} found`}
          initial={bump ? { scale: 1.25 } : false}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 400, damping: 14 }}
          className="inline-flex h-10 items-center gap-1.5 rounded-full border border-border bg-background/95 pl-2 pr-3 text-xs font-semibold tabular-nums text-foreground shadow-[0_12px_30px_-14px_rgba(15,23,42,0.5)] backdrop-blur transition-colors hover:border-primary/50"
        >
          <PumpkinIcon className="hw-pumpkin h-6 w-6" />
          {found.length}/{total}
        </motion.button>
        <AnimatePresence>
          {intro && !open && (
            <motion.p
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="max-w-[15rem] bg-ink px-3 py-2 text-xs leading-snug text-ink-foreground shadow-lg"
            >
              {total} pumpkins are hiding on this site. Find them all for a treat.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function RewardCard({ onClose }: { onClose: () => void }) {
  const reduce = useReducedMotion();
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/40 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      {!reduce &&
        Array.from({ length: 14 }, (_, i) => (
          <motion.span
            key={i}
            aria-hidden
            className="pointer-events-none absolute top-0"
            style={{ left: `${(i * 37) % 100}%` }}
            initial={{ y: "-10vh", rotate: 0 }}
            animate={{ y: "110vh", rotate: (i % 2 ? 1 : -1) * 220 }}
            transition={{ duration: 2.6 + (i % 5) * 0.4, delay: (i % 7) * 0.12, ease: "easeIn" }}
          >
            <PumpkinIcon className="h-7 w-7" />
          </motion.span>
        ))}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="hw-reward-title"
        initial={{ y: 24, scale: 0.96 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 24, scale: 0.96 }}
        transition={{ duration: 0.45, ease: EASE }}
        onClick={(e) => e.stopPropagation()}
        className="ink-island relative w-full max-w-md overflow-hidden bg-ink p-7 text-ink-foreground shadow-2xl"
      >
        <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-ink-muted hover:text-ink-foreground">
          <X className="h-4 w-4" />
        </button>
        <div className="flex gap-1">
          {PUMPKINS.map((p) => (
            <PumpkinIcon key={p.id} className="h-7 w-7" />
          ))}
        </div>
        <h2 id="hw-reward-title" className="mt-5 font-display text-2xl font-semibold">
          {HUNT_REWARD.title}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-muted">{HUNT_REWARD.body}</p>
        <Link
          to="/contact"
          onClick={onClose}
          className="mt-6 inline-flex h-11 items-center gap-2 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {HUNT_REWARD.cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </motion.div>
  );
}

/* ───────────────────────── Lights out (type "boo") ───────────────────────── */

function LightsOut({ onDone }: { onDone: () => void }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const move = (e: PointerEvent) => {
      node?.style.setProperty("--hx", `${e.clientX}px`);
      node?.style.setProperty("--hy", `${e.clientY}px`);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onDone();
    const t = window.setTimeout(onDone, 9000);
    window.addEventListener("pointermove", move);
    window.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("keydown", onKey);
    };
  }, [onDone]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="hw-lights-out pointer-events-none fixed inset-0 z-[65]"
    >
      <motion.div
        initial={{ x: "-20vw" }}
        animate={{ x: "110vw" }}
        transition={{ duration: 7, ease: "easeInOut", delay: 0.6 }}
        className="absolute top-[30%] text-white/85"
      >
        <GhostIcon className="hw-bob h-16 w-14" />
      </motion.div>
      <div className="absolute inset-x-0 bottom-10 flex flex-col items-center gap-3 px-4 text-center">
        <p className="font-display text-xl font-semibold text-white">Boo. You know what's scarier? A website that loses leads.</p>
        <div className="pointer-events-auto flex gap-3">
          <Link to="/contact" onClick={onDone} className="inline-flex h-10 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground">
            Fix mine <ArrowRight className="h-4 w-4" />
          </Link>
          <button type="button" onClick={onDone} className="h-10 border border-white/40 px-4 text-sm font-semibold text-white hover:bg-white/10">
            Lights on
          </button>
        </div>
      </div>
    </motion.div>
  );
}
