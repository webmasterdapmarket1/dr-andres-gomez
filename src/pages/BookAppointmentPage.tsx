import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  MapPin,
  AlertCircle,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCEDURE_CATEGORIES } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';

export const BookAppointmentPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    procedure: '',
    modality: 'presencial',
    preferredTime: 'manana',
    message: '',
    privacyConsent: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email || !formData.procedure) {
      setErrorMessage('Por favor completa todos los campos requeridos (*).');
      return;
    }
    if (!formData.privacyConsent) {
      setErrorMessage('Debes aceptar la Política de Tratamiento de Datos Personales (Ley 1581) para continuar.');
      return;
    }

    setErrorMessage('');
    setSubmitted(true);
  };

  const whatsappMessage = `Hola Dr. Andrés Gómez, he solicitado una valoración médica:\n• Nombre: ${formData.fullName}\n• Procedimiento: ${formData.procedure}\n• Modalidad: ${formData.modality === 'presencial' ? 'Presencial en Torre Zentai' : 'Teleconsulta Virtual'}\n• Teléfono: ${formData.phone}\n• Correo: ${formData.email}`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Atención Personalizada en Torre Zentai"
          title="Reserva tu cita de *valoración* médica diagnóstica"
          subtitle="Da el primer paso hacia tu procedimiento con el Dr. Andrés Gómez. Valoración presencial en Bogotá o teleconsulta virtual guiada si resides fuera de la ciudad."
        />

        {/* 3-Step Journey Infographic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary font-bold flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-bold text-navy-800">1. Solicitud Ágil</h4>
              <p className="text-xs text-graphite-body">
                Diligencia el formulario o escribe a WhatsApp. Respuesta en menos de 15 minutos en horario hábil.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary font-bold flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-bold text-navy-800">2. Examen Diagnóstico</h4>
              <p className="text-xs text-graphite-body">
                Valoración presencial en Torre Zentai Cons. 805 o Teleconsulta guiada con análisis antropométrico sincero.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary font-bold flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div className="space-y-1">
              <h4 className="font-serif text-base font-bold text-navy-800">3. Plan Integral</h4>
              <p className="text-xs text-graphite-body">
                Presupuesto transparente todo incluido: quirófano habilitado, honorarios, póliza médica y postoperatorio.
              </p>
            </div>
          </div>
        </div>

        {/* Form and Sidebar Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Booking Form */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-cream-300 p-8 sm:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-8 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-navy-800">
                  ¡Solicitud Recibida con Éxito!
                </h3>
                <p className="text-sm text-graphite-body max-w-md mx-auto leading-relaxed">
                  Gracias <strong>{formData.fullName}</strong>. Un asesor médico del equipo del Dr. Andrés Gómez se comunicará contigo al <strong>{formData.phone}</strong> para confirmar tu horario de valoración.
                </p>

                <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300 max-w-md mx-auto text-left text-xs space-y-1">
                  <span className="font-bold text-navy-800 block">Resumen de tu solicitud:</span>
                  <p>• Procedimiento: {formData.procedure}</p>
                  <p>• Modalidad: {formData.modality === 'presencial' ? 'Presencial (Torre Zentai, Bogotá)' : 'Teleconsulta Virtual'}</p>
                  <p>• Horario preferente: {formData.preferredTime === 'manana' ? 'Jornada de la Mañana' : 'Jornada de la Tarde'}</p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary py-3 px-6 text-sm inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-accent-whatsapp" />
                    <span>Continuar conversación por WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary py-3 px-6 text-sm"
                  >
                    Nueva solicitud
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-navy-800 mb-1">
                    Formulario de Solicitud de Cita
                  </h3>
                  <p className="text-xs text-graphite-muted">
                    Completa tus datos para coordinar tu cita en el Consultorio 805 de Torre Zentai o de forma virtual.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="fullName" className="text-xs font-bold text-navy-800">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Ej. Claudia Martínez"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-navy-800">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+57 300 123 4567"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold text-navy-800">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="nombre@ejemplo.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    />
                  </div>

                  {/* 28-Procedure <optgroup> Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="procedure" className="text-xs font-bold text-navy-800">
                      Procedimiento de Interés (28) *
                    </label>
                    <select
                      id="procedure"
                      name="procedure"
                      required
                      value={formData.procedure}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary bg-white text-navy-800"
                    >
                      <option value="">Selecciona un procedimiento...</option>
                      {PROCEDURE_CATEGORIES.map((cat) => (
                        <optgroup key={cat.id} label={`${cat.name} (${cat.count})`}>
                          {cat.procedures.map((proc) => (
                            <option key={proc.slug} value={proc.name}>
                              {proc.name}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                      <optgroup label="Otra opción">
                        <option value="Valoración diagnóstica general / Múltiples zonas">
                          Valoración diagnóstica general / Múltiples zonas
                        </option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Modality */}
                  <div className="space-y-1.5">
                    <label htmlFor="modality" className="text-xs font-bold text-navy-800">
                      Modalidad de Consulta *
                    </label>
                    <select
                      id="modality"
                      name="modality"
                      value={formData.modality}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary bg-white text-navy-800"
                    >
                      <option value="presencial">Presencial en Torre Zentai (Bogotá)</option>
                      <option value="teleconsulta">Teleconsulta Virtual Guiada (Nacional / Exterior)</option>
                    </select>
                  </div>

                  {/* Preferred Time */}
                  <div className="space-y-1.5">
                    <label htmlFor="preferredTime" className="text-xs font-bold text-navy-800">
                      Jornada Preferida *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary bg-white text-navy-800"
                    >
                      <option value="manana">Mañana (7:30 a.m. – 12:00 m.)</option>
                      <option value="tarde">Tarde (1:00 p.m. – 5:00 p.m.)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-navy-800">
                    Mensaje o Antecedentes (Opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos brevemente qué resultados buscas o si tienes cirugías previas..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                  />
                </div>

                {/* Ley 1581 Habeas Data Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 text-xs text-graphite-body cursor-pointer">
                    <input
                      type="checkbox"
                      name="privacyConsent"
                      checked={formData.privacyConsent}
                      onChange={handleChange}
                      className="mt-0.5 w-4 h-4 rounded border-cream-300 text-medical-primary focus:ring-medical-primary"
                    />
                    <span>
                      Autorizo el tratamiento de mis datos personales conforme a la{' '}
                      <Link to="/politica-de-datos" target="_blank" className="text-medical-primary font-semibold underline">
                        Ley 1581 de 2012 de Colombia
                      </Link>{' '}
                      y la política de confidencialidad y secreto médico del Dr. Andrés Gómez.
                    </span>
                  </label>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 text-sm font-semibold flex items-center justify-center gap-2 shadow-elevated"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirmar Solicitud de Cita</span>
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Sede & Direct WhatsApp Channel */}
          <div className="lg:col-span-4 space-y-6">
            {/* Torre Zentai Card */}
            <div className="bg-cream-50 rounded-3xl p-6 border border-cream-300 space-y-4">
              <h4 className="font-serif text-lg font-bold text-navy-800 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-medical-primary" />
                <span>Sede Torre Zentai</span>
              </h4>
              <p className="text-xs text-graphite-body leading-relaxed">
                {siteConfig.contact.address.full}
              </p>
              <div className="space-y-1.5 text-xs text-graphite-muted pt-2 border-t border-cream-300/60">
                <p><strong>PBX:</strong> {siteConfig.contact.pbx.join(' • ')}</p>
                <p><strong>Horarios:</strong> {siteConfig.contact.hours.summary}</p>
                <p className="text-medical-primary font-semibold">{siteConfig.contact.hours.emergency}</p>
              </div>
            </div>

            {/* Quick WhatsApp Box */}
            <div className="bg-white rounded-3xl p-6 border border-cream-300 shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-navy-800">
                  ¿Prefieres agendar en 1 clic por WhatsApp?
                </h4>
                <p className="text-xs text-graphite-body leading-relaxed">
                  Chatea directamente con nuestro equipo de admisiones médicas en Torre Zentai.
                </p>
              </div>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.primary}?text=${encodeURIComponent('Hola Dr. Andrés Gómez, deseo agendar una valoración médica especializada y recibir orientación.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold inline-flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Escribir al WhatsApp oficial</span>
              </a>
            </div>

            {/* Guarantee Box */}
            <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300 flex items-start gap-3 text-xs text-graphite-body">
              <ShieldCheck className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Tus datos clínicos y de contacto son confidenciales y se encuentran protegidos bajo secreto profesional médico.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentPage;
