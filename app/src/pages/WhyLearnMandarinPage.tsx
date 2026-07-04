import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

const paras = [
  'It has been claimed that ‘those who do not speak Chinese are not ready for the 21st century’. A bold statement perhaps, but with many employers and companies across the globe seeking to establish relationships and develop key business links with China, Mandarin Chinese has indeed become a very valuable and highly sought after language skill in today’s world.',
  'As the world’s fastest growing major economy with thirty years of continuous GDP growth, China recently surpassed Japan in 2011 to become the second largest economy in the world after the USA. Economists predict that China will, without doubt, surpass the United States as the biggest international superpower.',
  (
    <>
      In early December 2013,{' '}
      <strong className="font-semibold text-nm-black">UK Prime Minister David Cameron</strong>, during
      his visit to China, said that the time had come for British schools to shift the focus away from
      traditional European languages such as French and German, and learn languages that will{' '}
      <strong className="font-semibold text-nm-black">“seal tomorrow’s business deals”</strong>. Of
      these, Mandarin Chinese is considered to be the most important of{' '}
      <strong className="font-semibold text-nm-black">‘tomorrow’s languages’</strong>, not just in the
      UK, but on the international stage as well.
    </>
  ),
  (
    <>
      Chinese is becoming one of the most important languages when it comes to operating an
      international business. Any business in the twenty-first century will be trying to do business in
      China, and speaking the language confers a huge advantage for anyone who wants to do business
      with China.{' '}
      <strong className="font-semibold text-nm-black">
        “It gives you flexibility, knowledge that you need, and personal connections that can make a
        difference in the speed and effectiveness of your negotiations.”
      </strong>
    </>
  ),
  'In the current job market, holding a degree is no longer regarded as a secure route into gaining employment after university. Many graduates are finding that the job market has become saturated. With this in mind, many students are looking to pursue more relevant degrees such as Mandarin Chinese and travel programs in China to set them apart and place them at the forefront of the employment rat-race. Recent studies have shown that Chinese has become a popular choice for a second language among college students — surpassing previous favourites that include Spanish, French, and German.',
  'Even if you’re just a casual traveler, learning some Chinese to understand street signs, order food, or just communicate with people you meet on the street makes it a most pleasant and enjoyable experience. The importance of Chinese is beneficial regardless of whether you do it for business, for fun, for your career, or even just for personal travel. When trying to uncover the importance of the Chinese language, one cannot discover a more fascinating and challenging language to learn.',
];

export default function WhyLearnMandarinPage() {
  return (
    <>
      <PageHero
        title="Why You Should Learn Mandarin?"
        banner="/assets/banner-why-learn-mandarin.jpg"
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <SectionHeading kicker="Importance of Mandarin" title="Why Mandarin?" />
          </div>

          {/* Pull-quote */}
          <blockquote className="relative bg-ivory border-l-4 border-nm-gold rounded-r-2xl px-6 py-5 mb-10">
            <p className="font-display text-xl lg:text-2xl text-nm-black/85 italic leading-snug">
              “Those who do not speak Chinese are not ready for the 21st century.”
            </p>
          </blockquote>

          <div className="space-y-5">
            {paras.map((p, i) => (
              <p key={i} className="text-nm-black/75 text-base leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
