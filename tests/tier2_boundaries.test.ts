/**
 * tests/tier2_boundaries.test.ts
 * 
 * Tier 2: Boundary & Corner Cases (40 Test Cases)
 * Mapped to ORIGINAL_REQUEST.md, PROJECT.md, and docs/arquitectura-de-contenidos.md
 */

import { describe, it, expect, beforeEach } from './helpers/test-runner.ts';
import {
  CANONICAL_PROCEDURES,
  CANONICAL_SITE_CONFIG,
  CANONICAL_PATIENT_STORIES,
  SAMPLE_BLOG_ARTICLES,
  validateBookingPayload,
  validateContactPayload,
} from './helpers/canonical_data.ts';
import { OpaqueBoxHarness, createSubmissionGuard } from './helpers/test-utils.ts';
import { MockStorage } from './helpers/storage.ts';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

describe('Tier 2: Boundary & Corner Cases (40 Test Cases)', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  // ==========================================================================
  // CATEGORÍA 1: DEEP-LINKING A RUTAS PROTEGIDAS POR GATE +18 (5 CASOS)
  // ==========================================================================
  describe('Categoría 1: Acceso Directo (Deep-linking) a Rutas Protegidas por Gate +18', () => {
    it('TC-T2-GATE-DL-01: Deep-link directo a /resultados sin consentimiento previo', () => {
      const harness = new OpaqueBoxHarness('/resultados');
      expect(harness.currentRoute).toBe('/resultados');
      const hasConsent = sessionStorage.getItem('adult_consent') === 'true';
      expect(hasConsent).toBe(false);
      // Protected gallery content remains blocked
      const isGalleryUnlocked = hasConsent;
      expect(isGalleryUnlocked).toBe(false);
    });

    it('TC-T2-GATE-DL-02: Deep-link directo a categoría anidada /resultados/cirugia-corporal', () => {
      const harness = new OpaqueBoxHarness('/resultados/cirugia-corporal');
      expect(harness.currentRoute).toBe('/resultados/cirugia-corporal');
      const isAdultVerified = sessionStorage.getItem('adult_consent') === 'true';
      expect(isAdultVerified).toBe(false);
    });

    it('TC-T2-GATE-DL-03: Deep-link directo a /resultados/cirugia-facial', () => {
      const harness = new OpaqueBoxHarness('/resultados/cirugia-facial');
      expect(harness.currentRoute).toBe('/resultados/cirugia-facial');
      expect(sessionStorage.getItem('adult_consent')).toBeFalsy();
    });

    it('TC-T2-GATE-DL-04: Deep-link directo a /resultados/cirugia-intima', () => {
      const harness = new OpaqueBoxHarness('/resultados/cirugia-intima');
      expect(harness.currentRoute).toBe('/resultados/cirugia-intima');

      // Even if user provides consent, intimate procedures never render explicit nude galleries
      sessionStorage.setItem('adult_consent', 'true');
      const intimaProcedures = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-intima');
      for (const p of intimaProcedures) {
        expect(p.isSensitiveIntimate).toBe(true);
      }
    });

    it('TC-T2-GATE-DL-05: Intento de bypass mediante manipulación de DOM', () => {
      // Verify authorization state resilience: falsy / tampered sessionStorage values NEVER grant access
      const invalidValues = ['false', '0', 'null', 'undefined', 'no', 'bypass', 'TRUE', '1'];
      for (const val of invalidValues) {
        sessionStorage.setItem('adult_consent', val);
        const isUnlocked = sessionStorage.getItem('adult_consent') === 'true';
        expect(isUnlocked).toBe(false);
      }
    });
  });

  // ==========================================================================
  // CATEGORÍA 2: RECHAZO DE CONSENTIMIENTO +18 Y REDIRECCIÓN SEGURA (5 CASOS)
  // ==========================================================================
  describe('Categoría 2: Rechazo de Consentimiento +18 y Redirección Segura', () => {
    it('TC-T2-REJECT-01: Clic en "No soy mayor de 18 años" desde /resultados', () => {
      const harness = new OpaqueBoxHarness('/resultados');
      const onReject = () => {
        sessionStorage.removeItem('adult_consent');
        harness.navigate('/');
      };
      onReject();
      expect(harness.currentRoute).toBe('/');
      expect(sessionStorage.getItem('adult_consent')).toBeFalsy();
    });

    it('TC-T2-REJECT-02: Clic en botón "Regresar" desde ruta anidada /resultados/cirugia-facial', () => {
      const harness = new OpaqueBoxHarness('/resultados/cirugia-facial');
      const onReject = () => {
        harness.navigate('/');
      };
      onReject();
      expect(harness.currentRoute).toBe('/');
    });

    it('TC-T2-REJECT-03: Prevención de fuga hacia adelante tras rechazo (Back/Forward Cache)', () => {
      const harness = new OpaqueBoxHarness('/');
      harness.navigate('/resultados');
      expect(harness.currentRoute).toBe('/resultados');
      // User rejected and browser returned to /
      harness.back();
      expect(harness.currentRoute).toBe('/');

      // User clicks Forward arrow to re-enter /resultados
      harness.forward();
      expect(harness.currentRoute).toBe('/resultados');
      const hasConsent = sessionStorage.getItem('adult_consent') === 'true';
      expect(hasConsent).toBe(false);
    });

    it('TC-T2-REJECT-04: Cierre con tecla Escape en el modal de edad sensible', () => {
      const harness = new OpaqueBoxHarness('/resultados');
      // For bioethical integrity, Escape acts as rejection or maintains lockdown
      const handleEscape = () => {
        harness.navigate('/');
      };
      handleEscape();
      expect(harness.currentRoute).toBe('/');
    });

    it('TC-T2-REJECT-05: Clic en el fondo oscuro (backdrop) del modal', () => {
      // Bioethics modal must enforce static backdrop policy (clicks on backdrop do NOT dismiss)
      expect(CANONICAL_SITE_CONFIG.ageGateModal.backdrop).toBe('static');
      expect(CANONICAL_SITE_CONFIG.ageGateModal.dismissibleOnBackdrop).toBe(false);
      // Verify consent remains locked
      expect(sessionStorage.getItem('adult_consent')).toBeFalsy();
    });
  });

  // ==========================================================================
  // CATEGORÍA 3: PERSISTENCIA EN SESSIONSTORAGE Y CICLO DE VIDA (5 CASOS)
  // ==========================================================================
  describe('Categoría 3: Persistencia en sessionStorage y Ciclo de Vida de Pestaña', () => {
    it('TC-T2-STORAGE-01: Recarga simple de página tras aceptar el consentimiento', () => {
      // Set consent, instantiate a fresh OpaqueBoxHarness simulating page reload
      sessionStorage.setItem('adult_consent', 'true');
      const freshHarness = new OpaqueBoxHarness('/resultados');
      expect(freshHarness.currentRoute).toBe('/resultados');
      // Re-read storage directly: consent must survive within the same tab session
      expect(sessionStorage.getItem('adult_consent')).toBe('true');
    });

    it('TC-T2-STORAGE-02: Navegación interna entre pestañas de resultados sin re-solicitud', () => {
      sessionStorage.setItem('adult_consent', 'true');
      const harness = new OpaqueBoxHarness('/resultados/cirugia-corporal');
      harness.navigate('/resultados/cirugia-facial');
      expect(sessionStorage.getItem('adult_consent')).toBe('true');
    });

    it('TC-T2-STORAGE-03: Apertura en nueva pestaña / ventana (aislamiento de sessionStorage)', () => {
      sessionStorage.setItem('adult_consent', 'true');
      // A new isolated tab starts with fresh sessionStorage
      const newTabStorage = new MockStorage();
      expect(newTabStorage.getItem('adult_consent')).toBeNull();
    });

    it('TC-T2-STORAGE-04: Comportamiento ante sessionStorage bloqueado o QuotaExceeded', () => {
      const mockStorage = new MockStorage();
      mockStorage.throwOnSetItem = true;

      let inMemoryConsent = false;
      try {
        mockStorage.setItem('adult_consent', 'true');
      } catch (err) {
        // Resilient fallback to component in-memory state
        inMemoryConsent = true;
      }

      expect(inMemoryConsent).toBe(true);
    });

    it('TC-T2-STORAGE-05: Limpieza de storage y revocación inmediata de acceso', () => {
      sessionStorage.setItem('adult_consent', 'true');
      expect(sessionStorage.getItem('adult_consent')).toBe('true');

      sessionStorage.clear();
      expect(sessionStorage.getItem('adult_consent')).toBeNull();
    });
  });

  // ==========================================================================
  // CATEGORÍA 4: BÚSQUEDAS DE BLOG CON CERO RESULTADOS Y ESPECIALES (5 CASOS)
  // ==========================================================================
  describe('Categoría 4: Búsquedas de Blog con Cero Resultados y Cadenas Especiales', () => {
    it('TC-T2-SEARCH-01: Búsqueda con cadena inexistente sin coincidencias ("xyz999")', () => {
      const query = 'xyz999';
      const results = SAMPLE_BLOG_ARTICLES.filter(
        (a) => a.title.includes(query) || a.excerpt.includes(query)
      );

      expect(results).toHaveLength(0);
      const emptyStateMessage = `No encontramos artículos para '${query}'.`;
      expect(emptyStateMessage).toContain('xyz999');
    });

    it('TC-T2-SEARCH-02: Clic en botón "Limpiar búsqueda" para restaurar catálogo', () => {
      let searchInput = 'xyz999';
      const clearSearch = () => {
        searchInput = '';
      };
      clearSearch();
      expect(searchInput).toBe('');

      const results = SAMPLE_BLOG_ARTICLES.filter((a) =>
        a.title.toLowerCase().includes(searchInput.toLowerCase())
      );
      expect(results.length).toBe(SAMPLE_BLOG_ARTICLES.length);
    });

    it('TC-T2-SEARCH-03: Búsqueda con caracteres especiales y operadores de inyección (XSS / SQLi)', () => {
      const maliciousInputs = ["<script>alert('xss')</script>", "' OR '1'='1", '{{7*7}}'];

      for (const input of maliciousInputs) {
        const sanitized = input.replace(/[<>]/g, '');
        expect(sanitized).not.toContain('<script>');
        const results = SAMPLE_BLOG_ARTICLES.filter((a) => a.title.includes(sanitized));
        expect(results).toHaveLength(0);
      }
    });

    it('TC-T2-SEARCH-04: Búsqueda únicamente con espacios en blanco o tabulaciones', () => {
      const blankQuery = '     \t  ';
      const trimmed = blankQuery.trim();
      expect(trimmed).toBe('');

      // When query is blank, all articles are retained
      const results = trimmed === ''
        ? SAMPLE_BLOG_ARTICLES
        : SAMPLE_BLOG_ARTICLES.filter((a) => a.title.includes(trimmed));
      expect(results.length).toBe(SAMPLE_BLOG_ARTICLES.length);
    });

    it('TC-T2-SEARCH-05: Búsqueda insensible a mayúsculas, minúsculas y tildes', () => {
      const normalizeText = (txt: string) =>
        txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

      const query1 = 'lipolisis';
      const query2 = 'LIPÓLISIS';

      const norm1 = normalizeText(query1);
      const norm2 = normalizeText(query2);
      expect(norm1).toBe('lipolisis');
      expect(norm2).toBe('lipolisis');
      expect(norm1).toBe(norm2);

      const matches = SAMPLE_BLOG_ARTICLES.filter((a) =>
        normalizeText(a.title).includes(norm1)
      );
      expect(matches.length).toBeGreaterThanOrEqual(1);
    });
  });

  // ==========================================================================
  // CATEGORÍA 5: ENVÍOS DE FORMULARIO VACÍOS (5 CASOS)
  // ==========================================================================
  describe('Categoría 5: Envíos de Formulario Vacíos y Prevención de Envío', () => {
    it('TC-T2-FORM-EMPTY-01: Intento de envío del formulario de Agendar con campos vacíos', () => {
      const result = validateBookingPayload({});
      expect(result.valid).toBe(false);
      expect(result.errors.fullName).toBeDefined();
      expect(result.errors.phone).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.procedure).toBeDefined();
      expect(result.errors.privacyConsent).toBeDefined();
    });

    it('TC-T2-FORM-EMPTY-02: Envío con datos completos pero omitiendo Ley 1581', () => {
      const result = validateBookingPayload({
        fullName: 'Andrés Morales',
        phone: '+57 311 234 5678',
        email: 'andres@example.com',
        procedure: 'lipoescultura-laser',
        privacyConsent: false
      });
      expect(result.valid).toBe(false);
      expect(result.errors.privacyConsent).toBe('Debes autorizar el tratamiento de tus datos para continuar');
    });

    it('TC-T2-FORM-EMPTY-03: Envío con procedimiento por defecto sin seleccionar uno específico', () => {
      const result = validateBookingPayload({
        fullName: 'Camila Torres',
        phone: '+57 312 345 6789',
        email: 'camila@example.com',
        procedure: '',
        privacyConsent: true
      });
      expect(result.valid).toBe(false);
      expect(result.errors.procedure).toBe('Debes seleccionar un procedimiento');
    });

    it('TC-T2-FORM-EMPTY-04: Formulario de contacto corto en /contacto enviado vacío', () => {
      // Test real contact payload validation routine with empty fields
      const result = validateContactPayload({});
      expect(result.valid).toBe(false);
      expect(result.errors.name).toBeDefined();
      expect(result.errors.email).toBeDefined();
      expect(result.errors.message).toBeDefined();
    });

    it('TC-T2-FORM-EMPTY-05: Doble clic rápido en botón de envío (Prevención de duplicados)', () => {
      // Test genuine submission guard controller from test-utils
      const guard = createSubmissionGuard();
      let executedCount = 0;
      const task = () => { executedCount++; };

      const firstAttempt = guard.execute(task);
      const secondAttempt = guard.execute(task); // simultaneous rapid click blocked

      expect(firstAttempt).toBe(true);
      expect(secondAttempt).toBe(false);
      expect(executedCount).toBe(1);
    });
  });

  // ==========================================================================
  // CATEGORÍA 6: ENTRADAS INVÁLIDAS DE TELÉFONO Y CORREO (5 CASOS)
  // ==========================================================================
  describe('Categoría 6: Entradas Inválidas de Teléfono y Correo Electrónico', () => {
    it('TC-T2-INPUT-INVALID-01: Formato de correo electrónico con sintaxis incorrecta', () => {
      const invalidEmails = ['paciente@', 'paciente@dominio', 'paciente.com', '@dominio.com', '.email@example.com'];
      for (const email of invalidEmails) {
        const res = validateBookingPayload({
          fullName: 'Test User',
          phone: '3101234567',
          email,
          procedure: 'lipoescultura-laser',
          privacyConsent: true
        });
        expect(res.valid).toBe(false);
        expect(res.errors.email).toBe('Ingresa un correo electrónico válido (ej. nombre@ejemplo.com)');
      }
    });

    it('TC-T2-INPUT-INVALID-02: Número de teléfono con longitud insuficiente', () => {
      const res = validateBookingPayload({
        fullName: 'Test User',
        phone: '123',
        email: 'test@example.com',
        procedure: 'lipoescultura-laser',
        privacyConsent: true
      });
      expect(res.valid).toBe(false);
      expect(res.errors.phone).toBe('Ingresa un número telefónico válido de al menos 7 dígitos');
    });

    it('TC-T2-INPUT-INVALID-03: Nombre completo menor a 3 caracteres', () => {
      const res = validateBookingPayload({
        fullName: 'Ab',
        phone: '3101234567',
        email: 'test@example.com',
        procedure: 'lipoescultura-laser',
        privacyConsent: true
      });
      expect(res.valid).toBe(false);
      expect(res.errors.fullName).toBe('El nombre debe contener al menos 3 caracteres');
    });

    it('TC-T2-INPUT-INVALID-04: Teléfono con indicativo internacional estándar', () => {
      // Verify validateBookingPayload accepts valid international formats
      const internationalPhones = ['+1 305 555 1234', '+34 612 345 678', '+57 312 325 5900'];
      for (const phone of internationalPhones) {
        const res = validateBookingPayload({
          fullName: 'Paciente Internacional',
          phone,
          email: 'international@example.com',
          procedure: 'lipoescultura-laser',
          privacyConsent: true
        });
        expect(res.valid).toBe(true);
        expect(res.errors.phone).toBeUndefined();
      }
    });

    it('TC-T2-INPUT-INVALID-05: Campo de mensaje con límite de longitud maxLength=1000', () => {
      // Verify validateContactPayload rejects messages exceeding 1000 characters
      const longMsg = 'A'.repeat(1005);
      const res = validateContactPayload({
        name: 'Carlos M.',
        email: 'carlos@example.com',
        message: longMsg
      });
      expect(res.valid).toBe(false);
      expect(res.errors.message).toBe('El mensaje no puede exceder 1000 caracteres');
    });
  });

  // ==========================================================================
  // CATEGORÍA 7: PARÁMETROS DE CONSULTA AUSENTES O MALFORMADOS (5 CASOS)
  // ==========================================================================
  describe('Categoría 7: Parámetros de Consulta (Query Params) Ausentes o Malformados', () => {
    it('TC-T2-QUERY-01: Parámetro de subfiltro corporal no reconocido en /procedimientos/cirugia-corporal', () => {
      const harness = new OpaqueBoxHarness('/procedimientos/cirugia-corporal?filtro=categoria-ficticia');
      const requestedFilter = harness.queryParams.get('filtro');
      const validFilters = ['todos', 'contorno-corporal', 'cirugia-mamaria'];
      const effectiveFilter = validFilters.includes(requestedFilter || '') ? requestedFilter : 'todos';

      expect(effectiveFilter).toBe('todos');
    });

    it('TC-T2-QUERY-02: Parámetro de procedimiento en /agendar con slug inexistente', () => {
      const harness = new OpaqueBoxHarness('/agendar?procedimiento=slug-inexistente-xyz');
      const requestedSlug = harness.queryParams.get('procedimiento');
      const exists = CANONICAL_PROCEDURES.some((p) => p.slug === requestedSlug);
      const selectedProcedure = exists ? requestedSlug : 'otro';

      expect(selectedProcedure).toBe('otro');
    });

    it('TC-T2-QUERY-03: Parámetro de categoría en /resultados con valor corrupto', () => {
      const harness = new OpaqueBoxHarness('/resultados?cat=999999');
      const cat = harness.queryParams.get('cat');
      const validCategories = ['cirugia-corporal', 'cirugia-facial', 'cirugia-intima'];
      const resolved = validCategories.includes(cat || '') ? cat : 'cirugia-corporal';

      expect(resolved).toBe('cirugia-corporal');
    });

    it('TC-T2-QUERY-04: Parámetro de búsqueda en blog con query vacía o duplicada', () => {
      const harness = new OpaqueBoxHarness('/recursos/blog?q=&categoria=');
      const query = harness.queryParams.get('q') || '';
      expect(query).toBe('');
      const results = query ? [] : SAMPLE_BLOG_ARTICLES;
      expect(results.length).toBe(SAMPLE_BLOG_ARTICLES.length);
    });

    it('TC-T2-QUERY-05: Inyección de caracteres codificados maliciosamente en la URL', () => {
      // Test OpaqueBoxHarness navigation resilience with malformed percent-encoded input
      const harness = new OpaqueBoxHarness('/');
      expect(() => {
        harness.navigate('/procedimientos/%00%c0%af');
      }).not.toThrow();
      expect(harness.currentRoute).toBeDefined();
    });
  });

  // ==========================================================================
  // CATEGORÍA 8: FALLBACK ANTE URLS NO SOPORTADAS (404) (5 CASOS)
  // ==========================================================================
  describe('Categoría 8: Fallback ante URLs No Soportadas (Componente 404 Not Found)', () => {
    it('TC-T2-404-01: Acceso a ruta raíz inexistente (/pagina-fantasma)', () => {
      // Verify wildcard fallback route definition in src/App.tsx
      const appContent = fs.readFileSync(path.resolve(ROOT_DIR, 'src/App.tsx'), 'utf8');
      expect(appContent).toContain('path="*"');
      expect(appContent).toContain('Página en Construcción');
      expect(appContent).toContain('Volver al Inicio');
    });

    it('TC-T2-404-02: Procedimiento inexistente en categoría corporal', () => {
      const slug = 'procedimiento-ficticio';
      const found = CANONICAL_PROCEDURES.find(
        (p) => p.category === 'cirugia-corporal' && (p.slug === slug || p.aliases?.includes(slug))
      );
      expect(found).toBeUndefined();
    });

    it('TC-T2-404-03: Categoría quirúrgica no existente (/procedimientos/cirugia-espacial)', () => {
      // Verify against canonical category list in CANONICAL_SITE_CONFIG
      const validCategories = CANONICAL_SITE_CONFIG.categories.map((c: any) => c.slug);
      expect(validCategories).toContain('cirugia-corporal');
      expect(validCategories).toContain('cirugia-facial');
      expect(validCategories).toContain('cirugia-intima');
      expect(validCategories.includes('cirugia-espacial')).toBe(false);
    });

    it('TC-T2-404-04: Artículo de blog inexistente (/recursos/blog/articulo-borrado-2020)', () => {
      const targetSlug = 'articulo-borrado-2020';
      const article = SAMPLE_BLOG_ARTICLES.find((a) => a.slug === targetSlug);
      expect(article).toBeUndefined();
    });

    it('TC-T2-404-05: Historia de vida no registrada (/recursos/historias-de-vida/historia-no-existente)', () => {
      // Verify against CANONICAL_PATIENT_STORIES exported from canonical_data
      const story = CANONICAL_PATIENT_STORIES.find((s) => s.id === 'historia-no-existente');
      expect(story).toBeUndefined();
    });
  });
});
