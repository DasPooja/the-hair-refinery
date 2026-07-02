# The Hair Refinery — Website

React + Vite + Tailwind CSS. Black, gold & teal — matches their real interior (velvet couch, gold nameplate signage, neon accents).

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
  text, services, contact info. Several `TODO` lines still need real info:
  - Full WhatsApp/phone number (was cut off in your screenshot — you have
    `+91 89218...`, need the rest before the Book buttons will work)
  - Exact Facebook and Google review URLs
  - Full weekly hours
- **`src/components/`** — one file per section. Plain JSX, `useState` only
  for the services tab switcher.
- **`src/components/Gallery.jsx`** — placeholder tiles, not real photos
  (per your choice). Swap in real photos once you have permission.
- **`tailwind.config.js`** — brand colors (`charcoal`, `surface`, `gold`,
  `teal`, `tealBright`, `cream`, `neon`) and fonts (Space Grotesk for
  headings — a nod to the "Refinery" industrial name — Inter for body).
- **`src/index.css`** — font imports + the `.nameplate` and `.neon-glow`
  classes. `.nameplate` gives cards a small-rivet, brushed-metal look,
  echoing their real gold-on-black nameplate signage — this site's
  signature visual detail (deliberately different from the Toni & Guy
  build's "ticket" motif, so the two don't look like the same template).

## Before going live — checklist

- [ ] Get the full WhatsApp number — currently broken/placeholder
- [ ] Confirm exact Facebook and Google review links
- [ ] Confirm full weekly hours (currently just "closes 9:30 PM" from Google)
- [ ] Get written OK to use real photos, then swap Gallery.jsx placeholders

## Reusing this as a template for the next salon

1. Copy this whole folder
2. Replace everything in `src/data/salonData.js`
3. Tweak the colors in `tailwind.config.js` to match the new salon
4. Swap Gallery.jsx placeholder tiles for real photos
