interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark'; // dark = on red background
}

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  const titleColor = tone === 'dark' ? 'text-white' : 'text-nm-black';
  const subColor = tone === 'dark' ? 'text-white/70' : 'text-nm-black/60';

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      {kicker && (
        <span className={`kicker ${isCenter ? '' : 'kicker-start'} mb-4`}>{kicker}</span>
      )}
      <h2
        className={`font-display font-semibold ${titleColor} text-[clamp(30px,3.4vw,50px)] leading-tight`}
      >
        {title}
      </h2>
      <div className={`gold-rule mt-5 ${isCenter ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p className={`${subColor} text-base lg:text-lg mt-5 max-w-2xl ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
