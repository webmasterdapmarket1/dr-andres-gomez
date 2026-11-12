/**
 * tests/helpers/canonical_data.ts
 * 
 * Authoritative Canonical Specifications & Clinical Fixtures
 * Mined from ORIGINAL_REQUEST.md, PROJECT.md, and docs/arquitectura-de-contenidos.md
 */

export interface TechnicalModule {
  id: 'tensamax' | 'retraction' | 'microaire';
  name: string;
  badge: string;
  description: string;
  clinicalImpact: string;
}

export interface Procedure {
  id: string;
  slug: string;
  aliases?: string[];
  name: string;
  subtitle: string;
  category: 'cirugia-corporal' | 'cirugia-facial' | 'cirugia-intima';
  bodySubcategory?: 'contorno-corporal' | 'cirugia-mamaria';
  shortDescription: string;
  overview: string;
  candidateProfile: string[];
  keyBenefits: string[];
  technicalModules?: TechnicalModule[];
  clinicalMetrics: {
    anesthesia: string;
    duration: string;
    recovery: string;
    hospitalStay: string;
  };
  preparation: string[];
  postCare: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedSlugs: string[];
  isSensitiveIntimate?: boolean;
}

export const CANONICAL_SITE_CONFIG = {
  name: 'Dr. Andrés Gómez',
  doctorName: 'Dr. Andrés Gómez',
  specialty: 'Cirujano Plástico, Estético y Reconstructivo',
  title: 'Cirujano Plástico, Estético & Reconstructivo',
  clinic: 'Clínica Colombiana de Obesidad y Metabolismo',
  clinicUrl: 'https://clinicacolombianaobesidad.com',
  torreZentai: {
    edificio: 'Edificio Torre Zentai',
    address: 'Carrera 23 No. 124 – 87, Torre 1, Consultorio 805',
    city: 'Bogotá D.C., Colombia',
    mapsUrl: 'https://maps.app.goo.gl/m88t5MnQyuwVAXJN9',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2995!2d-74.055858!3d4.7049783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a93dbcda04b%3A0xa5e137e2e005b5da!2sCl%C3%ADnica%20Colombiana%20de%20Obesidad%20y%20Metabolismo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco',
    parkingAvailable: true,
    accessRoutes: 'Acceso por Autopista Norte y Calle 127',
  },
  phones: {
    pbx1: '+57 315 873 9927',
    pbx2: '+57 315 801 0982',
    whatsappMain: '+57 312 325 5900',
    whatsappAlt: '+57 318 651 5726',
  },
  emails: {
    general: 'contacto@drandresgomez.com',
    press: 'prensa@drandresgomez.com',
  },
  legalRoutes: {
    privacy: '/politica-de-datos',
  },
  heroThemes: {
    warm: { bg: '#F4EFE9' },
    dark: { bg: '#0E1424' },
  },
  ageGateModal: {
    backdrop: 'static',
    dismissibleOnBackdrop: false,
  },
  categories: [
    { slug: 'cirugia-corporal', name: 'Cirugía Corporal' },
    { slug: 'cirugia-facial', name: 'Cirugía Facial' },
    { slug: 'cirugia-intima', name: 'Cirugía Íntima' },
  ],
  schedules: {
    lunMieJue: '7:30 a.m. – 5:00 p.m.',
    marVie: '8:00 a.m. – 5:00 p.m.',
    sab: '8:00 a.m. – 12:00 m.',
    dom: 'Cerrado (Guardia postquirúrgica activa)',
  },
  ethicalDisclaimer:
    'Las fotografías de resultados (antes y después) publicadas en este sitio corresponden a pacientes reales, quienes otorgaron su consentimiento informado y autorización expresa para su uso con fines informativos y educativos. Los resultados pueden variar de una persona a otra y dependen de las condiciones particulares de cada paciente. La información de este sitio no reemplaza una valoración médica.',
  doctorCredentials: {
    undergraduate: 'Escuela de Medicina Juan N. Corpas',
    postgraduate: 'Sociedad Argentina de Cirugía Plástica, Estética y Reconstructiva (SACPER)',
    membership: 'Sociedad Colombiana de Cirugía Plástica (SCCP)',
    congressCount: 30,
    scientificDirector: 'Director Científico de Cirugía Plástica en CCOM',
  },
};

export const CANONICAL_PROCEDURES: Procedure[] = [
  // 15 CIRUGÍA CORPORAL (10 Contorno + 5 Mamaria)
  {
    id: 'lipoescultura-laser',
    slug: 'lipoescultura-laser',
    aliases: ['lipolisis-laser', 'lipo-laser'],
    name: 'Lipoescultura Láser / Lipólisis 3D',
    subtitle: 'Definición corporal tridimensional de alta precisión y máxima retracción cutánea',
    category: 'cirugia-corporal',
    bodySubcategory: 'contorno-corporal',
    shortDescription: 'Procedimiento quirúrgico de contorno corporal que licúa tejido adiposo con fibra láser.',
    overview: 'La Lipoescultura Láser de alta precisión utiliza calor fototérmico controlado para disolver los adipocitos y generar retracción de la piel.',
    candidateProfile: ['Pacientes con depósitos grasos localizados resistentes', 'Buena elasticidad cutánea general'],
    keyBenefits: ['Menor sangrado y menor dolor postoperatorio', 'Retracción dérmica superior con efecto tensor', 'Recuperación acelerada frente a liposucción convencional'],
    technicalModules: [
      { id: 'tensamax', name: 'Tensamax', badge: 'Radiofrecuencia Monopolar', description: 'Radiofrecuencia monopolar profunda para tensado tisular.', clinicalImpact: 'Estimula colágeno dérmico profundo.' },
      { id: 'retraction', name: 'Retraction', badge: 'Retracción Tisular Activa', description: 'Sistema de micro-coagulación subdérmica que reduce flacidez.', clinicalImpact: 'Retracción de hasta un 60% de flacidez.' },
      { id: 'microaire', name: 'Microaire', badge: 'Power-Assisted Liposuction', description: 'Cánula oscilatoria que fragmenta el tejido adiposo sin trauma.', clinicalImpact: 'Disminuye edema y tiempo quirúrgico.' }
    ],
    clinicalMetrics: { anesthesia: 'Anestesia general o peridural', duration: '2 a 3 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio o 1 noche' },
    preparation: ['Ayuno de 8 horas', 'Exámenes prequirúrgicos completos y valoración preanestésica'],
    postCare: ['Uso de faja de compresión grado médico 24/7', 'Sesiones obligatorias de drenaje linfático'],
    faqs: [
      { question: '¿Cuánto tiempo dura el dolor postoperatorio?', answer: 'Las molestias son moderadas y similares al dolor muscular tras ejercicio intenso durante 48 a 72 horas.' },
      { question: '¿Cuándo puedo regresar a mis actividades laborales?', answer: 'La mayoría de pacientes retoman labores de oficina entre 5 y 7 días después de la cirugía.' },
      { question: '¿La grasa extraída vuelve a aparecer?', answer: 'Los adipocitos destruidos no se regeneran; manteniendo un peso estable el resultado es permanente.' }
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
    shortDescription: 'Tecnología de energía ultrasónica selectiva que emulsiona grasa protegiendo vasos y nervios.',
    overview: 'VASER Lipo utiliza ondas de ultrasonido de resonancia para emulsificar la grasa selectivamente preservando estructuras neurovasculares.',
    candidateProfile: ['Hombres y mujeres con peso cercano al ideal', 'Deseo de definición de surcos anatómicos'],
    keyBenefits: ['Preservación neurovascular y mínima pérdida hemática', 'Emulsificación selectiva del tejido graso', 'Grasa viable de alta calidad para lipotransferencia glútea'],
    technicalModules: [
      { id: 'tensamax', name: 'Tensamax', badge: 'Radiofrecuencia Monopolar', description: 'Radiofrecuencia monopolar profunda para tensado tisular.', clinicalImpact: 'Estimula colágeno dérmico profundo.' },
      { id: 'retraction', name: 'Retraction', badge: 'Retracción Tisular Activa', description: 'Sistema de micro-coagulación subdérmica que reduce flacidez.', clinicalImpact: 'Retracción de hasta un 60% de flacidez.' },
      { id: 'microaire', name: 'Microaire', badge: 'Power-Assisted Liposuction', description: 'Cánula oscilatoria que fragmenta el tejido adiposo sin trauma.', clinicalImpact: 'Disminuye edema y tiempo quirúrgico.' }
    ],
    clinicalMetrics: { anesthesia: 'Anestesia general balanceada', duration: '3 a 4 horas', recovery: '7 a 10 días', hospitalStay: '1 noche de observación' },
    preparation: ['Suspender aspirina y suplementos 15 días antes', 'Hidratación oral óptima'],
    postCare: ['Faja posquirúrgica y tablas de soporte abdominal', 'Drenajes linfáticos postoperatorios con ultrasonido terapéutico'],
    faqs: [
      { question: '¿Cuál es la diferencia entre Vaser y Láser?', answer: 'El Vaser emplea energía ultrasónica selectiva para emulsificar grasa, ideal para definición muscular.' },
      { question: '¿La grasa Vaser se puede transferir a los glúteos?', answer: 'Sí, la grasa emulsionada mediante Vaser a baja potencia conserva alta viabilidad celular.' },
      { question: '¿Se requiere usar drenajes externos?', answer: 'Generalmente se emplean drenes cerrados durante 3 a 5 días para evitar seromas y acelerar la desinflamación.' }
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
    shortDescription: 'Cirugía mayor reconstructiva que tensa los músculos rectos del abdomen y elimina el faldón cutáneo.',
    overview: 'La abdominoplastia reposiciona la musculatura abdominal mediante plicatura de rectos y remueve el exceso cutáneo.',
    candidateProfile: ['Mujeres posparto con diástasis de rectos', 'Pacientes con flacidez cutánea tras pérdida masiva de peso'],
    keyBenefits: ['Cierre definitivo de la diástasis abdominal', 'Vientre plano y cintura estrechada', 'Cicatriz baja oculta por la ropa interior'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural o general', duration: '3 a 4 horas', recovery: '15 a 21 días', hospitalStay: '1 noche hospitalaria' },
    preparation: ['Índice de masa corporal menor a 30', 'Cesación de tabaco al menos 4 semanas antes'],
    postCare: ['Caminar con postura semiflectada los primeros 7 días', 'Uso riguroso de faja postquirúrgica y deambulaciones asistidas'],
    faqs: [
      { question: '¿Dónde queda ubicada la cicatriz?', answer: 'La cicatriz se coloca en la zona suprapúbica baja, diseñada para quedar oculta bajo la ropa interior o bikini.' },
      { question: '¿Puedo tener hijos después de una abdominoplastia?', answer: 'Sí es posible, aunque se recomienda realizar la cirugía cuando la maternidad esté completa para preservar el resultado.' },
      { question: '¿Cuánto tiempo debo estar de reposo laboral?', answer: 'Se recomiendan entre 15 y 21 días de incapacidad laboral según las exigencias del trabajo.' }
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
    overview: 'Ideal para pacientes con leve flacidez infraumbilical sin exceso cutáneo superior sustancial.',
    candidateProfile: ['Pacientes delgadas con abultamiento solo en bajo vientre', 'Sin diástasis muscular supraumbilical'],
    keyBenefits: ['Cicatriz corta similar a una cesárea', 'No altera ni transpone el ombligo natural', 'Recuperación más corta'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural o local con sedación', duration: '1.5 a 2 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Exámenes sanguíneos prequirúrgicos', 'Ayuno médico estricto'],
    postCare: ['Reposo relativo de 7 días', 'Faja de contorno moderado'],
    faqs: [
      { question: '¿Se toca el ombligo en una mini-abdominoplastia?', answer: 'No, el ombligo permanece en su posición natural sin ninguna cicatriz periumbilical.' },
      { question: '¿Es más rápida la recuperación?', answer: 'Sí, al no requerir plicatura supraumbilical extensa, la reintegración laboral suele tomar solo una semana.' },
      { question: '¿Se puede combinar con lipoescultura?', answer: 'Con frecuencia se combina con lipólisis de flancos para un resultado de contorno armónico.' }
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
    shortDescription: 'Procedimiento de alta definición que resalta los paquetes musculares del abdomen.',
    overview: 'Utiliza tecnología ultrasónica y láser para esculpir las líneas alba, semilunares y las inscripciones tendinosas.',
    candidateProfile: ['Pacientes deportistas con bajo porcentaje de grasa corporal', 'Buena tonificación muscular previa'],
    keyBenefits: ['Apariencia atlética y firme', 'Definición de six-pack o líneas de esbeltez', 'Resultados de alta precisión'],
    clinicalMetrics: { anesthesia: 'Anestesia general balanceada', duration: '2.5 a 3.5 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio o 1 noche' },
    preparation: ['Dieta normoproteica', 'Evaluación ecográfica de pared abdominal'],
    postCare: ['Uso de espumas anatómicas en los surcos esculpidos', 'Drenajes postquirúrgicos especializados'],
    faqs: [
      { question: '¿Cualquiera puede hacerse marcación HD?', answer: 'Se requiere un porcentaje de grasa moderado a bajo y piel con adecuada elasticidad.' },
      { question: '¿El resultado se ve artificial?', answer: 'El Dr. Gómez prioriza una anatomía natural que respeta la musculatura biológica de cada persona.' },
      { question: '¿Qué pasa si subo de peso después?', answer: 'Se recomienda mantener hábitos de ejercicio y alimentación para preservar los surcos esculpidos.' }
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
    overview: 'La transferencia glútea o Brazilian Butt Lift esculpe cintura y transfiere grasa purificada exclusivamente al plano subcutáneo.',
    candidateProfile: ['Pacientes que desean aumentar volumen glúteo sin prótesis', 'Zonas donantes de grasa adecuadas'],
    keyBenefits: ['Resultado 100% natural al tacto y a la vista', 'Remodelación simultánea de cintura y caderas', 'Sin riesgo de rechazo'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural o general', duration: '3 a 4 horas', recovery: '10 a 14 días', hospitalStay: '1 noche de observación' },
    preparation: ['No consumir fármacos anticoagulantes', 'Exámenes de perfil lipídico y coagulación'],
    postCare: ['Uso de almohada BBL para no sentarse directamente sobre los glúteos durante 2 a 3 semanas', 'Faja completa'],
    faqs: [
      { question: '¿Cuánta grasa sobrevive?', answer: 'Aproximadamente entre el 60% y 75% de la grasa transferida se vasculariza de forma permanente.' },
      { question: '¿Es seguro el BBL con el Dr. Andrés Gómez?', answer: 'Absolutamente; se aplica la técnica de inyección estrictamente en el plano subcutáneo, respetando las guías mundiales de bioseguridad.' },
      { question: '¿Cuándo puedo sentarme con normalidad?', answer: 'Se autoriza el apoyo pleno a partir de la tercera semana utilizando cojines especiales de descarga.' }
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
    overview: 'Brinda proyección estable y duradera a través de una incisión interglútea prácticamente imperceptible.',
    candidateProfile: ['Pacientes con escasa grasa corporal para lipotransferencia', 'Aplanamiento glúteo constitucional'],
    keyBenefits: ['Proyección definida garantizada', 'Prótesis de alta cohesividad resistentes a la presión', 'Cicatriz oculta en el pliegue interglúteo'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural con sedación o general', duration: '2 a 3 horas', recovery: '15 a 21 días', hospitalStay: '1 noche hospitalaria' },
    preparation: ['Evaluación antropométrica y selección del tamaño protésico', 'Limpieza antiséptica especial'],
    postCare: ['Dormir boca abajo las dos primeras semanas', 'Evitar inyecciones intramusculares en la zona glútea de por vida'],
    faqs: [
      { question: '¿Dónde se coloca el implante glúteo?', answer: 'El Dr. Gómez coloca el implante en el plano intramuscular (dentro del glúteo mayor) para una cobertura natural y protección.' },
      { question: '¿Se sienten los implantes al sentarse?', answer: 'Al sentarse el peso recae sobre el isquion y no directamente sobre el implante intramuscular adaptado.' },
      { question: '¿Cada cuánto deben cambiarse?', answer: 'Los implantes modernos de gel de silicona cohesivo no tienen fecha de vencimiento rígida y se controlan anualmente con ecografía.' }
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
    overview: 'Corrige la fricción molesta entre las piernas y restablece un contorno firme en las extremidades inferiores.',
    candidateProfile: ['Pacientes posbariátricos con piel redundante en entrepierna', 'Molestias por rozamiento al caminar'],
    keyBenefits: ['Eliminación de la irritación cutánea por fricción', 'Muslos tonificados y estilizados', 'Cicatriz ubicada en el pliegue inguinal'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural o general', duration: '2.5 a 3.5 horas', recovery: '14 a 20 días', hospitalStay: '1 noche de observación' },
    preparation: ['Higiene estricta con jabón clorhexidina', 'Pruebas de circulación venosa'],
    postCare: ['Reposo con piernas elevadas', 'Evitar abrir ampliamente las piernas durante 3 semanas'],
    faqs: [
      { question: '¿Cómo es la cicatriz del lifting de muslos?', answer: 'Dependiendo del grado de flacidez, puede ser puramente horizontal en el pliegue de la ingle o requerir una prolongación vertical corta.' },
      { question: '¿Se puede caminar inmediatamente?', answer: 'Se camina despacio desde el primer día para estimular la circulación venosa y prevenir trombos.' },
      { question: '¿Alivia las rozaduras?', answer: 'Sí, es uno de los mayores beneficios funcionales reportados por las pacientes.' }
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
    overview: 'Devuelve firmeza a los brazos mediante una incisión discreta en la cara medial interna del brazo.',
    candidateProfile: ['Flacidez marcada en brazos tras pérdida de peso o envejecimiento tisular', 'Incomodidad funcional o estética al vestir prendas sin mangas'],
    keyBenefits: ['Brazos delgados y firmes', 'Comodidad para usar prendas sin mangas', 'Mejora estética y funcional'],
    clinicalMetrics: { anesthesia: 'Anestesia general o local más sedación profunda', duration: '2 a 3 horas', recovery: '10 a 14 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Evaluación de la elasticidad de la piel', 'Suspender antiinflamatorios'],
    postCare: ['Uso de mangas compresivas postquirúrgicas', 'Evitar levantar peso o elevar los codos por encima de los hombros por 15 días'],
    faqs: [
      { question: '¿Dónde queda la cicatriz?', answer: 'Se ubica en la cara interna del brazo, orientada hacia el tórax para quedar oculta en reposo.' },
      { question: '¿Se combina con liposucción?', answer: 'Frecuentemente se asocia con lipólisis previa para vaciar el exceso graso antes de tensar la piel.' },
      { question: '¿Cuándo puedo volver al gimnasio?', answer: 'A partir de la cuarta semana para tren inferior y sexta semana para ejercicios de brazo con pesas.' }
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
    overview: 'Mejora la textura, coloración y dirección de cicatrices originadas por cirugías previas, traumatismos o quemaduras.',
    candidateProfile: ['Pacientes con cicatrices hipertróficas, ensanchadas, deprimidas o hiperpigmentadas', 'Presencia de retracciones o adherencias cicatrizales que limitan la movilidad'],
    keyBenefits: ['Afinamiento y camuflaje visual de la cicatriz', 'Liberación de contracturas dolorosas', 'Técnicas avanzadas de sutura plástica intradérmica'],
    clinicalMetrics: { anesthesia: 'Anestesia local con o sin sedación', duration: '1 a 2 horas', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Evitar exposición solar previa', 'Tratamiento previo de cualquier infección cutánea local'],
    postCare: ['Protección solar estricta SPF 50+', 'Láminas de gel de silicona y masajes cicatrizantes'],
    faqs: [
      { question: '¿Una cicatriz se puede borrar por completo?', answer: 'Ninguna cirugía borra una cicatriz al 100%, pero sí logra transformarla en una línea fina y casi imperceptible.' },
      { question: '¿Qué se hace con las cicatrices queloides?', answer: 'Se combinan plastias quirúrgicas con infiltraciones de corticoesteroides y terapia láser coadyuvante.' },
      { question: '¿Cuándo es el momento adecuado para corregir una cicatriz?', answer: 'Generalmente después de que la cicatriz haya madurado entre 6 y 12 meses.' }
    ],
    relatedSlugs: ['abdominoplastia', 'lipoescultura-laser', 'mini-abdominoplastia'],
    isSensitiveIntimate: false
  },
  {
    id: 'aumento-de-senos',
    slug: 'aumento-de-senos',
    aliases: ['mamoplastia-de-aumento', 'protesis-mamarias'],
    name: 'Aumento de Senos / Mamoplastia',
    subtitle: 'Proyección y armonización del busto mediante implantes de última generación',
    category: 'cirugia-corporal',
    bodySubcategory: 'cirugia-mamaria',
    shortDescription: 'Colocación de prótesis mamarias de gel de silicona cohesivo para recuperar o incrementar el volumen del escote.',
    overview: 'La mamoplastia de aumento busca un escote natural mediante implantes microtexturizados o lisos con inserción submuscular o subfascial.',
    candidateProfile: ['Mujeres con hipoplasia mamaria o pérdida de volumen poslactancia', 'Asimetría mamaria evidente'],
    keyBenefits: ['Aumento armónico adaptado a la contextura torácica', 'Prótesis de marcas líderes aprobadas por INVIMA y FDA', 'Técnica de recuperación rápida de 24 a 48 horas'],
    clinicalMetrics: { anesthesia: 'Anestesia general o sedación profunda más bloqueo local', duration: '1 a 1.5 horas', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Mamografía y ecografía mamaria reciente bilateral', 'Prueba de embarazo'],
    postCare: ['Uso de brasier postquirúrgico sin varillas 24/7', 'Evitar levantar los brazos por encima de los hombros los primeros 5 días'],
    faqs: [
      { question: '¿Dónde se coloca el implante: detrás o delante del músculo?', answer: 'El Dr. Gómez evalúa el grosor del tejido de cada paciente; en pacientes delgadas el plano submuscular o dual plane ofrece mayor naturalidad.' },
      { question: '¿Puedo amamantar después de ponerme implantes?', answer: 'Sí, la vía submamaria respeta íntegramente la glándula y los conductos galactóforos.' },
      { question: '¿Cada cuánto tiempo se cambian los implantes de senos?', answer: 'Los implantes modernos no requieren recambio programado a 10 años si los controles anuales con ecografía están normales.' }
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
    overview: 'Reduce el volumen mamario y reubica el complejo areola-pezón a una altura fisiológica y estéticamente armónica.',
    candidateProfile: ['Mujeres con dolor crónico de cuello, hombros y columna por hipertrofia mamaria', 'Dificultad para hacer deportes'],
    keyBenefits: ['Alivio inmediato del peso sobre la espalda y cuello', 'Mamas ligeras, firmes y proporcionadas', 'Mejora en la postura y autoestima'],
    clinicalMetrics: { anesthesia: 'Anestesia general', duration: '3 a 4 horas', recovery: '10 a 14 días', hospitalStay: 'Ambulatorio o 1 noche' },
    preparation: ['Ecografía mamaria y mamografía preoperatorias', 'No fumar durante al menos un mes previo'],
    postCare: ['Uso constante del brasier postquirúrgico de soporte firme', 'Curaciones periódicas de incisiones'],
    faqs: [
      { question: '¿Qué tipo de cicatriz deja la reducción mamaria?', answer: 'Comúnmente se emplea el patrón en ancla o T invertida, el cual permite retirar grandes excesos de tejido con un contorno redondeado.' },
      { question: '¿Se pierde sensibilidad en los pezones?', answer: 'Puede haber una alteración temporal que se normaliza gradualmente en los meses siguientes gracias a técnicas de preservación nerviosa.' },
      { question: '¿Cuánto peso se puede reducir?', answer: 'Depende de la anatomía de cada paciente, pudiendo extraerse desde 300g hasta más de 1.000g por mama.' }
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
    overview: 'Corrige la ptosis mamaria remodelando el tejido y retirando la piel sobrante, pudiendo asociarse a implantes.',
    candidateProfile: ['Mamas caídas tras embarazos o pérdida de peso', 'Pezón ubicado por debajo del surco inframamario'],
    keyBenefits: ['Elevación del complejo areola-pezón a su posición ideal', 'Relleno del polo superior del escote', 'Adaptable con o sin prótesis según preferencia'],
    clinicalMetrics: { anesthesia: 'Anestesia general', duration: '2.5 a 3.5 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Estudios de imagenología mamaria', 'Evaluación del grado de ptosis mamaria'],
    postCare: ['Brasier médico sin aros metálicos', 'Evitar esfuerzos físicos intensos durante un mes'],
    faqs: [
      { question: '¿Es obligatorio colocar implantes en una mastopexia?', answer: 'No es obligatorio; si la paciente tiene suficiente tejido propio se puede realizar un autopréstamo con levantamiento.' },
      { question: '¿Cómo evolucionan las cicatrices?', answer: 'Con el protocolo postquirúrgico de láser y geles de silicona, maduran progresivamente hacia líneas claras y suaves.' },
      { question: '¿Cuánto tiempo dura el resultado?', answer: 'Es un resultado duradero siempre que no ocurran fluctuaciones bruscas de peso o nuevos embarazos.' }
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
    overview: 'Para pacientes que desean retirar sus prótesis por decisión personal, contractura capsular o sospecha de ASIA/BII.',
    candidateProfile: ['Mujeres con deseo de retirar prótesis de forma definitiva', 'Contractura capsular grado III o IV'],
    keyBenefits: ['Capsulectomía en bloque que retira la cápsula íntegra', 'Reconstrucción y remodelación del tejido mamario propio', 'Alivio de síntomas y mayor ligereza corporal'],
    clinicalMetrics: { anesthesia: 'Anestesia general', duration: '2.5 a 3.5 horas', recovery: '7 a 12 días', hospitalStay: 'Ambulatorio o 1 noche' },
    preparation: ['Resonancia magnética mamaria o ecografía de alta resolución', 'Biometría completa'],
    postCare: ['Uso de drenajes temporales de aspiración suave', 'Brasier de compresión y reposo'],
    faqs: [
      { question: '¿Qué significa capsulectomía en bloque?', answer: 'Implica retirar el implante y la cápsula cicatrizal como una sola pieza cerrada, sin exponer los tejidos a posibles fugas.' },
      { question: '¿Cómo quedan los senos después de la explantación?', answer: 'El Dr. Gómez realiza una mastopexia reconstructiva o lipotransferencia autóloga para remodelar el busto armónicamente.' },
      { question: '¿Se envía la cápsula a patología?', answer: 'Sí, todas las cápsulas resecadas se envían a estudio histopatológico de rutina para seguridad de la paciente.' }
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
    overview: 'Combina la resección quirúrgica directa de la glándula retroareolar con liposucción láser para perfilar el pectoral.',
    candidateProfile: ['Hombres con aumento glandular o adiposo en el pecho que les genera incomodidad', 'Varones con peso controlado que presentan hipertrofia pectoral benigna'],
    keyBenefits: ['Tórax plano y atlético', 'Cicatriz semicircular periareolar casi imperceptible', 'Recuperación de la confianza personal'],
    clinicalMetrics: { anesthesia: 'Anestesia local con sedación o general', duration: '1.5 a 2.5 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Perfil hormonal y ecografía mamaria masculina', 'Suspender suplementos anabólicos'],
    postCare: ['Uso de chaleco compresivo torácico durante 3 a 4 semanas', 'Evitar ejercicios de press de pecho por 30 días'],
    faqs: [
      { question: '¿La glándula resecada puede volver a crecer?', answer: 'Una vez extraída la glándula por completo, es excepcional que vuelva a desarrollarse si no hay consumo de fármacos inductores.' },
      { question: '¿Quedan cicatrices notorias en el pecho?', answer: 'La incisión se realiza en el borde inferior de la areola donde la transición de color la disimula extraordinariamente.' },
      { question: '¿Cuándo puedo volver a hacer deporte?', answer: 'Caminar y ejercicio aeróbico suave a los 10 días; levantamiento de pesas en tren superior a las 4 semanas.' }
    ],
    relatedSlugs: ['lipoescultura-laser', 'lipo-vaser', 'marcacion-abdominal-hd'],
    isSensitiveIntimate: false
  },

  // 7 CIRUGÍA FACIAL
  {
    id: 'rinoplastia-ultrasonica',
    slug: 'rinoplastia-ultrasonica',
    aliases: ['rinoplastia', 'cirugia-de-nariz'],
    name: 'Rinoplastia Ultrasónica',
    subtitle: 'Precisión milimétrica ósea con piezoeléctrico para moldear el dorso y la punta nasal sin traumatismos',
    category: 'cirugia-facial',
    shortDescription: 'Cirugía estética y funcional de la nariz mediante bisturí piezoeléctrico ultrasónico.',
    overview: 'Modela los huesos nasales selectivamente sin fracturas a ciegas, preservando cartílagos, vasos y mucosa nasal.',
    candidateProfile: ['Pacientes con giba dorsal ósea o punta nasal bulbosa/caída', 'Dificultad respiratoria por tabique desviado'],
    keyBenefits: ['Cero fracturas óseas traumáticas tradicionales', 'Menor inflamación y hematomas prácticamente ausentes', 'Resultados de alta precisión y estabilidad a largo plazo'],
    clinicalMetrics: { anesthesia: 'Anestesia general con tubo endotraqueal protegido', duration: '2.5 a 3.5 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Tomografía computarizada de senos paranasales si hay componente funcional', 'No consumir aspirina'],
    postCare: ['Uso de férula termoplástica nasal durante 7 días', 'Lavados nasales frecuentes con solución salina estéril'],
    faqs: [
      { question: '¿Es dolorosa la rinoplastia ultrasónica?', answer: 'Es sorprendentemente poco dolorosa; los pacientes describen sensación de congestión nasal más que dolor agudo.' },
      { question: '¿Se usan tapones nasales molestos?', answer: 'El Dr. Gómez utiliza férulas internas de silicona con vía aérea que permiten respirar inmediatamente sin taponamiento asfixiante.' },
      { question: '¿Cuándo se aprecia el resultado final de la nariz?', answer: 'A las 3 semanas se aprecia el 80% del cambio; el refinamiento completo de la punta madura entre los 6 y 12 meses.' }
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
    shortDescription: 'Cirugía estética de párpados superiores e inferiores que elimina el aspecto cansado.',
    overview: 'Corrige los párpados caídos y las bolsas grasas mediante incisiones milimétricas ocultas en los pliegues naturales.',
    candidateProfile: ['Mirada pesada o cansada por piel redundante', 'Bolsas prominentes en párpados inferiores'],
    keyBenefits: ['Mirada despierta, fresca y descansada', 'Ampliación del campo visual superior', 'Cicatrices prácticamente invisibles'],
    clinicalMetrics: { anesthesia: 'Anestesia local asistida con sedación consciente', duration: '1 a 2 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Valoración oftalmológica básica', 'Suspender anticoagulantes'],
    postCare: ['Compresas frías sobre los ojos los primeros 2 días', 'Gotas lubricantes oftálmicas y uso de gafas oscuras'],
    faqs: [
      { question: '¿Cambia la forma de mis ojos?', answer: 'No; el objetivo es rejuvenecer y despejar la mirada manteniendo la expresión natural única de la paciente.' },
      { question: '¿La blefaroplastia inferior deja cicatriz visible?', answer: 'En muchos casos se realiza por vía transconjuntival (por dentro del párpado), sin ninguna cicatriz externa en la piel.' },
      { question: '¿Cuándo puedo usar maquillaje en los ojos?', answer: 'A partir de los 10 días tras el retiro de los puntos de sutura.' }
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
    overview: 'Procedimiento intraoral rápido que estiliza rostros redondeados y resalta la estructura ósea facial.',
    candidateProfile: ['Rostros redondeados o con exceso de volumen en mejillas', 'Deseo de mayor definición de pómulos'],
    keyBenefits: ['Procedimiento ambulatorio rápido (30-40 min)', 'Cero cicatrices visibles en el rostro (incisión intraoral)', 'Afinamiento permanente'],
    clinicalMetrics: { anesthesia: 'Anestesia local simple o con sedación suave', duration: '30 a 45 minutos', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Higiene oral minuciosa previa', 'Enjuague bucal antiséptico'],
    postCare: ['Dieta blanda y fría los primeros 2 días', 'Aplicación de hielo local en mejillas y reposo de actividad física'],
    faqs: [
      { question: '¿Se notan cicatrices por fuera?', answer: 'Ninguna; las incisiones de 5 mm se realizan en la mucosa interna de la boca y se cierran con puntos reabsorbibles.' },
      { question: '¿Puede envejecer mi rostro en el futuro?', answer: 'El Dr. Gómez realiza una extracción conservadora y selectiva solo en candidatos ideales para evitar adelgazamiento excesivo tardío.' },
      { question: '¿Cuándo se notan los resultados?', answer: 'La inflamación cede en 2 semanas y el perfilamiento definitivo se consolida a partir del segundo mes.' }
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
    overview: 'No estira la piel superficial sino que recoloca el sistema músculo-aponeurótico superficial (SMAS) restaurando volumen juvenil.',
    candidateProfile: ['Pérdida de definición en mandíbula y descolgamiento de mejillas (jowls)', 'Surcos nasogenianos marcados'],
    keyBenefits: ['Rejuvenecimiento de 10 a 15 años sin aspecto artificial "operado"', 'Reposición de pómulos y óvalo facial', 'Cicatrices camufladas en el contorno auricular'],
    clinicalMetrics: { anesthesia: 'Anestesia general o local profunda con sedación', duration: '3.5 a 5 horas', recovery: '14 a 21 días', hospitalStay: '1 noche de observación' },
    preparation: ['Estudios prequirúrgicos completos y cardiovasculares', 'Cesación estricta de tabaco'],
    postCare: ['Vendaje facial suave las primeras 48 horas', 'Drenaje linfático facial suave y protección solar estricta'],
    faqs: [
      { question: '¿Quedaré con la cara estirada o con expresión congelada?', answer: 'No; el lifting moderno del plano profundo reposiciona la musculatura sin traccionar excesivamente la piel.' },
      { question: '¿Cuánto dura el efecto de un lifting facial?', answer: 'Los efectos duran en promedio entre 10 y 12 años, manteniendo siempre una apariencia más joven que la edad biológica.' },
      { question: '¿Dónde se esconden las cicatrices?', answer: 'Se ocultan meticulosamente en la línea del cabello y en los pliegues pre y retroauriculares.' }
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
    overview: 'Trata el exceso de grasa submentoniana y la flacidez del cuello mediante plicatura del platisma y lipólisis de alta precisión.',
    candidateProfile: ['Pacientes con papada pronunciada o bandas verticales en el cuello', 'Pérdida del ángulo mandibular'],
    keyBenefits: ['Perfil mandibular nítido y estilizado', 'Eliminación definitiva de la papada', 'Aspecto descansado y rejuvenecido'],
    clinicalMetrics: { anesthesia: 'Anestesia local con sedación o general', duration: '2 a 3 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Ecografía de tejidos blandos de cuello si hay hipertrofia submandibular', 'Suspender aspirinas'],
    postCare: ['Uso de mentonera elástica compresiva durante 1 a 2 semanas', 'Dormir con cuello alineado'],
    faqs: [
      { question: '¿Se puede hacer solo liposucción de papada?', answer: 'Si el paciente es joven y tiene buena elasticidad dérmica, una lipólisis láser de papada es suficiente sin necesidad de incisiones de cervicoplastia.' },
      { question: '¿Dónde se realiza la incisión?', answer: 'Se efectúa una pequeña incisión oculta debajo del mentón y, de ser necesario, detrás de las orejas.' },
      { question: '¿Es compatible con mentoplastia?', answer: 'Frecuentemente se asocian para maximizar la proyección armónica del perfil.' }
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
    overview: 'Proyecta el tercio inferior del rostro mejorando la relación estética entre nariz, labios y cuello.',
    candidateProfile: ['Microgenia o mentón retraído en vista de perfil', 'Deseo de mayor definición de la mandíbula'],
    keyBenefits: ['Mejora radical de la armonía del perfil facial', 'Procedimiento rápido de gran impacto estético', 'Incisión intraoral sin cicatrices externas'],
    clinicalMetrics: { anesthesia: 'Anestesia local asistida con sedación', duration: '1 a 1.5 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Fotografía médica de perfilometría computarizada', 'Enjuagues bucales antisépticos'],
    postCare: ['Dieta blanda los primeros 3 días', 'Micropore de fijación sobre el mentón durante una semana'],
    faqs: [
      { question: '¿Se nota el implante al hablar o reír?', answer: 'No; los implantes anatómicos de silicona o poroso se fijan firmemente al periostio y no se desplazan.' },
      { question: '¿Se puede combinar con rinoplastia?', answer: 'Sí, la perfiloplastia que combina rinoplastia y mentoplastia es una de las cirugías más solicitadas por su transformación armónica global.' },
      { question: '¿La cirugía deja cicatriz en la piel?', answer: 'Generalmente se realiza por el surco gingivolabial inferior dentro de la boca, sin cicatriz exterior visible.' }
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
    overview: 'Remodela el cartílago antehélix mediante incisiones posteriores totalmente ocultas detrás de la oreja.',
    candidateProfile: ['Adultos y niños mayores de 6-7 años con orejas despegadas ("en asa")', 'Asimetría auricular notoria'],
    keyBenefits: ['Corrección definitiva de la proyección excesiva', 'Cicatriz invisible en el pliegue posterior de la oreja', 'Procedimiento seguro y de rápida recuperación'],
    clinicalMetrics: { anesthesia: 'Anestesia local más sedación (o general en niños)', duration: '1 a 2 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Lavado minucioso de orejas y cuero cabelludo', 'Pruebas de coagulación'],
    postCare: ['Uso de balaca o banda elástica protectora para dormir durante 3 semanas', 'No realizar deportes de contacto por un mes'],
    faqs: [
      { question: '¿Las orejas pueden volver a despegarse?', answer: 'Con las técnicas de debilitamiento del cartílago y suturas de sustentación interna utilizadas por el Dr. Gómez, la recidiva es prácticamente nula.' },
      { question: '¿Afecta la audición?', answer: 'En lo absoluto; es una cirugía puramente del pabellón externo que no interviene en el conducto ni en el tímpano.' },
      { question: '¿Cuándo se retiran los vendajes?', answer: 'El vendaje inicial se retira a las 48 horas y se reemplaza por una banda elástica deportiva suave.' }
    ],
    relatedSlugs: ['rinoplastia-ultrasonica', 'blefaroplastia', 'lifting-facial'],
    isSensitiveIntimate: false
  },

  // 6 CIRUGÍA ÍNTIMA (Todas con isSensitiveIntimate: true)
  {
    id: 'labioplastia-ninfoplastia',
    slug: 'labioplastia-ninfoplastia',
    aliases: ['labioplastia', 'ninfoplastia'],
    name: 'Labioplastia / Ninfoplastia',
    subtitle: 'Reducción y simetrización funcional y estética de los labios menores',
    category: 'cirugia-intima',
    shortDescription: 'Procedimiento reconstructivo y estético que reduce la hipertrofia de los labios menores vulvares.',
    overview: 'Elimina molestias causadas por fricción con ropa ajustada o deportes, restaurando confort y proporción anatómica.',
    candidateProfile: ['Mujeres con labios menores protruyentes o asimétricos', 'Molestias al caminar, andar en bicicleta o con ropa íntima'],
    keyBenefits: ['Alivio de molestias físicas y de irritación', 'Mejora estética y anatómica discreta', 'Técnica de resección láser o cuña con puntos reabsorbibles'],
    clinicalMetrics: { anesthesia: 'Anestesia local tumescente con sedación consciente', duration: '1 a 1.5 horas', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Higiene íntima con jabón pH neutro', 'Programar fuera de los días de menstruación'],
    postCare: ['Reposo relativo de 72 horas con hielo local intermitente', 'Abstenerse de relaciones sexuales y baños de inmersión durante 4 a 6 semanas'],
    faqs: [
      { question: '¿Se pierde sensibilidad en la zona íntima?', answer: 'No; el procedimiento se limita exclusivamente a los labios menores respetando la inervación del clítoris y las zonas erógenas.' },
      { question: '¿Cuándo puedo retomar mis labores?', answer: 'A los 3 a 5 días para trabajo de oficina; se sugiere ropa holgada durante la primera semana.' },
      { question: '¿Los puntos se tienen que retirar?', answer: 'No, se emplean suturas ultrafinas reabsorbibles que caen por sí solas entre la segunda y tercera semana.' }
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
    overview: 'Corrige la laxitud vaginal secundaria a partos múltiples o al paso del tiempo mediante miorrafia de los músculos elevadores del ano.',
    candidateProfile: ['Sensación de amplitud o pérdida de tono en el canal vaginal', 'Inconformidad funcional durante la intimidad'],
    keyBenefits: ['Fortalecimiento integral del piso pélvico', 'Aumento de la fricción y satisfacción íntima de la pareja', 'Técnica reconstructiva precisa'],
    clinicalMetrics: { anesthesia: 'Anestesia peridural o general balanceada', duration: '1.5 a 2 horas', recovery: '7 a 10 días', hospitalStay: 'Ambulatorio o 1 noche' },
    preparation: ['Valoración ginecológica y citología reciente', 'Limpieza colónica previa'],
    postCare: ['Reposo físico y evitar esfuerzos abdominales', 'Abstinencia sexual estricta por 6 semanas para permitir cicatrización muscular'],
    faqs: [
      { question: '¿Se puede tener un parto natural después de una vaginoplastia?', answer: 'Se recomienda para mujeres que no planean futuros partos vaginales, pues un nuevo parto desharía la reconstrucción muscular.' },
      { question: '¿Es doloroso el postoperatorio?', answer: 'Produce una molestia moderada controlable con analgésicos convencionales durante los primeros 4 días.' },
      { question: '¿Ayuda con la incontinencia urinaria leve?', answer: 'Al reforzar el suelo pélvico posterior y el periné, frecuentemente mejora el soporte uretral.' }
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
    overview: 'Aplica pulsos de calor controlado que reactivan la síntesis de colágeno y elastina, mejorando la atrofia vaginal.',
    candidateProfile: ['Mujeres con sequedad vaginal o atrofia menopáusica', 'Laxitud vaginal leve a moderada'],
    keyBenefits: ['Procedimiento en consultorio sin dolor ni quirófano', 'Mejora la lubricación y salud de la mucosa vaginal', 'Reincorporación inmediata a la vida diaria'],
    clinicalMetrics: { anesthesia: 'Anestesia tópica en gel', duration: '20 a 30 minutos', recovery: 'Inmediata (1 día)', hospitalStay: 'Ambulatorio en consultorio' },
    preparation: ['Citología cervicovaginal al día', 'No presentar infecciones vaginales activas'],
    postCare: ['Evitar relaciones sexuales durante 48 a 72 horas tras cada sesión', 'Uso de geles hidratantes recomendados'],
    faqs: [
      { question: '¿Cuántas sesiones se necesitan?', answer: 'Por lo general se realiza un protocolo de 2 a 3 sesiones espaciadas cada 4 semanas.' },
      { question: '¿Duele la sesión de láser vaginal?', answer: 'No es doloroso; se percibe una ligera vibración y sensación tibia en el interior del canal.' },
      { question: '¿Cuánto duran los beneficios?', answer: 'Los efectos duran entre 12 y 18 meses, recomendándose una sesión anual de mantenimiento.' }
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
    overview: 'Corrige el adelgazamiento y arrugamiento de los labios mayores protegiendo las estructuras internas y mejorando la estética.',
    candidateProfile: ['Mujeres con hipotrofia o flacidez en labios mayores por pérdida de peso o envejecimiento', 'Sensación de desprotección o roce en el introito vulvar'],
    keyBenefits: ['Aspecto turgente y rejuvenecido', 'Mejora la protección natural del introito', 'Uso de tejido autólogo biocompatible'],
    clinicalMetrics: { anesthesia: 'Anestesia local con sedación suave', duration: '1 a 1.5 horas', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Localización de zona donante (abdomen o cara interna de muslo)', 'Ayuno estándar'],
    postCare: ['Evitar presión directa o ropa ajustada por 10 días', 'Hielo suave intermitente las primeras 48 horas'],
    faqs: [
      { question: '¿De dónde se extrae la grasa?', answer: 'Se obtiene una cantidad pequeña (30-50 ml) de la zona del bajo vientre o cara interna de los muslos.' },
      { question: '¿El resultado es permanente?', answer: 'La porción de grasa que prende exitosamente permanece de por vida como tejido vivo propio.' },
      { question: '¿Se puede combinar con labioplastia?', answer: 'Es una de las combinaciones más frecuentes para lograr una armonía íntima total.' }
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
    overview: 'Elimina el abultamiento del pubis que genera incomodidad con ropa ceñida o tras cesáreas y pérdidas ponderales.',
    candidateProfile: ['Pacientes con acumulación grasa prominente en el monte de Venus', 'Incomodidad con ropa ajustada o trajes de baño'],
    keyBenefits: ['Pubis plano, definido y proporcionado', 'Comodidad total con ropa deportiva o trajes de baño', 'Procedimiento mínimamente invasivo con láser'],
    clinicalMetrics: { anesthesia: 'Anestesia local tumescente o con sedación', duration: '1 a 1.5 horas', recovery: '3 a 5 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Depilación o afeitado higiénico de la zona púbica 48 horas antes', 'Pruebas de laboratorio'],
    postCare: ['Uso de faja o prenda elástica con compresión en pubis por 2 semanas', 'Drenaje postquirúrgico suave'],
    faqs: [
      { question: '¿Se puede hacer al mismo tiempo que una abdominoplastia?', answer: 'Sí, frecuentemente se realiza dentro de la misma cirugía de lipectomía para un contorno abdominal y púbico continuo.' },
      { question: '¿Quedan cicatrices notorias?', answer: 'Si solo es liposucción láser, las microincisiones son de 3 mm; si requiere resección de piel, la cicatriz queda oculta en la línea del bikini.' },
      { question: '¿Afecta la sensibilidad íntima?', answer: 'No compromete ninguna estructura nerviosa profunda ni la sensibilidad del clítoris.' }
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
    overview: 'Restaura la anatomía entre la vagina y el ano reforzando los músculos perineales y eliminando cicatrices retráctiles.',
    candidateProfile: ['Mujeres con cicatriz de episiotomía dolorosa o deformada', 'Abertura excesiva del introito vaginal'],
    keyBenefits: ['Eliminación del dolor en relaciones sexuales causado por cicatrices rígidas', 'Restauración del soporte perineal', 'Rejuvenecimiento anatómico del introito'],
    clinicalMetrics: { anesthesia: 'Anestesia local con sedación o peridural', duration: '1 a 1.5 horas', recovery: '5 a 7 días', hospitalStay: 'Ambulatorio' },
    preparation: ['Evaluación médica perineal previa', 'Tratamiento de infecciones urinarias o vaginales'],
    postCare: ['Lavados de la zona con agua templada y secado suave con toques', 'Abstinencia sexual durante 4 a 6 semanas'],
    faqs: [
      { question: '¿En qué se diferencia de la vaginoplastia?', answer: 'La perineoplastia se enfoca en la entrada (introito) y el periné externo, mientras que la vaginoplastia trata la longitud interna del canal.' },
      { question: '¿Alivia el dolor de una episiotomía mal cicatrizada?', answer: 'Sí, libera el tejido fibrótico retráctil eliminando el dolor durante la intimidad o al sentarse.' },
      { question: '¿Cuándo puedo retomar el ejercicio?', answer: 'Caminar a los pocos días; deportes de impacto o bicicleta después de la quinta semana.' }
    ],
    relatedSlugs: ['vaginoplastia', 'labioplastia-ninfoplastia', 'rejuvenecimiento-vaginal-laser'],
    isSensitiveIntimate: true
  }
];

export const SAMPLE_BLOG_ARTICLES = [
  {
    id: '1',
    slug: 'cuidados-postoperatorios-lipoescultura',
    title: 'Guía Integral de Cuidados Postoperatorios en Lipoescultura Láser',
    excerpt: 'Conoce los tiempos de uso de faja, la importancia de los drenajes linfáticos y cómo maximizar la retracción dérmica tras una lipólisis.',
    category: 'Recuperación',
    categorySlug: 'recuperacion',
    date: '10 de Marzo, 2026',
    author: 'Dr. Andrés Gómez',
    readTime: '6 min',
    tags: ['Lipoescultura', 'Láser', 'Recuperación', 'Fajas']
  },
  {
    id: '2',
    slug: 'tecnologia-vaser-vs-laser',
    title: 'Lipólisis Vaser vs Lipoescultura Láser: ¿Cuál es la tecnología indicada para tu cuerpo?',
    excerpt: 'Comparamos la emulsificación ultrasónica de alta definición frente a la energía fototérmica selectiva para disolver grasa y tensar piel.',
    category: 'Corporal',
    categorySlug: 'corporal',
    date: '28 de Febrero, 2026',
    author: 'Dr. Andrés Gómez',
    readTime: '8 min',
    tags: ['Vaser', 'Láser', 'Alta Definición', 'Tecnología']
  },
  {
    id: '3',
    slug: 'rinoplastia-ultrasonica-ventajas-piezoelectrico',
    title: 'Por qué la Rinoplastia Ultrasónica eliminó el trauma y los morados tradicionales',
    excerpt: 'El bisturí piezoeléctrico permite remodelar el hueso nasal con exactitud micrométrica sin romper vasos sanguíneos ni cartílagos.',
    category: 'Facial',
    categorySlug: 'facial',
    date: '15 de Febrero, 2026',
    author: 'Dr. Andrés Gómez',
    readTime: '5 min',
    tags: ['Rinoplastia', 'Ultrasónica', 'Facial', 'Recuperación']
  },
  {
    id: '4',
    slug: 'beneficios-funcionales-labioplastia',
    title: 'Labioplastia: Más allá de la estética, una solución de bienestar y confort íntimo',
    excerpt: 'Desmitificamos la ninfoplastia analizando las razones anatómicas, funcionales y deportivas por las que las pacientes eligen este procedimiento.',
    category: 'Íntima',
    categorySlug: 'intima',
    date: '2 de Febrero, 2026',
    author: 'Dr. Andrés Gómez',
    readTime: '7 min',
    tags: ['Labioplastia', 'Cirugía Íntima', 'Bienestar', 'Salud']
  }
];

export function buildWhatsAppLink(route: string, procedureName?: string): string {
  const phone = '573123255900';
  let message = 'Hola Dr. Andrés Gómez, deseo agendar una valoración médica especializada.';

  if (route.startsWith('/procedimientos') && procedureName) {
    message = `Hola Dr. Andrés Gómez, deseo agendar una valoración diagnóstica para ${procedureName}.`;
  } else if (route === '/contacto') {
    message = 'Hola Dr. Andrés Gómez, deseo información sobre la sede Torre Zentai y horarios de atención.';
  } else if (route.startsWith('/resultados')) {
    message = 'Hola Dr. Andrés Gómez, vi los resultados de antes y después y deseo solicitar una consulta de valoración.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function validateBookingPayload(data: {
  fullName?: string;
  phone?: string;
  email?: string;
  procedure?: string;
  privacyConsent?: boolean;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!data.fullName || data.fullName.trim().length < 3) {
    errors.fullName = 'El nombre debe contener al menos 3 caracteres';
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = 'Ingresa un número telefónico válido de al menos 7 dígitos';
  }

  // Hardened RFC-compliant email regex rejecting leading/trailing dots in local part and domain
  const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido (ej. nombre@ejemplo.com)';
  }

  if (!data.procedure || data.procedure.trim() === '') {
    errors.procedure = 'Debes seleccionar un procedimiento';
  }

  if (!data.privacyConsent) {
    errors.privacyConsent = 'Debes autorizar el tratamiento de tus datos para continuar';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors
  };
}

export interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export function validateContactPayload(data: ContactPayload): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'El nombre debe contener al menos 3 caracteres';
  }
  const emailRegex = /^[a-zA-Z0-9]+([._%+-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Ingresa un correo electrónico válido';
  }
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'El mensaje no puede estar vacío';
  } else if (data.message.length > 1000) {
    errors.message = 'El mensaje no puede exceder 1000 caracteres';
  }
  return { valid: Object.keys(errors).length === 0, errors };
}

export const CANONICAL_PATIENT_STORIES = [
  {
    id: 'historia-camila-r',
    name: 'Camila R.',
    procedure: 'Abdominoplastia + Lipoescultura',
    procedureSlug: 'abdominoplastia',
    category: 'cirugia-corporal',
    origin: 'Bogotá, Colombia',
    verified: true,
    testimonial: 'Recuperé la seguridad en mi cuerpo después de mis embarazos.'
  },
  {
    id: 'historia-valentina-m',
    name: 'Valentina M.',
    procedure: 'Rinoplastia Ultrasónica',
    procedureSlug: 'rinoplastia-ultrasonica',
    category: 'cirugia-facial',
    origin: 'Medellín, Colombia',
    verified: true,
    testimonial: 'Buscaba una nariz armónica y funcional sin cicatrices visibles.'
  }
];

export const CANONICAL_PRESS_ITEMS = [
  {
    medium: 'Caracol Televisión',
    title: 'Avances en cirugía plástica mínimamente invasiva con láser',
    url: 'https://noticias.caracoltv.com/salud/dr-andres-gomez-cirugia-laser',
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  {
    medium: 'El Espectador',
    title: 'Seguridad y ética médica en procedimientos estéticos',
    url: 'https://www.elespectador.com/salud/seguridad-quirurgica-torre-zentai',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
];

export const CANONICAL_RESULTS_CASES = [
  {
    id: 'caso-abdominoplastia-01',
    procedure: 'Abdominoplastia',
    procedureSlug: 'abdominoplastia',
    category: 'cirugia-corporal',
    evolution: '4 meses postoperatorio',
    patientAge: 34,
    badges: ['ANTES', 'DESPUÉS']
  },
  {
    id: 'caso-rinoplastia-01',
    procedure: 'Rinoplastia Ultrasónica',
    procedureSlug: 'rinoplastia-ultrasonica',
    category: 'cirugia-facial',
    evolution: '6 meses postoperatorio',
    patientAge: 28,
    badges: ['ANTES', 'DESPUÉS']
  }
];
