import ContentPage from '../components/ContentPage';

export default function YoungLearnersPage() {
  return (
    <ContentPage
      title="Young Learners/Students"
      kicker="For Children"
      heading="Young Learners/Students"
      image="/assets/g33-big.jpg"
      paragraphs={[
        'Learning a foreign language as an adult is much more challenging and hard than to learn it as a child. Children’s brains are like sponges when it comes to foreign language acquisition. They are developmentally “superior to adults” in that they can soak up a language and become fluent quickly, easily, and without accent.',
        'Research shows learning a new language will give your child more confidence, will make them more tolerant of other cultures, and will improve their social skills. So the earlier you start……… the better it would be….',
      ]}
      bullets={[
        'Language is taught using Props',
        'Real Time Objects',
        'Through Fun Learning',
        'Videos',
      ]}
    >
      <p className="mt-8 text-center text-nm-red font-medium text-lg">
        Enrol with us and give your child the gift of learning Mandarin Chinese!!
      </p>
    </ContentPage>
  );
}
