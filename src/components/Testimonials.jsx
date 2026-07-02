import { brand, testimonials } from "../data/salonData";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 px-6 bg-surface">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3 text-center">
          Client Love
        </p>
        <h2 className="font-display text-4xl text-cream text-center mb-4">
          {brand.rating}★ from {brand.reviewCount} reviews
        </h2>
        <p className="text-cream/60 text-center mb-12">
          Real feedback from Google reviews
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="nameplate rounded-md p-6 flex flex-col">
              <span className="text-gold text-3xl font-display leading-none mb-3">
                &ldquo;
              </span>
              <p className="text-cream/80 text-sm flex-1 mb-4">{t.quote}</p>
              <p className="text-teal text-xs uppercase tracking-widest">
                {t.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
