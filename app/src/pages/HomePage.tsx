import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import WhoShouldLearn from '../sections/WhoShouldLearn';
import CoursesSection from '../sections/CoursesSection';
import MethodologySection from '../sections/MethodologySection';
import TestimonialsSection from '../sections/TestimonialsSection';
import NewsSection from '../sections/NewsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhoShouldLearn />
      <CoursesSection />
      <MethodologySection />
      <TestimonialsSection />
      <NewsSection limit={3} />
      <ContactSection />
    </>
  );
}
