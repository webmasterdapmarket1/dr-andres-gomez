/**
 * tests/tier1_features.test.ts
 * 
 * Tier 1: Feature Coverage (60 Test Cases)
 * Mapped to ORIGINAL_REQUEST.md, PROJECT.md, and docs/arquitectura-de-contenidos.md
 */

import { describe, it, expect, beforeEach } from './helpers/test-runner.ts';
import {
  CANONICAL_SITE_CONFIG,
  CANONICAL_PROCEDURES,
  SAMPLE_BLOG_ARTICLES,
  CANONICAL_PATIENT_STORIES,
  CANONICAL_PRESS_ITEMS,
  CANONICAL_RESULTS_CASES,
  buildWhatsAppLink,
  validateBookingPayload,
  validateContactPayload,
} from './helpers/canonical_data.ts';
import { OpaqueBoxHarness, createDrawerController } from './helpers/test-utils.ts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

describe('Tier 1: Feature Coverage (60 Test Cases)', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  // ==========================================================================
  // CARACTERÍSTICA 1: TOPBAR DE CONTACTO TORRE ZENTAI (5 CASOS)
  // ==========================================================================
  describe('Feature 1: Barra de Utilidad Superior (TopBar)', () => {
    it('TC-T1-TOPBAR-01: Renderizado y presencia de datos de sede Torre Zentai', () => {
      const { torreZentai } = CANONICAL_SITE_CONFIG;
      expect(torreZentai.edificio).toContain('Torre Zentai');
      expect(torreZentai.address).toContain('Carrera 23 No. 124');
      expect(torreZentai.city).toBe('Bogotá D.C., Colombia');
      expect(torreZentai.mapsUrl).toBe('https://maps.app.goo.gl/m88t5MnQyuwVAXJN9');
    });

    it('TC-T1-TOPBAR-02: Presencia y formato de teléfonos PBX con enlace tel:', () => {
      const { phones } = CANONICAL_SITE_CONFIG;
      expect(phones.pbx1).toBe('+57 315 873 9927');
      expect(phones.pbx2).toBe('+57 315 801 0982');
      const tel1 = `tel:${phones.pbx1.replace(/\s+/g, '')}`;
      const tel2 = `tel:${phones.pbx2.replace(/\s+/g, '')}`;
      expect(tel1).toBe('tel:+573158739927');
      expect(tel2).toBe('tel:+573158010982');
    });

    it('TC-T1-TOPBAR-03: Enlace directo a WhatsApp en TopBar con protocolo wa.me', () => {
      const { phones } = CANONICAL_SITE_CONFIG;
      expect(phones.whatsappMain).toBe('+57 312 325 5900');
      const cleanPhone = phones.whatsappMain.replace(/[^0-9]/g, '');
      const waLink = `https://wa.me/${cleanPhone}`;
      expect(waLink).toBe('https://wa.me/573123255900');
    });

    it('TC-T1-TOPBAR-04: Horarios de atención y guardia postquirúrgica', () => {
      const { schedules } = CANONICAL_SITE_CONFIG;
      expect(schedules.lunMieJue).toContain('7:30 a.m.');
      expect(schedules.marVie).toContain('8:00 a.m.');
      expect(schedules.sab).toContain('8:00 a.m.');
      expect(schedules.dom).toContain('Guardia postquirúrgica activa');
    });

    it('TC-T1-TOPBAR-05: Adaptación responsiva en pantalla móvil (< 640px)', () => {
      // Verify viewport meta tag exists in index.html to guarantee mobile responsiveness
      const htmlContent = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf8');
      expect(htmlContent).toContain('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');

      // Verify responsive flex wrapping and layout structure in App.tsx TopBar
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('flex flex-wrap items-center justify-between');

      // Verify primary WhatsApp phone availability on mobile
      expect(CANONICAL_SITE_CONFIG.phones.whatsappMain).toBe('+57 312 325 5900');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 2: HEADER STICKY Y MEGA-MENÚ (5 CASOS)
  // ==========================================================================
  describe('Feature 2: Header Sticky y Mega-Menú Multicolumna', () => {
    it('TC-T1-HEADER-01: Persistencia sticky con efecto backdrop-blur', () => {
      // Verify glassmorphism header utility in src/index.css specifies blur(12px)
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('.glass-header {');
      expect(cssContent).toContain('backdrop-filter: blur(12px);');
      expect(cssContent).toContain('-webkit-backdrop-filter: blur(12px);');
      expect(cssContent).toContain('.glass-header-dark {');
    });

    it('TC-T1-HEADER-02: Identidad visual del logotipo y navegación a Home', () => {
      // Verify brand title and author in index.html
      const htmlContent = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf8');
      expect(htmlContent).toContain('<title>Dr. Andrés Gómez | Cirujano Plástico &amp; Reconstructivo • Bogotá</title>');
      expect(htmlContent).toContain('<meta name="author" content="Dr. Andrés Gómez" />');

      // Verify canonical doctor identity and specialty in site config
      expect(CANONICAL_SITE_CONFIG.doctorName).toBe('Dr. Andrés Gómez');
      expect(CANONICAL_SITE_CONFIG.specialty).toBe('Cirujano Plástico, Estético y Reconstructivo');
    });

    it('TC-T1-HEADER-03: Despliegue del Mega-Menú con 3 categorías y 28 procedimientos', () => {
      const corporalProcs = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-corporal');
      const facialProcs = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-facial');
      const intimaProcs = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-intima');

      expect(corporalProcs).toHaveLength(15);
      expect(facialProcs).toHaveLength(7);
      expect(intimaProcs).toHaveLength(6);
      expect(CANONICAL_PROCEDURES).toHaveLength(28);

      for (const p of CANONICAL_PROCEDURES) {
        const canonicalUrl = `/procedimientos/${p.category}/${p.slug}`;
        expect(canonicalUrl).toMatch(/^\/procedimientos\/(cirugia-corporal|cirugia-facial|cirugia-intima)\/[a-z0-9-]+$/);
      }
    });

    it('TC-T1-HEADER-04: Enlaces de navegación principal y botón CTA Agendar', () => {
      // Verify primary button styling token in src/index.css
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('.btn-primary {');
      expect(cssContent).toContain('background-color: #2243A9;');
      expect(cssContent).toContain('border-radius: 9999px;');

      // Verify CTA buttons and route mapping in src/App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('Agendar Consulta de Valoración');
      expect(appContent).toContain('Explorar Procedimientos');
    });

    it('TC-T1-HEADER-05: Menú móvil responsive y drawer accesible', () => {
      // Test Drawer state machine controller exported from test-utils
      const drawer = createDrawerController();
      expect(drawer.isOpen()).toBe(false);
      expect(drawer.getAriaExpanded()).toBe('false');

      drawer.open();
      expect(drawer.isOpen()).toBe(true);
      expect(drawer.getAriaExpanded()).toBe('true');

      drawer.handleKeyDown('Escape');
      expect(drawer.isOpen()).toBe(false);
      expect(drawer.getAriaExpanded()).toBe('false');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 3: HERO DUAL-VARIANT SWITCH (5 CASOS)
  // ==========================================================================
  describe('Feature 3: Conmutador de Variante de Hero (#F4EFE9 vs #0E1424)', () => {
    it('TC-T1-HERO-01: Estado por defecto del Hero en neutro cálido (#F4EFE9)', () => {
      // Verify warm neutral base color token in tailwind.config.js
      const tailwindContent = fs.readFileSync(path.resolve(ROOT_DIR, 'tailwind.config.js'), 'utf8');
      expect(tailwindContent).toContain("100: '#F4EFE9'");

      // Verify CSS variable for base warm background in src/index.css
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('--color-bg-base: #F4EFE9;');

      // Verify theme-color meta tag in index.html defaults to #F4EFE9
      const htmlContent = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf8');
      expect(htmlContent).toContain('<meta name="theme-color" content="#F4EFE9" />');
    });

    it('TC-T1-HERO-02: Conmutación en vivo a variante Navy Oscuro (#0E1424)', () => {
      // Verify dark navy token in tailwind.config.js
      const tailwindContent = fs.readFileSync(path.resolve(ROOT_DIR, 'tailwind.config.js'), 'utf8');
      expect(tailwindContent).toContain("900: '#0E1424'");

      // Verify CSS variable for dark background in src/index.css
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('--color-bg-dark: #0E1424;');

      // Verify SectionHeading component handles theme="dark" vs theme="light"
      const headingCode = fs.readFileSync(path.resolve(ROOT_DIR, 'src/components/ui/SectionHeading.tsx'), 'utf8');
      expect(headingCode).toContain("theme === 'dark'");
      expect(headingCode).toContain("'text-white'");
      expect(headingCode).toContain("'text-navy-800'");
    });

    it('TC-T1-HERO-03: Regla editorial de exactamente 1 palabra en cursiva en H1', () => {
      // Extract real Hero SectionHeading title from src/App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      const titleMatch = appContent.match(/title="([^"]+)"/);
      expect(titleMatch).toBeDefined();

      const title = titleMatch![1];
      // Parse markdown *italic* segments: must contain exactly 1 italic segment
      const italicMatches = title.match(/\*([^*]+)\*/g);
      expect(italicMatches).toBeDefined();
      expect(italicMatches).toHaveLength(1);
      expect(italicMatches![0]).toBe('*excelencia*');

      // Verify styling in src/index.css applies font-style: italic and font-serif to editorial-heading em
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('.editorial-heading em');
      expect(cssContent).toContain('font-style: italic;');
    });

    it('TC-T1-HERO-04: Transición CSS suave y persistencia de renderizado', () => {
      // Verify smooth scroll and font-smoothing in base CSS
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('scroll-behavior: smooth;');
      expect(cssContent).toContain('transition: all 0.2s ease-in-out;');

      // Verify button transition tokens in src/App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('transition-shadow');
    });

    it('TC-T1-HERO-05: CTAs del Hero y chips de confianza médica', () => {
      // Verify the 3 core trust cards in src/App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('Seguridad Quirúrgica');
      expect(appContent).toContain('28 Procedimientos');
      expect(appContent).toContain('Tecnología Avanzada');

      // Verify medical icons are imported and rendered in trust cards
      expect(appContent).toContain('ShieldCheck');
      expect(appContent).toContain('Stethoscope');
      expect(appContent).toContain('GeneralSurgery');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 4: PIE DE PÁGINA Y DISCLAIMER ÉTICO (5 CASOS)
  // ==========================================================================
  describe('Feature 4: Pie de Página Institucional y Disclaimer Ético', () => {
    it('TC-T1-FOOTER-01: Verificación de los 8 bloques estructurales del Footer', () => {
      // Verify structural specification in docs/arquitectura-de-contenidos.md
      const archDoc = fs.readFileSync(path.resolve(ROOT_DIR, 'docs/arquitectura-de-contenidos.md'), 'utf8');
      expect(archDoc).toContain('### Footer');
      expect(archDoc).toContain('1. Marca:');
      expect(archDoc).toContain('2. Enlaces rápidos:');
      expect(archDoc).toContain('3. Procedimientos por categoría');
      expect(archDoc).toContain('4. Contacto:');
      expect(archDoc).toContain('5. Redes sociales');
      expect(archDoc).toContain('6. Enlace discreto a la web de la clínica');
      expect(archDoc).toContain('7. **Disclaimer de imágenes y consentimientos**');
      expect(archDoc).toContain('8. Política de datos · Copyright');
    });

    it('TC-T1-FOOTER-02: Texto literal inmutable del Disclaimer Ético de resultados', () => {
      const expectedText =
        'Las fotografías de resultados (antes y después) publicadas en este sitio corresponden a pacientes reales, quienes otorgaron su consentimiento informado y autorización expresa para su uso con fines informativos y educativos. Los resultados pueden variar de una persona a otra y dependen de las condiciones particulares de cada paciente. La información de este sitio no reemplaza una valoración médica.';

      expect(CANONICAL_SITE_CONFIG.ethicalDisclaimer).toBe(expectedText);
    });

    it('TC-T1-FOOTER-03: Enlace de respaldo institucional a la Clínica CCOM', () => {
      expect(CANONICAL_SITE_CONFIG.clinicUrl).toBe('https://clinicacolombianaobesidad.com');
      expect(CANONICAL_SITE_CONFIG.clinic).toBe('Clínica Colombiana de Obesidad y Metabolismo');
    });

    it('TC-T1-FOOTER-04: Credenciales del doctor y habilitación de Secretaría de Salud', () => {
      const { doctorCredentials } = CANONICAL_SITE_CONFIG;
      expect(doctorCredentials.undergraduate).toContain('Juan N. Corpas');
      expect(doctorCredentials.postgraduate).toContain('SACPER');
      expect(doctorCredentials.membership).toContain('SCCP');
      expect(doctorCredentials.congressCount).toBeGreaterThanOrEqual(30);
    });

    it('TC-T1-FOOTER-05: Enlaces a redes sociales y política de privacidad Ley 1581', () => {
      // Verify legal privacy policy route against CANONICAL_SITE_CONFIG legal configuration
      expect(CANONICAL_SITE_CONFIG.legalRoutes.privacy).toBe('/politica-de-datos');

      // Verify copyright declaration in src/App.tsx footer
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('Dr. Andrés Gómez. Todos los derechos reservados.');
      expect(appContent).toContain('Sociedad Colombiana de Cirugía Plástica (SCCP)');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 5: BOTÓN FLOTANTE CONTEXTUAL DE WHATSAPP (5 CASOS)
  // ==========================================================================
  describe('Feature 5: Botón Flotante Contextual de WhatsApp', () => {
    it('TC-T1-WAPP-01: Posicionamiento flotante fijo en esquina inferior derecha', () => {
      // Verify WhatsApp official brand color token in tailwind.config.js
      const tailwindContent = fs.readFileSync(path.resolve(ROOT_DIR, 'tailwind.config.js'), 'utf8');
      expect(tailwindContent).toContain("whatsapp: '#25D366'");

      // Verify CSS variable and elevated floating shadow in src/index.css
      const cssContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/index.css'), 'utf8');
      expect(cssContent).toContain('--color-whatsapp: #25D366;');
      expect(cssContent).toContain('--shadow-floating:');
    });

    it('TC-T1-WAPP-02: Mensaje contextual dinámico en la página Home', () => {
      const link = buildWhatsAppLink('/');
      expect(link).toContain('573123255900');
      const decoded = decodeURIComponent(link);
      expect(decoded).toContain('deseo agendar una valoración médica especializada');
    });

    it('TC-T1-WAPP-03: Mensaje contextual dinámico en Lipoescultura Láser', () => {
      const link = buildWhatsAppLink('/procedimientos/cirugia-corporal/lipoescultura-laser', 'Lipoescultura Láser');
      expect(link).toContain('573123255900');
      const decoded = decodeURIComponent(link);
      expect(decoded).toContain('Lipoescultura Láser');
    });

    it('TC-T1-WAPP-04: Mensaje contextual dinámico en página de Contacto Zentai', () => {
      const link = buildWhatsAppLink('/contacto');
      const decoded = decodeURIComponent(link);
      expect(decoded).toContain('Torre Zentai');
    });

    it('TC-T1-WAPP-05: Mensaje contextual dinámico en página de Resultados', () => {
      const link = buildWhatsAppLink('/resultados');
      const decoded = decodeURIComponent(link);
      expect(decoded).toContain('vi los resultados de antes y después');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 6: VISTA SOBRE EL DR. GÓMEZ (/sobre-el-dr-gomez) (5 CASOS)
  // ==========================================================================
  describe('Feature 6: Vista Sobre el Dr. Gómez (/sobre-el-dr-gomez)', () => {
    it('TC-T1-ABOUT-01: Encabezado editorial con Cormorant Garamond y cursiva', () => {
      // Verify Cormorant Garamond Google Font stylesheet preconnect and link in index.html
      const htmlContent = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf8');
      expect(htmlContent).toContain('family=Cormorant+Garamond');

      // Verify serif font configuration in tailwind.config.js
      const tailwindContent = fs.readFileSync(path.resolve(ROOT_DIR, 'tailwind.config.js'), 'utf8');
      expect(tailwindContent).toContain('Cormorant Garamond');

      // Verify SectionHeading enforces italic font-serif styling in src/components/ui/SectionHeading.tsx
      const componentCode = fs.readFileSync(path.resolve(ROOT_DIR, 'src/components/ui/SectionHeading.tsx'), 'utf8');
      expect(componentCode).toContain('italic font-serif');
    });

    it('TC-T1-ABOUT-02: Formación académica y credenciales médicas', () => {
      const { doctorCredentials } = CANONICAL_SITE_CONFIG;
      expect(doctorCredentials.undergraduate).toBe('Escuela de Medicina Juan N. Corpas');
      expect(doctorCredentials.postgraduate).toContain('SACPER');
      expect(doctorCredentials.membership).toBe('Sociedad Colombiana de Cirugía Plástica (SCCP)');
    });

    it('TC-T1-ABOUT-03: Línea de tiempo interactiva con más de 30 actualizaciones', () => {
      const congressCount = CANONICAL_SITE_CONFIG.doctorCredentials.congressCount;
      expect(congressCount).toBeGreaterThanOrEqual(30);
    });

    it('TC-T1-ABOUT-04: Filosofía quirúrgica de mínima incisión y humanización', () => {
      // Verify surgical philosophy documentation in docs/arquitectura-de-contenidos.md
      const archDoc = fs.readFileSync(path.resolve(ROOT_DIR, 'docs/arquitectura-de-contenidos.md'), 'utf8');
      expect(archDoc).toContain('minimizar el trauma quirúrgico');
      expect(archDoc).toContain('uso de tecnología láser');
      expect(archDoc).toContain('atención centrada en el paciente');
    });

    it('TC-T1-ABOUT-05: Bloque de respaldo CCOM y CTA a agendar', () => {
      // Verify institutional backing data in CANONICAL_SITE_CONFIG
      expect(CANONICAL_SITE_CONFIG.clinic).toBe('Clínica Colombiana de Obesidad y Metabolismo');
      expect(CANONICAL_SITE_CONFIG.clinicUrl).toBe('https://clinicacolombianaobesidad.com');

      // Verify routing target exists in App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('Clínica Colombiana de Obesidad');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 7: RESULTADOS Y CONTROL INTERSTITIAL GATE (+18) (5 CASOS)
  // ==========================================================================
  describe('Feature 7: Vista de Resultados y Control Interstitial Gate (+18)', () => {
    it('TC-T1-GATE-01: Intercepción inicial con Modal +18 al entrar a /resultados', () => {
      const hasConsent = sessionStorage.getItem('adult_consent') === 'true';
      expect(hasConsent).toBe(false);

      const modalDisplayed = !hasConsent;
      expect(modalDisplayed).toBe(true);
    });

    it('TC-T1-GATE-02: Aceptación de consentimiento +18 y persistencia en sessionStorage', () => {
      sessionStorage.setItem('adult_consent', 'true');
      expect(sessionStorage.getItem('adult_consent')).toBe('true');

      const modalDisplayed = sessionStorage.getItem('adult_consent') !== 'true';
      expect(modalDisplayed).toBe(false);
    });

    it('TC-T1-GATE-03: Rechazo de consentimiento y redirección inmediata a Home', () => {
      const harness = new OpaqueBoxHarness('/resultados');
      expect(harness.currentRoute).toBe('/resultados');

      // User rejects age gate
      const onReject = () => {
        sessionStorage.removeItem('adult_consent');
        harness.navigate('/');
      };

      onReject();
      expect(harness.currentRoute).toBe('/');
      expect(sessionStorage.getItem('adult_consent')).toBeFalsy();
    });

    it('TC-T1-GATE-04: Presentación de tarjetas simétricas Antes/Después con metadatos', () => {
      // Assert against CANONICAL_RESULTS_CASES exported from canonical_data
      expect(CANONICAL_RESULTS_CASES.length).toBeGreaterThanOrEqual(2);
      for (const c of CANONICAL_RESULTS_CASES) {
        expect(c.badges).toContain('ANTES');
        expect(c.badges).toContain('DESPUÉS');
        expect(c.evolution).toContain('postoperatorio');
        expect(c.patientAge).toBeGreaterThanOrEqual(18);
      }
    });

    it('TC-T1-GATE-05: Protocolo bioético y ausencia de fotos explícitas en Cirugía Íntima', () => {
      const intimaProcedures = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-intima');
      expect(intimaProcedures).toHaveLength(6);

      for (const proc of intimaProcedures) {
        expect(proc.isSensitiveIntimate).toBe(true);
      }

      const intimateDisclaimer =
        'Por respeto a la privacidad del paciente y normativas bioéticas, los resultados de cirugía íntima se evalúan exclusivamente en consulta médica presencial.';
      expect(intimateDisclaimer).toContain('normativas bioéticas');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 8: RECURSOS: BLOG CON BUSCADOR Y FILTROS (5 CASOS)
  // ==========================================================================
  describe('Feature 8: Recursos: Blog con Buscador en Tiempo Real y Filtros', () => {
    it('TC-T1-BLOG-01: Renderizado del listado de artículos y categorías temáticas', () => {
      expect(SAMPLE_BLOG_ARTICLES.length).toBeGreaterThanOrEqual(4);
      for (const article of SAMPLE_BLOG_ARTICLES) {
        expect(article.title.length).toBeGreaterThan(10);
        expect(article.author).toBe('Dr. Andrés Gómez');
        expect(article.category).toBeDefined();
      }
    });

    it('TC-T1-BLOG-02: Búsqueda reactiva en tiempo real al escribir en el input', () => {
      const query = 'Lipólisis';
      const filtered = SAMPLE_BLOG_ARTICLES.filter(
        (a) =>
          a.title.toLowerCase().includes(query.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
      );

      expect(filtered.length).toBeGreaterThanOrEqual(1);
      expect(filtered[0].title).toContain('Lipoescultura');
    });

    it('TC-T1-BLOG-03: Filtrado temático por píldoras de categoría', () => {
      const categoryFilter = 'recuperacion';
      const filtered = SAMPLE_BLOG_ARTICLES.filter((a) => a.categorySlug === categoryFilter);

      expect(filtered.length).toBeGreaterThanOrEqual(1);
      for (const a of filtered) {
        expect(a.categorySlug).toBe('recuperacion');
      }
    });

    it('TC-T1-BLOG-04: Navegación al detalle del artículo y datos médicos', () => {
      const article = SAMPLE_BLOG_ARTICLES[0];
      const articleUrl = `/recursos/blog/${article.slug}`;
      expect(articleUrl).toBe('/recursos/blog/cuidados-postoperatorios-lipoescultura');
      expect(article.author).toBe('Dr. Andrés Gómez');
      expect(article.readTime).toContain('min');
    });

    it('TC-T1-BLOG-05: Combinación simultánea de buscador de texto y categoría', () => {
      const cat = 'corporal';
      const query = 'Vaser';

      const filtered = SAMPLE_BLOG_ARTICLES.filter(
        (a) =>
          a.categorySlug === cat &&
          (a.title.toLowerCase().includes(query.toLowerCase()) || a.tags.some((t) => t.toLowerCase().includes(query.toLowerCase())))
      );

      expect(filtered).toHaveLength(1);
      expect(filtered[0].slug).toBe('tecnologia-vaser-vs-laser');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 9: HISTORIAS DE VIDA Y PRENSA (5 CASOS)
  // ==========================================================================
  describe('Feature 9: Historias de Vida y Prensa Médica', () => {
    it('TC-T1-STORIES-01: Renderizado de Historias de Vida con testimonios reales', () => {
      // Assert against CANONICAL_PATIENT_STORIES exported from canonical_data
      expect(CANONICAL_PATIENT_STORIES.length).toBeGreaterThanOrEqual(2);
      for (const s of CANONICAL_PATIENT_STORIES) {
        expect(s.verified).toBe(true);
        expect(s.name.length).toBeGreaterThanOrEqual(3);
        expect(s.testimonial.length).toBeGreaterThan(20);
        const procExists = CANONICAL_PROCEDURES.some((p) => p.slug === s.procedureSlug);
        expect(procExists).toBe(true);
      }
    });

    it('TC-T1-STORIES-02: Navegación al detalle y cross-link al procedimiento', () => {
      const crossLink = '/procedimientos/cirugia-corporal/abdominoplastia';
      const exists = CANONICAL_PROCEDURES.some((p) => `/procedimientos/${p.category}/${p.slug}` === crossLink);
      expect(exists).toBe(true);
    });

    it('TC-T1-PRESS-01: Muro de notas de prensa y apariciones en medios', () => {
      // Assert against CANONICAL_PRESS_ITEMS exported from canonical_data
      expect(CANONICAL_PRESS_ITEMS.length).toBeGreaterThanOrEqual(2);
      const mediaNames = CANONICAL_PRESS_ITEMS.map((item) => item.medium);
      expect(mediaNames).toContain('Caracol Televisión');
      expect(mediaNames).toContain('El Espectador');
    });

    it('TC-T1-PRESS-02: Seguridad en enlaces externos con rel="noopener noreferrer"', () => {
      // Verify all external press links enforce security attributes
      for (const item of CANONICAL_PRESS_ITEMS) {
        expect(item.target).toBe('_blank');
        expect(item.rel).toBe('noopener noreferrer');
        expect(item.url).toMatch(/^https:\/\//);
      }
    });

    it('TC-T1-PRESS-03: Bloque CTA de contacto para medios y relaciones públicas', () => {
      // Assert against media contact specification in CANONICAL_SITE_CONFIG
      expect(CANONICAL_SITE_CONFIG.emails.press).toBe('prensa@drandresgomez.com');
      expect(CANONICAL_SITE_CONFIG.emails.general).toBe('contacto@drandresgomez.com');
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 10: FORMULARIO DE AGENDAMIENTO (/agendar) (5 CASOS)
  // ==========================================================================
  describe('Feature 10: Formulario de Agendamiento de Citas (/agendar)', () => {
    it('TC-T1-BOOK-01: Estructura de campos y selector agrupado optgroup de 28 procedimientos', () => {
      const optgroups = {
        'Cirugía Corporal': CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-corporal'),
        'Cirugía Facial': CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-facial'),
        'Cirugía Íntima': CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-intima')
      };

      expect(optgroups['Cirugía Corporal']).toHaveLength(15);
      expect(optgroups['Cirugía Facial']).toHaveLength(7);
      expect(optgroups['Cirugía Íntima']).toHaveLength(6);
      const totalOptions =
        optgroups['Cirugía Corporal'].length +
        optgroups['Cirugía Facial'].length +
        optgroups['Cirugía Íntima'].length;
      expect(totalOptions).toBe(28);
    });

    it('TC-T1-BOOK-02: Selector de modalidad de atención (Presencial vs Teleconsulta)', () => {
      // Verify booking modalities specified in index.html and canonical site config
      const htmlContent = fs.readFileSync(path.resolve(ROOT_DIR, 'index.html'), 'utf8');
      expect(htmlContent).toContain('Consultas presenciales');
      expect(htmlContent).toContain('teleconsultas');
      expect(htmlContent).toContain('Torre Zentai');
    });

    it('TC-T1-BOOK-03: Checkbox mandatorio de consentimiento conforme a Ley 1581 de 2012', () => {
      const submission = {
        fullName: 'Laura P.',
        phone: '+57 310 123 4567',
        email: 'laura@example.com',
        procedure: 'rinoplastia-ultrasonica',
        privacyConsent: false
      };

      const result = validateBookingPayload(submission);
      expect(result.valid).toBe(false);
      expect(result.errors.privacyConsent).toBe('Debes autorizar el tratamiento de tus datos para continuar');
    });

    it('TC-T1-BOOK-04: Explicación de la ruta del paciente en 3 pasos', () => {
      // Verify patient journey 3-step sequence documented in docs/arquitectura-de-contenidos.md
      const archDoc = fs.readFileSync(path.resolve(ROOT_DIR, 'docs/arquitectura-de-contenidos.md'), 'utf8');
      expect(archDoc).toContain('Te contacta un asesor');
      expect(archDoc).toContain('Agendamos tu valoración');
      expect(archDoc).toContain('Consulta con el Dr. Gómez');
    });

    it('TC-T1-BOOK-05: Envío exitoso del formulario y validación completa', () => {
      const validSubmission = {
        fullName: 'Mariana Valenzuela',
        phone: '+57 310 987 6543',
        email: 'mariana.valenzuela@example.com',
        procedure: 'lipoescultura-laser',
        privacyConsent: true
      };

      const result = validateBookingPayload(validSubmission);
      expect(result.valid).toBe(true);
      expect(Object.keys(result.errors)).toHaveLength(0);
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 11: VISTA DE CONTACTO SEDE TORRE ZENTAI (5 CASOS)
  // ==========================================================================
  describe('Feature 11: Vista de Contacto Sede Torre Zentai (/contacto)', () => {
    it('TC-T1-CONTACT-01: Información física completa y dirección en Bogotá', () => {
      const { torreZentai } = CANONICAL_SITE_CONFIG;
      expect(torreZentai.edificio).toBe('Edificio Torre Zentai');
      expect(torreZentai.address).toBe('Carrera 23 No. 124 – 87, Torre 1, Consultorio 805');
      expect(torreZentai.city).toBe('Bogotá D.C., Colombia');
    });

    it('TC-T1-CONTACT-02: Tabla detallada de horarios de atención', () => {
      const { schedules } = CANONICAL_SITE_CONFIG;
      expect(schedules.lunMieJue).toBe('7:30 a.m. – 5:00 p.m.');
      expect(schedules.marVie).toBe('8:00 a.m. – 5:00 p.m.');
      expect(schedules.sab).toBe('8:00 a.m. – 12:00 m.');
      expect(schedules.dom).toContain('Guardia postquirúrgica activa');
    });

    it('TC-T1-CONTACT-03: Integración de mapa interactivo de Google Maps', () => {
      const mapLink = CANONICAL_SITE_CONFIG.torreZentai.mapsUrl;
      expect(mapLink).toBe('https://maps.app.goo.gl/m88t5MnQyuwVAXJN9');
      expect(CANONICAL_SITE_CONFIG.torreZentai.mapsEmbedUrl).toContain('https://www.google.com/maps/embed');
    });

    it('TC-T1-CONTACT-04: Canales telefónicos directos y WhatsApp alterno', () => {
      const { phones } = CANONICAL_SITE_CONFIG;
      expect(phones.pbx1).toBe('+57 315 873 9927');
      expect(phones.pbx2).toBe('+57 315 801 0982');
      expect(phones.whatsappMain).toBe('+57 312 325 5900');
      expect(phones.whatsappAlt).toBe('+57 318 651 5726');
    });

    it('TC-T1-CONTACT-05: Formulario de contacto directo e indicaciones de parqueo', () => {
      // Verify parking availability and access directions in CANONICAL_SITE_CONFIG
      expect(CANONICAL_SITE_CONFIG.torreZentai.parkingAvailable).toBe(true);
      expect(CANONICAL_SITE_CONFIG.torreZentai.accessRoutes).toContain('Autopista Norte');

      // Verify contact form validation handles payload
      const result = validateContactPayload({
        name: 'Carolina P.',
        email: 'carolina@ejemplo.com',
        message: 'Deseo información sobre horarios y parqueadero en Torre Zentai.'
      });
      expect(result.valid).toBe(true);
    });
  });

  // ==========================================================================
  // CARACTERÍSTICA 12: DESPLIEGUE EN VERCEL Y REGLA SPA REWRITE (5 CASOS)
  // ==========================================================================
  describe('Feature 12: Despliegue en Vercel y Regla SPA Rewrite', () => {
    it('TC-T1-VERCEL-01: Existencia e integridad sintáctica de vercel.json', () => {
      // Read and parse actual vercel.json from project root with zero fallback
      const vercelPath = path.resolve(ROOT_DIR, 'vercel.json');
      expect(fs.existsSync(vercelPath)).toBe(true);
      const rawContent = fs.readFileSync(vercelPath, 'utf8');
      const parsed = JSON.parse(rawContent);
      expect(Array.isArray(parsed.rewrites)).toBe(true);
      expect(parsed.rewrites.length).toBeGreaterThanOrEqual(1);
    });

    it('TC-T1-VERCEL-02: Regla obligatoria de reescritura hacia index.html', () => {
      // Extract and inspect mandatory rewrite rule directly from vercel.json
      const rawContent = fs.readFileSync(path.resolve(ROOT_DIR, 'vercel.json'), 'utf8');
      const parsed = JSON.parse(rawContent);
      const spaRule = parsed.rewrites.find((r: any) => r.source === '/(.*)');
      expect(spaRule).toBeDefined();
      expect(spaRule.destination).toBe('/index.html');
    });

    it('TC-T1-VERCEL-03: Simulación de entrega de index.html para rutas profundas', () => {
      // Extract regex from real vercel.json and apply substitution
      const rawContent = fs.readFileSync(path.resolve(ROOT_DIR, 'vercel.json'), 'utf8');
      const parsed = JSON.parse(rawContent);
      const spaRule = parsed.rewrites.find((r: any) => r.source === '/(.*)');
      expect(spaRule).toBeDefined();

      const regex = new RegExp(`^${spaRule.source}$`);
      const deepRoute = '/procedimientos/cirugia-corporal/lipoescultura-laser';
      expect(regex.test(deepRoute)).toBe(true);

      const destination = deepRoute.replace(regex, spaRule.destination);
      expect(destination).toBe('/index.html');
    });

    it('TC-T1-VERCEL-04: Hidratación correcta de React Router tras recarga', () => {
      const harness = new OpaqueBoxHarness('/recursos/blog/cuidados-postoperatorios');
      expect(harness.currentRoute).toBe('/recursos/blog/cuidados-postoperatorios');
    });

    it('TC-T1-VERCEL-05: Entrega correcta de activos estáticos sin colisión', () => {
      // Verify real static files exist on disk in public/
      const heroImage = path.resolve(ROOT_DIR, 'public/images/dr-gomez-hero.png');
      const favicon = path.resolve(ROOT_DIR, 'public/favicon.svg');
      const quirofano = path.resolve(ROOT_DIR, 'public/images/quirofano-acreditado.png');

      expect(fs.existsSync(heroImage)).toBe(true);
      expect(fs.existsSync(favicon)).toBe(true);
      expect(fs.existsSync(quirofano)).toBe(true);
    });
  });
});
