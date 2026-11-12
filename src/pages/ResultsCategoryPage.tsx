import React, { useState } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import {
  ShieldAlert,
  ArrowRight,
  Filter,
  Calendar,
  Lock,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AgeGateModal from '@/components/ui/AgeGateModal';
import { clinicalCases, intimateEthicsNotice } from '@/data/cases';
import { siteConfig } from '@/data/siteConfig';

export const ResultsCategoryPage: React.FC = () => {
  const { categoria } = useParams<{ categoria: string }>();
  const navigate = useNavigate();

  const [hasAdultConsent, setHasAdultConsent] = useState<boolean>(() => {
    return sessionStorage.getItem('adult_consent') === 'true';
  });

  const handleConfirmAge = () => {
    sessionStorage.setItem('adult_consent', 'true');
    setHasAdultConsent(true);
  };

  const handleCancelAge = () => {
    navigate('/', { replace: true });
  };

  // Validate category
  const validCategories = ['cirugia-corporal', 'cirugia-facial', 'cirugia-intima'];
  if (!categoria || !validCategories.includes(categoria)) {
    return <Navigate to="/resultados" replace />;
  }

  const categoryTitles: Record<string, { title: string; kicker: string; count: number }> = {
    'cirugia-corporal': {
      title: 'Resultados de Cirugía *Corporal* y Contorno de Alta Definición',
      kicker: 'Galería Corporal Documentada',
      count: 3,
    },
    'cirugia-facial': {
      title: 'Resultados de Cirugía *Facial* y Armonización Estructural',
      kicker: 'Galería Facial Documentada',
      count: 1,
    },
    'cirugia-intima': {
      title: 'Casos Clínicos de Cirugía *Íntima* y Confidencialidad Médica',
      kicker: 'Secreto Profesional y Bioética',
      count: 0,
    },
  };

  const currentMeta = categoryTitles[categoria];
  const filteredCases = clinicalCases.filter((c) => c.categorySlug === categoria);

  return (
    <div className="py-10 lg:py-16 space-y-12">
      {/* AgeGate Interstitial Modal */}
      <AgeGateModal
        isOpen={!hasAdultConsent}
        onConfirm={handleConfirmAge}
        onCancel={handleCancelAge}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker={currentMeta.kicker}
          title={currentMeta.title}
          subtitle="Casos documentados con consentimiento informado. La anatomía y respuesta biológica son únicas en cada paciente."
        />

        {/* Mandatory Bioethics Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-cream-50 border-l-4 border-medical-primary border-y border-r border-cream-300 text-xs text-graphite-body flex items-start gap-3 shadow-sm">
          <ShieldAlert className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <strong className="text-navy-800 text-sm block">Aviso Legal y Bioético Obligatorio:</strong>
            <p className="leading-relaxed">{siteConfig.legal.disclaimerImages}</p>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-cream-300 pb-4">
          <span className="text-xs font-bold text-navy-800 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-medical-primary" />
            <span>Categorías:</span>
          </span>
          <Link
            to="/resultados"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-navy-800 hover:bg-cream-200 border border-cream-300 transition-all"
          >
            Todos los Casos ({clinicalCases.length})
          </Link>
          <Link
            to="/resultados/cirugia-corporal"
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              categoria === 'cirugia-corporal'
                ? 'bg-medical-primary text-white shadow-sm'
                : 'bg-white text-navy-800 hover:bg-cream-200 border border-cream-300'
            }`}
          >
            Cirugía Corporal (3)
          </Link>
          <Link
            to="/resultados/cirugia-facial"
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
              categoria === 'cirugia-facial'
                ? 'bg-medical-primary text-white shadow-sm'
                : 'bg-white text-navy-800 hover:bg-cream-200 border border-cream-300'
            }`}
          >
            Cirugía Facial (1)
          </Link>
          <Link
            to="/resultados/cirugia-intima"
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all inline-flex items-center gap-1 ${
              categoria === 'cirugia-intima'
                ? 'bg-medical-primary text-white shadow-sm'
                : 'bg-white text-navy-800 hover:bg-cream-200 border border-cream-300'
            }`}
          >
            <Lock className="w-3 h-3" />
            <span>Cirugía Íntima (Confidencial)</span>
          </Link>
        </div>

        {/* =========================================================================
            SPECIAL CASE: CIRUGÍA ÍNTIMA (NO EXPLICIT PHOTOS!)
            ========================================================================= */}
        {categoria === 'cirugia-intima' ? (
          <div className="bg-white rounded-3xl border border-cream-300 p-8 sm:p-12 shadow-sm text-center max-w-3xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full bg-cream-100 text-medical-primary flex items-center justify-center mx-auto">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <span className="badge-medical-soft text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              100% Confidencialidad • Secreto Profesional
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-navy-800">
              {intimateEthicsNotice.title}
            </h3>

            <p className="text-sm text-graphite-body leading-relaxed max-w-xl mx-auto">
              {intimateEthicsNotice.description}
            </p>

            <div className="p-4 rounded-xl bg-cream-50 border border-cream-200 text-xs text-navy-800 text-left space-y-2">
              <span className="font-bold text-medical-primary block">Durante tu consulta médica privada podrás:</span>
              <ul className="space-y-1 text-graphite-body">
                <li>• Conocer casos clínicos de archivo fotográfico cerrado con consentimiento explícito.</li>
                <li>• Valorar la técnica de microcirugía láser y tiempos de recuperación funcional.</li>
                <li>• Resolver todas tus inquietudes en un entorno médico ético, respetuoso y privado.</li>
              </ul>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/agendar"
                className="btn-primary py-3 px-8 text-sm inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Consulta Privada y Confidencial</span>
              </Link>
              <Link
                to="/procedimientos/cirugia-intima"
                className="btn-secondary py-3 px-6 text-sm inline-flex items-center gap-2"
              >
                <span>Conocer procedimientos íntimos</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          /* =========================================================================
              STANDARD CASES GRID (CORPORAL / FACIAL)
              ========================================================================= */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative bg-navy-950 overflow-hidden">
                    <img
                      src={caseItem.beforeAfterImage}
                      alt={`Resultado de antes y después en ${caseItem.procedureName}`}
                      className="w-full h-72 sm:h-80 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-navy-900/90 text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                      ANTES &amp; DESPUÉS
                    </div>
                    <div className="absolute top-3 right-3 bg-medical-primary text-white text-xs font-bold px-2.5 py-1 rounded shadow">
                      {caseItem.postOpDuration}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-graphite-muted">
                      <span className="font-semibold text-medical-primary uppercase tracking-wider">
                        {caseItem.procedureName}
                      </span>
                      <span>
                        {caseItem.patientDemographics.gender}, {caseItem.patientDemographics.age} años • {caseItem.patientDemographics.location}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-navy-800">
                      {caseItem.title}
                    </h3>

                    <div className="p-3 rounded-xl bg-cream-50 border border-cream-200 text-xs text-navy-800 font-medium">
                      <span className="font-bold text-medical-primary block mb-0.5">Métrica Clínica:</span>
                      {caseItem.clinicalMetric}
                    </div>

                    <p className="text-xs text-graphite-body leading-relaxed">
                      {caseItem.overview}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {caseItem.tags.map((tag, idx) => (
                        <span key={idx} className="badge-medical-soft text-[10px] font-medium px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-cream-200/60 mt-4 flex items-center justify-between">
                  <Link
                    to={`/procedimientos/${caseItem.categorySlug}/${caseItem.procedureSlug}`}
                    className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
                  >
                    <span>Conocer el procedimiento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to="/agendar"
                    className="btn-primary text-xs py-1.5 px-3.5 inline-flex items-center gap-1"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Valorar mi caso</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsCategoryPage;
