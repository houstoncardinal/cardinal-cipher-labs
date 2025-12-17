# Cardinal Consulting Admin Dashboard - Setup Guide

## 🎉 What You Got

A **comprehensive, production-ready admin dashboard** for managing:

✅ **Clients** - Full CRUD with contact info, addresses, status tracking
✅ **Projects** - Project management with progress tracking, budgets, timelines
✅ **Milestones** - Track project milestones and completion status
✅ **Documents** - File uploads with categorization and client/project linking
✅ **Activity Logs** - Automatic tracking of all actions across the system
✅ **Authentication** - Secure login with Supabase Auth
✅ **Beautiful UI** - Built with your existing luxury card components and animations

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create a Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up for free (no credit card required)
3. Create a new project
4. Wait 2-3 minutes for setup to complete

### Step 2: Get Your Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (the long JWT token)

### Step 3: Configure Your Environment

1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 4: Create the Database

1. In Supabase dashboard, go to **SQL Editor**
2. Create a new query
3. Copy the entire contents of `supabase-schema.sql` file from your project root
4. Paste it into the SQL editor
5. Click **Run** to create all tables

### Step 5: Enable Storage for Documents

1. In Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Name it: `documents`
4. Set it to **Public** (so you can download files)
5. Click **Create bucket**

### Step 6: Create Your Admin Account

1. In Supabase dashboard, go to **Authentication** → **Users**
2. Click **Add user** → **Create new user**
3. Enter your email and password
4. Click **Create user**

### Step 7: Start the App

```bash
npm run dev
```

Visit: **http://localhost:8084/admin/login** (or whatever port Vite assigns)

Login with the email/password you just created!

---

## 📱 Admin Dashboard Routes

Once logged in, you have access to:

| Route | What It Does |
|-------|--------------|
| `/admin/dashboard` | Overview with stats and quick actions |
| `/admin/clients` | Manage all clients (add, edit, delete) |
| `/admin/projects` | Manage projects with milestones |
| `/admin/documents` | Upload and organize files |
| `/admin/activity` | View all activity logs |

---

## 🎨 Features Breakdown

### 1. **Dashboard** (`/admin/dashboard`)
- Real-time stats: Total clients, active projects, documents count
- Quick action buttons to create new items
- Recent activity summary
- Beautiful cards with explosive animations

### 2. **Clients Management** (`/admin/clients`)
- **Create** new clients with full contact details
- **Edit** existing client information
- **Delete** clients (with confirmation)
- **Search** by company name, contact, or email
- Filter by status: Active, Inactive, Prospect, Archived
- Store: Company info, contact details, full address, industry, notes

### 3. **Projects Management** (`/admin/projects`)
- **Create** projects linked to clients
- Track: Status, priority, progress percentage, budget
- Set start/end dates
- Assign project types (Website, Mobile App, etc.)
- View and manage **milestones** for each project
- **Search** by project name or client
- Color-coded status badges and priority flags

### 4. **Documents Management** (`/admin/documents`)
- **Drag-and-drop** file upload
- Link documents to clients or projects
- Categorize: Contracts, Proposals, Invoices, Designs, Reports
- **Download** any uploaded file
- **Search** and **filter** by category
- View file size, type, and upload date
- Files stored securely in Supabase Storage

### 5. **Activity Logs** (`/admin/activity`)
- Automatic tracking of ALL actions
- Filter by: Entity type, action type, search query
- View: Who did what, when, with metadata
- Timeline view with relative timestamps
- Stats summary showing action counts

---

## 🔐 Security Features

✅ **Row Level Security (RLS)** - Only authenticated users can access data
✅ **Protected Routes** - Automatic redirect to login if not authenticated
✅ **Session Management** - Auto-refresh tokens, persistent sessions
✅ **Secure File Storage** - Files stored in Supabase Storage with proper access control

---

## 💾 Database Schema

Your database includes these tables:

1. **clients** - Client information and contact details
2. **projects** - Project tracking with status, progress, budgets
3. **milestones** - Project milestones with due dates
4. **documents** - File metadata and storage paths
5. **contacts** - Additional contacts per client
6. **activity_logs** - Automatic activity tracking

All tables have:
- UUID primary keys
- Timestamps (created_at, updated_at)
- Foreign key relationships
- Indexes for performance
- RLS policies for security

---

## 🎯 Usage Tips

### Adding Your First Client
1. Go to **Clients** → Click **Add New Client**
2. Fill in company name, contact name, and email (required)
3. Add optional info: phone, address, industry, status
4. Click **Create Client**

### Creating a Project
1. Go to **Projects** → Click **Create New Project**
2. Select a client from dropdown
3. Add project name, description, dates, budget
4. Set status (Planning, In Progress, etc.)
5. Set priority and progress percentage
6. Click **Create Project**

### Uploading Documents
1. Go to **Documents**
2. Drag and drop a file OR click to browse
3. Select client/project (optional)
4. Choose category (Contract, Invoice, etc.)
5. Add description
6. Click **Upload Document**

### Viewing Activity Logs
1. Go to **Activity Logs**
2. Use filters to find specific actions
3. Click "View metadata" to see detailed info
4. Search by description or user email

---

## 🔧 Customization

### Change the Logo
Edit `/src/components/admin/AdminLayout.tsx` line 63

### Add More Navigation Items
Edit the `navigation` array in `/src/components/admin/AdminLayout.tsx` line 18

### Modify Database Schema
1. Edit `supabase-schema.sql`
2. Update `/src/lib/database.types.ts`
3. Run new SQL in Supabase SQL Editor

### Add More Document Categories
Edit the document form Select in `/src/pages/admin/Documents.tsx`

---

## 📊 Sample Data

The `supabase-schema.sql` includes 3 sample clients to get you started:
- Acme Corporation (Technology)
- Smith & Associates (Legal)
- Global Finance Inc (Financial)

You can delete these after testing!

---

## 🐛 Troubleshooting

### "Invalid API Key" Error
- Check your `.env.local` file has correct credentials
- Restart the dev server after changing `.env.local`

### "Table does not exist" Error
- Run the `supabase-schema.sql` in Supabase SQL Editor
- Make sure all migrations completed successfully

### Documents Won't Upload
- Check Supabase Storage has a bucket named `documents`
- Make sure bucket is set to **Public**
- Check file size is under 10MB

### Can't Sign In
- Make sure you created a user in Supabase Authentication
- Check email/password are correct
- Try password reset in Supabase dashboard

### Page Not Loading
- Check browser console for errors
- Verify Supabase credentials are correct
- Make sure dev server is running

---

## 🚀 Deployment

### Deploy to Vercel/Netlify
1. Push code to GitHub
2. Connect repo to Vercel/Netlify
3. Add environment variables in hosting dashboard
4. Deploy!

### Environment Variables for Production
```env
VITE_SUPABASE_URL=your_production_url
VITE_SUPABASE_ANON_KEY=your_production_key
```

---

## 📝 Next Steps

Want to enhance your dashboard? Consider adding:

- **Email notifications** when projects are completed
- **Client portal** so clients can log in and see their projects
- **File preview** for images and PDFs
- **Advanced analytics** with charts and graphs
- **Team members** with role-based permissions
- **Project templates** for common project types
- **Time tracking** for billable hours
- **Invoice generation** directly from projects

---

## 🆘 Support

Need help? Check these resources:

- **Supabase Docs**: [https://supabase.com/docs](https://supabase.com/docs)
- **React Query Docs**: [https://tanstack.com/query](https://tanstack.com/query)
- **Framer Motion**: [https://www.framer.com/motion/](https://www.framer.com/motion/)

---

## 🎉 You're All Set!

Your powerful admin dashboard is ready to go. Start adding your clients, creating projects, and managing everything in one beautiful place!

**Login URL**: `http://localhost:8084/admin/login`

Enjoy your new admin dashboard! 🚀
