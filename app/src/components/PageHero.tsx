interface PageHeroProps {
  title: string;
  image?: string;
  hideEyebrow?: boolean;
  /** When set, renders this image as a full, uncropped banner (no overlay or overlaid title —
   *  use for designed banners that already contain their own title and artwork). */
  banner?: string;
}

export default function PageHero({ title, image = '/assets/asset_7.jpg', hideEyebrow = false, banner }: PageHeroProps) {
  if (banner) {
    return (
      <section className="w-full">
        <img src={banner} alt={title} className="block w-full h-auto" />
      </section>
    );
  }
  return (
    <section className="relative w-full h-[42vh] min-h-[280px] lg:h-[48vh] overflow-hidden flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Layered overlay: dark for legibility + brand-red tint at the base */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/45 to-black/65" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-nm-red/40 to-transparent" />

      <div className="relative z-10 text-center px-6">
        {!hideEyebrow && <span className="kicker text-nm-gold-light mb-4">Namaste Mandarin</span>}
        <h1 className="font-display text-[clamp(38px,5vw,62px)] text-white font-semibold drop-shadow-lg">
          {title}
        </h1>
        <div className="gold-rule mx-auto mt-5" />
      </div>
    </section>
  );
}
