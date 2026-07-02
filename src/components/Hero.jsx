import { brand, whatsappBookingUrl } from "../data/salonData";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Ambient brushed-metal texture lines, subtle, decorative only */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.05]"
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={i}
            x1={i * 70}
            y1="0"
            x2={i * 70}
            y2="800"
            stroke="#C9A227"
            strokeWidth="1"
          />
        ))}
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
        <div className="nameplate w-24 h-24 rounded-lg flex items-center justify-center mb-8">
          <span className="font-display text-gold text-2xl">HR</span>
        </div>

        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-4">
          {brand.category} · {brand.location}
        </p>

        <h1 className="font-display text-5xl sm:text-6xl leading-tight text-cream mb-6">
          Refined. <span className="text-neon neon-glow">Reimagined.</span>
        </h1>

        <p className="text-cream/70 max-w-xl mb-8">
          Precision cuts, colour, and grooming for men and women — in a
          space built to feel calm, clean, and unhurried.
        </p>

        {/* Rating "nameplate" chip — the signature motif */}
        <div className="nameplate rounded-md px-6 py-3 mb-10 inline-flex items-center gap-3">
          <span className="text-gold font-display text-xl">{brand.rating}★</span>
          <span className="w-px h-5 bg-gold/30" />
          <span className="text-cream/80 text-sm">
            {brand.reviewCount} Google reviews
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={whatsappBookingUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal text-charcoal font-semibold px-8 py-3.5 rounded-full hover:bg-tealBright transition-colors"
          >
            Book on WhatsApp
          </a>
          <a
            href="#services"
            className="border border-cream/30 text-cream px-8 py-3.5 rounded-full hover:border-gold hover:text-gold transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
