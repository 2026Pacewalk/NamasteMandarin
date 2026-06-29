import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const audiences = [
  {
    title: 'Children / Students',
    description: 'Chinese is the fastest growing Foreign Language being taught at schools in the west, US in particular. Knowing Mandarin, would be a global skill set which expands academic opportunities and cultural understanding for young learners.',
    image: '/assets/ss.png',
    alt: 'Children and Students',
  },
  {
    title: 'Working Professionals',
    description: 'With increasing business ties, economic investment between India-China & growing job prospects (in China & with Chinese based companies), Mandarin is becoming an essential skill for career advancement.',
    image: '/assets/Working-professionals-1.png',
    alt: 'Working Professionals',
  },
  {
    title: 'Business Persons',
    description: 'For businessmen & business woman, who are engaged in trade with China, knowing Mandarin is of enormous importance. Being able to converse in the same language & understanding the culture can make or break deals.',
    image: '/assets/business-1.png',
    alt: 'Business Persons',
  },
  {
    title: 'As a hobby',
    description: '"A hobby a day, keeps the doldrums away" \u2013 Phyllis Mc Ginley. Learning a foreign language can be cultivated over a period of time as a hobby. It opens up a window into a new world of culture, history and connections.',
    image: '/assets/hobby.png',
    alt: 'As a hobby',
  },
];

export default function WhoShouldLearn() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 75%', end: 'top 55%', scrub: 0.5 },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.audience-card');
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(card,
            { y: '8vh', opacity: 0 },
            {
              y: 0, opacity: 1,
              scrollTrigger: { trigger: card, start: 'top 80%', end: 'top 55%', scrub: 0.5 },
            }
          );
        });
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about-mandarin" className="section-flowing bg-ivory py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <SectionHeading kicker="Is It For You?" title="Who Should Learn Mandarin?" />
        </div>

        {/* Cards Grid - 2x2 */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, i) => (
            <div
              key={i}
              className="audience-card card-premium p-6 flex gap-5"
            >
              <div className="w-24 h-24 flex-shrink-0 flex items-center justify-center bg-nm-red/5 rounded-2xl ring-1 ring-nm-red/10">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-body text-lg text-nm-black font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-nm-black/65 text-sm leading-relaxed mb-3 line-clamp-3">
                  {item.description}
                </p>
                <Link
                  to="/who-should-learn-mandarin"
                  className="text-nm-red text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
