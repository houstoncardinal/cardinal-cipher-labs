import { Fragment, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

/** Data-driven graphics an article section can carry. Every number shown must come from the
 * article's sources or from Cardinal's own published prices. */
export type BlogVisual =
  | { kind: "stats"; title?: string; caption?: string; items: { value: string; label: string }[] }
  | { kind: "bars"; title: string; caption?: string; items: { label: string; value: number; display: string; highlight?: boolean }[] }
  | { kind: "steps"; title: string; caption?: string; items: { title: string; body: string }[] }
  | { kind: "timeline"; title: string; caption?: string; items: { when: string; title: string; body: string }[] }
  | { kind: "compare"; title: string; caption?: string; columns: string[]; highlight?: number; rows: { label: string; values: (string | boolean | null)[] }[] }
  | { kind: "flags"; title: string; caption?: string; green: string[]; red: string[] }
  | { kind: "triad"; title: string; caption?: string; items: [TriadItem, TriadItem, TriadItem]; center: string };

type TriadItem = { title: string; body: string };

const EASE = [0.16, 1, 0.3, 1] as const;
const inView = { initial: "hidden", whileInView: "show", viewport: { once: true, margin: "-80px" } } as const;

/** Turns `[label](/path)` into links: internal paths use the router, others open in a new tab. */
export function rich(text: string): ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return <Fragment key={i}>{part}</Fragment>;
    const [, label, href] = m;
    const cls = "font-medium text-foreground underline decoration-primary/40 decoration-2 underline-offset-4 transition-colors hover:text-primary hover:decoration-primary";
    return href.startsWith("/") ? (
      <Link key={i} to={href} className={cls}>
        {label}
      </Link>
    ) : (
      <a key={i} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {label}
      </a>
    );
  });
}

export function ArticleVisual({ visual }: { visual: BlogVisual }) {
  return (
    <figure className="my-10">
      {"title" in visual && visual.title && <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{visual.title}</p>}
      {visual.kind === "stats" && <Stats items={visual.items} />}
      {visual.kind === "bars" && <Bars items={visual.items} />}
      {visual.kind === "steps" && <Steps items={visual.items} />}
      {visual.kind === "timeline" && <Timeline items={visual.items} />}
      {visual.kind === "compare" && <Compare columns={visual.columns} rows={visual.rows} highlight={visual.highlight} />}
      {visual.kind === "flags" && <Flags green={visual.green} red={visual.red} />}
      {visual.kind === "triad" && <Triad items={visual.items} center={visual.center} />}
      {visual.caption && <figcaption className="mt-4 text-sm leading-relaxed text-muted-foreground">{rich(visual.caption)}</figcaption>}
    </figure>
  );
}

function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <motion.div {...inView} variants={{ show: { transition: { staggerChildren: 0.1 } } }} className={cn("grid gap-px overflow-hidden border border-border bg-border", items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3")}>
      {items.map((s) => (
        <motion.div
          key={s.label}
          variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
          className="bg-background p-6"
        >
          <p className="whitespace-nowrap font-display text-3xl font-semibold tracking-tight text-primary md:text-4xl">{s.value}</p>
          <p className="mt-2 text-sm leading-snug text-text-secondary">{s.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

function Bars({ items }: { items: { label: string; value: number; display: string; highlight?: boolean }[] }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <motion.ul {...inView} variants={{ show: { transition: { staggerChildren: 0.08 } } }} className="space-y-4 border border-border bg-background p-6">
      {items.map((b) => (
        <motion.li key={b.label} variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}>
          <div className="flex items-baseline justify-between gap-4 text-sm">
            <span className={cn("font-medium", b.highlight ? "text-foreground" : "text-text-secondary")}>{b.label}</span>
            <span className="font-display font-semibold tabular-nums text-foreground">{b.display}</span>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden bg-secondary">
            <motion.div
              className={cn("h-full origin-left", b.highlight ? "bg-primary" : "bg-foreground/70")}
              style={{ width: `${(b.value / max) * 100}%` }}
              variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.1, ease: EASE } } }}
            />
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <motion.ol {...inView} variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="relative space-y-6 pl-12">
      <motion.span
        aria-hidden
        className="absolute bottom-4 left-[15px] top-4 w-px origin-top bg-primary/40"
        variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 1.4, ease: EASE } } }}
      />
      {items.map((s, i) => (
        <motion.li key={s.title} className="relative" variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } }}>
          <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-display text-sm font-semibold text-primary-foreground">{i + 1}</span>
          <p className="font-display text-lg font-semibold text-foreground">{s.title}</p>
          <p className="mt-1 leading-relaxed text-text-secondary">{rich(s.body)}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function Timeline({ items }: { items: { when: string; title: string; body: string }[] }) {
  return (
    <motion.ol {...inView} variants={{ show: { transition: { staggerChildren: 0.12 } } }} className="ink-island grid gap-px overflow-hidden bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((t) => (
        <motion.li key={t.title} className="bg-ink p-6 text-ink-foreground" variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">{t.when}</p>
          <p className="mt-3 font-display text-lg font-semibold">{t.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.body}</p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

function Cell({ value }: { value: string | boolean | null }) {
  if (value === true) return <Check className="mx-auto h-4 w-4 text-primary" aria-label="Yes" />;
  if (value === false) return <X className="mx-auto h-4 w-4 text-muted-foreground" aria-label="No" />;
  if (value === null) return <Minus className="mx-auto h-4 w-4 text-muted-foreground" aria-label="Depends" />;
  return <span>{value}</span>;
}

function Compare({ columns, rows, highlight }: { columns: string[]; rows: { label: string; values: (string | boolean | null)[] }[]; highlight?: number }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <motion.table {...inView} variants={{ show: { transition: { staggerChildren: 0.06 } } }} className="w-full min-w-[34rem] border-collapse border border-border text-sm">
        <thead>
          <tr className="bg-secondary">
            <th className="p-3 text-left font-semibold text-foreground" scope="col">
              <span className="sr-only">Factor</span>
            </th>
            {columns.map((c, i) => (
              <th key={c} scope="col" className={cn("p-3 text-center font-display font-semibold", i === highlight ? "bg-primary text-primary-foreground" : "text-foreground")}>
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <motion.tr key={r.label} className="border-t border-border" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.5 } } }}>
              <th scope="row" className="p-3 text-left font-medium text-foreground">{r.label}</th>
              {r.values.map((v, i) => (
                <td key={i} className={cn("p-3 text-center text-text-secondary", i === highlight && "bg-primary/[0.06] font-medium text-foreground")}>
                  <Cell value={v} />
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </div>
  );
}

function Flags({ green, red }: { green: string[]; red: string[] }) {
  const col = (items: string[], good: boolean) => (
    <motion.ul
      {...inView}
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      className={cn("space-y-3 border p-6", good ? "border-emerald-600/25 bg-emerald-600/[0.04]" : "border-primary/25 bg-primary/[0.04]")}
    >
      <li className={cn("text-xs font-semibold uppercase tracking-[0.16em]", good ? "text-emerald-700 dark:text-emerald-400" : "text-primary")}>{good ? "Green flags" : "Red flags"}</li>
      {items.map((t) => (
        <motion.li key={t} className="flex gap-3 text-[15px] leading-relaxed text-text-secondary" variants={{ hidden: { opacity: 0, x: good ? -10 : 10 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } } }}>
          {good ? <Check className="mt-1 h-4 w-4 shrink-0 text-emerald-600" /> : <X className="mt-1 h-4 w-4 shrink-0 text-primary" />}
          {t}
        </motion.li>
      ))}
    </motion.ul>
  );
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {col(green, true)}
      {col(red, false)}
    </div>
  );
}

/** Three overlapping circles (e.g. Google's local ranking factors) with notes beneath. */
function Triad({ items, center }: { items: [TriadItem, TriadItem, TriadItem]; center: string }) {
  const circles = [
    { cx: 120, cy: 95 },
    { cx: 200, cy: 95 },
    { cx: 160, cy: 165 },
  ];
  return (
    <div className="border border-border bg-background p-6">
      <motion.svg {...inView} viewBox="0 0 320 260" className="mx-auto block w-full max-w-sm" role="img" aria-label={`${items.map((i) => i.title).join(", ")}: ${center}`}>
        {circles.map((c, i) => (
          <motion.g key={i} variants={{ hidden: { opacity: 0, scale: 0.6 }, show: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: i * 0.15, ease: EASE } } }} style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}>
            <circle cx={c.cx} cy={c.cy} r="70" className={i === 2 ? "fill-primary/15 stroke-primary" : "fill-foreground/[0.06] stroke-foreground/40"} strokeWidth="1.5" />
            <text x={c.cx + (i === 0 ? -30 : i === 1 ? 30 : 0)} y={c.cy + (i === 2 ? 38 : -22)} textAnchor="middle" className="fill-foreground font-display text-[13px] font-semibold">
              {items[i].title}
            </text>
          </motion.g>
        ))}
        <motion.text x="160" y="124" textAnchor="middle" className="fill-primary font-display text-[11px] font-bold uppercase tracking-wider" variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.7 } } }}>
          {center}
        </motion.text>
      </motion.svg>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        {items.map((it) => (
          <div key={it.title}>
            <dt className="font-display font-semibold text-foreground">{it.title}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-text-secondary">{it.body}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
