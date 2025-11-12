# SkillShare - NMIET Connect

A community platform for NMIET students to share skills, buy/sell items, and connect with peers.

## 🔗 Links

- **GitHub Repository**: [https://github.com/Maxhawkinz/skillshare](https://github.com/Maxhawkinz/skillshare)
- **Live Site**: [https://maxhawkinz.github.io/skillshare/](https://maxhawkinz.github.io/skillshare/)
- **Supabase Dashboard**: [https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda](https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda)

## 🚀 Features

- **Skills Dashboard** - Find mentors and share your skills
- **Marketplace** - Buy and sell items within the NMIET community
- **Community Hub** - Discussion forums, events, and leaderboard
- **Authentication** - Secure email-based authentication (NMIET email only)
- **User Profiles** - Customizable user profiles

## 🛠️ Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + Radix UI
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Maxhawkinz/skillshare.git
cd skillshare
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

## 🗄️ Database Setup

Follow these steps to set up the Supabase database:

1. **Run Database Schema**
   - Go to [Supabase Dashboard](https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda)
   - Click **SQL Editor** → **New Query**
   - Open `database/schema.sql` from this project
   - Copy ALL the SQL code and paste it
   - Click **Run**

2. **Enable Email Authentication**
   - Go to **Authentication** → **Providers**
   - Enable **Email** provider
   - Set **Site URL**: `https://maxhawkinz.github.io/skillshare/`
   - Add **Redirect URLs**:
     - `https://maxhawkinz.github.io/skillshare/**`
     - `http://localhost:3000/**`

3. **Verify Setup**
   - Check **Table Editor** to verify all tables are created
   - Test authentication flow

For detailed setup instructions, see:
- **Quick Setup**: [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- **Detailed Guide**: [DATABASE_SETUP.md](./DATABASE_SETUP.md)
- **Configuration**: [SUPABASE_CONFIG.md](./SUPABASE_CONFIG.md)

## 📚 Documentation

- [DATABASE_SETUP.md](./DATABASE_SETUP.md) - Complete database setup guide
- [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) - Quick setup instructions
- [README_DATABASE.md](./README_DATABASE.md) - Database quick reference
- [SUPABASE_CONFIG.md](./SUPABASE_CONFIG.md) - Supabase configuration
- [NEXT_STEPS.md](./NEXT_STEPS.md) - Next steps after setup
- [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) - Current implementation status

## 🔑 Configuration

### Supabase

- **Project ID**: `bfgtbdwywhmmoouyyxda`
- **Project URL**: `https://bfgtbdwywhmmoouyyxda.supabase.co`
- **Public Anon Key**: See `src/utils/supabase/info.tsx`

### Environment Variables (Optional)

Create a `.env` file:
```env
VITE_SUPABASE_URL=https://bfgtbdwywhmmoouyyxda.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

## 🚢 Deployment

The site is deployed to GitHub Pages:

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

The site will be available at: `https://maxhawkinz.github.io/skillshare/`

## 🔒 Security

- **Email Domain Restriction**: Only `@nmiet.edu.in` emails are allowed
- **Row Level Security**: Enabled on all database tables
- **Authentication**: Secure email-based authentication via Supabase

## 📝 License

This project is private and for NMIET students only.

## 🤝 Contributing

This is a private project for NMIET students. Contributions are welcome from NMIET community members.

## 📞 Support

For issues or questions:
- Check the documentation in the `docs/` folder
- Review [Supabase Documentation](https://supabase.com/docs)
- Check [Supabase Dashboard](https://supabase.com/dashboard/project/bfgtbdwywhmmoouyyxda) for database issues

## 🎯 Current Status

- ✅ Database schema created
- ✅ Supabase client configured
- ✅ Authentication integrated
- ⏳ Data integration (in progress)
- ⏳ Image upload (pending)
- ⏳ Real-time updates (pending)

See [IMPLEMENTATION_STATUS.md](./IMPLEMENTATION_STATUS.md) for detailed status.

