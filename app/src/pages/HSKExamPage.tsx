import type { ReactNode } from 'react';
import { Link } from 'react-router';
import ContentPage from '../components/ContentPage';

const fees = [
  { level: 'HSK 1', fee: '₹3,000' },
  { level: 'HSK 2', fee: '₹4,500' },
  { level: 'HSK 3 + HSKK (Elementary)', fee: '₹8,500' },
  { level: 'HSK 4 + HSKK (Intermediate)', fee: '₹12,000' },
  { level: 'HSK 5 + HSKK (Advanced)', fee: '₹16,000' },
  { level: 'HSK 6 + HSKK (Advanced)', fee: '₹17,000' },
];

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: 'What is the HSK Exam?',
    a: 'HSK (Hànyǔ Shuǐpíng Kǎoshì) is the official Chinese Language Proficiency Test designed for non-native Chinese speakers. It assesses a learner’s ability to understand and use Mandarin Chinese in academic, professional, and everyday situations.',
  },
  {
    q: 'How many HSK levels are there?',
    a: 'The HSK examination consists of six proficiency levels (HSK 1 to HSK 6), ranging from beginner to advanced. Each level evaluates progressively higher language skills in listening, reading, writing, and overall communication.',
  },
  {
    q: 'How can I register for the HSK exam?',
    a: (
      <>
        You can register for the HSK examination through the official Chinese Testing website:{' '}
        <a
          href="https://www.chinesetest.cn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-nm-red font-medium underline underline-offset-2 hover:text-nm-red-dark"
        >
          www.chinesetest.cn
        </a>
        . Ensure that you complete your registration before the application deadline for your
        preferred examination date.
      </>
    ),
  },
  {
    q: 'What is the examination fee?',
    a: (
      <>
        <p>The current examination fees in India are as follows:</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-red-rich text-white">
                <th className="px-4 py-3 font-semibold rounded-tl-lg">Exam Level</th>
                <th className="px-4 py-3 font-semibold rounded-tr-lg">Examination Fee</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f, i) => (
                <tr key={f.level} className={i % 2 ? 'bg-ivory' : 'bg-white'}>
                  <td className="px-4 py-3 border-b border-gray-100 text-nm-black/80">{f.level}</td>
                  <td className="px-4 py-3 border-b border-gray-100 font-medium text-nm-black">
                    {f.fee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-nm-black/55 italic">
          Note: Examination fees are subject to change by the official testing authority.
        </p>
      </>
    ),
  },
  {
    q: 'Where can I take the HSK exam?',
    a: 'At present, India offers only the Paper-Based HSK Examination, and the official test centre is located in Mumbai. Candidates are required to travel to Mumbai to appear for the examination. For test centres in other countries, please refer to the official HSK website.',
  },
  {
    q: 'How often is the HSK exam conducted?',
    a: 'HSK examinations are generally conducted every 2–3 months. The complete examination schedule for the year is usually published at the beginning of the calendar year by the official testing authority.',
  },
  {
    q: 'When are the HSK results announced?',
    a: 'For paper-based examinations, results are typically declared approximately one month after the examination date.',
  },
];

export default function HSKExamPage() {
  return (
    <ContentPage
      title="HSK Exam"
      kicker="Chinese Proficiency Test"
      heading="Frequently Asked Questions"
      heroBanner="/assets/banner-hsk-exam.jpg"
    >
      <div className="space-y-8">
        {faqs.map((item, i) => (
          <div key={item.q} className="flex gap-4 sm:gap-5">
            <span className="flex-shrink-0 w-9 h-9 rounded-full bg-nm-red/8 text-nm-red font-semibold flex items-center justify-center text-sm">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex-1 border-b border-gray-100 pb-8">
              <h3 className="font-display text-xl text-nm-black font-semibold">{item.q}</h3>
              <div className="text-nm-black/70 text-[15px] leading-relaxed mt-3">{item.a}</div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 rounded-3xl bg-red-rich star-bg p-8 lg:p-10 text-center">
        <h3 className="font-display text-2xl lg:text-3xl text-white font-semibold">
          Need Help with HSK Preparation?
        </h3>
        <p className="text-white/75 text-sm lg:text-base mt-2">Contact us for all your inquiries.</p>
        <Link
          to="/contact"
          className="btn-gold-grad mt-6 inline-flex"
        >
          Contact Us
        </Link>
      </div>
    </ContentPage>
  );
}
