import { Routes, Route } from 'react-router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurTeamPage from './pages/OurTeamPage';
import CertificatesPage from './pages/CertificatesPage';
import AboutMandarinPage from './pages/AboutMandarinPage';
import IntroductionPage from './pages/IntroductionPage';
import WhyLearnMandarinPage from './pages/WhyLearnMandarinPage';
import WhoShouldLearnPage from './pages/WhoShouldLearnPage';
import CoursesPage from './pages/CoursesPage';
import YoungLearnersPage from './pages/YoungLearnersPage';
import WorkingProfessionalsPage from './pages/WorkingProfessionalsPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import OnlineClassesPage from './pages/OnlineClassesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />

        {/* About us */}
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/certificates" element={<CertificatesPage />} />

        {/* About Mandarin */}
        <Route path="/about-mandarin" element={<AboutMandarinPage />} />
        <Route path="/introduction" element={<IntroductionPage />} />
        <Route path="/why-you-should-learn-mandarin" element={<WhyLearnMandarinPage />} />
        <Route path="/who-should-learn-mandarin" element={<WhoShouldLearnPage />} />

        {/* Courses */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/young-learners-students" element={<YoungLearnersPage />} />
        <Route path="/working-professionals" element={<WorkingProfessionalsPage />} />
        <Route path="/corporate-training" element={<CorporateTrainingPage />} />
        <Route path="/online-classes" element={<OnlineClassesPage />} />

        {/* Other */}
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/news-and-articles" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
