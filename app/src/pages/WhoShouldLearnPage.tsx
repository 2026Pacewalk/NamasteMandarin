import PageHero from '../components/PageHero';

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

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 space-y-6">
          {groups.map((g) => (
            <div
              key={g.title}
              className="flex flex-col sm:flex-row gap-6 items-start bg-gray-50 rounded-2xl p-7 border border-gray-100"
            >
              <img src={g.icon} alt={g.title} className="w-20 h-20 object-contain flex-shrink-0" />
              <div>
                <h3 className="font-body text-xl text-nm-red font-semibold mb-2">{g.title}</h3>
                <p className="text-nm-black/70 text-sm leading-relaxed">{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
