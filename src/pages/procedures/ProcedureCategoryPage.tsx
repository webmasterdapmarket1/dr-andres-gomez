import React, { useMemo } from 'react';
import { Link, useParams, useSearchParams, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  ShieldCheck,
  Calendar,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcedureCard from './ProcedureCard';
import IntimateNoticeCard from './IntimateNoticeCard';
import { getProceduresByCategory, normalizeCategorySlug } from '@/data/procedures';
import type { ProcedureCategory, BodySubcategory } from '@/types/procedure';

interface CategoryConfig {
  kicker: string;
  title: string;
  subtitle: string;
  doctorQuote: string;
  categoryLabel: string;
}

const CATEGORY_CONFIGS: Record<ProcedureCategory, CategoryConfig> = {
  'cirugia-corporal': {
    kicker: 'Cirugía de Alta Precisión Anatómica',
    title: 'Cirugía Corporal de Alta Definición y *contorno* anatómico',
    subtitle: 'Intervenciones diseñadas para remodelar la silueta respetando las proporciones naturales del cuerpo, integrando tecnologías de vanguardia como Lipo Vaser, Láser, Tensamax y Microaire.',
    doctorQuote: 'El contorno corporal contemporáneo no consiste en extraer la mayor cantidad de grasa posible, sino en esculpir las transiciones musculares respetando la biomecánica y la retracción cutánea de cada paciente.',
    categoryLabel: 'Cirugía Corporal',
  },
  'cirugia-facial': {
    kicker: 'Armonización Estructural y Rejuvenecimiento',
    title: 'Cirugía Facial y Armonización con *precisión* milimétrica',
    subtitle: 'Procedimientos faciales que buscan restaurar la juventud y balance de las facciones preservando la expresividad natural y evitando resultados artificiales o sobrecorregidos.',
    doctorQuote: 'En cirugía facial, un milímetro marca la diferencia entre un resultado imperceptible y uno artificial. La preservación de los vectores naturales de tensión y la tecnología ultrasónica garantizan recuperaciones nobles y resultados armónicos.',
    categoryLabel: 'Cirugía Facial',
  },
  'cirugia-intima': {
    kicker: 'Ginecoestética y Reconstrucción Funcional',
    title: 'Cirugía Íntima Femenina con Rigor y *confidencialidad* absoluta',
    subtitle: 'Cirugía estética y reconstructiva de la zona íntima enfocada en restituir el confort funcional, la simetría anatómica y la seguridad personal bajo los más estrictos estándares de bioética.',
    doctorQuote: 'La cirugía íntima es ante todo una restauración de la calidad de vida y la comodidad de la mujer. Abordamos cada caso desde el respeto absoluto, la ciencia médica y la privacidad más rigurosa.',
    categoryLabel: 'Cirugía Íntima',
  },
};

export interface ProcedureCategoryPageProps {
  categorySlug?: ProcedureCategory;
}

export const ProcedureCategoryPage: React.FC<ProcedureCategoryPageProps> = ({
  categorySlug: propCategorySlug,
}) => {
  const { categoria } = useParams<{ categoria: string }>();
  const [searchParams, setSearchParams] = useSearchParams();

  // Normalize category slug
  const activeCategory = propCategorySlug || normalizeCategorySlug(categoria || '');

  if (!activeCategory || !CATEGORY_CONFIGS[activeCategory]) {
    return <Navigate to="/procedimientos" replace />;
  }

  const config = CATEGORY_CONFIGS[activeCategory];
  const allCategoryProcedures = getProceduresByCategory(activeCategory);

  // Subcategory filter for cirugia-corporal
  const currentSubfilter = (searchParams.get('filtro') as BodySubcategory | null) || 'all';

  const filteredProcedures = useMemo(() => {
    if (activeCategory !== 'cirugia-corporal' || currentSubfilter === 'all') {
      return allCategoryProcedures;
    }
    return allCategoryProcedures.filter(
      (p) => p.bodySubcategory === currentSubfilter || p.subcategory === currentSubfilter
    );
  }, [allCategoryProcedures, activeCategory, currentSubfilter]);

  const handleSubfilterChange = (subfilter: BodySubcategory | 'all') => {
    if (subfilter === 'all') {
      searchParams.delete('filtro');
      setSearchParams(searchParams, { replace: true });
    } else {
      searchParams.set('filtro', subfilter);
      setSearchParams(searchParams, { replace: true });
    }
  };

  const contornoCount = allCategoryProcedures.filter(
    (p) => p.bodySubcategory === 'contorno-corporal' || p.subcategory === 'contorno-corporal'
  ).length;

  const mamariaCount = allCategoryProcedures.filter(
    (p) => p.bodySubcategory === 'cirugia-mamaria' || p.subcategory === 'cirugia-mamaria'
  ).length;

  const whatsappUrl = `https://wa.me/573123255900?text=${encodeURIComponent(
    `Hola Dr. Andrés Gómez, deseo agendar una valoración médica para procedimientos de ${config.categoryLabel} en Torre Zentai.`
  )}`;

  return (
    <div className="min-h-screen bg-cream-100 text-navy-800 font-sans pb-20">
      <div className="pt-12 sm:pt-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Ruta de navegación" className="mb-6">
          <ol className="flex items-center gap-2 text-xs sm:text-sm text-graphite-muted">
            <li>
              <Link to="/" className="hover:text-medical-primary transition-colors">
                Inicio
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-cream-300" />
            </li>
            <li>
              <Link to="/procedimientos" className="hover:text-medical-primary transition-colors">
                Procedimientos
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-cream-300" />
            </li>
            <li className="text-navy-900 font-semibold" aria-current="page">
              {config.categoryLabel}
            </li>
          </ol>
        </nav>

        {/* Editorial Header */}
        <header className="mb-10 text-center">
          <SectionHeading
            kicker={config.kicker}
            title={config.title}
            subtitle={config.subtitle}
            align="center"
            className="mb-8"
          />
        </header>

        {/* Doctor Surgical Philosophy Callout Box */}
        <div className="bg-white rounded-card p-6 sm:p-8 border border-cream-300 shadow-card mb-12 flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0 relative">
            <img
              src="/images/dr-adndres-gomez-cirujano-plastico-ccoym-2017-min.webp"
              alt="Dr. Andrés Gómez en Quirófano"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top bg-cream-100 border-2 border-medical-primary shadow-sm"
              loading="lazy"
            />
            <div className="absolute -bottom-1 -right-1 bg-medical-primary text-white p-1 rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <blockquote className="font-serif italic text-base sm:text-lg text-navy-800 leading-relaxed mb-3">
              &ldquo;{config.doctorQuote}&rdquo;
            </blockquote>
            <p className="text-xs uppercase font-bold tracking-wider text-medical-primary font-sans">
              Dr. Andrés Gómez
            </p>
            <p className="text-xs text-graphite-muted">
              Especialista en Cirugía Plástica, Estética y Reconstructiva • Miembro SCCP
            </p>
          </div>
        </div>

        {/* Bioethics Notice Card for Intimate Surgery */}
        {activeCategory === 'cirugia-intima' && (
          <div className="mb-12">
            <IntimateNoticeCard />
          </div>
        )}

        {/* Interactive Subcategory Filter (Exclusively for cirugia-corporal) */}
        {activeCategory === 'cirugia-corporal' && (
          <div className="bg-white rounded-card p-4 sm:p-6 border border-cream-300 shadow-card mb-10">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <span className="text-xs font-bold uppercase tracking-kicker text-navy-800 font-sans">
                Filtrar por Área Anatómica:
              </span>
              <span className="text-xs text-graphite-muted">
                Mostrando <strong>{filteredProcedures.length}</strong> de {allCategoryProcedures.length} procedimientos
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleSubfilterChange('all')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  currentSubfilter === 'all'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Todos los Corporales ({allCategoryProcedures.length})
              </button>

              <button
                onClick={() => handleSubfilterChange('contorno-corporal')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  currentSubfilter === 'contorno-corporal'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Contorno Corporal ({contornoCount})
              </button>

              <button
                onClick={() => handleSubfilterChange('cirugia-mamaria')}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  currentSubfilter === 'cirugia-mamaria'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Cirugía Mamaria ({mamariaCount})
              </button>
            </div>
          </div>
        )}

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {filteredProcedures.map((procedure) => (
            <ProcedureCard key={procedure.id} procedure={procedure} />
          ))}
        </div>

        {/* Results / Before-After Callout for Corporal and Facial */}
        {activeCategory !== 'cirugia-intima' && (
          <div className="bg-cream-50 rounded-card p-6 sm:p-8 border border-cream-300 shadow-card mb-16 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-medical-soft text-medical-softText mb-2">
                <ShieldCheck className="w-3.5 h-3.5 text-medical-primary" />
                Control de Acceso +18
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800 mb-2">
                Galería de Casos Clínicos y Resultados
              </h3>
              <p className="text-sm text-graphite-body max-w-2xl leading-relaxed">
                Visualiza transformaciones reales de pacientes operados por el Dr. Andrés Gómez. Por regulación legal y respeto a la privacidad médica, el acceso a la galería requiere confirmación de mayoría de edad.
              </p>
            </div>
            <Link
              to={`/resultados/${activeCategory}`}
              className="btn-secondary whitespace-nowrap shrink-0 flex items-center gap-2 text-xs sm:text-sm"
            >
              <span>Ver Casos de {config.categoryLabel}</span>
              <ExternalLink className="w-4 h-4 text-medical-primary" />
            </Link>
          </div>
        )}

        {/* Closing Consultation CTA Banner */}
        <section className="bg-navy-900 rounded-card p-8 sm:p-12 text-cream-100 shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-kicker text-medical-soft mb-2 inline-block font-sans">
              ATENCIÓN PERSONALIZADA EN TORRE ZENTAI
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
              ¿Deseas saber si eres candidato para una cirugía de <em className="italic text-medical-soft">{config.categoryLabel}</em>?
            </h2>
            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed mb-8">
              Agenda tu consulta diagnóstica presencial en Torre Zentai, Bogotá, o solicita una teleconsulta guiada si resides fuera de la ciudad.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/agendar?categoria=${activeCategory}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-medical-primary text-white hover:bg-medical-hover transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Valoración Presencial</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consulta Rápida por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProcedureCategoryPage;
