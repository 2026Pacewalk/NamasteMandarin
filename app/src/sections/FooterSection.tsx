import { useState } from 'react';
import { Link } from 'react-router';
import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
  Send,
  BadgeCheck,
  Check,
} from 'lucide-react';

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
    { label: 'Sitemap', to: '/sitemap' },
  ],
};

const socials = [
  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/people/Namaste-Mandarin/100063924019806/' },
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/namaste_mandarin' },
  { Icon: Youtube, label: 'Youtube', href: 'https://www.youtube.com/@namastemandarin7160' },
];

const WHATSAPP = 'https://wa.me/+919880687766';

function LinkColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-micro text-nm-gold/80 mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              to={link.to}
              className="group inline-flex items-center gap-2 text-white/65 text-sm hover:text-white transition-colors"
            >
              <span className="w-0 group-hover:w-3 h-px bg-nm-gold transition-all duration-300" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function FooterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative bg-nm-black text-white overflow-hidden">
      {/* Gold accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-nm-red via-nm-gold to-nm-red" />
      {/* Subtle star texture */}
      <div className="absolute inset-0 star-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Newsletter band */}
        <div className="py-10 border-b border-white/10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white">
              Stay in the loop
            </h3>
            <p className="text-white/55 text-sm mt-1">
              Mandarin learning tips, news &amp; course updates — straight to your inbox.
            </p>
          </div>

          {subscribed ? (
            <div className="flex items-center gap-2 text-nm-gold-light font-medium">
              <span className="w-8 h-8 rounded-full bg-nm-gold/20 flex items-center justify-center">
                <Check size={16} className="text-nm-gold-light" />
              </span>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto max-w-md gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 lg:w-72 bg-white/5 border border-white/15 rounded-full px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-nm-gold/60 focus:ring-2 focus:ring-nm-gold/15 transition-all"
              />
              <button type="submit" className="btn-gold-grad whitespace-nowrap">
                <Send size={15} />
                Subscribe
              </button>
            </form>
          )}
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 py-14">
          {/* Brand + contact + social */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4 w-fit">
              <div className="w-11 h-11 rounded-full bg-nm-red flex items-center justify-center shadow-lg shadow-nm-red/30">
                <span className="text-white font-display font-bold text-xl">N</span>
              </div>
              <span className="font-display text-xl font-semibold text-white">Namaste Mandarin</span>
            </Link>
            <p className="text-white/55 text-sm leading-relaxed max-w-sm mb-6">
              A Chinese language training institute committed towards promoting Mandarin among the
              student community &amp; working professionals.
            </p>

            {/* Contact rows */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+919880687766"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-nm-gold-light transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={15} className="text-nm-gold" />
                </span>
                +91 98806 87766
              </a>
              <a
                href="mailto:namastemandarin@gmail.com"
                className="flex items-center gap-3 text-white/70 text-sm hover:text-nm-gold-light transition-colors"
              >
                <span className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail size={15} className="text-nm-gold" />
                </span>
                namastemandarin@gmail.com
              </a>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-green-500/60 text-green-400 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-green-500 hover:text-white transition-all mb-6"
            >
              <MessageCircle size={16} />
              Click to Chat
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/8 flex items-center justify-center text-white/60 hover:bg-nm-gold hover:text-nm-black hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <LinkColumn title="Courses" links={footerLinks.courses} />
          <LinkColumn title="Company" links={footerLinks.company} />
          <LinkColumn title="Support" links={footerLinks.support} />

          {/* ISO badge */}
          <div className="flex md:justify-end">
            <div className="inline-flex items-start gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 h-fit">
              <BadgeCheck className="text-nm-gold flex-shrink-0" size={28} />
              <div>
                <p className="text-white text-sm font-semibold leading-tight">ISO 9001:2015</p>
                <p className="text-white/50 text-xs mt-0.5">Certified Institute</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar (extra bottom space on mobile clears the fixed tab bar) */}
        <div className="border-t border-white/10 pt-6 pb-24 lg:pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-white/50 text-sm">© 2024 Namaste Mandarin. All rights reserved.</p>
            <p className="text-white/35 text-xs mt-1">
              Logo designed by 4 Cubits Design Studio · Website developed by{' '}
              <span className="text-nm-gold">Pacewalk</span>
            </p>
          </div>
          <button
            onClick={scrollTop}
            className="inline-flex items-center gap-2 text-white/60 text-sm hover:text-nm-gold-light transition-colors group"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-nm-gold group-hover:-translate-y-0.5 transition-all">
              <ArrowUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
