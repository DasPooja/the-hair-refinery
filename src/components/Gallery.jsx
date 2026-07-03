// Salon gallery with salon-specific images
const placeholders = [
  { label: "Interior", imageUrl: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f" },
  { label: "Cutting Station", imageUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035" },
  { label: "Colour Bar", imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e" },
  { label: "Lounge", imageUrl: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6" },
  { label: "Grooming", imageUrl: "https://images.unsplash.com/photo-1621605815971-fbc98d665033" },
  { label: "Bridal Look", imageUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1" },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((tile) => (
            <div
              key={tile.label}
              className="relative aspect-square rounded-md overflow-hidden border border-gold/10 group"
            >
              <img
                src={tile.imageUrl}
                alt={tile.label}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
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
