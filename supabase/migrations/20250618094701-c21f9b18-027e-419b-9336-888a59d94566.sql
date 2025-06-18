
-- Create dekumsa_members table for storing membership registrations
CREATE TABLE IF NOT EXISTS public.dekumsa_members (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  registration_number TEXT NOT NULL,
  course TEXT NOT NULL,
  year TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  reason TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) policies for dekumsa_members (public read access)
ALTER TABLE public.dekumsa_members ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read access to dekumsa_members" ON public.dekumsa_members;
DROP POLICY IF EXISTS "Allow public insert access to dekumsa_members" ON public.dekumsa_members;

-- Create new policies
CREATE POLICY "Allow public read access to dekumsa_members" 
  ON public.dekumsa_members 
  FOR SELECT 
  USING (true);

CREATE POLICY "Allow public insert access to dekumsa_members" 
  ON public.dekumsa_members 
  FOR INSERT 
  WITH CHECK (true);
