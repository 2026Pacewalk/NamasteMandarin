import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useContent } from '../lib/content';

const DEFAULT_HERO = ['/assets/banner-home.jpg'];

export default function HeroSection() {
  const content = useContent();
  const heroImages =
    content?.settings?.hero_banners?.length ? content.settings.hero_banners : DEFAULT_HERO;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setCurrent((c) => (c < heroImages.length ? c : 0));
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const next = () => setCurrent((c) => (c + 1) % heroImages.length);
  const prev = () => setCurrent((c) => (c - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative w-full aspect-[16/5] overflow-hidden">
      {/* Images */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${
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

      {/* Cinematic gradient scrim for depth + control legibility */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/45 via-transparent to-black/15" />
      <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-nm-red/30 to-transparent" />

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
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === current ? 'w-7 bg-nm-gold' : 'w-2.5 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
