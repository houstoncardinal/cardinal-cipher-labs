export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clients: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          company_name: string
          contact_name: string
          email: string
          phone: string | null
          address: string | null
          city: string | null
          state: string | null
          zip: string | null
          country: string | null
          website: string | null
          industry: string | null
          status: 'active' | 'inactive' | 'prospect' | 'archived'
          notes: string | null
          logo_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          company_name: string
          contact_name: string
          email: string
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          country?: string | null
          website?: string | null
          industry?: string | null
          status?: 'active' | 'inactive' | 'prospect' | 'archived'
          notes?: string | null
          logo_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          company_name?: string
          contact_name?: string
          email?: string
          phone?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          zip?: string | null
          country?: string | null
          website?: string | null
          industry?: string | null
          status?: 'active' | 'inactive' | 'prospect' | 'archived'
          notes?: string | null
          logo_url?: string | null
        }
      }
      projects: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          client_id: string
          project_name: string
          description: string | null
          status: 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled'
          priority: 'low' | 'medium' | 'high' | 'urgent'
          start_date: string | null
          end_date: string | null
          budget: number | null
          actual_cost: number | null
          project_type: string | null
          tags: string[] | null
          progress_percentage: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id: string
          project_name: string
          description?: string | null
          status?: 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          start_date?: string | null
          end_date?: string | null
          budget?: number | null
          actual_cost?: number | null
          project_type?: string | null
          tags?: string[] | null
          progress_percentage?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id?: string
          project_name?: string
          description?: string | null
          status?: 'planning' | 'in_progress' | 'on_hold' | 'completed' | 'cancelled'
          priority?: 'low' | 'medium' | 'high' | 'urgent'
          start_date?: string | null
          end_date?: string | null
          budget?: number | null
          actual_cost?: number | null
          project_type?: string | null
          tags?: string[] | null
          progress_percentage?: number
        }
      }
      milestones: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          project_id: string
          title: string
          description: string | null
          due_date: string | null
          completed_date: string | null
          status: 'pending' | 'in_progress' | 'completed' | 'overdue'
          order_index: number
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          project_id: string
          title: string
          description?: string | null
          due_date?: string | null
          completed_date?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'overdue'
          order_index?: number
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          project_id?: string
          title?: string
          description?: string | null
          due_date?: string | null
          completed_date?: string | null
          status?: 'pending' | 'in_progress' | 'completed' | 'overdue'
          order_index?: number
        }
      }
      documents: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          client_id: string | null
          project_id: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          category: 'contract' | 'proposal' | 'invoice' | 'design' | 'report' | 'other'
          uploaded_by: string | null
          description: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id?: string | null
          project_id?: string | null
          file_name: string
          file_path: string
          file_size: number
          file_type: string
          category?: 'contract' | 'proposal' | 'invoice' | 'design' | 'report' | 'other'
          uploaded_by?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id?: string | null
          project_id?: string | null
          file_name?: string
          file_path?: string
          file_size?: number
          file_type?: string
          category?: 'contract' | 'proposal' | 'invoice' | 'design' | 'report' | 'other'
          uploaded_by?: string | null
          description?: string | null
        }
      }
      activity_logs: {
        Row: {
          id: string
          created_at: string
          entity_type: 'client' | 'project' | 'milestone' | 'document'
          entity_id: string
          action: 'created' | 'updated' | 'deleted' | 'completed' | 'uploaded'
          description: string
          user_email: string | null
          metadata: Json | null
        }
        Insert: {
          id?: string
          created_at?: string
          entity_type: 'client' | 'project' | 'milestone' | 'document'
          entity_id: string
          action: 'created' | 'updated' | 'deleted' | 'completed' | 'uploaded'
          description: string
          user_email?: string | null
          metadata?: Json | null
        }
        Update: {
          id?: string
          created_at?: string
          entity_type?: 'client' | 'project' | 'milestone' | 'document'
          entity_id?: string
          action?: 'created' | 'updated' | 'deleted' | 'completed' | 'uploaded'
          description?: string
          user_email?: string | null
          metadata?: Json | null
        }
      }
      contacts: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          client_id: string
          name: string
          email: string
          phone: string | null
          position: string | null
          is_primary: boolean
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id: string
          name: string
          email: string
          phone?: string | null
          position?: string | null
          is_primary?: boolean
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          client_id?: string
          name?: string
          email?: string
          phone?: string | null
          position?: string | null
          is_primary?: boolean
          notes?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
