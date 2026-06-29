import type { ReactNode } from 'react';
import PageHero from './PageHero';

interface ContentPageProps {
  title: string;
  heading?: string;
  image?: string;
  banner?: string;
  /** Body paragraphs. Each string becomes a <p>. */
  paragraphs?: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
  children?: ReactNode;
}

export default function ContentPage({
  title,
  heading,
  image,
  banner = '/assets/why-learn-chinese-stimulates-brain-function.png',
  paragraphs = [],
  bullets,
  children,
}: ContentPageProps) {
  return (
    <>
      <PageHero title={title} image={banner} />
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6">
          {heading && (
            <h2 className="font-display text-[clamp(26px,3vw,40px)] text-nm-black font-semibold mb-8 text-center">
              {heading}
            </h2>
          )}
          {image && (
            <img
              src={image}
              alt={heading || title}
              className="w-full max-h-[380px] object-cover rounded-2xl shadow-sm mb-10"
            />
          )}
          <div className="space-y-5 text-nm-black/75 text-base leading-relaxed">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {bullets && bullets.length > 0 && (
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-nm-black/75 text-base">
                  <span className="mt-2 w-2 h-2 rounded-full bg-nm-red flex-shrink-0" />
                  <span>{b}</span>
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
