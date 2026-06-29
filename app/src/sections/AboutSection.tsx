import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const children = contentRef.current?.querySelectorAll('.animate-item');
      if (children) {
        gsap.fromTo(children,
          { y: 30, opacity: 0 },
          {
            y: 0, opacity: 1, stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              end: 'top 40%',
              scrub: 0.5,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-flowing bg-nm-red py-16 lg:py-24">
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="animate-item font-display text-[clamp(32px,3.5vw,52px)] text-white font-semibold mb-2">
          About Us
        </h2>
        <p className="animate-item font-display text-lg text-white/80 mb-8">
          Who we are and What we do?
        </p>
        <p className="animate-item text-white/85 text-[clamp(14px,1.1vw,17px)] leading-relaxed">
          <strong className="text-white">Namaste Mandarin</strong> is a Chinese language training institute. 
          We are committed towards promoting Mandarin among the student community & working professionals. 
          We have strong experience in teaching children, coaching working professionals & in content 
          development for virtual training programs
        </p>
        <div className="animate-item mt-4">
          <Link to="/about-us" className="text-white/70 text-sm hover:text-white hover:underline transition-colors">
            Read more
          </Link>
        </div>
      </div>
    </section>
  );
}
