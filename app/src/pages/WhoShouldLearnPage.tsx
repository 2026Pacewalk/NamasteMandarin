import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

const groups = [
  {
    image: '/assets/wsl-children-students.jpg',
    title: 'Children / Students',
    body: 'Chinese is the fastest growing foreign language being taught at schools in the west, US in particular. Knowing Mandarin would be a global skill set which expands academic opportunities — including scholarships & future job prospects for students stepping into a globalised world. Research shows learning a new language is easier during childhood; a school-going student finds it far easier to pick up a foreign language & can gain proficiency faster.',
  },
  {
    image: '/assets/wsl-working-professionals.jpg',
    title: 'Working Professionals',
    body: 'With increasing business ties, economic investment between World-China & growing job prospects (in China & with Chinese based companies), Mandarin is becoming an important foreign language. Knowing Mandarin is a differentiating key factor which would enhance one’s effectiveness in dealing & collaborating with Chinese counterparts at work.',
  },
  {
    image: '/assets/wsl-business-persons.jpg',
    title: 'Business Persons',
    body: 'For businessmen & business women engaged in trade with China, knowing Mandarin is of enormous importance. Being able to converse in the same language & understanding Chinese culture would help them in rapport building, strengthening business ties, better negotiation & make their business trips hassle free.',
  },
  {
    image: '/assets/wsl-travel-enthusiasts.jpg',
    title: 'Travel Enthusiasts',
    body: 'China is a mystic & beautiful country, which attracts tourists from all over the world. As China is a non-English speaking country, navigating as a tourist can be challenging & it makes one dependent on the tour guide. Knowing Mandarin & understanding Chinese culture helps the traveller in their exploratory journey.',
  },
  {
    image: '/assets/wsl-as-a-hobby.jpg',
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

          <div className="space-y-8 lg:space-y-10">
            {groups.map((g, i) => (
              <div
                key={g.title}
                className={`card-premium overflow-hidden flex flex-col lg:items-stretch ${
                  i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Illustration */}
                <div className="lg:w-1/2 flex-shrink-0">
                  <img
                    src={g.image}
                    alt={g.title}
                    loading="lazy"
                    className="w-full h-56 sm:h-72 lg:h-full object-cover"
                  />
                </div>
                {/* Content */}
                <div className="lg:w-1/2 p-7 lg:p-10 flex flex-col justify-center">
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
