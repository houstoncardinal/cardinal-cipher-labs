-- SEO Schema Markup Extension for Cardinal Admin Dashboard
-- Run this SQL after the main schema to add SEO schema management

-- SEO Schemas Table
CREATE TABLE IF NOT EXISTS seo_schemas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    schema_type TEXT NOT NULL CHECK (schema_type IN (
        'Organization',
        'LocalBusiness',
        'Product',
        'Service',
        'Article',
        'BlogPosting',
        'WebPage',
        'WebSite',
        'Person',
        'Event',
        'FAQPage',
        'HowTo',
        'Recipe',
        'Review',
        'VideoObject',
        'ImageObject',
        'BreadcrumbList',
        'ContactPage',
        'AboutPage'
    )),
    name TEXT NOT NULL,
    schema_data JSONB NOT NULL,
    is_active BOOLEAN DEFAULT true,
    page_url TEXT,
    notes TEXT
);

-- Create index
CREATE INDEX IF NOT EXISTS idx_seo_schemas_client_id ON seo_schemas(client_id);
CREATE INDEX IF NOT EXISTS idx_seo_schemas_project_id ON seo_schemas(project_id);
CREATE INDEX IF NOT EXISTS idx_seo_schemas_type ON seo_schemas(schema_type);

-- Add updated_at trigger
CREATE TRIGGER update_seo_schemas_updated_at BEFORE UPDATE ON seo_schemas
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE seo_schemas ENABLE ROW LEVEL SECURITY;

-- Create policy
CREATE POLICY "Allow authenticated users full access to seo_schemas"
    ON seo_schemas FOR ALL
    USING (auth.role() = 'authenticated');
