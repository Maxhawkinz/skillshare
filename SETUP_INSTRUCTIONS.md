# Quick Setup Instructions

## Database Setup - Step by Step

### 1. Access Your Supabase Dashboard
- Go to: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
- If you don't have access, create a new project at https://supabase.com

### 2. Run the Database Schema
1. Open Supabase Dashboard → **SQL Editor**
2. Click **New Query**
3. Open `database/schema.sql` from this project
4. Copy **ALL** the SQL code
5. Paste into SQL Editor
6. Click **Run** (or press Ctrl+Enter)

✅ This creates all tables, indexes, triggers, and security policies

### 3. Enable Email Authentication
1. Go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Set **Site URL** to: `https://maxhawkinz.github.io/skillshare/`
4. Add redirect URLs:
   - `https://maxhawkinz.github.io/skillshare/**`
   - `http://localhost:3000/**`

### 4. Verify Setup
1. Go to **Table Editor** in Supabase
2. You should see these tables:
   - ✅ profiles
   - ✅ skills
   - ✅ marketplace_items
   - ✅ community_posts
   - ✅ community_comments
   - ✅ events
   - ✅ event_attendees
   - ✅ user_points
   - ✅ post_likes
   - ✅ comment_likes
   - ✅ marketplace_likes

### 5. Test It
1. Run `npm run dev`
2. Try signing up with an `@nmiet.edu.in` email
3. Check **Authentication** → **Users** in Supabase to see the new user
4. Check **Table Editor** → **profiles** to see the profile was created

### 6. Update Your Code (Next Steps)
The application currently uses mock data. You need to:
1. ✅ Supabase client is ready (`src/lib/supabase.ts`)
2. ⏳ Update `AuthModal.tsx` to use Supabase Auth
3. ⏳ Update components to fetch real data from Supabase

## Current Status

✅ Database schema created
✅ Supabase client utility created
✅ Environment variables template created
⏳ Authentication integration (needs code update)
⏳ Data fetching (needs code update)

## Important Notes

1. **Project ID**: `bfgtbdwywhmmoouyyxda` (already in code)
2. **Public Anon Key**: Already in `src/utils/supabase/info.tsx`
3. **Security**: Row Level Security (RLS) is enabled on all tables
4. **Authentication**: Email provider must be enabled in Supabase
5. **Domain Restriction**: Currently handled in code (requires `@nmiet.edu.in` email)

## Need Help?

See `DATABASE_SETUP.md` for detailed documentation and troubleshooting.

