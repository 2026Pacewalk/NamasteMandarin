import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

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
          <SectionHeading
            kicker="The Language"
            title="About Mandarin"
            subtitle="Mandarin is the most widely spoken language in the world with over 1.2 billion speakers. It is the official language of Mainland China, Taiwan & one of the official languages of Singapore — and one of the 6 official languages of the United Nations. No wonder millions of people are investing in learning it."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {blocks.map((b, i) => (
              <div key={b.title} className="card-premium p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-xl bg-nm-red/8 text-nm-red font-display font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <h3 className="font-body text-lg text-nm-black font-semibold">{b.title}</h3>
                </div>
                <p className="text-nm-black/65 text-sm leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
