-- Leads pipeline for the admin dashboard.
-- Every website contact form also writes here (in addition to Netlify Forms).
-- Visitors can only INSERT a brand-new lead; reading, updating and deleting require a
-- signed-in admin (the PIN login signs in to your Supabase admin account server-side).

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

-- Public website: may only create a fresh lead (no pipeline fields, sane sizes)
CREATE POLICY "Website can submit new leads" ON public.leads
  FOR INSERT TO anon
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

-- Admin: full access
CREATE POLICY "Admins can view leads" ON public.leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "Admins can add leads" ON public.leads FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Admins can update leads" ON public.leads FOR UPDATE TO authenticated USING (true);
CREATE POLICY "Admins can delete leads" ON public.leads FOR DELETE TO authenticated USING (true);

-- Keep updated_at fresh
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
