import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Download, Inbox, Mail, MessageSquare, Phone, Search, Trash2, UserPlus, Zap } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import { services } from '@/lib/services-catalog';
import { cn } from '@/lib/utils';
import {
  downloadCsv,
  LEAD_STAGES,
  leadSource,
  logActivity,
  money,
  serviceName,
  stageOf,
  timeAgo,
  useLeads,
  type Lead,
  type LeadStage,
} from '@/lib/admin';

function StagePill({ status }: { status: string }) {
  const s = stageOf(status);
  return <span className={cn('inline-flex items-center border px-2 py-0.5 text-[11px] font-semibold', s.tone)}>{s.label}</span>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  if (children == null || children === '') return null;
  return (
    <div>
      <dt className="text-xs text-muted-foreground">{label}</dt>
      <dd className="mt-0.5 text-sm text-foreground">{children}</dd>
    </div>
  );
}

function LeadDetail({ lead, onClose }: { lead: Lead; onClose: () => void }) {
  const qc = useQueryClient();
  const { toast } = useToast();
  const [notes, setNotes] = useState(lead.notes ?? '');
  const [value, setValue] = useState(lead.value?.toString() ?? '');
  useEffect(() => {
    setNotes(lead.notes ?? '');
    setValue(lead.value?.toString() ?? '');
  }, [lead.id, lead.notes, lead.value]);

  const update = useMutation({
    mutationFn: async (patch: Partial<Lead>) => {
      const { error } = await supabase.from('leads').update(patch).eq('id', lead.id);
      if (error) throw error;
      if (patch.status) await logActivity(`Lead moved to ${stageOf(patch.status).label}`, 'lead', lead.id, { name: lead.name });
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ['leads'] }),
    onError: (e: Error) => toast({ title: 'Could not save', description: e.message, variant: 'destructive' }),
  });

  const convert = useMutation({
    mutationFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .insert({
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          company: lead.company,
          status: 'active',
          notes: [`Converted from website lead (${serviceName(lead.service)}${lead.plan ? ` · ${lead.plan}` : ''})`, lead.message].filter(Boolean).join('\n\n'),
        })
        .select('id')
        .single();
      if (error) throw error;
      const { error: e2 } = await supabase.from('leads').update({ client_id: data.id, status: 'won' }).eq('id', lead.id);
      if (e2) throw e2;
      await logActivity('Lead converted to client', 'client', data.id, { name: lead.name });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['leads'] });
      qc.invalidateQueries({ queryKey: ['clients'] });
      toast({ title: 'Client created', description: `${lead.name} is now in Clients.` });
    },
    onError: (e: Error) => toast({ title: 'Could not convert', description: e.message, variant: 'destructive' }),
  });

  const remove = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('leads').delete().eq('id', lead.id);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['leads'] });
      onClose();
    },
  });

  const setStage = (status: LeadStage) =>
    update.mutate({ status, ...(lead.status === 'new' && status !== 'new' && !lead.contacted_at ? { contacted_at: new Date().toISOString() } : {}) });

  const preferred = lead.preferred_contact ?? 'Email';
  const digits = lead.phone?.replace(/[^\d+]/g, '');
  const actions = [
    { key: 'Email', href: `mailto:${lead.email}?subject=${encodeURIComponent(`Your ${serviceName(lead.service)} inquiry — Cardinal Consulting`)}`, icon: Mail, label: 'Email' },
    ...(digits ? [{ key: 'Phone call', href: `tel:${digits}`, icon: Phone, label: 'Call' }, { key: 'Text message', href: `sms:${digits}`, icon: MessageSquare, label: 'Text' }] : []),
  ];

  return (
    <div className="space-y-6">
      {lead.expedited && (
        <p className="flex items-center gap-2 border-l-2 border-primary bg-primary/5 px-3 py-2 text-sm font-medium text-foreground">
          <Zap className="h-4 w-4 text-primary" /> Urgent — promised a same-business-day response
        </p>
      )}

      <div className="grid grid-cols-3 gap-2">
        {actions.map((a) => (
          <a
            key={a.key}
            href={a.href}
            className={cn(
              'flex h-11 items-center justify-center gap-2 border text-sm font-semibold transition-colors',
              a.key === preferred ? 'border-foreground bg-foreground text-background' : 'border-border text-foreground hover:bg-secondary',
            )}
          >
            <a.icon className="h-4 w-4" /> {a.label}
          </a>
        ))}
      </div>
      <p className="-mt-3 text-xs text-muted-foreground">
        Prefers <strong className="text-foreground">{preferred.toLowerCase()}</strong>
        {lead.best_time ? <> · best time: <strong className="text-foreground">{lead.best_time.toLowerCase()}</strong></> : null}
      </p>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">Stage</p>
        <div className="grid grid-cols-3 gap-1.5">
          {LEAD_STAGES.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setStage(s.id)}
              className={cn('border px-2 py-2 text-xs font-semibold transition-colors', lead.status === s.id ? s.tone : 'border-border text-muted-foreground hover:text-foreground')}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-5">
        <Field label="Email"><a href={`mailto:${lead.email}`} className="underline-offset-2 hover:underline">{lead.email}</a></Field>
        <Field label="Phone">{lead.phone}</Field>
        <Field label="Company / website">{lead.company}</Field>
        <Field label="Received">{new Date(lead.created_at).toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</Field>
        <Field label="Service">{serviceName(lead.service)}</Field>
        <Field label="Package">{lead.plan}</Field>
        <Field label="Needs">{lead.needs}</Field>
        <Field label="Timeline">{lead.timeline}</Field>
        <Field label="Budget">{lead.budget}</Field>
        <Field label="Source">{leadSource(lead)}{lead.utm_campaign ? ` · ${lead.utm_campaign}` : ''}</Field>
        <Field label="Form page">{lead.source_page}</Field>
        <Field label="First landing page">{lead.landing_page}</Field>
      </dl>
      {lead.message && (
        <div>
          <p className="text-xs text-muted-foreground">Message</p>
          <p className="mt-1 whitespace-pre-wrap border border-border bg-secondary/50 p-3 text-sm text-foreground">{lead.message}</p>
        </div>
      )}

      <div className="grid gap-3 border-t border-border pt-5">
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground" htmlFor="lead-value">Estimated value</label>
        <input
          id="lead-value"
          inputMode="decimal"
          value={value}
          onChange={(e) => setValue(e.target.value.replace(/[^\d.]/g, ''))}
          onBlur={() => update.mutate({ value: value ? Number(value) : null })}
          placeholder="e.g. 3500"
          className="h-10 border border-input bg-background px-3 text-sm text-foreground focus:border-foreground focus:outline-none"
        />
        <label className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground" htmlFor="lead-notes">Notes</label>
        <textarea
          id="lead-notes"
          rows={4}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          onBlur={() => notes !== (lead.notes ?? '') && update.mutate({ notes: notes || null })}
          placeholder="Call notes, next steps…"
          className="resize-none border border-input bg-background p-3 text-sm text-foreground focus:border-foreground focus:outline-none"
        />
        <p className="text-[11px] text-muted-foreground">Saves automatically when you click away.</p>
      </div>

      <div className="flex flex-wrap gap-2 border-t border-border pt-5">
        {lead.client_id ? (
          <a href="/admin/clients" className="inline-flex h-10 items-center gap-2 border border-border px-4 text-sm font-semibold text-foreground hover:bg-secondary">
            <UserPlus className="h-4 w-4" /> View client
          </a>
        ) : (
          <button
            type="button"
            disabled={convert.isPending}
            onClick={() => convert.mutate()}
            className="inline-flex h-10 items-center gap-2 bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
          >
            <UserPlus className="h-4 w-4" /> Convert to client
          </button>
        )}
        <button
          type="button"
          onClick={() => window.confirm(`Delete the lead from ${lead.name}? This can't be undone.`) && remove.mutate()}
          className="inline-flex h-10 items-center gap-2 border border-border px-4 text-sm font-medium text-muted-foreground hover:border-destructive hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" /> Delete
        </button>
      </div>
    </div>
  );
}

export function AdminLeads() {
  const { data: leads = [], isLoading, error } = useLeads();
  const [params, setParams] = useSearchParams();
  const [stage, setStage] = useState<LeadStage | 'all'>('all');
  const [query, setQuery] = useState('');
  const [service, setService] = useState(params.get('service') ?? '');
  const [urgentOnly, setUrgentOnly] = useState(false);
  const openId = params.get('id');
  const open = leads.find((l) => l.id === openId) ?? null;

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: leads.length };
    for (const l of leads) c[l.status] = (c[l.status] ?? 0) + 1;
    return c;
  }, [leads]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter(
      (l) =>
        (stage === 'all' || l.status === stage) &&
        (!service || l.service === service) &&
        (!urgentOnly || l.expedited) &&
        (!q || [l.name, l.email, l.company, l.phone, l.message].some((v) => v?.toLowerCase().includes(q))),
    );
  }, [leads, stage, service, urgentOnly, query]);

  const openLead = (id: string | null) => {
    const next = new URLSearchParams(params);
    if (id) next.set('id', id);
    else next.delete('id');
    setParams(next, { replace: true });
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-muted-foreground">Every website enquiry lands here automatically. Work each one from New to Won.</p>
        </div>
        <button
          type="button"
          onClick={() =>
            downloadCsv(
              `cardinal-leads-${new Date().toISOString().slice(0, 10)}.csv`,
              shown.map((l) => ({
                received: l.created_at, name: l.name, email: l.email, phone: l.phone, company: l.company, service: serviceName(l.service), package: l.plan,
                needs: l.needs, timeline: l.timeline, budget: l.budget, urgent: l.expedited ? 'yes' : 'no', preferred_contact: l.preferred_contact,
                best_time: l.best_time, stage: stageOf(l.status).label, value: l.value, source: leadSource(l), campaign: l.utm_campaign, message: l.message, notes: l.notes,
              })),
            )
          }
          className="inline-flex h-9 items-center gap-2 self-start border border-border bg-background px-3 text-sm font-medium text-foreground hover:bg-secondary"
        >
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {/* Stage tabs */}
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <div className="flex min-w-max gap-1 border-b border-border">
          {(['all', ...LEAD_STAGES.map((s) => s.id)] as const).map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setStage(id)}
              className={cn('relative px-3 py-2.5 text-sm font-medium transition-colors', stage === id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground')}
            >
              {id === 'all' ? 'All' : stageOf(id).label}
              <span className="ml-1.5 text-xs tabular-nums text-muted-foreground">{counts[id] ?? 0}</span>
              {stage === id && <span className="absolute inset-x-2 -bottom-px h-0.5 bg-primary" />}
            </button>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, email, company, message…" className="h-10 w-full border border-input bg-background pl-9 pr-3 text-sm text-foreground focus:border-foreground focus:outline-none" />
        </label>
        <select value={service} onChange={(e) => setService(e.target.value)} className="h-10 border border-input bg-background px-3 text-sm text-foreground">
          <option value="">All services</option>
          {services.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
        <button
          type="button"
          onClick={() => setUrgentOnly((v) => !v)}
          aria-pressed={urgentOnly}
          className={cn('inline-flex h-10 items-center justify-center gap-2 border px-3 text-sm font-medium', urgentOnly ? 'border-primary bg-primary/10 text-primary' : 'border-input bg-background text-foreground')}
        >
          <Zap className="h-4 w-4" /> Urgent only
        </button>
      </div>

      {/* List */}
      <div className="border border-border bg-background">
        {error ? (
          <p className="p-8 text-center text-sm text-muted-foreground">
            Couldn't load leads. If this is a fresh setup, run the <code>leads</code> migration in Supabase (see the project README).
          </p>
        ) : isLoading ? (
          <p className="p-8 text-center text-sm text-muted-foreground">Loading leads…</p>
        ) : shown.length === 0 ? (
          <div className="flex flex-col items-center p-12 text-center">
            <Inbox className="h-8 w-8 text-muted-foreground" />
            <p className="mt-3 font-medium text-foreground">No leads here yet</p>
            <p className="mt-1 text-sm text-muted-foreground">New contact-form submissions appear instantly.</p>
          </div>
        ) : (
          <ul className="divide-y divide-border">
            {shown.map((l) => (
              <li key={l.id}>
                <button type="button" onClick={() => openLead(l.id)} className="grid w-full gap-1 px-4 py-3.5 text-left transition-colors hover:bg-secondary/60 sm:grid-cols-[1.4fr_1.2fr_0.8fr_0.7fr] sm:items-center sm:gap-4">
                  <span className="min-w-0">
                    <span className="flex items-center gap-2">
                      {l.status === 'new' && <span className="h-2 w-2 shrink-0 rounded-full bg-primary" aria-label="New" />}
                      <span className="truncate font-semibold text-foreground">{l.name}</span>
                      {l.expedited && <Zap className="h-3.5 w-3.5 shrink-0 text-primary" aria-label="Urgent" />}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">{l.company || l.email}</span>
                  </span>
                  <span className="min-w-0 truncate text-sm text-foreground">
                    {serviceName(l.service)}
                    {l.plan && <span className="text-muted-foreground"> · {l.plan}</span>}
                  </span>
                  <span className="text-xs text-muted-foreground">{timeAgo(l.created_at)} · {leadSource(l)}</span>
                  <span className="flex items-center gap-2 sm:justify-end">
                    {l.value ? <span className="text-xs font-semibold text-foreground">{money(l.value)}</span> : null}
                    <StagePill status={l.status} />
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Sheet open={!!open} onOpenChange={(o) => !o && openLead(null)}>
        <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
          {open && (
            <>
              <SheetHeader className="mb-6 text-left">
                <SheetTitle className="font-display text-2xl">{open.name}</SheetTitle>
                <SheetDescription>
                  {serviceName(open.service)} · received {timeAgo(open.created_at)}
                </SheetDescription>
              </SheetHeader>
              <LeadDetail lead={open} onClose={() => openLead(null)} />
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
