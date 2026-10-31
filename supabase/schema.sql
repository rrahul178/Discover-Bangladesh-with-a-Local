-- Supabase Dashboard → SQL Editor → New query → পুরোটা Paste করে Run করুন।

create extension if not exists "pgcrypto";

-- ───────── Tables ─────────
create table if not exists public.packages (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  summary text,
  duration text,
  category text,
  price_usd integer,
  highlights text[] default '{}',
  itinerary jsonb default '[]'::jsonb,   -- [{"day":"Day 1","text":"..."}]
  image_url text,
  featured boolean default false,
  published boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table if not exists public.destinations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  region text,
  category text,
  description text,
  image_url text,
  published boolean default true,
  sort_order integer default 0,
  created_at timestamptz default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  country text,
  rating integer not null check (rating between 1 and 5),
  message text not null check (char_length(message) <= 1500),
  approved boolean not null default false,
  created_at timestamptz default now()
);

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  country text,
  phone text,
  package_title text,
  travel_date date,
  group_size integer,
  message text check (char_length(message) <= 3000),
  status text default 'new',
  created_at timestamptz default now()
);

-- ───────── Row Level Security ─────────
alter table public.packages     enable row level security;
alter table public.destinations enable row level security;
alter table public.reviews      enable row level security;
alter table public.inquiries    enable row level security;

-- সবাই শুধু published packages / destinations দেখতে পারবে
create policy "public read packages" on public.packages
  for select using (published = true);
create policy "public read destinations" on public.destinations
  for select using (published = true);

-- সবাই শুধু approved reviews দেখতে পারবে; নতুন review জমা দিলে অবশ্যই approved = false
create policy "public read approved reviews" on public.reviews
  for select using (approved = true);
create policy "public submit review" on public.reviews
  for insert with check (approved = false);

-- Inquiry: যে কেউ পাঠাতে পারবে, কিন্তু পড়তে পারবে না (শুধু আপনি Dashboard থেকে দেখবেন)
create policy "public submit inquiry" on public.inquiries
  for insert with check (status = 'new');

-- ───────── Sample data (ইচ্ছে হলে মুছে নিজের data বসান) ─────────
insert into public.packages (title, summary, duration, category, price_usd, highlights, itinerary, featured, sort_order) values
('Old Dhaka Heritage Walk',
 'Rickshaw rides, centuries-old lanes, Armenian church, Mughal-era landmarks and the best street food.',
 '1 day', 'Heritage', 60,
 array['Ahsan Manzil','Shakhari Bazar','Armenian Church','Street food tasting'],
 '[{"day":"Morning","text":"Rickshaw ride into Old Dhaka, Ahsan Manzil and Sadarghat."},{"day":"Midday","text":"Traditional lunch and Shakhari Bazar."},{"day":"Afternoon","text":"Armenian Church, Lalbagh Fort, tea stop."}]'::jsonb,
 true, 1),
('Sundarbans Mangrove Escape',
 'Three days by boat through the world''s largest mangrove forest.',
 '3 days / 2 nights', 'Nature', 320,
 array['Boat safari','Bird watching','Village visit'],
 '[{"day":"Day 1","text":"Travel to Khulna/Mongla and enter the forest."},{"day":"Day 2","text":"Creek exploration and forest walks."},{"day":"Day 3","text":"Sunrise cruise, village visit, return."}]'::jsonb,
 true, 2),
('Srimangal Tea & Rainforest',
 'Tea gardens, Lawachara rainforest and seven-layer tea.',
 '2 days / 1 night', 'Nature', 190,
 array['Tea estates','Lawachara National Park','Seven-layer tea'],
 '[{"day":"Day 1","text":"Train from Dhaka, tea garden walk."},{"day":"Day 2","text":"Rainforest trek and return."}]'::jsonb,
 false, 3);

insert into public.destinations (name, region, category, description, sort_order) values
('Old Dhaka','Dhaka','Local Culture','A living museum of Mughal-era lanes, markets, river life and legendary food.',1),
('Sundarbans','Khulna','Nature','UNESCO mangrove forest, home of the Royal Bengal tiger.',2),
('Srimangal','Sylhet','Nature','Tea capital of Bangladesh — green hills and rainforest.',3),
('Bagerhat','Khulna','Heritage','The Sixty Dome Mosque and a 15th-century city of brick and terracotta.',4),
('Paharpur','Naogaon','Heritage','Somapura Mahavihara, a great Buddhist monastery of South Asia.',5),
('Cox''s Bazar','Chattogram','Nature','One of the world''s longest natural sea beaches.',6);
