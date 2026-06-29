import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from '../sections/Navigation';
import FooterSection from '../sections/FooterSection';
import { applySeo } from '../lib/seo';

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Per-route SEO: title, meta description, canonical, Open Graph/Twitter
  useEffect(() => {
    applySeo(pathname);
  }, [pathname]);

  useEffect(() => {
    // Scroll to a hash target if present, otherwise to the top on route change.
    if (hash) {
      const id = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
        ScrollTrigger.refresh();
      }, 80);
      return () => clearTimeout(id);
    }

    window.scrollTo(0, 0);
    // Recalculate scroll-driven animations after the new page mounts.
    const id = setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return (
    <div className="relative">
      <Navigation />
      <main className="relative">
        <Outlet />
      </main>
      <FooterSection />
    </div>
  );
}
