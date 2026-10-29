import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { serviceGroups, services, type ServiceDefinition, type ServiceGroup } from "@/lib/services-catalog";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const AUTOPLAY_MS = 6500;
const byGroup = (g: ServiceGroup) => services.filter((s) => s.group === g);
const ordered = serviceGroups.flatMap((g) => byGroup(g.group));

function Price({ s, inverted }: { s: ServiceDefinition; inverted?: boolean }) {
  const strong = cn("font-display text-xl font-semibold", inverted ? "text-ink-foreground" : "text-foreground");
  return (
    <p className={cn("text-sm", inverted ? "text-ink-muted" : "text-muted-foreground")}>
      {s.startingAt === "Custom" ? (
        <span className={strong}>Custom quote</span>
      ) : (
        <>
          From <span className={strong}>{s.startingAt}</span> {s.startingBilling}
        </>
      )}
    </p>
  );
}

function GroupTabs({ active, onSelect, idPrefix }: { active: ServiceGroup; onSelect: (g: ServiceGroup) => void; idPrefix: string }) {
  return (
    <div role="tablist" aria-label="Service categories" className="grid grid-cols-4 border-b border-border">
      {serviceGroups.map((g, i) => {
        const selected = g.group === active;
        return (
          <button
            key={g.group}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onSelect(g.group)}
            className={cn(
              "relative px-3 py-4 text-left transition-colors sm:px-5",
              i > 0 && "border-l border-border",
              selected ? "bg-background text-foreground" : "bg-secondary/70 text-muted-foreground hover:text-foreground",
            )}
          >
            <span className="block font-display text-[11px] font-semibold text-primary">0{i + 1}</span>
            <span className="mt-0.5 block text-sm font-semibold sm:text-base">{g.group}</span>
            {selected && (
              <motion.span layoutId={`${idPrefix}-tab`} className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" transition={{ duration: 0.5, ease: EASE }} />
            )}
          </button>
        );
      })}
    </div>
  );
}

/** Desktop: service list + live detail panel, fixed height so nothing below ever jumps. */
function DesktopExplorer() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const [activeSlug, setActiveSlug] = useState(ordered[0].slug);
  const [touched, setTouched] = useState(false);
  const [hovering, setHovering] = useState(false);
  const active = services.find((s) => s.slug === activeSlug) ?? ordered[0];
  const groupMeta = serviceGroups.find((g) => g.group === active.group)!;
  const autoplay = !reduce && !touched && !hovering && inView;

  // Gently tours every service until the visitor takes over
  useEffect(() => {
    if (!autoplay) return;
    const id = window.setTimeout(() => {
      const i = ordered.findIndex((s) => s.slug === activeSlug);
      setActiveSlug(ordered[(i + 1) % ordered.length].slug);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [autoplay, activeSlug]);

  const select = (slug: string) => {
    setTouched(true);
    setActiveSlug(slug);
  };

  return (
    <div
      ref={ref}
      onPointerEnter={() => setHovering(true)}
      onPointerLeave={() => setHovering(false)}
      className="hidden h-[540px] grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] border border-border bg-background shadow-[0_40px_80px_-50px_rgba(15,23,42,0.35)] lg:grid"
    >
      <div className="flex min-h-0 flex-col border-r border-border">
        <GroupTabs active={active.group} onSelect={(g) => select(byGroup(g)[0].slug)} idPrefix="desk" />
        <p className="border-b border-border px-6 py-4 text-sm leading-relaxed text-muted-foreground">{groupMeta.description}</p>
        <ul className="min-h-0 flex-1">
          {byGroup(active.group).map((s, i) => {
            const selected = s.slug === activeSlug;
            return (
              <motion.li
                key={s.slug}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: EASE }}
                className="relative isolate border-b border-border"
              >
                {selected && <motion.span layoutId="desk-row" className="absolute inset-0 -z-10 bg-secondary" transition={{ duration: 0.45, ease: EASE }} />}
                {selected && <motion.span layoutId="desk-bar" className="absolute inset-y-0 left-0 w-0.5 bg-primary" transition={{ duration: 0.45, ease: EASE }} />}
                <Link
                  to={s.path}
                  onMouseEnter={() => select(s.slug)}
                  onFocus={() => select(s.slug)}
                  className="flex items-center gap-4 px-6 py-5"
                >
                  <s.icon className={cn("h-5 w-5 shrink-0 transition-colors", selected ? "text-primary" : "text-muted-foreground")} strokeWidth={1.6} />
                  <span className="min-w-0 flex-1">
                    <span className="block text-lg font-semibold text-foreground">{s.name}</span>
                    <span className="block truncate text-sm text-muted-foreground">{s.menuBlurb}</span>
                  </span>
                  <ArrowUpRight
                    className={cn("h-5 w-5 shrink-0 transition-all duration-300", selected ? "rotate-45 text-foreground" : "text-muted-foreground/60")}
                  />
                </Link>
                {selected && autoplay && (
                  <motion.span
                    key={`${s.slug}-progress`}
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-px origin-left bg-foreground/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                  />
                )}
              </motion.li>
            );
          })}
        </ul>
        <Link to="/contact" className="group flex items-center justify-between gap-4 border-t border-border px-6 py-5 text-sm transition-colors hover:bg-secondary">
          <span className="text-muted-foreground">
            Not sure where to start? <span className="font-semibold text-foreground">Book a free consultation</span>
          </span>
          <ArrowRight className="h-4 w-4 shrink-0 text-foreground transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Detail panel */}
      <div className="relative isolate overflow-hidden bg-ink text-ink-foreground">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at 85% 15%, black, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at 85% 15%, black, transparent 70%)",
          }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.5, ease: EASE }}
            className="relative flex h-full flex-col p-10 xl:p-12"
          >
            <motion.div
              aria-hidden
              initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: EASE }}
              className="pointer-events-none absolute -right-10 -top-10 text-white/[0.05]"
            >
              <active.icon className="h-72 w-72" strokeWidth={0.6} />
            </motion.div>

            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center border border-white/15">
                <active.icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">{groupMeta.title}</span>
            </div>
            <h3 className="mt-6 font-display text-3xl leading-tight xl:text-4xl">{active.name}</h3>
            <p className="mt-4 max-w-lg leading-relaxed text-ink-muted">{active.summary}</p>

            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {active.included.slice(0, 4).map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: EASE }}
                  className="flex items-start gap-2.5 text-sm text-ink-foreground/90"
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" />
                  {f.title}
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-6">
              <Price s={active} inverted />
              <div className="flex items-center gap-5">
                <Link to="/contact" className="text-sm font-semibold text-ink-muted transition-colors hover:text-ink-foreground">
                  Get a quote
                </Link>
                <Link
                  to={active.path}
                  className="group inline-flex h-11 items-center gap-2 bg-ink-foreground px-5 text-sm font-semibold text-ink transition-colors hover:bg-white/85"
                >
                  Explore <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** Phones & tablets: category tabs over a swipeable card rail. */
function MobileExplorer() {
  const [group, setGroup] = useState<ServiceGroup>(serviceGroups[0].group);
  const [index, setIndex] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const list = byGroup(group);

  const onScroll = () => {
    const el = rail.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    setIndex(Math.round(el.scrollLeft / (card.offsetWidth + 16)));
  };
  const choose = (g: ServiceGroup) => {
    setGroup(g);
    setIndex(0);
    rail.current?.scrollTo({ left: 0 });
  };

  return (
    <div className="lg:hidden">
      <div className="border border-border">
        <GroupTabs active={group} onSelect={choose} idPrefix="mob" />
      </div>
      <div
        ref={rail}
        onScroll={onScroll}
        className="-mx-6 mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-6 px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {list.map((s, i) => (
          <motion.div
            key={`${group}-${s.slug}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: EASE }}
            className="w-[84%] shrink-0 snap-start sm:w-[58%]"
          >
            <Link to={s.path} className="flex h-full flex-col border border-border bg-background p-6 transition-colors active:bg-secondary">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center border border-border">
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-foreground">{s.name}</h3>
              <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-muted-foreground">{s.summary}</p>
              <ul className="mt-5 space-y-2">
                {s.included.slice(0, 3).map((f) => (
                  <li key={f.title} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f.title}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-end justify-between gap-4 border-t border-border pt-5">
                <Price s={s} />
                <span className="shrink-0 text-sm font-semibold text-foreground">Explore →</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      {list.length > 1 && (
        <div aria-hidden className="mt-4 flex justify-center gap-2">
          {list.map((s, i) => (
            <span key={s.slug} className={cn("h-1 transition-all duration-500", i === index ? "w-8 bg-foreground" : "w-3 bg-border")} />
          ))}
        </div>
      )}
    </div>
  );
}

export function Services() {
  return (
    <div className="pb-14 pt-14 lg:pb-24 lg:pt-16">
      <Container>
        <SectionHeader
          split
          eyebrow="What we do"
          title="Websites, apps & marketing that bring you customers"
          description="Four connected practices under one roof, so strategy, design, engineering, and growth never get lost between vendors."
          action={
            <Link to="/services" className="group inline-flex items-center gap-2 font-semibold text-foreground hover:text-primary">
              All services <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          }
        />
        <DesktopExplorer />
        <MobileExplorer />
      </Container>
    </div>
  );
}
