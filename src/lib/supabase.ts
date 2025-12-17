import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are properly configured
const isConfigured =
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'your_supabase_url_here' &&
  supabaseAnonKey !== 'your_supabase_anon_key_here' &&
  (supabaseUrl.startsWith('http://') || supabaseUrl.startsWith('https://'));

// Use dummy values if not configured to prevent app crash
// This allows the main site to work while admin is being set up
const finalUrl = isConfigured ? supabaseUrl : 'https://placeholder.supabase.co';
const finalKey = isConfigured ? supabaseAnonKey : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBsYWNlaG9sZGVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUxOTI4MDAsImV4cCI6MTk2MDc2ODgwMH0.placeholder';

if (!isConfigured) {
  console.warn('⚠️ Supabase not configured. Admin dashboard will not work until you:');
  console.warn('1. Create a Supabase project at https://supabase.com');
  console.warn('2. Add credentials to .env.local');
  console.warn('3. Run the database schema (supabase-schema.sql)');
  console.warn('4. Restart the dev server');
}

export const supabase = createClient<Database>(
  finalUrl,
  finalKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
);

// Export configuration status for components to check
export const isSupabaseConfigured = isConfigured;
