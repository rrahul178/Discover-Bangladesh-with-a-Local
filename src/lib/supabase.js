import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Env না দিলেও সাইট চলবে (sample data দেখাবে), শুধু ফর্ম ডাটাবেসে সেভ হবে না।
export const supabase = url && key ? createClient(url, key) : null;
export const hasSupabase = Boolean(supabase);
