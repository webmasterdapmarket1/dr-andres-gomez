/**
 * scripts/verify_procedures.mjs
 * 
 * Verificador Programático Autónomo del Catálogo Clínico de Procedimientos
 * Sitio Web Oficial Dr. Andrés Gómez — Cirugía Plástica, Estética y Reconstructiva
 * 
 * Valida:
 * 1. Existencia de los 28 procedimientos con slugs canónicos en 3 categorías (15 Corporal, 7 Facial, 6 Íntima).
 * 2. Resolución de aliases e integridad de relatedSlugs sin enlaces rotos.
 * 3. Completitud de datos (overview, candidateProfile, keyBenefits, clinicalMetrics, preparation, postCare, FAQs >= 3-4).
 * 4. Módulos técnicos Tensamax, Retraction y Microaire en Lipólisis Láser y Lipo Vaser.
 * 5. Tag de subcategoría ('contorno-corporal' o 'cirugia-mamaria') en Cirugía Corporal.
 * 6. Indicador isSensitiveIntimate: true en Cirugía Íntima sin exposición explícita.
 * 7. Correspondencia de estructura de rutas contra el contrato de navegación.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Colores ANSI para terminal
const colors = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  gray: '\x1b[90m',
  bgRed: '\x1b[41m\x1b[37m',
  bgGreen: '\x1b[42m\x1b[30m'
};

const symbols = {
  pass: `${colors.green}✔ PASS${colors.reset}`,
  fail: `${colors.red}✖ FAIL${colors.reset}`,
  info: `${colors.cyan}ℹ INFO${colors.reset}`,
  bullet: `${colors.gray}•${colors.reset}`
};

// ============================================================================
// ESPECIFICACIÓN CANÓNICA AUTORIZADA (28 PROCEDIMIENTOS)
// ============================================================================

export const CANONICAL_INVENTORY = {
  'cirugia-corporal': {
    expectedCount: 15,
    subcategories: {
      'contorno-corporal': [
        'lipoescultura-laser',
        'lipo-vaser',
        'abdominoplastia',
        'mini-abdominoplastia',
        'marcacion-abdominal-hd',
        'transferencia-glutea-bbl',
        'gluteoplastia',
        'cruroplastia-lifting-muslos',
        'braquioplastia-lifting-brazos',
        'correccion-de-cicatrices'
      ],
      'cirugia-mamaria': [
        'aumento-de-senos',
        'reduccion-de-senos',
        'levantamiento-de-senos',
        'explantacion-mamaria',
        'ginecomastia'
      ]
    }
  },
  'cirugia-facial': {
    expectedCount: 7,
    slugs: [
      'rinoplastia-ultrasonica',
      'blefaroplastia',
      'bichectomia',
      'lifting-facial',
      'cervicoplastia-cuello',
      'mentoplastia',
      'otoplastia'
    ]
  },
  'cirugia-intima': {
    expectedCount: 6,
    slugs: [
      'labioplastia-ninfoplastia',
      'vaginoplastia',
      'rejuvenecimiento-vaginal-laser',
      'lipotransferencia-labios-mayores',
      'monsplastia-reduccion-monte-de-venus',
      'perineoplastia'
    ]
  }
};

export const TECH_MODULE_PROCEDURES = ['lipoescultura-laser', 'lipo-vaser'];
export const EXPECTED_TECH_MODULE_IDS = ['tensamax', 'retraction', 'microaire'];

// ============================================================================
// CARGADOR RESILIENTE DE DATOS (TypeScript ESM Loader)
// ============================================================================

async function loadProceduresData() {
  const args = process.argv.slice(2);
  if (args.includes('--self-test')) {
    const canonicalPath = path.join(ROOT_DIR, 'tests', 'helpers', 'canonical_data.ts');
    if (fs.existsSync(canonicalPath)) {
      const fileUrl = pathToFileURL(canonicalPath).href;
      const mod = await import(fileUrl);
      if (Array.isArray(mod.CANONICAL_PROCEDURES)) {
        return mod.CANONICAL_PROCEDURES;
      }
    }
  }

  const tsPath = path.join(ROOT_DIR, 'src', 'data', 'procedures.ts');
  const jsPath = path.join(ROOT_DIR, 'src', 'data', 'procedures.js');

  let targetPath = null;
  if (fs.existsSync(tsPath)) {
    targetPath = tsPath;
  } else if (fs.existsSync(jsPath)) {
    targetPath = jsPath;
  } else {
    throw new Error(`No se encontró el archivo de procedimientos en: ${tsPath}\n(El archivo será creado por el subequipo de Procedimientos M3. Para ejecutar la validación de referencia ejecute: node scripts/verify_procedures.mjs --self-test)`);
  }

  try {
    const fileUrl = pathToFileURL(targetPath).href;
    const mod = await import(fileUrl);
    const data = mod.procedures || mod.default;
    if (!Array.isArray(data)) {
      throw new Error(`El módulo ${targetPath} no exporta un arreglo 'procedures'.`);
    }
    return data;
  } catch (err) {
    throw new Error(
      `Fallo al cargar ${targetPath}.\n` +
      `Detalle: ${err.message}`
    );
  }
}

// ============================================================================
// MOTOR DE VERIFICACIÓN
// ============================================================================

export class ProcedureVerifier {
  constructor(procedures) {
    this.procedures = procedures;
    this.errors = [];
    this.warnings = [];
    this.stats = {
      total: procedures.length,
      byCategory: {},
      aliasesCount: 0,
      faqsTotal: 0,
      techModulesVerified: 0,
      checksPassed: 0,
      checksFailed: 0
    };
  }

  recordError(rule, message, item = null) {
    const context = item ? ` [Proc: ${item.slug || item.id || 'desconocido'}]` : '';
    this.errors.push(`[${rule}]${context}: ${message}`);
    this.stats.checksFailed++;
  }

  recordWarning(rule, message, item = null) {
    const context = item ? ` [Proc: ${item.slug || item.id || 'desconocido'}]` : '';
    this.warnings.push(`[${rule}]${context}: ${message}`);
  }

  recordPass(checkName) {
    this.stats.checksPassed++;
  }

  // --- SUITE 1: Conteo General y Distribución de Categorías ---
  verifyCountsAndCategories() {
    console.log(`\n${colors.bold}1. Verificando Conteo Total y Categorías Canónicas...${colors.reset}`);

    if (this.procedures.length !== 28) {
      this.recordError('R1.ConteoTotal', `Se esperaban exactamente 28 procedimientos, se encontraron ${this.procedures.length}.`);
    } else {
      this.recordPass('Conteo total 28');
    }

    const categories = {
      'cirugia-corporal': 0,
      'cirugia-facial': 0,
      'cirugia-intima': 0
    };

    for (const proc of this.procedures) {
      if (!proc.category || !categories.hasOwnProperty(proc.category)) {
        this.recordError('R1.CategoriaInvalida', `Categoría '${proc.category}' no es válida.`, proc);
      } else {
        categories[proc.category]++;
      }
    }

    this.stats.byCategory = categories;

    if (categories['cirugia-corporal'] === 15) {
      this.recordPass('Cirugía Corporal: 15 procedimientos');
    } else {
      this.recordError('R1.ConteoCorporal', `Se esperaban 15 en 'cirugia-corporal', encontrados ${categories['cirugia-corporal']}.`);
    }

    if (categories['cirugia-facial'] === 7) {
      this.recordPass('Cirugía Facial: 7 procedimientos');
    } else {
      this.recordError('R1.ConteoFacial', `Se esperaban 7 en 'cirugia-facial', encontrados ${categories['cirugia-facial']}.`);
    }

    if (categories['cirugia-intima'] === 6) {
      this.recordPass('Cirugía Íntima: 6 procedimientos');
    } else {
      this.recordError('R1.ConteoIntima', `Se esperaban 6 en 'cirugia-intima', encontrados ${categories['cirugia-intima']}.`);
    }
  }

  // --- SUITE 2: Slugs Canónicos y Aliases ---
  verifySlugsAndAliases() {
    console.log(`\n${colors.bold}2. Verificando Unicidad y Resolución de Slugs y Aliases...${colors.reset}`);

    const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    const allIdentifiers = new Map(); // identifier -> procedure.slug

    for (const proc of this.procedures) {
      // Validar slug canónico
      if (!proc.slug || !slugPattern.test(proc.slug)) {
        this.recordError('R2.SlugFormato', `Slug canónico '${proc.slug}' tiene formato inválido (debe ser kebab-case).`, proc);
      }

      if (allIdentifiers.has(proc.slug)) {
        this.recordError('R2.SlugDuplicado', `Slug '${proc.slug}' ya está en uso por '${allIdentifiers.get(proc.slug)}'.`, proc);
      } else {
        allIdentifiers.set(proc.slug, proc.slug);
      }

      // Validar aliases
      if (proc.aliases) {
        if (!Array.isArray(proc.aliases)) {
          this.recordError('R2.AliasesTipo', `aliases debe ser un arreglo de strings.`, proc);
        } else {
          for (const alias of proc.aliases) {
            if (!slugPattern.test(alias)) {
              this.recordError('R2.AliasFormato', `Alias '${alias}' no tiene formato kebab-case válido.`, proc);
            }
            if (alias === proc.slug) {
              this.recordWarning('R2.AliasRedundante', `El alias '${alias}' es idéntico a su propio slug canónico.`, proc);
            }
            if (allIdentifiers.has(alias)) {
              this.recordError('R2.AliasColision', `Alias '${alias}' colisiona con el identificador de '${allIdentifiers.get(alias)}'.`, proc);
            } else {
              allIdentifiers.set(alias, proc.slug);
              this.stats.aliasesCount++;
            }
          }
        }
      }
    }

    // Validar concordancia con lista canónica conocida
    for (const [category, config] of Object.entries(CANONICAL_INVENTORY)) {
      if (config.subcategories) {
        for (const [subcat, expectedSlugs] of Object.entries(config.subcategories)) {
          for (const expSlug of expectedSlugs) {
            const found = this.procedures.find(p => p.slug === expSlug || p.aliases?.includes(expSlug));
            if (!found) {
              this.recordError('R2.SlugFaltante', `Procedimiento canónico '${expSlug}' no encontrado en '${category}/${subcat}'.`);
            }
          }
        }
      } else if (config.slugs) {
        for (const expSlug of config.slugs) {
          const found = this.procedures.find(p => p.slug === expSlug || p.aliases?.includes(expSlug));
          if (!found) {
            this.recordError('R2.SlugFaltante', `Procedimiento canónico '${expSlug}' no encontrado en '${category}'.`);
          }
        }
      }
    }

    this.recordPass(`Unicidad y resolución comprobada para ${allIdentifiers.size} identificadores (slugs + aliases).`);
  }

  // --- SUITE 3: Integridad de Campos Obligatorios y FAQs ---
  verifyRequiredFields() {
    console.log(`\n${colors.bold}3. Verificando Fichas Clínicas Campo por Campo...${colors.reset}`);

    const isNonEmptyStr = (val, minLen = 1) => typeof val === 'string' && val.trim().length >= minLen;
    const isPlaceholder = (val) => /^(tbd|n\/a|test|pendiente|lorem ipsum|xxx)/i.test(String(val).trim());

    for (const proc of this.procedures) {
      // 1. Identificadores y títulos
      const name = proc.name || proc.title;
      if (!isNonEmptyStr(name, 3) || isPlaceholder(name)) {
        this.recordError('R3.CampoVacio', `'name' o 'title' vacío o con placeholder.`, proc);
      }
      if (!isNonEmptyStr(proc.subtitle, 5) || isPlaceholder(proc.subtitle)) {
        this.recordError('R3.CampoVacio', `'subtitle' ausente o demasiado corto.`, proc);
      }
      if (!isNonEmptyStr(proc.shortDescription, 20) || isPlaceholder(proc.shortDescription)) {
        this.recordError('R3.CampoVacio', `'shortDescription' debe tener al menos 20 caracteres sin placeholders.`, proc);
      }

      // 2. Descripción completa (overview)
      const overview = proc.overview || proc.fullDescription;
      if (!isNonEmptyStr(overview, 50) || isPlaceholder(overview)) {
        this.recordError('R3.OverviewIncompleto', `'overview' o 'fullDescription' debe tener al menos 50 caracteres clínicos reales.`, proc);
      }

      // 3. Perfil de candidato (candidateProfile)
      const candidate = proc.candidateProfile || proc.idealCandidate;
      if (!Array.isArray(candidate) || candidate.length < 2) {
        this.recordError('R3.CandidateProfile', `'candidateProfile' debe ser un arreglo de al menos 2 recomendaciones.`, proc);
      } else {
        for (const item of candidate) {
          if (!isNonEmptyStr(item, 10)) {
            this.recordError('R3.CandidateProfileItem', `Ítem de perfil de candidato demasiado corto o vacío.`, proc);
          }
        }
      }

      // 4. Beneficios clave (keyBenefits)
      if (!Array.isArray(proc.keyBenefits) || proc.keyBenefits.length < 3) {
        this.recordError('R3.KeyBenefits', `'keyBenefits' debe contener al menos 3 beneficios clínicos.`, proc);
      } else {
        for (const b of proc.keyBenefits) {
          if (!isNonEmptyStr(b, 10)) {
            this.recordError('R3.KeyBenefitsItem', `Ítem de beneficio clave demasiado corto o vacío.`, proc);
          }
        }
      }

      // 5. Métricas Clínicas (clinicalMetrics / clinicalData)
      const metrics = proc.clinicalMetrics || proc.clinicalData;
      if (!metrics || typeof metrics !== 'object') {
        this.recordError('R3.ClinicalMetrics', `Objeto 'clinicalMetrics' ausente o inválido.`, proc);
      } else {
        const anesthesia = metrics.anesthesia || metrics.anesthesiaType;
        const duration = metrics.duration || metrics.surgicalDuration;
        const recovery = metrics.recovery || metrics.recoveryTime;
        const hospital = metrics.hospitalStay || metrics.hospitalization;

        if (!isNonEmptyStr(anesthesia, 5)) this.recordError('R3.ClinicalMetrics', `Métrica 'anesthesia' ausente o corta.`, proc);
        if (!isNonEmptyStr(duration, 3)) this.recordError('R3.ClinicalMetrics', `Métrica 'duration' ausente o corta.`, proc);
        if (!isNonEmptyStr(recovery, 3)) this.recordError('R3.ClinicalMetrics', `Métrica 'recovery' ausente o corta.`, proc);
        if (!isNonEmptyStr(hospital, 5)) this.recordError('R3.ClinicalMetrics', `Métrica 'hospitalStay' ausente o corta.`, proc);
      }

      // 6. Preparación y Cuidados Postoperatorios (preparation y postCare)
      const prep = proc.preparation || proc.preOpRecommendations;
      if (!Array.isArray(prep) || prep.length < 2) {
        this.recordError('R3.Preparation', `'preparation' debe contener al menos 2 pautas prequirúrgicas.`, proc);
      }

      const post = proc.postCare || proc.postOpRecommendations;
      if (!Array.isArray(post) || post.length < 2) {
        this.recordError('R3.PostCare', `'postCare' debe contener al menos 2 pautas de cuidado postoperatorio.`, proc);
      }

      // 7. FAQs (mínimo 3 a 4 preguntas con respuestas sustanciales)
      if (!Array.isArray(proc.faqs) || proc.faqs.length < 3) {
        this.recordError('R3.FAQsCount', `Debe contener al menos 3 a 4 FAQs médicas (encontradas: ${proc.faqs?.length || 0}).`, proc);
      } else {
        for (const faq of proc.faqs) {
          if (!isNonEmptyStr(faq.question, 10)) {
            this.recordError('R3.FAQQuestion', `Pregunta de FAQ demasiado corta o vacía: '${faq.question}'.`, proc);
          }
          if (!isNonEmptyStr(faq.answer, 20)) {
            this.recordError('R3.FAQAnswer', `Respuesta de FAQ demasiado corta para la pregunta: '${faq.question}'.`, proc);
          }
        }
        this.stats.faqsTotal += proc.faqs.length;
      }

      // 8. Enlaces Relacionados (relatedSlugs)
      const related = proc.relatedSlugs || proc.relatedProcedureSlugs;
      if (!Array.isArray(related) || related.length < 2) {
        this.recordError('R3.RelatedSlugs', `'relatedSlugs' debe contener al menos 2 procedimientos complementarios.`, proc);
      } else {
        for (const relSlug of related) {
          if (relSlug === proc.slug || proc.aliases?.includes(relSlug)) {
            this.recordError('R3.RelatedSelfReference', `Autorreferencia detectada en relatedSlugs: '${relSlug}'.`, proc);
          }
          const exists = this.procedures.some(p => p.slug === relSlug || p.aliases?.includes(relSlug));
          if (!exists) {
            this.recordError('R3.RelatedBrokenLink', `Enlace roto en relatedSlugs: '${relSlug}' no existe en el catálogo.`, proc);
          }
        }
      }
    }

    this.recordPass(`Completitud de campos y ${this.stats.faqsTotal} FAQs verificadas.`);
  }

  // --- SUITE 4: Módulos Técnicos (Tensamax, Retraction, Microaire) ---
  verifyTechnicalModules() {
    console.log(`\n${colors.bold}4. Verificando Módulos Técnicos (Tensamax, Retraction, Microaire)...${colors.reset}`);

    for (const proc of this.procedures) {
      const isLipo = TECH_MODULE_PROCEDURES.includes(proc.slug) ||
                     proc.aliases?.some(a => TECH_MODULE_PROCEDURES.includes(a));

      const modules = proc.technicalModules;

      if (isLipo) {
        if (!Array.isArray(modules) || modules.length !== 3) {
          this.recordError(
            'R4.TechModulesLipo',
            `Debe incluir exactamente 3 módulos técnicos (Tensamax, Retraction, Microaire). Encontrados: ${modules?.length || 0}.`,
            proc
          );
        } else {
          const presentIds = modules.map(m => (m.id || m.name || '').toLowerCase());
          for (const expectedId of EXPECTED_TECH_MODULE_IDS) {
            if (!presentIds.some(id => id.includes(expectedId))) {
              this.recordError('R4.TechModuleMissing', `Falta el módulo técnico '${expectedId}'.`, proc);
            }
          }

          for (const mod of modules) {
            if (!mod.name || !mod.description || mod.description.length < 20) {
              this.recordError('R4.TechModuleContent', `Módulo '${mod.name || 'sin nombre'}' tiene descripción incompleta.`, proc);
            }
          }
          this.stats.techModulesVerified += modules.length;
        }
      } else {
        // En procedimientos no lipo, technicalModules debe estar ausente o vacío
        if (modules && Array.isArray(modules) && modules.length > 0) {
          this.recordError(
            'R4.TechModulesExtra',
            `Procedimiento no lipo no debe incluir módulos técnicos (tiene ${modules.length}).`,
            proc
          );
        }
      }
    }

    this.recordPass(`Módulos técnicos verificados en Lipólisis Láser y Lipo Vaser (${this.stats.techModulesVerified} módulos validados).`);
  }

  // --- SUITE 5: Subcategorías en Cirugía Corporal ---
  verifyBodySubcategories() {
    console.log(`\n${colors.bold}5. Verificando Subcategorías de Cirugía Corporal (Contorno vs Mamaria)...${colors.reset}`);

    let contornoCount = 0;
    let mamariaCount = 0;

    for (const proc of this.procedures) {
      if (proc.category === 'cirugia-corporal') {
        const subcat = proc.bodySubcategory || proc.subcategory;
        if (!subcat) {
          this.recordError('R5.SubcategoryMissing', `Procedimiento corporal carece de 'bodySubcategory'.`, proc);
        } else if (subcat === 'contorno-corporal') {
          contornoCount++;
        } else if (subcat === 'cirugia-mamaria') {
          mamariaCount++;
        } else {
          this.recordError('R5.SubcategoryInvalid', `'bodySubcategory' tiene valor inválido: '${subcat}'.`, proc);
        }
      }
    }

    if (contornoCount === 10) {
      this.recordPass('Subcategoría Contorno Corporal: exactamente 10 procedimientos');
    } else {
      this.recordError('R5.ContornoCount', `Se esperaban 10 en 'contorno-corporal', encontrados ${contornoCount}.`);
    }

    if (mamariaCount === 5) {
      this.recordPass('Subcategoría Cirugía Mamaria: exactamente 5 procedimientos');
    } else {
      this.recordError('R5.MamariaCount', `Se esperaban 5 en 'cirugia-mamaria', encontrados ${mamariaCount}.`);
    }
  }

  // --- SUITE 6: Bioética y Confidencialidad en Cirugía Íntima ---
  verifyIntimateBioethics() {
    console.log(`\n${colors.bold}6. Verificando Bioética y Confidencialidad en Cirugía Íntima...${colors.reset}`);

    for (const proc of this.procedures) {
      if (proc.category === 'cirugia-intima') {
        if (proc.isSensitiveIntimate !== true) {
          this.recordError(
            'R6.IntimateSensitiveFlag',
            `Procedimiento íntimo DEBE tener 'isSensitiveIntimate: true' por mandato bioético.`,
            proc
          );
        }

        // Verificar que no existan fotos explícitas configuradas
        if (proc.hasBeforeAfterGallery === true) {
          this.recordWarning(
            'R6.IntimateGalleryWarning',
            `Procedimiento íntimo tiene hasBeforeAfterGallery=true. Las galerías públicas explícitas no están permitidas.`,
            proc
          );
        }
      } else {
        if (proc.isSensitiveIntimate === true) {
          this.recordWarning(
            'R6.SensitiveFlagMismatch',
            `Procedimiento no íntimo marcado con isSensitiveIntimate: true.`,
            proc
          );
        }
      }
    }

    this.recordPass('Protocolo de confidencialidad y bioética verificado en los 6 procedimientos íntimos.');
  }

  // --- SUITE 7: Enrutamiento y Matchers de React Router ---
  verifyRoutingContracts() {
    console.log(`\n${colors.bold}7. Verificando Estructura de Rutas y Matchers de React Router...${colors.reset}`);

    // Validar construcción de URLs canónicas y resolución
    let routesChecked = 0;
    for (const proc of this.procedures) {
      const canonicalPath = `/procedimientos/${proc.category}/${proc.slug}`;
      routesChecked++;

      // Simular match de parámetros :categoria y :slug
      const matched = this.procedures.find(p =>
        p.category === proc.category && (p.slug === proc.slug || p.aliases?.includes(proc.slug))
      );

      if (!matched || matched.slug !== proc.slug) {
        this.recordError('R7.RouteMatch', `Ruta canónica '${canonicalPath}' no resuelve al procedimiento correcto.`, proc);
      }

      // Validar cada alias como ruta navegable
      if (proc.aliases) {
        for (const alias of proc.aliases) {
          const aliasPath = `/procedimientos/${proc.category}/${alias}`;
          routesChecked++;
          const aliasMatch = this.procedures.find(p =>
            p.category === proc.category && (p.slug === alias || p.aliases?.includes(alias))
          );
          if (!aliasMatch || aliasMatch.slug !== proc.slug) {
            this.recordError('R7.AliasRouteMatch', `Ruta alias '${aliasPath}' no resuelve al slug canónico '${proc.slug}'.`, proc);
          }
        }
      }
    }

    // Verificar si App.tsx contiene los matchers de ruta si ya fue creado
    const appTsxPath = path.join(ROOT_DIR, 'src', 'App.tsx');
    if (fs.existsSync(appTsxPath)) {
      const content = fs.readFileSync(appTsxPath, 'utf8');
      const hasProcedureRoute = content.includes(':slug') || content.includes('/procedimientos');
      if (!hasProcedureRoute) {
        this.recordWarning('R7.AppTsxRoutes', `No se detectaron parámetros de ruta ':slug' en src/App.tsx.`);
      } else {
        this.recordPass('Configuración de rutas dinámicas detectada en src/App.tsx');
      }
    }

    this.recordPass(`Estructura de enrutamiento validada para ${routesChecked} rutas (canónicas + aliases).`);
  }

  // --- REPORTE FINAL ---
  generateReport() {
    console.log(`\n${colors.bold}============================================================${colors.reset}`);
    console.log(`${colors.bold}       RESUMEN DE AUDITORÍA PROGRAMÁTICA DE PROCEDIMIENTOS  ${colors.reset}`);
    console.log(`${colors.bold}============================================================${colors.reset}`);

    console.log(`\n${colors.cyan}Estadísticas Generales:${colors.reset}`);
    console.log(` ${symbols.bullet} Procedimientos totales evaluados: ${colors.bold}${this.stats.total}${colors.reset}`);
    console.log(` ${symbols.bullet} Cirugía Corporal: ${colors.bold}${this.stats.byCategory['cirugia-corporal'] || 0}/15${colors.reset}`);
    console.log(` ${symbols.bullet} Cirugía Facial:   ${colors.bold}${this.stats.byCategory['cirugia-facial'] || 0}/7${colors.reset}`);
    console.log(` ${symbols.bullet} Cirugía Íntima:   ${colors.bold}${this.stats.byCategory['cirugia-intima'] || 0}/6${colors.reset}`);
    console.log(` ${symbols.bullet} Aliases registrados: ${colors.bold}${this.stats.aliasesCount}${colors.reset}`);
    console.log(` ${symbols.bullet} Preguntas Frecuentes (FAQs): ${colors.bold}${this.stats.faqsTotal}${colors.reset}`);
    console.log(` ${symbols.bullet} Módulos Técnicos validados: ${colors.bold}${this.stats.techModulesVerified}${colors.reset}`);

    if (this.warnings.length > 0) {
      console.log(`\n${colors.yellow}${colors.bold}Advertencias (${this.warnings.length}):${colors.reset}`);
      for (const warn of this.warnings) {
        console.log(`  ${symbols.info} ${colors.yellow}${warn}${colors.reset}`);
      }
    }

    if (this.errors.length > 0) {
      console.log(`\n${colors.bgRed} FALLOS DETECTADOS (${this.errors.length}) ${colors.reset}\n`);
      for (const err of this.errors) {
        console.log(`  ${symbols.fail} ${err}`);
      }
      console.log(`\n${colors.red}${colors.bold}✖ AUDITORÍA FALLIDA:${colors.reset} Se detectaron ${this.errors.length} inconsistencias que impiden el pase a producción.\n`);
      return false;
    } else {
      console.log(`\n${colors.bgGreen} AUDITORÍA COMPLETADA CON ÉXITO ${colors.reset}\n`);
      console.log(`${colors.green}${colors.bold}✔ TODOS LOS CRITERIOS CLÍNICOS Y TÉCNICOS HAN SIDO SATISFECHOS (28/28).${colors.reset}\n`);
      return true;
    }
  }

  runAll() {
    this.verifyCountsAndCategories();
    this.verifySlugsAndAliases();
    this.verifyRequiredFields();
    this.verifyTechnicalModules();
    this.verifyBodySubcategories();
    this.verifyIntimateBioethics();
    this.verifyRoutingContracts();
    return this.generateReport();
  }
}

// ============================================================================
// PUNTO DE ENTRADA CLI
// ============================================================================

async function main() {
  console.log(`${colors.bold}${colors.cyan}`);
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   Dr. Andrés Gómez — Verificador Clínico de Catálogo     ║');
  console.log('║   Auditoría de Integridad: 28 Procedimientos Quirúrgicos ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log(`${colors.reset}`);

  try {
    const procedures = await loadProceduresData();
    const verifier = new ProcedureVerifier(procedures);
    const passed = verifier.runAll();
    process.exit(passed ? 0 : 1);
  } catch (err) {
    console.error(`\n${symbols.fail} ${colors.red}${colors.bold}Error Crítico de Ejecución:${colors.reset}`);
    console.error(`  ${err.message}\n`);
    process.exit(1);
  }
}

// Ejecutar main solo si es el script invocado directamente
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
