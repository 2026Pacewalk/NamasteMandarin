import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  '/assets/banner-2.jpg',
  '/assets/banner2.jpg',
  '/assets/banner1.jpg',
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((c) => (c + 1) % heroImages.length);
  const prev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full aspect-[1920/724] overflow-hidden">
      {/* Images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={img}
            alt="Namaste Mandarin"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white drop-shadow-lg transition-colors z-10"
      >
        <ChevronLeft size={40} strokeWidth={1.5} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/90 hover:text-white drop-shadow-lg transition-colors z-10"
      >
        <ChevronRight size={40} strokeWidth={1.5} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
