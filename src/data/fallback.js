// Supabase সংযুক্ত না থাকলে বা ডাটাবেস খালি থাকলে এই sample data দেখাবে।
// ✏️ দাম ও ইটিনেরারি নিজের মতো বদলে নিন।

export const fallbackPackages = [
  {
    id: "p1",
    image_url: "/destinations/old-dhaka.jpg",
    title: "Old Dhaka Heritage Walk",
    summary:
      "Rickshaw rides, centuries-old lanes, Armenian church, Mughal-era landmarks and the best street food, with a local who knows every shortcut.",
    duration: "1 day",
    category: "Heritage",
    price_usd: 60,
    highlights: ["Ahsan Manzil", "Shakhari Bazar", "Armenian Church", "Street food tasting"],
    itinerary: [
      { day: "Morning", text: "Meet at your hotel, rickshaw ride into Old Dhaka, Ahsan Manzil and Sadarghat river port." },
      { day: "Midday", text: "Traditional lunch, Shakhari Bazar and Hindu Street craft lanes." },
      { day: "Afternoon", text: "Armenian Church, Lalbagh Fort and tea stop before drop-off." },
    ],
    featured: true,
  },
  {
    id: "p2",
    image_url: "/destinations/sundarbans.jpg",
    title: "Sundarbans Mangrove Escape",
    summary:
      "Three days by boat through the world's largest mangrove forest — wildlife, quiet rivers and village life at the edge of the delta.",
    duration: "3 days / 2 nights",
    category: "Nature",
    price_usd: 320,
    highlights: ["Boat safari", "Bird watching", "Village visit", "Sunrise on the river"],
    itinerary: [
      { day: "Day 1", text: "Travel to Khulna / Mongla, board the boat and enter the forest." },
      { day: "Day 2", text: "Creek exploration, watchtowers, forest walks with a forest-department guide." },
      { day: "Day 3", text: "Sunrise cruise, village visit and return." },
    ],
    featured: true,
  },
  {
    id: "p3",
    image_url: "/destinations/srimangal.jpg",
    title: "Srimangal Tea & Rainforest",
    summary:
      "Rolling tea gardens, Lawachara rainforest, seven-layer tea and the Khasi and Manipuri communities of the Sylhet hills.",
    duration: "2 days / 1 night",
    category: "Nature",
    price_usd: 190,
    highlights: ["Tea estates", "Lawachara National Park", "Seven-layer tea", "Tribal village visit"],
    itinerary: [
      { day: "Day 1", text: "Train from Dhaka, tea garden walk, sunset at the lake." },
      { day: "Day 2", text: "Rainforest trek, community visit, return by train." },
    ],
    featured: false,
  },
  {
    id: "p4",
    image_url: "/destinations/bagerhat.jpg",
    title: "Bangladesh Classic — 7 Days",
    summary:
      "A tailored journey across Old Dhaka, ancient mosques of Bagerhat, the Sundarbans and the tea hills of Sylhet.",
    duration: "7 days / 6 nights",
    category: "Private Tours",
    price_usd: 780,
    highlights: ["Old Dhaka", "Bagerhat", "Sundarbans", "Sylhet tea hills"],
    itinerary: [
      { day: "Day 1–2", text: "Dhaka: Old Dhaka and modern city, river port and food." },
      { day: "Day 3", text: "Bagerhat: Sixty Dome Mosque and UNESCO heritage sites." },
      { day: "Day 4–5", text: "Sundarbans boat safari." },
      { day: "Day 6–7", text: "Srimangal and Sylhet hills, return to Dhaka." },
    ],
    featured: true,
  },
];

export const fallbackDestinations = [
  { id: "d1", image_url: "/destinations/old-dhaka.jpg", name: "Old Dhaka", region: "Dhaka", category: "Local Culture", description: "A living museum of Mughal-era lanes, markets, river life and legendary food.", gradient: "linear-gradient(135deg,#b4532a,#e0a458)" },
  { id: "d2", image_url: "/destinations/sundarbans.jpg", name: "Sundarbans", region: "Khulna", category: "Nature", description: "UNESCO mangrove forest, home of the Royal Bengal tiger and endless tidal creeks.", gradient: "linear-gradient(135deg,#1f5c44,#6aa57a)" },
  { id: "d3", image_url: "/destinations/srimangal.jpg", name: "Srimangal", region: "Sylhet", category: "Nature", description: "Tea capital of Bangladesh — green hills, rainforest and calm mornings.", gradient: "linear-gradient(135deg,#2f6b3b,#a7c957)" },
  { id: "d4", image_url: "/destinations/bagerhat.jpg", name: "Bagerhat", region: "Khulna", category: "Heritage", description: "The Sixty Dome Mosque and a 15th-century city of brick and terracotta.", gradient: "linear-gradient(135deg,#7a4b2a,#c89f6a)" },
  { id: "d5", image_url: "/destinations/paharpur.jpg", name: "Paharpur", region: "Naogaon", category: "Heritage", description: "Somapura Mahavihara, one of the great Buddhist monasteries of South Asia.", gradient: "linear-gradient(135deg,#8c5a3c,#d9b48f)" },
  { id: "d6", image_url: "/destinations/coxs-bazar.jpg", name: "Cox's Bazar", region: "Chattogram", category: "Nature", description: "One of the world's longest natural sea beaches, with fresh seafood at sunset.", gradient: "linear-gradient(135deg,#1b6a8a,#6cc4d9)" },
];

export const fallbackReviews = [];
