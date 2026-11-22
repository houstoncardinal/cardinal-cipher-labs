-- Leads pipeline + admin-only access for the whole admin dashboard.
--
-- Safe to run more than once. Replaces 20261030000000_leads_pipeline.sql (never applied).
--
-- WHY: public sign-ups are open on this project and every admin table allowed ANY signed-in user
-- full access, so anyone could create an account with the site's public key and read or change
-- clients, projects, documents and (once it exists) leads. Access now requires an account on the
-- admin allow-list below.
--
-- BEFORE RUNNING: make sure your admin account exists (Cloud → Users) and its email is in the
-- admin_users insert below, then turn OFF public sign-ups in the auth settings.

-- ── Admin allow-list ─────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.admin_users (
  email TEXT PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
-- No policies: the website can't read or change it. Only is_admin() (below) looks at it.
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- ▼▼ Your admin login email(s). Must match the Supabase user that ADMIN_EMAIL in Netlify signs in as.
INSERT INTO public.admin_users (email) VALUES
  ('hunain@visitcardinal.com')
ON CONFLICT (email) DO NOTHING;

-- True when the signed-in user's account (looked up by id, not a client-supplied claim) is on the list.
CREATE OR REPLACE FUNCTION public.is_admin() RETURNS boolean
LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public, auth AS $$
  SELECT EXISTS (
    SELECT 1
    FROM auth.users u
    JOIN public.admin_users a ON lower(a.email) = lower(u.email)
    WHERE u.id = auth.uid()
  );
$$;
REVOKE ALL ON FUNCTION public.is_admin() FROM public;
GRANT EXECUTE ON FUNCTION public.is_admin() TO anon, authenticated;

-- ── Leads table ──────────────────────────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),

  -- Who
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  preferred_contact TEXT,
  best_time TEXT,
  expedited BOOLEAN NOT NULL DEFAULT false,

  -- What
  service TEXT,
  plan TEXT,
  needs TEXT,
  timeline TEXT,
  budget TEXT,
  message TEXT,

  -- Where it came from
  form_name TEXT,
  source_page TEXT,
  landing_page TEXT,
  referrer TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,

  -- Pipeline (managed in /admin)
  status TEXT NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'qualified', 'proposal', 'won', 'lost')),
  value NUMERIC(12, 2),
  notes TEXT,
  client_id UUID REFERENCES public.clients(id) ON DELETE SET NULL,
  contacted_at TIMESTAMP WITH TIME ZONE
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON public.leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON public.leads (status);
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.touch_updated_at() RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

DROP TRIGGER IF EXISTS leads_touch_updated_at ON public.leads;
CREATE TRIGGER leads_touch_updated_at BEFORE UPDATE ON public.leads
  FOR EACH ROW EXECUTE FUNCTION public.touch_updated_at();

-- Projects: which Cardinal service the project delivers (matches services-catalog slugs)
ALTER TABLE public.projects ADD COLUMN IF NOT EXISTS service TEXT;

-- ── Policies: admins only, plus "website may submit a new lead" ─────────────────────────────────
DO $$
DECLARE
  t TEXT;
  p RECORD;
BEGIN
  FOREACH t IN ARRAY ARRAY['clients', 'projects', 'milestones', 'documents', 'activity_logs', 'leads'] LOOP
    IF to_regclass('public.' || t) IS NULL THEN
      CONTINUE;
    END IF;
    -- Remove every existing policy on the table (including the old "any signed-in user" ones)
    FOR p IN SELECT policyname FROM pg_policies WHERE schemaname = 'public' AND tablename = t LOOP
      EXECUTE format('DROP POLICY %I ON public.%I', p.policyname, t);
    END LOOP;
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('CREATE POLICY "Admins can view %1$s" ON public.%1$I FOR SELECT TO authenticated USING (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admins can add %1$s" ON public.%1$I FOR INSERT TO authenticated WITH CHECK (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admins can update %1$s" ON public.%1$I FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin())', t);
    EXECUTE format('CREATE POLICY "Admins can delete %1$s" ON public.%1$I FOR DELETE TO authenticated USING (public.is_admin())', t);
  END LOOP;
END $$;

-- Website forms: anyone may create a fresh lead (no pipeline fields, sane sizes). Insert-only:
-- visitors can never read, change or delete leads.
CREATE POLICY "Website can submit new leads" ON public.leads
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    status = 'new'
    AND notes IS NULL
    AND value IS NULL
    AND client_id IS NULL
    AND contacted_at IS NULL
    AND length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND coalesce(length(message), 0) <= 5000
  );
