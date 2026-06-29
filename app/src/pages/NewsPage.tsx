import PageHero from '../components/PageHero';
import NewsSection from '../sections/NewsSection';

export default function NewsPage() {
  return (
    <>
      <PageHero title="News and Articles" image="/assets/News-and-Articles.jpg" />
      <NewsSection />
    </>
  );
}
