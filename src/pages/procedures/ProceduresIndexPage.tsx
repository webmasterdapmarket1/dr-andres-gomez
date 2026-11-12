import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  X,
  Calendar,
  MessageCircle,
  MapPin,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { GeneralSurgery } from '@healthicons/react';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcedureCard from './ProcedureCard';
import IntimateNoticeCard from './IntimateNoticeCard';
import { getAllProcedures } from '@/data/procedures';
import type { ProcedureCategory } from '@/types/procedure';

export const ProceduresIndexPage: React.FC = () => {
  const allProcedures = getAllProcedures();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProcedureCategory | 'all'>('all');

  const filteredProcedures = useMemo(() => {
    return allProcedures.filter((proc) => {
      const matchesCategory =
        selectedCategory === 'all' || proc.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const inName = proc.name.toLowerCase().includes(q);
      const inSubtitle = proc.subtitle.toLowerCase().includes(q);
      const inDesc = proc.shortDescription.toLowerCase().includes(q);
      const inOverview = proc.overview.toLowerCase().includes(q);
      const inAliases = proc.aliases?.some((a) => a.toLowerCase().includes(q));

      return inName || inSubtitle || inDesc || inOverview || inAliases;
    });
  }, [allProcedures, selectedCategory, searchQuery]);

  const corporalCount = allProcedures.filter((p) => p.category === 'cirugia-corporal').length;
  const facialCount = allProcedures.filter((p) => p.category === 'cirugia-facial').length;
  const intimaCount = allProcedures.filter((p) => p.category === 'cirugia-intima').length;

  const whatsappGeneralUrl = `https://wa.me/573123255900?text=${encodeURIComponent(
    'Hola Dr. Andrés Gómez, deseo agendar una valoración diagnóstica para cirugía plástica en Torre Zentai.'
  )}`;

  return (
    <div className="min-h-screen bg-cream-100 text-navy-800 font-sans pb-20">
      {/* Editorial Hero Header */}
      <header className="pt-12 sm:pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            <li className="text-navy-900 font-semibold" aria-current="page">
              Procedimientos
            </li>
          </ol>
        </nav>

        <SectionHeading
          kicker="Catálogo Quirúrgico de Vanguardia"
          title="28 Procedimientos Diseñados para una *armonía* natural"
          subtitle="Cirugía plástica de alta definición, protocolos hospitalarios acreditados y tecnología Vaser/Láser en Torre Zentai, Bogotá."
          align="center"
          className="mb-8"
        />

        {/* Trust Proof Capsules Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-semibold text-navy-800 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 shadow-sm">
            <GeneralSurgery className="w-4 h-4 text-medical-primary" />
            28 Procedimientos Quirúrgicos
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-medical-primary" />
            15 Cirugía Corporal
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-medical-primary" />
            7 Cirugía Facial
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-medical-primary" />
            6 Cirugía Íntima
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-cream-300 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-medical-primary" />
            Torre Zentai, Bogotá
          </span>
        </div>

        {/* 3 Featured Category Jump Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Corporal */}
          <div className="bg-white rounded-card p-6 sm:p-7 border border-cream-300 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-kicker text-medical-primary font-sans">
                  Especialidad Quirúrgica
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cream-50 text-navy-800 border border-cream-300">
                  15 Cirugías
                </span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-navy-800 mb-2">
                Cirugía Corporal
              </h2>
              <p className="text-sm text-graphite-body mb-4 leading-relaxed">
                Contorno tridimensional y cirugía mamaria de alta definición con tecnologías Vaser, Láser, Tensamax y Microaire.
              </p>
              <ul className="space-y-1.5 text-xs text-graphite-muted mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>10 Procedimientos de Contorno Corporal HD</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>5 Procedimientos de Cirugía Mamaria</span>
                </li>
              </ul>
            </div>
            <Link
              to="/procedimientos/cirugia-corporal"
              className="btn-secondary w-full text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Explorar Cirugía Corporal</span>
              <ChevronRight className="w-4 h-4 text-medical-primary" />
            </Link>
          </div>

          {/* Facial */}
          <div className="bg-white rounded-card p-6 sm:p-7 border border-cream-300 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-kicker text-medical-primary font-sans">
                  Especialidad Quirúrgica
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cream-50 text-navy-800 border border-cream-300">
                  7 Cirugías
                </span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-navy-800 mb-2">
                Cirugía Facial
              </h2>
              <p className="text-sm text-graphite-body mb-4 leading-relaxed">
                Armonización estructural milimétrica con Rinoplastia Ultrasónica, Blefaroplastia y rejuvenecimiento cérvico-facial.
              </p>
              <ul className="space-y-1.5 text-xs text-graphite-muted mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>Rinoplastia Ultrasónica de Mínima Inflamación</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>Lifting Facial SMAS & Blefaroplastia Láser</span>
                </li>
              </ul>
            </div>
            <Link
              to="/procedimientos/cirugia-facial"
              className="btn-secondary w-full text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Explorar Cirugía Facial</span>
              <ChevronRight className="w-4 h-4 text-medical-primary" />
            </Link>
          </div>

          {/* Íntima */}
          <div className="bg-white rounded-card p-6 sm:p-7 border border-cream-300 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-kicker text-medical-primary font-sans">
                  Especialidad Quirúrgica
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-cream-50 text-navy-800 border border-cream-300">
                  6 Cirugías
                </span>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-navy-800 mb-2">
                Cirugía Íntima
              </h2>
              <p className="text-sm text-graphite-body mb-4 leading-relaxed">
                Ginecoestética y cirugía reconstructiva con rigor médico, recuperación funcional y protocolo de confidencialidad absoluta.
              </p>
              <ul className="space-y-1.5 text-xs text-graphite-muted mb-6">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>Protección Bioética: Sin Fotos Explícitas Abiertas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-medical-primary shrink-0" />
                  <span>Labioplastia, Vaginoplastia y Tensado Láser</span>
                </li>
              </ul>
            </div>
            <Link
              to="/procedimientos/cirugia-intima"
              className="btn-secondary w-full text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2"
            >
              <span>Explorar Cirugía Íntima</span>
              <ChevronRight className="w-4 h-4 text-medical-primary" />
            </Link>
          </div>
        </div>

        {/* Interactive Search & Filter Toolbar */}
        <section aria-labelledby="catalog-filters-heading" className="mb-10">
          <h2 id="catalog-filters-heading" className="sr-only">
            Filtros y buscador de procedimientos
          </h2>
          <div className="bg-white rounded-card p-4 sm:p-6 border border-cream-300 shadow-card">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-4">
              {/* Search input */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-graphite-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Buscar procedimiento (ej. Lipo Láser, Rinoplastia, Aumento de Senos)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-input border border-cream-300 bg-cream-50/50 text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary/30 focus:border-medical-primary transition-all"
                  aria-label="Buscar procedimientos"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-graphite-muted hover:text-navy-800 p-0.5"
                    aria-label="Limpiar búsqueda"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Counter feedback */}
              <div className="text-xs text-graphite-muted font-medium shrink-0 self-center md:self-auto">
                Mostrando <strong className="text-navy-800">{filteredProcedures.length}</strong> de{' '}
                {allProcedures.length} procedimientos
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-cream-200">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Todos los Procedimientos ({allProcedures.length})
              </button>

              <button
                onClick={() => setSelectedCategory('cirugia-corporal')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'cirugia-corporal'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Cirugía Corporal ({corporalCount})
              </button>

              <button
                onClick={() => setSelectedCategory('cirugia-facial')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'cirugia-facial'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Cirugía Facial ({facialCount})
              </button>

              <button
                onClick={() => setSelectedCategory('cirugia-intima')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === 'cirugia-intima'
                    ? 'bg-navy-800 text-white shadow-sm'
                    : 'bg-cream-50 text-graphite-body hover:bg-cream-200/70 border border-cream-300'
                }`}
              >
                Cirugía Íntima ({intimaCount})
              </button>
            </div>
          </div>
        </section>

        {/* Confidentiality Notice if Intimate filter is active */}
        {selectedCategory === 'cirugia-intima' && (
          <div className="mb-10">
            <IntimateNoticeCard />
          </div>
        )}

        {/* Procedures Grid */}
        {filteredProcedures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {filteredProcedures.map((procedure) => (
              <ProcedureCard key={procedure.id} procedure={procedure} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-card p-10 text-center border border-cream-300 shadow-card mb-16 max-w-xl mx-auto">
            <Search className="w-10 h-10 text-graphite-muted mx-auto mb-3 opacity-60" />
            <h3 className="font-serif text-xl font-semibold text-navy-800 mb-2">
              No se encontraron procedimientos
            </h3>
            <p className="text-sm text-graphite-body mb-5">
              No hay coincidencias para &quot;{searchQuery}&quot; en la categoría seleccionada. Intente con otro término o restablezca los filtros.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="btn-primary inline-flex items-center gap-2 text-xs sm:text-sm"
            >
              <span>Restablecer Filtros</span>
            </button>
          </div>
        )}

        {/* Closing Torre Zentai Consultation CTA */}
        <section className="bg-navy-900 rounded-card p-8 sm:p-12 text-cream-100 shadow-elevated relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-kicker text-medical-soft mb-2 inline-block font-sans">
              VALORACIÓN MÉDICA PERSONALIZADA
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
              Toda transformación comienza con una valoración diagnóstica <em className="italic text-medical-soft">honesta</em>
            </h2>
            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed mb-8">
              En consultorios privados en Torre Zentai, Bogotá, el Dr. Andrés Gómez analiza tu estructura anatómica, historia clínica y expectativas para estructurar un plan quirúrgico a tu medida.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/agendar"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-medical-primary text-white hover:bg-medical-hover transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Reservar Cita Presencial</span>
              </Link>

              <a
                href={whatsappGeneralUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chatear por WhatsApp (+57 312 325 5900)</span>
              </a>
            </div>
          </div>
        </section>
      </header>
    </div>
  );
};

export default ProceduresIndexPage;
