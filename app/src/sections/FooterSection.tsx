import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router';

const footerLinks = {
  courses: [
    { label: 'Young Learners', to: '/young-learners-students' },
    { label: 'Working Professionals', to: '/working-professionals' },
    { label: 'Corporate Training', to: '/corporate-training' },
    { label: 'Online Classes', to: '/online-classes' },
  ],
  company: [
    { label: 'About Us', to: '/about-us' },
    { label: 'Our Team', to: '/our-team' },
    { label: 'About Mandarin', to: '/about-mandarin' },
    { label: 'News & Articles', to: '/news-and-articles' },
  ],
  support: [
    { label: 'Contact', to: '/contact' },
    { label: 'Gallery', to: '/gallery' },
    { label: 'Certificates', to: '/certificates' },
  ],
};

export default function FooterSection() {
  return (
    <footer className="bg-nm-black py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Logo & tagline */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="w-10 h-10 rounded-full bg-nm-red flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">N</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">
                Namaste Mandarin
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              A Chinese language training institute committed towards promoting 
              Mandarin among the student community & working professionals.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/people/Namaste-Mandarin/100063924019806/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-nm-gold hover:text-nm-black transition-all"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/namaste_mandarin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-nm-gold hover:text-nm-black transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://www.youtube.com/@namastemandarin7160"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Youtube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-nm-gold hover:text-nm-black transition-all"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div>
            <h4 className="text-micro text-white/50 mb-4">Courses</h4>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-nm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-micro text-white/50 mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-nm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-micro text-white/50 mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-white/70 text-sm hover:text-nm-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white/50 text-sm">
              © 2024 Namaste Mandarin
            </p>
            <p className="text-white/40 text-xs">
              Logo designed by 4 Cubits Design Studio
            </p>
            <p className="text-white/40 text-xs">
              Website developed by <span className="text-nm-gold">Pacewalk</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
