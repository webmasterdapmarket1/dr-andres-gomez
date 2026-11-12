import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { patientStories } from '@/data/resources';

export const StoriesListPage: React.FC = () => {
  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Testimonios y Experiencias de Pacientes"
          title="Historias de *vida*: La experiencia real contada por nuestros pacientes"
          subtitle="Detrás de cada intervención hay una historia de superación personal, bienestar y confianza recuperada. Conoce los relatos de quienes ya dieron el paso con el Dr. Andrés Gómez."
        />

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {patientStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl p-7 border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="badge-medical-soft text-xs font-bold px-3 py-0.5 rounded-full inline-flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-medical-primary" />
                    <span>Paciente Verificada</span>
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-medical-primary uppercase tracking-wider block">
                    {story.procedureName}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-navy-800">
                    {story.patientName} ({story.age} años)
                  </h3>
                  <span className="text-xs text-graphite-muted block">
                    Procedencia: {story.city} • Evolución: {story.postOpElapsed}
                  </span>
                </div>

                <blockquote className="p-4 rounded-xl bg-cream-50 border border-cream-200 text-xs sm:text-sm text-navy-800 italic leading-relaxed">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                <p className="text-xs text-graphite-body leading-relaxed line-clamp-3">
                  {story.fullNarrative[0]}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-cream-300 flex items-center justify-between">
                <Link
                  to={`/recursos/historias-de-vida/${story.slug}`}
                  className="font-bold text-xs text-medical-primary hover:text-medical-hover inline-flex items-center gap-1.5"
                >
                  <span>Leer historia completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to="/agendar"
                  className="btn-primary text-xs py-1.5 px-3.5 inline-flex items-center gap-1"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Agendar cita</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 text-center space-y-2">
          <p className="text-xs text-graphite-body max-w-2xl mx-auto leading-relaxed">
            Todos los testimonios publicados cuentan con autorización escrita de las pacientes conforme a la Ley 1581 de 2012 y normatividad de ética médica. Los resultados individuales varían según las características biológicas de cada persona.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoriesListPage;
