import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import {
  Activity,
  BarChart3,
  ExternalLink,
  FileText,
  FolderKanban,
  Inbox,
  LayoutDashboard,
  Layers,
  LogOut,
  Menu,
  Search,
  Users,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { ThemeToggle } from '@/components/site/ThemeToggle';
import { cn } from '@/lib/utils';

type NavItem = { name: string; href: string; icon: LucideIcon; badge?: 'newLeads' };
const NAV: { section: string; items: NavItem[] }[] = [
  { section: 'Overview', items: [{ name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard }] },
  {
    section: 'Pipeline',
    items: [
      { name: 'Leads', href: '/admin/leads', icon: Inbox, badge: 'newLeads' },
      { name: 'Clients', href: '/admin/clients', icon: Users },
      { name: 'Projects', href: '/admin/projects', icon: FolderKanban },
    ],
  },
  {
    section: 'Business',
    items: [
      { name: 'Services', href: '/admin/services', icon: Layers },
      { name: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
    ],
  },
  {
    section: 'Files & tools',
    items: [
      { name: 'Documents', href: '/admin/documents', icon: FileText },
      { name: 'Activity', href: '/admin/activity', icon: Activity },
      { name: 'SEO schemas', href: '/admin/seo-schemas', icon: Search },
    ],
  },
];
const ALL = NAV.flatMap((s) => s.items);

function useNewLeadCount() {
  return useQuery({
    queryKey: ['leads', 'new-count'],
    queryFn: async () => {
      const { count, error } = await supabase.from('leads').select('id', { count: 'exact', head: true }).eq('status', 'new');
      if (error) return 0;
      return count ?? 0;
    },
    refetchInterval: 60_000,
  });
}

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const location = useLocation();
  const { data: newLeads = 0 } = useNewLeadCount();
  return (
    <div className="flex h-full flex-col">
      <Link to="/admin/dashboard" onClick={onNavigate} className="flex h-16 items-center gap-3 border-b border-border px-5">
        <img src="/brand/cardinal-consulting-logo.png" alt="Cardinal Consulting" className="h-6 w-auto dark:hidden" />
        <img src="/brand/cardinal-consulting-logo-white.png" alt="" aria-hidden className="hidden h-6 w-auto dark:block" />
      </Link>
      <nav className="flex-1 space-y-6 overflow-y-auto px-3 py-5" aria-label="Admin">
        {NAV.map((group) => (
          <div key={group.section}>
            <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{group.section}</p>
            <ul className="mt-2 space-y-0.5">
              {group.items.map((item) => {
                const active = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onNavigate}
                      className={cn(
                        'relative flex items-center gap-3 px-3 py-2 text-sm font-medium transition-colors',
                        active ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground',
                      )}
                    >
                      {active && <span className="absolute inset-y-1 left-0 w-0.5 bg-primary" />}
                      <item.icon className={cn('h-4 w-4', active && 'text-primary')} />
                      <span className="flex-1">{item.name}</span>
                      {item.badge === 'newLeads' && newLeads > 0 && (
                        <span className="min-w-5 rounded-full bg-primary px-1.5 py-0.5 text-center text-[10px] font-bold text-primary-foreground">{newLeads}</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      <div className="border-t border-border p-4 text-xs text-muted-foreground">
        Cardinal Consulting · Admin
      </div>
    </div>
  );
}

export function AdminLayout() {
  const [drawer, setDrawer] = useState(false);
  const location = useLocation();
  const { signOut } = useAuth();
  const current = ALL.find((n) => location.pathname.startsWith(n.href));

  useEffect(() => setDrawer(false), [location.pathname]);

  return (
    <div className="min-h-screen bg-secondary/40">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 border-r border-border bg-background lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawer && (
          <>
            <motion.div className="fixed inset-0 z-40 bg-black/40 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDrawer(false)} />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 w-72 border-r border-border bg-background lg:hidden"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            >
              <button type="button" onClick={() => setDrawer(false)} aria-label="Close menu" className="absolute right-3 top-4 p-2 text-muted-foreground">
                <X className="h-5 w-5" />
              </button>
              <Sidebar onNavigate={() => setDrawer(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6">
          <button type="button" onClick={() => setDrawer(true)} aria-label="Open menu" className="-ml-1 p-2 text-foreground lg:hidden">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="flex-1 truncate font-display text-lg font-semibold text-foreground">{current?.name ?? 'Admin'}</h1>
          <a href="/" target="_blank" rel="noreferrer" className="hidden items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground sm:inline-flex">
            View website <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => void signOut()}
            className="inline-flex h-9 items-center gap-2 border border-border px-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Sign out</span>
          </button>
        </header>
        <main className="mx-auto w-full max-w-[1400px] p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
