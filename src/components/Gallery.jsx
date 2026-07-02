// Placeholder gallery — swap `label`/`gradient` for real photos later,
// once you have the salon's OK to use their own images.
const placeholders = [
  { label: "Interior", seed: "hair-refinery-interior", },
  { label: "Cutting Station", seed: "hair-refinery-cutting" },
  { label: "Colour Bar", seed: "hair-refinery-colour" },
  { label: "Lounge", seed: "hair-refinery-lounge" },
  { label: "Grooming", seed: "hair-refinery-grooming" },
  { label: "Bridal Look", seed: "hair-refinery-bridal" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3 text-center">
          A Look Inside
        </p>
        <h2 className="font-display text-4xl text-cream text-center mb-4">
          Gallery
        </h2>
        {/* <p className="text-cream/50 text-center text-sm mb-12">
          Placeholder photos (via picsum.photos) — swap for real ones (with
          the salon's OK) in 
          <code className="text-gold">Gallery.jsx</code>
        </p> */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((tile) => (
            <div
              key={tile.seed}
              className="relative aspect-square rounded-md overflow-hidden border border-gold/10 group"
            >
              <img
                src={`https://picsum.photos/seed/${tile.seed}/600/600`}
                alt={tile.label}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300"
              />
                {/* Dark gradient so the label stays readable over any photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-cream/90 text-sm font-medium">
                    {tile.label}
                  </span>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
