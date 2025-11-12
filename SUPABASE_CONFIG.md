# Supabase Configuration for SkillShare

## 🔗 Repository & Deployment

- **GitHub Repository**: [https://github.com/Maxhawkinz/skillshare](https://github.com/Maxhawkinz/skillshare)
- **GitHub Pages URL**: [https://maxhawkinz.github.io/skillshare/](https://maxhawkinz.github.io/skillshare/)
- **Local Development**: `http://localhost:3000`

## 🔑 Supabase Project

- **Project ID**: `bfgtbdwywhmmoouyyxda`
- **Project URL**: `https://bfgtbdwywhmmoouyyxda.supabase.co`
- **Dashboard**: [https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda](https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda)

## ⚙️ Required Supabase Settings

### 1. Authentication → Providers

**Enable Email Provider:**
- Go to: **Authentication** → **Providers** → **Email**
- Toggle **Enable Email provider** to ON

### 2. Authentication → URL Configuration

**Site URL:**
```
https://maxhawkinz.github.io/skillshare/
```

**Redirect URLs:**
```
https://maxhawkinz.github.io/skillshare/**
http://localhost:3000/**
```

### 3. Settings → API

**Allowed Origins (CORS):**
Add these origins to avoid CORS errors:
```
https://maxhawkinz.github.io
http://localhost:3000
```

### 4. Database → SQL Editor

**Run the schema:**
1. Go to **SQL Editor**
2. Click **New Query**
3. Copy and paste the contents of `database/schema.sql`
4. Click **Run**

## 📋 Configuration Checklist

- [ ] Email provider enabled
- [ ] Site URL set to `https://maxhawkinz.github.io/skillshare/`
- [ ] Redirect URLs configured
- [ ] CORS origins added
- [ ] Database schema run successfully
- [ ] All tables created (check Table Editor)
- [ ] RLS policies active (check Table Editor → Policies)

## 🧪 Testing

After configuration, test:

1. **Local Development:**
   - Run `npm run dev`
   - Navigate to `http://localhost:3000`
   - Try signing up with `@nmiet.edu.in` email
   - Check Supabase dashboard for new user

2. **Production:**
   - Visit `https://maxhawkinz.github.io/skillshare/`
   - Try signing up
   - Verify redirect works correctly
   - Check Supabase dashboard for new user

## 🔒 Security Notes

1. **Email Domain Restriction**: Currently enforced in code (requires `@nmiet.edu.in`)
2. **Row Level Security**: Enabled on all tables
3. **Public Anon Key**: Safe to expose in frontend (already in code)
4. **Service Role Key**: Never expose in frontend (server-side only)

## 📚 Related Documentation

- `DATABASE_SETUP.md` - Complete setup guide
- `SETUP_INSTRUCTIONS.md` - Quick setup instructions
- `README_DATABASE.md` - Quick reference
- `NEXT_STEPS.md` - Next steps after setup

