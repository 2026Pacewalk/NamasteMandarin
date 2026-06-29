import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardARef = useRef<HTMLDivElement>(null);
  const cardBRef = useRef<HTMLDivElement>(null);
  const cardCRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // ENTRANCE (0-30%): collage fly-in (mirrored from hero)
      scrollTl.fromTo(cardARef.current,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0
      );
      scrollTl.fromTo(cardBRef.current,
        { y: '-40vh', opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.05
      );
      scrollTl.fromTo(cardCRef.current,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, ease: 'none' },
        0.08
      );
      scrollTl.fromTo(ctaRef.current,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, ease: 'none' },
        0.12
      );

      // SETTLE (30-70%): hold

      // EXIT (70-100%): fade only
      scrollTl.fromTo(cardARef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.70
      );
      scrollTl.fromTo(cardBRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.70
      );
      scrollTl.fromTo(cardCRef.current,
        { opacity: 1 },
        { opacity: 0, ease: 'power2.in' },
        0.70
      );
      scrollTl.fromTo(ctaRef.current,
        { y: 0, opacity: 1 },
        { y: '-4vh', opacity: 0, ease: 'power2.in' },
        0.70
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-pinned bg-nm-red star-bg">
      {/* Card A - Left portrait */}
      <div
        ref={cardARef}
        className="nm-card absolute left-[6vw] top-[16vh] w-[28vw] h-[68vh] will-change-transform"
      >
        <img
          src="/assets/asset_1.jpg"
          alt="Child learning calligraphy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Card B - Top wide */}
      <div
        ref={cardBRef}
        className="nm-card absolute left-[36vw] top-[10vh] w-[58vw] h-[28vh] will-change-transform z-10"
      >
        <img
          src="/assets/asset_2.jpg"
          alt="Certificate ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Card C - Bottom right */}
      <div
        ref={cardCRef}
        className="nm-card absolute left-[36vw] top-[42vh] w-[58vw] h-[48vh] will-change-transform"
      >
        <img
          src="/assets/asset_7.jpg"
          alt="Mandarin class"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* CTA block centered over Card C */}
      <div
        ref={ctaRef}
        className="absolute left-1/2 top-[58vh] -translate-x-1/2 text-center z-20 will-change-transform"
      >
        <h2 className="font-display text-[clamp(32px,3.8vw,58px)] text-white font-semibold mb-3">
          Start Your Mandarin Journey
        </h2>
        <p className="text-white/80 text-[clamp(14px,1.1vw,17px)] max-w-lg mx-auto mb-6 leading-relaxed">
          Book a free trial. Ask about batches, fees, and corporate packages.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-3">
          <a
            href="https://wa.me/+919880687766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle size={16} />
            Book a Free Trial
          </a>
          <a
            href="https://wa.me/+919880687766"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <ArrowRight size={16} />
            Chat on WhatsApp
          </a>
        </div>
        <p className="text-white/50 text-xs">Reply within 24 hours.</p>
      </div>
    </section>
  );
}
