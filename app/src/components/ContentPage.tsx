import type { ReactNode } from 'react';
import { Check } from 'lucide-react';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';

interface ContentPageProps {
  title: string;
  heading?: string;
  kicker?: string;
  image?: string;
  banner?: string;
  /** Full designed banner (already contains its own title/artwork) — rendered uncropped, no overlay. */
  heroBanner?: string;
  hideEyebrow?: boolean;
  /** Body paragraphs. Each string becomes a <p>; the first renders as a lead. */
  paragraphs?: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  children?: ReactNode;
}

export default function ContentPage({
  title,
  heading,
  kicker,
  image,
  banner = '/assets/why-learn-chinese-stimulates-brain-function.png',
  heroBanner,
  hideEyebrow = false,
  paragraphs = [],
  bullets,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero title={title} image={banner} banner={heroBanner} hideEyebrow={hideEyebrow} />
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {heading && (
            <div className="mb-10 text-center">
              <SectionHeading kicker={kicker} title={heading} />
            </div>
          )}

          {image && (
            <figure className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-30px_rgba(11,11,11,0.4)] ring-1 ring-black/5 mb-10">
              <img src={image} alt={heading || title} className="w-full max-h-[420px] object-cover" />
            </figure>
          )}

          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-nm-black/85 text-lg leading-relaxed'
                    : 'text-nm-black/70 text-base leading-relaxed'
                }
              >
                {p}
              </p>
            ))}
          </div>

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-ivory rounded-xl px-4 py-3 border border-nm-gold/10"
                >
                  <Check className="text-nm-gold flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm text-nm-black/75">{b}</span>
                </li>
              ))}
            </ul>
          )}

          {children}
        </div>
      </section>
    </>
  );
}
