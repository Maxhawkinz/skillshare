# Database Setup Guide for SkillShare

This guide will walk you through setting up the Supabase database for your SkillShare application.

## Prerequisites

1. A Supabase account (sign up at [supabase.com](https://supabase.com))
2. A Supabase project (Project ID: `bfgtbdwywhmmoouyyxda`)
3. Access to your Supabase project dashboard

## Step 1: Access Your Supabase Project

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: **bfgtbdwywhmmoouyyxda**
3. If you don't have access, create a new project or ask the project owner for access

## Step 2: Get Your Supabase Credentials

1. In your Supabase dashboard, go to **Settings** → **API**
2. You'll need the following information:
   - **Project URL**: `https://bfgtbdwywhmmoouyyxda.supabase.co`
   - **anon/public key**: (Your public anon key)
   - **service_role key**: (Keep this secret! Only for server-side operations)

3. The project ID and public anon key are already in your codebase:
   - Project ID: `bfgtbdwywhmmoouyyxda`
   - Public Anon Key: See `src/utils/supabase/info.tsx`

## Step 3: Set Up Environment Variables (Optional)

If you want to use environment variables instead of hardcoded values:

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Update the `.env` file with your Supabase credentials (if different from the existing ones)

3. Update `src/lib/supabase.ts` to use environment variables if needed:
   ```typescript
   const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || `https://${projectId}.supabase.co`;
   const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || publicAnonKey;
   ```

## Step 4: Run the Database Schema

1. In your Supabase dashboard, go to **SQL Editor**
2. Click **New Query**
3. Open the file `database/schema.sql` from this project
4. Copy the entire contents of `database/schema.sql`
5. Paste it into the SQL Editor
6. Click **Run** (or press Ctrl+Enter / Cmd+Enter)

This will create:
- All necessary tables (profiles, skills, marketplace_items, community_posts, etc.)
- Indexes for performance
- Triggers for automatic updates
- Row Level Security (RLS) policies
- Functions for automatic counters

## Step 5: Enable Email Authentication

1. In your Supabase dashboard, go to **Authentication** → **Providers**
2. Enable **Email** provider
3. Configure email settings:
   - **Enable Email Confirmations**: Recommended for production
   - **Site URL**: `https://maxhawkinz.github.io/skillshare/`
   - **Redirect URLs**: Add your site URL

### Configure Email Domain Restriction (Optional)

To restrict signups to `@nmiet.edu.in` emails only:

1. Go to **Authentication** → **Policies**
2. Create a policy that checks email domain
3. Or handle this in your application code (as currently done in `AuthModal.tsx`)

## Step 6: Set Up Storage (Optional)

If you want to allow users to upload images:

1. Go to **Storage** in your Supabase dashboard
2. Create a bucket named `avatars` (or `images`)
3. Set it to **Public** if you want public access
4. Configure policies:
   - **SELECT**: Allow public read access
   - **INSERT**: Allow authenticated users to upload
   - **UPDATE**: Allow users to update their own files
   - **DELETE**: Allow users to delete their own files

## Step 7: Verify Database Setup

1. Go to **Table Editor** in your Supabase dashboard
2. You should see the following tables:
   - `profiles`
   - `skills`
   - `marketplace_items`
   - `community_posts`
   - `community_comments`
   - `events`
   - `event_attendees`
   - `user_points`
   - `post_likes`
   - `comment_likes`
   - `marketplace_likes`
   - `kv_store_429b5670` (already exists)

## Step 8: Test Authentication

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Try to sign up with a test email (must be `@nmiet.edu.in` domain)
3. Check the **Authentication** → **Users** section in Supabase dashboard
4. Verify that a profile was automatically created in the `profiles` table

## Step 9: Configure GitHub Pages (for deployment)

Since you're deploying to GitHub Pages:

1. Go to **Settings** → **API** in Supabase
2. Under **Redirect URLs**, add:
   - `https://maxhawkinz.github.io/skillshare/**`
   - `http://localhost:3000/**` (for local development)

3. Update your site URL in **Authentication** → **URL Configuration**:
   - **Site URL**: `https://maxhawkinz.github.io/skillshare/`

## Step 10: Update Your Application Code

The application code needs to be updated to use Supabase:

1. **Update AuthModal.tsx** to use Supabase Auth (instead of simulated auth)
2. **Update SkillDashboard.tsx** to fetch data from Supabase
3. **Update MarketplacePage.tsx** to fetch data from Supabase
4. **Update CommunityPage.tsx** to fetch data from Supabase

See the TODO list for more details.

## Troubleshooting

### Issue: "Invalid API key"
- **Solution**: Check that your `publicAnonKey` in `src/utils/supabase/info.tsx` matches the anon key in your Supabase dashboard

### Issue: "Row Level Security policy violation"
- **Solution**: Make sure you've run the complete `schema.sql` file, which includes all RLS policies

### Issue: "Profile not created after signup"
- **Solution**: Check that the `handle_new_user()` function and trigger are created correctly in the database

### Issue: "CORS errors"
- **Solution**: Add your site URL to the allowed origins in Supabase dashboard → Settings → API

### Issue: "Email not sending"
- **Solution**: 
  - Check Supabase dashboard → Authentication → Settings
  - For production, configure SMTP settings
  - For development, check the email logs in Supabase dashboard

## Next Steps

1. Update `AuthModal.tsx` to use Supabase Authentication
2. Update components to fetch real data from Supabase
3. Add image upload functionality for avatars and marketplace items
4. Implement real-time features using Supabase Realtime
5. Add email notifications for events and messages

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Documentation](https://supabase.com/docs/guides/auth)
- [Supabase Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage Documentation](https://supabase.com/docs/guides/storage)

## Support

If you encounter any issues:
1. Check the Supabase dashboard logs
2. Check browser console for errors
3. Review the Supabase documentation
4. Check the GitHub issues for common problems

