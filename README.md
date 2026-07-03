# The Hair Refinery — Website

Modern salon website built with React, Vite, and Tailwind CSS featuring a premium dark theme, online contact options, and business information.

## Live Demo

🔗 https://the-hair-refinery.vercel.app/

## Features

- Responsive salon website
- WhatsApp appointment booking
- Google Maps integration
- Weekly working hours
- Direct phone call support
- Instagram & Facebook links
- Service showcase
- Gallery section (placeholder images)
- Dark luxury theme with gold accents

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Icons
- Vercel

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, or any static host.

## Where everything lives

- **`src/data/salonData.js`** — ALL content. Edit this one file to update
  text, services, contact info.
- **`src/components/`** — one file per section. Plain JSX, `useState` only
  for the services tab switcher.
- **`src/components/Gallery.jsx`** — placeholder tiles, not real photos
  (per your choice). Swap in real photos once you have permission.
- **`tailwind.config.js`** — custom brand colors and font configuration.
- **`src/index.css`** — global styles, font imports, and custom utility classes  such as `.nameplate` and `.neon-glow`.

## Before going live — checklist

- [ ] Get written permission to use the salon logo
- [ ] Get written permission to use salon photos
- [ ] Replace placeholder gallery images

## Reusing this template

1. Copy the project
2. Update `src/data/salonData.js`
3. Replace logo and gallery images
4. Update social links and contact details
5. Adjust brand colors in `tailwind.config.js`
6. Deploy to Vercel or Netlify

Suitable for:
- Salons
- Barbershops
- Spas
- Beauty clinics
- Gyms
- Local businesses
