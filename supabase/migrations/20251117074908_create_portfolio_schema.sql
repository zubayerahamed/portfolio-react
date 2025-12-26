/*
  # Portfolio Database Schema

  1. New Tables
    - `profile`
      - `id` (uuid, primary key)
      - `name` (text)
      - `title` (text)
      - `bio` (text)
      - `email` (text)
      - `phone` (text)
      - `location` (text)
      - `github_url` (text)
      - `linkedin_url` (text)
      - `twitter_url` (text)
      - `resume_url` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `services`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `icon` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text)
      - `category` (text) - e.g., 'Backend', 'Frontend', 'Tools', 'Database'
      - `proficiency` (integer) - 1-100
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `github_url` (text)
      - `live_url` (text)
      - `technologies` (text array)
      - `status` (text) - 'past', 'present', 'upcoming'
      - `featured` (boolean)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `experience`
      - `id` (uuid, primary key)
      - `company` (text)
      - `position` (text)
      - `description` (text)
      - `start_date` (date)
      - `end_date` (date, nullable)
      - `current` (boolean)
      - `location` (text)
      - `technologies` (text array)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `certifications`
      - `id` (uuid, primary key)
      - `title` (text)
      - `issuer` (text)
      - `issue_date` (date)
      - `expiry_date` (date, nullable)
      - `credential_id` (text)
      - `credential_url` (text)
      - `image_url` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)
    
    - `gallery`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `image_url` (text)
      - `event_date` (date)
      - `category` (text)
      - `order_index` (integer)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access (portfolio is public)
    - Add policies for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS profile (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  title text NOT NULL DEFAULT '',
  bio text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  phone text NOT NULL DEFAULT '',
  location text NOT NULL DEFAULT '',
  github_url text NOT NULL DEFAULT '',
  linkedin_url text NOT NULL DEFAULT '',
  twitter_url text NOT NULL DEFAULT '',
  resume_url text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  icon text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL DEFAULT '',
  category text NOT NULL DEFAULT '',
  proficiency integer DEFAULT 0,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  github_url text NOT NULL DEFAULT '',
  live_url text NOT NULL DEFAULT '',
  technologies text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'present',
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS experience (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL DEFAULT '',
  position text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  start_date date NOT NULL DEFAULT CURRENT_DATE,
  end_date date,
  current boolean DEFAULT false,
  location text NOT NULL DEFAULT '',
  technologies text[] DEFAULT '{}',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS certifications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  issuer text NOT NULL DEFAULT '',
  issue_date date NOT NULL DEFAULT CURRENT_DATE,
  expiry_date date,
  credential_id text NOT NULL DEFAULT '',
  credential_url text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS gallery (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  image_url text NOT NULL DEFAULT '',
  event_date date NOT NULL DEFAULT CURRENT_DATE,
  category text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE profile ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE experience ENABLE ROW LEVEL SECURITY;
ALTER TABLE certifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view profile"
  ON profile FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view services"
  ON services FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view skills"
  ON skills FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view experience"
  ON experience FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view certifications"
  ON certifications FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Public can view gallery"
  ON gallery FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage profile"
  ON profile FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage services"
  ON services FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage skills"
  ON skills FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage projects"
  ON projects FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage experience"
  ON experience FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage certifications"
  ON certifications FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage gallery"
  ON gallery FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);