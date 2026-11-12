import React from 'react';
import {
  ExternalLink,
  Tv,
  Radio,
  FileText,
  Globe,
  Mail,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { pressArticles } from '@/data/resources';
import { siteConfig } from '@/data/siteConfig';

export const PressPage: React.FC = () => {
  const getMediaIcon = (type: string) => {
    switch (type) {
      case 'Televisión':
        return <Tv className="w-4 h-4 text-medical-primary" aria-hidden="true" />;
      case 'Radio':
        return <Radio className="w-4 h-4 text-medical-primary" aria-hidden="true" />;
      case 'Prensa Escrita':
        return <FileText className="w-4 h-4 text-medical-primary" aria-hidden="true" />;
      default:
        return <Globe className="w-4 h-4 text-medical-primary" aria-hidden="true" />;
    }
  };

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Presencia en Medios y Divulgación Científica"
          title="El Dr. Andrés Gómez en los *medios* de comunicación"
          subtitle="Entrevistas, columnas de opinión y notas periodísticas sobre avances tecnológicos, bioseguridad del paciente y tendencias en cirugía plástica segura."
        />

        {/* Media Articles Wall */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pressArticles.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="badge-medical-soft font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1.5">
                    {getMediaIcon(item.type)}
                    <span>{item.type}</span>
                  </span>
                  <span className="text-graphite-muted">{item.date}</span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-medical-primary uppercase tracking-wider block">
                    {item.mediaOutlet}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-navy-800 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-graphite-body leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-cream-200/60 flex items-center justify-between text-xs">
                <span className="text-graphite-muted font-medium">{item.badge}</span>
                {item.externalUrl && (
                  <a
                    href={item.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
                  >
                    <span>Ver nota</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Press Inquiries Callout */}
        <div className="p-8 rounded-3xl bg-cream-50 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-xl font-bold text-navy-800">
              ¿Eres periodista o medio de comunicación?
            </h4>
            <p className="text-xs text-graphite-body max-w-xl">
              El Dr. Andrés Gómez está disponible para conceptos médicos especializados, entrevistas sobre bioseguridad en cirugía estética y divulgación de avances tecnológicos.
            </p>
          </div>
          <a
            href={`mailto:${siteConfig.contact.email}?subject=Solicitud de Prensa / Entrevista con el Dr. Andrés Gómez`}
            className="btn-primary text-xs py-3 px-6 inline-flex items-center gap-2 flex-shrink-0"
          >
            <Mail className="w-4 h-4" />
            <span>Contacto de Prensa</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PressPage;
