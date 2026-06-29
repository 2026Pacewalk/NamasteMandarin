import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

type NavChild = { label: string; to: string };
type NavItem = { label: string; to: string; children?: NavChild[] };

const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About us',
    to: '/about-us',
    children: [
      { label: 'About Us', to: '/about-us' },
      { label: 'Our Team', to: '/our-team' },
      { label: 'Certificates', to: '/certificates' },
    ],
  },
  {
    label: 'About Mandarin',
    to: '/about-mandarin',
    children: [
      { label: 'Introduction', to: '/introduction' },
      { label: 'Why You Should Learn Mandarin', to: '/why-you-should-learn-mandarin' },
      { label: 'Who Should Learn Mandarin', to: '/who-should-learn-mandarin' },
    ],
  },
  {
    label: 'Courses',
    to: '/courses',
    children: [
      { label: 'Young Learners/Students', to: '/young-learners-students' },
      { label: 'Working Professionals', to: '/working-professionals' },
      { label: 'Corporate Training', to: '/corporate-training' },
      { label: 'Online Classes', to: '/online-classes' },
      { label: 'Online Courses', to: 'http://courses.namastemandarin.com/' },
    ],
  },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'News and Articles', to: '/news-and-articles' },
  { label: 'Contact Us', to: '/contact' },
];

const WHATSAPP = 'https://wa.me/+919880687766';

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const { pathname } = useLocation();

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-nm-red text-white text-center py-2 text-sm font-medium">
        We are ISO 9001:2015 Certified!!
      </div>

      <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm">
        <div className="flex items-center justify-between px-4 lg:px-8 py-3 max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobile}>
            <img src="/assets/logo.jpg" alt="Namaste Mandarin" className="h-14 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => {
              const active = item.to === '/' ? pathname === '/' : pathname.startsWith(item.to);
              return (
                <div key={item.label} className="relative group">
                  <NavLink
                    to={item.to}
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      active ? 'text-nm-red' : 'text-nm-black/80 hover:text-nm-red'
                    }`}
                  >
                    {item.label}
                    {item.children && <ChevronDown size={14} className="mt-0.5" />}
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

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-green-500 text-green-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors"
            >
              <MessageCircle size={16} />
              Click to Chat
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-nm-black p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white lg:hidden pt-28 overflow-y-auto">
          <div className="flex flex-col gap-1 px-6 pb-10">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <NavLink
                    to={item.to}
                    onClick={closeMobile}
                    className="flex-1 py-3 text-base font-medium text-nm-black"
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenGroup((g) => (g === item.label ? null : item.label))
                      }
                      className="p-2 text-nm-black/60"
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${
                          openGroup === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.label && (
                  <div className="flex flex-col pb-2 pl-4">
                    {item.children.map((child) =>
                      child.to.startsWith('http') ? (
                        <a
                          key={child.label}
                          href={child.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMobile}
                          className="py-2 text-sm text-nm-black/70"
                        >
                          {child.label}
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          to={child.to}
                          onClick={closeMobile}
                          className="py-2 text-sm text-nm-black/70"
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-green-500 text-green-600 px-6 py-3 rounded-full font-medium mt-6"
            >
              <MessageCircle size={18} />
              Click to Chat
            </a>
          </div>
        </div>
      )}
    </>
  );
}
