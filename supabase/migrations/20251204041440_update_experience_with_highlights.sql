/*
  # Update Experience Table with Bullet Points

  Modify experience table to support bullet point descriptions instead of single paragraph.
  
  1. Schema Changes
    - Add `highlights` column (text array) to store individual bullet points
    - Keep `description` column for backward compatibility
  
  2. Migration Strategy
    - Add new highlights column
    - Update existing data to use highlights
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'experience' AND column_name = 'highlights'
  ) THEN
    ALTER TABLE experience ADD COLUMN highlights text[] DEFAULT '{}';
  END IF;
END $$;
