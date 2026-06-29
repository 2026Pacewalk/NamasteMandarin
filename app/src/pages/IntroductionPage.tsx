import PageHero from '../components/PageHero';

const blocks = [
  {
    title: 'A Tonal Language',
    body: 'The Chinese language is a tonal language. There are four tones: High & Leveling, Rising, Falling & Rising, and Falling.',
  },
  {
    title: 'Chinese Characters (Hànzì)',
    body: 'Unlike other languages, Mandarin doesn’t have alphabets; instead it has Chinese characters called “hànzì”. There is a Chinese character for each & every word, so we have an enormous number of Chinese characters.',
  },
  {
    title: 'Spoken and Written Chinese',
    body: 'You may think that it is “too hard” to learn Chinese. It is true that Mandarin Chinese is classified as one of the most difficult languages to learn, but that is mostly because of the writing system. The spoken language is comparatively easier than many European languages.',
  },
  {
    title: 'Pinyin (use of Latin alphabet)',
    body: 'Pinyin is a standardised official system which uses English alphabets to pronounce Chinese characters. It serves as a bridge for non-natives to understand the difference between spoken & written Chinese language.',
  },
];

export default function IntroductionPage() {
  return (
    <>
      <PageHero title="Introduction" image="/assets/chinese-language-1-1.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-[clamp(26px,3vw,40px)] text-nm-black font-semibold mb-6 text-center">
            About Mandarin
          </h2>
          <p className="text-nm-black/75 text-base lg:text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Mandarin is the most widely spoken language in the world with over 1.2 billion speakers.
            The Chinese language can be heard throughout the world — it is the official language of
            Mainland China, Taiwan &amp; one of the official languages of Singapore. It is one of the
            6 official languages of the United Nations. It is no wonder that millions of people are
            investing in learning this language!!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {blocks.map((b) => (
              <div key={b.title} className="bg-gray-50 rounded-2xl p-7 border border-gray-100">
                <h3 className="font-body text-lg text-nm-red font-semibold mb-2">{b.title}</h3>
                <p className="text-nm-black/70 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
