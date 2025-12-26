/*
  # Create project_screenshots table

  1. New Tables
    - `project_screenshots`
      - `id` (uuid, primary key)
      - `project_id` (uuid, foreign key to projects)
      - `image_url` (text) - URL to the screenshot image
      - `order_index` (integer) - Order of screenshots within a project
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `project_screenshots` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS project_screenshots (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url text NOT NULL DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE project_screenshots ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read access"
  ON project_screenshots FOR SELECT
  TO public
  USING (true);

CREATE INDEX IF NOT EXISTS idx_project_screenshots_project_id 
  ON project_screenshots(project_id);

CREATE INDEX IF NOT EXISTS idx_project_screenshots_order 
  ON project_screenshots(project_id, order_index);