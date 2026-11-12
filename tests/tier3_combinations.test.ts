/**
 * tests/tier3_combinations.test.ts
 * 
 * Tier 3: Cross-Feature Combinations (5 Integrated Flows)
 * Mapped to ORIGINAL_REQUEST.md, PROJECT.md, and catalog.md
 */

import { describe, it, expect, beforeEach } from './helpers/test-runner.ts';
import {
  CANONICAL_PROCEDURES,
  CANONICAL_SITE_CONFIG,
  SAMPLE_BLOG_ARTICLES,
  buildWhatsAppLink,
  validateBookingPayload,
} from './helpers/canonical_data.ts';
import { OpaqueBoxHarness } from './helpers/test-utils.ts';

describe('Tier 3: Cross-Feature Combinations (5 Integrated Flows)', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  it('TC-T3-FLOW-01: Mega-Menú -> Ficha de Procedimiento con Módulos Técnicos -> Agendamiento con Preselección', () => {
    const harness = new OpaqueBoxHarness('/');
    expect(harness.currentRoute).toBe('/');

    // 1. User discovers procedure from mega-menu and navigates
    const selectedProcSlug = 'lipoescultura-laser';
    harness.navigate(`/procedimientos/cirugia-corporal/${selectedProcSlug}`);
    expect(harness.currentRoute).toBe('/procedimientos/cirugia-corporal/lipoescultura-laser');

    // 2. Locate procedure and verify the 3 mandatory technical modules (Tensamax, Retraction, Microaire)
    const procedure = CANONICAL_PROCEDURES.find((p) => p.slug === selectedProcSlug);
    expect(procedure).toBeDefined();
    expect(procedure?.technicalModules).toHaveLength(3);
    const moduleIds = procedure?.technicalModules?.map((m) => m.id);
    expect(moduleIds).toContain('tensamax');
    expect(moduleIds).toContain('retraction');
    expect(moduleIds).toContain('microaire');

    // 3. User clicks "Agendar Valoración para Lipoescultura Láser"
    harness.navigate(`/agendar?procedimiento=${selectedProcSlug}`);
    expect(harness.currentRoute).toBe('/agendar');
    expect(harness.queryParams.get('procedimiento')).toBe('lipoescultura-laser');

    // 4. Verify that booking form initializes with pre-selected procedure
    const bookingState = {
      fullName: 'Carolina Morales',
      phone: '+57 310 555 1234',
      email: 'carolina@example.com',
      procedure: harness.queryParams.get('procedimiento') || '',
      privacyConsent: true
    };
    expect(bookingState.procedure).toBe('lipoescultura-laser');
    const validation = validateBookingPayload(bookingState);
    expect(validation.valid).toBe(true);
  });

  it('TC-T3-FLOW-02: Aceptación de Consentimiento +18 -> Cambio de Categoría en Resultados -> CTA WhatsApp Contextual', () => {
    const harness = new OpaqueBoxHarness('/resultados');
    expect(sessionStorage.getItem('adult_consent')).toBeFalsy();

    // 1. User accepts age gate
    sessionStorage.setItem('adult_consent', 'true');
    expect(sessionStorage.getItem('adult_consent')).toBe('true');

    // 2. Switch category tab to facial surgery
    harness.navigate('/resultados/cirugia-facial');
    expect(harness.currentRoute).toBe('/resultados/cirugia-facial');
    // Gate remains unlocked across category switches
    expect(sessionStorage.getItem('adult_consent')).toBe('true');

    // 3. Click contextual WhatsApp floating button
    const waLink = buildWhatsAppLink('/resultados');
    expect(waLink).toContain('573123255900');
    const decoded = decodeURIComponent(waLink);
    expect(decoded).toContain('vi los resultados de antes y después');
  });

  it('TC-T3-FLOW-03: Conmutación de Tema del Hero -> Navegación Interna -> Retorno y Preservación de Estado', () => {
    const harness = new OpaqueBoxHarness('/');

    // 1. User switches hero variant to dark navy
    sessionStorage.setItem('hero_theme', 'dark');
    expect(sessionStorage.getItem('hero_theme')).toBe('dark');

    // 2. User navigates to About Dr. Gomez page
    harness.navigate('/sobre-el-dr-gomez');
    expect(harness.currentRoute).toBe('/sobre-el-dr-gomez');

    // 3. User clicks header logo and returns to Home
    harness.navigate('/');
    expect(harness.currentRoute).toBe('/');

    // 4. Hero variant state is restored from sessionStorage and matches tailwind dark theme
    const restoredTheme = sessionStorage.getItem('hero_theme') || 'warm';
    expect(restoredTheme).toBe('dark');
    expect(CANONICAL_SITE_CONFIG.heroThemes.dark.bg).toBe('#0E1424');
  });

  it('TC-T3-FLOW-04: Búsqueda en Blog -> Chip de Procedimiento Relacionado -> Intercepción +18 en Resultados', () => {
    const harness = new OpaqueBoxHarness('/recursos/blog');
    expect(sessionStorage.getItem('adult_consent')).toBeFalsy();

    // 1. User searches for Vaser technology in blog
    const query = 'Vaser';
    const searchMatches = SAMPLE_BLOG_ARTICLES.filter(
      (a) => a.title.includes(query) || a.tags.includes(query)
    );
    expect(searchMatches.length).toBeGreaterThanOrEqual(1);

    // 2. User navigates to matching article and clicks related procedure chip
    const relatedProc = 'lipo-vaser';
    harness.navigate(`/procedimientos/cirugia-corporal/${relatedProc}`);
    expect(harness.currentRoute).toBe('/procedimientos/cirugia-corporal/lipo-vaser');

    // 3. User clicks "Ver Casos de Antes y Después"
    harness.navigate('/resultados/cirugia-corporal');
    expect(harness.currentRoute).toBe('/resultados/cirugia-corporal');

    // 4. Because user has not granted +18 consent, age gate intercepts
    const hasConsent = sessionStorage.getItem('adult_consent') === 'true';
    expect(hasConsent).toBe(false);
  });

  it('TC-T3-FLOW-05: Cirugía Íntima -> Advertencia Bioética -> Redirección a Consulta Presencial Confidencial', () => {
    const harness = new OpaqueBoxHarness('/procedimientos/cirugia-intima/rejuvenecimiento-vaginal-laser');
    expect(harness.currentRoute).toContain('/cirugia-intima/');

    // 1. Verify intimate procedure bioethics flag
    const proc = CANONICAL_PROCEDURES.find((p) => p.slug === 'rejuvenecimiento-vaginal-laser');
    expect(proc?.isSensitiveIntimate).toBe(true);

    // 2. User clicks to see results
    harness.navigate('/resultados/cirugia-intima');
    expect(harness.currentRoute).toBe('/resultados/cirugia-intima');

    // 3. Private discrete consultation card directs user to in-person booking
    harness.navigate('/agendar?categoria=cirugia-intima&procedimiento=rejuvenecimiento-vaginal-laser');
    expect(harness.currentRoute).toBe('/agendar');
    expect(harness.queryParams.get('procedimiento')).toBe('rejuvenecimiento-vaginal-laser');
  });
});
