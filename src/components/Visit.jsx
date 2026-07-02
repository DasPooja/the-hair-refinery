import { brand } from "../data/salonData";

export default function Visit() {
  return (
    <section id="visit" className="py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Find Us
        </p>
        <h2 className="font-display text-4xl text-cream mb-10">Visit Us</h2>

        <div className="nameplate rounded-lg px-8 py-8">
          <p className="text-cream/80 mb-2">{brand.address}</p>
          <p className="text-cream/60 text-sm mb-1">{brand.hours}</p>
          <p className="text-cream/60 text-sm mb-6">{brand.phoneDisplay}</p>
          <a
            href={brand.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-gold text-gold px-6 py-2.5 rounded-full hover:bg-gold hover:text-charcoal transition-colors text-sm"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
