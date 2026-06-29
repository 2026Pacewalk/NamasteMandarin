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
    <section ref={sectionRef} id="methodology" className="section-flowing bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Image */}
          <div ref={imageRef} className="will-change-transform">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,11,11,0.45)]">
              <img
                src="/assets/Teaching-Methodology.png"
                alt="Teaching Methodology"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl" />
            </div>
          </div>

          {/* Right - Text */}
          <div ref={textRef} className="will-change-transform">
            <span className="kicker kicker-start mb-4">How We Teach</span>
            <h2 className="font-display text-[clamp(28px,3.3vw,48px)] text-nm-black font-semibold">
              Teaching Methodology
            </h2>
            <div className="gold-rule mt-5 mb-8" />

            <div className="space-y-5">
              {methods.map((method, i) => (
                <div key={i} className="flex gap-4">
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-nm-gold ring-4 ring-nm-gold/15" />
                  <p className="text-sm leading-relaxed">
                    <span className="text-nm-red font-semibold">{method.title}:</span>{' '}
                    <span className="text-nm-black/70">{method.desc}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
