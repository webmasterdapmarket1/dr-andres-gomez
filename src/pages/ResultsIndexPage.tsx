import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  ShieldAlert,
  ArrowRight,
  Filter,
  Calendar,
  Lock,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import AgeGateModal from '@/components/ui/AgeGateModal';
import { clinicalCases } from '@/data/cases';
import { siteConfig } from '@/data/siteConfig';

export const ResultsIndexPage: React.FC = () => {
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

  return (
    <div className="py-10 lg:py-16 space-y-12">
      {/* AgeGate Interstitial Modal */}
      <AgeGateModal
        isOpen={!hasAdultConsent}
        onConfirm={handleConfirmAge}
        onCancel={handleCancelAge}
      />

      {/* Page Header & Bioethics Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          kicker="Evidencia Quirúrgica y Casos Clínicos Reales"
          title="Galería de Resultados con *transparencia* y ética médica"
          subtitle="Casos documentados de pacientes intervenidos por el Dr. Andrés Gómez. Los resultados quirúrgicos son individuales y dependen de las condiciones anatómicas de cada persona."
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
            className="px-4 py-2 rounded-full text-xs font-bold bg-medical-primary text-white shadow-sm transition-all"
          >
            Todos los Casos ({clinicalCases.length})
          </Link>
          <Link
            to="/resultados/cirugia-corporal"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-navy-800 hover:bg-cream-200 border border-cream-300 transition-all"
          >
            Cirugía Corporal (3)
          </Link>
          <Link
            to="/resultados/cirugia-facial"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-navy-800 hover:bg-cream-200 border border-cream-300 transition-all"
          >
            Cirugía Facial (1)
          </Link>
          <Link
            to="/resultados/cirugia-intima"
            className="px-4 py-2 rounded-full text-xs font-semibold bg-white text-navy-800 hover:bg-cream-200 border border-cream-300 transition-all inline-flex items-center gap-1"
          >
            <Lock className="w-3 h-3 text-medical-primary" />
            <span>Cirugía Íntima (Confidencial)</span>
          </Link>
        </div>

        {/* Clinical Cases Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {clinicalCases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-300 shadow-sm hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image Pair with Before/After tags */}
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

                {/* Case Metadata */}
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

        {/* Intimate Surgery Confidentiality Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-cream-50 border border-cream-300 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-cream-200 text-navy-800 flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-medical-primary" />
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-navy-800">
                ¿Buscas información sobre Cirugía Íntima?
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed max-w-xl">
                Por respeto a la privacidad de nuestros pacientes y normas de la SCCP, no publicamos fotos íntimas en internet. Puedes acceder a casos documentados durante tu consulta médica privada.
              </p>
            </div>
          </div>
          <Link
            to="/resultados/cirugia-intima"
            className="btn-secondary text-xs py-2.5 px-5 flex-shrink-0 inline-flex items-center gap-1.5"
          >
            <span>Ver protocolo confidencial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsIndexPage;
