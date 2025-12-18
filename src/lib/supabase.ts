// Re-export the auto-generated Supabase client from integrations
// This file exists for backward compatibility with existing imports
export { supabase } from '@/integrations/supabase/client';

// Export configuration status - Cloud is now always configured
export const isSupabaseConfigured = true;
