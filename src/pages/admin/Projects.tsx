import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '@/lib/supabase';
import { LuxuryCard } from '@/components/ui/luxury-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Calendar,
  DollarSign,
  Flag,
  CheckCircle2,
  Clock,
  AlertCircle,
  Target,
} from 'lucide-react';
import type { Database } from '@/lib/database.types';
import { format } from 'date-fns';

type Project = Database['public']['Tables']['projects']['Row'];
type ProjectInsert = Database['public']['Tables']['projects']['Insert'];
type Client = Database['public']['Tables']['clients']['Row'];
type Milestone = Database['public']['Tables']['milestones']['Row'];

export function AdminProjects() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch clients for dropdown
  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('company_name');
      if (error) throw error;
      return data as Client[];
    },
  });

  // Fetch projects with client info
  const { data: projects, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select(`
          *,
          clients:client_id (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as (Project & { clients: Client })[];
    },
  });

  // Fetch milestones for selected project
  const { data: milestones } = useQuery({
    queryKey: ['milestones', selectedProject?.id],
    queryFn: async () => {
      if (!selectedProject) return [];
      const { data, error } = await supabase
        .from('milestones')
        .select('*')
        .eq('project_id', selectedProject.id)
        .order('order_index');

      if (error) throw error;
      return data as Milestone[];
    },
    enabled: !!selectedProject,
  });

  // Create/Update project mutation
  const projectMutation = useMutation({
    mutationFn: async (project: ProjectInsert) => {
      if (editingProject) {
        const { data, error } = await supabase
          .from('projects')
          // @ts-ignore - Supabase types not fully configured
          .update(project)
          .eq('id', editingProject.id)
          .select()
          .single();

        if (error) throw error;
        return data as Project;
      } else {
        const { data, error } = await supabase
          .from('projects')
          // @ts-ignore - Supabase types not fully configured
          .insert([project])
          .select()
          .single();

        if (error) throw error;
        return data as Project;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: editingProject ? 'Project Updated' : 'Project Created',
        description: `Successfully ${editingProject ? 'updated' : 'created'} project`,
      });
      setIsDialogOpen(false);
      setEditingProject(null);
    },
    onError: (error: any) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Delete project mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      toast({
        title: 'Project Deleted',
        description: 'Successfully deleted project',
      });
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const projectData: ProjectInsert = {
      client_id: formData.get('client_id') as string,
      project_name: formData.get('project_name') as string,
      description: formData.get('description') as string || null,
      status: formData.get('status') as any || 'planning',
      priority: formData.get('priority') as any || 'medium',
      start_date: formData.get('start_date') as string || null,
      end_date: formData.get('end_date') as string || null,
      budget: formData.get('budget') ? parseFloat(formData.get('budget') as string) : null,
      project_type: formData.get('project_type') as string || null,
      progress_percentage: formData.get('progress_percentage') ? parseInt(formData.get('progress_percentage') as string) : 0,
    };

    projectMutation.mutate(projectData);
  };

  const filteredProjects = projects?.filter((project) =>
    project.project_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.clients.company_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'bg-blue-500/10 text-blue-500 border-blue-500/20';
      case 'completed':
        return 'bg-green-500/10 text-green-500 border-green-500/20';
      case 'on_hold':
        return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20';
      case 'cancelled':
        return 'bg-red-500/10 text-red-500 border-red-500/20';
      default:
        return 'bg-gray-500/10 text-gray-500 border-gray-500/20';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'text-red-500';
      case 'high':
        return 'text-orange-500';
      case 'medium':
        return 'text-yellow-500';
      default:
        return 'text-gray-500';
    }
  };

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
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Projects</h1>
          <p className="text-muted-foreground">
            Track and manage all client projects and milestones
          </p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button
              size="lg"
              onClick={() => setEditingProject(null)}
              className="gap-2"
            >
              <Plus size={20} />
              Create New Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? 'Edit Project' : 'Create New Project'}
              </DialogTitle>
              <DialogDescription>
                {editingProject
                  ? 'Update project details'
                  : 'Create a new project for a client'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 space-y-2">
                  <Label htmlFor="client_id">Client *</Label>
                  <Select
                    name="client_id"
                    defaultValue={editingProject?.client_id}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a client" />
                    </SelectTrigger>
                    <SelectContent>
                      {clients?.map((client) => (
                        <SelectItem key={client.id} value={client.id}>
                          {client.company_name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="project_name">Project Name *</Label>
                  <Input
                    id="project_name"
                    name="project_name"
                    defaultValue={editingProject?.project_name}
                    required
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    rows={3}
                    defaultValue={editingProject?.description || ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="status">Status</Label>
                  <Select name="status" defaultValue={editingProject?.status || 'planning'}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="planning">Planning</SelectItem>
                      <SelectItem value="in_progress">In Progress</SelectItem>
                      <SelectItem value="on_hold">On Hold</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select name="priority" defaultValue={editingProject?.priority || 'medium'}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project_type">Project Type</Label>
                  <Input
                    id="project_type"
                    name="project_type"
                    placeholder="e.g., Website, Mobile App"
                    defaultValue={editingProject?.project_type || ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="progress_percentage">Progress %</Label>
                  <Input
                    id="progress_percentage"
                    name="progress_percentage"
                    type="number"
                    min="0"
                    max="100"
                    defaultValue={editingProject?.progress_percentage || 0}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start_date">Start Date</Label>
                  <Input
                    id="start_date"
                    name="start_date"
                    type="date"
                    defaultValue={editingProject?.start_date || ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end_date">End Date</Label>
                  <Input
                    id="end_date"
                    name="end_date"
                    type="date"
                    defaultValue={editingProject?.end_date || ''}
                  />
                </div>

                <div className="col-span-2 space-y-2">
                  <Label htmlFor="budget">Budget ($)</Label>
                  <Input
                    id="budget"
                    name="budget"
                    type="number"
                    step="0.01"
                    defaultValue={editingProject?.budget || ''}
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsDialogOpen(false);
                    setEditingProject(null);
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={projectMutation.isPending}>
                  {projectMutation.isPending ? 'Saving...' : editingProject ? 'Update Project' : 'Create Project'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          placeholder="Search projects by name or client..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredProjects?.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.05 }}
            >
              <LuxuryCard
                elevation={2}
                hoverLift={true}
                className="p-6 group h-full flex flex-col"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-serif text-xl text-foreground mb-2">
                      {project.project_name}
                    </h3>
                    <div className="text-sm text-muted-foreground">
                      {project.clients.company_name}
                    </div>
                  </div>
                  <Flag size={20} className={getPriorityColor(project.priority)} />
                </div>

                {/* Status & Type */}
                <div className="flex gap-2 mb-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(
                      project.status
                    )}`}
                  >
                    {project.status.replace('_', ' ')}
                  </span>
                  {project.project_type && (
                    <span className="text-xs px-3 py-1 rounded-full border border-border/50 text-muted-foreground">
                      {project.project_type}
                    </span>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-muted-foreground mb-2">
                    <span>Progress</span>
                    <span>{project.progress_percentage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${project.progress_percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4 flex-1">
                  {project.start_date && (
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-muted-foreground">
                        {format(new Date(project.start_date), 'MMM dd, yyyy')}
                        {project.end_date && ` - ${format(new Date(project.end_date), 'MMM dd, yyyy')}`}
                      </span>
                    </div>
                  )}
                  {project.budget && (
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign size={14} className="text-primary" />
                      <span className="text-muted-foreground">
                        ${project.budget.toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-4 border-t border-border/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => {
                      setEditingProject(project);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Edit size={14} className="mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Target size={14} className="mr-2" />
                    Milestones
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this project?')) {
                        deleteMutation.mutate(project.id);
                      }
                    }}
                  >
                    <Trash2 size={14} />
                  </Button>
                </div>
              </LuxuryCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects?.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <Target size={48} className="mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No projects found
          </h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery ? 'Try adjusting your search' : 'Get started by creating your first project'}
          </p>
          {!searchQuery && (
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus size={20} className="mr-2" />
              Create Your First Project
            </Button>
          )}
        </motion.div>
      )}

      {/* Milestones Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Project Milestones</DialogTitle>
            <DialogDescription>
              {selectedProject?.project_name} - {(selectedProject as any)?.clients?.company_name}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {milestones && milestones.length > 0 ? (
              milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="p-4 border border-border/50 rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {milestone.title}
                      </h4>
                      {milestone.description && (
                        <p className="text-sm text-muted-foreground mb-2">
                          {milestone.description}
                        </p>
                      )}
                      {milestone.due_date && (
                        <div className="text-xs text-muted-foreground">
                          Due: {format(new Date(milestone.due_date), 'MMM dd, yyyy')}
                        </div>
                      )}
                    </div>
                    <span
                      className={`text-xs px-3 py-1 rounded-full border ${
                        milestone.status === 'completed'
                          ? 'bg-green-500/10 text-green-500 border-green-500/20'
                          : milestone.status === 'in_progress'
                          ? 'bg-blue-500/10 text-blue-500 border-blue-500/20'
                          : 'bg-gray-500/10 text-gray-500 border-gray-500/20'
                      }`}
                    >
                      {milestone.status.replace('_', ' ')}
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No milestones yet. Add milestones to track project progress.
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
