import { brand } from "../data/salonData";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";

export default function Visit() {
  return (
    <section id="visit" className="py-24 px-6 bg-surface">
      <div className="max-w-2xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3">
          Find Us
        </p>
        <h2 className="font-display text-4xl text-cream mb-10">Visit Us</h2>

        <div className="nameplate rounded-lg px-8 py-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <FaMapMarkerAlt className="text-gold" />
            <p className="text-cream/80">{brand.address}</p>
          </div>
          <div className="mt-6 border-t border-gold/20 pt-6">
            <h3 className="text-gold text-lg mb-4">
              Working Hours
            </h3>

            <div className="max-w-md mx-auto space-y-2">
              {brand.weeklyHours.map((item) => (
                <div
                  key={item.day}
                  className="flex justify-between text-sm"
                >
                  <span className="text-cream/80">
                    {item.day}
                  </span>

                  <span className="text-cream/60">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 mt-6 mb-6">
            <FaPhoneAlt className="text-gold" />
            <p className="text-cream/80">{brand.phoneDisplay}</p>
          </div>
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
