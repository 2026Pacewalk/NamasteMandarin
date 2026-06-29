import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useContent } from '../lib/content';

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_INTRO =
  'Namaste Mandarin is a Chinese language training institute. We are committed towards promoting Mandarin among the student community & working professionals. We have strong experience in teaching children, coaching working professionals & in content development for virtual training programs.';

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const content = useContent();
  const intro = content?.settings?.about?.intro || DEFAULT_INTRO;

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
    <section ref={sectionRef} id="about" className="section-flowing bg-red-rich star-bg py-20 lg:py-28">
      <div ref={contentRef} className="max-w-3xl mx-auto px-6 text-center">
        <span className="animate-item kicker text-nm-gold-light mb-5">About Us</span>
        <h2 className="animate-item font-display text-[clamp(32px,3.6vw,52px)] text-white font-semibold">
          Who we are and What we do?
        </h2>
        <div className="animate-item gold-rule mx-auto mt-6 mb-8" />
        <p className="animate-item text-white/85 text-[clamp(15px,1.15vw,18px)] leading-relaxed">
          {intro}
        </p>
        <div className="animate-item mt-8">
          <Link to="/about-us" className="btn-gold-grad">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
