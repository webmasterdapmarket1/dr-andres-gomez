import React from 'react';
import { ShieldCheck, Lock, HeartHandshake, FileText, MessageCircle, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface IntimateNoticeCardProps {
  variant?: 'banner' | 'embedded' | 'compact';
  className?: string;
  onConsultationClick?: () => void;
}

export const IntimateNoticeCard: React.FC<IntimateNoticeCardProps> = ({
  variant = 'banner',
  className = '',
}) => {
  const whatsappUrl = `https://wa.me/573123255900?text=${encodeURIComponent(
    'Hola Dr. Andrés Gómez, solicito información confidencial sobre valoración médica para cirugía íntima en Torre Zentai.'
  )}`;

  const isCompact = variant === 'compact';

  return (
    <div
      className={`bg-cream-50 border border-cream-300 rounded-card ${
        isCompact ? 'p-4 sm:p-5' : 'p-6 sm:p-8'
      } shadow-card border-l-4 border-l-medical-primary relative overflow-hidden ${className}`}
      role="region"
      aria-label="Protocolo de Confidencialidad y Bioética Médica"
    >
      {/* Decorative background watermark */}
      <div
        className="absolute right-[-24px] bottom-[-24px] opacity-[0.03] pointer-events-none select-none"
        aria-hidden="true"
      >
        <ShieldCheck className="w-56 h-56 text-navy-800" />
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-5 relative z-10">
        {/* Shield Icon Badge */}
        <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center shrink-0 text-medical-softText">
          <ShieldCheck className="w-6 h-6 text-medical-primary" />
        </div>

        <div className="flex-1">
          {/* Header */}
          <div className="mb-2">
            <span className="inline-block text-xs uppercase tracking-kicker font-bold text-medical-primary font-sans mb-1">
              Protección, Privacidad y Bioética Médica
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800 leading-snug">
              Protocolo de <em className="italic text-medical-primary font-serif">Confidencialidad</em> y Discreción Total
            </h3>
          </div>

          {/* Core Reassurance Message */}
          <p className="text-sm sm:text-base text-graphite-body leading-relaxed mb-4">
            Por respeto a la dignidad del paciente, normatividad de la Ley de Ética Médica (Ley 23 de 1981) y protección de datos sensibles en Colombia, en nuestra plataforma web <strong>no exhibimos fotografías explícitas ni de desnudez médica</strong> en procedimientos de cirugía íntima.
          </p>

          {/* Three Clinical Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-xl border border-cream-200">
              <Lock className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-navy-800 font-semibold mb-0.5">Consulta Privada 1 a 1</strong>
                <span className="text-graphite-muted">Valoración médica en consultorio exclusivo en Torre Zentai o teleconsulta cifrada.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-xl border border-cream-200">
              <FileText className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-navy-800 font-semibold mb-0.5">Casos en Consulta</strong>
                <span className="text-graphite-muted">El atlas clínico fotográfico se comparte únicamente de manera presencial.</span>
              </div>
            </div>

            <div className="flex items-start gap-2.5 bg-white/85 p-3 rounded-xl border border-cream-200">
              <HeartHandshake className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
              <div className="text-xs">
                <strong className="block text-navy-800 font-semibold mb-0.5">Enfoque Funcional</strong>
                <span className="text-graphite-muted">Corrección anatómica, alivio de molestias físicas y restitución del bienestar integral.</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button text-xs sm:text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consulta Confidencial por WhatsApp</span>
            </a>

            <Link
              to="/agendar?categoria=cirugia-intima"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-button text-xs sm:text-sm font-semibold bg-navy-800 text-white hover:bg-navy-700 transition-colors shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Cita Privada en Torre Zentai</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntimateNoticeCard;
