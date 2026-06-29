import PageHero from '../components/PageHero';

export default function AboutUsPage() {
  return (
    <>
      <PageHero title="About Us" image="/assets/slider2.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(26px,3vw,40px)] text-nm-black mb-10">
            Who we are and What we do?
          </h2>

          <div className="space-y-6 text-nm-black/80 text-base lg:text-lg leading-relaxed">
            <p>
              <strong className="text-nm-black">Namaste Mandarin</strong> is a Chinese language
              training institute. We are committed towards promoting Mandarin among the student
              community &amp; working professionals. We have strong experience in teaching children,
              coaching working professionals &amp; in content development for virtual training
              programs.
            </p>
            <p>
              <strong className="text-nm-black">Our Mission</strong> is to teach Chinese language
              through easy and simple methods yet cover all important aspects of the language and to
              provide high quality Chinese language courses to non-native speakers.
            </p>
            <p>
              <strong className="text-nm-black">Our Vision</strong> is to reach majority of people
              who are interested in learning Chinese language through modern educational
              technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
