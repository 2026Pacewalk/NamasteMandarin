import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "All my apprehension of undergoing a virtual class “via skype” and that too a foreign language class, was laid to rest. The module is very well conceived and the time for the course and each class was appropriate and a beginner like me was not rushed. Credit goes to Sonia, who not only has the knowledge but very good teaching skills. Appreciate the dedication shown and the immense patience. I am happy I took the class with Sonia and also happy that I opted it via skype, saved me all the time trouble of commuting. This was just like physically attending any class and never felt like a virtual class.",
    name: "Suresh Kumar",
    role: "Partner – Encube Venture Partners LLP",
    img: "/assets/testimonial7.jpg",
  },
  {
    quote: "It has been an excellent experience learning from Sonia. The method of connecting on Skype for the online video classes is extremely hassle free and very convenient. She uses very useful training material and a white board to explain grammar points. It’s as good as a classroom session with the added advantage of a 1:1 session. She also shares a lot of information on Chinese culture based on her experience of staying in the country for over 3 years. Looking forward for the next level course with Sonia.",
    name: "Sheetal V.Harne",
    role: "Solution Architect – E2open",
    img: "/assets/testimonial5.jpg",
  },
  {
    quote: "I admire her as a very good teacher. I appreciate her for exhibiting great professionalism and a deeper understanding of the language and the process of teaching. In a very short time I could develop my fundamentals strong. Her friendly, interpersonal savviness and greater patience plays a bigger role in this whole process. Bangalore needs a Mandarin teacher like you.",
    name: "Sachchidanand Hegde",
    role: "Design Director | Great Wall Motors",
    img: "/assets/testimonial6.jpg",
  },
  {
    quote: "She is very professional and methodical. For me it was a strange language but her modules made it easy to learn. Very prompt in her class schedules and flexible too in case we are not able to make it. I got through level 1 and now I am able to use it with my Taiwan colleagues. Most probably will take up level 2 soon.",
    name: "Ganesh H R",
    role: "General Manager, Jintex Group – Taiwan",
    img: "/assets/testimonial9.jpg",
  },
  {
    quote: "Sonia Mam ensures that your motivation level and spirit are well maintained throughout the course duration and beyond. One-on-one sessions are very helpful, flexible and well-tuned to individual need. I am very lucky to get a tutor like her. Skype class conducted by her was highly effective and very useful — I felt like being in a class room.",
    name: "Saravanan K",
    role: "Delivery Head | KPIT Technologies Ltd.",
    img: "/assets/testimonial8.jpg",
  },
  {
    quote: "With great support and efforts from Sonia I could finish the complete book and really feel happy that I learnt Chinese. The course structure was very planned and organised. She is a very patient teacher and explains everything with examples I could easily relate to. A very cooperative and dedicated teacher whose engaging style motivates students to learn more and more.",
    name: "Nupur Bhardwaj",
    role: "IT Analyst – TCS Limited, Shanghai",
    img: "/assets/testimonial1.jpg",
  },
  {
    quote: "Mandarin is one of the most difficult languages and teaching it to kids of 5–8 years can be even more challenging. This is where Ms Sonia Ghosh has made a great difference. Her teaching methodology is very practical & interesting — the sessions are fun learning for kids. Our kid comes back home challenging us with mandarin words & numbers. Thank you, Ms Sonia Ghosh.",
    name: "Mayur",
    role: "Director – Stanley Black & Decker",
    img: "/assets/testimonial3.jpg",
  },
  {
    quote: "Sonia is one of the best teachers I have seen so far. Teaching Mandarin to 5 year old kids is not an easy job. She demonstrates amazing patience and creativity. Kids are always excited to attend her class. In a batch of 5 kids all of them qualified Level One and are happily preparing for YCT Level II. Really lucky to find her.",
    name: "Manishree",
    role: "Senior Manager Technology | SapientRazorfish",
    img: "",
  },
  {
    quote: "Mandarin is one of the toughest languages to learn and speak. But she taught me in such a way that I got interested and learning became easier. She is very flexible and friendly. Though I had a very short span of time, she taught me clearly and I completed successfully. I recommend Sonia for everyone who wants to learn mandarin in an easy way.",
    name: "Kaviangkanni Giridharan",
    role: "Managing Director, Yaadhum Consulting",
    img: "",
  },
  {
    quote: "She is an excellent teacher and has a great command of the language. Was able to explain concepts well. Also encourages you to converse in mandarin which is always a good thing. Would strongly recommend!!",
    name: "Alok Arora",
    role: "Director – Insperia Education Pvt. Ltd.",
    img: "/assets/testimonial2.jpg",
  },
  {
    quote: "I have been Sonia’s colleague for a while now. She was posted in Shanghai and whenever I visited, Sonia always helped me while interacting with my Chinese colleagues. She is a very cordial person and I am sure her classes are very interesting. I recommend her to other students.",
    name: "Dr. Ganesh",
    role: "Mandarin Learner",
    img: "/assets/testimonial4.jpg",
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function TestimonialsSection({ limit }: { limit?: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const items = limit ? testimonials.slice(0, limit) : testimonials;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%', end: 'top 55%', scrub: 0.5 },
        }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-flowing bg-red-rich star-bg py-20 lg:py-28"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div ref={titleRef} className="mb-12 lg:mb-16">
          <SectionHeading kicker="Kind Words" title="What Our Students Say" tone="dark" />
        </div>

        {/* Masonry wall of testimonial cards */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [&>*]:mb-6">
          {items.map((t, i) => (
            <figure
              key={i}
              className="break-inside-avoid bg-white rounded-2xl p-6 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-center justify-between mb-4">
                <Quote className="text-nm-gold" size={26} fill="currentColor" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="text-nm-gold" fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="text-nm-black/75 text-sm leading-relaxed">{t.quote}</blockquote>
              <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                {t.img ? (
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-nm-gold/40"
                  />
                ) : (
                  <span className="w-11 h-11 rounded-full bg-nm-red text-white flex items-center justify-center font-display font-semibold text-sm">
                    {initials(t.name)}
                  </span>
                )}
                <div>
                  <p className="font-body text-nm-black font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-nm-black/55 text-xs mt-0.5">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* View all — only on the home (limited) view */}
        {limit && (
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-gold-grad">
              View All Testimonials
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
