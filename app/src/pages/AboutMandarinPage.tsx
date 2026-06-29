import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';

const cards = [
  {
    to: '/introduction',
    title: 'Introduction',
    text: 'Mandarin is the most widely spoken language in the world — its tones, characters, and Pinyin explained.',
  },
  {
    to: '/why-you-should-learn-mandarin',
    title: 'Why You Should Learn Mandarin',
    text: 'Why Mandarin has become one of the most valuable and sought-after language skills in today’s world.',
  },
  {
    to: '/who-should-learn-mandarin',
    title: 'Who Should Learn Mandarin',
    text: 'From children and working professionals to business persons, travellers, and hobbyists.',
  },
];

export default function AboutMandarinPage() {
  return (
    <>
      <PageHero title="About Mandarin" image="/assets/chinese-language-1-1.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <p className="text-center text-nm-black/75 text-base lg:text-lg leading-relaxed max-w-3xl mx-auto mb-12">
            Mandarin is the most widely spoken language in the world with over 1.2 billion speakers.
            Explore why millions of people are investing in learning this language.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((c) => (
              <Link
                key={c.to}
                to={c.to}
                className="group bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:border-nm-red/20 transition-all"
              >
                <h3 className="font-body text-lg text-nm-black font-semibold mb-2 group-hover:text-nm-red transition-colors">
                  {c.title}
                </h3>
                <p className="text-nm-black/65 text-sm leading-relaxed mb-4">{c.text}</p>
                <span className="text-nm-red text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
