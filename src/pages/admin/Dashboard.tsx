import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { LuxuryCard } from '@/components/ui/luxury-card';
import {
  Users,
  FolderKanban,
  FileText,
  TrendingUp,
  Clock,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

interface DashboardStats {
  totalClients: number;
  activeClients: number;
  totalProjects: number;
  activeProjects: number;
  completedProjects: number;
  totalDocuments: number;
  recentActivity: number;
}

export function AdminDashboard() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ['dashboard-stats'],
    queryFn: async (): Promise<DashboardStats> => {
      // Get client stats
      const { count: totalClients } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true });

      const { count: activeClients } = await supabase
        .from('clients')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'active');

      // Get project stats
      const { count: totalProjects } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true });

      const { count: activeProjects } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'in_progress');

      const { count: completedProjects } = await supabase
        .from('projects')
        .select('*', { count: 'exact', head: true })
        .eq('status', 'completed');

      // Get document stats
      const { count: totalDocuments } = await supabase
        .from('documents')
        .select('*', { count: 'exact', head: true });

      // Get recent activity count (last 7 days)
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const { count: recentActivity } = await supabase
        .from('activity_logs')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', sevenDaysAgo.toISOString());

      return {
        totalClients: totalClients || 0,
        activeClients: activeClients || 0,
        totalProjects: totalProjects || 0,
        activeProjects: activeProjects || 0,
        completedProjects: completedProjects || 0,
        totalDocuments: totalDocuments || 0,
        recentActivity: recentActivity || 0,
      };
    },
  });

  const statCards = [
    {
      title: 'Total Clients',
      value: stats?.totalClients || 0,
      subtitle: `${stats?.activeClients || 0} active`,
      icon: Users,
      color: 'from-blue-500/20 to-cyan-500/20',
      iconColor: 'text-blue-500',
    },
    {
      title: 'Active Projects',
      value: stats?.activeProjects || 0,
      subtitle: `${stats?.totalProjects || 0} total`,
      icon: FolderKanban,
      color: 'from-purple-500/20 to-pink-500/20',
      iconColor: 'text-purple-500',
    },
    {
      title: 'Completed Projects',
      value: stats?.completedProjects || 0,
      subtitle: 'Successfully delivered',
      icon: CheckCircle2,
      color: 'from-green-500/20 to-emerald-500/20',
      iconColor: 'text-green-500',
    },
    {
      title: 'Documents',
      value: stats?.totalDocuments || 0,
      subtitle: 'Files uploaded',
      icon: FileText,
      color: 'from-orange-500/20 to-amber-500/20',
      iconColor: 'text-orange-500',
    },
  ];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
          Welcome to Cardinal Admin
        </h1>
        <p className="text-muted-foreground">
          Manage your clients, projects, and documents all in one place
        </p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <LuxuryCard
              elevation={2}
              hoverLift={true}
              className="p-6 relative overflow-hidden group"
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 ${stat.iconColor} group-hover:scale-110 transition-transform`}
                >
                  <stat.icon size={24} />
                </div>

                {/* Stats */}
                <div className="mb-1">
                  <motion.div
                    className="text-3xl font-bold text-foreground"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
                <div className="text-xs text-muted-foreground/70 mt-1">
                  {stat.subtitle}
                </div>
              </div>
            </LuxuryCard>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: 'Add New Client',
              description: 'Create a new client profile',
              href: '/admin/clients?action=new',
              icon: Users,
            },
            {
              title: 'Create Project',
              description: 'Start a new project',
              href: '/admin/projects?action=new',
              icon: FolderKanban,
            },
            {
              title: 'Upload Document',
              description: 'Add files and documents',
              href: '/admin/documents?action=upload',
              icon: FileText,
            },
          ].map((action) => (
            <a key={action.title} href={action.href}>
              <LuxuryCard
                elevation={1}
                hoverLift={true}
                className="p-6 group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <action.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </div>
                </div>
              </LuxuryCard>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Recent Activity Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <LuxuryCard elevation={2} className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <Clock size={24} className="text-primary" />
            <div>
              <h2 className="text-xl font-semibold text-foreground">Recent Activity</h2>
              <p className="text-sm text-muted-foreground">
                {stats?.recentActivity || 0} actions in the last 7 days
              </p>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            View detailed activity logs in the Activity Logs section
          </div>
        </LuxuryCard>
      </motion.div>
    </div>
  );
}
