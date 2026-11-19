import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeader, revealDelay } from "@/components/site/primitives";
import { industries, type Industry } from "@/lib/industries";
import { CardinalMark } from "@/components/site/CardinalMark";
import { cn } from "@/lib/utils";

/**
 * Each sector gets its own accent hue (a light and a dark-theme value) and a hand-drawn,
 * animated motif, laid out as a bento mosaic. Styles live in index.css under "Industries mosaic".
 */
type Sector = {
  acc: string;
  accDark: string;
  /** Takes two columns on tablet and desktop */
  wide?: boolean;
  art: () => JSX.Element;
};

const SECTORS: Record<string, Sector> = {
  "/houston-medical-website-design": { acc: "174 62% 34%", accDark: "174 60% 56%", wide: true, art: HealthcareArt },
  "/houston-law-firm-website-design": { acc: "38 78% 40%", accDark: "40 85% 62%", art: LegalArt },
  "/industry/financial": { acc: "152 55% 32%", accDark: "152 55% 56%", art: FinanceArt },
  "/industry/technology": { acc: "230 68% 52%", accDark: "230 85% 72%", art: TechArt },
  "/industry/ai-automation": { acc: "272 58% 48%", accDark: "272 70% 72%", wide: true, art: AiArt },
  "/industry/construction": { acc: "24 85% 46%", accDark: "28 90% 64%", art: ConstructionArt },
};

export function Industries() {
  return (
    <div className="relative isolate overflow-hidden py-16 lg:py-24">
      <CardinalMark />
      <Container>
        <SectionHeader
          eyebrow="Industries"
          title="Deep expertise in regulated and high-stakes industries"
          description="We understand the compliance, security, and trust requirements that come with your sector."
        />
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Industries we serve">
          {industries.map((ind, i) => (
            <Tile key={ind.href} industry={ind} sector={SECTORS[ind.href]} index={i} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

function Tile({ industry: ind, sector, index }: { industry: Industry; sector: Sector; index: number }) {
  const Art = sector.art;
  return (
    <motion.li
      {...revealDelay(index)}
      style={{ "--acc": sector.acc, "--acc-dark": sector.accDark } as CSSProperties}
      className={cn("ind-tile group relative", sector.wide && "lg:col-span-2")}
    >
      <Link
        to={ind.href}
        className={cn(
          "ind-wash relative flex h-full min-h-[260px] flex-col overflow-hidden border border-border bg-background p-6 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:shadow-[0_32px_64px_-36px_rgba(15,23,42,0.45)] sm:p-7",
          sector.wide && "lg:flex-row lg:items-stretch lg:gap-8",
        )}
      >
        <div className={cn("relative z-10 flex flex-col", sector.wide ? "lg:w-[46%] lg:shrink-0" : "")}>
          <div className="flex items-start justify-between gap-4">
            <span className="ind-acc-text inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <span aria-hidden className="ind-acc-bg block h-1.5 w-1.5 rounded-full" />
              {ind.blurb}
            </span>
            <ArrowUpRight className="ind-acc-text h-5 w-5 shrink-0 opacity-60 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          </div>
          <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground">{ind.name}</h3>
          <p className="mt-2 max-w-md leading-relaxed text-muted-foreground">{ind.description}</p>
        </div>
        <div className={cn("ind-anim relative mt-6 min-h-[130px] flex-1", sector.wide && "lg:mt-0 lg:min-h-0")} aria-hidden>
          <Art />
        </div>
        <span aria-hidden className="ind-acc-bg absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" />
      </Link>
    </motion.li>
  );
}

/* ── Motifs. Each fills its box; strokes use the sector accent via CSS classes. ─────────── */

const svgProps = { className: "absolute inset-0 h-full w-full", preserveAspectRatio: "xMidYMax meet" as const };

/** ECG trace drawing across a soft grid, with an appointment chip */
function HealthcareArt() {
  return (
    <svg viewBox="0 0 320 130" {...svgProps}>
      <g className="ind-acc-stroke" opacity="0.12" strokeWidth="1">
        {[20, 50, 80, 110].map((y) => <line key={y} x1="0" y1={y} x2="320" y2={y} />)}
        {[40, 80, 120, 160, 200, 240, 280].map((x) => <line key={x} x1={x} y1="0" x2={x} y2="130" />)}
      </g>
      <path
        d="M0 78 H52 L62 78 L72 44 L84 112 L96 78 H150 L160 78 L170 30 L184 116 L196 78 H320"
        fill="none"
        className="ind-acc-stroke ind-ecg"
        strokeWidth="2.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        pathLength={1}
      />
      <circle r="4" className="ind-acc-fill ind-ecg-dot">
        <animateMotion dur="3.6s" repeatCount="indefinite" path="M0 78 H52 L62 78 L72 44 L84 112 L96 78 H150 L160 78 L170 30 L184 116 L196 78 H320" />
      </circle>
      {/* Appointment request chip */}
      <g transform="translate(214 12)">
        <rect width="96" height="34" rx="5" className="ind-acc-fill" opacity="0.12" />
        <rect x="0.5" y="0.5" width="95" height="33" rx="5" fill="none" className="ind-acc-stroke" opacity="0.5" />
        <circle cx="16" cy="17" r="7" className="ind-acc-fill" />
        <path d="M12.5 17 l2.5 2.5 l5 -5" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="30" y="10" width="52" height="4" rx="2" className="ind-acc-fill" opacity="0.8" />
        <rect x="30" y="20" width="34" height="4" rx="2" className="ind-acc-fill" opacity="0.4" />
      </g>
    </svg>
  );
}

/** Scales of justice, gently finding balance */
function LegalArt() {
  return (
    <svg viewBox="0 0 220 130" {...svgProps}>
      <g className="ind-acc-stroke" fill="none" strokeWidth="2" strokeLinecap="round">
        <line x1="110" y1="22" x2="110" y2="112" />
        <path d="M78 112 H142" strokeWidth="3" />
        <path d="M90 118 H130" opacity="0.4" />
        <circle cx="110" cy="20" r="4" className="ind-acc-fill" />
      </g>
      <g className="ind-scale-beam" style={{ transformOrigin: "110px 22px" }}>
        <line x1="40" y1="22" x2="180" y2="22" className="ind-acc-stroke" strokeWidth="2.5" strokeLinecap="round" />
        {/* Left pan */}
        <g className="ind-acc-stroke" fill="none" strokeWidth="1.5">
          <line x1="46" y1="22" x2="30" y2="66" />
          <line x1="46" y1="22" x2="62" y2="66" />
          <path d="M22 66 Q46 86 70 66 Z" className="ind-acc-fill" opacity="0.25" stroke="none" />
          <path d="M22 66 Q46 86 70 66" />
        </g>
        {/* Right pan */}
        <g className="ind-acc-stroke" fill="none" strokeWidth="1.5">
          <line x1="174" y1="22" x2="158" y2="66" />
          <line x1="174" y1="22" x2="190" y2="66" />
          <path d="M150 66 Q174 86 198 66 Z" className="ind-acc-fill" opacity="0.25" stroke="none" />
          <path d="M150 66 Q174 86 198 66" />
        </g>
      </g>
      {/* Intake checklist */}
      <g transform="translate(14 96)" opacity="0.9">
        {[0, 1].map((r) => (
          <g key={r} transform={`translate(0 ${r * 12})`}>
            <rect width="7" height="7" rx="1.5" className="ind-acc-fill" opacity={r === 0 ? 1 : 0.35} />
            <rect x="11" y="1.5" width={r === 0 ? 34 : 24} height="4" rx="2" className="ind-acc-fill" opacity={r === 0 ? 0.7 : 0.35} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Growth chart drawing itself, with a lock for trust */
function FinanceArt() {
  return (
    <svg viewBox="0 0 220 130" {...svgProps}>
      <g className="ind-acc-stroke" opacity="0.15" strokeWidth="1">
        {[30, 60, 90].map((y) => <line key={y} x1="10" y1={y} x2="210" y2={y} strokeDasharray="2 4" />)}
      </g>
      <path d="M12 104 C 50 98, 70 92, 92 74 S 140 44, 168 40 S 196 26, 208 18 V 118 H 12 Z" className="ind-acc-fill ind-area" opacity="0.14" />
      <path
        d="M12 104 C 50 98, 70 92, 92 74 S 140 44, 168 40 S 196 26, 208 18"
        fill="none"
        className="ind-acc-stroke ind-draw"
        strokeWidth="2.5"
        strokeLinecap="round"
        pathLength={1}
      />
      <g className="ind-bars">
        {[
          [20, 92, 14],
          [50, 84, 22],
          [80, 72, 34],
          [110, 60, 46],
          [140, 50, 56],
          [170, 38, 68],
        ].map(([x, y, h], i) => (
          <rect key={x} x={x} y={y} width="12" height={h} rx="2" className="ind-acc-fill ind-bar" opacity="0.35" style={{ animationDelay: `${i * 90}ms`, transformOrigin: `${x + 6}px 106px` }} />
        ))}
      </g>
      <line x1="12" y1="106" x2="208" y2="106" className="ind-acc-stroke" strokeWidth="1.5" opacity="0.6" />
      {/* Lock chip */}
      <g transform="translate(166 6)">
        <rect width="42" height="26" rx="5" className="ind-acc-fill" opacity="0.12" />
        <rect x="12" y="11" width="18" height="11" rx="2" className="ind-acc-fill" />
        <path d="M16 11 V8 a5 5 0 0 1 10 0 V11" fill="none" className="ind-acc-stroke" strokeWidth="2" />
      </g>
    </svg>
  );
}

/** A terminal window typing itself, with API blocks */
function TechArt() {
  const lines = [
    [12, 54, 1],
    [12, 92, 0.55],
    [28, 70, 0.55],
    [28, 40, 0.35],
    [12, 64, 0.8],
  ] as const;
  return (
    <svg viewBox="0 0 220 130" {...svgProps}>
      <rect x="10" y="14" width="150" height="106" rx="6" className="ind-acc-fill" opacity="0.08" />
      <rect x="10.5" y="14.5" width="149" height="105" rx="6" fill="none" className="ind-acc-stroke" opacity="0.45" />
      <line x1="10" y1="32" x2="160" y2="32" className="ind-acc-stroke" opacity="0.35" />
      {[22, 32, 42].map((cx) => <circle key={cx} cx={cx} cy="23" r="3" className="ind-acc-fill" opacity="0.6" />)}
      {lines.map(([x, w, o], i) => (
        <rect key={i} x={20 + x} y={44 + i * 14} width={w} height="5" rx="2.5" className="ind-acc-fill ind-type" opacity={o} style={{ animationDelay: `${i * 260}ms`, transformOrigin: `${20 + x}px 0` }} />
      ))}
      <rect x="32" y="112" width="7" height="3" rx="1" className="ind-acc-fill ind-cursor" />
      {/* API blocks */}
      {[
        [172, 20, "API"],
        [172, 56, "SDK"],
        [172, 92, "DB"],
      ].map(([x, y, label], i) => (
        // The animated group is nested: a CSS transform would override an SVG transform on the same element
        <g key={label} transform={`translate(${x} ${y})`}>
          <g className="ind-float" style={{ animationDelay: `${i * 500}ms` }}>
            <rect width="38" height="26" rx="5" className="ind-acc-fill" opacity={0.16 + i * 0.1} />
            <text x="19" y="17" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="Inter, system-ui, sans-serif" className="ind-acc-fill" opacity="0.9">{label}</text>
          </g>
        </g>
      ))}
      <path d="M160 33 H172 M160 69 H172 M160 105 H172" className="ind-acc-stroke" strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

/** A small neural network with signals flowing through it */
function AiArt() {
  const layers = [
    [30, [30, 65, 100]],
    [120, [20, 50, 80, 110]],
    [210, [35, 65, 95]],
    [290, [65]],
  ] as const;
  const edges: [number, number, number, number][] = [];
  for (let l = 0; l < layers.length - 1; l++) {
    for (const y1 of layers[l][1]) for (const y2 of layers[l + 1][1]) edges.push([layers[l][0], y1, layers[l + 1][0], y2]);
  }
  return (
    <svg viewBox="0 0 320 130" {...svgProps}>
      <g className="ind-acc-stroke" fill="none" strokeWidth="1">
        {edges.map(([x1, y1, x2, y2], i) => (
          <path key={i} d={`M${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`} opacity="0.22" />
        ))}
        {edges.filter((_, i) => i % 3 === 0).map(([x1, y1, x2, y2], i) => (
          <path key={`f${i}`} d={`M${x1} ${y1} C ${x1 + 40} ${y1}, ${x2 - 40} ${y2}, ${x2} ${y2}`} className="ind-flow" strokeWidth="1.5" strokeDasharray="6 14" style={{ animationDelay: `${(i % 5) * 300}ms` }} />
        ))}
      </g>
      {layers.map(([x, ys], l) =>
        ys.map((y, i) => (
          <g key={`${x}-${y}`} className="ind-node" style={{ animationDelay: `${l * 350 + i * 120}ms`, transformOrigin: `${x}px ${y}px` }}>
            <circle cx={x} cy={y} r={l === layers.length - 1 ? 9 : 6} className="ind-acc-fill" opacity={l === layers.length - 1 ? 1 : 0.85} />
            <circle cx={x} cy={y} r={l === layers.length - 1 ? 14 : 10} fill="none" className="ind-acc-stroke" opacity="0.25" />
          </g>
        )),
      )}
      <path d="M284 61 l4 4 l7 -8" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Blueprint grid with a skyline rising and a crane */
function ConstructionArt() {
  const buildings = [
    [16, 54, 30],
    [52, 36, 26],
    [84, 70, 34],
    [124, 24, 30],
    [160, 48, 28],
  ] as const;
  return (
    <svg viewBox="0 0 220 130" {...svgProps}>
      <defs>
        <pattern id="ind-bp" width="12" height="12" patternUnits="userSpaceOnUse">
          <path d="M12 0 H0 V12" fill="none" className="ind-acc-stroke" strokeWidth="0.6" opacity="0.25" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="220" height="130" fill="url(#ind-bp)" />
      {buildings.map(([x, h, w], i) => (
        <g key={x}>
          <rect x={x} y={112 - h} width={w} height={h} className="ind-acc-fill ind-rise" opacity={0.22 + i * 0.1} style={{ animationDelay: `${i * 160}ms`, transformOrigin: `${x}px 112px` }} />
          <rect x={x + 0.5} y={112 - h + 0.5} width={w - 1} height={h - 1} fill="none" className="ind-acc-stroke ind-rise" opacity="0.7" style={{ animationDelay: `${i * 160}ms`, transformOrigin: `${x}px 112px` }} />
        </g>
      ))}
      {/* Crane */}
      <g className="ind-acc-stroke" fill="none" strokeWidth="2" strokeLinecap="round">
        <line x1="196" y1="112" x2="196" y2="20" />
        <line x1="150" y1="20" x2="214" y2="20" />
        <line x1="196" y1="20" x2="214" y2="34" strokeWidth="1.5" />
        <g className="ind-hook" style={{ transformOrigin: "160px 20px" }}>
          <line x1="160" y1="20" x2="160" y2="58" strokeWidth="1.2" />
          <rect x="152" y="58" width="16" height="10" rx="1" className="ind-acc-fill" stroke="none" opacity="0.9" />
        </g>
      </g>
      <line x1="8" y1="112" x2="212" y2="112" className="ind-acc-stroke" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}
