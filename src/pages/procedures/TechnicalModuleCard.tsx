import React from 'react';
import { Zap, Sparkles, Activity, Flame, CheckCircle2 } from 'lucide-react';
import type { TechnicalModule } from '@/types/procedure';

export interface TechnicalModuleCardProps {
  module: TechnicalModule;
  className?: string;
}

export const TechnicalModuleCard: React.FC<TechnicalModuleCardProps> = ({
  module,
  className = '',
}) => {
  const getModuleIcon = () => {
    switch (module.id) {
      case 'tensamax':
        return <Flame className="w-4 h-4 text-medical-primary shrink-0" />;
      case 'retraction':
        return <Zap className="w-4 h-4 text-medical-primary shrink-0" />;
      case 'microaire':
        return <Sparkles className="w-4 h-4 text-medical-primary shrink-0" />;
      default:
        return <Activity className="w-4 h-4 text-medical-primary shrink-0" />;
    }
  };

  const isTensamax = module.id === 'tensamax';

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden rounded-card bg-white border border-cream-300 p-6 sm:p-7 shadow-card hover:shadow-card-hover hover:border-medical-primary/30 transition-all duration-300 group ${className}`}
    >
      {/* Accent gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-medical-primary via-medical-soft to-navy-800" />

      <div>
        {/* Header with Badge & Icon */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-kicker uppercase font-sans bg-medical-soft text-medical-softText">
            {getModuleIcon()}
            <span>{module.badge || 'Tecnología Quirúrgica'}</span>
          </span>
          <span className="text-[11px] font-semibold text-graphite-muted uppercase tracking-wider">
            Alta Precisión
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-navy-800 mb-1 group-hover:text-medical-primary transition-colors">
          {module.name}
        </h3>
        <p className="text-xs font-semibold text-medical-primary uppercase tracking-wide mb-4 font-sans">
          {module.headline || 'Tecnología Médica de Precisión'}
        </p>

        {/* Tensamax specific preview photo if available */}
        {isTensamax && (
          <div className="mb-4 overflow-hidden rounded-xl border border-cream-200">
            <img
              src="/images/tensamax-procedimiento.png"
              alt="Aplicación de tecnología Tensamax en procedimiento"
              className="w-full h-36 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        )}

        {/* Medical Description */}
        <p className="text-graphite-body text-sm leading-relaxed mb-5">
          {module.description}
        </p>

        {/* Clinical Impact Callout */}
        <div className="bg-cream-50 border-l-4 border-medical-primary rounded-r-lg p-4 mb-5">
          <div className="flex items-center gap-1.5 text-xs uppercase font-bold tracking-wider text-navy-800 mb-1">
            <Sparkles className="w-3.5 h-3.5 text-medical-primary shrink-0" />
            <span>Impacto Quirúrgico y Beneficio Clínico:</span>
          </div>
          <p className="text-xs sm:text-sm font-medium text-navy-800 leading-snug">
            {module.clinicalImpact}
          </p>
        </div>
      </div>

      {/* Features Checklist */}
      {module.features && module.features.length > 0 && (
        <div className="pt-4 border-t border-cream-200/80">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-graphite-muted mb-3 font-sans">
            Características Técnicas:
          </h4>
          <ul className="space-y-2">
            {module.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-graphite-body">
                <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TechnicalModuleCard;
