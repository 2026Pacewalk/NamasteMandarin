import { useState, useEffect, useCallback } from 'react';
import { Award, BadgeCheck, GraduationCap, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';

const certImages = [
  '/assets/certificates.jpg',
  '/assets/certificates1.jpg',
  '/assets/certificates2.jpg',
  '/assets/certificates3.jpg',
];

const features = [
  {
    icon: Award,
    title: 'ISO 9001:2015 Certified',
    text: 'An internationally recognised standard for quality management — your assurance of consistent, high-quality training.',
  },
  {
    icon: BadgeCheck,
    title: 'Certificate of Completion',
    text: 'Every student receives a certificate on successfully completing each level, recognising their Mandarin proficiency.',
  },
  {
    icon: GraduationCap,
    title: 'HSK Exam Guidance',
    text: 'Structured preparation for the HSK — the official Chinese proficiency test for non-native speakers.',
  },
];

export default function CertificatesPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const show = useCallback(
    (dir: number) =>
      setLightbox((i) => (i === null ? i : (i + dir + certImages.length) % certImages.length)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(1);
      if (e.key === 'ArrowLeft') show(-1);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [lightbox, close, show]);

  return (
    <>
      <PageHero title="Certificates" image="/assets/why-learn-chinese-stimulates-brain-function.png" />

      {/* Intro */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-nm-gold/10 ring-1 ring-nm-gold/30 mb-6">
              <img
                src="/assets/We-are-ISO-9001-2015-Certified.png"
                alt="ISO 9001:2015 Certified"
                className="h-16 w-auto"
              />
            </div>
            <SectionHeading
              kicker="Recognised Quality"
              title="We are ISO 9001:2015 Certified"
              subtitle="Namaste Mandarin maintains internationally certified quality standards. On completing each level, our students are awarded a Certificate of Completion recognising their Mandarin proficiency."
            />
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {features.map((f) => (
              <div key={f.title} className="card-premium p-7 text-center">
                <div className="w-14 h-14 rounded-2xl bg-nm-red/8 flex items-center justify-center mx-auto mb-5">
                  <f.icon className="text-nm-red" size={26} />
                </div>
                <h3 className="font-body text-lg text-nm-black font-semibold mb-2">{f.title}</h3>
                <p className="text-nm-black/60 text-sm leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate gallery */}
      <section className="bg-ivory py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <SectionHeading kicker="Our Credentials" title="Certificates Gallery" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certImages.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="card-premium group relative overflow-hidden block text-left"
                aria-label={`View certificate ${i + 1}`}
              >
                <img
                  src={src}
                  alt={`Certificate ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-nm-black/0 group-hover:bg-nm-black/40 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 bg-white/90 text-nm-black text-sm font-medium px-4 py-2 rounded-full">
                    <ZoomIn size={16} /> View
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          onClick={close}
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <X size={22} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              show(-1);
            }}
            aria-label="Previous"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={certImages[lightbox]}
            alt={`Certificate ${lightbox + 1}`}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[92vw] rounded-lg shadow-2xl object-contain"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              show(1);
            }}
            aria-label="Next"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
            {lightbox + 1} / {certImages.length}
          </span>
        </div>
      )}
    </>
  );
}
