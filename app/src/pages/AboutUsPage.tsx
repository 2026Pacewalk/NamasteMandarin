import PageHero from '../components/PageHero';
import { useContent } from '../lib/content';

const DEFAULT_ABOUT = {
  intro:
    'Namaste Mandarin is a premier Chinese language training institute dedicated to promoting Mandarin among students, working professionals, entrepreneurs, and corporate teams. With extensive experience in teaching children, mentoring working professionals, and training business leaders, we design customized learning programs that cater to different goals—whether it\'s academic excellence, career growth, business communication, travel, or cultural understanding.\n\nBeyond language training, we also specialize in developing high-quality content for virtual learning programs, ensuring interactive and effective learning experiences. At Namaste Mandarin, we believe that language learning goes beyond textbooks, which is why we emphasize real-world communication, cultural immersion, and practical application in every course.',
  mission:
    'At Namaste Mandarin, our mission is to make Chinese language learning simple, engaging, and accessible through practical and effective teaching methods. We strive to provide high-quality Mandarin courses for non-native speakers, ensuring learners develop strong communication skills while gaining a deeper understanding of Chinese culture and real-world language use.',
  vision:
    'Our vision is to become a trusted and leading platform for Mandarin education, reaching learners across the globe through innovative teaching methodologies and modern educational technologies. We aspire to empower students, professionals, entrepreneurs, and organizations with the language skills and cultural confidence needed to thrive in an increasingly connected world.',
};

export default function AboutUsPage() {
  const content = useContent();
  const about = content?.settings?.about || DEFAULT_ABOUT;

  return (
    <>
      <PageHero title="About Us" image="/assets/slider2.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(26px,3vw,40px)] text-nm-black mb-10">
            Who we are and What we do?
          </h2>

          <div className="space-y-6 text-nm-black/80 text-base lg:text-lg leading-relaxed">
            {about.intro.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 text-left">
            <div className="card-premium p-7 lg:p-8">
              <h3 className="font-display text-2xl text-nm-black font-semibold">Our Mission</h3>
              <div className="gold-rule mt-3 mb-4" />
              <p className="text-nm-black/70 text-[15px] leading-relaxed">{about.mission}</p>
            </div>
            <div className="card-premium p-7 lg:p-8">
              <h3 className="font-display text-2xl text-nm-black font-semibold">Our Vision</h3>
              <div className="gold-rule mt-3 mb-4" />
              <p className="text-nm-black/70 text-[15px] leading-relaxed">{about.vision}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
