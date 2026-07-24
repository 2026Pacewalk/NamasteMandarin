import PageHero from '../components/PageHero';
import { useContent } from '../lib/content';

const DEFAULT_GALLERY = [
  'g3-big.jpg', 'g5-big.jpg', 'g7-big.jpg', 'g8-big.jpg', 'g9-big.jpg',
  'g10-big.jpg', 'g19-big.jpg', 'g21-big.jpg', 'g31-big.jpg', 'g32-big.jpg',
  'g33-big.jpg', 'g34-big.jpg', 'g35-big.jpg', 'g36-big.jpg', 'g37-big.jpg',
  'g38-big.jpg', 'g39-big.jpg', 'g40-big.jpg', 'g42-big.jpg',
  'new-1.jpg', 'new-2.jpg', 'new-3.jpg',
].map((f, i) => ({ src: `/assets/gallery/${f}`, alt: `Namaste Mandarin gallery ${i + 1}` }));

export default function GalleryPage() {
  const content = useContent();
  const images = content?.gallery?.length ? content.gallery : DEFAULT_GALLERY;

  return (
    <>
      <PageHero title="Gallery" banner="/assets/banner-gallery.jpg" />

      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
            {images.map((img, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer shadow-sm"
              >
                <img
                  src={img.src}
                  alt={img.alt || `Namaste Mandarin gallery ${i + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
