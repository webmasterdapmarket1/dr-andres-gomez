import React from 'react';
import { Sun, Moon } from 'lucide-react';

export type HeroVariant = 'warm' | 'dark';

export interface HeroToggleProps {
  variant: HeroVariant;
  onToggle: (variant: HeroVariant) => void;
  className?: string;
}

export const HeroToggle: React.FC<HeroToggleProps> = ({
  variant,
  onToggle,
  className = '',
}) => {
  return (
    <div
      role="group"
      aria-label="Selector de variante del Hero"
      className={`inline-flex items-center p-1 rounded-full border shadow-card transition-colors duration-300 ${
        variant === 'dark'
          ? 'bg-navy-800/90 border-navy-700 text-white'
          : 'bg-white/95 border-cream-300 text-navy-800'
      } ${className}`}
    >
      <button
        type="button"
        onClick={() => onToggle('warm')}
        aria-pressed={variant === 'warm'}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-primary ${
          variant === 'warm'
            ? 'bg-cream-100 text-navy-800 shadow-sm border border-cream-300'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        <Sun className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
        <span>Neutro Cálido (#F4EFE9)</span>
      </button>

      <button
        type="button"
        onClick={() => onToggle('dark')}
        aria-pressed={variant === 'dark'}
        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold font-sans transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-medical-primary ${
          variant === 'dark'
            ? 'bg-navy-900 text-cream-100 shadow-sm border border-medical-soft/30'
            : 'text-gray-500 hover:text-navy-800'
        }`}
      >
        <Moon className="w-3.5 h-3.5 text-medical-soft" aria-hidden="true" />
        <span>Navy Quirúrgico (#0E1424)</span>
      </button>
    </div>
  );
};

export default HeroToggle;
