import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LEAD_STAGES, leadSource, money, serviceName, useLeads } from '@/lib/admin';

const RANGES = [
  { days: 30, label: '30 days' },
  { days: 90, label: '90 days' },
  { days: 365, label: '12 months' },
];
const DAY = 86_400_000;
const axis = { fontSize: 11, fill: 'hsl(var(--muted-foreground))' };
const tooltipStyle = {
  contentStyle: { background: 'hsl(var(--background))', border: '1px solid hsl(var(--border))', borderRadius: 0, fontSize: 12 },
  labelStyle: { color: 'hsl(var(--foreground))', fontWeight: 600 },
  cursor: { fill: 'hsl(var(--secondary))' },
};

function Card({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={cn('border border-border bg-background p-5', className)}>
      <h2 className="mb-4 font-display text-base font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

function RankList({ rows }: { rows: { label: string; value: number }[] }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  if (!rows.length) return <p className="text-sm text-muted-foreground">No data in this range yet.</p>;
  return (
    <ul className="space-y-2.5">
      {rows.map((r) => (
        <li key={r.label} className="text-sm">
          <div className="flex justify-between gap-3">
            <span className="truncate text-foreground">{r.label}</span>
            <span className="font-semibold tabular-nums text-foreground">{r.value}</span>
          </div>
          <span className="mt-1 block h-1.5 bg-secondary">
            <span className="block h-full bg-primary" style={{ width: `${(r.value / max) * 100}%` }} />
          </span>
        </li>
      ))}
    </ul>
  );
}

const top = (counts: Record<string, number>, n = 8) =>
  Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([label, value]) => ({ label, value }));

/** First-party lead analytics (from the pipeline) plus shortcuts to traffic tools. */
export function AdminAnalytics() {
  const { data: all = [] } = useLeads();
  const [days, setDays] = useState(90);

  const a = useMemo(() => {
    const since = Date.now() - days * DAY;
    const leads = all.filter((l) => new Date(l.created_at).getTime() >= since);
    const count = (key: (l: (typeof leads)[number]) => string | null | undefined) => {
      const m: Record<string, number> = {};
      for (const l of leads) {
        const k = key(l);
        if (k) m[k] = (m[k] ?? 0) + 1;
      }
      return m;
    };
    // Weekly buckets (oldest → newest)
    const weeks = Math.min(52, Math.ceil(days / 7));
    const weekly = Array.from({ length: weeks }, (_, i) => {
      const end = Date.now() - (weeks - 1 - i) * 7 * DAY;
      const start = end - 7 * DAY;
      return {
        week: new Date(start).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        leads: leads.filter((l) => {
          const t = new Date(l.created_at).getTime();
          return t >= start && t < end;
        }).length,
      };
    });
    const won = leads.filter((l) => l.status === 'won');
    return {
      total: leads.length,
      won: won.length,
      wonValue: won.reduce((s, l) => s + (l.value ?? 0), 0),
      conversion: leads.length ? Math.round((won.length / leads.length) * 100) : 0,
      urgentShare: leads.length ? Math.round((leads.filter((l) => l.expedited).length / leads.length) * 100) : 0,
      weekly,
      byService: top(count((l) => serviceName(l.service)), 10),
      bySource: top(count((l) => leadSource(l))),
      byPage: top(count((l) => l.source_page)),
      byContact: top(count((l) => l.preferred_contact ?? 'Email'), 4),
      funnel: LEAD_STAGES.map((s) => ({ stage: s.label, leads: leads.filter((l) => l.status === s.id).length })),
    };
  }, [all, days]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-muted-foreground">Lead performance from your website forms.</p>
        <div className="flex border border-border bg-background p-0.5">
          {RANGES.map((r) => (
            <button key={r.days} type="button" onClick={() => setDays(r.days)} className={cn('px-3 py-1.5 text-sm font-medium', days === r.days ? 'bg-foreground text-background' : 'text-muted-foreground hover:text-foreground')}>
              {r.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          { label: 'Leads', value: a.total },
          { label: 'Lead → win rate', value: `${a.conversion}%` },
          { label: 'Urgent requests', value: `${a.urgentShare}%` },
          { label: 'Won value', value: a.wonValue ? money(a.wonValue) : a.won },
        ].map((k) => (
          <div key={k.label} className="border border-border bg-background p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{k.label}</p>
            <p className="mt-2 font-display text-3xl font-semibold tabular-nums text-foreground">{k.value}</p>
          </div>
        ))}
      </div>

      <Card title="Leads per week">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={a.weekly} margin={{ left: -20, right: 8, top: 4 }}>
              <CartesianGrid vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="week" tick={axis} tickLine={false} axisLine={false} interval="preserveStartEnd" minTickGap={16} />
              <YAxis allowDecimals={false} tick={axis} tickLine={false} axisLine={false} />
              <Tooltip {...tooltipStyle} />
              <Bar dataKey="leads" name="Leads" fill="hsl(var(--primary))" radius={[2, 2, 0, 0]} maxBarSize={36} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card title="Pipeline (leads in this range by current stage)">
          <div className="h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={a.funnel} layout="vertical" margin={{ left: 10, right: 16 }}>
                <XAxis type="number" allowDecimals={false} tick={axis} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="stage" tick={axis} tickLine={false} axisLine={false} width={72} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="leads" name="Leads" fill="hsl(var(--primary))" radius={[0, 2, 2, 0]} maxBarSize={22} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        <Card title="Leads by service"><RankList rows={a.byService} /></Card>
        <Card title="Where leads come from"><RankList rows={a.bySource} /></Card>
        <Card title="Pages that convert"><RankList rows={a.byPage} /></Card>
        <Card title="Preferred contact method"><RankList rows={a.byContact} /></Card>
        <Card title="Traffic & search tools">
          <ul className="space-y-2 text-sm">
            {[
              { label: 'Google Analytics 4 — traffic, pages, conversions', href: 'https://analytics.google.com/' },
              { label: 'Google Search Console — rankings & indexing', href: 'https://search.google.com/search-console' },
              { label: 'Netlify Forms — raw form submissions', href: 'https://app.netlify.com/' },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-3 border border-border px-3 py-2.5 text-foreground hover:bg-secondary">
                  {l.label} <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
