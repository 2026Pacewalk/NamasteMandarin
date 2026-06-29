import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const articles = [
  {
    title: 'IIT Ropar to start certificate course',
    excerpt: 'IIT Ropar is starting a certificate course in Mandarin. It has also opened a Taiwan Education Centre on its campus to facilitate cooperation among the higher educational institutions of Taiwan and India...',
    image: '/assets/103874071-3.jpg',
    link: 'https://timesofindia.indiatimes.com/india/iit-ropar-to-start-certificate-course-in-mandarin/articleshow/86571236.cms',
  },
  {
    title: 'A new lingo: Students are taking to Chinese',
    excerpt: 'By Esita Rani Mandal BCU To hire native teachers, as foreign languages open doors to better job prospects, scholarships, and cultural enrichment among students...',
    image: '/assets/103874071.jpg',
    link: 'https://bangaloremirror.indiatimes.com/bangalore/others/a-new-lingo-students-are-taking-to-chinese/articleshow/103874055.cms',
  },
  {
    title: 'Mandarin lessons for Army troops along China border',
    excerpt: 'The Army utilizes officers trained in Chinese language as interpreters to break the language barrier. GUWAHATI: In a first such move, Army troops deployed along the entire...',
    image: '/assets/103874071-2.jpg',
    link: 'https://timesofindia.indiatimes.com/city/guwahati/mandarin-lessons-for-army-troops-along-china-border/articleshow/99626978.cms',
  },
  {
    title: 'Why being bilingual is good for your brain | BBC Ideas',
    excerpt: 'What does bilingualism do to the brain? And are there benefits to being bilingual? Turns out there are lots of upsides...',
    image: '/assets/maxresdefault-1.jpg',
    link: 'https://www.youtube.com/watch?v=nzHY-muy2Mw',
  },
  {
    title: 'Sushma Swaraj: Need for Indians and Chinese to learn each other’s language',
    excerpt: 'I want to say that the way India and China’s relations are strengthening, trade is increasing, we are working together on international forums, it has become increasingly...',
    image: '/assets/Sushma-Swaraj-Need-for-Indians-and-Chinese.jpg',
    link: 'https://timesofindia.indiatimes.com/india/sushma-swaraj-need-for-indians-and-chinese-to-learn-each-others-language/articleshow/63877293.cms',
  },
];

export default function NewsSection({ limit }: { limit?: number }) {
  const visibleArticles = limit ? articles.slice(0, limit) : articles;
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
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

      const cards = cardsRef.current?.querySelectorAll('.news-card');
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
    <section ref={sectionRef} id="news" className="section-flowing bg-gray-50 py-16 lg:py-24">
      {/* Chinese watermark background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ctext x='10' y='100' font-size='80' fill='%23000'%3E\u6c49%3C/text%3E%3C/svg%3E")`,
          backgroundSize: '300px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-left font-display text-[clamp(28px,3.2vw,48px)] text-nm-black font-semibold mb-10 lg:mb-14"
        >
          News and Articles
        </h2>

        {/* Article Cards - 3 columns */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleArticles.map((article, i) => (
            <div key={i} className="news-card group">
              <div className="rounded-xl overflow-hidden mb-4 h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-body text-nm-red font-semibold text-base mb-3 leading-snug">
                {article.title}
              </h3>
              <p className="text-nm-black/65 text-sm leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-nm-red text-white text-sm font-medium px-5 py-2 rounded hover:bg-nm-red-dark transition-colors"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
