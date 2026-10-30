import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, Session, AuthError } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  /** PIN login: verified server-side by netlify/functions/admin-pin, which returns a session */
  signInWithPin: (pin: string) => Promise<{ error: string | null }>;
  signUp: (email: string, password: string) => Promise<{ error: AuthError | null }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Sign In Failed',
          description: error.message,
          variant: 'destructive',
        });
        return { error };
      }

      toast({
        title: 'Welcome back!',
        description: 'Successfully signed in to admin dashboard',
      });

      return { error: null };
    } catch (error) {
      const authError = error as AuthError;
      toast({
        title: 'Sign In Error',
        description: authError.message,
        variant: 'destructive',
      });
      return { error: authError };
    }
  };

  const signInWithPin = async (pin: string) => {
    try {
      const res = await fetch('/.netlify/functions/admin-pin', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ pin }),
      });
      if (res.status === 429) return { error: 'Too many attempts. Wait a minute and try again.' };
      const body = await res.json().catch(() => ({}));
      if (!res.ok || !body.access_token) return { error: body.error ?? 'Incorrect PIN' };
      const { error } = await supabase.auth.setSession({ access_token: body.access_token, refresh_token: body.refresh_token });
      return { error: error ? error.message : null };
    } catch {
      return { error: 'Admin login is unavailable. Check your connection and try again.' };
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        toast({
          title: 'Sign Up Failed',
          description: error.message,
          variant: 'destructive',
        });
        return { error };
      }

      toast({
        title: 'Account Created',
        description: 'Please check your email to verify your account',
      });

      return { error: null };
    } catch (error) {
      const authError = error as AuthError;
      toast({
        title: 'Sign Up Error',
        description: authError.message,
        variant: 'destructive',
      });
      return { error: authError };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      toast({
        title: 'Signed Out',
        description: 'Successfully signed out',
      });
    } catch (error) {
      toast({
        title: 'Sign Out Error',
        description: 'Failed to sign out',
        variant: 'destructive',
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signInWithPin,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
