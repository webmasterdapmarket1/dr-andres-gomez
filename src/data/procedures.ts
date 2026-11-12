/**
 * proposed_procedures_data.ts
 * 
 * Proposed source for src/data/procedures.ts
 * Milestone M3: 28 Procedures Clinical Extraction & Catalog System
 * 
 * Contains:
 * - 28 genuine clinical surgical procedure dossiers
 *   * 15 Cirugía Corporal (10 Contorno Corporal, 5 Cirugía Mamaria)
 *   * 7 Cirugía Facial
 *   * 6 Cirugía Íntima (Strict medical bioethics & confidentiality)
 * - Technical modules (Tensamax, Retraction, Microaire) on lipoescultura-laser and lipo-vaser
 * - Helper functions: getAllProcedures, getProceduresByCategory, getProceduresBySubcategory, getProcedureBySlug, getRelatedProcedures, getProceduresGroupedByCategory
 */

import type { Procedure, ProcedureCategory, BodySubcategory } from '../types/procedure';

export const procedures: Procedure[] = [
  // ==========================================================================
  // CATEGORÍA 1: CIRUGÍA CORPORAL (15 PROCEDIMIENTOS)
  // ==========================================================================

  // --- Subcategoría: Contorno Corporal (10 Procedimientos) ---
  {
    id: 'lipoescultura-laser',
    slug: 'lipoescultura-laser',
    aliases: ['lipolisis-laser', 'lipo-laser'],
    name: 'Lipoescultura Láser / Lipólisis 3D',
    subtitle: 'Definición corporal tridimensional de alta precisión y máxima retracción cutánea',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Procedimiento quirúrgico de contorno corporal que licúa tejido adiposo con fibra láser y estimula colágeno dérmico.',
    overview: 'La Lipoescultura Láser de alta precisión utiliza calor fototérmico controlado para disolver selectivamente los adipocitos, coagular microvasos y generar una retracción superior de la piel evitando la flacidez residual.',
    candidateProfile: [
      'Pacientes con depósitos grasos localizados resistentes a dieta y ejercicio',
      'Buena elasticidad cutánea general sin flacidez muscular severa',
      'Índice de masa corporal (IMC) inferior a 28 con peso relativamente estable'
    ],
    keyBenefits: [
      'Menor sangrado, menor inflamación y mínimo dolor postoperatorio',
      'Retracción dérmica activa superior con marcado efecto tensor',
      'Recuperación acelerada frente a la liposucción mecánica tradicional',
      'Resultados homogéneos y suaves sin irregularidades superficiales'
    ],
    technicalModules: [
      {
        id: 'tensamax',
        name: 'Tensamax',
        badge: 'Radiofrecuencia Monopolar',
        description: 'Radiofrecuencia monopolar profunda para tensado tisular, aceleración de drenaje linfático y prevención activa de fibrosis.',
        clinicalImpact: 'Estimula colágeno dérmico profundo a 40-42°C y contrae las fibras elásticas subdérmicas.',
        features: ['Estimulación profunda de fibroblastos', 'Prevención de fibrosis posquirúrgica', 'Drenaje acelerado del edema linfático']
      },
      {
        id: 'retraction',
        name: 'Retraction',
        badge: 'Retracción Tisular Activa',
        description: 'Sistema de micro-coagulación subdérmica del sistema fíbroséptico que produce una adhesión cutánea inmediata.',
        clinicalImpact: 'Genera hasta un 40-60% de retracción de la superficie dérmica en zonas con laxitud tisular.',
        features: ['Coagulación selectiva de septos fibrosos', 'Adherencia firme de la piel al plano muscular', 'Minimiza la necesidad de cortes adicionales']
      },
      {
        id: 'microaire',
        name: 'Microaire',
        badge: 'Power-Assisted Liposuction',
        description: 'Cánula oscilatoria de alta frecuencia (4.000 cpm) que fragmenta y emulsiona el tejido adiposo sin trauma vascular.',
        clinicalImpact: 'Disminuye el trauma tisular, acelera la recuperación y preserva adipocitos viables para lipotransferencia glútea.',
        features: ['Micro-oscilaciones recíprocas a 4.000 ciclos/min', 'Alta viabilidad de células grasas vivas para BBL', 'Reducción drástica de hematomas y equimosis']
      }
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general o peridural con sedación',
      duration: '2 a 3 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio o 1 noche'
    },
    preparation: [
      'Ayuno de 8 horas previas al procedimiento quirúrgico',
      'Exámenes prequirúrgicos completos (hemograma, PT, PTT, glicemia, electrocardiograma)',
      'Suspender anticoagulantes, aspirina y suplementos herbales 10 días antes'
    ],
    postCare: [
      'Uso de faja de compresión grado médico 24/7 durante 6 semanas',
      'Sesiones obligatorias de drenaje linfático y ultrasonido terapéutico desde las 48 horas',
      'Evitar ejercicio de impacto o inmersión en piscinas durante 30 días'
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo dura el dolor postoperatorio?',
        answer: 'Las molestias son moderadas y similares al dolor muscular tras un entrenamiento físico intenso durante las primeras 48 a 72 horas, controlables con analgesia común.'
      },
      {
        question: '¿Cuándo puedo regresar a mis actividades laborales?',
        answer: 'La mayoría de pacientes retoman labores de oficina entre 5 y 7 días después de la cirugía, sintiéndose cómodos con la faja compresiva.'
      },
      {
        question: '¿La grasa extraída vuelve a aparecer?',
        answer: 'Los adipocitos destruidos y aspirados no se regeneran en el organismo adulto; manteniendo un peso estable con hábitos saludables, el resultado es definitivo.'
      },
      {
        question: '¿Quedan cicatrices visibles tras la lipoescultura láser?',
        answer: 'Las microincisiones miden apenas entre 3 y 4 mm y se colocan estratégicamente en pliegues naturales o bajo la línea del traje de baño, resultando casi imperceptibles.'
      }
    ],
    relatedSlugs: ['abdominoplastia', 'transferencia-glutea-bbl', 'lipo-vaser'],
    isSensitiveIntimate: false
  },
  {
    id: 'lipo-vaser',
    slug: 'lipo-vaser',
    aliases: ['lipolisis-vaser', 'vaser-hd'],
    name: 'Lipólisis Vaser / VASER Lipo HD',
    subtitle: 'Ultrasonido selectivo para definición atlética y marcación muscular de alta fidelidad',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Tecnología de energía ultrasónica selectiva que emulsiona grasa protegiendo vasos sanguíneos, nervios y septos conectivos.',
    overview: 'VASER Lipo utiliza ondas de ultrasonido de resonancia de tercera generación para emulsificar la grasa selectivamente sin desgarrar tejidos vitales. Permite esculpir surcos musculares de alta definición con máxima seguridad.',
    candidateProfile: [
      'Hombres y mujeres con peso cercano al ideal y tono muscular basal',
      'Deseo de definición atlética de surcos anatómicos y relieves musculares',
      'Piel con buena capacidad elástica y retráctil'
    ],
    keyBenefits: [
      'Preservación neurovascular integral y mínima pérdida hemática',
      'Emulsificación selectiva del tejido graso sin tracción traumática',
      'Grasa viable de alta pureza ideal para lipotransferencia glútea (BBL)',
      'Excelente retracción de piel facilitada por la energía ultrasónica dérmica'
    ],
    technicalModules: [
      {
        id: 'tensamax',
        name: 'Tensamax',
        badge: 'Radiofrecuencia Monopolar',
        description: 'Radiofrecuencia monopolar profunda para tensado tisular, aceleración de drenaje linfático y prevención activa de fibrosis.',
        clinicalImpact: 'Estimula colágeno dérmico profundo a 40-42°C y contrae las fibras elásticas subdérmicas.',
        features: ['Estimulación profunda de fibroblastos', 'Prevención de fibrosis posquirúrgica', 'Drenaje acelerado del edema linfático']
      },
      {
        id: 'retraction',
        name: 'Retraction',
        badge: 'Retracción Tisular Activa',
        description: 'Sistema de micro-coagulación subdérmica del sistema fíbroséptico que produce una adhesión cutánea inmediata.',
        clinicalImpact: 'Genera hasta un 40-60% de retracción de la superficie dérmica en zonas con laxitud tisular.',
        features: ['Coagulación selectiva de septos fibrosos', 'Adherencia firme de la piel al plano muscular', 'Minimiza la necesidad de cortes adicionales']
      },
      {
        id: 'microaire',
        name: 'Microaire',
        badge: 'Power-Assisted Liposuction',
        description: 'Cánula oscilatoria de alta frecuencia (4.000 cpm) que fragmenta y emulsiona el tejido adiposo sin trauma vascular.',
        clinicalImpact: 'Disminuye el trauma tisular, acelera la recuperación y preserva adipocitos viables para lipotransferencia glútea.',
        features: ['Micro-oscilaciones recíprocas a 4.000 ciclos/min', 'Alta viabilidad de células grasas vivas para BBL', 'Reducción drástica de hematomas y equimosis']
      }
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general balanceada',
      duration: '3 a 4 horas',
      recovery: '7 a 10 días',
      hospitalStay: '1 noche de observación'
    },
    preparation: [
      'Suspender aspirina, vitamina E y suplementos 15 días antes',
      'Hidratación oral óptima y protocolo de laboratorio prequirúrgico completo',
      'Cese de tabaquismo al menos 3 semanas previas'
    ],
    postCare: [
      'Faja posquirúrgica de alta definición y tablas de soporte abdominal por 6 semanas',
      'Drenajes linfáticos postoperatorios con ultrasonido terapéutico guiado',
      'Evitar el calor ambiental directo o saunas durante el primer mes'
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre Vaser y Láser?',
        answer: 'El Vaser emplea energía ultrasónica selectiva para licuar la grasa respetando tejidos vasculares; el láser utiliza energía térmica fototérmica. Ambas tecnologías ofrecen resultados superlativos según la anatomía.'
      },
      {
        question: '¿La grasa Vaser se puede transferir a los glúteos?',
        answer: 'Sí, la grasa emulsionada mediante ultrasonido Vaser a potencia controlada conserva una alta viabilidad celular para injertos de glúteos (BBL).'
      },
      {
        question: '¿Se requiere usar drenajes externos?',
        answer: 'Generalmente se emplean drenes cerrados de bajo débito durante 3 a 5 días para evitar acumulaciones de seromas y acelerar la desinflamación.'
      }
    ],
    relatedSlugs: ['lipoescultura-laser', 'marcacion-abdominal-hd', 'transferencia-glutea-bbl'],
    isSensitiveIntimate: false
  },
  {
    id: 'abdominoplastia',
    slug: 'abdominoplastia',
    aliases: ['lipectomia-abdominal', 'dermolipectomia'],
    name: 'Abdominoplastia / Lipectomía',
    subtitle: 'Reconstrucción de la pared abdominal y resección de piel redundante posparto o pospérdida ponderal',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Cirugía mayor reconstructiva que tensa los músculos rectos del abdomen y elimina el faldón cutáneo péndulo.',
    overview: 'La abdominoplastia reposiciona la musculatura abdominal mediante plicatura de rectos (cerrando la diástasis), elimina el exceso dermograso infraumbilical y reposiciona estéticamente el ombligo para un vientre plano y firme.',
    candidateProfile: [
      'Mujeres posparto con diástasis de rectos y piel flácida residual',
      'Pacientes con exceso de piel tras pérdida ponderal masiva o cirugía bariátrica',
      'Personas con debilidad muscular en la pared abdominal que no cede al entrenamiento'
    ],
    keyBenefits: [
      'Cierre anatómico definitivo de la diástasis abdominal y hernias asociadas',
      'Vientre completamente plano y cintura estrechada',
      'Cicatriz baja y simétrica oculta bajo la línea del traje de baño o ropa interior'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural o general',
      duration: '3 a 4 horas',
      recovery: '15 a 21 días',
      hospitalStay: '1 noche hospitalaria'
    },
    preparation: [
      'Índice de masa corporal menor a 30 y estabilidad ponderal',
      'Cesación absoluta de tabaco al menos 4 semanas antes de la cirugía',
      'Pruebas completas de hemostasia y valoración preanestésica'
    ],
    postCare: [
      'Caminar con postura semiflectada los primeros 7 a 10 días para proteger la tensión de la herida',
      'Uso riguroso de faja postquirúrgica con refuerzo abdominal y medias antiembólicas',
      'Cuidados antisépticos de la cicatriz y vaciamiento de drenes cerrados'
    ],
    faqs: [
      {
        question: '¿Dónde queda ubicada la cicatriz?',
        answer: 'La cicatriz se coloca en la zona suprapúbica baja de cadera a cadera, diseñada minuciosamente para quedar oculta bajo la ropa interior o bikini.'
      },
      {
        question: '¿Puedo tener hijos después de una abdominoplastia?',
        answer: 'Biológicamente sí es posible, aunque se aconseja realizar la cirugía cuando la planificación familiar esté satisfecha para no distender la reparación muscular realizada.'
      },
      {
        question: '¿Cuánto tiempo debo estar de reposo laboral?',
        answer: 'Se recomiendan entre 15 y 21 días de reposo relativo para labores de oficina, y 6 a 8 semanas para levantar pesos o ejercicio físico intenso.'
      }
    ],
    relatedSlugs: ['lipoescultura-laser', 'mini-abdominoplastia', 'aumento-de-senos'],
    isSensitiveIntimate: false
  },
  {
    id: 'mini-abdominoplastia',
    slug: 'mini-abdominoplastia',
    aliases: ['mini-lipectomia'],
    name: 'Mini-abdominoplastia',
    subtitle: 'Corrección localizada del abdomen inferior con cicatriz reducida',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Variante conservadora de la abdominoplastia enfocada en el área infraumbilical sin transposición del ombligo.',
    overview: 'Intervención quirúrgica diseñada para pacientes con flacidez moderada exclusivamente localizada debajo del ombligo. Permite tensar la musculatura inferior sin requerir cicatriz periumbilical ni cortes amplios.',
    candidateProfile: [
      'Pacientes delgadas con abultamiento o piel suelta solo en el bajo vientre',
      'Sin diástasis muscular supraumbilical significativa',
      'Cicatriz de cesárea previa hundida o adherida que requiere corrección'
    ],
    keyBenefits: [
      'Cicatriz corta similar a la de una cesárea previa',
      'No altera ni transpone el ombligo natural del paciente',
      'Recuperación mucho más corta y menor dolor posoperatorio'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural o local con sedación',
      duration: '1.5 a 2 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Exámenes sanguíneos prequirúrgicos completos',
      'Ayuno médico estricto de 8 horas',
      'Suspensión de fármacos que alteren la coagulación'
    ],
    postCare: [
      'Reposo relativo de 7 días con deambulación suave',
      'Faja de contorno moderado durante 4 a 6 semanas',
      'Higiene antiséptica de la incisión baja'
    ],
    faqs: [
      {
        question: '¿Se toca el ombligo en una mini-abdominoplastia?',
        answer: 'No, el ombligo permanece en su posición y fijación anatómica original sin ninguna incisión ni cicatriz a su alrededor.'
      },
      {
        question: '¿Es más rápida la recuperación?',
        answer: 'Sí, al no requerir plicatura supraumbilical extensa ni despegamiento completo de tejidos, la reincorporación a oficina suele tomar 7 días.'
      },
      {
        question: '¿Se puede combinar con lipoescultura?',
        answer: 'Con frecuencia se combina con lipólisis de flancos y cintura para lograr una silueta estilizada y armoniosa.'
      }
    ],
    relatedSlugs: ['abdominoplastia', 'lipoescultura-laser', 'marcacion-abdominal-hd'],
    isSensitiveIntimate: false
  },
  {
    id: 'marcacion-abdominal-hd',
    slug: 'marcacion-abdominal-hd',
    aliases: ['marcacion-abdominal', 'lipo-hd-abdomen'],
    name: 'Marcación Abdominal HD',
    subtitle: 'Esculpido anatómico de los relieves musculares rectos y oblicuos',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Procedimiento de alta definición que resalta los paquetes musculares y surcos naturales del abdomen.',
    overview: 'Utiliza tecnología ultrasónica y láser para esculpir selectivamente la línea alba, los bordes semilunares de los músculos rectos y las inscripciones tendinosas, logrando un aspecto atlético y tonificado adaptado a cada biotipo.',
    candidateProfile: [
      'Pacientes deportistas con bajo porcentaje de grasa visceral',
      'Buena tonificación muscular previa y piel firme',
      'Deseo de definición de six-pack (en hombres) o líneas de esbeltez atlética (en mujeres)'
    ],
    keyBenefits: [
      'Apariencia atlética y firme sin implantes sintéticos',
      'Definición de six-pack o líneas de esbeltez que respeta la musculatura real',
      'Resultados de alta precisión y apariencia natural en reposo y movimiento'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general balanceada',
      duration: '2.5 a 3.5 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio o 1 noche'
    },
    preparation: [
      'Mantener hábitos regulares de entrenamiento físico',
      'Evaluación ecográfica de la pared abdominal',
      'Dieta normoproteica e hidratación óptima'
    ],
    postCare: [
      'Uso de espumas anatómicas y almohadillas en los surcos esculpidos',
      'Drenajes postquirúrgicos especializados y faja HD por 6 semanas',
      'Retorno paulatino al ejercicio a partir de la 4ª semana'
    ],
    faqs: [
      {
        question: '¿Cualquiera puede hacerse marcación HD?',
        answer: 'Se requiere un porcentaje de grasa corporal de bajo a moderado y piel con buena capacidad elástica para que la marcación sea estética y natural.'
      },
      {
        question: '¿El resultado se ve artificial?',
        answer: 'El Dr. Gómez sigue las inserciones tendinosas reales del paciente, evitando trazos rígidos o cuadrados que luzcan artificiales.'
      },
      {
        question: '¿Qué pasa si subo de peso después?',
        answer: 'Un incremento excesivo de peso difuminará los relieves musculares; por ello se aconseja mantener un estilo de vida saludable y activo.'
      }
    ],
    relatedSlugs: ['lipo-vaser', 'lipoescultura-laser', 'transferencia-glutea-bbl'],
    isSensitiveIntimate: false
  },
  {
    id: 'transferencia-glutea-bbl',
    slug: 'transferencia-glutea-bbl',
    aliases: ['lipoinyeccion-glutea', 'bbl-colombia'],
    name: 'Transferencia Glútea / BBL',
    subtitle: 'Aumento y proyección glútea con tejido adiposo autólogo purificado',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Injerto graso en glúteos y caderas obtenido mediante liposucción previa del propio paciente.',
    overview: 'La transferencia glútea o Brazilian Butt Lift (BBL) combina la reducción del contorno de cintura con el injerto de células grasas vivas purificadas, proyectando el polo superior y corrigiendo depresiones laterales de cadera (hip dips).',
    candidateProfile: [
      'Pacientes que desean aumentar y moldear volumen glúteo sin prótesis sintéticas',
      'Presencia de zonas donantes de grasa adecuadas en abdomen, flancos o muslos',
      'Expectativas realistas de proyección anatómica natural'
    ],
    keyBenefits: [
      'Resultado 100% natural al tacto, textura y movimiento corporal',
      'Remodelación simultánea de cintura estrecha y caderas contorneadas',
      'Cero riesgo de rechazo inmunológico al emplear tejido autólogo purificado'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural o general',
      duration: '3 a 4 horas',
      recovery: '10 a 14 días',
      hospitalStay: '1 noche de observación'
    },
    preparation: [
      'No consumir fármacos anticoagulantes ni suplementos',
      'Exámenes de perfil lipídico, coagulación y hemostasia completos',
      'Alimentación rica en antioxidantes'
    ],
    postCare: [
      'Uso de cojín BBL para no apoyar peso directamente sobre los glúteos por 2 a 3 semanas',
      'Dormir boca abajo o de lado',
      'Faja compresiva postoperatoria con soporte glúteo sin presión'
    ],
    faqs: [
      {
        question: '¿Cuánta grasa sobrevive definitivamente?',
        answer: 'Aproximadamente entre el 65% y el 80% de la grasa transferida se vasculariza y permanece para siempre; el resto se reabsorbe de forma fisiológica en las primeras semanas.'
      },
      {
        question: '¿Es seguro el BBL con el Dr. Andrés Gómez?',
        answer: 'Absolutamente; el Dr. Gómez infiltra estrictamente en el plano subcutáneo superficial, cumpliendo con las guías internacionales de bioseguridad que prohíben la inyección intramuscular profunda.'
      },
      {
        question: '¿Cuándo puedo sentarme con normalidad?',
        answer: 'Se autoriza el apoyo pleno a partir de la tercera semana de manera progresiva, utilizando previamente cojines especiales de descarga femoral.'
      }
    ],
    relatedSlugs: ['lipoescultura-laser', 'lipo-vaser', 'gluteoplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'gluteoplastia',
    slug: 'gluteoplastia',
    aliases: ['gluteoplastia-con-implantes', 'implantes-gluteos'],
    name: 'Gluteoplastia con Implantes',
    subtitle: 'Aumento de volumen y proyección glútea mediante prótesis de gel cohesivo de silicona',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Colocación de implantes intramusculares para pacientes delgados sin tejido graso donante suficiente.',
    overview: 'Procedimiento quirúrgico que inserta implantes de gel cohesivo de silicona de alta resistencia en un bolsillo intramuscular dentro del glúteo mayor, otorgando proyección firme, duradera y simétrica.',
    candidateProfile: [
      'Pacientes con glúteos planos o hipotróficos sin grasa corporal donante para BBL',
      'Deseo de proyección marcada y predecible a largo plazo',
      'Estructura osteomuscular apta para soporte protésico'
    ],
    keyBenefits: [
      'Aumento de volumen garantizado en personas constitucionalmente delgadas',
      'Prótesis de alta cohesividad diseñadas para resistir la presión mecánica corporal',
      'Cicatriz oculta en el pliegue interglúteo, invisible con traje de baño'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural con sedación o general',
      duration: '2 a 3 horas',
      recovery: '15 a 21 días',
      hospitalStay: '1 noche hospitalaria'
    },
    preparation: [
      'Evaluación antropométrica y selección milimétrica del tamaño del implante',
      'Higiene antiséptica exhaustiva de la zona perianal e interglútea',
      'Estudios prequirúrgicos completos'
    ],
    postCare: [
      'Dormir en decúbito prono (boca abajo) las dos primeras semanas',
      'Evitar inyecciones intramusculares en la zona glútea de por vida',
      'Higiene rigurosa de la herida interglútea tras cada deposición'
    ],
    faqs: [
      {
        question: '¿Dónde se coloca el implante glúteo?',
        answer: 'El Dr. Gómez coloca el implante en el plano intramuscular (dentro del músculo glúteo mayor), garantizando una cobertura acolchada natural que evita que la prótesis sea visible o palpable.'
      },
      {
        question: '¿Se sienten los implantes al sentarse?',
        answer: 'Al sentarse el peso corporal recae sobre los isquiones y no directamente sobre el implante posicionado en el polo muscular superior.'
      },
      {
        question: '¿Cada cuánto deben cambiarse?',
        answer: 'Los implantes modernos de gel de silicona cohesivo no tienen fecha de vencimiento fija a los 10 años y se controlan anualmente con ecografía médica.'
      }
    ],
    relatedSlugs: ['transferencia-glutea-bbl', 'lipoescultura-laser', 'abdominoplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'cruroplastia-lifting-muslos',
    slug: 'cruroplastia-lifting-muslos',
    aliases: ['cruroplastia', 'lifting-de-muslos'],
    name: 'Cruroplastia / Lifting de Muslos',
    subtitle: 'Resección del exceso de piel y grasa en la cara interna de los muslos',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Procedimiento que retira la piel descolgada en entrepierna restaurando la comodidad y la silueta.',
    overview: 'Resección quirúrgica de la piel laxa y tejido adiposo sobrante en la cara medial interna de los muslos. Retensa los tejidos blandos inguinales y femorales, estilizando las piernas y suprimiendo el roce molesto al caminar.',
    candidateProfile: [
      'Pacientes posbariátricos o tras pérdida de peso importante con piel redundante en entrepierna',
      'Molestias crónicas por dermatitis o rozamiento constante al caminar',
      'Flacidez dérmica en muslos no atribuible únicamente a tejido adiposo'
    ],
    keyBenefits: [
      'Eliminación de la dermatitis por fricción y rozaduras en la entrepierna',
      'Muslos firmes, tonificados y estilizados',
      'Cicatriz ubicada estratégicamente en el pliegue inguinal y surco subglúteo'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural o general',
      duration: '2.5 a 3.5 horas',
      recovery: '14 a 20 días',
      hospitalStay: '1 noche de observación'
    },
    preparation: [
      'Higiene estricta de la zona inguinal con jabón de clorhexidina',
      'Pruebas de circulación venosa y evaluación de várices',
      'Suspensión de anticoagulantes y tabaco'
    ],
    postCare: [
      'Reposo con piernas elevadas para facilitar el drenaje circulatorio',
      'Evitar abrir ampliamente las piernas durante las primeras 3 semanas',
      'Uso de muslera elástica médica graduada por 6 semanas'
    ],
    faqs: [
      {
        question: '¿Cómo es la cicatriz del lifting de muslos?',
        answer: 'En casos moderados se sitúa exclusivamente en el pliegue de la ingle; en casos de gran descolgamiento cutáneo tras pérdida masiva de peso, se complementa con una extensión vertical en la cara interna del muslo.'
      },
      {
        question: '¿Se puede caminar inmediatamente?',
        answer: 'Se aconseja deambular con pasos cortos desde el primer día para estimular el retorno venoso y prevenir la formación de trombos.'
      },
      {
        question: '¿Alivia las rozaduras en la entrepierna?',
        answer: 'Sí, es uno de los mayores beneficios funcionales reportados por las pacientes, devolviendo la comodidad para vestir y ejercitarse.'
      }
    ],
    relatedSlugs: ['braquioplastia-lifting-brazos', 'abdominoplastia', 'lipoescultura-laser'],
    isSensitiveIntimate: false
  },
  {
    id: 'braquioplastia-lifting-brazos',
    slug: 'braquioplastia-lifting-brazos',
    aliases: ['braquioplastia', 'lifting-de-brazos'],
    name: 'Braquioplastia / Lifting de Brazos',
    subtitle: 'Eliminación del descolgamiento cutáneo y adiposo en la cara interna de los brazos',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Cirugía que tensa y estiliza los brazos retirando el exceso de tejido péndulo ("alas de murciélago").',
    overview: 'Escisión quirúrgica del tejido graso y cutáneo redundante de la cara interna de los brazos. Devuelve esbeltez y tensión al contorno braquial desde la axila hasta el codo, permitiendo lucir prendas sin mangas con total libertad.',
    candidateProfile: [
      'Flacidez marcada en brazos tras pérdida masiva de peso o envejecimiento dérmico',
      'Incomodidad funcional o estética al vestir prendas ajustadas o sin mangas',
      'Grasa y piel péndula que no responden a programas de pesas ni ejercicio'
    ],
    keyBenefits: [
      'Brazos delgados, firmes y proporcionados con el tórax',
      'Eliminación del balanceo cutáneo al gesticular o levantar los brazos',
      'Cicatriz colocada longitudinalmente en la cara interna orientada hacia el tronco'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general o local más sedación profunda',
      duration: '2 a 3 horas',
      recovery: '10 a 14 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Evaluación de la elasticidad de la piel de extremidades superiores',
      'Suspender antiinflamatorios y suplementos 10 días antes',
      'Pruebas de hemostasia completas'
    ],
    postCare: [
      'Uso de mangas compresivas postquirúrgicas por 4 a 6 semanas',
      'Evitar levantar peso mayor a 3 kg o elevar codos sobre los hombros por 15 días',
      'Mantener brazos elevados sobre almohadas durante el reposo'
    ],
    faqs: [
      {
        question: '¿Dónde queda la cicatriz?',
        answer: 'Se ubica en la cara interna del brazo, orientada hacia el tórax para quedar oculta con los brazos pegados al cuerpo en posición anatómica.'
      },
      {
        question: '¿Se combina con liposucción?',
        answer: 'Frecuentemente se asocia con lipólisis previa para vaciar el exceso de tejido adiposo antes de traccionar y retirar la piel sobrante.'
      },
      {
        question: '¿Cuándo puedo volver al gimnasio?',
        answer: 'A partir de la cuarta semana para tren inferior y sexta semana para ejercicios de brazo con peso moderado.'
      }
    ],
    relatedSlugs: ['cruroplastia-lifting-muslos', 'lipoescultura-laser', 'abdominoplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'correccion-de-cicatrices',
    slug: 'correccion-de-cicatrices',
    aliases: ['revision-de-cicatrices', 'plastias-cicatriciales'],
    name: 'Corrección de Cicatrices',
    subtitle: 'Cirugía reconstructiva y estética para armonizar, disimular y afinar secuelas cicatriciales',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Procedimientos de plastia dérmica, láser fraccionado y reorientación de cicatrices hipertróficas o retráctiles.',
    overview: 'Cirugía plástica reconstructiva orientada a reparar cicatrices antiestéticas, dehiscentes, queloides o retráctiles originadas por traumatismos o cirugías previas. Se aplican plastias en Z, plastias en W y suturas intradérmicas sin tensión en las líneas de Langer.',
    candidateProfile: [
      'Pacientes con cicatrices hipertróficas, ensanchadas, deprimidas o hiperpigmentadas',
      'Presencia de retracciones o contracturas cicatrizales que limitan la movilidad o generan dolor',
      'Cicatrices consolidadas con más de 6 a 12 meses de evolución'
    ],
    keyBenefits: [
      'Afinamiento, nivelación y camuflaje visual de la cicatriz con el tono vecino',
      'Liberación de contracturas dolorosas y tirantez tisular',
      'Técnicas avanzadas de sutura plástica intradérmica y apoyo con láser fraccionado'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local con o sin sedación',
      duration: '1 a 2 horas',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Evitar exposición solar en la zona cicatrizal previa a la cirugía',
      'Tratamiento previo de cualquier proceso inflamatorio o infeccioso local',
      'Evaluación dermatológica y fotográfica'
    ],
    postCare: [
      'Protección solar estricta SPF 50+ durante un mínimo de 6 meses',
      'Uso de láminas de gel de silicona y masajes compresivos guías de colágeno',
      'Evitar tracción sobre la herida suturada'
    ],
    faqs: [
      {
        question: '¿Una cicatriz se puede borrar por completo?',
        answer: 'Ninguna cirugía borra una cicatriz al 100%, pero la técnica plástica avanzada logra transformarla en una línea fina, plana y casi imperceptible.'
      },
      {
        question: '¿Qué se hace con las cicatrices queloides?',
        answer: 'Se combinan plastias intralesionales con infiltraciones de corticoesteroides, presoterapia y terapia láser coadyuvante.'
      },
      {
        question: '¿Cuándo es el momento adecuado para corregir una cicatriz?',
        answer: 'Generalmente después de que el tejido haya madurado fisiológicamente entre 6 y 12 meses desde el evento inicial.'
      }
    ],
    relatedSlugs: ['abdominoplastia', 'lipoescultura-laser', 'mini-abdominoplastia'],
    isSensitiveIntimate: false
  },

  // --- Subcategoría: Cirugía Mamaria (5 Procedimientos) ---
  {
    id: 'aumento-de-senos',
    slug: 'aumento-de-senos',
    aliases: ['mamoplastia-de-aumento', 'protesis-mamarias'],
    name: 'Aumento de Senos / Mamoplastia',
    subtitle: 'Proyección y armonización del busto mediante implantes de última generación',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Colocación de prótesis mamarias de gel de silicona cohesivo para recuperar o incrementar el volumen del escote.',
    overview: 'La mamoplastia de aumento busca un escote natural y simétrico mediante implantes de gel cohesivo de silicona de alta biocompatibilidad colocados en plano retromuscular, subfascial o dual plane, preservando la sensibilidad y la glándula.',
    candidateProfile: [
      'Mujeres con hipoplasia mamaria o senos pequeños constitucionalmente',
      'Pérdida de volumen glandular tras lactancias o fluctuaciones ponderales',
      'Asimetrías mamarias congénitas que requieren compensación de volumen'
    ],
    keyBenefits: [
      'Aumento armónico adaptado a la contextura torácica de cada paciente',
      'Prótesis de marcas líderes aprobadas por INVIMA y FDA con garantía de por vida',
      'Técnica de recuperación rápida de 24 a 48 horas sin vendajes opresivos'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general o sedación profunda más bloqueo local',
      duration: '1 a 1.5 horas',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Mamografía y ecografía mamaria bilateral reciente',
      'Prueba de embarazo y exámenes prequirúrgicos completos',
      'Elección consensuada del volumen protésico mediante probadores anatómicos'
    ],
    postCare: [
      'Uso de brasier postquirúrgico sin varillas metálicas 24/7 por 6 semanas',
      'Evitar levantar los codos por encima de los hombros los primeros 5 días',
      'Dormir boca arriba (decúbito supino) durante el primer mes'
    ],
    faqs: [
      {
        question: '¿Dónde se coloca el implante: detrás o delante del músculo?',
        answer: 'El Dr. Gómez evalúa el espesor de la cobertura tisular; en pacientes delgadas el plano retromuscular o dual plane ofrece una transición natural sin bordes perceptibles.'
      },
      {
        question: '¿Puedo amamantar después de ponerme implantes?',
        answer: 'Sí, la vía inframamaria respeta íntegramente la glándula mamaria y los conductos galactóforos, permitiendo la lactancia normal en futuros embarazos.'
      },
      {
        question: '¿Cada cuánto tiempo se cambian los implantes de senos?',
        answer: 'Los implantes modernos de gel cohesivo de última generación no requieren recambio programado a los 10 años; solo se intervienen si la ecografía de control anual evidencia alguna alteración.'
      }
    ],
    relatedSlugs: ['levantamiento-de-senos', 'reduccion-de-senos', 'explantacion-mamaria'],
    isSensitiveIntimate: false
  },
  {
    id: 'reduccion-de-senos',
    slug: 'reduccion-de-senos',
    aliases: ['reduccion-mamaria', 'mamoplastia-reductora'],
    name: 'Reducción de Senos / Reductora',
    subtitle: 'Alivio del dolor dorsal y remodelación estética en hipertrofia mamaria',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Resección del exceso de glándula, grasa y piel en mamas voluminosas para mejorar la postura y la salud.',
    overview: 'Reduce el volumen mamario excesivo y reubica el complejo areola-pezón a una altura fisiológica y estéticamente armónica. Alivia de inmediato el peso sobre el raquis vertebral y suprime surcos dolorosos provocados por los tirantes del sostén.',
    candidateProfile: [
      'Mujeres con dolor crónico de cuello, hombros y columna dorsal por mamas voluminosas',
      'Dificultad o incomodidad para realizar actividades físicas y deportes',
      'Dermatitis o irritación persistente en el surco inframamario'
    ],
    keyBenefits: [
      'Alivio inmediato del peso sobre la espalda, cuello y articulaciones dorsales',
      'Mamas ligeras, firmes, proporcionadas y con forma juvenil',
      'Mejora sustancial en la postura corporal, libertad deportiva y autoestima'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general',
      duration: '3 a 4 horas',
      recovery: '10 a 14 días',
      hospitalStay: 'Ambulatorio o 1 noche'
    },
    preparation: [
      'Ecografía mamaria y mamografía preoperatorias de control',
      'No fumar durante al menos un mes previo para proteger la vascularización areolar',
      'Estudios completos de coagulación'
    ],
    postCare: [
      'Uso constante del brasier postquirúrgico de soporte firme por 6 semanas',
      'Curaciones periódicas estériles de las incisiones',
      'Evitar levantar objetos pesados con los brazos las primeras semanas'
    ],
    faqs: [
      {
        question: '¿Qué tipo de cicatriz deja la reducción mamaria?',
        answer: 'Comúnmente se emplea el patrón en ancla o T invertida, el cual permite retirar grandes excesos de tejido brindando un polo inferior redondeado y natural.'
      },
      {
        question: '¿Se pierde sensibilidad en los pezones?',
        answer: 'Puede ocurrir una hiposensibilidad temporal que se restablece paulatinamente gracias a técnicas modernas de preservación del pedículo neurovascular.'
      },
      {
        question: '¿Cuánto peso se puede reducir?',
        answer: 'Depende de la contextura individual, pudiendo extraerse desde 300 gramos hasta más de 1.000 gramos por mama según el grado de gigantomastia.'
      }
    ],
    relatedSlugs: ['levantamiento-de-senos', 'aumento-de-senos', 'ginecomastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'levantamiento-de-senos',
    slug: 'levantamiento-de-senos',
    aliases: ['pexia-mamaria', 'mastopexia'],
    name: 'Levantamiento de Senos / Pexia',
    subtitle: 'Reubicación y firmeza del busto caído con o sin prótesis mamarias',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Mastopexia que eleva la glándula mamaria descolgada devolviendo la proyección juvenil al escote.',
    overview: 'Cirugía que corrige la ptosis mamaria (caída de senos) provocada por lactancia, variaciones de peso o envejecimiento dérmico. Reposiciona la glándula, reseca el exceso de piel estirada y asciende el pezón; puede realizarse con tejido propio o con inclusión de implantes.',
    candidateProfile: [
      'Mujeres con mamas caídas tras embarazos o pérdida ponderal',
      'Pezón ubicado a la altura o por debajo del pliegue inframamario',
      'Deseo de recuperar firmeza y plenitud en el polo superior del escote'
    ],
    keyBenefits: [
      'Elevación del complejo areola-pezón a su posición ideal en el tórax',
      'Relleno y proyección natural del polo superior del escote',
      'Procedimiento adaptable: factible con o sin implantes según preferencia de la paciente'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general',
      duration: '2.5 a 3.5 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Estudios de imagenología mamaria (ecografía y mamografía)',
      'Evaluación médica del grado de ptosis mamaria (grados I a III)',
      'Ayuno de 8 horas'
    ],
    postCare: [
      'Sujetador anatómico médico sin aros metálicos las 24 horas',
      'Evitar esfuerzos físicos intensos y deportes de impacto durante un mes',
      'Aplicación de cremas cicatrizantes y protección solar'
    ],
    faqs: [
      {
        question: '¿Es obligatorio colocar implantes en una mastopexia?',
        answer: 'No es obligatorio; si la paciente cuenta con volumen glandular propio suficiente se realiza un auto-injerto o pexia con tejido autólogo; se añade prótesis solo si busca mayor proyección en el escote superior.'
      },
      {
        question: '¿Cómo evolucionan las cicatrices?',
        answer: 'Con el protocolo postquirúrgico guiado de láser y láminas de silicona, maduran progresivamente hacia líneas finas, suaves y claras.'
      },
      {
        question: '¿Cuánto tiempo dura el resultado?',
        answer: 'Es un resultado duradero y estable, siempre que se eviten variaciones bruscas de peso o nuevos embarazos.'
      }
    ],
    relatedSlugs: ['aumento-de-senos', 'reduccion-de-senos', 'explantacion-mamaria'],
    isSensitiveIntimate: false
  },
  {
    id: 'explantacion-mamaria',
    slug: 'explantacion-mamaria',
    aliases: ['retiro-de-implantes', 'capsulectomia-en-bloque'],
    name: 'Explantación Mamaria en Bloque',
    subtitle: 'Retiro definitivo de prótesis con capsulectomía total y reconstrucción tisular',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Extracción quirúrgica minuciosa de los implantes mamarios junto con la cápsula periprotésica completa.',
    overview: 'Extracción quirúrgica minuciosa del implante mamario y su cápsula fibrótica circundante en una sola pieza sellada (capsulectomía total o en bloque). Se acompaña de reconstrucción glandular autóloga, mastopexia y lipotransferencia para devolver una forma estética al seno.',
    candidateProfile: [
      'Mujeres con contractura capsular grados III o IV, dolor crónico o rotura de implante',
      'Pacientes con sospecha de Síndrome Autoinmune Inducido por Adyuvantes (ASIA / BII)',
      'Deseo voluntario y definitivo de no portar prótesis corporales sintéticas'
    ],
    keyBenefits: [
      'Capsulectomía en bloque que retira la cápsula íntegra sin contaminar tejidos',
      'Reconstrucción y remodelación armónica del tejido mamario propio de la paciente',
      'Alivio de síntomas inflamatorios y recuperación de la ligereza corporal'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general',
      duration: '2.5 a 3.5 horas',
      recovery: '7 a 12 días',
      hospitalStay: 'Ambulatorio o 1 noche'
    },
    preparation: [
      'Resonancia magnética mamaria o ecografía de alta resolución previa',
      'Biometría hemática completa y panel inmunológico si se sospecha ASIA',
      'Valoración preanestésica'
    ],
    postCare: [
      'Uso de drenajes temporales de aspiración suave mientras el débito sea mínimo',
      'Brasier médico compresivo de soporte suave',
      'Reposo de miembros superiores durante 10 días'
    ],
    faqs: [
      {
        question: '¿Qué significa capsulectomía en bloque?',
        answer: 'Implica retirar el implante y la cápsula cicatrizal como una sola pieza cerrada y sellada, evitando el contacto de detritos o silicona con los tejidos mamarios vecinos.'
      },
      {
        question: '¿Cómo quedan los senos después de la explantación?',
        answer: 'El Dr. Gómez realiza una mastopexia reconstructiva interna y lipotransferencia de grasa propia si se requiere, logrando un pecho armonioso, suave y proporcional.'
      },
      {
        question: '¿Se envía la cápsula a patología?',
        answer: 'Sí, todas las cápsulas resecadas se envían a estudio histopatológico de rutina para máxima seguridad y tranquilidad de la paciente.'
      }
    ],
    relatedSlugs: ['levantamiento-de-senos', 'reduccion-de-senos', 'aumento-de-senos'],
    isSensitiveIntimate: false
  },
  {
    id: 'ginecomastia',
    slug: 'ginecomastia',
    aliases: ['reduccion-pectoral-masculina', 'ginecomastia-laser'],
    name: 'Ginecomastia Pectoral',
    subtitle: 'Aplanamiento y masculinización del tórax en varones con aumento del tejido mamario',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Cirugía que elimina el exceso de glándula mamaria y grasa en el tórax masculino.',
    overview: 'Corrección quirúrgica del desarrollo excesivo del tejido mamario en hombres. Combina liposucción ultrasónica o láser de la grasa circundante con la extirpación quirúrgica directa de la glándula retroareolar hipertrófica a través de una incisión periareolar inferior mínima.',
    candidateProfile: [
      'Hombres con aumento glandular o adiposo en el pecho que les genera incomodidad estética',
      'Varones con peso controlado que presentan hipertrofia pectoral benigna persistente',
      'Ausencia de desbalances hormonales activos no tratados'
    ],
    keyBenefits: [
      'Tórax plano, firme y con definición atlética masculina',
      'Cicatriz semicircular periareolar casi imperceptible oculta en el cambio de tono',
      'Recuperación de la confianza personal para retirarse la camiseta o practicar natación'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local con sedación o general',
      duration: '1.5 a 2.5 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Perfil hormonal completo (testosterona, estradiol, prolactina, TSH)',
      'Ecografía de tórax masculino para diferenciar componente glandular de graso',
      'Suspender suplementos deportivos anabólicos'
    ],
    postCare: [
      'Uso de chaleco compresivo torácico masculino durante 3 a 4 semanas',
      'Evitar ejercicios de press de pecho o levantamiento de pesas por 30 días',
      'Drenajes postquirúrgicos en los primeros días'
    ],
    faqs: [
      {
        question: '¿La glándula resecada puede volver a crecer?',
        answer: 'Una vez extraída la glándula de forma completa, no vuelve a desarrollarse si no se consumen fármacos inductores ni esteroides anabólicos.'
      },
      {
        question: '¿Quedan cicatrices notorias en el pecho?',
        answer: 'La incisión se realiza en el borde inferior de la areola donde la transición natural de pigmentación la disimula extraordinariamente bien.'
      },
      {
        question: '¿Cuándo puedo volver a hacer deporte?',
        answer: 'Caminar y ejercicio aeróbico suave a los 7 días; ejercicios de musculación en el tren superior a las 4 semanas.'
      }
    ],
    relatedSlugs: ['lipoescultura-laser', 'lipo-vaser', 'marcacion-abdominal-hd'],
    isSensitiveIntimate: false
  },

  // ==========================================================================
  // CATEGORÍA 2: CIRUGÍA FACIAL (7 PROCEDIMIENTOS)
  // ==========================================================================
  {
    id: 'rinoplastia-ultrasonica',
    slug: 'rinoplastia-ultrasonica',
    aliases: ['rinoplastia', 'cirugia-de-nariz'],
    name: 'Rinoplastia Ultrasónica',
    subtitle: 'Precisión milimétrica ósea con piezoeléctrico para moldear el dorso y la punta nasal sin traumatismos',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía estética y funcional de la nariz mediante bisturí piezoeléctrico ultrasónico sin fracturas a ciegas.',
    overview: 'Cirugía estética y funcional de la pirámide nasal ejecutada con instrumental piezoeléctrico de ultrasonido. Permite remodelar, limar y cortar los huesos nasales con precisión milimétrica sin desgarrar la mucosa ni vasos, solucionando desviaciones del tabique sin inflamación masiva.',
    candidateProfile: [
      'Pacientes con giba dorsal ósea prominente o punta nasal bulbosa o caída',
      'Dificultad respiratoria concomitante por tabique desviado o cornetes hipertróficos',
      'Deseo de refinamiento nasal armónico con el resto de las facciones del rostro'
    ],
    keyBenefits: [
      'Cero fracturas óseas traumáticas a ciegas tradicionales',
      'Inflamación reducida y ausencia de hematomas masivos ("ojos morados") en el 90% de casos',
      'Recuperación confortable sin dolorosos taponamientos nasales oclusivos',
      'Preservación y optimización de la función ventilatoria aérea respiratoria'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general con tubo endotraqueal protegido',
      duration: '2.5 a 3.5 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Tomografía computarizada de nariz y senos paranasales si hay componente funcional',
      'No consumir aspirina ni antiinflamatorios 10 días previos',
      'Fotografía de perfilometría facial en consulta médica'
    ],
    postCare: [
      'Uso de férula termoplástica dorsal nasal durante 7 días',
      'Lavados nasales frecuentes con solución salina estéril isotónica',
      'Dormir con la cabeza elevada a 45 grados y no apoyar gafas por 6 semanas'
    ],
    faqs: [
      {
        question: '¿Es dolorosa la rinoplastia ultrasónica?',
        answer: 'Es sorprendentemente poco dolorosa; los pacientes describen una sensación de congestión nasal similar a una gripe leve más que dolor agudo.'
      },
      {
        question: '¿Se usan tapones nasales molestos?',
        answer: 'El Dr. Gómez utiliza férulas internas de silicona con vía aérea que permiten respirar inmediatamente tras la cirugía sin taponamientos asfixiantes.'
      },
      {
        question: '¿Cuándo se aprecia el resultado final de la nariz?',
        answer: 'Al retirar la férula a los 7 días se aprecia el cambio estructural; la definición completa de la piel de la punta concluye entre los 6 y 12 meses.'
      }
    ],
    relatedSlugs: ['mentoplastia', 'bichectomia', 'blefaroplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'blefaroplastia',
    slug: 'blefaroplastia',
    aliases: ['cirugia-de-parpados', 'blefaroplastia-laser'],
    name: 'Blefaroplastia / Párpados',
    subtitle: 'Rejuvenecimiento de la mirada retirando bolsas grasas y exceso de piel palpebral',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía estética de párpados superiores e inferiores que elimina el aspecto cansado y despeja los ojos.',
    overview: 'Rejuvenecimiento de la mirada mediante la resección del exceso de piel flácida en los párpados superiores y la extracción o redistribución de las bolsas grasas y corrección de ojeras en los párpados inferiores, despejando la mirada con cicatrices imperceptibles.',
    candidateProfile: [
      'Mirada pesada o aspecto constante de cansancio por piel redundante en párpados',
      'Bolsas grasas prominentes y ojeras en párpados inferiores',
      'Reducción del campo visual superior por caída del párpado sobre las pestañas'
    ],
    keyBenefits: [
      'Mirada despierta, luminosa, fresca y descansada sin alterar la expresión natural',
      'Ampliación notable del campo visual superior',
      'Cicatrices prácticamente invisibles ocultas en los pliegues naturales o por vía transconjuntival'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local asistida con sedación consciente',
      duration: '1 a 2 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Valoración oftalmológica básica y agudeza visual previa',
      'Suspender medicamentos anticoagulantes y aspirinas',
      'Acudir sin maquillaje ni lentes de contacto'
    ],
    postCare: [
      'Compresas frías sobre los ojos durante las primeras 48 horas',
      'Uso de lágrimas artificiales lubricantes y gafas de sol oscuras en exteriores',
      'Retiro de puntos de sutura al 4° o 5° día'
    ],
    faqs: [
      {
        question: '¿Cambia la forma de mis ojos?',
        answer: 'No; la técnica del Dr. Gómez rejuvenece y despeja la mirada preservando la almendra y forma original de los ojos sin provocar redondez artificial.'
      },
      {
        question: '¿La blefaroplastia inferior deja cicatriz visible?',
        answer: 'Cuando solo existen bolsas de grasa sin exceso cutáneo, se interviene por vía transconjuntival (por dentro del párpado), con cero cortes externos.'
      },
      {
        question: '¿Cuándo puedo usar maquillaje en los ojos?',
        answer: 'A partir de los 10 días tras la cirugía, una vez las microincisiones han cerrado completamente.'
      }
    ],
    relatedSlugs: ['lifting-facial', 'rinoplastia-ultrasonica', 'cervicoplastia-cuello'],
    isSensitiveIntimate: false
  },
  {
    id: 'bichectomia',
    slug: 'bichectomia',
    aliases: ['extraccion-bolsas-bichat', 'afinamiento-facial'],
    name: 'Bichectomía / Bolsas de Bichat',
    subtitle: 'Afinamiento de las mejillas para destacar los pómulos y la línea mandibular',
    category: 'cirugia-facial',
    shortDescription: 'Resección selectiva de las bolsas grasas de Bichat a través del interior de la boca.',
    overview: 'Extracción quirúrgica selectiva de las bolsas grasas de Bichat situadas en las mejillas a través de dos microincisiones de 1 cm dentro de la cavidad oral. Afina el tercio medio del rostro y acentúa el relieve de pómulos y mandíbula.',
    candidateProfile: [
      'Rostros redondeados o con exceso de volumen en mejillas a pesar de encontrarse en peso adecuado',
      'Deseo de mayor definición y perfilamiento de pómulos y mandíbula',
      'Buena estructura ósea facial de soporte'
    ],
    keyBenefits: [
      'Procedimiento ambulatorio rápido (30 a 45 minutos) y confortable',
      'Cero cicatrices visibles en el rostro (abordaje 100% intraoral)',
      'Afinamiento facial sutil, permanente y elegante'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local simple o con sedación suave',
      duration: '30 a 45 minutos',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Higiene oral minuciosa previa con cepillado e hilo dental',
      'Enjuagues bucales antisépticos con clorhexidina 0.12%',
      'Ayuno ligero si se acompaña de sedación'
    ],
    postCare: [
      'Dieta blanda y fría durante los primeros 2 días para evitar masticación forzada',
      'Aplicación de compresas frías en las mejillas y reposo de actividad física',
      'Higiene bucal cuidadosa tras cada alimento'
    ],
    faqs: [
      {
        question: '¿Se notan cicatrices por fuera?',
        answer: 'Ninguna; las incisiones se realizan en la mucosa interna de la boca y se suturan con puntos reabsorbibles que caen por sí solos.'
      },
      {
        question: '¿Puede envejecer mi rostro en el futuro?',
        answer: 'El Dr. Gómez extrae una porción calibrada y conservadora exclusivamente en pacientes candidatos para evitar adelgazamiento excesivo tardío.'
      },
      {
        question: '¿Cuándo se notan los resultados?',
        answer: 'La inflamación cede significativamente a las 2 semanas y el perfilamiento definitivo se consolida a partir del segundo mes.'
      }
    ],
    relatedSlugs: ['mentoplastia', 'rinoplastia-ultrasonica', 'cervicoplastia-cuello'],
    isSensitiveIntimate: false
  },
  {
    id: 'lifting-facial',
    slug: 'lifting-facial',
    aliases: ['ritidoplastia', 'estiramiento-facial'],
    name: 'Lifting Facial / Ritidoplastia',
    subtitle: 'Reposicionamiento del plano SMAS profundo para devolver la juventud y tensión facial natural',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía de rejuvenecimiento integral que tensa las estructuras profundas del tercio medio e inferior del rostro.',
    overview: 'Cirugía avanzada de rejuvenecimiento facial. No estira la piel superficial sino que recoloca y tensa el sistema músculo-aponeurótico superficial (SMAS) profundo de mejillas, pómulos y línea mandibular, borrando surcos sin tensión antinatural.',
    candidateProfile: [
      'Hombres y mujeres a partir de los 45-50 años con descolgamiento de mejillas (jowls)',
      'Pérdida de definición en la línea mandibular y surcos nasogenianos acentuados',
      'Flacidez facial moderada a severa que busca rejuvenecimiento definitivo'
    ],
    keyBenefits: [
      'Rejuvenecimiento comprobado de 10 a 15 años manteniendo la naturalidad expresiva',
      'Reposición de volumen juvenil en pómulos y óvalo facial nítido',
      'Cicatrices meticulosamente camufladas en el contorno auricular y línea del cabello'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia general o local profunda con sedación',
      duration: '3.5 a 5 horas',
      recovery: '14 a 21 días',
      hospitalStay: '1 noche de observación'
    },
    preparation: [
      'Estudios prequirúrgicos completos y valoración cardiovascular exhaustiva',
      'Cesación estricta de tabaco 4 semanas antes para proteger la microcirculación cutánea',
      'Planificación digital del vector de reposicionamiento'
    ],
    postCare: [
      'Vendaje facial elástico suave durante las primeras 48 horas',
      'Dormir con la cabeza elevada a 30 grados para mitigar el edema',
      'Drenajes linfáticos suaves a partir del 5° día y protección solar rigurosa'
    ],
    faqs: [
      {
        question: '¿Quedaré con la cara estirada o con expresión congelada?',
        answer: 'No; el lifting moderno del plano profundo SMAS reposiciona la musculatura interna; la piel solo se readapta sin tirantez forzada, preservando la mímica natural.'
      },
      {
        question: '¿Cuánto dura el efecto de un lifting facial?',
        answer: 'Los efectos duran en promedio entre 10 y 12 años, manteniendo siempre a la persona con una apariencia más joven que su edad cronológica.'
      },
      {
        question: '¿Dónde se esconden las cicatrices?',
        answer: 'Se ocultan meticulosamente en la línea del cuero cabelludo y en las curvas anatómicas pre y retroauriculares por delante del trago.'
      }
    ],
    relatedSlugs: ['cervicoplastia-cuello', 'blefaroplastia', 'mentoplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'cervicoplastia-cuello',
    slug: 'cervicoplastia-cuello',
    aliases: ['cervicoplastia', 'lifting-de-cuello'],
    name: 'Cervicoplastia / Cuello',
    subtitle: 'Definición del ángulo cervicomentoniano y eliminación de la papada y bandas platismales',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía que elimina la papada, tensa los músculos platisma y define el contorno mandibular.',
    overview: 'Intervención orientada a estilizar la región cervical y submentoniana. Elimina la papada mediante lipoaspiración precisa y corrige las bandas verticales del músculo platisma mediante plicatura anterior (corsé platismal), restableciendo un ángulo limpio y definido.',
    candidateProfile: [
      'Pacientes con papada prominente, grasa submentoniana o bandas verticales de platisma',
      'Pérdida del ángulo mandibular o cuello caído y descolgado',
      'Deseo de estilizar el perfil del tercio inferior'
    ],
    keyBenefits: [
      'Ángulo cervicomental estilizado y tenso a 90 grados',
      'Eliminación definitiva de la papada o doble mentón redundante',
      'Perfil mandibular rejuvenecido, nítido y descansado'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local con sedación o general',
      duration: '2 a 3 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Ecografía de tejidos blandos de cuello si hay sospecha de hipertrofia submandibular',
      'Suspender aspirina y antiinflamatorios 10 días antes',
      'Ayuno estándar de 8 horas'
    ],
    postCare: [
      'Uso de mentonera elástica compresiva cervical durante 1 a 2 semanas',
      'Dormir con el cuello alineado sobre almohada ergonómica',
      'Evitar flexiones bruscas del cuello las primeras dos semanas'
    ],
    faqs: [
      {
        question: '¿Se puede hacer solo liposucción de papada?',
        answer: 'Si el paciente es joven y conserva excelente elasticidad dérmica, una lipólisis de papada es suficiente; si existen bandas musculares o laxitud de piel, la cervicoplastia es la solución integral requerida.'
      },
      {
        question: '¿Dónde se realiza la incisión?',
        answer: 'Se efectúa una pequeña incisión oculta en el surco submentoniano bajo la barbilla y, si se requiere tensado lateral, pliegues retroauriculares.'
      },
      {
        question: '¿Es compatible con mentoplastia?',
        answer: 'Frecuentemente se asocian en el mismo acto quirúrgico para maximizar la proyección armónica del perfil facial.'
      }
    ],
    relatedSlugs: ['lifting-facial', 'mentoplastia', 'blefaroplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'mentoplastia',
    slug: 'mentoplastia',
    aliases: ['cirugia-de-menton', 'aumento-de-menton'],
    name: 'Mentoplastia / Implante Mentón',
    subtitle: 'Armonización del perfil facial mediante implante anatómico de mentón o osteotomía',
    category: 'cirugia-facial',
    shortDescription: 'Procedimiento de perfiloplastia que otorga fuerza y proporción al mentón retraído.',
    overview: 'Cirugía de armonización del perfil facial (perfiloplastia) que proyecta un mentón retraído o pequeño (microgenia) mediante la colocación de un implante anatómico biocompatible fijado al periostio óseo mandibular, mejorando la relación entre nariz, labios y cuello.',
    candidateProfile: [
      'Microgenia o mentón retraído en vista de perfil que desequilibra las proporciones nasales',
      'Deseo de mayor definición y presencia en la línea de la mandíbula',
      'Oclusión dental normal sin alteración ortognática mayor'
    ],
    keyBenefits: [
      'Mejora radical de la armonía geométrica del perfil facial',
      'Procedimiento rápido de gran impacto estético y alta predictibilidad',
      'Incisión intraoral sin ninguna cicatriz externa visible en la piel'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local asistida con sedación',
      duration: '1 a 1.5 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Fotografía médica de perfilometría computarizada',
      'Enjuagues bucales antisépticos previos',
      'Pruebas de coagulación y hemostasia'
    ],
    postCare: [
      'Dieta blanda los primeros 3 días para cuidar la incisión mucosa',
      'Micropore de fijación sobre el mentón durante una semana',
      'Higiene bucal antiséptica tras cada comida'
    ],
    faqs: [
      {
        question: '¿Se nota el implante al hablar o reír?',
        answer: 'No; los implantes anatómicos se fijan sólidamente al periostio bajo el músculo mentoniano y se sienten exactamente igual a la estructura ósea mandibular.'
      },
      {
        question: '¿Se puede combinar con rinoplastia?',
        answer: 'Sí, la perfiloplastia que combina rinoplastia y mentoplastia es una de las intervenciones más agradecidas por su armonización global de las facciones.'
      },
      {
        question: '¿La cirugía deja cicatriz en la piel?',
        answer: 'Generalmente se realiza por el surco gingivolabial inferior por dentro de la boca, sin ninguna cicatriz exterior.'
      }
    ],
    relatedSlugs: ['rinoplastia-ultrasonica', 'bichectomia', 'cervicoplastia-cuello'],
    isSensitiveIntimate: false
  },
  {
    id: 'otoplastia',
    slug: 'otoplastia',
    aliases: ['cirugia-de-orejas', 'correccion-orejas-en-asa'],
    name: 'Otoplastia / Orejas en Asa',
    subtitle: 'Corrección de la separación y remodelación del cartílago auricular',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía que aproxima las orejas prominentes a la cabeza y crea los pliegues cartilaginosos ausentes.',
    overview: 'Intervención plástica destinada a corregir las orejas prominentes o "en asa". Modela y plica el cartílago auricular para recrear el pliegue del antihélix y reduce la concha auricular, reposicionando las orejas pegadas a la cabeza con total simetría y naturalidad.',
    candidateProfile: [
      'Adultos y niños mayores de 6-7 años con orejas despegadas ("en asa")',
      'Asimetría auricular notoria o deformidades del cartílago del antihélix',
      'Deseo de recuperar la comodidad estética para lucir cualquier peinado'
    ],
    keyBenefits: [
      'Corrección definitiva e inmediata de la proyección excesiva de las orejas',
      'Cicatriz totalmente oculta en el surco posterior retroauricular',
      'Procedimiento seguro y de rápida recuperación con mínima molestia'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local más sedación (o general en niños)',
      duration: '1 a 2 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Lavado minucioso de orejas y cuero cabelludo con jabón antiséptico',
      'Pruebas de coagulación y valoración prequirúrgica',
      'Acudir con ropa holgada con botones frontales'
    ],
    postCare: [
      'Uso de diadema o banda elástica deportiva suave para dormir durante 3 semanas',
      'Retiro del vendaje cefálico a las 48-72 horas',
      'Evitar deportes de contacto físico durante un mes'
    ],
    faqs: [
      {
        question: '¿Las orejas pueden volver a despegarse?',
        answer: 'Con las técnicas de debilitamiento del cartílago y suturas de sustentación interna empleadas por el Dr. Gómez, la tasa de recidiva es inferior al 1%.'
      },
      {
        question: '¿Afecta la audición?',
        answer: 'En lo absoluto; es una cirugía que interviene exclusivamente sobre el pabellón cartilaginoso externo sin tocar el conducto ni las estructuras auditivas.'
      },
      {
        question: '¿Cuándo se retiran los vendajes?',
        answer: 'El vendaje inicial se retira a las 48-72 horas en consulta y se sustituye por una banda elástica suave tipo tenista para dormir.'
      }
    ],
    relatedSlugs: ['rinoplastia-ultrasonica', 'blefaroplastia', 'lifting-facial'],
    isSensitiveIntimate: false
  },

  // ==========================================================================
  // CATEGORÍA 3: CIRUGÍA ÍNTIMA (6 PROCEDIMIENTOS)
  // Tratamiento Bioético: Sin fotografías explícitas públicas; isSensitiveIntimate: true
  // ==========================================================================
  {
    id: 'labioplastia-ninfoplastia',
    slug: 'labioplastia-ninfoplastia',
    aliases: ['labioplastia', 'ninfoplastia'],
    name: 'Labioplastia / Ninfoplastia',
    subtitle: 'Reducción y simetrización funcional y estética de los labios menores',
    category: 'cirugia-intima',
    shortDescription: 'Procedimiento reconstructivo y estético que reduce la hipertrofia de los labios menores vulvares.',
    overview: 'Cirugía gineco-estética de precisión que reduce y remodela los labios menores hipertróficos o asimétricos mediante técnicas de resección en cuña o desepitelización con láser o radiofrecuencia, conservando la inervación sensitiva y la pigmentación anatómica del reborde.',
    candidateProfile: [
      'Mujeres con labios menores protruyentes o asimétricos que sobrepasan los labios mayores',
      'Molestias crónicas por fricción al caminar, andar en bicicleta o con ropa ajustada',
      'Dolor o incomodidad durante las relaciones íntimas (dispareunia)'
    ],
    keyBenefits: [
      'Alivio inmediato de molestias físicas, pellizcamientos y rozaduras',
      'Mejora estética y anatómica discreta con respeto absoluto de la sensibilidad',
      'Técnica de resección láser o cuña con puntos reabsorbibles que caen por sí solos'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local tumescente con sedación consciente',
      duration: '1 a 1.5 horas',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Citología cervicovaginal al día e higiene íntima con jabón pH neutro',
      'Programar la cirugía fuera de los días del período menstrual',
      'Suspender medicamentos que alteren la coagulación sanguínea'
    ],
    postCare: [
      'Reposo relativo de 72 horas con compresas frías locales intermitentes',
      'Uso de ropa holgada de algodón que no ejerza presión sobre la vulva',
      'Abstenerse de relaciones sexuales y baños de inmersión durante 4 a 6 semanas'
    ],
    faqs: [
      {
        question: '¿Se pierde sensibilidad en la zona íntima?',
        answer: 'No; el procedimiento se limita exclusivamente al borde de los labios menores respetando minuciosamente la inervación del clítoris y las terminaciones sensitivas erógenas.'
      },
      {
        question: '¿Cuándo puedo retomar mis labores?',
        answer: 'A los 3 a 5 días para labores cotidianas y de oficina; se sugiere vestir prendas holgadas durante la primera semana.'
      },
      {
        question: '¿Los puntos se tienen que retirar?',
        answer: 'No; se emplean suturas absorbibles ultrafinas que se degradan de forma espontánea entre la segunda y tercera semana.'
      }
    ],
    relatedSlugs: ['vaginoplastia', 'rejuvenecimiento-vaginal-laser', 'lipotransferencia-labios-mayores'],
    isSensitiveIntimate: true
  },
  {
    id: 'vaginoplastia',
    slug: 'vaginoplastia',
    aliases: ['colporrafia-posterior', 'tensado-vaginal'],
    name: 'Vaginoplastia (Tensado Vaginal)',
    subtitle: 'Reconstrucción del canal vaginal y fortalecimiento del suelo pélvico',
    category: 'cirugia-intima',
    shortDescription: 'Cirugía que aproxima los músculos perineales distendidos devolviendo el tono al canal vaginal.',
    overview: 'Cirugía reconstructiva del suelo pélvico (colporrafia) que aproxima y sutura los músculos elevadores del ano y fascias que han perdido tonicidad debido a partos vaginales o al paso de los años, estrechando el diámetro del canal vaginal y aumentando el soporte pélvico.',
    candidateProfile: [
      'Sensación de amplitud, flacidez o pérdida de tono en el canal vaginal',
      'Inconformidad funcional o disminución de la fricción durante la intimidad',
      'Debilidad del piso pélvico posterior posparto'
    ],
    keyBenefits: [
      'Fortalecimiento integral del piso pélvico y soporte de las paredes vaginales',
      'Aumento de la fricción, turgencia y satisfacción íntima de la pareja',
      'Técnica reconstructiva precisa con abordaje interno sin cicatrices externas'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia peridural o general balanceada',
      duration: '1.5 a 2 horas',
      recovery: '7 a 10 días',
      hospitalStay: 'Ambulatorio o 1 noche'
    },
    preparation: [
      'Valoración uroginecológica y citología cervicovaginal reciente',
      'Limpieza intestinal o dieta ligera previa',
      'Ayuno quirúrgico estándar'
    ],
    postCare: [
      'Reposo físico relativo y evitar levantar pesos mayores a 5 kg las primeras 6 semanas',
      'Abstinencia sexual estricta por 6 semanas para permitir la cicatrización muscular',
      'Ejercicios de fisioterapia de suelo pélvico a partir del segundo mes'
    ],
    faqs: [
      {
        question: '¿Se puede tener un parto natural después de una vaginoplastia?',
        answer: 'Se recomienda para mujeres que han completado sus planes de maternidad, ya que un nuevo parto vaginal distendería la reparación muscular efectuada.'
      },
      {
        question: '¿Es doloroso el postoperatorio?',
        answer: 'Produce una molestia moderada similar a una sensación de presión pélvica, fácilmente controlable con analgésicos durante los primeros 4 días.'
      },
      {
        question: '¿Ayuda con la incontinencia urinaria leve?',
        answer: 'Al reforzar el suelo pélvico posterior y el cuerpo perineal, con frecuencia mejora el soporte uretral y la continencia de esfuerzo leve.'
      }
    ],
    relatedSlugs: ['perineoplastia', 'labioplastia-ninfoplastia', 'rejuvenecimiento-vaginal-laser'],
    isSensitiveIntimate: true
  },
  {
    id: 'rejuvenecimiento-vaginal-laser',
    slug: 'rejuvenecimiento-vaginal-laser',
    aliases: ['laser-vaginal', 'tensado-laser'],
    name: 'Rejuvenecimiento Vaginal Láser',
    subtitle: 'Procedimiento no ablativo que estimula colágeno en la mucosa y canal vaginal',
    category: 'cirugia-intima',
    shortDescription: 'Tratamiento ambulatorio con láser fraccionado para tensado y lubricación vaginal sin cirugía.',
    overview: 'Tratamiento médico no quirúrgico que emite energía térmica controlada mediante láser fraccionado en 360 grados sobre la mucosa vaginal. Estimula la formación de nuevo colágeno, aumenta la vascularización local y restaura la lubricación y el pH fisiológico.',
    candidateProfile: [
      'Mujeres con sequedad vaginal, picor, ardor o atrofia vulvovaginal menopáusica',
      'Laxitud vaginal leve a moderada tras partos',
      'Incontinencia urinaria leve de esfuerzo al toser o reír'
    ],
    keyBenefits: [
      'Procedimiento en consultorio médico sin anestesia general, incisiones ni sangrado',
      'Mejora la lubricación, turgencia e hidratación de la mucosa vaginal',
      'Reincorporación inmediata a las actividades de la vida diaria'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia tópica en gel',
      duration: '20 a 30 minutos',
      recovery: 'Inmediata (1 día)',
      hospitalStay: 'Ambulatorio en consultorio'
    },
    preparation: [
      'Citología cervicovaginal al día con resultado normal',
      'Descartar infecciones urinarias o vaginales activas',
      'No requiere ayuno médico'
    ],
    postCare: [
      'Evitar relaciones sexuales durante 48 a 72 horas tras cada sesión',
      'Uso de geles hidratantes vulvares recomendados',
      'Completar el protocolo de 2 a 3 sesiones según indicación médica'
    ],
    faqs: [
      {
        question: '¿Cuántas sesiones se necesitan?',
        answer: 'Por lo general se realiza un protocolo de 2 a 3 sesiones espaciadas cada 4 a 6 semanas, según el grado de atrofia o laxitud diagnosticado.'
      },
      {
        question: '¿Duele la sesión de láser vaginal?',
        answer: 'No es doloroso; se percibe únicamente una leve vibración y una agradable sensación de calor en el interior del canal.'
      },
      {
        question: '¿Cuánto duran los beneficios?',
        answer: 'Los efectos duran entre 12 y 18 meses, recomendándose una sesión anual de mantenimiento para conservar la síntesis activa de colágeno.'
      }
    ],
    relatedSlugs: ['labioplastia-ninfoplastia', 'vaginoplastia', 'lipotransferencia-labios-mayores'],
    isSensitiveIntimate: true
  },
  {
    id: 'lipotransferencia-labios-mayores',
    slug: 'lipotransferencia-labios-mayores',
    aliases: ['voluminizacion-labios-mayores', 'injerto-graso-vulvar'],
    name: 'Lipotransferencia Labios Mayores',
    subtitle: 'Restauración del volumen, turgencia y juventud de la vulva mediante microinjerto graso',
    category: 'cirugia-intima',
    shortDescription: 'Injerto de grasa purificada del propio paciente en los labios mayores para devolverles grosor y protección.',
    overview: 'Restauración del volumen, firmeza y turgencia de los labios mayores vulvares mediante el injerto de micrograsa autóloga depurada, rica en células madre mesenquimales extraídas de una pequeña zona donante del cuerpo de la paciente.',
    candidateProfile: [
      'Mujeres con atrofia, arrugamiento o pérdida de volumen en labios mayores por edad o adelgazamiento',
      'Sensación de desprotección o roce en el introito vulvar y labios menores',
      'Deseo de rejuvenecimiento vulvar integral y aspecto turgente'
    ],
    keyBenefits: [
      'Aspecto turgente, juvenil e hidratado de los genitales externos',
      'Protección natural reforzada de los labios menores y la entrada vaginal',
      'Uso de tejido autólogo 100% biocompatible sin sustancias sintéticas aloplásticas'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local con sedación suave',
      duration: '1 a 1.5 horas',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Localización y marcación de la zona donante (abdomen bajo o cara interna de muslos)',
      'Ayuno estándar de 8 horas',
      'Pruebas de coagulación y hemostasia'
    ],
    postCare: [
      'Evitar presión mecánica directa o ropa íntima ceñida por 10 días',
      'Compresas frías suaves intermitentes las primeras 48 horas',
      'Abstinencia sexual por 3 a 4 semanas para asegurar el prendimiento del injerto'
    ],
    faqs: [
      {
        question: '¿De dónde se extrae la grasa?',
        answer: 'Se obtiene una cantidad pequeña (30 a 50 ml) de la zona del bajo abdomen o de la cara interna de los muslos mediante una microcánula atraumática.'
      },
      {
        question: '¿El resultado es permanente?',
        answer: 'Entre el 65% y el 75% de la grasa transferida se vasculariza de forma permanente como tejido adiposo vivo definitivo.'
      },
      {
        question: '¿Se puede combinar con labioplastia?',
        answer: 'Es una de las combinaciones más frecuentes para lograr una armonía vulvar total y rejuvenecida.'
      }
    ],
    relatedSlugs: ['labioplastia-ninfoplastia', 'monsplastia-reduccion-monte-de-venus', 'vaginoplastia'],
    isSensitiveIntimate: true
  },
  {
    id: 'monsplastia-reduccion-monte-de-venus',
    slug: 'monsplastia-reduccion-monte-de-venus',
    aliases: ['lipoplastia-pubica', 'monsplastia'],
    name: 'Monsplastia / Monte de Venus',
    subtitle: 'Reducción del abultamiento graso y flacidez en el pubis para lucir trajes de baño con comodidad',
    category: 'cirugia-intima',
    shortDescription: 'Liposucción y resección de piel redundante en el área púbica o monte de Venus.',
    overview: 'Remodelación estética del monte de Venus mediante lipoaspiración precisa de la almohadilla grasa prominente y, si coexiste descolgamiento, resección y retensado cutáneo superior (lifting púbico), aplanando el perfil suprapúbico.',
    candidateProfile: [
      'Pacientes con acumulación grasa prominente o descolgamiento en el monte de Venus',
      'Incomodidad o abultamiento notorio con ropa ceñida, mallas deportivas o trajes de baño',
      'Distensión suprapúbica tras pérdidas masivas de peso o cicatrices previas de cesárea'
    ],
    keyBenefits: [
      'Pubis plano, definido y proporcionado con la silueta abdominal',
      'Comodidad total para vestir leggings, ropa deportiva y trajes de baño sin complejos',
      'Procedimiento mínimamente invasivo con asistencia láser'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local tumescente o con sedación',
      duration: '1 a 1.5 horas',
      recovery: '3 a 5 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Depilación o afeitado higiénico de la zona púbica 48 horas previas',
      'Pruebas de laboratorio estándar',
      'Ayuno prequirúrgico si se acompaña de sedación'
    ],
    postCare: [
      'Uso de prenda elástica con compresión suprapúbica por 2 a 3 semanas',
      'Drenajes postquirúrgicos suaves y curación de microincisiones',
      'Evitar prendas que rocen directamente sobre la incisión baja del pubis'
    ],
    faqs: [
      {
        question: '¿Se puede hacer al mismo tiempo que una abdominoplastia?',
        answer: 'Sí, frecuentemente se realiza dentro de la misma cirugía de lipectomía o lipoescultura para garantizar un contorno corporal y púbico continuo y estético.'
      },
      {
        question: '¿Quedan cicatrices notorias?',
        answer: 'Si solo es liposucción láser, las microincisiones son de 3 mm; si requiere resección de piel sobrante, la cicatriz queda camuflada en la línea más baja del bikini.'
      },
      {
        question: '¿Afecta la sensibilidad íntima?',
        answer: 'No compromete ninguna estructura nerviosa profunda ni la sensibilidad del clítoris, actuando solo en el plano adiposo celular subcutáneo suprapúbico.'
      }
    ],
    relatedSlugs: ['abdominoplastia', 'labioplastia-ninfoplastia', 'lipotransferencia-labios-mayores'],
    isSensitiveIntimate: true
  },
  {
    id: 'perineoplastia',
    slug: 'perineoplastia',
    aliases: ['reconstruccion-perineal', 'reparacion-del-introito'],
    name: 'Perineoplastia Reconstructiva',
    subtitle: 'Reparación del cuerpo perineal, introito vaginal y cicatrices posparto de episiotomía',
    category: 'cirugia-intima',
    shortDescription: 'Cirugía que reconstruye el periné y corrige desgarros o cicatrices dolorosas de partos anteriores.',
    overview: 'Reconstrucción plástica del cuerpo perineal (la región anatómica entre la entrada vaginal y el esfínter anal). Repara desgarros obstétricos antiguos o cicatrices dolorosas de episiotomías mal afrontadas, reforzando la musculatura de cierre del introito vulvar.',
    candidateProfile: [
      'Mujeres con cicatriz de episiotomía rígida, dolorosa o deformada que genera molestias en la intimidad',
      'Abertura excesiva del introito vulvar tras partos vaginales',
      'Pérdida de la distancia anatómica entre la vulva y el ano'
    ],
    keyBenefits: [
      'Eliminación del dolor crónico durante las relaciones íntimas originado por cicatrices rígidas',
      'Restauración del soporte y tono muscular de cierre del introito vaginal',
      'Rejuvenecimiento anatómico y funcional de la región perineal externa'
    ],
    clinicalMetrics: {
      anesthesia: 'Anestesia local con sedación o peridural',
      duration: '1 a 1.5 horas',
      recovery: '5 a 7 días',
      hospitalStay: 'Ambulatorio'
    },
    preparation: [
      'Evaluación médica perineal previa y citología',
      'Tratamiento previo de cualquier infección urinaria o vulvovaginal',
      'Ayuno prequirúrgico de 8 horas'
    ],
    postCare: [
      'Lavados de la zona con agua templada y secado suave con toques tras cada evacuación',
      'Uso de ropa interior de algodón holgada',
      'Abstinencia sexual y evitar montar en bicicleta o ejercicios de impacto por 4 a 6 semanas'
    ],
    faqs: [
      {
        question: '¿En qué se diferencia de la vaginoplastia?',
        answer: 'La perineoplastia se enfoca en la reconstrucción del introito externo y el cuerpo perineal entre la vagina y el ano; la vaginoplastia interviene sobre la longitud interna del canal vaginal.'
      },
      {
        question: '¿Alivia el dolor de una episiotomía previa mal cicatrizada?',
        answer: 'Sí, libera el tejido fibrótico retráctil y reaproxima los planos musculares sanos, eliminando la dispareunia y el dolor al sentarse.'
      },
      {
        question: '¿Cuándo puedo retomar el ejercicio?',
        answer: 'Caminar a los pocos días; deportes de impacto, montar en bicicleta o actividades extenuantes a partir de la sexta semana.'
      }
    ],
    relatedSlugs: ['vaginoplastia', 'labioplastia-ninfoplastia', 'rejuvenecimiento-vaginal-laser'],
    isSensitiveIntimate: true
  }
];

// ============================================================================
// CATALOG HELPER FUNCTIONS
// ============================================================================

/**
 * Returns the complete list of all 28 surgical procedures.
 */
export function getAllProcedures(): Procedure[] {
  return procedures;
}

/**
 * Returns all procedures belonging to a specific category.
 * @param category - 'cirugia-corporal' | 'cirugia-facial' | 'cirugia-intima'
 */
export function getProceduresByCategory(category: ProcedureCategory | string): Procedure[] {
  return procedures.filter(p => p.category === category);
}

/**
 * Returns all procedures belonging to a specific body subcategory.
 * @param subcategory - 'contorno-corporal' | 'cirugia-mamaria'
 */
export function getProceduresBySubcategory(subcategory: BodySubcategory | string): Procedure[] {
  return procedures.filter(p => p.bodySubcategory === subcategory);
}

/**
 * Finds a procedure by its canonical slug or any registered alias.
 * Supports dual invocation styles:
 * - getProcedureBySlug(slug)
 * - getProcedureBySlug(category, slug)
 */
export function getProcedureBySlug(categoryOrSlug: string, maybeSlug?: string): Procedure | undefined {
  if (maybeSlug !== undefined) {
    const category = categoryOrSlug;
    const targetSlug = maybeSlug.toLowerCase().trim();
    // Primary match: category AND (slug or alias)
    const exactMatch = procedures.find(
      p => p.category === category && (p.slug === targetSlug || p.aliases?.includes(targetSlug))
    );
    if (exactMatch) return exactMatch;

    // Resilient fallback: match by slug/alias regardless of category
    return procedures.find(
      p => p.slug === targetSlug || p.aliases?.includes(targetSlug)
    );
  }

  // Single argument: slug or alias
  const targetSlug = categoryOrSlug.toLowerCase().trim();
  return procedures.find(
    p => p.slug === targetSlug || p.aliases?.includes(targetSlug)
  );
}

/**
 * Normalizes category slugs and common aliases to canonical ProcedureCategory.
 */
export function normalizeCategorySlug(category: string): ProcedureCategory | undefined {
  if (!category) return undefined;
  const clean = category.toLowerCase().trim();
  if (clean === 'cirugia-corporal' || clean === 'corporal') return 'cirugia-corporal';
  if (clean === 'cirugia-facial' || clean === 'facial') return 'cirugia-facial';
  if (clean === 'cirugia-intima' || clean === 'intima') return 'cirugia-intima';
  return undefined;
}

/**
 * Returns related procedure objects for a given procedure.
 * Filters out broken links or non-existent slugs safely, avoids self-references,
 * and supports an optional limit (defaults to 3).
 */
export function getRelatedProcedures(procedure: Procedure, limit = 3): Procedure[] {
  const resolved: Procedure[] = [];
  if (procedure.relatedSlugs && Array.isArray(procedure.relatedSlugs)) {
    for (const slugOrAlias of procedure.relatedSlugs) {
      if (slugOrAlias === procedure.slug || procedure.aliases?.includes(slugOrAlias)) {
        continue;
      }
      const found = getProcedureBySlug(slugOrAlias);
      if (found && found.id !== procedure.id && !resolved.some(r => r.id === found.id)) {
        resolved.push(found);
      }
    }
  }

  // Backfill from same category if resolved count < limit
  if (resolved.length < limit) {
    const fallback = procedures.filter(
      p => p.id !== procedure.id &&
           p.category === procedure.category &&
           !resolved.some(r => r.id === p.id)
    );
    resolved.push(...fallback.slice(0, limit - resolved.length));
  }

  return resolved.slice(0, limit);
}

/**
 * Returns procedures grouped by category for optgroup rendering (e.g., in /agendar).
 */
export function getProceduresGroupedByCategory(): Record<ProcedureCategory, Procedure[]> {
  return {
    'cirugia-corporal': getProceduresByCategory('cirugia-corporal'),
    'cirugia-facial': getProceduresByCategory('cirugia-facial'),
    'cirugia-intima': getProceduresByCategory('cirugia-intima')
  };
}
