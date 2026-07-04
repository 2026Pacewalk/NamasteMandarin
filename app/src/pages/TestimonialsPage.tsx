import PageHero from '../components/PageHero';
import TestimonialsSection from '../sections/TestimonialsSection';

export default function TestimonialsPage() {
  return (
    <>
      <PageHero title="Testimonials" banner="/assets/banner-testimonials.jpg" />
      <TestimonialsSection />
    </>
  );
}
