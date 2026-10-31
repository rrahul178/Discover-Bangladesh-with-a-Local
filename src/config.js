// ✏️ এখানে নিজের তথ্য বসান — পুরো সাইটে এই মানগুলো ব্যবহার হবে।
export const SITE = {
  brand: "Discover Bangladesh with a Local",
  shortBrand: "Discover Bangladesh",
  tagline: "Explore Bangladesh with a Local",
  intro:
    "Discover the hidden beauty, rich history, culture and everyday life of Bangladesh through authentic local experiences.",
  guideName: "Rahul Acharjee", // ← আপনার নাম
  guideTitle: "Local guide from Kishoreganj", // ← নিজের পরিচয়
  whatsapp: "8801711428936", // ← দেশের কোড সহ, + ছাড়া (যেমন 8801712345678)
  email: "rrahul178@gmail.com", // ← আপনার ইমেইল
  location: "Kishoreganj, Bangladesh",
  facebook: "", // ← ঐচ্ছিক
  instagram: "", // ← ঐচ্ছিক
  tripadvisor: "", // ← ঐচ্ছিক
};

export const TAGS = ["Private Tours", "Heritage", "Nature", "Local Culture"];

export const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Your Guide" },
  { id: "packages", label: "Tour Packages" },
  { id: "destinations", label: "Destinations" },
  { id: "reviews", label: "Guest Reviews" },
  { id: "contact", label: "Contact / WhatsApp" },
];

export const waLink = (text = "") =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
