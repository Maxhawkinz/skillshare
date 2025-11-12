import { createClient } from '@jsr/supabase__supabase-js';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Construct Supabase URL from project ID
// You can also use environment variables: import.meta.env.VITE_SUPABASE_URL
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || `https://${projectId}.supabase.co`;

// Get the anon key (use environment variable if available, otherwise use the one from info.tsx)
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || publicAnonKey;

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types
export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  year: string | null;
  department: string | null;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
}

export interface Skill {
  id: string;
  user_id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  rating: number;
  sessions_count: number;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface MarketplaceItem {
  id: string;
  user_id: string;
  title: string;
  description: string;
  price: number;
  original_price: number;
  category: string;
  condition: string;
  image_url: string | null;
  location: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  likes_count: number;
  replies_count: number;
  is_answered: boolean;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface CommunityComment {
  id: string;
  post_id: string;
  user_id: string;
  content: string;
  likes_count: number;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface Event {
  id: string;
  user_id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: string;
  max_attendees: number;
  attendees_count: number;
  created_at: string;
  updated_at: string;
  profile?: Profile;
}

export interface UserPoints {
  id: string;
  user_id: string;
  points: number;
  badge: string | null;
  updated_at: string;
  profile?: Profile;
}

