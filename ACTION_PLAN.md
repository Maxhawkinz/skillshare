# Action Plan - What to Do Next

Follow these steps **in order** to set up your database:

## Step 1: Run Database Schema (5 minutes)

### What you're doing:
Creating all the database tables, indexes, triggers, and security policies.

### How to do it:
1. Go to: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
2. Click **SQL Editor** in the left sidebar
3. Click **New Query** button (top right)
4. Open the file `database/schema.sql` from your project
5. **Select ALL** the SQL code (Ctrl+A / Cmd+A)
6. **Copy** it (Ctrl+C / Cmd+C)
7. **Paste** it into the SQL Editor in Supabase
8. Click **Run** button (or press Ctrl+Enter / Cmd+Enter)
9. Wait for it to complete (you should see "Success" message)

### ✅ How to verify it worked:
- Go to **Table Editor** in the left sidebar
- You should see these tables:
  - profiles
  - skills
  - marketplace_items
  - community_posts
  - community_comments
  - events
  - event_attendees
  - user_points
  - post_likes
  - comment_likes
  - marketplace_likes
  - kv_store_429b5670

---

## Step 2: Enable Email Authentication (3 minutes)

### What you're doing:
Enabling email/password authentication so users can sign up and sign in.

### How to do it:
1. In Supabase Dashboard, click **Authentication** in the left sidebar
2. Click **Providers** tab
3. Find **Email** provider
4. Toggle the switch to **Enable Email provider** (turn it ON)
5. Scroll down to **Email Auth Settings**
6. Set **Site URL** to: `https://maxhawkinz.github.io/skillshare/`
7. Under **Redirect URLs**, click **Add URL** and add:
   - `https://maxhawkinz.github.io/skillshare/**`
   - `http://localhost:3000/**`
8. Click **Save**

### ✅ How to verify it worked:
- The Email provider toggle should be ON (green)
- Site URL should show: `https://maxhawkinz.github.io/skillshare/`
- Redirect URLs should include both URLs above

---

## Step 3: Configure CORS (Optional - 2 minutes)

### ⚠️ Important: This step might not be necessary!
Supabase often handles CORS automatically. If you can't find CORS settings, **you can skip this step** and go to Step 4.

### What you're doing:
Configuring CORS to allow your website to communicate with Supabase (if needed).

### How to do it:
1. In Supabase Dashboard, click **Settings** (gear icon) in the left sidebar
2. Click **API**
3. Look for **CORS Configuration** or **Allowed Origins** section
4. **If you find it**, add these origins:
   - `https://maxhawkinz.github.io`
   - `http://localhost:3000`
5. Click **Save**

### ⚠️ If you can't find CORS settings:
**Don't worry!** This is normal. Supabase handles CORS automatically in most cases. You can:
- Skip this step
- Make sure Step 2 (Redirect URLs) is complete
- Go to Step 4 and test

### ✅ How to verify it worked:
- If you found CORS settings: Both URLs should appear in the list
- If you didn't find CORS settings: That's OK! Test in Step 4

### 📖 Need more help?
See `STEP3_CORS_HELP.md` for detailed instructions and troubleshooting.

---

## Step 4: Test Authentication (5 minutes)

### What you're doing:
Testing that everything works by creating a test account.

### How to do it:
1. Open your terminal/command prompt
2. Navigate to your project folder:
   ```bash
   cd D:\skillshare-master
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to: `http://localhost:3000`
5. Click **Sign In** button
6. Click **Don't have an account? Sign up**
7. Fill in the form:
   - **Full Name**: Test User
   - **NMIET Email**: test@nmiet.edu.in (or your real NMIET email)
   - **Password**: test123456 (must be at least 6 characters)
8. Click **Create Account**

### ✅ How to verify it worked:
- You should see a success message or be logged in
- Go back to Supabase Dashboard → **Authentication** → **Users**
- You should see your test user in the list
- Go to **Table Editor** → **profiles**
- You should see a profile row with your user's information

---

## Step 5: Test on Production (Optional - 3 minutes)

### What you're doing:
Testing that authentication works on your live GitHub Pages site.

### How to do it:
1. Make sure your code is pushed to GitHub:
   ```bash
   git add .
   git commit -m "Add database setup and authentication"
   git push
   ```
2. Wait for GitHub Pages to deploy (check Actions tab)
3. Visit: https://maxhawkinz.github.io/skillshare/
4. Try signing up with a different email
5. Verify it works

### ✅ How to verify it worked:
- You can sign up successfully
- User appears in Supabase dashboard
- Profile is created automatically

---

## 🎉 You're Done!

Once you complete Steps 1-4, your database is fully set up and authentication is working!

## ❓ Troubleshooting

### "Invalid API key" error
- **Solution**: Check that the anon key in `src/utils/supabase/info.tsx` matches the one in Supabase Dashboard → Settings → API

### "Row Level Security policy violation" error
- **Solution**: Make sure you ran the complete `database/schema.sql` file (all of it, not just part)

### "Profile not created after signup"
- **Solution**: 
  - Check Supabase Dashboard → **Logs** for errors
  - Verify that `handle_new_user()` function exists (check SQL Editor → Functions)

### "CORS error" in browser console
- **Solution**: 
  - Make sure you added the origins in Step 3
  - Check that URLs match exactly (no trailing slashes)

### "Email not sending" (if email confirmation is enabled)
- **Solution**: 
  - Check Supabase Dashboard → **Authentication** → **Settings**
  - For development, you can disable email confirmation temporarily
  - Check email spam folder

## 📚 Need More Help?

- See `DATABASE_SETUP.md` for detailed documentation
- See `SUPABASE_CONFIG.md` for configuration details
- See `SETUP_INSTRUCTIONS.md` for quick reference
- Check Supabase Dashboard → **Logs** for error messages

## 🚀 Next Steps

After database setup is complete:
1. Test all authentication flows
2. Update components to fetch real data from Supabase
3. Add data creation forms (post skill, post item, etc.)
4. Add features like likes, comments, events

See `IMPLEMENTATION_STATUS.md` for what's done and what's next.

