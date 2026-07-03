// ============================================================
// SALON CONTENT — everything you'd need to update lives here.
// Items marked TODO need confirming with the salon before launch.
// ============================================================

export const brand = {
  name: "The Hair Refinery",
  tagline: "Refined. Reimagined.",
  location: "Aluva",
  rating: 4.8,
  reviewCount: 25,
  category: "Unisex Salon",
  whatsappNumber: "918921894744", // TODO: phone number was cut off in the listing screenshot (started +91 89218...) — confirm full number before using this link, it will not work as-is
  phoneDisplay: "+91 89218 94744", // TODO: confirm full number
  instagram: "https://instagram.com/the_hair_refinery__",
  facebook: "https://facebook.com/thehairrefinery", // Exact FB url
  googleReviewUrl: "https://www.google.com/search?q=hair+refinery+unisex+salon&oq=hair+refinery+unisex+salon+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDzSAQk1MzU2ajBqMTWoAgCwAgA&sourceid=chrome&ie=UTF-8#lrd=0x3b080fd4e62ee13f:0xd2d5f833cef059c,1,,,,", // their real Google review link
  address: "Space Garden, Manakkapady Road, Ashokapuram P.O, Aluva, Kerala 683101",
  weeklyHours: [
    { day: "Monday", time: "09:00 AM - 09:30 PM" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "09:00 AM - 09:30 PM" },
    { day: "Thursday", time: "09:00 AM - 09:30 PM" },
    { day: "Friday", time: "09:00 AM - 09:30 PM" },
    { day: "Saturday", time: "09:00 AM - 09:30 PM" },
    { day: "Sunday", time: "09:00 AM - 09:30 PM" },
  ], // full weekly hours
  mapsUrl: "https://maps.google.com/?q=The+Hair+Refinery+Unisex+Salon+Aluva",
};

export const serviceCategories = [
  {
    id: "hair",
    label: "Hair",
    items: [
      "Haircut & Styling",
      "Hair Colouring",
      "Balayage & Ombre",
      "Hair Highlighting",
      "Hair Straightening",
      "Keratin Treatment",
      "Curly Hair Styling",
      "Hair Regrowth Treatment",
      "Blow Dry",
      "Hair Treatments",
    ],
  },
  {
    id: "skin",
    label: "Skin",
    items: ["Facials", "Skin Treatments", "Head Massage"],
  },
  {
    id: "grooming",
    label: "Grooming",
    items: ["Men's Haircut", "Ladies' Styling", "Unisex Waxing"],
  },
  {
    id: "bridal",
    label: "Bridal",
    items: ["Bridal Services", "Make-Up Services"],
  },
];

// Real Google review excerpts, paraphrased and shortened.
export const testimonials = [
  {
    quote:
      "The ambience felt calm, clean and welcoming from the moment I walked in — staff were polite and friendly throughout.",
    author: "Google review",
  },
  {
    quote: "Excellent atmosphere, and easily the best hairstylist in the area.",
    author: "Google review",
  },
  {
    quote: "Professional staff and good service.",
    author: "Google review",
  },
];

export const whatsappBookingUrl = (message = "Hi! I'd like to book an appointment.") =>
  `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
