import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Calendar,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { PROCEDURE_CATEGORIES } from '@/data/navigation';

export const Header: React.FC = () => {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const location = useLocation();

  const megaMenuRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close menus on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsResourcesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle escape key to close open menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMegaMenuOpen(false);
        setIsResourcesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-cream-100/95 backdrop-blur-md border-b border-cream-300/80 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex flex-col group py-1" aria-label="Ir a la página de inicio">
            <span className="font-serif text-2xl sm:text-[26px] font-semibold tracking-tight text-navy-800 group-hover:text-medical-primary transition-colors duration-150">
              Dr. Andrés Gómez
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-bold tracking-wider text-medical-primary uppercase -mt-0.5">
              Cirujano Plástico &amp; Reconstructivo
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Navegación principal">
            <Link
              to="/"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/' ? 'text-medical-primary font-semibold' : 'text-navy-800 hover:text-medical-primary'
              }`}
            >
              Inicio
            </Link>

            <Link
              to="/sobre-el-dr-gomez"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/sobre-el-dr-gomez' ? 'text-medical-primary font-semibold' : 'text-navy-800 hover:text-medical-primary'
              }`}
            >
              Sobre el Dr. Gómez
            </Link>

            {/* Mega-Menu Trigger Button */}
            <div className="relative" ref={megaMenuRef}>
              <button
                type="button"
                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                aria-expanded={isMegaMenuOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isMegaMenuOpen || location.pathname.startsWith('/procedimientos')
                    ? 'text-medical-primary font-semibold'
                    : 'text-navy-800 hover:text-medical-primary'
                }`}
              >
                <span>Procedimientos</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isMegaMenuOpen ? 'rotate-180 text-medical-primary' : 'text-graphite-muted'}`}
                  aria-hidden="true"
                />
              </button>

              {/* 3-Column Mega-Menu Container */}
              {isMegaMenuOpen && (
                <div
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                  role="menu"
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[920px] xl:w-[1040px] bg-white rounded-2xl shadow-elevated border border-cream-300/80 p-6 z-50 animate-fadeIn"
                >
                  <div className="grid grid-cols-3 gap-6 divide-x divide-cream-300/50">
                    {/* Column 1: Cirugía Corporal */}
                    <div className="pr-4">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-cream-300/60">
                        <Link
                          to="/procedimientos/cirugia-corporal"
                          className="font-serif text-lg font-semibold text-navy-800 hover:text-medical-primary flex items-center gap-1.5"
                        >
                          <span>Cirugía Corporal</span>
                          <span className="text-xs font-sans text-graphite-muted font-normal">({PROCEDURE_CATEGORIES[0].count})</span>
                        </Link>
                        <span className="badge-medical-soft text-[10px] px-2 py-0.5 rounded-full font-bold">Alta Definición</span>
                      </div>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-medical-primary mb-1.5">
                        Contorno Corporal
                      </div>
                      <ul className="space-y-1 mb-3">
                        {PROCEDURE_CATEGORIES[0].procedures.slice(0, 7).map((proc) => (
                          <li key={proc.slug}>
                            <Link
                              to={proc.href}
                              className="block py-1 px-2 -mx-2 rounded-lg text-xs text-graphite-body hover:text-navy-800 hover:bg-cream-50 transition-colors"
                            >
                              <div className="font-medium text-navy-800 flex items-center justify-between">
                                <span>{proc.name}</span>
                                {proc.badge && (
                                  <span className="text-[10px] font-sans font-bold text-medical-primary bg-medical-soft/40 px-1.5 rounded">
                                    {proc.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="text-[11px] font-bold uppercase tracking-wider text-medical-primary mb-1.5 pt-2 border-t border-cream-300/40">
                        Cirugía Mamaria &amp; Especialidades
                      </div>
                      <ul className="space-y-1">
                        {PROCEDURE_CATEGORIES[0].procedures.slice(7, 15).map((proc) => (
                          <li key={proc.slug}>
                            <Link
                              to={proc.href}
                              className="block py-1 px-2 -mx-2 rounded-lg text-xs text-graphite-body hover:text-navy-800 hover:bg-cream-50 transition-colors"
                            >
                              <div className="font-medium text-navy-800 flex items-center justify-between">
                                <span>{proc.name}</span>
                                {proc.badge && (
                                  <span className="text-[10px] font-sans font-bold text-medical-primary bg-medical-soft/40 px-1.5 rounded">
                                    {proc.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/procedimientos/cirugia-corporal"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-medical-primary hover:text-medical-hover mt-3 pt-2"
                      >
                        <span>Ver los 15 procedimientos corporales</span>
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>

                    {/* Column 2: Cirugía Facial */}
                    <div className="px-4">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-cream-300/60">
                        <Link
                          to="/procedimientos/cirugia-facial"
                          className="font-serif text-lg font-semibold text-navy-800 hover:text-medical-primary flex items-center gap-1.5"
                        >
                          <span>Cirugía Facial</span>
                          <span className="text-xs font-sans text-graphite-muted font-normal">({PROCEDURE_CATEGORIES[1].count})</span>
                        </Link>
                        <span className="badge-medical-soft text-[10px] px-2 py-0.5 rounded-full font-bold">Estructural</span>
                      </div>

                      <ul className="space-y-1.5">
                        {PROCEDURE_CATEGORIES[1].procedures.map((proc) => (
                          <li key={proc.slug}>
                            <Link
                              to={proc.href}
                              className="block p-2 -mx-2 rounded-lg hover:bg-cream-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-xs text-navy-800">{proc.name}</span>
                                {proc.badge && (
                                  <span className="text-[10px] font-sans font-bold text-medical-primary bg-medical-soft/40 px-1.5 rounded">
                                    {proc.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[11px] text-graphite-muted line-clamp-1 mt-0.5">
                                {proc.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-4 p-3 bg-cream-50 rounded-xl border border-cream-300/40">
                        <p className="text-[11px] text-graphite-body leading-relaxed">
                          Armonización facial con resultados naturales y preservación anatómica.
                        </p>
                        <Link
                          to="/procedimientos/cirugia-facial"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-medical-primary hover:text-medical-hover mt-2"
                        >
                          <span>Explorar catálogo facial</span>
                          <ArrowRight className="w-3 h-3" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>

                    {/* Column 3: Cirugía Íntima */}
                    <div className="pl-4">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-cream-300/60">
                        <Link
                          to="/procedimientos/cirugia-intima"
                          className="font-serif text-lg font-semibold text-navy-800 hover:text-medical-primary flex items-center gap-1.5"
                        >
                          <span>Cirugía Íntima</span>
                          <span className="text-xs font-sans text-graphite-muted font-normal">({PROCEDURE_CATEGORIES[2].count})</span>
                        </Link>
                        <span className="bg-cream-200 text-navy-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                          Privacidad 100%
                        </span>
                      </div>

                      <div className="mb-3 px-2 py-1.5 rounded-lg bg-navy-900 text-cream-100 flex items-center gap-2 text-[11px]">
                        <ShieldCheck className="w-4 h-4 text-medical-soft flex-shrink-0" aria-hidden="true" />
                        <span>Protocolo confidencial y valoración privada en Torre Zentai.</span>
                      </div>

                      <ul className="space-y-1.5">
                        {PROCEDURE_CATEGORIES[2].procedures.map((proc) => (
                          <li key={proc.slug}>
                            <Link
                              to={proc.href}
                              className="block p-2 -mx-2 rounded-lg hover:bg-cream-50 transition-colors"
                            >
                              <span className="font-medium text-xs text-navy-800 block">{proc.name}</span>
                              <p className="text-[11px] text-graphite-muted line-clamp-1 mt-0.5">
                                {proc.description}
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <Link
                        to="/procedimientos/cirugia-intima"
                        className="inline-flex items-center gap-1 text-xs font-semibold text-medical-primary hover:text-medical-hover mt-3"
                      >
                        <span>Ver información confidencial</span>
                        <ArrowRight className="w-3 h-3" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* Mega-Menu Bottom Banner */}
                  <div className="mt-6 pt-4 border-t border-cream-300/70 flex items-center justify-between bg-cream-50/60 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 text-medical-primary" aria-hidden="true" />
                      <span className="text-xs text-graphite-body">
                        Todos los procedimientos se realizan en quirófanos plenamente acreditados por la Secretaría de Salud.
                      </span>
                    </div>
                    <Link
                      to="/procedimientos"
                      className="text-xs font-bold text-medical-primary hover:text-medical-hover inline-flex items-center gap-1"
                    >
                      <span>Índice general de los 28 procedimientos</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/resultados"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname.startsWith('/resultados') ? 'text-medical-primary font-semibold' : 'text-navy-800 hover:text-medical-primary'
              }`}
            >
              Resultados
            </Link>

            {/* Resources Dropdown */}
            <div className="relative" ref={resourcesRef}>
              <button
                type="button"
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                onMouseEnter={() => setIsResourcesOpen(true)}
                aria-expanded={isResourcesOpen}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  isResourcesOpen || location.pathname.startsWith('/recursos')
                    ? 'text-medical-primary font-semibold'
                    : 'text-navy-800 hover:text-medical-primary'
                }`}
              >
                <span>Recursos</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isResourcesOpen ? 'rotate-180 text-medical-primary' : 'text-graphite-muted'}`}
                  aria-hidden="true"
                />
              </button>

              {isResourcesOpen && (
                <div
                  onMouseLeave={() => setIsResourcesOpen(false)}
                  className="absolute left-0 top-full mt-2 w-56 bg-white rounded-xl shadow-elevated border border-cream-300/80 py-2 z-50 animate-fadeIn"
                >
                  <Link
                    to="/recursos/blog"
                    className="block px-4 py-2 text-sm text-navy-800 hover:bg-cream-50 hover:text-medical-primary font-medium"
                  >
                    Blog Médico
                  </Link>
                  <Link
                    to="/recursos/historias-de-vida"
                    className="block px-4 py-2 text-sm text-navy-800 hover:bg-cream-50 hover:text-medical-primary font-medium"
                  >
                    Historias de Vida
                  </Link>
                  <Link
                    to="/recursos/prensa"
                    className="block px-4 py-2 text-sm text-navy-800 hover:bg-cream-50 hover:text-medical-primary font-medium"
                  >
                    Notas de Prensa
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contacto"
              className={`px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                location.pathname === '/contacto' ? 'text-medical-primary font-semibold' : 'text-navy-800 hover:text-medical-primary'
              }`}
            >
              Contacto
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/agendar"
              className="btn-primary inline-flex items-center gap-2 text-sm py-2.5 px-5 shadow-sm hover:shadow-card transition-all"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Reserva tu cita</span>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/agendar"
              className="btn-primary text-xs py-2 px-3.5 inline-flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Agendar</span>
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-navy-800 hover:bg-cream-200 transition-colors focus:outline-none focus:ring-2 focus:ring-medical-primary"
              aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Slide-Over */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Content */}
          <div className="w-full max-w-sm ml-auto bg-cream-100 h-[calc(100vh-5rem)] overflow-y-auto shadow-2xl p-6 flex flex-col justify-between border-l border-cream-300">
            <div className="space-y-4">
              <nav className="space-y-1">
                <Link
                  to="/"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-navy-800 hover:bg-cream-200"
                >
                  Inicio
                </Link>
                <Link
                  to="/sobre-el-dr-gomez"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-navy-800 hover:bg-cream-200"
                >
                  Sobre el Dr. Gómez
                </Link>

                {/* Mobile Procedures Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() =>
                      setMobileExpandedCat(mobileExpandedCat === 'procedimientos' ? null : 'procedimientos')
                    }
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-navy-800 hover:bg-cream-200"
                  >
                    <span>Procedimientos (28)</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${mobileExpandedCat === 'procedimientos' ? 'rotate-180 text-medical-primary' : ''}`}
                    />
                  </button>

                  {mobileExpandedCat === 'procedimientos' && (
                    <div className="ml-3 pl-3 border-l-2 border-medical-primary/30 space-y-2 mt-2 py-1">
                      {PROCEDURE_CATEGORIES.map((cat) => (
                        <div key={cat.id} className="space-y-1">
                          <Link
                            to={cat.href}
                            className="block text-sm font-bold text-navy-800 hover:text-medical-primary py-1"
                          >
                            {cat.name} ({cat.count})
                          </Link>
                          <ul className="pl-2 space-y-1 text-xs text-graphite-body">
                            {cat.procedures.map((p) => (
                              <li key={p.slug}>
                                <Link
                                  to={p.href}
                                  className="block py-0.5 hover:text-medical-primary"
                                >
                                  {p.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to="/resultados"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-navy-800 hover:bg-cream-200"
                >
                  Resultados (+18)
                </Link>

                <div className="pt-2 border-t border-cream-300">
                  <span className="text-xs font-bold uppercase tracking-wider text-graphite-muted px-3">
                    Recursos &amp; Información
                  </span>
                  <Link
                    to="/recursos/blog"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-navy-800 hover:bg-cream-200"
                  >
                    Blog Médico
                  </Link>
                  <Link
                    to="/recursos/historias-de-vida"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-navy-800 hover:bg-cream-200"
                  >
                    Historias de Vida
                  </Link>
                  <Link
                    to="/recursos/prensa"
                    className="block px-3 py-2 rounded-xl text-sm font-medium text-navy-800 hover:bg-cream-200"
                  >
                    Prensa &amp; Reconocimientos
                  </Link>
                </div>

                <Link
                  to="/contacto"
                  className="block px-3 py-2.5 rounded-xl text-base font-semibold text-navy-800 hover:bg-cream-200"
                >
                  Contacto &amp; Sede Zentai
                </Link>
              </nav>
            </div>

            {/* Bottom Contact / Direct Actions */}
            <div className="pt-6 border-t border-cream-300 space-y-3">
              <Link
                to="/agendar"
                className="btn-primary w-full py-3 text-center justify-center text-sm flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <span>Reserva tu cita</span>
              </Link>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <a
                  href={`tel:${siteConfig.contact.pbx[0].replace(/\s+/g, '')}`}
                  className="p-2.5 rounded-xl bg-white border border-cream-300 flex items-center justify-center gap-1.5 font-medium text-navy-800 hover:text-medical-primary"
                >
                  <Phone className="w-3.5 h-3.5 text-medical-primary" aria-hidden="true" />
                  <span>PBX</span>
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.primary}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white border border-cream-300 flex items-center justify-center gap-1.5 font-medium text-navy-800 hover:text-medical-primary"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-accent-whatsapp" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
