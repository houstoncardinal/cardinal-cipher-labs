import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { LuxuryCard } from '@/components/ui/luxury-card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Users,
  FolderKanban,
  Target,
  FileText,
  Plus,
  Edit,
  Trash2,
  CheckCircle2,
  Upload,
  Clock,
  Filter,
  Search,
} from 'lucide-react';
import type { Database } from '@/lib/database.types';
import { format, formatDistanceToNow } from 'date-fns';

type ActivityLog = Database['public']['Tables']['activity_logs']['Row'];

const actionIcons = {
  created: Plus,
  updated: Edit,
  deleted: Trash2,
  completed: CheckCircle2,
  uploaded: Upload,
};

const entityIcons = {
  client: Users,
  project: FolderKanban,
  milestone: Target,
  document: FileText,
};

const actionColors = {
  created: 'text-green-500 bg-green-500/10',
  updated: 'text-blue-500 bg-blue-500/10',
  deleted: 'text-red-500 bg-red-500/10',
  completed: 'text-purple-500 bg-purple-500/10',
  uploaded: 'text-orange-500 bg-orange-500/10',
};

export function AdminActivityLogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [entityFilter, setEntityFilter] = useState<string>('all');
  const [actionFilter, setActionFilter] = useState<string>('all');

  // Fetch activity logs
  const { data: logs, isLoading } = useQuery({
    queryKey: ['activity-logs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('activity_logs')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(100);

      if (error) throw error;
      return data as ActivityLog[];
    },
  });

  const filteredLogs = logs?.filter((log) => {
    const matchesSearch =
      log.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.user_email?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesEntity = entityFilter === 'all' || log.entity_type === entityFilter;
    const matchesAction = actionFilter === 'all' || log.action === actionFilter;
    return matchesSearch && matchesEntity && matchesAction;
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          Activity Logs
        </h1>
        <p className="text-muted-foreground">
          Track all actions and changes across your dashboard
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            size={20}
          />
          <Input
            placeholder="Search activities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={entityFilter} onValueChange={setEntityFilter}>
          <SelectTrigger>
            <Filter size={16} className="mr-2" />
            <SelectValue placeholder="Entity Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Entities</SelectItem>
            <SelectItem value="client">Clients</SelectItem>
            <SelectItem value="project">Projects</SelectItem>
            <SelectItem value="milestone">Milestones</SelectItem>
            <SelectItem value="document">Documents</SelectItem>
          </SelectContent>
        </Select>

        <Select value={actionFilter} onValueChange={setActionFilter}>
          <SelectTrigger>
            <Filter size={16} className="mr-2" />
            <SelectValue placeholder="Action Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Actions</SelectItem>
            <SelectItem value="created">Created</SelectItem>
            <SelectItem value="updated">Updated</SelectItem>
            <SelectItem value="deleted">Deleted</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="uploaded">Uploaded</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Activity Timeline */}
      <LuxuryCard elevation={2} className="p-6">
        <div className="space-y-4">
          {filteredLogs && filteredLogs.length > 0 ? (
            filteredLogs.map((log, index) => {
              const ActionIcon = actionIcons[log.action];
              const EntityIcon = entityIcons[log.entity_type];
              const actionColor = actionColors[log.action];

              return (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  className="flex gap-4 p-4 border border-border/50 rounded-lg hover:bg-secondary/30 transition-colors group"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-10 h-10 rounded-lg ${actionColor} flex items-center justify-center`}>
                      <ActionIcon size={20} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-1">
                      <div className="flex items-center gap-2">
                        <EntityIcon size={16} className="text-primary" />
                        <span className="text-sm font-medium text-foreground capitalize">
                          {log.entity_type}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground capitalize">
                          {log.action}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground whitespace-nowrap">
                        <Clock size={12} />
                        <span title={format(new Date(log.created_at), 'PPpp')}>
                          {formatDistanceToNow(new Date(log.created_at), { addSuffix: true })}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-foreground mb-1">{log.description}</p>

                    {log.user_email && (
                      <p className="text-xs text-muted-foreground">
                        by {log.user_email}
                      </p>
                    )}

                    {log.metadata && (
                      <details className="mt-2">
                        <summary className="text-xs text-muted-foreground cursor-pointer hover:text-primary">
                          View metadata
                        </summary>
                        <pre className="mt-2 text-xs bg-secondary/50 p-2 rounded overflow-x-auto">
                          {JSON.stringify(log.metadata, null, 2)}
                        </pre>
                      </details>
                    )}
                  </div>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-12">
              <Clock size={48} className="mx-auto text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                No activity logs found
              </h3>
              <p className="text-muted-foreground">
                {searchQuery || entityFilter !== 'all' || actionFilter !== 'all'
                  ? 'Try adjusting your filters'
                  : 'Activity logs will appear here as you use the dashboard'}
              </p>
            </div>
          )}
        </div>

        {/* Load More (Future Enhancement) */}
        {filteredLogs && filteredLogs.length >= 100 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Showing most recent 100 activities
            </p>
          </div>
        )}
      </LuxuryCard>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(actionColors).map(([action, color]) => {
          const count = logs?.filter((log) => log.action === action).length || 0;
          const Icon = actionIcons[action as keyof typeof actionIcons];

          return (
            <LuxuryCard key={action} elevation={1} className="p-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{count}</div>
                  <div className="text-xs text-muted-foreground capitalize">{action}</div>
                </div>
              </div>
            </LuxuryCard>
          );
        })}
      </div>
    </div>
  );
}
