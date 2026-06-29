import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const courses = [
  { title: 'Young Learners/Students', image: '/assets/Young-Learners-Students.png', to: '/young-learners-students' },
  { title: 'Working Professionals', image: '/assets/Working-Professionals-1.jpg', to: '/working-professionals' },
  { title: 'Corporate Training', image: '/assets/Corporate-Training-2.jpg', to: '/corporate-training' },
  { title: 'Online Courses', image: '/assets/online-courses-2.jpg', to: 'http://courses.namastemandarin.com/' },
];

export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 75%', end: 'top 55%', scrub: 0.5 },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.course-card');
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(card,
            { y: '6vh', opacity: 0 },
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
    <section ref={sectionRef} id="courses" className="section-flowing bg-nm-red star-bg py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-center font-display text-[clamp(32px,3.5vw,52px)] text-white font-semibold mb-10 lg:mb-14"
        >
          Our Courses
        </h2>

        {/* Course Cards Grid - 2x2 */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => {
            const inner = (
              <>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                  <h3 className="font-body text-xl lg:text-2xl text-white font-medium mb-3">
                    {course.title}
                  </h3>
                  <span className="inline-block border border-white/50 text-white text-sm px-5 py-1.5 rounded-full hover:bg-white/10 transition-colors">
                    Read more
                  </span>
                </div>
              </>
            );
            const cls =
              'course-card group relative block rounded-2xl overflow-hidden cursor-pointer h-[280px] lg:h-[320px]';
            return course.to.startsWith('http') ? (
              <a key={i} href={course.to} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={i} to={course.to} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
