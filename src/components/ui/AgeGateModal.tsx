import React, { useEffect } from 'react';
import { ShieldAlert, ArrowRight, Home } from 'lucide-react';

export interface AgeGateModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AgeGateModal: React.FC<AgeGateModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn"
    >
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-floating border border-cream-300 text-navy-800 text-center relative animate-scaleUp">
        {/* Warning Icon Badge */}
        <div className="w-16 h-16 rounded-full bg-medical-soft/60 text-medical-primary flex items-center justify-center mx-auto mb-4">
          <ShieldAlert className="w-8 h-8" aria-hidden="true" />
        </div>

        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-amber-100 text-amber-900 border border-amber-300 mb-3">
          Contenido Clínico Sensible • Verificación +18
        </span>

        <h2
          id="age-gate-title"
          className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-navy-800 mb-3"
        >
          Confirmación de Mayoría de Edad y Aviso Bioético
        </h2>

        <p className="text-sm text-graphite-body leading-relaxed mb-6 text-left sm:text-center">
          Esta sección contiene fotografías médicas reales de antes y después de procedimientos quirúrgicos con exposición anatómica clínica, publicadas con la autorización expresa y consentimiento informado de pacientes reales.
          <br className="hidden sm:inline" />
          {' '}Conforme a las directrices bioéticas y de protección al menor de edad de la República de Colombia, debes confirmar que eres mayor de 18 años para acceder a esta galería.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={onConfirm}
            className="btn-primary flex-1 py-3 px-5 text-sm font-semibold inline-flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Soy mayor de 18 años — Acceder</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary py-3 px-5 text-sm font-semibold inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" aria-hidden="true" />
            <span>Regresar al Inicio</span>
          </button>
        </div>

        <p className="mt-4 text-[11px] text-graphite-muted">
          La información y fotografías expuestas son exclusivamente de carácter educativo e informativo y no reemplazan una valoración médica presencial.
        </p>
      </div>
    </div>
  );
};

export default AgeGateModal;
