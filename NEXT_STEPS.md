# Next Steps - Database Setup

## ✅ What's Done

1. **Database Schema** - Complete SQL schema ready in `database/schema.sql`
2. **Supabase Client** - Ready to use in `src/lib/supabase.ts`
3. **Authentication** - Updated to use Supabase Auth
4. **Documentation** - Complete setup guides created

## 🚀 What You Need to Do Now

### Step 1: Run Database Schema (5 minutes)

1. Go to: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
2. Click **SQL Editor** → **New Query**
3. Open `database/schema.sql` from your project
4. Copy **ALL** the SQL code
5. Paste into SQL Editor
6. Click **Run** (or press Ctrl+Enter / Cmd+Enter)

✅ This creates all tables, indexes, triggers, and security policies

### Step 2: Enable Email Authentication (2 minutes)

1. In Supabase Dashboard → **Authentication** → **Providers**
2. Enable **Email** provider
3. Set **Site URL**: `https://maxhawkinz.github.io/skillshare/`
4. Add **Redirect URLs**:
   - `https://maxhawkinz.github.io/skillshare/**`
   - `http://localhost:3000/**`

### Step 3: Verify Setup (1 minute)

1. Go to **Table Editor** in Supabase
2. Check that these tables exist:
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

### Step 4: Test Authentication (2 minutes)

1. Run `npm run dev`
2. Try signing up with an `@nmiet.edu.in` email
3. Check **Authentication** → **Users** in Supabase
4. Check **Table Editor** → **profiles** to see the profile

## 📋 Current Status

### ✅ Completed
- Database schema created
- Supabase client configured
- Authentication integrated
- Session management implemented
- User profile fetching
- Logout functionality

### ⏳ Next: Data Integration
- Update components to fetch real data from Supabase
- Add data creation forms
- Add like/unlike functionality
- Add comment functionality
- Add event creation and joining

## 📚 Documentation

- **Quick Setup**: `SETUP_INSTRUCTIONS.md`
- **Detailed Guide**: `DATABASE_SETUP.md`
- **Quick Reference**: `README_DATABASE.md`
- **Summary**: `DATABASE_SETUP_SUMMARY.md`
- **Status**: `IMPLEMENTATION_STATUS.md`

## 🎯 Testing Checklist

After setup, test:

- [ ] Sign up with `@nmiet.edu.in` email
- [ ] Sign in with created account
- [ ] Verify profile is created in database
- [ ] Check session persistence (refresh page)
- [ ] Test logout functionality
- [ ] Verify user data in Supabase dashboard

## ⚠️ Important Notes

1. **Email Domain**: Currently restricted to `@nmiet.edu.in` (enforced in code)
2. **Email Confirmation**: If enabled in Supabase, users need to confirm email before signing in
3. **Password**: Minimum 6 characters (enforced in code)
4. **Security**: Row Level Security (RLS) is enabled on all tables
5. **Auto Profile**: Profiles are automatically created when users sign up

## 🐛 Troubleshooting

### "Invalid API key"
- Check that the anon key in `src/utils/supabase/info.tsx` matches Supabase dashboard

### "Row Level Security policy violation"
- Make sure you ran the complete `schema.sql` file
- Check that RLS policies are created correctly

### "Profile not created after signup"
- Check that `handle_new_user()` function exists in database
- Check Supabase logs for errors

### "CORS errors"
- Add your site URL to allowed origins in Supabase → Settings → API

### "Email not sending"
- Check Supabase dashboard → Authentication → Settings
- For production, configure SMTP settings
- For development, check email logs in Supabase dashboard

## 📞 Support

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Supabase RLS Guide](https://supabase.com/docs/guides/auth/row-level-security)

## 🎉 You're Almost There!

Once you complete Steps 1-4 above, your authentication will be fully functional! The next step will be to update the components to fetch real data from Supabase instead of using mock data.

