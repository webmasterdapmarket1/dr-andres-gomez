import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
  ShieldAlert,
  Award,
  Calendar,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { PROCEDURE_CATEGORIES, FOOTER_QUICK_LINKS } from '@/data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-cream-100 border-t border-navy-800 pt-16 pb-12 selection:bg-medical-soft selection:text-medical-softText">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          {/* Section 1: Doctor Brand & Credentials */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                {siteConfig.doctor.name}
              </span>
              <span className="font-sans text-xs font-bold tracking-wider text-medical-soft uppercase block mt-1">
                {siteConfig.doctor.specialty}
              </span>
            </div>
            <p className="text-graphite-muted text-xs leading-relaxed">
              Más de 29 años de experiencia quirúrgica transformando vidas en Bogotá. Protocolos
              quirúrgicos de alta definición con tecnología láser y vaser, y enfoque de mínima
              invasión y calidez humana.
            </p>
            <div className="pt-2 space-y-1.5 text-xs text-cream-200">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-medical-soft flex-shrink-0" aria-hidden="true" />
                <span>Sociedad Colombiana de Cirugía Plástica (SCCP)</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-medical-soft flex-shrink-0" aria-hidden="true" />
                <span>Especialista SACPER (Buenos Aires, Argentina)</span>
              </div>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Navegación Rápida
            </h3>
            <ul className="space-y-2 text-xs">
              {FOOTER_QUICK_LINKS.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-graphite-muted hover:text-white transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/agendar"
                  className="text-medical-soft font-semibold hover:text-white transition-colors duration-150 inline-flex items-center gap-1.5 py-0.5"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reserva tu cita de valoración</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Procedures Directory */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Procedimientos
            </h3>
            <div className="space-y-4 text-xs">
              {PROCEDURE_CATEGORIES.map((cat) => (
                <div key={cat.id}>
                  <Link
                    to={cat.href}
                    className="font-semibold text-cream-200 hover:text-medical-soft block mb-1"
                  >
                    {cat.name} ({cat.count})
                  </Link>
                  <p className="text-graphite-muted text-[11px] line-clamp-2">
                    {cat.procedures.slice(0, 3).map((p) => p.name).join(' • ')} y más.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Torre Zentai Contact Info & Schedule */}
          <div className="space-y-4 text-xs">
            <h3 className="font-serif text-lg font-semibold text-white mb-4">
              Sede Torre Zentai
            </h3>
            <div className="flex items-start gap-2.5 text-graphite-muted">
              <MapPin className="w-4 h-4 text-medical-soft flex-shrink-0 mt-0.5" aria-hidden="true" />
              <address className="not-italic leading-relaxed">
                {siteConfig.contact.address.full}
              </address>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex items-center gap-2.5 text-graphite-muted">
                <Phone className="w-4 h-4 text-medical-soft flex-shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.contact.pbx[0].replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors"
                  title="Llamar a PBX Torre Zentai"
                >
                  PBX: {siteConfig.contact.pbx[0]}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-graphite-muted">
                <MessageCircle className="w-4 h-4 text-accent-whatsapp flex-shrink-0" aria-hidden="true" />
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  title="Escribir a WhatsApp oficial"
                >
                  WhatsApp: {siteConfig.contact.whatsapp.displayPrimary}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-graphite-muted pt-2 border-t border-navy-800">
              <Clock className="w-4 h-4 text-medical-soft flex-shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-0.5 text-[11px]">
                <p>{siteConfig.contact.hours.weekdays}</p>
                <p>{siteConfig.contact.hours.weekend}</p>
                <p className="text-medical-soft">{siteConfig.contact.hours.emergency}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Institutional Backing & Social Links Strip */}
        <div className="py-6 border-b border-navy-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          {/* Institutional Backing */}
          <div className="flex items-center gap-3 text-graphite-muted">
            <span>Respaldo institucional:</span>
            <a
              href={siteConfig.institutional.clinicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-medical-soft font-medium inline-flex items-center gap-1 transition-colors"
              title="Visitar sitio de la Clínica Colombiana de Obesidad y Metabolismo"
            >
              <span>{siteConfig.institutional.clinicName}</span>
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-muted hover:text-white transition-colors p-1"
              aria-label="Facebook del Dr. Andrés Gómez"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-muted hover:text-white transition-colors p-1"
              aria-label="Instagram oficial"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-muted hover:text-white transition-colors p-1"
              aria-label="YouTube oficial"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-graphite-muted hover:text-white transition-colors p-1"
              aria-label="X (Twitter) del Dr. Andrés Gómez"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Section 6 & 7: Immutable Bioethical Disclaimer Box */}
        <div className="my-8 p-4 rounded-xl bg-navy-900 border border-navy-700/80 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-medical-soft flex-shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <span className="text-xs font-bold text-cream-100 uppercase tracking-wider block">
              Aviso Legal &amp; Bioética Médica — Imágenes Clínicas
            </span>
            <p className="text-[11px] text-graphite-muted leading-relaxed">
              {siteConfig.legal.disclaimerImages}
            </p>
          </div>
        </div>

        {/* Section 8: Bottom Copyright & Data Policy */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-graphite-muted">
          <p>© {new Date().getFullYear()} {siteConfig.doctor.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link to="/politica-de-datos" className="hover:text-white transition-colors underline">
              Política de Tratamiento de Datos (Ley 1581)
            </Link>
            <span aria-hidden="true">•</span>
            <span>{siteConfig.institutional.secretaryOfHealth}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
