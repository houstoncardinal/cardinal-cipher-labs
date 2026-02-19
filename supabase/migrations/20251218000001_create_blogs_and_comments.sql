CREATE TABLE blogs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  category TEXT NOT NULL,
  pillar TEXT NOT NULL,
  priority INTEGER DEFAULT 0,
  author TEXT NOT NULL,
  date_published TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  date_modified TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  read_time TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  keywords TEXT[],
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  blog_id UUID REFERENCES blogs(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  author_email TEXT NOT NULL,
  content TEXT NOT NULL,
  parent_comment_id UUID REFERENCES comments(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX idx_blogs_slug ON blogs(slug);
CREATE INDEX idx_blogs_category ON blogs(category);
CREATE INDEX idx_blogs_pillar ON blogs(pillar);
CREATE INDEX idx_blogs_featured ON blogs(featured);
CREATE INDEX idx_blogs_date_published ON blogs(date_published DESC);
CREATE INDEX idx_comments_blog_id ON comments(blog_id);
CREATE INDEX idx_comments_status ON comments(status);
CREATE INDEX idx_comments_created_at ON comments(created_at DESC);
