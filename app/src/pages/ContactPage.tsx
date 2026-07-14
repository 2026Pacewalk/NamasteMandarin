import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactSection from '../sections/ContactSection';
import { useContent } from '../lib/content';

const DEFAULT_CONTACT = {
  phone: '+91 98806 87766',
  email: 'namastemandarin@gmail.com',
  whatsapp: 'https://wa.me/+919880687766',
  facebook: 'https://www.facebook.com/people/Namaste-Mandarin/100063924019806/',
  instagram: 'https://www.instagram.com/namaste_mandarin',
  youtube: 'https://www.youtube.com/@namastemandarin7160',
};

export default function ContactPage() {
  const content = useContent();
  const c = content?.settings?.contact || DEFAULT_CONTACT;
  const telHref = `tel:${c.phone.replace(/[^0-9+]/g, '')}`;

  return (
    <>
      <PageHero title="Contact Us" image="/assets/hpchem-contact.jpg" />

      {/* Contact form first */}
      <ContactSection />

      {/* Contact details */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(24px,2.6vw,36px)] text-nm-black font-semibold">
            Visit Us or Drop Us a Line
          </h2>
          <p className="text-nm-red font-medium mt-2">Namaste Mandarin</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-8">
            <a
              href={telHref}
              className="flex items-center gap-3 text-nm-black/80 hover:text-nm-red transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-nm-red/10 flex items-center justify-center">
                <Phone className="text-nm-red" size={20} />
              </span>
              {c.phone}
            </a>
            <a
              href={`mailto:${c.email}`}
              className="flex items-center gap-3 text-nm-black/80 hover:text-nm-red transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-nm-red/10 flex items-center justify-center">
                <Mail className="text-nm-red" size={20} />
              </span>
              {c.email}
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            {[
              { Icon: Facebook, label: 'Facebook', href: c.facebook },
              { Icon: Instagram, label: 'Instagram', href: c.instagram },
              { Icon: Youtube, label: 'Youtube', href: c.youtube },
            ].map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-nm-red text-white flex items-center justify-center hover:bg-nm-red-dark transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
