import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowUpRight, Inbox } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { serviceGroups, services } from '@/lib/services-catalog';
import { useLeads } from '@/lib/admin';

const DAY = 86_400_000;

/** The service catalog (from the website) joined with live demand from the leads pipeline. */
export function AdminServices() {
  const { data: leads = [] } = useLeads();
  const { data: projects = [] } = useQuery({
    queryKey: ['projects', 'by-service'],
    queryFn: async () => {
      const { data } = await supabase.from('projects').select('id, service, status');
      return data ?? [];
    },
  });

  const demand = useMemo(() => {
    const now = Date.now();
    const m: Record<string, { recent: number; total: number; won: number; projects: number }> = {};
    for (const s of services) m[s.slug] = { recent: 0, total: 0, won: 0, projects: 0 };
    for (const l of leads) {
      if (!l.service || !m[l.service]) continue;
      m[l.service].total++;
      if (now - new Date(l.created_at).getTime() < 30 * DAY) m[l.service].recent++;
      if (l.status === 'won') m[l.service].won++;
    }
    for (const p of projects) if (p.service && m[p.service]) m[p.service].projects++;
    return m;
  }, [leads, projects]);

  return (
    <div className="space-y-8">
      <p className="max-w-2xl text-sm text-muted-foreground">
        Your packages and prices exactly as they appear on the website, with live demand from the leads pipeline. Prices are edited in{' '}
        <code className="text-foreground">src/lib/services-catalog.ts</code> so the site, pricing page and SEO stay in sync.
      </p>

      {serviceGroups.map((g) => (
        <section key={g.group}>
          <h2 className="font-display text-lg font-semibold text-foreground">{g.title}</h2>
          <p className="text-sm text-muted-foreground">{g.description}</p>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {services
              .filter((s) => s.group === g.group)
              .map((s) => {
                const d = demand[s.slug];
                return (
                  <article key={s.slug} className="flex flex-col border border-border bg-background">
                    <header className="flex items-start gap-3 border-b border-border p-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-secondary text-primary">
                        <s.icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">{s.name}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{s.summary}</p>
                      </div>
                      <a href={s.path} target="_blank" rel="noreferrer" className="shrink-0 p-1 text-muted-foreground hover:text-foreground" aria-label={`Open the ${s.name} page`}>
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </header>
                    <ul className="grid grid-cols-3 divide-x divide-border border-b border-border">
                      {s.tiers.map((t) => (
                        <li key={t.name} className="p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">{t.level}{t.popular ? ' ★' : ''}</p>
                          <p className="mt-1 truncate text-xs text-muted-foreground">{t.name}</p>
                          <p className="mt-1 font-display text-lg font-semibold text-foreground">{t.price}</p>
                          <p className="text-[11px] text-muted-foreground">{t.billing}</p>
                        </li>
                      ))}
                    </ul>
                    <dl className="grid grid-cols-4 gap-2 p-5 text-center">
                      {[
                        { label: 'Leads 30d', value: d.recent },
                        { label: 'All leads', value: d.total },
                        { label: 'Won', value: d.won },
                        { label: 'Projects', value: d.projects },
                      ].map((x) => (
                        <div key={x.label}>
                          <dd className="font-display text-xl font-semibold tabular-nums text-foreground">{x.value}</dd>
                          <dt className="text-[11px] text-muted-foreground">{x.label}</dt>
                        </div>
                      ))}
                    </dl>
                    <footer className="mt-auto flex items-center justify-between border-t border-border px-5 py-3 text-sm">
                      <span className="text-muted-foreground">
                        {d.total ? `${Math.round((d.won / d.total) * 100)}% lead → win` : 'No leads yet'}
                      </span>
                      <Link to={`/admin/leads?service=${s.slug}`} className="inline-flex items-center gap-1.5 font-medium text-primary">
                        <Inbox className="h-4 w-4" /> View leads
                      </Link>
                    </footer>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
