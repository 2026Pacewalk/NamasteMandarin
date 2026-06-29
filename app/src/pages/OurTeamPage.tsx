import PageHero from '../components/PageHero';

export default function OurTeamPage() {
  return (
    <>
      <PageHero title="Our Team" image="/assets/why-learn-chinese-stimulates-brain-function.png" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Sonia Ghosh */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img
                src="/assets/sonia.jpg"
                alt="Sonia Ghosh"
                className="w-full rounded-2xl shadow-sm"
              />
              <h2 className="font-body text-xl text-nm-black font-semibold mt-5">Sonia Ghosh</h2>
              <p className="text-nm-red text-sm font-medium mt-1">Founding Member &amp; Instructor</p>
            </div>
            <div className="md:col-span-2 space-y-4 text-nm-black/75 text-base leading-relaxed">
              <blockquote className="border-l-4 border-nm-red pl-5 italic text-nm-black/80">
                “With increasing academic interests, business ties &amp; job prospects in China &amp;
                with Chinese based companies, Mandarin language is poised to become one of the most
                sought-after foreign languages in the global arena. I am passionate about teaching
                Mandarin language to students &amp; working professionals, for helping them in
                enhancing their global skill-set” <span className="not-italic font-medium">- Sonia</span>
              </blockquote>
              <p>
                Sonia is one of the founding members of Namaste Mandarin.{' '}
                <strong className="text-nm-black">Exposure to China:</strong> She has lived in China
                for over three years &amp; has learned Mandarin from native Chinese teachers.
              </p>
              <p>
                <strong className="text-nm-black">Credentials:</strong> Chinese language
                certification program from iMandarin (a renowned Chinese language training institute,
                with 20 campuses across China). Advanced program of Chinese language from renowned
                university “East China Normal University”. HSK certified (HSK is a Chinese proficiency
                test which is conducted by Confucius Institute headquarters (Hanban) Beijing, China).
              </p>
              <p>
                Her stay in China has given her first hand experience of Chinese culture &amp; exposed
                her to the colloquial aspect of Mandarin language. She also holds a Masters degree in
                Pharmaceutics from Manipal University &amp; has worked in MNC Pharmaceutical R&amp;D
                and Clinical Research Industry for 6 years.
              </p>
            </div>
          </div>

          {/* Course Content Advisor */}
          <div className="mt-16 pt-12 border-t border-gray-100">
            <h2 className="font-display text-[clamp(24px,2.6vw,36px)] text-nm-black font-semibold mb-6 text-center">
              Course Content Advisor
            </h2>
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="font-body text-lg text-nm-black font-semibold text-center">
                Ms. Feng Yue <span className="text-nm-red">(冯玥)</span>
              </h3>
              <p className="text-nm-black/75 text-base leading-relaxed mt-4">
                She is a native Chinese speaker and certified as “Senior Chinese Language Teacher” by
                International Profession Certification Association. She brings with her experience of
                training many foreign exchange program students in Chinese Language. She is based in
                China &amp; has several years of experience in teaching Mandarin language &amp; Chinese
                culture to expatriates living in China. She has expertise in coaching students for HSK
                exams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
