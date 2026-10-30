import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowRight, ArrowUpRight, CalendarClock, FolderKanban, Inbox, Trophy, Users, Zap, type LucideIcon } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { LEAD_STAGES, money, OPEN_STAGES, serviceName, stageOf, timeAgo, useLeads } from '@/lib/admin';

const DAY = 86_400_000;

function Kpi({ icon: Icon, label, value, sub, to, accent }: { icon: LucideIcon; label: string; value: string | number; sub?: string; to: string; accent?: boolean }) {
  return (
    <Link to={to} className="group flex flex-col border border-border bg-background p-5 transition-shadow hover:shadow-[0_20px_40px_-30px_rgba(15,23,42,0.45)]">
      <span className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{label}</span>
        <Icon className={cn('h-4 w-4', accent ? 'text-primary' : 'text-muted-foreground')} />
      </span>
      <span className={cn('mt-3 font-display text-3xl font-semibold tabular-nums', accent ? 'text-primary' : 'text-foreground')}>{value}</span>
      {sub && <span className="mt-1 text-xs text-muted-foreground">{sub}</span>}
    </Link>
  );
}

function Panel({ title, action, children }: { title: string; action?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section className="border border-border bg-background">
      <header className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <h2 className="font-display text-base font-semibold text-foreground">{title}</h2>
        {action}
      </header>
      {children}
    </section>
  );
}

export function AdminDashboard() {
  const { data: leads = [], error: leadsError } = useLeads();
  const { data: counts } = useQuery({
    queryKey: ['dashboard-counts'],
    queryFn: async () => {
      const [clients, projects] = await Promise.all([
        supabase.from('clients').select('id', { count: 'exact', head: true }),
        supabase.from('projects').select('id', { count: 'exact', head: true }).in('status', ['planning', 'in_progress']),
      ]);
      return { clients: clients.count ?? 0, activeProjects: projects.count ?? 0 };
    },
  });
  const { data: milestones = [] } = useQuery({
    queryKey: ['dashboard-milestones'],
    queryFn: async () => {
      const { data } = await supabase.from('milestones').select('id, name, due_date, project_id, projects(name)').eq('completed', false).not('due_date', 'is', null).order('due_date').limit(5);
      return (data ?? []) as { id: string; name: string; due_date: string | null; projects: { name: string } | null }[];
    },
  });
  const { data: activity = [] } = useQuery({
    queryKey: ['dashboard-activity'],
    queryFn: async () => {
      const { data } = await supabase.from('activity_logs').select('*').order('created_at', { ascending: false }).limit(6);
      return data ?? [];
    },
  });

  const stats = useMemo(() => {
    const now = Date.now();
    const thisWeek = leads.filter((l) => now - new Date(l.created_at).getTime() < 7 * DAY).length;
    const lastWeek = leads.filter((l) => {
      const age = now - new Date(l.created_at).getTime();
      return age >= 7 * DAY && age < 14 * DAY;
    }).length;
    const urgent = leads.filter((l) => l.expedited && l.status === 'new').length;
    const open = leads.filter((l) => OPEN_STAGES.includes(l.status as never));
    const monthStart = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getTime();
    const wonMonth = leads.filter((l) => l.status === 'won' && new Date(l.updated_at).getTime() >= monthStart);
    const byStage = LEAD_STAGES.map((s) => ({ ...s, count: leads.filter((l) => l.status === s.id).length }));
    return {
      thisWeek,
      delta: thisWeek - lastWeek,
      urgent,
      openCount: open.length,
      openValue: open.reduce((sum, l) => sum + (l.value ?? 0), 0),
      wonCount: wonMonth.length,
      wonValue: wonMonth.reduce((sum, l) => sum + (l.value ?? 0), 0),
      byStage,
      maxStage: Math.max(1, ...byStage.map((s) => s.count)),
    };
  }, [leads]);

  const greeting = new Date().getHours() < 12 ? 'Good morning' : new Date().getHours() < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="font-display text-2xl font-semibold text-foreground">{greeting}, Hunain.</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {stats.urgent > 0 ? `${stats.urgent} urgent lead${stats.urgent > 1 ? 's' : ''} waiting for a same-day reply.` : "Here's what's happening across Cardinal today."}
          </p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/leads" className="inline-flex h-9 items-center gap-2 bg-foreground px-4 text-sm font-semibold text-background">
            <Inbox className="h-4 w-4" /> Open leads
          </Link>
          <Link to="/admin/projects" className="inline-flex h-9 items-center gap-2 border border-border bg-background px-4 text-sm font-medium text-foreground hover:bg-secondary">
            <FolderKanban className="h-4 w-4" /> Projects
          </Link>
        </div>
      </div>

      {leadsError && (
        <p className="border-l-2 border-primary bg-primary/5 px-4 py-3 text-sm text-foreground">
          The leads pipeline isn't set up in the database yet. Run <code>supabase/migrations/20261030000000_leads_pipeline.sql</code> in Supabase to turn it on.
        </p>
      )}

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-6">
        <Kpi icon={Inbox} label="New this week" value={stats.thisWeek} sub={`${stats.delta >= 0 ? '+' : ''}${stats.delta} vs last week`} to="/admin/leads" />
        <Kpi icon={Zap} label="Urgent waiting" value={stats.urgent} sub="Same-business-day promise" to="/admin/leads" accent={stats.urgent > 0} />
        <Kpi icon={ArrowUpRight} label="Open pipeline" value={stats.openCount} sub={stats.openValue ? `${money(stats.openValue)} estimated` : 'Contacted → Proposal'} to="/admin/leads" />
        <Kpi icon={Trophy} label="Won this month" value={stats.wonCount} sub={stats.wonValue ? money(stats.wonValue) : undefined} to="/admin/analytics" />
        <Kpi icon={FolderKanban} label="Active projects" value={counts?.activeProjects ?? '—'} to="/admin/projects" />
        <Kpi icon={Users} label="Clients" value={counts?.clients ?? '—'} to="/admin/clients" />
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)] gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <Panel title="Latest leads" action={<Link to="/admin/leads" className="inline-flex items-center gap-1 text-sm font-medium text-primary">All leads <ArrowRight className="h-3.5 w-3.5" /></Link>}>
          {leads.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-muted-foreground">No leads yet — website enquiries will appear here.</p>
          ) : (
            <ul className="divide-y divide-border">
              {leads.slice(0, 8).map((l) => (
                <li key={l.id}>
                  <Link to={`/admin/leads?id=${l.id}`} className="flex items-center gap-3 px-5 py-3 hover:bg-secondary/60">
                    <span className={cn('h-2 w-2 shrink-0 rounded-full', l.status === 'new' ? 'bg-primary' : 'bg-transparent')} />
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1.5 truncate font-medium text-foreground">
                        {l.name} {l.expedited && <Zap className="h-3.5 w-3.5 text-primary" />}
                      </span>
                      <span className="block truncate text-xs text-muted-foreground">{serviceName(l.service)}{l.plan ? ` · ${l.plan}` : ''}</span>
                    </span>
                    <span className="hidden text-xs text-muted-foreground sm:block">{timeAgo(l.created_at)}</span>
                    <span className={cn('border px-2 py-0.5 text-[11px] font-semibold', stageOf(l.status).tone)}>{stageOf(l.status).label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Panel>

        <div className="space-y-6">
          <Panel title="Pipeline">
            <ul className="space-y-3 p-5">
              {stats.byStage.map((s) => (
                <li key={s.id} className="grid grid-cols-[5.5rem_1fr_2rem] items-center gap-3 text-sm">
                  <span className="text-muted-foreground">{s.label}</span>
                  <span className="h-2 overflow-hidden bg-secondary">
                    <span className={cn('block h-full', s.id === 'lost' ? 'bg-muted-foreground/40' : 'bg-primary')} style={{ width: `${(s.count / stats.maxStage) * 100}%` }} />
                  </span>
                  <span className="text-right font-semibold tabular-nums text-foreground">{s.count}</span>
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Upcoming milestones">
            {milestones.length === 0 ? (
              <p className="px-5 py-6 text-sm text-muted-foreground">No open milestones with due dates.</p>
            ) : (
              <ul className="divide-y divide-border">
                {milestones.map((m) => (
                  <li key={m.id} className="flex items-center gap-3 px-5 py-3 text-sm">
                    <CalendarClock className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium text-foreground">{m.name}</span>
                      <span className="block truncate text-xs text-muted-foreground">{m.projects?.name}</span>
                    </span>
                    <span className="text-xs text-muted-foreground">{m.due_date && new Date(m.due_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </li>
                ))}
              </ul>
            )}
          </Panel>

          <Panel title="Recent activity" action={<Link to="/admin/activity" className="text-sm font-medium text-primary">View all</Link>}>
            {activity.length === 0 ? (
              <p className="px-5 py-6 text-sm text-muted-foreground">No activity yet.</p>
            ) : (
              <ul className="divide-y divide-border">
                {activity.map((a) => (
                  <li key={a.id} className="px-5 py-3 text-sm">
                    <span className="text-foreground">{a.action}</span>
                    <span className="ml-2 text-xs text-muted-foreground">{timeAgo(a.created_at)}</span>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>
      </div>
    </div>
  );
}
