import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Award,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  Star,
  ExternalLink,
  ChevronRight,
  Lock,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import HeroToggle, { HeroVariant } from '@/components/ui/HeroToggle';
import { siteConfig } from '@/data/siteConfig';
import { clinicalCases } from '@/data/cases';
import { patientStories } from '@/data/resources';

// GeneralSurgery Medical Icon component matching @healthicons/react or medical SVG
const GeneralSurgeryIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 24C10 16.268 16.268 10 24 10C31.732 10 38 16.268 38 24C38 31.732 31.732 38 24 38"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M24 6V14M6 24H14M24 34V42M20 20L28 28M28 20L20 28"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export const HomePage: React.FC = () => {
  const [heroVariant, setHeroVariant] = useState<HeroVariant>('warm');

  return (
    <div className="space-y-0">
      {/* =========================================================================
          SECTION 1: DYNAMIC HERO (WARM NEUTRAL #F4EFE9 VS NAVY DARK #0E1424)
          ========================================================================= */}
      <section
        id="hero-section"
        className={`relative overflow-hidden transition-colors duration-500 py-12 lg:py-20 ${
          heroVariant === 'dark'
            ? 'bg-navy-900 text-white selection:bg-medical-soft selection:text-medical-softText'
            : 'bg-cream-100 text-navy-800 selection:bg-medical-soft selection:text-medical-softText'
        }`}
      >
        {/* Subtle Decorative Gradients */}
        <div
          className={`absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
            heroVariant === 'dark' ? 'bg-medical-primary/20 opacity-60' : 'bg-medical-soft/40 opacity-70'
          }`}
          aria-hidden="true"
        />
        <div
          className={`absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-500 ${
            heroVariant === 'dark' ? 'bg-navy-700/30 opacity-50' : 'bg-cream-200/60 opacity-80'
          }`}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Top Switcher Bar */}
          <div className="flex justify-end mb-6">
            <HeroToggle variant={heroVariant} onToggle={setHeroVariant} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <SectionHeading
                align="left"
                theme={heroVariant === 'dark' ? 'dark' : 'light'}
                kicker="Cirugía Plástica de Alta Precisión"
                title="Cirugía Plástica Avanzada con *excelencia* y naturalidad"
                subtitle="Más de 29 años de trayectoria transformando vidas con tecnología láser, vaser y un profundo compromiso bioético en Bogotá."
              />

              {/* Primary & Secondary Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/agendar"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base py-3.5 px-7 shadow-elevated transition-shadow"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  <span>Agendar Consulta de Valoración</span>
                </Link>

                <Link
                  to="/procedimientos"
                  className={`inline-flex items-center justify-center gap-2 text-base font-semibold py-3.5 px-6 rounded-full transition-all duration-200 border ${
                    heroVariant === 'dark'
                      ? 'bg-white/10 hover:bg-white/20 text-white border-white/20'
                      : 'bg-white hover:bg-cream-50 text-navy-800 border-cream-300 shadow-sm'
                  }`}
                >
                  <span>Explorar Procedimientos</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>

              {/* 3 Medical Trust Cards (Tested in Tier 1) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                {/* Trust Card 1: Seguridad Quirúrgica */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    heroVariant === 'dark'
                      ? 'bg-navy-800/80 border-navy-700/80'
                      : 'bg-white/90 border-cream-300/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-8 h-8 rounded-full bg-medical-soft/40 text-medical-primary flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-xs text-inherit">Seguridad Quirúrgica</span>
                  </div>
                  <p className="text-[11px] text-graphite-muted leading-tight">
                    100% de procedimientos en quirófanos plenamente habilitados.
                  </p>
                </div>

                {/* Trust Card 2: 28 Procedimientos */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    heroVariant === 'dark'
                      ? 'bg-navy-800/80 border-navy-700/80'
                      : 'bg-white/90 border-cream-300/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-8 h-8 rounded-full bg-medical-soft/40 text-medical-primary flex items-center justify-center flex-shrink-0">
                      <Stethoscope className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-semibold text-xs text-inherit">28 Procedimientos</span>
                  </div>
                  <p className="text-[11px] text-graphite-muted leading-tight">
                    Catálogo integral en Cirugía Corporal, Facial e Íntima.
                  </p>
                </div>

                {/* Trust Card 3: Tecnología Avanzada */}
                <div
                  className={`p-3.5 rounded-2xl border transition-all ${
                    heroVariant === 'dark'
                      ? 'bg-navy-800/80 border-navy-700/80'
                      : 'bg-white/90 border-cream-300/80 shadow-sm'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1">
                    <div className="w-8 h-8 rounded-full bg-medical-soft/40 text-medical-primary flex items-center justify-center flex-shrink-0">
                      <GeneralSurgeryIcon className="w-4 h-4 text-medical-primary" />
                    </div>
                    <span className="font-semibold text-xs text-inherit">Tecnología Avanzada</span>
                  </div>
                  <p className="text-[11px] text-graphite-muted leading-tight">
                    Láser HD, Vaser ultrasónico y radiofrecuencia Tensamax.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Doctor Hero Portrait & Credentials Overlay */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className={`rounded-3xl overflow-hidden shadow-2xl border ${
                    heroVariant === 'dark' ? 'border-navy-700 bg-navy-800' : 'border-cream-300 bg-white'
                  }`}
                >
                  <img
                    src="/images/dr-gomez-hero.png"
                    alt="Dr. Andrés Gómez, Cirujano Plástico y Reconstructivo en Bogotá"
                    className="w-full h-auto object-cover object-top max-h-[520px]"
                    loading="eager"
                  />
                </div>

                {/* Floating Doctor Overlay Card */}
                <div
                  className={`absolute -bottom-6 -left-4 sm:-left-6 right-4 sm:right-6 p-4 rounded-2xl border shadow-elevated backdrop-blur-md transition-all ${
                    heroVariant === 'dark'
                      ? 'bg-navy-950/90 border-navy-700 text-white'
                      : 'bg-white/95 border-cream-300 text-navy-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-serif text-base font-bold block">
                        Dr. Andrés Gómez MD
                      </span>
                      <span className="font-sans text-[11px] text-medical-primary font-bold block">
                        Especialista SACPER &amp; Miembro de Número SCCP
                      </span>
                    </div>
                    <span className="badge-medical-soft text-[10px] font-bold px-2 py-1 rounded-full flex-shrink-0">
                      +29 Años
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: TRUST METRICS STRIP
          ========================================================================= */}
      <section className="bg-white border-y border-cream-300/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-cream-300/60 text-center">
            <div className="pt-4 sm:pt-0">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-medical-primary block">
                +29
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy-800 block mt-1">
                Años de Experiencia Quirúrgica
              </span>
              <span className="text-[11px] text-graphite-muted block">
                Práctica médica continua en Bogotá y Buenos Aires
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-medical-primary block">
                +18.000
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy-800 block mt-1">
                Procedimientos Realizados
              </span>
              <span className="text-[11px] text-graphite-muted block">
                Trayectoria comprobada con alta satisfacción
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-medical-primary block">
                +5
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy-800 block mt-1">
                Acreditaciones de Excelencia
              </span>
              <span className="text-[11px] text-graphite-muted block">
                SCCP, SACPER, FILACP y habilitación distrital
              </span>
            </div>

            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-medical-primary block">
                100%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-navy-800 block mt-1">
                Quirófanos Acreditados
              </span>
              <span className="text-[11px] text-graphite-muted block">
                Monitoreo anestésico y bioseguridad hospitalaria
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: DOCTOR OVERVIEW & SURGICAL PHILOSOPHY
          ========================================================================= */}
      <section className="bg-cream-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Doctor in Scrubs Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="rounded-3xl overflow-hidden shadow-elevated border border-cream-300 bg-white">
                  <img
                    src="/images/dr-gomez-scrubs.png"
                    alt="Dr. Andrés Gómez en quirófano de alta tecnología"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-medical-primary text-white p-3.5 rounded-2xl shadow-floating text-center">
                  <span className="font-serif text-2xl font-bold block">+30</span>
                  <span className="text-[10px] font-sans uppercase tracking-wider block">Congresos</span>
                </div>
              </div>
            </div>

            {/* Doctor Bio and Credentials */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                kicker="Dirección Científica"
                title="Criterio quirúrgico basado en el *mínimo* trauma y máxima armonía"
                subtitle="El Dr. Andrés Gómez enfoca cada procedimiento desde la preservación anatómica, evitando la sobredimensión y priorizando la recuperación sin dolor severo."
              />

              <div className="space-y-3 text-sm text-graphite-body leading-relaxed">
                <p>
                  Graduado de la Escuela de Medicina Juan N. Corpas y con formación especializada en Cirugía Plástica, Estética y Reconstructiva en SACPER (Buenos Aires, Argentina), lidera el equipo quirúrgico con protocolos vanguardistas de retracción de piel con láser y ultrasonido.
                </p>
                <p>
                  Como Director de Cirugía Plástica en la Clínica Colombiana de Obesidad y Metabolismo (CCOM), supervisa cada caso con un equipo multidisciplinario que incluye enfermería especializada 1 a 1 encabezada por la Jefa Dora Calderón Vega.
                </p>
              </div>

              {/* Key Credentials Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-cream-300">
                  <Award className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <span className="font-bold text-navy-800 block">Sociedad Colombiana SCCP</span>
                    <span className="text-graphite-muted">Miembro de Número oficial</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-cream-300">
                  <Award className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs">
                    <span className="font-bold text-navy-800 block">Especialista SACPER</span>
                    <span className="text-graphite-muted">Sociedad Argentina de Cirugía Plástica</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/sobre-el-dr-gomez"
                  className="inline-flex items-center gap-2 text-sm font-bold text-medical-primary hover:text-medical-hover"
                >
                  <span>Conocer biografía médica completa, congresos y filosofía</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: 3 CATEGORIES SHOWCASE (CORPORAL, FACIAL, ÍNTIMA)
          ========================================================================= */}
      <section className="bg-white py-16 lg:py-24 border-b border-cream-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Catálogo de Especialidades"
            title="Tres áreas de excelencia con *tecnología* de última generación"
            subtitle="28 procedimientos quirúrgicos planificados con rigor anatómico, privacidad y seguridad en Bogotá."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Category 1: Cirugía Corporal */}
            <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-300/80 hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-medical-soft text-xs font-bold px-3 py-1 rounded-full">
                    15 Procedimientos
                  </span>
                  <span className="text-xs font-semibold text-graphite-muted">Alta Definición</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-800 mb-3">
                  Cirugía Corporal
                </h3>
                <p className="text-xs text-graphite-body leading-relaxed mb-6">
                  Lipólisis Láser 3D, Lipo Vaser HD, Abdominoplastia, Marcación muscular y Pexia Mamaria con enfoque de retracción tisular y mínima incisión.
                </p>
                <ul className="space-y-2 text-xs text-navy-800 font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Abdominoplastia Reconstructiva</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Lipólisis Láser &amp; Vaser HD</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Cirugía Mamaria (Aumento / Pexia)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/procedimientos/cirugia-corporal"
                className="btn-primary py-2.5 px-4 text-xs font-semibold text-center justify-center flex items-center gap-1.5"
              >
                <span>Ver los 15 corporales</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Category 2: Cirugía Facial */}
            <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-300/80 hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-medical-soft text-xs font-bold px-3 py-1 rounded-full">
                    7 Procedimientos
                  </span>
                  <span className="text-xs font-semibold text-graphite-muted">Estructural</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-800 mb-3">
                  Cirugía Facial
                </h3>
                <p className="text-xs text-graphite-body leading-relaxed mb-6">
                  Rinoplastia Ultrasónica piezoeléctrica, Blefaroplastia, Lifting Facial anatómico y Bichectomía para proporciones naturales sin estigmas.
                </p>
                <ul className="space-y-2 text-xs text-navy-800 font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Rinoplastia Ultrasónica Estructural</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Blefaroplastia de Párpados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Lifting Facial &amp; Rejuvenecimiento</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/procedimientos/cirugia-facial"
                className="btn-primary py-2.5 px-4 text-xs font-semibold text-center justify-center flex items-center gap-1.5"
              >
                <span>Ver los 7 faciales</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Category 3: Cirugía Íntima */}
            <div className="bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-300/80 hover:shadow-elevated transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cream-200 text-navy-800 text-xs font-bold px-3 py-1 rounded-full">
                    6 Procedimientos
                  </span>
                  <span className="text-xs font-semibold text-medical-primary flex items-center gap-1">
                    <Lock className="w-3 h-3" /> Privacidad 100%
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-navy-800 mb-3">
                  Cirugía Íntima
                </h3>
                <p className="text-xs text-graphite-body leading-relaxed mb-6">
                  Labioplastia láser, Rejuvenecimiento y tensado vaginal, Faloplastia y procedimientos masculinos con absoluta reserva profesional.
                </p>
                <ul className="space-y-2 text-xs text-navy-800 font-medium mb-6">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Labioplastia &amp; Ninfoplastia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Rejuvenecimiento Vaginal Láser</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                    <span>Faloplastia &amp; Engrosamiento</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/procedimientos/cirugia-intima"
                className="btn-primary py-2.5 px-4 text-xs font-semibold text-center justify-center flex items-center gap-1.5"
              >
                <span>Ver los 6 íntimos (Confidencial)</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: FEATURED BEFORE/AFTER CASES PREVIEW & BIOETHICS NOTICE
          ========================================================================= */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Evidencia y Casos Clínicos"
            title="Resultados reales con *rigor* bioético y consentimiento"
            subtitle="Fotografías de pacientes reales que autorizaron su uso con fines informativos y educativos."
          />

          {/* Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {clinicalCases.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden bg-navy-950">
                    <img
                      src={item.beforeAfterImage}
                      alt={`Caso clínico de ${item.procedureName}`}
                      className="w-full h-56 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      Antes &amp; Después
                    </div>
                    <div className="absolute top-3 right-3 bg-medical-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {item.postOpDuration}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-graphite-muted">
                      <span>{item.patientDemographics.gender}, {item.patientDemographics.age} años</span>
                      <span className="font-semibold text-medical-primary">{item.patientDemographics.location}</span>
                    </div>

                    <h4 className="font-serif text-lg font-bold text-navy-800 leading-snug">
                      {item.title}
                    </h4>

                    <p className="text-xs text-graphite-body leading-relaxed line-clamp-2">
                      {item.clinicalMetric}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    to="/resultados"
                    className="inline-flex items-center gap-1 text-xs font-bold text-medical-primary hover:text-medical-hover"
                  >
                    <span>Ver caso detallado en resultados (+18)</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bioethical Box */}
          <div className="mt-10 p-4 rounded-xl bg-white border border-cream-300 flex items-start gap-3 text-xs text-graphite-body">
            <ShieldCheck className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              <strong className="text-navy-800">Nota Bioética Obligatoria:</strong> {siteConfig.legal.disclaimerImages}
            </p>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/resultados"
              className="btn-primary py-3 px-8 text-sm inline-flex items-center gap-2"
            >
              <span>Acceder a la Galería Completa de Resultados (+18)</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: 3-STEP PATIENT JOURNEY
          ========================================================================= */}
      <section className="bg-white py-16 lg:py-24 border-y border-cream-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Tu Ruta de Atención"
            title="Un acompañamiento continuo en *tres* etapas definidas"
            subtitle="Desde tu primera consulta diagnóstica hasta el alta definitiva con seguimiento médico y enfermería."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-medical-soft text-medical-primary font-serif text-2xl font-bold flex items-center justify-center">
                1
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-800">
                Diagnóstico Personalizado
              </h3>
              <p className="text-xs text-graphite-body leading-relaxed">
                Valoración presencial en Torre Zentai o teleconsulta guiada. Examen antropométrico, revisión de historial médico y propuesta quirúrgica honesta y transparente.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-medical-soft text-medical-primary font-serif text-2xl font-bold flex items-center justify-center">
                2
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-800">
                Procedimiento en Quirófano Acreditado
              </h3>
              <p className="text-xs text-graphite-body leading-relaxed">
                Cirugía en sala hospitalaria certificada con monitoreo anestésico permanente, tecnología láser o ultrasonido Vaser y máxima bioseguridad.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 text-left space-y-3">
              <div className="w-12 h-12 rounded-full bg-medical-soft text-medical-primary font-serif text-2xl font-bold flex items-center justify-center">
                3
              </div>
              <h3 className="font-serif text-xl font-bold text-navy-800">
                Recuperación Asistida 1 a 1
              </h3>
              <p className="text-xs text-graphite-body leading-relaxed">
                Seguimiento permanente con la Jefa Dora Calderón Vega, sesiones de drenaje asistido con Tensamax y guardia postquirúrgica activa 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: PATIENT STORIES PREVIEW
          ========================================================================= */}
      <section className="bg-cream-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Historias de Vida"
            title="La experiencia contada por pacientes que ya *transformaron* su vida"
            subtitle="Testimonios reales sobre el trato humano, el postoperatorio y la confianza recuperada."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {patientStories.slice(0, 3).map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-cream-300 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="badge-medical-soft text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Verificada
                    </span>
                  </div>

                  <p className="text-xs text-navy-800 italic leading-relaxed">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-cream-300/60 flex items-center justify-between">
                  <div>
                    <span className="font-semibold text-xs text-navy-800 block">
                      {story.patientName} ({story.age} años)
                    </span>
                    <span className="text-[11px] text-graphite-muted block">
                      {story.city} • {story.procedureName}
                    </span>
                  </div>
                  <Link
                    to={`/recursos/historias-de-vida/${story.slug}`}
                    className="text-xs font-bold text-medical-primary hover:text-medical-hover"
                  >
                    Leer relato
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/recursos/historias-de-vida"
              className="inline-flex items-center gap-2 text-sm font-bold text-medical-primary hover:text-medical-hover"
            >
              <span>Ver todos los testimonios de pacientes</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: TORRE ZENTAI LOCATION PREVIEW & MAP
          ========================================================================= */}
      <section className="bg-white py-16 lg:py-24 border-t border-cream-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Sede Details */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                align="left"
                kicker="Sede Principal en Bogotá"
                title="Atención médica en *Torre* Zentai, Consultorio 805"
                subtitle="Instalaciones diseñadas para tu comodidad, privacidad y valoración diagnóstica integral en el norte de Bogotá."
              />

              <div className="space-y-4 text-xs text-graphite-body">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-300">
                  <MapPin className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-navy-800 block text-sm">Dirección Oficial</span>
                    <p className="mt-0.5">{siteConfig.contact.address.full}</p>
                    <span className="text-graphite-muted text-[11px]">Zona Santa Bárbara / Usaquén • Parqueadero de visitantes disponible</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-cream-50 border border-cream-300">
                  <Clock className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-bold text-navy-800 block text-sm">Horarios de Consulta Médica</span>
                    <p className="mt-0.5">{siteConfig.contact.hours.weekdays}</p>
                    <p>{siteConfig.contact.hours.weekend}</p>
                    <p className="text-medical-primary font-semibold mt-1">{siteConfig.contact.hours.emergency}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={`tel:${siteConfig.contact.pbx[0].replace(/\s+/g, '')}`}
                    className="p-3 rounded-xl bg-white border border-cream-300 flex items-center gap-2 hover:border-medical-primary transition-colors"
                  >
                    <Phone className="w-4 h-4 text-medical-primary" />
                    <div>
                      <span className="text-[10px] text-graphite-muted block">Línea PBX</span>
                      <span className="font-bold text-navy-800 text-xs">{siteConfig.contact.pbx[0]}</span>
                    </div>
                  </a>

                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white border border-cream-300 flex items-center gap-2 hover:border-medical-primary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-accent-whatsapp" />
                    <div>
                      <span className="text-[10px] text-graphite-muted block">WhatsApp Oficial</span>
                      <span className="font-bold text-navy-800 text-xs">{siteConfig.contact.whatsapp.displayPrimary}</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/contacto"
                  className="btn-primary py-2.5 px-6 text-xs inline-flex items-center gap-2"
                >
                  <span>Ver información detallada de llegada</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right Column: Map Preview Graphic */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-elevated relative group">
                <img
                  src="/images/map-torre-zentai.png"
                  alt="Mapa de ubicación Edificio Torre Zentai en Bogotá"
                  className="w-full h-auto object-cover max-h-[420px]"
                  loading="lazy"
                />
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-navy-950/20 group-hover:bg-navy-950/40 transition-colors flex items-center justify-center"
                  aria-label="Abrir mapa interactivo de Torre Zentai en Google Maps"
                >
                  <span className="btn-primary text-xs py-2.5 px-5 shadow-floating inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Abrir en Google Maps</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: FINAL APPOINTMENT BOOKING CTA BANNER
          ========================================================================= */}
      <section className="bg-navy-900 text-white py-16 lg:py-20 border-t border-navy-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="badge-medical-soft text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider inline-block">
            Inicia tu Consulta Médica
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white editorial-heading">
            Comienza tu proceso de <em className="italic font-serif font-normal text-medical-soft">transformación</em> con total seguridad
          </h2>

          <p className="text-sm sm:text-base text-cream-200/90 max-w-2xl mx-auto leading-relaxed">
            Agenda tu cita de valoración con el Dr. Andrés Gómez en el consultorio 805 de Torre Zentai o mediante teleconsulta virtual guiada.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/agendar"
              className="btn-primary py-3.5 px-8 text-sm font-bold inline-flex items-center gap-2 shadow-floating"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Reserva tu cita de valoración</span>
            </Link>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent('Hola Dr. Andrés Gómez, deseo agendar una valoración médica especializada y recibir orientación.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 py-3.5 px-7 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-accent-whatsapp" aria-hidden="true" />
              <span>Consulta por WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
