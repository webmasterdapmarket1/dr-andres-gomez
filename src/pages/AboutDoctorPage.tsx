import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Calendar,
  ExternalLink,
  CheckCircle2,
  ChevronDown,
  MapPin,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { doctorProfile } from '@/data/doctor';
import { siteConfig } from '@/data/siteConfig';

export const AboutDoctorPage: React.FC = () => {
  const [showAllCongresses, setShowAllCongresses] = useState(false);

  const displayedCongresses = showAllCongresses
    ? doctorProfile.congressTimeline
    : doctorProfile.congressTimeline.slice(0, 10);

  return (
    <div className="py-10 lg:py-16 space-y-16 lg:space-y-24">
      {/* =========================================================================
          HERO & BIOGRAPHY OVERVIEW
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading, Bio & Authority Numbers */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              align="left"
              kicker="Trayectoria Quirúrgica y Dirección Científica"
              title="Dr. Andrés Gómez — Cirugía Plástica con *rigor* científico y calidez humana"
              subtitle={doctorProfile.shortBio}
            />

            <div className="space-y-4 text-sm text-graphite-body leading-relaxed">
              {doctorProfile.fullBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Authority Numbers Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-cream-300">
              <div className="p-3 rounded-xl bg-white border border-cream-300 text-center">
                <span className="font-serif text-3xl font-bold text-medical-primary block">+29</span>
                <span className="text-[11px] font-semibold text-navy-800 block">Años de Ejercicio</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-cream-300 text-center">
                <span className="font-serif text-3xl font-bold text-medical-primary block">+18.000</span>
                <span className="text-[11px] font-semibold text-navy-800 block">Procedimientos</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-cream-300 text-center">
                <span className="font-serif text-3xl font-bold text-medical-primary block">+30</span>
                <span className="text-[11px] font-semibold text-navy-800 block">Congresos &amp; Cursos</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-cream-300 text-center">
                <span className="font-serif text-3xl font-bold text-medical-primary block">100%</span>
                <span className="text-[11px] font-semibold text-navy-800 block">Quirófanos Habilitados</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link to="/agendar" className="btn-primary py-3 px-6 text-sm inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Agendar Valoración con el Dr. Gómez</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Doctor Portrait & Official Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-elevated border border-cream-300 bg-white">
                <img
                  src="/images/dr-gomez-hero-card.png"
                  alt="Dr. Andrés Gómez, Cirujano Plástico Corpas y SACPER"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-white border border-cream-300 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-navy-800">
                  <ShieldCheck className="w-4 h-4 text-medical-primary" />
                  <span>Acreditaciones Científicas Oficiales</span>
                </div>
                <ul className="text-xs text-graphite-muted space-y-1">
                  <li>• Miembro de Número — Sociedad Colombiana de Cirugía Plástica (SCCP)</li>
                  <li>• Especialista SACPER — Buenos Aires, Argentina</li>
                  <li>• Director Científico de Cirugía Plástica — CCOM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACADEMIC FORMATION & TITLES
          ========================================================================= */}
      <section className="bg-white py-16 border-y border-cream-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Formación Académica"
            title="Títulos universitarios y *membresías* científicas de primer nivel"
            subtitle="Una formación continua de más de tres décadas respaldada por las principales academias de cirugía plástica de Iberoamérica."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Degree 1 */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-medical-soft text-medical-primary flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-sm">
                <span className="text-xs font-bold text-medical-primary uppercase tracking-wider block">Pregrado Médico</span>
                <h3 className="font-serif text-xl font-bold text-navy-800">Médico Cirujano General</h3>
                <p className="text-graphite-body font-medium">Escuela de Medicina Juan N. Corpas</p>
                <p className="text-xs text-graphite-muted">Bogotá D.C., Colombia • Formación médico-quirúrgica integral con enfoque humanístico y rigor bioético.</p>
              </div>
            </div>

            {/* Degree 2 */}
            <div className="p-6 rounded-2xl bg-cream-50 border border-cream-300 flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-medical-soft text-medical-primary flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-sm">
                <span className="text-xs font-bold text-medical-primary uppercase tracking-wider block">Especialidad Quirúrgica</span>
                <h3 className="font-serif text-xl font-bold text-navy-800">Especialista en Cirugía Plástica, Estética y Reconstructiva</h3>
                <p className="text-graphite-body font-medium">Universidad / SACPER (Sociedad Argentina de Cirugía Plástica)</p>
                <p className="text-xs text-graphite-muted">Buenos Aires, Argentina • Residencia intensiva en microcirugía reconstructiva, cirugía craniomaxilofacial y remodelado corporal.</p>
              </div>
            </div>
          </div>

          {/* Memberships Wall */}
          <div className="mt-8 p-6 rounded-2xl bg-white border border-cream-300">
            <h4 className="font-serif text-lg font-bold text-navy-800 mb-4 text-center">
              Sociedades Científicas y Afiliaciones Profesionales
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {doctorProfile.memberships.map((membership, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <CheckCircle2 className="w-4 h-4 text-medical-primary flex-shrink-0" />
                  <span className="font-medium text-navy-800">{membership}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SURGICAL PHILOSOPHY: MINIMAL SURGICAL TRAUMA
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Filosofía Médica"
          title="El principio del *mínimo* trauma quirúrgico y armonía natural"
          subtitle="La cirugía estética de excelencia no busca imponer formas artificiales, sino realzar la anatomía individual con el menor estrés tisular posible."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {doctorProfile.philosophy.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm hover:shadow-elevated transition-all space-y-3"
            >
              <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary flex items-center justify-center font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800">
                {pillar.title}
              </h3>
              <p className="text-xs text-graphite-body leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          TIMELINE OF +30 CONGRESSES & SCIENTIFIC UPDATES
          ========================================================================= */}
      <section className="bg-cream-50 py-16 border-y border-cream-300/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Actualización Continua"
            title="Más de 30 congresos y simposios *internacionales* en cirugía plástica"
            subtitle="Participación activa en los foros científicos más exigentes del mundo en contorno corporal, ultrasonido, láser y rejuvenecimiento facial."
          />

          <div className="mt-12 space-y-4">
            {displayedCongresses.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-white border border-cream-300/80 shadow-sm"
              >
                <span className="font-serif text-lg font-bold text-medical-primary flex-shrink-0 w-16 text-right">
                  {item.year}
                </span>
                <div className="border-l border-cream-300 pl-4 space-y-0.5">
                  <h4 className="font-semibold text-xs text-navy-800">
                    {item.title}
                  </h4>
                  <span className="text-[11px] text-graphite-muted block">
                    {item.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowAllCongresses(!showAllCongresses)}
              className="btn-secondary py-2.5 px-6 text-xs inline-flex items-center gap-2"
            >
              <span>{showAllCongresses ? 'Mostrar menos eventos' : `Ver los +30 congresos y certificaciones completas`}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showAllCongresses ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INSTITUTIONAL BACKING: CCOM & ACCREDITED SURGICAL THEATER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Operating Room Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-elevated">
              <img
                src="/images/quirofano-acreditado.png"
                alt="Quirófano plenamente acreditado por la Secretaría de Salud"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* CCOM Backing Copy */}
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              align="left"
              kicker="Infraestructura Hospitalaria"
              title="Respaldo institucional de la Clínica Colombiana de *Obesidad* y Metabolismo"
              subtitle="Toda intervención se lleva a cabo en quirófanos certificados bajo estrictas normas de bioseguridad, esterilización y cuidados postanestésicos."
            />

            <div className="space-y-3 text-xs text-graphite-body leading-relaxed">
              <p>
                Como Director Científico de Cirugía Plástica en la <strong>Clínica Colombiana de Obesidad y Metabolismo (CCOM)</strong>, el Dr. Andrés Gómez garantiza a cada paciente una infraestructura de salud de nivel hospitalario, evitando cualquier procedimiento en consultorios no autorizados.
              </p>
              <p>
                Cada cirugía cuenta con la presencia permanente de un médico especialista en Anestesiología y Reanimación, sala de recuperación monitorizada y tecnología médica de marcas líderes mundiales.
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.institutional.clinicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-medical-primary hover:text-medical-hover"
              >
                <span>Conocer más sobre el respaldo institucional de la Clínica CCOM</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SURGICAL NURSING TEAM: DORA CALDERÓN VEGA
          ========================================================================= */}
      <section className="bg-cream-50 py-16 border-y border-cream-300/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                align="left"
                kicker="Acompañamiento Postquirúrgico 1 a 1"
                title="Enfermería especializada para una recuperación *segura* y sin dolor"
                subtitle="El cuidado postoperatorio es determinante para el resultado estético final. Nuestro equipo te acompaña en cada etapa."
              />

              <div className="space-y-3 text-xs text-graphite-body leading-relaxed">
                <p>
                  Liderada por la <strong>Jefa de Enfermería Dora Calderón Vega</strong>, nuestra unidad de postoperatorio aplica protocolos individualizados que incluyen drenajes linfáticos indoloros asistidos por radiofrecuencia Tensamax, ajuste ergonómico de fajas postquirúrgicas y control estricto de cicatrización.
                </p>
                <p>
                  Nuestros pacientes disponen de una línea directa de guardia postquirúrgica activa 24 horas al día, 7 días a la semana, para resolver cualquier duda y garantizar total tranquilidad durante el proceso de recuperación.
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-800">
                  <HeartHandshake className="w-4 h-4 text-medical-primary" />
                  <span>Trato humano cercano</span>
                </div>
                <span className="text-graphite-muted">•</span>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-800">
                  <Clock className="w-4 h-4 text-medical-primary" />
                  <span>Guardia 24/7</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-cream-300 shadow-elevated bg-white">
                <img
                  src="/images/dora-calderon.png"
                  alt="Dora Calderón Vega, Enfermera Jefe de Recuperación y Postoperatorio"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="p-4 text-center">
                  <span className="font-serif text-base font-bold text-navy-800 block">Dora Calderón Vega</span>
                  <span className="text-xs text-medical-primary font-semibold block">Jefa de Enfermería &amp; Recuperación Postoperatoria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FINAL CTA: BOOK APPOINTMENT
          ========================================================================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <SectionHeading
          kicker="Comienza Hoy"
          title="Agenda tu cita de valoración con el *Dr. Gómez*"
          subtitle="Consulta presencial en el Consultorio 805 de Torre Zentai en Bogotá o teleconsulta virtual guiada si resides fuera de la ciudad."
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link to="/agendar" className="btn-primary py-3.5 px-8 text-sm inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>Reserva tu cita de valoración</span>
          </Link>
          <Link to="/contacto" className="btn-secondary py-3.5 px-7 text-sm inline-flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Ver Sede Torre Zentai</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutDoctorPage;
