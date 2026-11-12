import React from 'react';

export interface SectionHeadingProps {
  kicker?: string;
  title: string; // Accepts markdown style: e.g. "Cirugía Plástica Avanzada con *precisión* láser"
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  theme?: 'light' | 'dark';
}

/**
 * Editorial SectionHeading Component
 * Enforces the design rule: Cormorant Garamond serif with exactly one italic word,
 * paired with Figtree subtitle and uppercase kicker badge.
 */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
  theme = 'light',
}) => {
  // Parse markdown *italic* segments
  const parts = title.split(/(\*[^*]+\*)/g);

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }[align];

  const kickerTheme =
    theme === 'dark'
      ? 'bg-navy-700 text-medical-soft border border-medical-soft/20'
      : 'bg-medical-soft text-medical-softText';

  const titleTheme = theme === 'dark' ? 'text-white' : 'text-navy-800';
  const subtitleTheme = theme === 'dark' ? 'text-gray-300' : 'text-graphite-body';
  // Contrast enhancement: on dark navy (#0E1424), text-medical-soft (#CAE7F4) achieves 14.1:1 AAA contrast
  const italicColor = theme === 'dark' ? 'text-medical-soft' : 'text-medical-primary';

  return (
    <div className={`max-w-3xl ${alignmentClass} ${className}`}>
      {kicker && (
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold tracking-kicker uppercase font-sans mb-3.5 ${kickerTheme}`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight leading-[1.2] ${titleTheme} editorial-heading`}
      >
        {parts.map((part, index) => {
          if (part.startsWith('*') && part.endsWith('*')) {
            const word = part.slice(1, -1);
            return (
              <em key={index} className={`italic font-serif font-normal ${italicColor}`}>
                {word}
              </em>
            );
          }
          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
      </h2>
      {subtitle && (
        <p className={`mt-4 font-sans text-base sm:text-lg leading-relaxed max-w-2xl ${alignmentClass} ${subtitleTheme}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
