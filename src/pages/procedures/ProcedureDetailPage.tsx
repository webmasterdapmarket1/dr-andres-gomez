import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  MapPin,
  Sparkles,
  Zap,
  Building2,
  Lock,
} from 'lucide-react';
import { Syringe, Walking, Hospitalized } from '@healthicons/react';
import SectionHeading from '@/components/ui/SectionHeading';
import TechnicalModuleCard from './TechnicalModuleCard';
import ProcedureCard from './ProcedureCard';
import IntimateNoticeCard from './IntimateNoticeCard';
import { getProcedureBySlug, getRelatedProcedures } from '@/data/procedures';
import { siteConfig } from '@/data/siteConfig';
import type { Procedure, ProcedureCategory } from '@/types/procedure';

export interface ProcedureDetailPageProps {
  procedure?: Procedure;
}

const CATEGORY_NAMES: Record<ProcedureCategory, string> = {
  'cirugia-corporal': 'Cirugía Corporal',
  'cirugia-facial': 'Cirugía Facial',
  'cirugia-intima': 'Cirugía Íntima',
};

export const ProcedureDetailPage: React.FC<ProcedureDetailPageProps> = ({
  procedure: propProcedure,
}) => {
  const { categoria, slug } = useParams<{ categoria: string; slug: string }>();

  // Resolve procedure by prop or URL params
  const procedure = propProcedure || (slug ? getProcedureBySlug(slug) : undefined);

  // Open first FAQ by default
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  if (!procedure) {
    return <Navigate to={`/procedimientos/${categoria || ''}`} replace />;
  }

  const categoryName = CATEGORY_NAMES[procedure.category] || 'Procedimientos';
  const relatedProcedures = getRelatedProcedures(procedure, 3);

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
    return categoryName;
  };

  const whatsappConsultationUrl = `https://wa.me/573123255900?text=${encodeURIComponent(
    procedure.isSensitiveIntimate
      ? `Hola Dr. Andrés Gómez, deseo agendar una consulta médica privada y confidencial sobre ${procedure.name} en Torre Zentai.`
      : `Hola Dr. Andrés Gómez, deseo agendar una valoración diagnóstica para ${procedure.name} en Torre Zentai.`
  )}`;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-cream-100 text-navy-800 font-sans pb-20">
      {/* ==================================================================== */}
      {/* BLOQUE 01: BREADCRUMB SEMÁNTICO                                      */}
      {/* ==================================================================== */}
      <div className="pt-8 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <nav aria-label="Ruta de navegación" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-graphite-muted">
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
            <li>
              <Link
                to={`/procedimientos/${procedure.category}`}
                className="hover:text-medical-primary transition-colors"
              >
                {categoryName}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-cream-300" />
            </li>
            <li className="text-navy-900 font-semibold truncate max-w-xs" aria-current="page">
              {procedure.name}
            </li>
          </ol>
        </nav>
      </div>

      {/* ==================================================================== */}
      {/* BLOQUE 02: HERO & CABECERA DEL PROCEDIMIENTO                         */}
      {/* ==================================================================== */}
      <header className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16">
        <div className="bg-white rounded-card p-6 sm:p-10 md:p-12 border border-cream-300 shadow-card relative overflow-hidden">
          {/* Subtle decorative background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-medical-soft/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            {/* Badges Row */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-cream-50 text-navy-800 border border-cream-300">
                {getSubcategoryLabel()}
              </span>

              {procedure.isSensitiveIntimate ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-medical-softText bg-medical-soft">
                  <ShieldCheck className="w-4 h-4 text-medical-primary" />
                  Protocolo Bioético Confidencial
                </span>
              ) : procedure.technicalModules && procedure.technicalModules.length > 0 ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-medical-softText bg-medical-soft">
                  <Zap className="w-3.5 h-3.5 text-medical-primary" />
                  Sinergia Tensamax + Retraction + Microaire
                </span>
              ) : null}

              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-graphite-muted hover:text-medical-primary bg-white border border-cream-200 transition-colors"
                title="Ver dirección de la clínica en Google Maps"
              >
                <Building2 className="w-3.5 h-3.5 text-medical-primary" />
                Torre Zentai, Consultorio 805
              </a>
            </div>

            {/* Subtitle kicker */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-medical-primary font-sans mb-2">
              {procedure.subtitle}
            </p>

            {/* Main H1 Title */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-800 leading-tight mb-4">
              {procedure.name}
            </h1>

            {/* Short Description */}
            <p className="text-base sm:text-lg text-graphite-body leading-relaxed mb-8 max-w-3xl">
              {procedure.shortDescription}
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/agendar?procedimiento=${procedure.slug}`}
                className="btn-primary inline-flex items-center gap-2 text-sm font-semibold shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Solicitar Valoración Diagnóstica</span>
              </Link>

              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consulta Rápida por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Sections */}
      <main className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        {/* ================================================================== */}
        {/* BIOETHICS NOTICE (Exclusively for Intimate Surgery)                */}
        {/* ================================================================== */}
        {procedure.isSensitiveIntimate && (
          <section aria-label="Aviso de Confidencialidad Bioética">
            <IntimateNoticeCard />
          </section>
        )}

        {/* ================================================================== */}
        {/* BLOQUE 03: OVERVIEW CLÍNICO & BENEFICIOS CLAVE                    */}
        {/* ================================================================== */}
        <section id="overview-section" className="bg-white rounded-card p-6 sm:p-10 border border-cream-300 shadow-card">
          <SectionHeading
            kicker="Descripción Clínica Especializada"
            title="¿En qué consiste el *procedimiento*?"
            subtitle="Criterio quirúrgico, técnica anatómica y objetivos médicos definidos por el Dr. Andrés Gómez."
            className="mb-8"
          />

          <p className="text-base sm:text-lg text-graphite-body leading-relaxed mb-10">
            {procedure.overview}
          </p>

          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800 mb-6">
            Beneficios Clave del Procedimiento
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {procedure.keyBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 bg-cream-50 p-4 sm:p-5 rounded-xl border border-cream-200"
              >
                <CheckCircle2 className="w-5 h-5 text-medical-primary shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base font-medium text-navy-800 leading-snug">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================================== */}
        {/* BLOQUE 04: MÓDULOS TÉCNICOS (Tensamax, Retraction, Microaire)       */}
        {/* ================================================================== */}
        {procedure.technicalModules && procedure.technicalModules.length > 0 && (
          <section id="tech-modules-section">
            <SectionHeading
              kicker="Tecnología Quirúrgica de Vanguardia"
              title="Sinergia Tecnológica de *precisión* integrada"
              subtitle="El Dr. Andrés Gómez combina tres plataformas tecnológicas de estándar internacional para maximizar la retracción cutánea, acelerar el drenaje linfático y optimizar la viabilidad tisular."
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {procedure.technicalModules.map((module) => (
                <TechnicalModuleCard key={module.id} module={module} />
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* BLOQUE 05: PERFIL DEL CANDIDATO IDEAL                              */}
        {/* ================================================================== */}
        <section id="candidate-section" className="bg-white rounded-card p-6 sm:p-10 border border-cream-300 shadow-card">
          <SectionHeading
            kicker="Criterio de Selección Médica"
            title="¿Para quién está *indicado* este procedimiento?"
            subtitle="Pautas clínicas orientativas de candidatura. La valoración médica individual determina la idoneidad quirúrgica."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
            {procedure.candidateProfile.map((profile, idx) => (
              <div
                key={idx}
                className="bg-cream-50 p-5 rounded-xl border border-cream-200 flex flex-col justify-between"
              >
                <div className="flex items-center gap-2 mb-3 text-xs uppercase font-bold tracking-wider text-medical-primary font-sans">
                  <Sparkles className="w-4 h-4" />
                  <span>Criterio {idx + 1}</span>
                </div>
                <p className="text-sm text-graphite-body leading-relaxed">
                  {profile}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-cream-100/70 p-4 rounded-xl border border-cream-300 text-xs sm:text-sm text-graphite-body flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
            <span>
              <strong>Nota Bioética:</strong> Toda candidatura definitiva se determina en la consulta médica presencial mediante examen físico, análisis de elasticidad dérmica y revisión de antecedentes paraclínicos.
            </span>
          </div>
        </section>

        {/* ================================================================== */}
        {/* BLOQUE 06: CUADRÍCULA DE MÉTRICAS CLÍNICAS                          */}
        {/* ================================================================== */}
        <section id="metrics-section">
          <SectionHeading
            kicker="Datos Quirúrgicos Relevantes"
            title="Ficha Técnica y *métricas* clínicas del procedimiento"
            subtitle="Tiempos estimados y condiciones hospitalarias de la intervención en quirófanos certificados."
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Anestesia */}
            <div className="bg-white rounded-card p-6 border border-cream-300 shadow-card hover:border-medical-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center mb-4 text-medical-primary">
                <Syringe className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-graphite-muted block mb-1 font-sans">
                Tipo de Anestesia
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-navy-800 mb-2">
                {procedure.clinicalMetrics.anesthesia}
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed">
                Administrada y monitoreada por médico especialista anestesiólogo de staff.
              </p>
            </div>

            {/* Duración */}
            <div className="bg-white rounded-card p-6 border border-cream-300 shadow-card hover:border-medical-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center mb-4 text-medical-primary">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-graphite-muted block mb-1 font-sans">
                Duración Quirúrgica
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-navy-800 mb-2">
                {procedure.clinicalMetrics.duration}
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed">
                Tiempo quirúrgico neto de precisión en quirófano de alta tecnología.
              </p>
            </div>

            {/* Recuperación */}
            <div className="bg-white rounded-card p-6 border border-cream-300 shadow-card hover:border-medical-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center mb-4 text-medical-primary">
                <Walking className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-graphite-muted block mb-1 font-sans">
                Incapacidad y Retorno
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-navy-800 mb-2">
                {procedure.clinicalMetrics.recovery}
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed">
                Reincorporación gradual a labores habituales de oficina y actividades no extenuantes.
              </p>
            </div>

            {/* Hospitalización */}
            <div className="bg-white rounded-card p-6 border border-cream-300 shadow-card hover:border-medical-primary/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-medical-soft flex items-center justify-center mb-4 text-medical-primary">
                <Hospitalized className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-graphite-muted block mb-1 font-sans">
                Estadía Hospitalaria
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-navy-800 mb-2">
                {procedure.clinicalMetrics.hospitalStay}
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed">
                Alta programada tras recuperación anestésica o monitorización en sala especializada.
              </p>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* BLOQUE 07: PREPARACIÓN Y CUIDADOS POSTOPERATORIOS                  */}
        {/* ================================================================== */}
        <section id="care-section">
          <SectionHeading
            kicker="Seguridad y Acompañamiento del Paciente"
            title="Protocolo Preoperatorio y *cuidados* en casa"
            subtitle="Normas clínicas indispensables para asegurar una intervención segura y una recuperación ágil y confortable."
            className="mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Preoperatorio */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-cream-300 shadow-card">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-medical-soft flex items-center justify-center text-medical-primary font-bold text-xs">
                  1
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800">
                  Preparación Preoperatoria
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-graphite-muted mb-6">
                Indicaciones médicas que debes seguir antes de ingresar a quirófano:
              </p>
              <ul className="space-y-3.5">
                {procedure.preparation.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-graphite-body">
                    <CheckCircle2 className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Postoperatorio */}
            <div className="bg-white rounded-card p-6 sm:p-8 border border-cream-300 shadow-card">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-medical-soft flex items-center justify-center text-medical-primary font-bold text-xs">
                  2
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-navy-800">
                  Cuidados Postoperatorios
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-graphite-muted mb-6">
                Pautas para optimizar el proceso de cicatrización y consolidar el resultado:
              </p>
              <ul className="space-y-3.5">
                {procedure.postCare.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-graphite-body">
                    <CheckCircle2 className="w-4 h-4 text-medical-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ================================================================== */}
        {/* BLOQUE 08: ACORDEÓN DE PREGUNTAS FRECUENTES CLÍNICAS               */}
        {/* ================================================================== */}
        {procedure.faqs && procedure.faqs.length > 0 && (
          <section id="faqs-section" className="bg-white rounded-card p-6 sm:p-10 border border-cream-300 shadow-card">
            <SectionHeading
              kicker="Resolución de Dudas Médicas"
              title="Preguntas Frecuentes sobre la *cirugía*"
              subtitle="Respuestas claras a las principales inquietudes formuladas por pacientes en consulta médica."
              className="mb-8"
            />

            <div className="space-y-4">
              {procedure.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-cream-300 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left bg-cream-50/60 hover:bg-cream-100/60 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-primary/20"
                      aria-expanded={isOpen}
                    >
                      <span className="font-serif text-base sm:text-lg font-semibold text-navy-800">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-medical-primary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-graphite-muted shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white border-t border-cream-200">
                        <p className="text-sm sm:text-base text-graphite-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* BLOQUE 09: PROCEDIMIENTOS RELACIONADOS Y COMBINADOS                */}
        {/* ================================================================== */}
        {relatedProcedures.length > 0 && (
          <section id="related-section">
            <SectionHeading
              kicker="Procedimientos Combinados y Sinergias"
              title="Cirugías Frecuentemente *asociadas*"
              subtitle="Intervenciones complementarias que pueden combinarse de manera segura según valoración médica previa."
              className="mb-8"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {relatedProcedures.map((rel) => (
                <ProcedureCard key={rel.id} procedure={rel} />
              ))}
            </div>
          </section>
        )}

        {/* ================================================================== */}
        {/* BLOQUE 10: BLOQUE DE AGENDAMIENTO & SEDE TORRE ZENTAI              */}
        {/* ================================================================== */}
        <section
          aria-labelledby="cta-heading"
          className="bg-navy-900 rounded-card p-8 sm:p-12 text-cream-100 shadow-elevated relative overflow-hidden"
        >
          <div className="max-w-3xl relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-kicker text-medical-soft font-sans">
                CONSULTA MÉDICA PERSONALIZADA
              </span>
              {procedure.isSensitiveIntimate && (
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-medical-soft bg-navy-800 px-2 py-0.5 rounded-full border border-navy-700">
                  <Lock className="w-3 h-3 text-medical-soft" />
                  Privacidad Garantizada
                </span>
              )}
            </div>

            <h2
              id="cta-heading"
              className="font-serif text-2xl sm:text-4xl font-semibold text-white mb-4 leading-tight"
            >
              Agenda tu valoración diagnóstica para <em className="italic text-medical-soft">{procedure.name}</em>
            </h2>

            <p className="text-sm sm:text-base text-cream-200/90 leading-relaxed mb-6">
              El Dr. Andrés Gómez atiende consultas individuales en su sede de Torre Zentai, Bogotá. Cada paciente recibe un diagnóstico minucioso y una explicación detallada del plan quirúrgico.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs text-cream-200/80 mb-8">
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-navy-800/80 hover:bg-navy-800 text-cream-100 hover:text-white px-3 py-1.5 rounded-lg border border-navy-700 transition-colors"
                title="Ver ubicación de Torre Zentai en Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-medical-soft" />
                Edificio Torre Zentai, Carrera 23 # 124-87, Consultorio 805, Bogotá
              </a>
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-navy-800/80 hover:bg-navy-800 text-cream-100 hover:text-white px-3 py-1.5 rounded-lg border border-navy-700 transition-colors"
                title="Ver ubicación de la Clínica CCOM en Google Maps"
              >
                <Building2 className="w-3.5 h-3.5 text-medical-soft" />
                Respaldo CCOM
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to={`/agendar?procedimiento=${procedure.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-medical-primary text-white hover:bg-medical-hover transition-colors shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Valoración Presencial</span>
              </Link>

              <a
                href={whatsappConsultationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-button text-sm font-semibold bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consulta Confidencial por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProcedureDetailPage;
