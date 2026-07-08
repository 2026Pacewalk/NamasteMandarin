import PageHero from '../components/PageHero';

export default function OurTeamPage() {
  return (
    <>
      <PageHero title="Our Team" banner="/assets/banner-our-team.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Sonia GuptaGhosh */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <img
                src="/assets/sonia.jpg"
                alt="Sonia GuptaGhosh"
                className="w-full rounded-2xl shadow-sm"
              />
              <h2 className="font-body text-xl text-nm-black font-semibold mt-5">Sonia GuptaGhosh</h2>
              <p className="text-nm-red text-sm font-medium mt-1">Founder, Namaste Mandarin</p>
            </div>
            <div className="md:col-span-2 space-y-4 text-nm-black/75 text-base leading-relaxed">
              <blockquote className="border-l-4 border-nm-red pl-5 italic text-nm-black/80">
                “With growing academic collaborations, expanding business ties, and increasing career
                opportunities involving China and Chinese companies, Mandarin has become one of the
                world’s most valuable foreign languages. My passion is to help students and
                professionals learn Mandarin with confidence, enabling them to build global skills and
                unlock new opportunities.”{' '}
                <span className="not-italic font-medium">— Sonia GuptaGhosh</span>
              </blockquote>
              <p>
                Sonia GuptaGhosh is the founder of{' '}
                <strong className="text-nm-black">Namaste Mandarin</strong>, a Chinese language
                training institute dedicated to making Mandarin learning practical, engaging, and
                accessible.
              </p>
              <p>
                Having lived in <strong className="text-nm-black">China for over three years</strong>,
                Sonia gained firsthand exposure to the country’s language, culture, and way of life
                while learning Mandarin from native Chinese teachers. This immersive experience has
                enabled her to teach not only textbook Mandarin but also the practical, conversational
                language used in everyday life.
              </p>

              <h3 className="font-display text-xl text-nm-black font-semibold pt-2">
                Qualifications &amp; Certifications
              </h3>
              <ul className="list-disc pl-5 space-y-2 marker:text-nm-red">
                <li>
                  Chinese Language Certification Program from{' '}
                  <strong className="text-nm-black">iMandarin</strong>, a renowned Chinese language
                  institute with multiple campuses across China.
                </li>
                <li>
                  Chinese Language Program from{' '}
                  <strong className="text-nm-black">East China Normal University</strong>, Shanghai.
                </li>
                <li>
                  <strong className="text-nm-black">HSK Level 4 Certified</strong> (Chinese
                  Proficiency Test).
                </li>
              </ul>
              <p>
                Before founding Namaste Mandarin, Sonia earned a{' '}
                <strong className="text-nm-black">
                  Master’s degree in Pharmaceutics from Manipal University
                </strong>{' '}
                and spent <strong className="text-nm-black">six years</strong> working in the{' '}
                <strong className="text-nm-black">
                  Pharmaceutical R&amp;D and Clinical Research industry
                </strong>{' '}
                with multinational organizations.
              </p>
              <p>
                Today, she combines her international experience, structured teaching approach, and
                passion for language education to help students, working professionals, entrepreneurs,
                and corporate teams achieve their Mandarin learning goals. Under her leadership,
                Namaste Mandarin has trained learners from diverse backgrounds, guided students toward
                HSK success, facilitated interactions with native Chinese speakers, and fostered a
                learning environment that extends well beyond traditional classroom teaching.
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
