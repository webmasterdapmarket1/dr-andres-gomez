import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  Star,
  ArrowLeft,
  ShieldCheck,
  Calendar,
  MessageCircle,
  MapPin,
  Clock,
} from 'lucide-react';
import { patientStories } from '@/data/resources';
import { siteConfig } from '@/data/siteConfig';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const story = patientStories.find((s) => s.slug === slug);

  if (!story) {
    return <Navigate to="/recursos/historias-de-vida" replace />;
  }

  const journeyStages = [
    {
      title: '1. El motivo de consulta y situación inicial',
      content: story.fullNarrative[0] || 'Inconformidad con depósitos grasos o laxitud que no respondían a dieta ni ejercicio.',
    },
    {
      title: '2. La valoración médica con el Dr. Andrés Gómez',
      content: story.fullNarrative[1] || 'Examen clínico riguroso en Torre Zentai, con explicación honesta de expectativas y tecnología adecuada.',
    },
    {
      title: '3. El día quirúrgico y la recuperación asistida',
      content: story.fullNarrative[2] || 'Procedimiento seguro en quirófano acreditado y acompañamiento cercano de enfermería con Dora Calderón.',
    },
  ];

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Back Link */}
        <Link
          to="/recursos/historias-de-vida"
          className="inline-flex items-center gap-2 text-xs font-bold text-medical-primary hover:text-medical-hover"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Volver a todas las historias de vida</span>
        </Link>

        {/* Story Header */}
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="badge-medical-soft font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {story.procedureName}
            </span>
            <span className="text-graphite-muted flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{story.city}</span>
            </span>
            <span className="text-graphite-muted flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.postOpElapsed}</span>
            </span>
            <span className="badge-medical-soft text-[10px] font-bold px-2.5 py-0.5 rounded-full inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-medical-primary" />
              <span>Paciente Verificada</span>
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-800 leading-tight">
            La experiencia de {story.patientName}: {story.procedureName}
          </h1>

          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(story.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" aria-hidden="true" />
            ))}
            <span className="text-xs font-bold text-navy-800 ml-2">5.0 / 5.0 Excelencia Quirúrgica</span>
          </div>
        </header>

        {/* Highlighted Quote Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-cream-50 border border-cream-300 relative overflow-hidden">
          <p className="font-serif text-xl sm:text-2xl text-navy-800 italic leading-relaxed">
            &ldquo;{story.quote}&rdquo;
          </p>
          <span className="text-xs font-semibold text-graphite-muted block mt-4">
            — {story.patientName}, {story.age} años ({story.city})
          </span>
        </div>

        {/* Multi-stage Narrative */}
        <div className="space-y-6 pt-4">
          <h2 className="font-serif text-2xl font-bold text-navy-800">
            La ruta de transformación de {story.patientName}
          </h2>

          <div className="space-y-6">
            {journeyStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-2"
              >
                <h3 className="font-serif text-lg font-bold text-medical-primary">
                  {stage.title}
                </h3>
                <p className="text-sm text-graphite-body leading-relaxed">
                  {stage.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Card */}
        <div className="p-8 rounded-3xl bg-navy-900 text-white text-center space-y-4">
          <span className="badge-medical-soft text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
            Inicia tu Consulta Médica
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            ¿Te gustaría una valoración para {story.procedureName}?
          </h3>
          <p className="text-xs sm:text-sm text-cream-200/90 max-w-lg mx-auto">
            El Dr. Andrés Gómez evalúa tu anatomía con rigor y honestidad en el consultorio 805 de Torre Zentai Bogotá.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/agendar" className="btn-primary py-3 px-6 text-xs inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Reserva tu cita de valoración</span>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent(`Hola, estuve leyendo el testimonio de ${story.patientName} sobre ${story.procedureName} y quisiera agendar una valoración con el Dr. Andrés Gómez.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary py-3 px-6 text-xs inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 border-white/20"
            >
              <MessageCircle className="w-4 h-4 text-accent-whatsapp" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryDetailPage;
