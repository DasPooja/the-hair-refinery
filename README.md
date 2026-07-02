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

## Where everything lives

- **`src/data/salonData.js`** — ALL content. Edit this one file to update
  text, services, contact info.
- **`src/components/`** — one file per section. Plain JSX, `useState` only
  for the services tab switcher.
- **`src/components/Gallery.jsx`** — placeholder tiles, not real photos. Swap in real photos once have permission.
- **`tailwind.config.js`** — brand colors (`charcoal`, `surface`, `gold`,
  `teal`, `tealBright`, `cream`, `neon`) and fonts (Space Grotesk for
  headings — a nod to the "Refinery" industrial name — Inter for body).
- **`src/index.css`** — font imports + the `.nameplate` and `.neon-glow`
  classes. `.nameplate` gives cards a small-rivet, brushed-metal look,
  echoing their real gold-on-black nameplate signage — this site's
  signature visual detail (deliberately different from the Toni & Guy
  build's "ticket" motif, so the two don't look like the same template).

