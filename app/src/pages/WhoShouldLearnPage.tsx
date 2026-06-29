import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

const groups = [
  {
    icon: '/assets/sartaj.png',
    title: 'Children / Students',
    body: 'Chinese is the fastest growing foreign language being taught at schools in the west, US in particular. Knowing Mandarin would be a global skill set which expands academic opportunities — including scholarships under the Youth Chinese Test — & future job prospects for students stepping into a globalised world. Research shows learning a new language is easier during childhood; a school-going student finds it far easier to pick up a foreign language & can gain proficiency faster.',
  },
  {
    icon: '/assets/Working-professionals-1.png',
    title: 'Working Professionals',
    body: 'With increasing business ties, economic investment between India-China & growing job prospects (in China & with Chinese based companies), Mandarin is becoming an important foreign language. Knowing Mandarin is a differentiating key factor which would enhance one’s effectiveness in dealing & collaborating with Chinese counterparts at work.',
  },
  {
    icon: '/assets/Business-Persons-1.png',
    title: 'Business Persons',
    body: 'For businessmen & business women engaged in trade with China, knowing Mandarin is of enormous importance. Being able to converse in the same language & understanding Chinese culture would help them in rapport building, strengthening business ties, better negotiation & make their business trips hassle free.',
  },
  {
    icon: '/assets/Travel-Enthusiasts.png',
    title: 'Travel Enthusiasts',
    body: 'China is a mystic & beautiful country, which attracts tourists from all over the world. As China is a non-English speaking country, navigating as a tourist can be challenging & it makes one dependent on the tour guide. Knowing Mandarin & understanding Chinese culture helps the traveller in their exploratory journey.',
  },
  {
    icon: '/assets/as-a-hobby.png',
    title: 'As A Hobby',
    body: '“A hobby a day, keeps the doldrums away” - Phyllis Mc Ginley. Learning a foreign language can be cultivated over a period of time as a hobby. It opens up a window into a new world of culture, language, customs, tradition & opportunities.',
  },
];

export default function WhoShouldLearnPage() {
  return (
    <>
      <PageHero
        title="Who Should Learn Mandarin"
        image="/assets/chinese-language-is-chinese-a-language-1024x683-1.jpg"
      />

      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-14">
            <SectionHeading
              kicker="Is It For You?"
              title="Who Should Learn Mandarin"
              subtitle="Whatever your goal — academic, career, business, travel, or simply for the joy of it — Mandarin opens doors. Here's who benefits most."
            />
          </div>

          <div className="space-y-6">
            {groups.map((g, i) => (
              <div
                key={g.title}
                className="card-premium p-7 lg:p-9 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start"
              >
                {/* Icon + number */}
                <div className="relative flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-nm-red/5 ring-1 ring-nm-red/10 flex items-center justify-center">
                    <img src={g.icon} alt={g.title} className="w-16 h-16 object-contain" />
                  </div>
                  <span className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-gradient-to-br from-nm-gold-light to-nm-gold text-nm-black font-display font-bold text-sm flex items-center justify-center shadow-md">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-display text-2xl text-nm-black font-semibold">{g.title}</h3>
                  <div className="gold-rule mt-3 mb-4" />
                  <p className="text-nm-black/65 text-[15px] leading-relaxed">{g.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
