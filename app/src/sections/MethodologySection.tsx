import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const methods = [
  {
    title: 'Pronunciation',
    desc: 'As the instructor has learned Mandarin while living in China, lot of emphasis goes in ensuring the right pronunciation is mastered by the student.',
  },
  {
    title: 'Pinyin',
    desc: 'Teaching is done through English alphabets, which helps in simplication of a complex language like Mandarin.',
  },
  {
    title: 'Handouts & Study materials',
    desc: 'Serves as revision/referral notes for the modules taught.',
  },
  {
    title: 'Videos',
    desc: 'To make learning fun & more engaging.',
  },
  {
    title: 'Chinese Culture',
    desc: 'Providing valuable insights about Chinese culture & traditions.',
  },
  {
    title: 'HSK Exam',
    desc: 'Specific guidance to prepare for HSK exam (Chinese language proficiency test for foreigners).',
  },
];

export default function MethodologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current,
        { x: '-4vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 40%', scrub: 0.5 },
        }
      );
      gsap.fromTo(textRef.current,
        { x: '4vw', opacity: 0 },
        {
          x: 0, opacity: 1,
          scrollTrigger: { trigger: section, start: 'top 70%', end: 'top 40%', scrub: 0.5 },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="methodology" className="section-flowing bg-white py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="will-change-transform">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/assets/Teaching-Methodology.png"
                alt="Teaching Methodology"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div ref={textRef} className="will-change-transform">
            <h2 className="font-display text-[clamp(28px,3.2vw,48px)] text-nm-black font-semibold mb-6">
              Teaching Methodology
            </h2>

            <div className="space-y-4">
              {methods.map((method, i) => (
                <div key={i}>
                  <span className="text-nm-red font-semibold text-sm">
                    {method.title}:
                  </span>{' '}
                  <span className="text-nm-black/70 text-sm leading-relaxed">
                    {method.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
