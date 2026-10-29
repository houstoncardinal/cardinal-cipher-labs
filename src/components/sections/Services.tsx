import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, ChevronLeft, ChevronRight, Clock } from "lucide-react";
import { Container, SectionHeader } from "@/components/site/primitives";
import { serviceGroups, services, type ServiceDefinition, type ServiceGroup, type ServiceTier } from "@/lib/services-catalog";
import { contactHref } from "@/lib/contact-intent";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const byGroup = (g: ServiceGroup) => services.filter((s) => s.group === g);
const FEATURES_SHOWN = 3;

/** "$1,500 – Custom", "$1,500 – $4,000 / mo", or "Custom quote" — the full package spread at a glance. */
function priceRange(s: ServiceDefinition) {
  const first = s.tiers[0];
  const last = s.tiers[s.tiers.length - 1];
  if (first.price === "Custom" && last.price === "Custom") return "Custom quote";
  const monthly = first.billing === "per month";
  return `${first.price} – ${last.price}${monthly && last.price !== "Custom" ? " / mo" : ""}`;
}
const billingNote = (t: ServiceTier) => (t.price === "Custom" ? "tailored to scope" : t.billing);

/** Arrow-key navigation for a row of tab-like buttons (WAI-ARIA tabs pattern). */
function onArrowKeys(e: KeyboardEvent<HTMLElement>) {
  if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
  const items = Array.from(e.currentTarget.querySelectorAll<HTMLButtonElement>("[role=tab]"));
  const i = items.indexOf(document.activeElement as HTMLButtonElement);
  if (i < 0) return;
  e.preventDefault();
  const next = e.key === "Home" ? 0 : e.key === "End" ? items.length - 1 : (i + (e.key === "ArrowRight" ? 1 : -1) + items.length) % items.length;
  items[next].focus();
  items[next].click();
  items[next].scrollIntoView({ block: "nearest", inline: "nearest", behavior: "smooth" });
}

function TierCard({ s, t, i }: { s: ServiceDefinition; t: ServiceTier; i: number }) {
  const featured = !!t.popular;
  const extra = t.features.length - FEATURES_SHOWN;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.06 + i * 0.06, ease: EASE }}
      className={cn(
        "relative flex h-full flex-col border p-5 transition-shadow duration-500 xl:p-6",
        featured
          ? "border-ink bg-ink text-ink-foreground shadow-[0_30px_60px_-34px_rgba(15,23,42,0.6)]"
          : "border-border bg-background hover:shadow-[0_24px_50px_-34px_rgba(15,23,42,0.4)]",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className={cn("text-[11px] font-semibold uppercase tracking-[0.16em]", featured ? "text-ink-muted" : "text-primary")}>{t.level}</p>
        {featured && (
          <span className="bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground">Most popular</span>
        )}
      </div>
      <h4 className="mt-1 font-display text-[17px] font-semibold leading-snug">{t.name}</h4>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-2">
        <span className="font-display text-[1.75rem] font-semibold leading-none tracking-tight">{t.price}</span>
        <span className={cn("text-sm", featured ? "text-ink-muted" : "text-muted-foreground")}>{billingNote(t)}</span>
      </div>
      <p className={cn("mt-2.5 line-clamp-2 text-sm leading-relaxed", featured ? "text-ink-muted" : "text-muted-foreground")}>{t.bestFor}</p>
      {t.timeline && (
        <p className={cn("mt-2 flex items-center gap-1.5 text-xs font-medium", featured ? "text-ink-foreground/75" : "text-foreground/75")}>
          <Clock className="h-3.5 w-3.5" /> {t.timeline}
        </p>
      )}

      <ul className={cn("mt-4 space-y-2 border-t pt-4", featured ? "border-white/10" : "border-border")}>
        {t.features.slice(0, FEATURES_SHOWN).map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm leading-snug">
            <Check className={cn("mt-0.5 h-4 w-4 shrink-0", featured ? "text-primary" : "text-foreground")} />
            <span className={featured ? "text-ink-foreground/90" : "text-foreground/90"}>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex items-center justify-between gap-3 pt-5">
        <Link
          to={contactHref({ service: s.slug, plan: t.name, from: "home-services" })}
          className={cn(
            "group/cta inline-flex h-10 flex-1 items-center justify-between px-4 text-sm font-semibold transition-colors",
            featured ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-foreground/80 text-foreground hover:bg-foreground hover:text-background",
          )}
        >
          {t.price === "Custom" ? "Request a quote" : "Get started"}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
        </Link>
        {extra > 0 && (
          <Link
            to={`${s.path}#plans`}
            aria-label={`See all ${t.features.length} features in ${t.name}`}
            className={cn("shrink-0 text-xs font-semibold underline-offset-4 hover:underline", featured ? "text-ink-muted" : "text-muted-foreground")}
          >
            +{extra} more
          </Link>
        )}
      </div>
    </motion.article>
  );
}

/** Phones: every package price visible at once, synced with a swipeable deck. */
function MobileDeck({ s }: { s: ServiceDefinition }) {
  const deck = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
    deck.current?.scrollTo({ left: 0 });
  }, [s.slug]);

  const go = (i: number) => {
    const el = deck.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (!el || !card) return;
    // Align the card with the deck's left padding (20px), measured on screen so nesting never skews it
    const delta = card.getBoundingClientRect().left - el.getBoundingClientRect().left - 20;
    el.scrollTo({ left: el.scrollLeft + delta, behavior: "smooth" });
    setIndex(i);
  };
  const onScroll = () => {
    const el = deck.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) setIndex(Math.min(s.tiers.length - 1, Math.round(el.scrollLeft / (card.offsetWidth + 12))));
  };

  return (
    <div className="min-w-0 md:hidden">
      <div role="tablist" aria-label={`${s.name} packages`} onKeyDown={onArrowKeys} className="grid grid-cols-3 border border-border bg-secondary/60 p-1">
        {s.tiers.map((t, i) => {
          const selected = i === index;
          return (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => go(i)}
              className="relative px-1.5 py-2 text-center"
            >
              {selected && <motion.span layoutId="tier-seg" className="absolute inset-0 bg-background shadow-[0_6px_16px_-10px_rgba(15,23,42,0.45)]" transition={{ duration: 0.4, ease: EASE }} />}
              <span className={cn("relative block text-[10px] font-semibold uppercase tracking-[0.12em]", selected ? "text-primary" : "text-muted-foreground")}>
                {t.level}
                {t.popular && " ★"}
              </span>
              <span className={cn("relative mt-0.5 block font-display text-[15px] font-semibold", selected ? "text-foreground" : "text-foreground/70")}>{t.price}</span>
            </button>
          );
        })}
      </div>

      <div
        ref={deck}
        onScroll={onScroll}
        className="-mx-5 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-px-5 px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {s.tiers.map((t, i) => (
          <div key={t.name} className="w-[88%] shrink-0 snap-start sm:w-[62%]">
            <TierCard s={s} t={t} i={i} />
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(Math.max(0, index - 1))}
          disabled={index === 0}
          aria-label="Previous package"
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-opacity disabled:opacity-30"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div aria-hidden className="flex gap-1.5">
          {s.tiers.map((t, i) => (
            <span key={t.name} className={cn("h-1 transition-all duration-500", i === index ? "w-7 bg-foreground" : "w-2.5 bg-border")} />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(Math.min(s.tiers.length - 1, index + 1))}
          disabled={index === s.tiers.length - 1}
          aria-label="Next package"
          className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-opacity disabled:opacity-30"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export function Services() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug) ?? services[0];
  const groupIndex = serviceGroups.findIndex((g) => g.group === active.group);
  const chips = byGroup(active.group);

  return (
    <div className="border-y border-border bg-secondary pb-14 pt-12 lg:pb-16 lg:pt-14">
      <Container>
        <SectionHeader
          split
          eyebrow="What we do"
          title="Websites, apps & marketing that bring you customers"
          description="Every service comes in three packages — from a fast foundation to a fully custom build — with a written scope and price before any work starts."
          className="mb-8 lg:mb-10"
        />

        <div className="border border-border bg-background shadow-[0_40px_90px_-60px_rgba(15,23,42,0.45)]">
          {/* Level 1: categories */}
          <div role="tablist" aria-label="Service categories" onKeyDown={onArrowKeys} className="grid grid-cols-4 border-b border-border bg-secondary/60">
            {serviceGroups.map((g, i) => {
              const selected = i === groupIndex;
              return (
                <button
                  key={g.group}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveSlug(byGroup(g.group)[0].slug)}
                  className={cn(
                    "relative px-2 py-3 text-center transition-colors md:px-5 md:py-4 md:text-left",
                    i > 0 && "border-l border-border",
                    selected ? "bg-background text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="hidden font-display text-[11px] font-semibold text-primary md:block">0{i + 1}</span>
                  <span className="block text-sm font-semibold md:text-base">
                    <span className="md:hidden">{g.group}</span>
                    <span className="hidden md:inline">{g.title}</span>
                  </span>
                  <span className="hidden text-xs text-muted-foreground lg:block">{byGroup(g.group).length} services</span>
                  {selected && <motion.span layoutId="svc-cat" className="absolute inset-x-0 -bottom-px h-0.5 bg-foreground" transition={{ duration: 0.45, ease: EASE }} />}
                </button>
              );
            })}
          </div>

          {/* Level 2: services in the category */}
          <div
            role="tablist"
            aria-label={`${serviceGroups[groupIndex].title} services`}
            onKeyDown={onArrowKeys}
            className="flex gap-2 overflow-x-auto border-b border-border px-4 py-3 [scrollbar-width:none] md:px-6 [&::-webkit-scrollbar]:hidden"
          >
            {chips.map((s) => {
              const selected = s.slug === active.slug;
              return (
                <button
                  key={s.slug}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveSlug(s.slug)}
                  className={cn(
                    "relative flex shrink-0 items-center gap-2.5 border px-3.5 py-2 text-left transition-colors",
                    selected ? "border-ink text-ink-foreground" : "border-border text-foreground hover:border-foreground/40",
                  )}
                >
                  {selected && <motion.span layoutId="svc-chip" className="absolute inset-0 bg-ink" transition={{ duration: 0.4, ease: EASE }} />}
                  <s.icon className={cn("relative h-4 w-4 shrink-0", selected ? "text-primary" : "text-muted-foreground")} strokeWidth={1.7} />
                  <span className="relative">
                    <span className="block whitespace-nowrap text-sm font-semibold leading-tight">{s.name}</span>
                    <span className={cn("hidden whitespace-nowrap text-[11px] leading-tight md:block", selected ? "text-ink-muted" : "text-muted-foreground")}>{priceRange(s)}</span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Selected service and its packages */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.slug}
              role="tabpanel"
              aria-label={active.name}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              className="grid grid-cols-[minmax(0,1fr)] gap-6 p-5 md:p-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,2.2fr)] lg:gap-8 lg:p-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="flex flex-col"
              >
                <div className="flex items-start gap-3 lg:flex-col lg:gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink text-ink-foreground lg:h-12 lg:w-12">
                    <active.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight text-foreground lg:text-[1.75rem]">{active.name}</h3>
                    <p className="mt-0.5 text-sm font-medium text-muted-foreground">
                      {active.tiers.length} packages · {priceRange(active)}
                    </p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-[15px] leading-relaxed text-muted-foreground md:line-clamp-3 lg:mt-4 lg:line-clamp-4">{active.summary}</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13px] font-semibold md:mt-4 md:gap-x-5 md:text-sm lg:mt-auto lg:flex-col lg:items-start lg:pt-6">
                  <Link to={active.path} className="group inline-flex items-center gap-1.5 text-foreground hover:text-primary">
                    <span className="md:hidden">Explore service</span>
                    <span className="hidden md:inline">Explore {active.name}</span> <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                  </Link>
                  <Link to={`/pricing#${active.slug}`} className="text-muted-foreground transition-colors hover:text-foreground">
                    Compare all prices
                  </Link>
                </div>
              </motion.div>

              <div className="hidden gap-4 md:grid md:grid-cols-3 xl:gap-5">
                {active.tiers.map((t, i) => (
                  <TierCard key={t.name} s={active} t={t} i={i} />
                ))}
              </div>
              <MobileDeck s={active} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-5 flex flex-col items-start justify-between gap-3 text-sm sm:flex-row sm:items-center">
          <p className="text-muted-foreground">Not sure which package fits? We'll recommend one on a free call.</p>
          <Link to={contactHref({ from: "home-services" })} className="group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap font-semibold text-foreground hover:text-primary">
            Get a free recommendation <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </div>
  );
}
