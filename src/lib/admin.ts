// Shared helpers for the /admin dashboard.
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";
import { services } from "@/lib/services-catalog";

export type Lead = Tables<"leads">;

export const LEAD_STAGES = [
  { id: "new", label: "New", tone: "bg-primary/10 text-primary border-primary/20" },
  { id: "contacted", label: "Contacted", tone: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20" },
  { id: "qualified", label: "Qualified", tone: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20" },
  { id: "proposal", label: "Proposal", tone: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20" },
  { id: "won", label: "Won", tone: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20" },
  { id: "lost", label: "Lost", tone: "bg-muted text-muted-foreground border-border" },
] as const;
export type LeadStage = (typeof LEAD_STAGES)[number]["id"];
export const OPEN_STAGES: LeadStage[] = ["contacted", "qualified", "proposal"];
export const stageOf = (id: string) => LEAD_STAGES.find((s) => s.id === id) ?? LEAD_STAGES[0];

export const serviceName = (slug?: string | null) => (slug ? services.find((s) => s.slug === slug)?.name ?? slug : "Not sure yet");

export const money = (n?: number | null) =>
  n == null ? "—" : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

export function timeAgo(iso: string) {
  const s = (Date.now() - new Date(iso).getTime()) / 1000;
  if (s < 60) return "just now";
  if (s < 3600) return `${Math.floor(s / 60)}m ago`;
  if (s < 86400) return `${Math.floor(s / 3600)}h ago`;
  if (s < 86400 * 7) return `${Math.floor(s / 86400)}d ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

/** Where a lead came from: campaign source, else referring site, else direct. */
export function leadSource(l: Pick<Lead, "utm_source" | "referrer">) {
  if (l.utm_source) return l.utm_source.toLowerCase();
  if (l.referrer) {
    try {
      // google.com / l.facebook.com / www.linkedin.com → google / facebook / linkedin
      const parts = new URL(l.referrer).hostname.split(".");
      return (parts.length >= 2 ? parts[parts.length - 2] : parts[0]).toLowerCase();
    } catch {
      return l.referrer;
    }
  }
  return "Direct";
}

export function useLeads() {
  return useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data, error } = await supabase.from("leads").select("*").order("created_at", { ascending: false }).limit(2000);
      if (error) throw error;
      return data;
    },
  });
}

export async function logActivity(action: string, entity_type: string, entity_id: string | null, details?: Record<string, unknown>) {
  const { data } = await supabase.auth.getUser();
  await supabase.from("activity_logs").insert({ action, entity_type, entity_id, details: (details ?? null) as never, user_id: data.user?.id ?? null });
}

export function downloadCsv(filename: string, rows: Record<string, unknown>[]) {
  if (!rows.length) return;
  const cols = Object.keys(rows[0]);
  const esc = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const csv = [cols.join(","), ...rows.map((r) => cols.map((c) => esc(r[c])).join(","))].join("\n");
  const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
  const a = Object.assign(document.createElement("a"), { href: url, download: filename });
  a.click();
  URL.revokeObjectURL(url);
}
