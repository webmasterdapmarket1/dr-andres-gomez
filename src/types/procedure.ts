/**
 * src/types/procedure.ts
 *
 * Core TypeScript definitions for surgical procedures, categories,
 * clinical metrics, technical modules, and FAQs.
 *
 * Strictly compliant with:
 * - PROJECT.md § Interface Contracts
 * - spec_miner_survey_2
 * - scripts/verify_procedures.mjs
 */

export type ProcedureCategory = 'cirugia-corporal' | 'cirugia-facial' | 'cirugia-intima';

export type BodySubcategory = 'contorno-corporal' | 'cirugia-mamaria';

export type ProcedureSubcategory = BodySubcategory | 'armonizacion-facial' | 'estetica-intima';

export type TechnicalModuleId = 'tensamax' | 'retraction' | 'microaire';

export interface TechnicalModule {
  id: TechnicalModuleId;
  name: string;
  badge: string;
  description: string;
  clinicalImpact: string;
  features?: string[];
  headline?: string;
}

export interface ClinicalMetrics {
  anesthesia: string;
  duration: string;
  recovery: string;
  hospitalStay: string;
  // Optional clinical extensions for backward compatibility
  anesthesiaType?: string;
  surgicalDuration?: string;
  recoveryTime?: string;
  hospitalization?: string;
  painManagement?: string;
  postOpGarment?: string;
  finalResultsTimeline?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Procedure {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  title?: string;
  shortTitle?: string;
  subtitle: string;
  category: ProcedureCategory;
  categoryLabel?: 'Cirugía Corporal' | 'Cirugía Facial' | 'Cirugía Íntima';
  bodySubcategory?: BodySubcategory;
  subcategory?: BodySubcategory;
  subcategoryLabel?: string;
  shortDescription: string;
  overview: string;
  fullDescription?: string;
  candidateProfile: string[];
  idealCandidate?: string[];
  keyBenefits: string[];
  technicalModules?: TechnicalModule[];
  clinicalMetrics: ClinicalMetrics;
  clinicalData?: ClinicalMetrics;
  preparation: string[];
  preOpRecommendations?: string[];
  postCare: string[];
  postOpRecommendations?: string[];
  faqs: FAQItem[];
  relatedSlugs: string[];
  relatedProcedureSlugs?: string[];
  isSensitiveIntimate?: boolean;
  iconLucide?: string;
  iconHealthIcon?: string;
  hasBeforeAfterGallery?: boolean;
}
