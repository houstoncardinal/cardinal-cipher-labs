import { useEffect, useRef, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { motion, useAnimationControls } from 'framer-motion';
import { Loader2, Lock } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/site/ThemeToggle';
import { cn } from '@/lib/utils';

const LENGTH = 6;

/** PIN-only admin sign-in. The PIN is verified server-side (netlify/functions/admin-pin). */
export function AdminLogin() {
  const { signInWithPin, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [pin, setPin] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const shake = useAnimationControls();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname || '/admin/dashboard';

  // Refocus whenever the field becomes usable again (first load and after a failed attempt)
  useEffect(() => {
    if (!busy) input.current?.focus();
  }, [busy]);

  const submit = async (value: string) => {
    setBusy(true);
    setError(null);
    const { error } = await signInWithPin(value);
    setBusy(false);
    if (error) {
      setError(error);
      setPin('');
      void shake.start({ x: [0, -10, 10, -8, 8, -4, 0], transition: { duration: 0.45 } });
      return;
    }
    navigate(from, { replace: true });
  };

  const onChange = (v: string) => {
    const digits = v.replace(/\D/g, '').slice(0, LENGTH);
    setPin(digits);
    setError(null);
    if (digits.length === LENGTH && !busy) void submit(digits);
  };

  if (user) return <Navigate to={from} replace />;

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" style={{ backgroundImage: 'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>

      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative w-full max-w-sm text-center">
        <img src="/brand/cardinal-consulting-logo.png" alt="Cardinal Consulting" className="mx-auto h-8 w-auto dark:hidden" />
        <img src="/brand/cardinal-consulting-logo-white.png" alt="" aria-hidden className="mx-auto hidden h-8 w-auto dark:block" />

        <div className="mt-10 border border-border bg-card p-8 shadow-[0_40px_80px_-50px_rgba(15,23,42,0.5)]">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Lock className="h-5 w-5" />
          </span>
          <h1 className="mt-5 font-display text-2xl text-foreground">Admin access</h1>
          <p className="mt-1.5 text-sm text-muted-foreground">Enter your 6-digit PIN</p>

          <motion.label animate={shake} className="relative mt-7 flex cursor-text justify-center gap-2" onClick={() => input.current?.focus()}>
            <span className="sr-only">PIN</span>
            {Array.from({ length: LENGTH }).map((_, i) => {
              const filled = i < pin.length;
              const active = i === pin.length && !busy;
              return (
                <span
                  key={i}
                  className={cn(
                    'flex h-14 w-11 items-center justify-center border text-xl transition-colors',
                    error ? 'border-destructive' : active ? 'border-foreground' : 'border-border',
                    filled ? 'bg-secondary' : 'bg-background',
                  )}
                >
                  {filled ? <span className="h-2.5 w-2.5 rounded-full bg-foreground" /> : active ? <span className="h-6 w-px animate-pulse bg-foreground" /> : null}
                </span>
              );
            })}
            <input
              ref={input}
              value={pin}
              onChange={(e) => onChange(e.target.value)}
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="\d*"
              maxLength={LENGTH}
              disabled={busy}
              aria-invalid={!!error}
              aria-describedby="pin-status"
              className="absolute inset-0 h-full w-full cursor-text opacity-0"
            />
          </motion.label>

          <p id="pin-status" role="status" className={cn('mt-5 min-h-[1.25rem] text-sm', error ? 'text-destructive' : 'text-muted-foreground')}>
            {busy ? (
              <span className="inline-flex items-center gap-2"><Loader2 className="h-4 w-4 animate-spin" /> Verifying…</span>
            ) : (
              error ?? 'Signs in automatically after the 6th digit'
            )}
          </p>
        </div>

        <a href="/" className="mt-6 inline-block text-sm text-muted-foreground hover:text-foreground">← Back to website</a>
      </motion.div>
    </div>
  );
}
