import { useState } from "react";
import { serviceCategories, whatsappBookingUrl } from "../data/salonData";

export default function Services() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((c) => c.id === activeId);

  return (
    <section id="services" className="py-24 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs text-teal mb-3 text-center">
          What We Offer
        </p>
        <h2 className="font-display text-4xl text-cream text-center mb-12">
          Services
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeId === cat.id
                  ? "bg-gold text-charcoal border-gold"
                  : "border-cream/20 text-cream/70 hover:border-teal hover:text-teal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {active.items.map((item) => (
            <a
              key={item}
              href={whatsappBookingUrl(`Hi! I'd like to book: ${item}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="nameplate rounded-md px-6 py-4 flex items-center justify-between hover:border-teal/60 transition-colors"
            >
              <span className="text-cream">{item}</span>
              <span className="text-teal text-xs uppercase tracking-widest">Book</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
