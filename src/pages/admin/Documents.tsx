import { useState, useCallback } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { useDropzone } from 'react-dropzone';
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
  Upload,
  File,
  FileText,
  Image,
  Download,
  Trash2,
  Search,
  Filter,
} from 'lucide-react';
import type { Database } from '@/lib/database.types';
import { format } from 'date-fns';

type Document = Database['public']['Tables']['documents']['Row'];
type DocumentInsert = Database['public']['Tables']['documents']['Insert'];
type Client = Database['public']['Tables']['clients']['Row'];
type Project = Database['public']['Tables']['projects']['Row'];

export function AdminDocuments() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [uploadingFile, setUploadingFile] = useState<File | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch documents
  const { data: documents, isLoading } = useQuery({
    queryKey: ['documents'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('documents')
        .select(`
          *,
          clients:client_id (company_name),
          projects:project_id (project_name)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as (Document & { clients: { company_name: string } | null; projects: { project_name: string } | null })[];
    },
  });

  // Fetch clients
  const { data: clients } = useQuery({
    queryKey: ['clients'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('clients')
        .select('id, company_name')
        .order('company_name');
      if (error) throw error;
      return data as Pick<Client, 'id' | 'company_name'>[];
    },
  });

  // Fetch projects
  const { data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('id, project_name')
        .order('project_name');
      if (error) throw error;
      return data as Pick<Project, 'id' | 'project_name'>[];
    },
  });

  // Upload document mutation
  const uploadMutation = useMutation({
    mutationFn: async (data: { file: File; documentData: DocumentInsert }) => {
      // Upload file to Supabase Storage
      const filePath = `${data.file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      const { error: uploadError } = await supabase.storage
        .from('documents')
        .upload(filePath, data.file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('documents')
        .getPublicUrl(filePath);

      // Insert document record
      const { data: document, error: insertError } = await supabase
        .from('documents')
        // @ts-ignore - Supabase types not fully configured
        .insert([{
          ...data.documentData,
          file_path: urlData.publicUrl,
        }])
        .select()
        .single();

      if (insertError) throw insertError;
      return document;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: 'Document Uploaded',
        description: 'File successfully uploaded and saved',
      });
      setIsDialogOpen(false);
      setUploadingFile(null);
    },
    onError: (error: any) => {
      toast({
        title: 'Upload Failed',
        description: error.message,
        variant: 'destructive',
      });
    },
  });

  // Delete document mutation
  const deleteMutation = useMutation({
    mutationFn: async (doc: Document) => {
      // Delete from storage
      const fileName = doc.file_path.split('/').pop();
      if (fileName) {
        await supabase.storage.from('documents').remove([fileName]);
      }

      // Delete record
      const { error } = await supabase.from('documents').delete().eq('id', doc.id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] });
      toast({
        title: 'Document Deleted',
        description: 'File successfully deleted',
      });
    },
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setUploadingFile(acceptedFiles[0]);
      setIsDialogOpen(true);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 10485760, // 10MB
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!uploadingFile) return;

    const formData = new FormData(e.currentTarget);

    const documentData: DocumentInsert = {
      client_id: formData.get('client_id') as string || null,
      project_id: formData.get('project_id') as string || null,
      file_name: uploadingFile.name,
      file_path: '', // Will be set after upload
      file_size: uploadingFile.size,
      file_type: uploadingFile.type,
      category: formData.get('category') as any || 'other',
      description: formData.get('description') as string || null,
    };

    uploadMutation.mutate({ file: uploadingFile, documentData });
  };

  const filteredDocuments = documents?.filter((doc) => {
    const matchesSearch = doc.file_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return Image;
    return FileText;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
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
      <div>
        <h1 className="text-3xl font-serif font-bold text-foreground mb-2">Documents</h1>
        <p className="text-muted-foreground">
          Upload and manage project documents and files
        </p>
      </div>

      {/* Upload Area */}
      <LuxuryCard elevation={2} className="p-8">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-all ${
            isDragActive
              ? 'border-primary bg-primary/5'
              : 'border-border hover:border-primary/50 hover:bg-secondary/30'
          }`}
        >
          <input {...getInputProps()} />
          <Upload size={48} className="mx-auto mb-4 text-primary" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {isDragActive ? 'Drop file here' : 'Upload Document'}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop a file here, or click to browse
          </p>
          <p className="text-xs text-muted-foreground">
            Maximum file size: 10MB
          </p>
        </div>
      </LuxuryCard>

      {/* Filters */}
      <div className="flex gap-4 flex-wrap">
        <div className="flex-1 min-w-[300px] relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
          <Input
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[200px]">
            <Filter size={16} className="mr-2" />
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="contract">Contracts</SelectItem>
            <SelectItem value="proposal">Proposals</SelectItem>
            <SelectItem value="invoice">Invoices</SelectItem>
            <SelectItem value="design">Designs</SelectItem>
            <SelectItem value="report">Reports</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {filteredDocuments?.map((doc, index) => {
            const FileIcon = getFileIcon(doc.file_type);
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05 }}
              >
                <LuxuryCard
                  elevation={1}
                  hoverLift={true}
                  className="p-4 group"
                >
                  {/* File Icon */}
                  <div className="w-full aspect-square bg-secondary/50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <FileIcon size={48} className="text-primary" />
                  </div>

                  {/* File Name */}
                  <h3 className="font-medium text-foreground mb-1 truncate" title={doc.file_name}>
                    {doc.file_name}
                  </h3>

                  {/* Category & Size */}
                  <div className="flex gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {doc.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {formatFileSize(doc.file_size)}
                    </span>
                  </div>

                  {/* Client/Project */}
                  {(doc.clients || doc.projects) && (
                    <p className="text-xs text-muted-foreground mb-3 truncate">
                      {doc.clients?.company_name || doc.projects?.project_name}
                    </p>
                  )}

                  {/* Date */}
                  <p className="text-xs text-muted-foreground mb-4">
                    {format(new Date(doc.created_at), 'MMM dd, yyyy')}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      asChild
                    >
                      <a href={doc.file_path} download target="_blank" rel="noopener noreferrer">
                        <Download size={14} className="mr-2" />
                        Download
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => {
                        if (confirm('Delete this document?')) {
                          deleteMutation.mutate(doc);
                        }
                      }}
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </LuxuryCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredDocuments?.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <File size={48} className="mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            No documents found
          </h3>
          <p className="text-muted-foreground">
            {searchQuery || categoryFilter !== 'all'
              ? 'Try adjusting your filters'
              : 'Upload your first document to get started'}
          </p>
        </motion.div>
      )}

      {/* Upload Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Document</DialogTitle>
            <DialogDescription>
              Add details for {uploadingFile?.name}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="client_id">Client (optional)</Label>
              <Select name="client_id">
                <SelectTrigger>
                  <SelectValue placeholder="Select client" />
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

            <div className="space-y-2">
              <Label htmlFor="project_id">Project (optional)</Label>
              <Select name="project_id">
                <SelectTrigger>
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  {projects?.map((project) => (
                    <SelectItem key={project.id} value={project.id}>
                      {project.project_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select name="category" defaultValue="other">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="proposal">Proposal</SelectItem>
                  <SelectItem value="invoice">Invoice</SelectItem>
                  <SelectItem value="design">Design</SelectItem>
                  <SelectItem value="report">Report</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={3}
                placeholder="Add notes about this document..."
              />
            </div>

            <div className="flex justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsDialogOpen(false);
                  setUploadingFile(null);
                }}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={uploadMutation.isPending}>
                {uploadMutation.isPending ? 'Uploading...' : 'Upload Document'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
