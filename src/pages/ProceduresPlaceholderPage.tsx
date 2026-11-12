import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronRight,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCEDURE_CATEGORIES } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export const ProceduresPlaceholderPage: React.FC = () => {
  const { categoria, slug } = useParams<{ categoria?: string; slug?: string }>();

  // Find category and procedure if route parameters are present
  const currentCategory = PROCEDURE_CATEGORIES.find(
    (c) => c.slug === categoria || c.id === categoria
  );

  const currentProcedure = currentCategory?.procedures.find((p) => p.slug === slug);

  // If viewing a specific procedure
  if (currentProcedure && currentCategory) {
    return (
      <div className="py-10 lg:py-16 space-y-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-graphite-muted">
          <Link to="/" className="hover:text-medical-primary">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/procedimientos" className="hover:text-medical-primary">Procedimientos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={currentCategory.href} className="hover:text-medical-primary">{currentCategory.name}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-navy-800">{currentProcedure.name}</span>
        </div>

        {/* Procedure Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-medical-soft text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              {currentCategory.name}
            </span>
            {currentProcedure.badge && (
              <span className="bg-medical-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {currentProcedure.badge}
              </span>
            )}
            {currentCategory.id === 'cirugia-intima' && (
              <span className="bg-cream-200 text-navy-800 text-xs font-bold px-3 py-1 rounded-full inline-flex items-center gap-1">
                <Lock className="w-3 h-3 text-medical-primary" />
                <span>100% Confidencial</span>
              </span>
            )}
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-navy-800">
            {currentProcedure.name}
          </h1>

          <p className="text-base sm:text-lg text-graphite-body leading-relaxed max-w-3xl">
            {currentProcedure.description}
          </p>
        </div>

        {/* Clinical Highlights Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-2">
            <ShieldCheck className="w-6 h-6 text-medical-primary" />
            <h3 className="font-serif text-lg font-bold text-navy-800">Quirófano Acreditado</h3>
            <p className="text-xs text-graphite-body leading-relaxed">
              Procedimiento realizado exclusivamente en salas hospitalarias habilitadas con monitoreo anestésico permanente.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-2">
            <Sparkles className="w-6 h-6 text-medical-primary" />
            <h3 className="font-serif text-lg font-bold text-navy-800">Tecnología de Vanguardia</h3>
            <p className="text-xs text-graphite-body leading-relaxed">
              Protocolos con tecnología de mínima incisión, retracción tisular y preservación anatómica de tejidos.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-2">
            <CheckCircle2 className="w-6 h-6 text-medical-primary" />
            <h3 className="font-serif text-lg font-bold text-navy-800">Recuperación Asistida</h3>
            <p className="text-xs text-graphite-body leading-relaxed">
              Acompañamiento 1 a 1 con la Jefa de Enfermería Dora Calderón Vega y guardia postoperatoria 24/7.
            </p>
          </div>
        </div>

        {/* Booking CTA Banner */}
        <div className="p-8 rounded-3xl bg-navy-900 text-white text-center space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Agenda tu valoración para {currentProcedure.name}
          </h2>
          <p className="text-xs sm:text-sm text-cream-200/90 max-w-xl mx-auto leading-relaxed">
            El Dr. Andrés Gómez analizará tu caso en consulta diagnóstica personalizada en el Consultorio 805 de Torre Zentai Bogotá o mediante teleconsulta médica guiada.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/agendar"
              className="btn-primary py-3.5 px-8 text-sm font-bold inline-flex items-center gap-2 shadow-floating"
            >
              <Calendar className="w-4 h-4" />
              <span>Reserva tu cita de valoración</span>
            </Link>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent(`Hola Dr. Andrés Gómez, quisiera recibir información y agendar valoración para ${currentProcedure.name}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-6 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-accent-whatsapp" />
              <span>Preguntar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // If viewing a category index (e.g. /procedimientos/cirugia-corporal)
  if (currentCategory) {
    return (
      <div className="py-10 lg:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs text-graphite-muted">
          <Link to="/" className="hover:text-medical-primary">Inicio</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/procedimientos" className="hover:text-medical-primary">Procedimientos</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="font-semibold text-navy-800">{currentCategory.name}</span>
        </div>

        <SectionHeading
          kicker={`Catálogo de Especialidad (${currentCategory.count} procedimientos)`}
          title={`${currentCategory.name} con *precisión* quirúrgica y tecnología avanzada`}
          subtitle={currentCategory.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategory.procedures.map((proc) => (
            <Link
              key={proc.slug}
              to={proc.href}
              className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-bold text-navy-800 group-hover:text-medical-primary transition-colors">
                    {proc.name}
                  </h3>
                  {proc.badge && (
                    <span className="badge-medical-soft text-[10px] font-bold px-2 py-0.5 rounded">
                      {proc.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs text-graphite-body leading-relaxed">
                  {proc.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-cream-200/60 flex items-center justify-between text-xs font-semibold text-medical-primary">
                <span>Ver ficha del procedimiento</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Master Procedures Catalog (/procedimientos)
  return (
    <div className="py-10 lg:py-16 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Catálogo Quirúrgico Integral"
        title="Los 28 procedimientos quirúrgicos con *excelencia* y rigor bioético"
        subtitle="Explora nuestras tres áreas quirúrgicas especializadas: Cirugía Corporal, Facial e Íntima en Bogotá."
      />

      <div className="space-y-12">
        {PROCEDURE_CATEGORIES.map((cat) => (
          <div key={cat.id} className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-cream-300">
              <div>
                <h2 className="font-serif text-2xl font-bold text-navy-800">
                  {cat.name} ({cat.count})
                </h2>
                <p className="text-xs text-graphite-muted">{cat.description}</p>
              </div>
              <Link
                to={cat.href}
                className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
              >
                <span>Ver categoría completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cat.procedures.map((proc) => (
                <Link
                  key={proc.slug}
                  to={proc.href}
                  className="p-5 rounded-2xl bg-white border border-cream-300 shadow-sm hover:shadow-card transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-serif text-lg font-bold text-navy-800 group-hover:text-medical-primary transition-colors">
                        {proc.name}
                      </h3>
                      {proc.badge && (
                        <span className="badge-medical-soft text-[10px] font-bold px-2 py-0.5 rounded">
                          {proc.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-graphite-body line-clamp-2">
                      {proc.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-cream-200/50 flex items-center justify-between text-xs font-semibold text-medical-primary">
                    <span>Consultar detalles</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProceduresPlaceholderPage;
