# What to Do Next - Implementation Guide

## ✅ What's Been Created

1. **Database Schema Updates** - Added 3 new tables:
   - `contact_messages` - Store contact form submissions
   - `booked_sessions` - Store skill session bookings
   - `purchases` - Store marketplace purchases

2. **Modal Components** - Created 4 modals:
   - `AddSkillModal.tsx` - Add skills to dashboard
   - `BookSessionModal.tsx` - Book sessions with mentors
   - `AddItemModal.tsx` - Post items to marketplace
   - `PurchaseModal.tsx` - Purchase marketplace items

## 🚀 Next Steps

### Step 1: Update Database Schema (5 minutes)

1. Go to Supabase Dashboard: https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda
2. Click **SQL Editor** → **New Query**
3. Copy the NEW tables and policies from `database/schema.sql`:
   - Look for: `CONTACT MESSAGES TABLE`
   - Look for: `BOOKED SESSIONS TABLE`
   - Look for: `PURCHASES TABLE`
   - Look for: New indexes
   - Look for: New RLS policies
4. Paste and run ONLY the new parts (or run the entire updated schema.sql)

**OR** Run this SQL in Supabase SQL Editor:

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

-- RLS Policies
CREATE POLICY "Contact messages are viewable by sender" ON public.contact_messages
  FOR SELECT USING (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Anyone can insert contact messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Booked sessions are viewable by participants" ON public.booked_sessions
  FOR SELECT USING (auth.uid() = student_id OR auth.uid() = mentor_id);

CREATE POLICY "Students can book sessions" ON public.booked_sessions
  FOR INSERT WITH CHECK (auth.uid() = student_id);

CREATE POLICY "Students and mentors can update their sessions" ON public.booked_sessions
  FOR UPDATE USING (auth.uid() = student_id OR auth.uid() = mentor_id);

CREATE POLICY "Students and mentors can cancel their sessions" ON public.booked_sessions
  FOR DELETE USING (auth.uid() = student_id OR auth.uid() = mentor_id);

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

### Step 2: Wait for Code Updates

I'm now updating the main components to:
1. Integrate the modals
2. Fetch real data from Supabase
3. Make buttons functional
4. Update ContactPage to save messages
5. Update CommunityPage to allow posting

### Step 3: Test Everything

After I finish the code updates, you'll need to:
1. Test adding skills
2. Test booking sessions
3. Test adding marketplace items
4. Test purchasing items
5. Test posting in community
6. Test contact form

## 📋 Current Status

- ✅ Database schema created (need to run in Supabase)
- ✅ Modal components created
- ⏳ Updating main components (in progress)
- ⏳ Integrating Supabase queries (in progress)
- ⏳ Testing (pending)

## 🎯 What I'm Doing Now

1. Updating `SkillDashboard.tsx` to:
   - Fetch real skills from Supabase
   - Connect "Share Your Skills" button to AddSkillModal
   - Connect "Book Session" button to BookSessionModal
   - Display real data

2. Updating `MarketplacePage.tsx` to:
   - Fetch real items from Supabase
   - Connect "Post Item" button to AddItemModal
   - Connect "Buy Now" button to PurchaseModal
   - Display real data

3. Updating `CommunityPage.tsx` to:
   - Fetch real posts from Supabase
   - Allow posting new discussions
   - Display real data

4. Updating `ContactPage.tsx` to:
   - Save messages to database
   - Update location to "NMIET, Talegaon, Pune"

## ⏱️ Estimated Time

- Step 1 (Database): 5 minutes
- Step 2 (Code Updates): I'm working on this now
- Step 3 (Testing): 15-20 minutes

## 🚨 Important Notes

1. **Run the database schema first** - The new tables need to exist before the code will work
2. **Check for errors** - After running the schema, verify the tables exist in Table Editor
3. **Test incrementally** - Test one feature at a time after code updates

## 📞 Need Help?

If you encounter any issues:
1. Check Supabase Dashboard → Logs for database errors
2. Check browser console (F12) for frontend errors
3. Verify RLS policies are created correctly
4. Make sure you're logged in when testing

---

**Next**: Wait for me to finish updating the components, then follow Step 1 to update your database!

