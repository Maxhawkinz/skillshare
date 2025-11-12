# Database Setup - Quick Reference

## ✅ What's Already Set Up

1. **Supabase Project**: `bfgtbdwywhmmoouyyxda`
2. **Supabase Client**: Created in `src/lib/supabase.ts`
3. **Database Schema**: Created in `database/schema.sql`
4. **TypeScript Types**: Defined in `src/lib/supabase.ts`

## 📋 What You Need to Do

### Step 1: Run the Database Schema

1. Go to: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
2. Click **SQL Editor** → **New Query**
3. Open `database/schema.sql`
4. Copy ALL the SQL code
5. Paste and click **Run**

### Step 2: Enable Email Authentication

1. In Supabase Dashboard → **Authentication** → **Providers**
2. Enable **Email** provider
3. Set **Site URL** to: `https://maxhawkinz.github.io/skillshare/`
4. Add **Redirect URLs**:
   - `https://maxhawkinz.github.io/skillshare/**`
   - `http://localhost:3000/**`

### Step 3: Verify Setup

Check that these tables exist in **Table Editor**:
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

## 🔑 Credentials

- **Project ID**: `bfgtbdwywhmmoouyyxda`
- **Project URL**: `https://bfgtbdwywhmmoouyyxda.supabase.co`
- **Public Anon Key**: See `src/utils/supabase/info.tsx`

## 📚 Documentation

- **Detailed Setup**: See `DATABASE_SETUP.md`
- **Quick Instructions**: See `SETUP_INSTRUCTIONS.md`

## ⚠️ Important Notes

1. **Email Domain**: Currently restricted to `@nmiet.edu.in` (handled in code)
2. **Security**: Row Level Security (RLS) is enabled on all tables
3. **Auto Profile Creation**: Profiles are automatically created when users sign up
4. **Counters**: Likes, replies, and attendees counts are automatically updated

## 🚀 Next Steps

After database setup:
1. Update `AuthModal.tsx` to use Supabase Auth
2. Update components to fetch real data from Supabase
3. Test authentication flow
4. Test data creation and retrieval

## 🐛 Troubleshooting

### "Invalid API key"
- Check that the anon key in `src/utils/supabase/info.tsx` matches Supabase dashboard

### "Row Level Security policy violation"
- Make sure you ran the complete `schema.sql` file

### "Profile not created after signup"
- Check that `handle_new_user()` function exists in database
- Check Supabase logs for errors

### "CORS errors"
- Add your site URL to allowed origins in Supabase → Settings → API

## 📞 Support

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- Check `DATABASE_SETUP.md` for detailed troubleshooting

