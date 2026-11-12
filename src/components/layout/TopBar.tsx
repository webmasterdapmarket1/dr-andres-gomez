import React from 'react';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-navy-900 text-cream-100 text-xs py-2 px-4 border-b border-navy-700/60 selection:bg-medical-soft selection:text-medical-softText">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        {/* Left item: Location & Sede */}
        <div className="flex items-center gap-2 text-cream-200">
          <MapPin className="w-3.5 h-3.5 text-medical-soft flex-shrink-0" aria-hidden="true" />
          <a
            href={siteConfig.contact.address.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-150 inline-flex items-center gap-1"
            title="Ver ubicación de Torre Zentai en Google Maps"
          >
            <span className="font-semibold text-white">Torre Zentai:</span>
            <span className="hidden sm:inline">
              {siteConfig.contact.address.street}, {siteConfig.contact.address.tower}, Cons. 805 • Bogotá
            </span>
            <span className="sm:hidden">Cons. 805 • Bogotá</span>
          </a>
        </div>

        {/* Center / Hours item: visible on desktop */}
        <div className="hidden lg:flex items-center gap-2 text-cream-200/90 text-[11px]">
          <Clock className="w-3.5 h-3.5 text-medical-soft flex-shrink-0" aria-hidden="true" />
          <span>Lun-Vie 7:30 a.m. – 5:00 p.m. • Sáb 8:00 a.m. – 12:00 m.</span>
        </div>

        {/* Right item: PBX & WhatsApp contacts */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-medical-soft flex-shrink-0" aria-hidden="true" />
            <a
              href={`tel:${siteConfig.contact.pbx[0].replace(/\s+/g, '')}`}
              className="text-cream-200 hover:text-white transition-colors duration-150 font-medium"
              title="Llamar a PBX Torre Zentai"
            >
              PBX: {siteConfig.contact.pbx[0]}
            </a>
          </div>

          <span className="text-navy-700 hidden sm:inline" aria-hidden="true">|</span>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-medical-soft hover:text-white font-medium transition-colors duration-150"
            title="Escribir al WhatsApp oficial del Dr. Andrés Gómez"
          >
            <MessageCircle className="w-3.5 h-3.5 text-accent-whatsapp" aria-hidden="true" />
            <span>WhatsApp: {siteConfig.contact.whatsapp.displayPrimary}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
