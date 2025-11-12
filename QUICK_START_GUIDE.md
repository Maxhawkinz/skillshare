# Quick Start Guide - What to Do Right Now

## 🎯 Immediate Actions Required

### Step 1: Update Database Schema (5 minutes) ⚠️ REQUIRED

**You MUST do this first before the new features will work!**

1. Go to: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
2. Click **SQL Editor** → **New Query**
3. Copy and paste this SQL:

```sql
-- Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  category TEXT NOT NULL,
  message TEXT NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Booked Sessions Table
CREATE TABLE IF NOT EXISTS public.booked_sessions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  skill_id UUID NOT NULL REFERENCES public.skills(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  mentor_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_date DATE NOT NULL,
  session_time TIME NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Purchases Table
CREATE TABLE IF NOT EXISTS public.purchases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  item_id UUID NOT NULL REFERENCES public.marketplace_items(id) ON DELETE CASCADE,
  buyer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  seller_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  price NUMERIC(10, 2) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'cancelled', 'disputed')),
  payment_method TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_contact_messages_user_id ON public.contact_messages(user_id);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_booked_sessions_skill_id ON public.booked_sessions(skill_id);
CREATE INDEX IF NOT EXISTS idx_booked_sessions_student_id ON public.booked_sessions(student_id);
CREATE INDEX IF NOT EXISTS idx_booked_sessions_mentor_id ON public.booked_sessions(mentor_id);
CREATE INDEX IF NOT EXISTS idx_booked_sessions_status ON public.booked_sessions(status);
CREATE INDEX IF NOT EXISTS idx_purchases_item_id ON public.purchases(item_id);
CREATE INDEX IF NOT EXISTS idx_purchases_buyer_id ON public.purchases(buyer_id);
CREATE INDEX IF NOT EXISTS idx_purchases_seller_id ON public.purchases(seller_id);
CREATE INDEX IF NOT EXISTS idx_purchases_status ON public.purchases(status);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.booked_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Contact Messages
CREATE POLICY "Contact messages are viewable by sender" ON public.contact_messages
  FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- RLS Policies for Booked Sessions
CREATE POLICY "Booked sessions are viewable by participants" ON public.booked_sessions
  FOR SELECT USING (auth.uid() = student_id OR auth.uid() = mentor_id);

CREATE POLICY "Students can book sessions" ON public.booked_sessions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students and mentors can update their sessions" ON public.booked_sessions
  FOR UPDATE USING (auth.uid() = student_id OR auth.uid() = mentor_id);

CREATE POLICY "Students and mentors can cancel their sessions" ON public.booked_sessions
  FOR DELETE USING (auth.uid() = student_id OR auth.uid() = mentor_id);

-- RLS Policies for Purchases
CREATE POLICY "Purchases are viewable by buyer and seller" ON public.purchases
  FOR SELECT USING (auth.uid() = buyer_id OR auth.uid() = seller_id);

CREATE POLICY "Buyers can create purchases" ON public.purchases
  FOR INSERT WITH CHECK (auth.uid() = buyer_id);

CREATE POLICY "Buyers and sellers can update their purchases" ON public.purchases
  FOR UPDATE USING (auth.uid() = buyer_id OR auth.uid() = seller_id);

-- Triggers
CREATE TRIGGER update_booked_sessions_updated_at BEFORE UPDATE ON public.booked_sessions FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_purchases_updated_at BEFORE UPDATE ON public.purchases FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

4. Click **Run**
5. Verify: Go to **Table Editor** - you should see:
   - ✅ contact_messages
   - ✅ booked_sessions
   - ✅ purchases

### Step 2: Wait for Code Updates

I'm currently updating the components to:
- ✅ Connect modals to buttons
- ✅ Fetch real data from Supabase
- ✅ Make all features functional

### Step 3: Test Everything (After Code Updates)

1. **Test Skills Dashboard:**
   - Click "Share Your Skills" → Add a skill
   - Click "Book Session" on a skill → Book a session

2. **Test Marketplace:**
   - Click "Post Item" → Add an item
   - Click "Buy Now" → Purchase an item

3. **Test Community:**
   - Post a new discussion
   - See it appear in the list

4. **Test Contact:**
   - Fill out contact form
   - Submit → Check database for message

## 📋 Checklist

- [ ] Step 1: Run database schema SQL (REQUIRED)
- [ ] Step 2: Wait for code updates (I'm working on this)
- [ ] Step 3: Test features (after code is ready)

## ⏱️ Timeline

- **Now**: Run Step 1 (database schema)
- **Next 10-15 minutes**: I'll finish updating components
- **Then**: Test all features

## 🚨 Important

**You MUST run the database schema (Step 1) first!** The new features won't work without the new tables.

## 📞 Need Help?

- Check Supabase Dashboard → Logs for errors
- Check browser console (F12) for frontend errors
- Verify tables exist in Table Editor

---

**Next Action**: Run Step 1 SQL in Supabase Dashboard NOW!

