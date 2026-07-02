import { brand, whatsappBookingUrl } from "../data/salonData";

export function CTABanner() {
  return (
    <section className="py-20 px-6 bg-teal text-center">
      <h2 className="font-display text-4xl text-charcoal mb-6">
        Ready for your next look?
      </h2>
      <a
        href={whatsappBookingUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-charcoal text-teal font-semibold px-8 py-3.5 rounded-full hover:bg-surface transition-colors"
      >
        Book on WhatsApp
      </a>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <span className="nameplate w-9 h-9 rounded-md flex items-center justify-center font-display text-gold text-xs">
            HR
          </span>
          <span className="font-display text-cream">{brand.name}</span>
        </div>

        <div className="flex gap-6 text-sm">
          <a
            href={brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors"
          >
            Instagram
          </a>
          <a
            href={brand.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors"
          >
            Facebook
          </a>
          <a
            href={brand.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/60 hover:text-gold transition-colors"
          >
            Leave a Review
          </a>
        </div>

        <p className="text-cream/40 text-xs">
          {brand.location}, Kerala
        </p>
      </div>
    </footer>
  );
}
