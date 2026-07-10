import ContentPage from '../components/ContentPage';

export default function HSKExamPage() {
  return (
    <ContentPage
      title="HSK Exam"
      kicker="Chinese Proficiency Test"
      heading="HSK Exam Preparation & Guidance"
      paragraphs={[
        'The HSK (Hànyǔ Shuǐpíng Kǎoshì) is the official standardised test of Chinese language proficiency for non-native speakers, administered by the Confucius Institute Headquarters (Hanban), Beijing. It is recognised worldwide by universities, employers, and government bodies as proof of your Mandarin ability.',
        'The exam assesses your listening, reading, and writing skills across graded levels — from beginner to advanced. Achieving an HSK certification can open doors to scholarships, higher education in China, and career opportunities with Chinese companies across the globe.',
        'At Namaste Mandarin, we provide structured HSK exam preparation and guidance. Our courses are mapped to the HSK syllabus, helping you build the vocabulary, grammar, and test-taking strategies needed to clear each level with confidence.',
      ]}
      bullets={[
        'HSK Level 1–2 — Basic everyday communication and foundational vocabulary.',
        'HSK Level 3–4 — Intermediate fluency for work, travel, and daily life in Chinese.',
        'HSK Level 5–6 — Advanced proficiency for academic and professional environments.',
      ]}
    >
      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-red-rich star-bg p-8 lg:p-10 text-center">
        <h3 className="font-display text-2xl lg:text-3xl text-white font-semibold">
          Ready to take the HSK?
        </h3>
        <p className="text-white/75 text-sm lg:text-base mt-2 max-w-xl mx-auto">
          Contact Us today!!
        </p>
      </div>
    </ContentPage>
  );
}
