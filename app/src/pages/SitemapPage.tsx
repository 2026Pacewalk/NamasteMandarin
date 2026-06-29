import { Link } from 'react-router';
import { ArrowUpRight, FileCode2, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { siteGroups } from '../lib/siteData';

export default function SitemapPage() {
  return (
    <>
      <PageHero title="Sitemap" image="/assets/why-learn-chinese-stimulates-brain-function.png" />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <SectionHeading
              kicker="Find Your Way"
              title="Explore the Site"
              subtitle="Every page on the Namaste Mandarin website, organised for you. Browsing or a search engine — there's a map for both."
            />
          </div>

          {/* Grouped page links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteGroups.map((group) => (
              <div key={group.title} className="card-premium p-7">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-2.5 h-2.5 rounded-full bg-nm-gold" />
                  <h3 className="font-display text-xl text-nm-black font-semibold">{group.title}</h3>
                </div>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="group flex items-center gap-1.5 py-2 text-sm text-nm-black/70 hover:text-nm-red transition-colors"
                      >
                        <ChevronRight
                          size={15}
                          className="text-nm-gold group-hover:translate-x-0.5 transition-transform"
                        />
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* XML sitemap CTA */}
          <div className="mt-12 rounded-3xl bg-red-rich star-bg p-8 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <span className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <FileCode2 className="text-nm-gold-light" size={24} />
              </span>
              <div>
                <h3 className="font-display text-2xl text-white font-semibold">XML Sitemap</h3>
                <p className="text-white/70 text-sm mt-1 max-w-md">
                  The machine-readable sitemap that helps search engines like Google discover and
                  index every page.
                </p>
              </div>
            </div>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-grad whitespace-nowrap"
            >
              View sitemap.xml
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
