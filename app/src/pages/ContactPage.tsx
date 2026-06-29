import { Phone, Mail, Facebook, Instagram, Youtube } from 'lucide-react';
import PageHero from '../components/PageHero';
import ContactSection from '../sections/ContactSection';

export default function ContactPage() {
  return (
    <>
      <PageHero title="Contact Us" image="/assets/hpchem-contact.jpg" />

      {/* Contact details */}
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-[clamp(24px,2.6vw,36px)] text-nm-black font-semibold">
            Visit Us or Drop Us a Line
          </h2>
          <p className="text-nm-red font-medium mt-2">Namaste Mandarin</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 mt-8">
            <a
              href="tel:+919880687766"
              className="flex items-center gap-3 text-nm-black/80 hover:text-nm-red transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-nm-red/10 flex items-center justify-center">
                <Phone className="text-nm-red" size={20} />
              </span>
              +91 98806 87766
            </a>
            <a
              href="mailto:namastemandarin@gmail.com"
              className="flex items-center gap-3 text-nm-black/80 hover:text-nm-red transition-colors"
            >
              <span className="w-11 h-11 rounded-full bg-nm-red/10 flex items-center justify-center">
                <Mail className="text-nm-red" size={20} />
              </span>
              namastemandarin@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            {[
              { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/people/Namaste-Mandarin/100063924019806/' },
              { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/namaste_mandarin' },
              { Icon: Youtube, label: 'Youtube', href: 'https://www.youtube.com/@namastemandarin7160' },
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

      <ContactSection />
    </>
  );
}
