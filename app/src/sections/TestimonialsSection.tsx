import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "All my apprehension of undergoing a virtual class “via skype” and that too a foreign language class, was laid to rest. The module is very well conceived and the time for the course and each class was appropriate and a beginner like me was not rushed. Credit goes to Sonia, who not only has the knowledge but very good teaching skills. Appreciate the dedication shown and the immense patience. With good participation from the students side, this language can be learned without much fuss. I am happy I took the class with Sonia and also happy that I opted it via skype, saved me all the time trouble of commuting. This was just like physically attending any class and never felt like a virtual class.",
    name: "Suresh Kumar",
    role: "Partner – Encube Venture Partners LLP",
    img: "/assets/testimonial7.jpg",
  },
  {
    quote: "It has been an excellent experience learning from Sonia. Many may question about the effectiveness of online classes in learning a new language, but the method of connecting on Skype for the online video classes that Sonia conducts is extremely hassle free and very convenient. She uses very useful training material and a white board to explain grammar points. It’s as good as a classroom session with the added advantage of a 1:1 session with complete focus on you. Her teaching method is very systematic and she makes sure to go through most of the exercises with you during the classes. She also shares a lot of information on Chinese culture based on her experience of staying in the country for over 3 years. Looking forward for the next level course with Sonia.",
    name: "Sheetal V.Harne",
    role: "Solution Architect- Professional service, E2open",
    img: "/assets/testimonial5.jpg",
  },
  {
    quote: "I admire her as a very good teacher. I appreciate her for exhibiting a great professionalism and deeper understanding of the language and the process of teaching. In a very short time I could develop my fundamentals strong and exercise. She always encouraged me to understand the nuances through comparing my native languages and symbols. Her friendly, interpersonal savviness and greater paitence plays a bigger role in this whole process which benefits the students as well as professionals who are planning to move to China or for any other business development aspects with China. I am confident and would like to share is – Bangalore (as a strong business hub of india) needs a Mandarin teacher like you.",
    name: "Sachchidanand Hegde",
    role: "Design director | Class A – Great Wall Motors, Baoding Hebei",
    img: "/assets/testimonial6.jpg",
  },
  {
    quote: "She is very professional and methodical. For me it was a strange language but her modules made it easy to learn. Learning Chinese from Indian teacher always makes it easier. Very prompt in her class schedules and flexible too in case if we are not able to make it. I got through level 1 and now i am able to use it with my Taiwan colleagues. Most probably will take up level 2 soon.",
    name: "Ganesh H R",
    role: "General Manager Jindo Chemical Solutions Pvt Ltd (Jintex Group – Taiwan)",
    img: "/assets/testimonial9.jpg",
  },
  {
    quote: "Language learning is time consuming process. Due to various reasons/obstacles, learner’s interest will be dropped during course of action and he/she will give up learning. Sonia Mam ensures that your motivation level and spirit are well maintained throughout the course duration and beyond that. She is excellent on that front. One on one session are very helpful, flexible and well-tuned and aligned to individual need. I am very lucky to get a Tutor like her. She gave lot of references for self-learning and enhancing the skill set. Skype class conducted by her was highly effective and very useful, I felt like being in class room. At beginning of the training program, course content, timing and method were mutually agreed & all the expectation were met and at many times she has given logical reasoning for the grammar & word formation methods which was out of course material. It was very useful for me. At the End, with first level learning, now I am able to start conversing with my customer contacts and that makes them happier to interact with me. & also this learning gave me confident to learn on myself with to improve further on language skill. Frequent revisions on every alternative class helped me to make foundation strong & quickly correct my learning methods. & at last, I would like to say thanks for her coaching and excellent motivation & also very big thanks to her family members for their excellent support. Over all my experience is very good and positive.",
    name: "Saravanan K",
    role: "Delivery Head | KPIT Technologies Ltd.",
    img: "/assets/testimonial8.jpg",
  },
  {
    quote: "When I joined the class I was not sure if I will ever learn Chinese and how many lessons I will be able to complete but with the great support and efforts from Sonia I could finish the complete book and really feel happy that I learnt Chinese. The course structure was very planned and organised, she even taught me many things out of the book which are related to daily life and Chinese culture. All the course material was provided to me. She explained everything with the help of examples which I could easily co relate and remember. She is a very patient teacher, some times I will not remember the words or previous lessons but she will be always smiling and will help me to remember those words with the examples she had given. I really felt motivated during the classes and that is the reason I could learn Chinese in very short span of time. Proper explanation of the written and listening exercises was given and if needed she will re-teach also. In short I will say Soniya is a very cooperative and dedicated teacher, her teaching style is very engaging, she has complete knowledge of the curriculum and has a passion for her subject which in-turn motivates students to learn more and more.",
    name: "Nupur Bhardwaj",
    role: "IT Analyst – TCS Limited, Shanghai",
    img: "/assets/testimonial1.jpg",
  },
  {
    quote: "Mandarin is one of the most difficult languages to understand & learn and teaching it to kids of 5-8 years of age, can be even more challenging. This is where Ms Sonia Ghosh has made a great difference to our kids as a teacher. Her teaching methodology is very practical & interesting. Kids have been introduced to very basic, frequently used words – with picture of each word/object – and this helps them to immediately relate the mandarin word with the picture. Introduction to commonly used greetings, phrases, colours, numbers, relations etc have been done in this manner & kids have picked these words immediately. The supplementary notes are equally easy to understand & help in quick revision. The most interesting part is the teaching sessions are not about studies – but it has been fun learning for kids. Kids are encouraged to speak to each other in Mandarin, practice pronunciation – and enjoy while doing so. We often find, our kid coming back home – and challenging us to tell us the meaning of several mandarin words/phrases, numbers. This itself is so entertaining & shows the kind of fun the kids are having while learning mandarin. As the session progress, it would be very interesting to see the kids getting a grip over the language – and eventually being able to communicate basic phrases in mandarin. In the current era of knowing mandarin language, this could be immense benefit to kids – and we would like to thank Ms Sonia Ghosh for this initiative. Thank you.",
    name: "Mayur",
    role: "Director, Product Management, Global EM – Stanley Black & Decker",
    img: "/assets/testimonial3.jpg",
  },
  {
    quote: "Sonia is one of the best teachers I have seen so far. Teaching Mandarin to 5 years old kids is not an easy job. She demonstrates amazing patience and creativity towards her teaching. Kids are always excited to attend her class. She gives equal attention on each and every kid and makes sure that they are setup for success. To make sure that kids are progressing well, she sets checkpoint with parents. Very proactive in giving and seeking feedback. She has been taking YCT classes for my kids since more than an year now. In a batch of 5 kids all of them qualified Level One. Happily they are preparing for YCT Levle II. Really lucky to find her. We wish her all the best.",
    name: "Manishree",
    role: "Senior Manager Technology | SapientRazorfish.",
    img: "",
  },
  {
    quote: "Mandarin is one of the toughest language to learn and speak. But she taught me in such a way that I got interested and learning became easier. She is very flexible and friendly. Though I had very short span of time, she taught me clearly and completed successfully. Now she is one of my best friends. I recommend Sonia for everyone who wants to learn mandarin in an easy way.",
    name: "Kaviangkanni Giridharan",
    role: "Managing Director, Yaadhum Consulting",
    img: "",
  },
  {
    quote: "She is an excellent teacher, has a great command on the language. Was able to explain concepts well. Also encourages to converse in mandarin which is always a good thing. Would strongly recommend!!",
    name: "Alok Arora",
    role: "Director - Insperia Education Pvt. Ltd.",
    img: "/assets/testimonial2.jpg",
  },
  {
    quote: "I have been Sonia’s colleague for a while now. She was posted in Shanghai and whenever I visited Shanghai, Sonia always helped me while interacting with my Chinese colleagues. She is very cordial person and am sure her classes are very interesting. I recommend her to other students on urbanpro.com",
    name: "Dr. Ganesh",
    role: "",
    img: "/assets/testimonial4.jpg",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0, opacity: 1,
          scrollTrigger: { trigger: titleRef.current, start: 'top 75%', end: 'top 55%', scrub: 0.5 },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const t = testimonials[current];

  return (
    <section ref={sectionRef} id="testimonials" className="section-flowing bg-nm-red star-bg py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-10">
          <h2 className="font-display text-[clamp(32px,3.5vw,52px)] text-white font-semibold">
            Testimonials
          </h2>
        </div>

        {/* Testimonial */}
        <div className="text-center min-h-[300px] flex flex-col items-center justify-center">
          {t.img && (
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/40 mb-5"
            />
          )}
          <p className="text-white/90 text-[clamp(14px,1.1vw,16px)] leading-relaxed mb-8">
            {t.quote}
          </p>
          <div>
            <p className="font-body text-white font-semibold text-base">
              {t.name}
            </p>
            {t.role && (
              <p className="text-white/60 text-sm mt-1">
                {t.role}
              </p>
            )}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
