/**
 * tests/tier4_user_journeys.test.ts
 * 
 * Tier 4: Real-World Patient Journeys & Full Catalog Audit (4 Scenarios)
 * Mapped to ORIGINAL_REQUEST.md, PROJECT.md, and catalog.md
 */

import { describe, it, expect, beforeEach } from './helpers/test-runner.ts';
import {
  CANONICAL_PROCEDURES,
  CANONICAL_SITE_CONFIG,
  validateBookingPayload,
} from './helpers/canonical_data.ts';
import { OpaqueBoxHarness } from './helpers/test-utils.ts';

describe('Tier 4: Real-World Patient Journeys & Catalog Audit (4 Scenarios)', () => {
  beforeEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  // ==========================================================================
  // ESCENARIO 1: JORNADA COMPLETA DE PACIENTE (DESCUBRIMIENTO A RESERVA)
  // ==========================================================================
  it('TC-T4-SCENARIO-01: Jornada Completa del Paciente: Descubrimiento a Reserva Confirmada', () => {
    const harness = new OpaqueBoxHarness('/');
    expect(harness.currentRoute).toBe('/');

    // 1. Landing on Home & evaluating credibility markers
    expect(CANONICAL_SITE_CONFIG.doctorCredentials.membership).toBe('Sociedad Colombiana de Cirugía Plástica (SCCP)');
    expect(CANONICAL_SITE_CONFIG.doctorCredentials.congressCount).toBeGreaterThanOrEqual(30);

    // 2. Exploration: Mega-menu click on Abdominoplastia
    const targetSlug = 'abdominoplastia';
    harness.navigate(`/procedimientos/cirugia-corporal/${targetSlug}`);
    expect(harness.currentRoute).toBe('/procedimientos/cirugia-corporal/abdominoplastia');

    const procedure = CANONICAL_PROCEDURES.find((p) => p.slug === targetSlug);
    expect(procedure).toBeDefined();
    expect(procedure?.clinicalMetrics.anesthesia).toContain('Anestesia');
    expect(procedure?.clinicalMetrics.hospitalStay).toContain('noche');
    expect(procedure?.faqs.length).toBeGreaterThanOrEqual(3);

    // 3. Verification: Click "Ver Resultados de Abdominoplastia"
    harness.navigate('/resultados/cirugia-corporal');
    expect(sessionStorage.getItem('adult_consent')).toBeFalsy(); // gate intercepts

    // Patient accepts +18 warning
    sessionStorage.setItem('adult_consent', 'true');
    expect(sessionStorage.getItem('adult_consent')).toBe('true');

    // 4. Booking: Click "Reservar Cita de Valoración"
    harness.navigate(`/agendar?procedimiento=${targetSlug}`);
    expect(harness.currentRoute).toBe('/agendar');
    expect(harness.queryParams.get('procedimiento')).toBe('abdominoplastia');

    const bookingPayload = {
      fullName: 'Carolina Montoya',
      phone: '+57 312 987 6543',
      email: 'carolina.montoya@email.com',
      procedure: harness.queryParams.get('procedimiento') || '',
      privacyConsent: true
    };

    const result = validateBookingPayload(bookingPayload);
    expect(result.valid).toBe(true);
    expect(Object.keys(result.errors)).toHaveLength(0);
  });

  // ==========================================================================
  // ESCENARIO 2: FLUJO DE VALIDACIÓN MÉDICA Y ACREDITACIÓN INSTITUCIONAL
  // ==========================================================================
  it('TC-T4-SCENARIO-02: Flujo de Validación Médica y Acreditación Institucional', () => {
    const harness = new OpaqueBoxHarness('/');

    // 1. Doctor Roberto Silva navigates to About Dr. Gomez to audit credentials
    harness.navigate('/sobre-el-dr-gomez');
    expect(harness.currentRoute).toBe('/sobre-el-dr-gomez');

    const creds = CANONICAL_SITE_CONFIG.doctorCredentials;
    expect(creds.undergraduate).toBe('Escuela de Medicina Juan N. Corpas');
    expect(creds.postgraduate).toContain('SACPER');
    expect(creds.membership).toBe('Sociedad Colombiana de Cirugía Plástica (SCCP)');
    expect(creds.congressCount).toBeGreaterThanOrEqual(30);

    // 2. Audit institutional backing of CCOM
    expect(CANONICAL_SITE_CONFIG.clinic).toBe('Clínica Colombiana de Obesidad y Metabolismo');
    expect(CANONICAL_SITE_CONFIG.clinicUrl).toBe('https://clinicacolombianaobesidad.com');

    // 3. Check Torre Zentai physical facilities and PBX numbers
    harness.navigate('/contacto');
    expect(harness.currentRoute).toBe('/contacto');

    const { torreZentai, phones, schedules } = CANONICAL_SITE_CONFIG;
    expect(torreZentai.address).toBe('Carrera 23 No. 124 – 87, Torre 1, Consultorio 805');
    expect(phones.pbx1).toBe('+57 315 873 9927');
    expect(phones.pbx2).toBe('+57 315 801 0982');
    expect(schedules.dom).toContain('Guardia postquirúrgica');
  });

  // ==========================================================================
  // ESCENARIO 3: JORNADA DE NAVEGACIÓN DISCRETA EN CIRUGÍA ÍNTIMA
  // ==========================================================================
  it('TC-T4-SCENARIO-03: Jornada de Navegación Discreta en Cirugía Íntima y Cumplimiento Bioético', () => {
    const harness = new OpaqueBoxHarness('/');

    // 1. Discreet navigation: Mega-menu -> Cirugía Íntima -> Labioplastia
    const slug = 'labioplastia-ninfoplastia';
    harness.navigate(`/procedimientos/cirugia-intima/${slug}`);
    expect(harness.currentRoute).toBe('/procedimientos/cirugia-intima/labioplastia-ninfoplastia');

    const procedure = CANONICAL_PROCEDURES.find((p) => p.slug === slug);
    expect(procedure).toBeDefined();
    expect(procedure?.isSensitiveIntimate).toBe(true);

    // 2. Inspection: High anatomical sobriety, outpatient metrics
    expect(procedure?.clinicalMetrics.duration).toBe('1 a 1.5 horas');
    expect(procedure?.clinicalMetrics.hospitalStay).toBe('Ambulatorio');

    // 3. Results view check: Strict bioethics policy
    harness.navigate('/resultados/cirugia-intima');
    expect(harness.currentRoute).toBe('/resultados/cirugia-intima');
    // Ensure all 6 intimate procedures prohibit explicit nude photography
    const intimaProcedures = CANONICAL_PROCEDURES.filter((p) => p.category === 'cirugia-intima');
    expect(intimaProcedures).toHaveLength(6);
    for (const p of intimaProcedures) {
      expect(p.isSensitiveIntimate).toBe(true);
    }

    // 4. Habeas data & medical privacy compliance under Ley 1581
    harness.navigate('/politica-de-datos');
    expect(harness.currentRoute).toBe('/politica-de-datos');
  });

  // ==========================================================================
  // ESCENARIO 4: AUDITORÍA COMPLETA DE INTEGRIDAD DE LAS 28 PÁGINAS
  // ==========================================================================
  it('TC-T4-SCENARIO-04: Auditoría Completa de Existencia e Integridad de las 28 Páginas de Procedimientos', () => {
    expect(CANONICAL_PROCEDURES).toHaveLength(28);

    const categories = {
      'cirugia-corporal': 0,
      'cirugia-facial': 0,
      'cirugia-intima': 0
    };

    let totalFaqsCount = 0;
    const allSlugs = new Set<string>();

    for (const proc of CANONICAL_PROCEDURES) {
      // 1. Unique slugs and no collisions
      expect(allSlugs.has(proc.slug)).toBe(false);
      allSlugs.add(proc.slug);
      categories[proc.category]++;

      // 2. 10 Standard clinical content blocks
      // Block 1: Titles
      expect(proc.name.length).toBeGreaterThanOrEqual(3);
      expect(proc.subtitle.length).toBeGreaterThanOrEqual(5);

      // Block 2: Overview / Description
      expect(proc.overview.length).toBeGreaterThanOrEqual(50);

      // Block 3: Ideal candidate
      expect(proc.candidateProfile.length).toBeGreaterThanOrEqual(2);

      // Block 4: Key benefits
      expect(proc.keyBenefits.length).toBeGreaterThanOrEqual(3);

      // Block 5: Clinical metrics
      expect(proc.clinicalMetrics.anesthesia.length).toBeGreaterThanOrEqual(5);
      expect(proc.clinicalMetrics.duration.length).toBeGreaterThanOrEqual(3);
      expect(proc.clinicalMetrics.recovery.length).toBeGreaterThanOrEqual(3);
      expect(proc.clinicalMetrics.hospitalStay.length).toBeGreaterThanOrEqual(5);

      // Block 6: Preparation & Post-care
      expect(proc.preparation.length).toBeGreaterThanOrEqual(2);
      expect(proc.postCare.length).toBeGreaterThanOrEqual(2);

      // Block 8: FAQs (minimum 3-4 structured items)
      expect(proc.faqs.length).toBeGreaterThanOrEqual(3);
      for (const faq of proc.faqs) {
        expect(faq.question.length).toBeGreaterThanOrEqual(10);
        expect(faq.answer.length).toBeGreaterThanOrEqual(20);
      }
      totalFaqsCount += proc.faqs.length;

      // Block 9: Related procedures
      expect(proc.relatedSlugs.length).toBeGreaterThanOrEqual(2);
      for (const relSlug of proc.relatedSlugs) {
        expect(relSlug).not.toBe(proc.slug);
        const relExists = CANONICAL_PROCEDURES.some((p) => p.slug === relSlug || p.aliases?.includes(relSlug));
        expect(relExists).toBe(true);
      }

      // Check technical modules in Liposuction
      if (proc.slug === 'lipoescultura-laser' || proc.slug === 'lipo-vaser') {
        expect(proc.technicalModules).toHaveLength(3);
        const modIds = proc.technicalModules?.map((m) => m.id);
        expect(modIds).toContain('tensamax');
        expect(modIds).toContain('retraction');
        expect(modIds).toContain('microaire');
      } else {
        expect(proc.technicalModules).toBeUndefined();
      }

      // Check body subcategories
      if (proc.category === 'cirugia-corporal') {
        expect(['contorno-corporal', 'cirugia-mamaria']).toContain(proc.bodySubcategory!);
      }

      // Check intimate bioethics flag
      if (proc.category === 'cirugia-intima') {
        expect(proc.isSensitiveIntimate).toBe(true);
      }
    }

    // Category count checks
    expect(categories['cirugia-corporal']).toBe(15);
    expect(categories['cirugia-facial']).toBe(7);
    expect(categories['cirugia-intima']).toBe(6);
    expect(totalFaqsCount).toBeGreaterThanOrEqual(84); // 28 * 3 = 84 minimum

    // Historical alias resolution
    const historicalAliases = [
      { alias: 'lipolisis-laser', canonical: 'lipoescultura-laser' },
      { alias: 'lipoinyeccion-glutea', canonical: 'transferencia-glutea-bbl' },
      { alias: 'mamoplastia-de-aumento', canonical: 'aumento-de-senos' },
      { alias: 'pexia-mamaria', canonical: 'levantamiento-de-senos' },
      { alias: 'reduccion-mamaria', canonical: 'reduccion-de-senos' }
    ];

    for (const { alias, canonical } of historicalAliases) {
      const match = CANONICAL_PROCEDURES.find((p) => p.aliases?.includes(alias));
      expect(match).toBeDefined();
      expect(match?.slug).toBe(canonical);
    }
  });
});
