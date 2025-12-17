# Quick Admin Setup for cardinal.hunain@gmail.com

## 🚀 5-Minute Setup Process

### Step 1: Create Supabase Account (1 min)

1. Go to **https://supabase.com**
2. Click **"Start your project"**
3. Sign up with GitHub, Google, or Email
4. Confirm your email if needed

### Step 2: Create a New Project (2 min)

1. Click **"New Project"**
2. Fill in:
   - **Name**: `Cardinal Admin` (or anything you want)
   - **Database Password**: Create a strong password (you won't need this often)
   - **Region**: Choose closest to you (e.g., US East)
3. Click **"Create new project"**
4. **Wait 2-3 minutes** for project to initialize (grab coffee ☕)

### Step 3: Get Your Credentials (1 min)

Once your project is ready:

1. In the left sidebar, click **"Settings"** (gear icon at bottom)
2. Click **"API"** in settings menu
3. You'll see two important values:

   **Project URL** - Copy this (looks like: `https://xxxxxxxxxxxxx.supabase.co`)

   **anon public** key - Copy the long JWT token under "Project API keys"

4. Open your `.env.local` file in VS Code
5. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3......(very long key)
```

### Step 4: Create Database Tables (1 min)

1. In Supabase dashboard, click **"SQL Editor"** in left sidebar
2. Click **"New query"**
3. Open the `supabase-schema.sql` file from your project
4. **Copy ALL the SQL** (Cmd+A, Cmd+C)
5. **Paste** into Supabase SQL Editor
6. Click **"Run"** button (or press Cmd+Enter)
7. You should see "Success. No rows returned" ✅

### Step 5: Create Storage Bucket for Documents (30 sec)

1. Click **"Storage"** in left sidebar
2. Click **"Create a new bucket"**
3. Enter bucket name: `documents`
4. Toggle **"Public bucket"** to ON
5. Click **"Create bucket"**

### Step 6: Create Your Admin Account (30 sec)

1. Click **"Authentication"** in left sidebar
2. Click **"Users"** tab
3. Click **"Add user"** → **"Create new user"**
4. Enter:
   - **Email**: `cardinal.hunain@gmail.com`
   - **Password**: `Samurai14@`
   - Leave "Auto Confirm User" checked
5. Click **"Create user"**

### Step 7: Restart Dev Server & Login

1. Stop your dev server (Ctrl+C in terminal)
2. Restart it:
   ```bash
   npm run dev
   ```
3. Go to: **http://localhost:8081/admin/login** (or whatever port)
4. Login with:
   - Email: `cardinal.hunain@gmail.com`
   - Password: `Samurai14@`

## 🎉 Done! You're In!

You should now see your admin dashboard with:
- Dashboard overview
- Clients management
- Projects management
- Documents upload
- Activity logs

---

## 🆘 Troubleshooting

### "Invalid login credentials"
- Make sure you created the user in Supabase Authentication
- Check that "Auto Confirm User" was enabled
- Try password reset in Supabase dashboard

### "Table does not exist"
- Make sure you ran the ENTIRE `supabase-schema.sql` file
- Check SQL Editor for any errors
- Try running it again

### Still seeing white screen?
- Check browser console for errors
- Make sure `.env.local` has REAL credentials (not placeholders)
- Restart dev server after changing `.env.local`

### Documents won't upload?
- Make sure you created the `documents` bucket in Storage
- Make sure it's set to PUBLIC
- Check browser console for errors

---

## 🔒 Security Notes

**Your credentials are safe:**
- `.env.local` is in `.gitignore` (won't be committed to Git)
- The anon key is meant to be public (it's frontend-safe)
- Row Level Security (RLS) is enabled on all tables
- Only authenticated users can access data

**To add more admins later:**
1. Go to Authentication → Users in Supabase
2. Click "Add user"
3. Enter their email/password
4. They can login at `/admin/login`

---

## 📊 Sample Data

The schema includes 3 sample clients to test with:
- Acme Corporation (Technology)
- Smith & Associates (Legal)
- Global Finance Inc (Financial)

Feel free to delete these and add your real clients!

---

## ✨ Next Steps

Now that you're logged in:

1. **Add your first real client** (Clients → Add New Client)
2. **Create a project** for that client
3. **Upload a test document**
4. **Check the activity logs** to see it being tracked

Your admin dashboard is fully operational! 🚀
