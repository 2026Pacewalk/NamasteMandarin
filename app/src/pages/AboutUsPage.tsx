import PageHero from '../components/PageHero';
import { useContent } from '../lib/content';

const DEFAULT_ABOUT = {
  intro:
    'Namaste Mandarin is a premier Chinese language training institute dedicated to promoting Mandarin among students, working professionals, entrepreneurs, and corporate teams. With extensive experience in teaching children, mentoring working professionals, and training business leaders, we design customized learning programs that cater to different goals—whether it\'s academic excellence, career growth, business communication, travel, or cultural understanding.\n\nBeyond language training, we also specialize in developing high-quality content for virtual learning programs, ensuring interactive and effective learning experiences. At Namaste Mandarin, we believe that language learning goes beyond textbooks, which is why we emphasize real-world communication, cultural immersion, and practical application in every course.',
  mission:
    'Our Mission is to teach Chinese language through easy and simple methods yet cover all important aspects of the language and to provide high quality Chinese language courses to non-native speakers.',
  vision:
    'Our Vision is to reach majority of people who are interested in learning Chinese language through modern educational technologies.',
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
            <p>{about.mission}</p>
            <p>{about.vision}</p>
          </div>
        </div>
      </section>
    </>
  );
}
