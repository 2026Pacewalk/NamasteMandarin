import PageHero from '../components/PageHero';

const certImages = [
  '/assets/certificates.jpg',
  '/assets/certificates1.jpg',
  '/assets/certificates2.jpg',
  '/assets/certificates3.jpg',
];

export default function CertificatesPage() {
  return (
    <>
      <PageHero title="Certificates" image="/assets/why-learn-chinese-stimulates-brain-function.png" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <img
              src="/assets/We-are-ISO-9001-2015-Certified.png"
              alt="ISO 9001:2015 Certified"
              className="h-28 w-auto mx-auto mb-6"
            />
            <h2 className="font-display text-[clamp(26px,3vw,40px)] text-nm-black font-semibold">
              We are ISO 9001:2015 Certified
            </h2>
            <p className="text-nm-black/70 text-base leading-relaxed max-w-2xl mx-auto mt-4">
              On successful completion of each level, our students are awarded a Certificate of
              Completion recognising their Mandarin proficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {certImages.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <img src={src} alt={`Certificate ${i + 1}`} loading="lazy" className="w-full h-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
