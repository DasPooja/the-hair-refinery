import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Visit from "./components/Visit";
import { CTABanner, Footer } from "./components/CTAFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Gallery />
      <Visit />
      <CTABanner />
      <Footer />
    </div>
  );
}
