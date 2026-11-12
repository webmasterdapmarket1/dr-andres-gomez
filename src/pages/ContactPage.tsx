import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  CheckCircle2,
  Car,
  Compass,
} from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { siteConfig } from '@/data/siteConfig';

export const ContactPage: React.FC = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    setSent(true);
  };

  return (
    <div className="py-10 lg:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          kicker="Sede Médica y Atención al Paciente"
          title="Ubicación y Canales de *atención* oficial en Bogotá"
          subtitle="Visítanos en nuestras instalaciones habilitadas en el norte de Bogotá o comunícate directamente por nuestros canales oficiales."
        />

        {/* 4 Contact Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800">Dirección Sede</h3>
              <p className="text-xs text-graphite-body leading-relaxed">
                {siteConfig.contact.address.full}
              </p>
            </div>
            <a
              href={siteConfig.contact.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1 pt-2 border-t border-cream-200"
            >
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 2: PBX Phones */}
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800">Líneas Telefónicas</h3>
              <div className="space-y-1 text-xs">
                {siteConfig.contact.pbx.map((phone, i) => (
                  <a
                    key={i}
                    href={`tel:${phone.replace(/\s+/g, '')}`}
                    className="block text-graphite-body hover:text-medical-primary font-medium"
                  >
                    PBX: {phone}
                  </a>
                ))}
              </div>
            </div>
            <span className="text-[11px] text-graphite-muted pt-2 border-t border-cream-200 block">
              Atención telefónica en jornada laboral
            </span>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800">WhatsApp Oficial</h3>
              <div className="space-y-1 text-xs">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-graphite-body hover:text-medical-primary font-medium"
                >
                  Principal: {siteConfig.contact.whatsapp.displayPrimary}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.alternate}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-graphite-body hover:text-medical-primary font-medium"
                >
                  Alterno: {siteConfig.contact.whatsapp.displayAlternate}
                </a>
              </div>
            </div>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1 pt-2 border-t border-cream-200"
            >
              <span>Escribir ahora</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-2xl bg-white border border-cream-300 shadow-sm flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-medical-soft text-medical-primary flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg font-bold text-navy-800">Horarios de Sede</h3>
              <div className="space-y-1 text-xs text-graphite-body">
                <p>{siteConfig.contact.hours.weekdays}</p>
                <p>{siteConfig.contact.hours.weekend}</p>
                <p className="text-medical-primary font-bold">{siteConfig.contact.hours.emergency}</p>
              </div>
            </div>
            <span className="text-[11px] text-graphite-muted pt-2 border-t border-cream-200 block">
              Guardia postoperatoria 24/7 activa
            </span>
          </div>
        </div>

        {/* Location & Map Interactive Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-4">
          {/* Map Image & Directions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-elevated relative group">
              <img
                src="/images/map-torre-zentai.png"
                alt="Mapa de localización Torre Zentai en Usaquén Bogotá"
                className="w-full h-auto object-cover max-h-[460px]"
              />
              <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-cream-300 flex items-center justify-between">
                <div>
                  <span className="font-serif text-base font-bold text-navy-800 block">
                    Edificio Torre Zentai • Consultorio 805
                  </span>
                  <span className="text-xs text-graphite-muted">
                    {siteConfig.contact.address.street}, Torre 1, Bogotá D.C.
                  </span>
                </div>
                <a
                  href={siteConfig.contact.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Cómo llegar</span>
                </a>
              </div>
            </div>

            {/* Arrival Instructions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-graphite-body">
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300 flex items-start gap-3">
                <Car className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-navy-800 block">Acceso Vehicular</span>
                  <p>Acceso por la Calle 124 o Carrera 23. El edificio cuenta con parqueadero privado vigilado para visitantes.</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-cream-50 border border-cream-300 flex items-start gap-3">
                <Compass className="w-5 h-5 text-medical-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <span className="font-bold text-navy-800 block">Transporte Público</span>
                  <p>A solo 4 cuadras de la estación TransMilenio Pepe Sierra (Autopista Norte) y rutas zonales por la Cra. 19.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Message Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-cream-300 p-8 shadow-sm">
            {sent ? (
              <div className="text-center py-8 space-y-4 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                <h3 className="font-serif text-2xl font-bold text-navy-800">Mensaje Enviado</h3>
                <p className="text-xs text-graphite-body leading-relaxed">
                  Gracias por comunicarte con nosotros. Un asesor médico te responderá a la mayor brevedad.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-primary text-xs py-2 px-5"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-navy-800 mb-1">
                    Escríbenos directamente
                  </h3>
                  <p className="text-xs text-graphite-muted">
                    Para dudas generales sobre horarios o servicios asistenciales.
                  </p>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactName" className="text-xs font-bold text-navy-800">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactPhone" className="text-xs font-bold text-navy-800">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="contactPhone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactEmail" className="text-xs font-bold text-navy-800">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="contactMessage" className="text-xs font-bold text-navy-800">
                    Mensaje o consulta
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-cream-300 text-sm focus:outline-none focus:ring-2 focus:ring-medical-primary"
                    placeholder="¿En qué podemos orientarte?"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-xs font-bold shadow-sm"
                >
                  Enviar Consulta
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Reception & Consultation Clinic Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-sm">
            <img
              src="/images/recepcion-torre-zentai.png"
              alt="Recepción y sala de espera Torre Zentai"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white text-xs">
              <span className="font-bold text-navy-800 block">Recepción y Sala de Espera</span>
              <span className="text-graphite-muted">Ambiente cálido y privado diseñado para tu comodidad.</span>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-sm">
            <img
              src="/images/consulta-examen.png"
              alt="Consultorio médico de valoración diagnóstica"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-4 bg-white text-xs">
              <span className="font-bold text-navy-800 block">Consultorio de Valoración Diagnóstica</span>
              <span className="text-graphite-muted">Espacio médico equipado para evaluación clínica y antropométrica.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
