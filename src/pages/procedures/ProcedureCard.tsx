import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Activity, Calendar, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import type { Procedure } from '@/types/procedure';

export interface ProcedureCardProps {
  procedure: Procedure;
  featured?: boolean;
  className?: string;
}

export const ProcedureCard: React.FC<ProcedureCardProps> = ({
  procedure,
  featured = false,
  className = '',
}) => {
  const getSubcategoryLabel = () => {
    if (procedure.bodySubcategory === 'contorno-corporal' || procedure.subcategory === 'contorno-corporal') {
      return 'Contorno Corporal';
    }
    if (procedure.bodySubcategory === 'cirugia-mamaria' || procedure.subcategory === 'cirugia-mamaria') {
      return 'Cirugía Mamaria';
    }
    if (procedure.category === 'cirugia-facial') {
      return 'Cirugía Facial';
    }
    if (procedure.category === 'cirugia-intima') {
      return 'Cirugía Íntima';
    }
    return 'Procedimiento Quirúrgico';
  };

  return (
    <article
      className={`group relative flex flex-col justify-between bg-white rounded-card p-6 sm:p-7 border border-cream-300 shadow-card hover:shadow-card-hover hover:border-medical-primary/40 transition-all duration-300 transform hover:-translate-y-1 ${
        featured ? 'ring-1 ring-medical-primary/50' : ''
      } ${className}`}
    >
      <div>
        {/* Top Badges Row */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cream-50 text-navy-800 border border-cream-300">
            {getSubcategoryLabel()}
          </span>

          {procedure.isSensitiveIntimate ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-medical-softText bg-medical-soft px-2.5 py-0.5 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5 text-medical-primary" />
              Confidencial
            </span>
          ) : procedure.technicalModules && procedure.technicalModules.length > 0 ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-medical-softText bg-medical-soft/80 px-2.5 py-0.5 rounded-full">
              <Zap className="w-3 h-3 text-medical-primary" />
              Tecnología Avanzada
            </span>
          ) : null}
        </div>

        {/* Subtitle / Category kicker */}
        <p className="text-[11px] uppercase tracking-wider text-medical-primary font-bold mb-1.5 font-sans">
          {procedure.subtitle || 'Cirugía de Alta Definición'}
        </p>

        {/* Title */}
        <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800 group-hover:text-medical-primary transition-colors leading-snug mb-3">
          <Link
            to={`/procedimientos/${procedure.category}/${procedure.slug}`}
            className="focus:outline-none focus:underline"
          >
            {procedure.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="text-sm text-graphite-body leading-relaxed line-clamp-3 mb-5">
          {procedure.shortDescription}
        </p>
      </div>

      <div>
        {/* Clinical Metrics Snapshot */}
        <div className="grid grid-cols-3 gap-2 py-3 border-t border-cream-200/80 text-[11px] text-graphite-muted">
          <div className="flex items-center gap-1.5" title="Duración quirúrgica">
            <Clock className="w-3.5 h-3.5 text-medical-primary shrink-0" />
            <span className="truncate">{procedure.clinicalMetrics.duration}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Tipo de anestesia">
            <Activity className="w-3.5 h-3.5 text-medical-primary shrink-0" />
            <span className="truncate">{procedure.clinicalMetrics.anesthesia}</span>
          </div>
          <div className="flex items-center gap-1.5" title="Tiempo de recuperación">
            <Calendar className="w-3.5 h-3.5 text-medical-primary shrink-0" />
            <span className="truncate">{procedure.clinicalMetrics.recovery}</span>
          </div>
        </div>

        {/* Card Action Link */}
        <div className="mt-4 pt-3 border-t border-cream-200/60 flex items-center justify-between">
          <Link
            to={`/procedimientos/${procedure.category}/${procedure.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-medical-primary group-hover:text-medical-hover focus:outline-none"
          >
            <span>Ver ficha clínica</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" />
          </Link>
          <span className="text-xs text-graphite-muted">Torre Zentai</span>
        </div>
      </div>
    </article>
  );
};

export default ProcedureCard;
