import { whatsappBookingUrl } from "../data/salonData";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-charcoal/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="nameplate w-10 h-10 rounded-md flex items-center justify-center font-display text-gold text-xs">
            HR
          </span>
          <span className="font-display text-cream text-lg tracking-wide hidden sm:block">
            Hair Refinery
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm uppercase tracking-widest text-cream/70">
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#visit" className="hover:text-gold transition-colors">Visit</a>
        </nav>

        <a
          href={whatsappBookingUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-teal text-charcoal font-body font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-tealBright transition-colors"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
