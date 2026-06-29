interface PageHeroProps {
  title: string;
  image?: string;
}

export default function PageHero({ title, image = '/assets/asset_7.jpg' }: PageHeroProps) {
  return (
    <section className="relative w-full h-[40vh] min-h-[260px] lg:h-[46vh] overflow-hidden flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <h1 className="relative z-10 font-display text-[clamp(36px,5vw,60px)] text-white font-semibold text-center px-6 drop-shadow-lg">
        {title}
      </h1>
    </section>
  );
}
