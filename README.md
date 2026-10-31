# Discover Bangladesh with a Local

React (Vite) + Supabase + Vercel দিয়ে তৈরি personal-branding tour guide ওয়েবসাইট।

## ১. লোকালি চালানো

```bash
npm install
cp .env.example .env     # Supabase key বসান (না বসালেও sample data দিয়ে চলবে)
npm run dev
```

## ২. নিজের তথ্য বসান

`src/config.js` খুলে এগুলো বদলান: `guideName`, `guideTitle`, `whatsapp` (দেশের কোডসহ, `+` ছাড়া, যেমন `8801712345678`), `email`, social লিংক।

`src/components/About.jsx`-এ নিজের গল্প ও ছবি বসান। ছবির জন্য `public/guide.jpg` রেখে `.portrait` div-এর জায়গায় `<img src="/guide.jpg" />` দিন।

## ৩. Supabase সেটআপ

1. https://supabase.com এ নতুন প্রজেক্ট খুলুন।
2. **SQL Editor** → `supabase/schema.sql` এর পুরো লেখা Paste করে **Run**।
3. **Project Settings → API** থেকে `Project URL` ও `anon public` key কপি করুন।
4. `.env` ফাইলে বসান:
   ```
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   ```
5. প্যাকেজ/ডেস্টিনেশন বদলাতে **Table Editor** ব্যবহার করুন। গেস্ট রিভিউ আসলে `reviews` টেবিলে `approved` টিক দিলে সাইটে দেখাবে। Inquiry দেখবেন `inquiries` টেবিলে।

> সুরক্ষা: শুধু `anon` key ব্যবহার করুন (`service_role` কখনো নয়)। RLS চালু আছে, তাই পাবলিক শুধু published ডেটা পড়তে এবং inquiry/review জমা দিতে পারে।

## ৪. GitHub-এ আপলোড

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/discover-bangladesh.git
git push -u origin main
```

## ৫. Vercel-এ ডিপ্লয়

1. https://vercel.com → **Add New → Project** → GitHub রিপো Import।
2. Framework: **Vite** (অটো ডিটেক্ট হবে)।
3. **Environment Variables**-এ `VITE_SUPABASE_URL` ও `VITE_SUPABASE_ANON_KEY` যোগ করুন।
4. **Deploy**। পরে নিজের ডোমেইন Settings → Domains থেকে যুক্ত করবেন।

## প্রজেক্ট কাঠামো

```
src/
  config.js          ← আপনার নাম, WhatsApp, ইমেইল
  data/fallback.js   ← Supabase ছাড়া sample data
  lib/supabase.js
  hooks/useTable.js
  components/        ← Navbar, Hero, About, Packages, Destinations, Safety, Reviews, Contact, Footer
supabase/schema.sql  ← টেবিল + RLS + sample data
```

## পরের ধাপের আইডিয়া
- আসল ছবি (Supabase Storage বা `public/` ফোল্ডার)
- Blog / travel tips সেকশন (SEO-র জন্য)
- ইংরেজি + বাংলা ভাষা টগল
- Inquiry এলে ইমেইল নোটিফিকেশন (Supabase Edge Function / Resend)
