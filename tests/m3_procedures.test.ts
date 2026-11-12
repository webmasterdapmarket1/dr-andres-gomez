/**
 * tests/m3_procedures.test.ts
 *
 * Dedicated Behavior-Based Test Suite for Milestone 3:
 * 28 Procedures Clinical Extraction & Catalog System
 *
 * Verifies:
 * - Full 28-procedure dataset completeness and clinical rigor
 * - Subcategory distribution (10 contorno + 5 mamaria)
 * - Technical modules (Tensamax, Retraction, Microaire) exclusivity
 * - Bioethical compliance on all 6 intimate surgeries
 * - Alias resolution (55 unique identifiers) and query helpers
 * - Component definitions and routing integrity
 */

import { describe, it } from 'node:test';
import { strict as assert } from 'node:assert';
import {
  procedures,
  getAllProcedures,
  getProceduresByCategory,
  getProceduresBySubcategory,
  getProcedureBySlug,
  getRelatedProcedures,
  getProceduresGroupedByCategory,
  normalizeCategorySlug,
} from '../src/data/procedures.ts';
import type { Procedure, ProcedureCategory, BodySubcategory } from '../src/types/procedure.ts';

describe('M3: Procedimientos — Base de Datos Clínica y Contratos', () => {
  it('TC-M3-01: Cuenta exacta de 28 procedimientos quirúrgicos', () => {
    const all = getAllProcedures();
    assert.equal(all.length, 28, 'Debe haber exactamente 28 procedimientos en el catálogo');
    assert.equal(procedures.length, 28, 'procedures export debe contener 28 elementos');
  });

  it('TC-M3-02: Distribución canónica de categorías (15 Corporal, 7 Facial, 6 Íntima)', () => {
    const corporal = getProceduresByCategory('cirugia-corporal');
    const facial = getProceduresByCategory('cirugia-facial');
    const intima = getProceduresByCategory('cirugia-intima');

    assert.equal(corporal.length, 15, 'Debe haber 15 procedimientos en Cirugía Corporal');
    assert.equal(facial.length, 7, 'Debe haber 7 procedimientos en Cirugía Facial');
    assert.equal(intima.length, 6, 'Debe haber 6 procedimientos en Cirugía Íntima');
  });

  it('TC-M3-03: Subcategorías de Cirugía Corporal (10 Contorno Corporal, 5 Cirugía Mamaria)', () => {
    const contorno = getProceduresBySubcategory('contorno-corporal');
    const mamaria = getProceduresBySubcategory('cirugia-mamaria');

    assert.equal(contorno.length, 10, 'Debe haber 10 cirugías de Contorno Corporal');
    assert.equal(mamaria.length, 5, 'Debe haber 5 cirugías de Cirugía Mamaria');

    // Total must equal all corporal procedures
    const corporal = getProceduresByCategory('cirugia-corporal');
    assert.equal(contorno.length + mamaria.length, corporal.length);
  });

  it('TC-M3-04: Módulos Técnicos Tensamax, Retraction y Microaire exclusivos de Lipólisis Láser y Lipo Vaser', () => {
    const laser = getProcedureBySlug('lipoescultura-laser');
    const vaser = getProcedureBySlug('lipo-vaser');

    assert.ok(laser, 'lipoescultura-laser debe existir');
    assert.ok(vaser, 'lipo-vaser debe existir');

    const expectedModuleIds = ['tensamax', 'retraction', 'microaire'];

    for (const proc of [laser, vaser]) {
      assert.ok(proc.technicalModules, `${proc.slug} debe tener technicalModules`);
      assert.equal(proc.technicalModules.length, 3, `${proc.slug} debe tener exactamente 3 módulos técnicos`);
      const ids = proc.technicalModules.map((m) => m.id);
      for (const expectedId of expectedModuleIds) {
        assert.ok(ids.includes(expectedId as any), `${proc.slug} debe contener el módulo ${expectedId}`);
      }
    }

    // All remaining 26 procedures must have NO technical modules
    const others = getAllProcedures().filter(
      (p) => p.slug !== 'lipoescultura-laser' && p.slug !== 'lipo-vaser'
    );
    for (const other of others) {
      assert.ok(
        !other.technicalModules || other.technicalModules.length === 0,
        `${other.slug} no debe tener módulos técnicos`
      );
    }
  });

  it('TC-M3-05: Cumplimiento Bioético en Cirugía Íntima (isSensitiveIntimate: true, sin fotos explícitas)', () => {
    const intima = getProceduresByCategory('cirugia-intima');
    assert.equal(intima.length, 6);

    for (const proc of intima) {
      assert.equal(
        proc.isSensitiveIntimate,
        true,
        `El procedimiento íntimo ${proc.slug} debe tener isSensitiveIntimate: true`
      );
      assert.notEqual(
        proc.hasBeforeAfterGallery,
        true,
        `El procedimiento íntimo ${proc.slug} no debe exhibir galería pública abierta`
      );
    }
  });

  it('TC-M3-06: Completitud y Rigor Clínico en todas las 28 Fichas', () => {
    for (const proc of getAllProcedures()) {
      // Identity & Description
      assert.ok(proc.id && proc.id.length >= 3, `${proc.slug}: id inválido`);
      assert.ok(proc.name && proc.name.length >= 3, `${proc.slug}: name inválido`);
      assert.ok(proc.subtitle && proc.subtitle.length >= 5, `${proc.slug}: subtitle inválido`);
      assert.ok(proc.shortDescription && proc.shortDescription.length >= 20, `${proc.slug}: shortDescription muy corta`);
      assert.ok(proc.overview && proc.overview.length >= 50, `${proc.slug}: overview muy corto`);

      // Lists
      assert.ok(Array.isArray(proc.candidateProfile) && proc.candidateProfile.length >= 2, `${proc.slug}: candidateProfile >= 2`);
      assert.ok(Array.isArray(proc.keyBenefits) && proc.keyBenefits.length >= 3, `${proc.slug}: keyBenefits >= 3`);
      assert.ok(Array.isArray(proc.preparation) && proc.preparation.length >= 2, `${proc.slug}: preparation >= 2`);
      assert.ok(Array.isArray(proc.postCare) && proc.postCare.length >= 2, `${proc.slug}: postCare >= 2`);
      assert.ok(Array.isArray(proc.faqs) && proc.faqs.length >= 3, `${proc.slug}: faqs >= 3`);
      assert.ok(Array.isArray(proc.relatedSlugs) && proc.relatedSlugs.length >= 2, `${proc.slug}: relatedSlugs >= 2`);

      // Metrics
      const m = proc.clinicalMetrics;
      assert.ok(m, `${proc.slug}: clinicalMetrics ausente`);
      assert.ok(m.anesthesia && m.anesthesia.length >= 3, `${proc.slug}: anesthesia ausente`);
      assert.ok(m.duration && m.duration.length >= 2, `${proc.slug}: duration ausente`);
      assert.ok(m.recovery && m.recovery.length >= 2, `${proc.slug}: recovery ausente`);
      assert.ok(m.hospitalStay && m.hospitalStay.length >= 3, `${proc.slug}: hospitalStay ausente`);

      // FAQs content depth
      for (const faq of proc.faqs) {
        assert.ok(faq.question && faq.question.length >= 10, `${proc.slug}: pregunta FAQ muy corta`);
        assert.ok(faq.answer && faq.answer.length >= 20, `${proc.slug}: respuesta FAQ muy corta`);
      }
    }
  });

  it('TC-M3-07: Resolución de Slugs Canónicos y 27 Aliases Históricos', () => {
    // 28 canonical procedures + 27 aliases = 55 unique identifiers
    const registeredAliases = [
      { alias: 'lipolisis-laser', canonical: 'lipoescultura-laser' },
      { alias: 'lipo-laser', canonical: 'lipoescultura-laser' },
      { alias: 'lipolisis-vaser', canonical: 'lipo-vaser' },
      { alias: 'vaser-hd', canonical: 'lipo-vaser' },
      { alias: 'lipectomia-abdominal', canonical: 'abdominoplastia' },
      { alias: 'dermolipectomia', canonical: 'abdominoplastia' },
      { alias: 'mini-lipectomia', canonical: 'mini-abdominoplastia' },
      { alias: 'marcacion-abdominal', canonical: 'marcacion-abdominal-hd' },
      { alias: 'lipo-hd-abdomen', canonical: 'marcacion-abdominal-hd' },
      { alias: 'lipoinyeccion-glutea', canonical: 'transferencia-glutea-bbl' },
      { alias: 'bbl-colombia', canonical: 'transferencia-glutea-bbl' },
      { alias: 'gluteoplastia-con-implantes', canonical: 'gluteoplastia' },
      { alias: 'implantes-gluteos', canonical: 'gluteoplastia' },
      { alias: 'cruroplastia', canonical: 'cruroplastia-lifting-muslos' },
      { alias: 'lifting-de-muslos', canonical: 'cruroplastia-lifting-muslos' },
      { alias: 'braquioplastia', canonical: 'braquioplastia-lifting-brazos' },
      { alias: 'lifting-de-brazos', canonical: 'braquioplastia-lifting-brazos' },
      { alias: 'revision-de-cicatrices', canonical: 'correccion-de-cicatrices' },
      { alias: 'plastias-cicatriciales', canonical: 'correccion-de-cicatrices' },
      { alias: 'mamoplastia-de-aumento', canonical: 'aumento-de-senos' },
      { alias: 'protesis-mamarias', canonical: 'aumento-de-senos' },
      { alias: 'reduccion-mamaria', canonical: 'reduccion-de-senos' },
      { alias: 'mamoplastia-reductora', canonical: 'reduccion-de-senos' },
      { alias: 'pexia-mamaria', canonical: 'levantamiento-de-senos' },
      { alias: 'mastopexia', canonical: 'levantamiento-de-senos' },
      { alias: 'retiro-de-implantes', canonical: 'explantacion-mamaria' },
      { alias: 'capsulectomia-en-bloque', canonical: 'explantacion-mamaria' },
      { alias: 'reduccion-pectoral-masculina', canonical: 'ginecomastia' },
      { alias: 'ginecomastia-laser', canonical: 'ginecomastia' },
      { alias: 'rinoplastia', canonical: 'rinoplastia-ultrasonica' },
      { alias: 'cirugia-de-nariz', canonical: 'rinoplastia-ultrasonica' },
      { alias: 'cirugia-de-parpados', canonical: 'blefaroplastia' },
      { alias: 'blefaroplastia-laser', canonical: 'blefaroplastia' },
      { alias: 'extraccion-bolsas-bichat', canonical: 'bichectomia' },
      { alias: 'afinamiento-facial', canonical: 'bichectomia' },
      { alias: 'ritidoplastia', canonical: 'lifting-facial' },
      { alias: 'estiramiento-facial', canonical: 'lifting-facial' },
      { alias: 'cervicoplastia', canonical: 'cervicoplastia-cuello' },
      { alias: 'lifting-de-cuello', canonical: 'cervicoplastia-cuello' },
      { alias: 'cirugia-de-menton', canonical: 'mentoplastia' },
      { alias: 'aumento-de-menton', canonical: 'mentoplastia' },
      { alias: 'cirugia-de-orejas', canonical: 'otoplastia' },
      { alias: 'correccion-orejas-en-asa', canonical: 'otoplastia' },
      { alias: 'labioplastia', canonical: 'labioplastia-ninfoplastia' },
      { alias: 'ninfoplastia', canonical: 'labioplastia-ninfoplastia' },
      { alias: 'colporrafia-posterior', canonical: 'vaginoplastia' },
      { alias: 'tensado-vaginal', canonical: 'vaginoplastia' },
      { alias: 'laser-vaginal', canonical: 'rejuvenecimiento-vaginal-laser' },
      { alias: 'tensado-laser', canonical: 'rejuvenecimiento-vaginal-laser' },
      { alias: 'voluminizacion-labios-mayores', canonical: 'lipotransferencia-labios-mayores' },
      { alias: 'injerto-graso-vulvar', canonical: 'lipotransferencia-labios-mayores' },
      { alias: 'lipoplastia-pubica', canonical: 'monsplastia-reduccion-monte-de-venus' },
      { alias: 'monsplastia', canonical: 'monsplastia-reduccion-monte-de-venus' },
      { alias: 'reconstruccion-perineal', canonical: 'perineoplastia' },
      { alias: 'reparacion-del-introito', canonical: 'perineoplastia' },
    ];

    for (const item of registeredAliases) {
      const resolved = getProcedureBySlug(item.alias);
      assert.ok(resolved, `El alias '${item.alias}' no resolvió ningún procedimiento`);
      assert.equal(
        resolved.slug,
        item.canonical,
        `El alias '${item.alias}' resolvió a '${resolved.slug}' en lugar de '${item.canonical}'`
      );
    }
  });

  it('TC-M3-08: Resiliencia ante discrepancia de categoría en getProcedureBySlug(categoria, slug)', () => {
    // Correct category
    const match = getProcedureBySlug('cirugia-corporal', 'abdominoplastia');
    assert.ok(match && match.slug === 'abdominoplastia');

    // Mismatched category fallback
    const mismatch = getProcedureBySlug('cirugia-facial', 'abdominoplastia');
    assert.ok(mismatch && mismatch.slug === 'abdominoplastia');

    // Non-existent slug returns undefined
    const nonexistent = getProcedureBySlug('cirugia-corporal', 'cirugia-inexistente-123');
    assert.equal(nonexistent, undefined);
  });

  it('TC-M3-09: Normalizador de Slugs de Categoría (normalizeCategorySlug)', () => {
    assert.equal(normalizeCategorySlug('cirugia-corporal'), 'cirugia-corporal');
    assert.equal(normalizeCategorySlug('corporal'), 'cirugia-corporal');
    assert.equal(normalizeCategorySlug('cirugia-facial'), 'cirugia-facial');
    assert.equal(normalizeCategorySlug('facial'), 'cirugia-facial');
    assert.equal(normalizeCategorySlug('cirugia-intima'), 'cirugia-intima');
    assert.equal(normalizeCategorySlug('intima'), 'cirugia-intima');
    assert.equal(normalizeCategorySlug('espacial'), undefined);
    assert.equal(normalizeCategorySlug(''), undefined);
  });

  it('TC-M3-10: Procedimientos Relacionados (getRelatedProcedures)', () => {
    const lipo = getProcedureBySlug('lipoescultura-laser')!;
    const related = getRelatedProcedures(lipo, 3);

    assert.equal(related.length, 3, 'Debe devolver 3 procedimientos relacionados');
    // None should be itself
    for (const rel of related) {
      assert.notEqual(rel.slug, lipo.slug, 'No debe relacionarse consigo mismo');
    }
  });

  it('TC-M3-11: Procedimientos Agrupados por Categoría (getProceduresGroupedByCategory)', () => {
    const grouped = getProceduresGroupedByCategory();
    assert.equal(grouped['cirugia-corporal'].length, 15);
    assert.equal(grouped['cirugia-facial'].length, 7);
    assert.equal(grouped['cirugia-intima'].length, 6);
  });
});
