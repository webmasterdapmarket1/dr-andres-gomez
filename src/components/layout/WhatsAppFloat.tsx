import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/data/siteConfig';

export const WhatsAppFloat: React.FC = () => {
  const location = useLocation();

  // Generate contextual prefilled message depending on active route
  const prefilledMessage = useMemo(() => {
    const path = location.pathname;

    if (path.startsWith('/resultados')) {
      return 'Hola Dr. Andrés Gómez, vi los resultados de antes y después y me gustaría recibir información médica sobre un procedimiento.';
    }
    if (path.startsWith('/sobre-el-dr-gomez')) {
      return 'Hola Dr. Andrés Gómez, leí sobre su trayectoria y me gustaría solicitar una cita de valoración diagnóstica en Torre Zentai.';
    }
    if (path.startsWith('/procedimientos/cirugia-intima')) {
      return 'Hola, quisiera recibir orientación confidencial y privada sobre los procedimientos de Cirugía Íntima con el Dr. Andrés Gómez en Torre Zentai.';
    }
    if (path.startsWith('/procedimientos/cirugia-corporal')) {
      return 'Hola Dr. Andrés Gómez, deseo consultar información sobre una valoración de Cirugía Corporal (Lipólisis / Abdominoplastia / Marcación) en Torre Zentai.';
    }
    if (path.startsWith('/procedimientos/cirugia-facial')) {
      return 'Hola Dr. Andrés Gómez, tengo interés en agendar una consulta diagnóstica de Cirugía Facial (Rinoplastia / Párpados / Rejuvenecimiento) en Torre Zentai.';
    }
    if (path.startsWith('/agendar')) {
      return 'Hola Dr. Andrés Gómez, deseo agendar mi valoración quirúrgica personalizada en Torre Zentai.';
    }
    if (path.startsWith('/contacto')) {
      return 'Hola, quisiera consultar los horarios y disponibilidad de consulta médica en el consultorio 805 de Torre Zentai Bogotá.';
    }
    return 'Hola Dr. Andrés Gómez, deseo agendar una valoración médica especializada y recibir orientación.';
  }, [location.pathname]);

  const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <aside
      aria-label="Atención directa por WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escribir al WhatsApp del Dr. Andrés Gómez"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-floating hover:bg-[#1EBE5D] hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="sr-only">Escribir por WhatsApp al Dr. Andrés Gómez</span>
        {/* WhatsApp Official SVG */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.99.585 3.864 1.621 5.46L2 22l4.674-1.583a10.02 10.02 0 0 0 5.357 1.614h.005c5.536 0 10.031-4.495 10.031-10.031A10.033 10.033 0 0 0 12.031 2zm0 18.252a8.23 8.23 0 0 1-4.223-1.161l-.303-.18-3.13.821.835-3.05-.198-.316a8.214 8.214 0 0 1-1.258-4.335c0-4.557 3.708-8.265 8.265-8.265 2.208 0 4.283.861 5.845 2.424a8.233 8.233 0 0 1 2.42 5.845c0 4.558-3.708 8.266-8.265 8.266zm4.53-6.19c-.248-.124-1.467-.724-1.695-.807-.228-.083-.394-.124-.56.124-.166.248-.642.807-.787.973-.145.166-.29.186-.538.062-.248-.124-1.048-.386-1.996-1.232-.738-.658-1.237-1.472-1.382-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.414.083-.166.041-.311-.02-.435-.062-.124-.56-1.35-.767-1.848-.201-.486-.406-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.85-.871 2.073s.891 2.404 1.015 2.57c.124.166 1.753 2.678 4.246 3.755.593.256 1.057.409 1.419.524.596.19 1.138.163 1.567.099.479-.071 1.467-.6 1.674-1.18.207-.58.207-1.077.145-1.18-.062-.104-.228-.166-.477-.29z" />
        </svg>

        {/* Pulse Ring Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-whatsapp opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#1EBE5D] border-2 border-white"></span>
        </span>
      </a>
    </aside>
  );
};

export default WhatsAppFloat;
