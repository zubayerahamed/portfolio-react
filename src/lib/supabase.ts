import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Profile = {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  github_url: string;
  linkedin_url: string;
  twitter_url: string;
  resume_url: string;
  created_at: string;
  updated_at: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
  order_index: number;
  created_at: string;
};

export type Skill = {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  order_index: number;
  created_at: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  github_url: string;
  live_url: string;
  technologies: string[];
  status: 'past' | 'present' | 'upcoming';
  featured: boolean;
  order_index: number;
  created_at: string;
};

export type Experience = {
  id: string;
  company: string;
  position: string;
  description: string;
  highlights: string[];
  start_date: string;
  end_date: string | null;
  current: boolean;
  location: string;
  technologies: string[];
  order_index: number;
  created_at: string;
};

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  issue_date: string;
  expiry_date: string | null;
  credential_id: string;
  credential_url: string;
  image_url: string;
  order_index: number;
  created_at: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  event_date: string;
  category: string;
  order_index: number;
  created_at: string;
};

export type ProjectScreenshot = {
  id: string;
  project_id: string;
  image_url: string;
  order_index: number;
  created_at: string;
};
