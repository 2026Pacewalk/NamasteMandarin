import { useState, useEffect } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router';
import {
  Menu,
  X,
  MessageCircle,
  ChevronDown,
  Home,
  BookOpen,
  Images,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Info,
  Languages,
  Quote,
  Newspaper,
  BadgeCheck,
  GraduationCap,
} from 'lucide-react';

type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; icon: LucideIcon; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: 'Home', to: '/', icon: Home },
  {
    label: 'About us',
    to: '/about-us',
    icon: Info,
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Our Team', to: '/our-team' },
      { label: 'Certificates', to: '/certificates' },
    ],
  },
  {
    label: 'About Mandarin',
    to: '/about-mandarin',
    icon: Languages,
    children: [
      { label: 'Introduction', to: '/introduction' },
      { label: 'Why You Should Learn Mandarin', to: '/why-you-should-learn-mandarin' },
      { label: 'Who Should Learn Mandarin', to: '/who-should-learn-mandarin' },
    ],
  },
  {
    label: 'Courses',
    to: '/courses',
    icon: BookOpen,
    children: [
      { label: 'Young Learners/Students', to: '/young-learners-students' },
      { label: 'Working Professionals', to: '/working-professionals' },
      { label: 'Corporate Training', to: '/corporate-training' },
      { label: 'Online Classes', to: '/online-classes' },
      { label: 'Online Courses', to: 'https://namastemandarin.ongraphy.com/' },
    ],
  },
  { label: 'HSK Exam', to: '/hsk-exam', icon: GraduationCap },
  { label: 'Testimonials', to: '/testimonials', icon: Quote },
  { label: 'Gallery', to: '/gallery', icon: Images },
  { label: 'News and Articles', to: '/news-and-articles', icon: Newspaper },
  { label: 'Contact Us', to: '/contact', icon: Phone },
];

const WHATSAPP = 'https://wa.me/+919880687766';

const socials = [
  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/people/Namaste-Mandarin/100063924019806/' },
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/namaste_mandarin' },
  { Icon: Youtube, label: 'Youtube', href: 'https://www.youtube.com/@namastemandarin7160' },
];

const courseSlugs = ['/courses', '/young-learners-students', '/working-professionals', '/corporate-training', '/online-classes'];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Subtle elevation once scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isCourseActive = courseSlugs.some((s) => pathname.startsWith(s));

  return (
    <>
      {/* Top utility bar (desktop) */}
      <div className="hidden lg:block bg-red-rich text-white">
        <div className="max-w-7xl mx-auto px-8 h-9 flex items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <a
              href="tel:+919880687766"
              className="flex items-center gap-1.5 text-white/85 hover:text-nm-gold-light transition-colors"
            >
              <Phone size={13} /> +91 98806 87766
            </a>
            <span className="w-px h-3.5 bg-white/25" />
            <a
              href="mailto:namastemandarin@gmail.com"
              className="flex items-center gap-1.5 text-white/85 hover:text-nm-gold-light transition-colors"
            >
              <Mail size={13} /> namastemandarin@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-nm-gold-light font-medium tracking-wide">
              <BadgeCheck size={14} /> ISO 9001:2015 Certified
            </span>
            <span className="w-px h-3.5 bg-white/25" />
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/70 hover:text-nm-gold-light transition-colors"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Announcement bar (mobile) */}
      <div className="lg:hidden bg-nm-red text-white text-center py-2 text-xs font-medium tracking-wide">
        ✦ We are ISO 9001:2015 Certified!!
      </div>

      <nav
        className={`sticky top-0 left-0 w-full z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="flex items-center justify-between px-4 lg:px-8 py-2.5 lg:py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobile}>
            <img src="/assets/logo.jpg" alt="Namaste Mandarin" className="h-12 lg:h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              return (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.to}
                    className={`relative flex items-center gap-1 text-sm font-medium py-1 transition-colors ${
                      active ? 'text-nm-red' : 'text-nm-black/80 hover:text-nm-red'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="mt-0.5" />}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-nm-gold transition-all duration-300 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </NavLink>

                  {item.children && (
                    <div className="absolute left-0 top-full pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px]">
                        {item.children.map((child) =>
                          child.to.startsWith('http') ? (
                            <a
                              key={child.label}
                              href={child.to}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block px-4 py-2 text-sm text-nm-black/75 hover:text-nm-red hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </a>
                          ) : (
                            <Link
                              key={child.label}
                              to={child.to}
                              className="block px-4 py-2 text-sm text-nm-black/75 hover:text-nm-red hover:bg-gray-50 transition-colors"
                            >
                              {child.label}
                            </Link>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-green-600/25 hover:bg-green-700 hover:-translate-y-0.5 transition-all"
            >
              <MessageCircle size={16} />
              Click to Chat
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-nm-black p-2 -mr-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* ===== Mobile slide-in drawer ===== */}
      {/* Backdrop */}
      <div
        onClick={closeMobile}
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[86%] max-w-sm bg-white lg:hidden flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header — branded */}
        <div className="relative bg-red-rich star-bg px-5 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white rounded-xl px-2 py-1.5 shadow-sm">
              <img src="/assets/logo.jpg" alt="Namaste Mandarin" className="h-9 w-auto" />
            </div>
          </div>
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white active:scale-95 transition-transform"
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable nav */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {navItems.map((item) => {
            const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
            const open = openGroup === item.label;
            return (
              <div key={item.label} className="mb-1.5">
                <div
                  className={`relative flex items-center rounded-2xl transition-colors ${
                    active ? 'bg-nm-red/[0.07]' : 'hover:bg-gray-50'
                  }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-7 w-1 rounded-r-full bg-nm-red" />
                  )}
                  <NavLink
                    to={item.to}
                    onClick={closeMobile}
                    className={`flex-1 flex items-center gap-3 px-3 py-3 text-[15px] font-medium ${
                      active ? 'text-nm-red' : 'text-nm-black'
                    }`}
                  >
                    <span
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        active ? 'bg-nm-red text-white' : 'bg-nm-red/8 text-nm-red'
                      }`}
                    >
                      <item.icon size={18} />
                    </span>
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button
                      onClick={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
                      className="px-4 py-3.5 text-nm-black/40"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${open ? 'rotate-180 text-nm-red' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {/* Submenu */}
                {item.children && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      open ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="flex flex-col pl-14 pb-1">
                      {item.children.map((child) =>
                        child.to.startsWith('http') ? (
                          <a
                            key={child.label}
                            href={child.to}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={closeMobile}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-nm-black/65 rounded-lg active:bg-gray-50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-nm-gold" />
                            {child.label}
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.to}
                            onClick={closeMobile}
                            className="flex items-center gap-2 px-4 py-2.5 text-sm text-nm-black/65 rounded-lg active:bg-gray-50"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-nm-gold" />
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Drawer footer: CTA + contact + socials */}
        <div className="border-t border-gray-100 px-5 py-4 space-y-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white text-[13px] font-medium px-4 py-2 rounded-full w-fit active:scale-95 transition-transform"
          >
            <MessageCircle size={15} />
            Chat on WhatsApp
          </a>
          <div className="flex items-center justify-between">
            <a href="tel:+919880687766" className="flex items-center gap-2 text-sm text-nm-black/70">
              <Phone size={15} className="text-nm-red" /> +91 98806 87766
            </a>
            <a href="mailto:namastemandarin@gmail.com" aria-label="Email" className="text-nm-black/70">
              <Mail size={18} className="text-nm-red" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-nm-black/60 active:bg-nm-gold active:text-white transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </aside>

      {/* ===== Native-style bottom tab bar (mobile) ===== */}
      <nav
        className="fixed bottom-0 inset-x-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="grid grid-cols-5 h-16">
          <TabLink to="/" icon={<Home size={20} />} label="Home" active={pathname === '/'} />
          <TabLink to="/courses" icon={<BookOpen size={20} />} label="Courses" active={isCourseActive} />
          <TabLink to="/gallery" icon={<Images size={20} />} label="Gallery" active={pathname === '/gallery'} />
          <a
            href="tel:+919880687766"
            className="flex flex-col items-center justify-center gap-0.5 text-nm-black/60"
          >
            <Phone size={20} />
            <span className="text-[10px] font-medium">Call</span>
          </a>
          <button
            onClick={() => setMobileOpen(true)}
            className="flex flex-col items-center justify-center gap-0.5 text-nm-black/60"
            aria-label="Open menu"
          >
            <Menu size={20} />
            <span className="text-[10px] font-medium">Menu</span>
          </button>
        </div>
      </nav>
    </>
  );
}

function TabLink({
  to,
  icon,
  label,
  active,
}: {
  to: string;
  icon: React.ReactNode;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center gap-0.5 transition-colors ${
        active ? 'text-nm-red' : 'text-nm-black/60'
      }`}
    >
      <span className={active ? 'scale-110 transition-transform' : 'transition-transform'}>{icon}</span>
      <span className="text-[10px] font-medium">{label}</span>
    </Link>
  );
}
