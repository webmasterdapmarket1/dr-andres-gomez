export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: 'Corporal' | 'Facial' | 'Íntima' | 'Recuperación' | 'Bienestar';
  author: string;
  date: string;
  readTime: string;
  coverImage?: string;
  relatedProcedureSlugs: string[];
}

export interface PatientStory {
  id: string;
  slug: string;
  patientName: string;
  age: number;
  city: string;
  procedureName: string;
  procedureSlug: string;
  rating: number;
  postOpElapsed: string;
  quote: string;
  fullNarrative: string[];
  verified: boolean;
}

export interface PressItem {
  id: string;
  mediaOutlet: string;
  title: string;
  date: string;
  type: 'Televisión' | 'Prensa Escrita' | 'Radio' | 'Digital';
  summary: string;
  externalUrl?: string;
  badge: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "post-1",
    slug: "lipolisis-laser-vs-lipo-vaser",
    title: "Lipólisis Láser vs. Lipo Vaser: ¿Cuál es la tecnología ideal para tu contorno?",
    excerpt: "Analizamos las diferencias técnicas, beneficios y tiempos de recuperación entre el láser subdérmico y el ultrasonido de alta definición Vaser.",
    content: [
      "La evolución tecnológica en la cirugía de contorno corporal ha transformado radicalmente la experiencia del paciente. Lejos de la liposucción mecánica tradicional, hoy disponemos de herramientas de alta precisión que protegen los tejidos circundantes.",
      "La Lipólisis Láser utiliza una microfibra óptica calibrada que emite energía térmica controlada. Esta energía licúa selectivamente las células adiposas mientras coagula pequeños vasos sanguíneos, reduciendo el sangrado y estimulando la neocologénesis profunda para una retracción cutánea uniforme.",
      "Por su parte, el sistema Vaser emplea ondas de ultrasonido de frecuencia específica para resonar con las células de grasa, desprendiéndolas suavemente sin fracturar las estructuras vasculares ni la matriz tisular. Esto permite definir surcos anatómicos atléticos (marcación HD) y obtener grasa de óptima calidad para injertos autólogos.",
      "En la valoración diagnóstica personalizada en Torre Zentai determinamos la combinación adecuada según el grosor del panículo adiposo, el tono elástico de la piel y los objetivos estéticos del paciente."
    ],
    category: "Corporal",
    author: "Dr. Andrés Gómez",
    date: "28 de Octubre, 2026",
    readTime: "5 min de lectura",
    relatedProcedureSlugs: ["lipolisis-laser", "lipo-vaser", "marcacion-abdominal"]
  },
  {
    id: "post-2",
    slug: "cuidados-postoperatorios-tensamax",
    title: "La importancia del cuidado postoperatorio con radiofrecuencia Tensamax",
    excerpt: "Cómo la estimulación celular y el drenaje asistido aceleran la desinflamación y previenen la fibrosis postquirúrgica.",
    content: [
      "El éxito de una cirugía corporal depende en un 50% de la técnica quirúrgica y en un 50% de la disciplina y calidad del protocolo postoperatorio asistido.",
      "La tecnología Tensamax de radiofrecuencia monopolar focalizada reactiva la microcirculación tisular y promueve el drenaje linfático fisiológico sin aplicar presiones traumáticas sobre los tejidos recién operados.",
      "Bajo la supervisión experta de nuestra enfermera jefe Dora Calderón Vega, cada paciente recibe un plan personalizado de sesiones desde los primeros días postoperatorios. Esto previene eficazmente la formación de adherencias o fibrosis, acelerando el retorno a las actividades cotidianas."
    ],
    category: "Recuperación",
    author: "Dr. Andrés Gómez",
    date: "15 de Octubre, 2026",
    readTime: "4 min de lectura",
    relatedProcedureSlugs: ["lipolisis-laser", "abdominoplastia", "tonificacion-corporal"]
  },
  {
    id: "post-3",
    slug: "rinoplastia-ultrasonica-armonia-facial",
    title: "Rinoplastia Ultrasónica: Precisión milimétrica y menor inflamación",
    excerpt: "Por qué el instrumental piezoeléctrico permite remodelar el hueso nasal sin fracturas descontroladas ni hematomas severos.",
    content: [
      "La rinoplastia moderna busca resultados armónicos que respeten las proporciones individuales del rostro sin estigmas de nariz operada, preservando siempre la función respiratoria.",
      "El bisturí piezoeléctrico ultrasónico trabaja selectivamente sobre el tejido óseo y cartilaginoso duro, deteniéndose automáticamente al contactar con la mucosa blanda o los vasos sanguíneos. Esto elimina el uso de escoplos tradicionales.",
      "Como resultado, el paciente experimenta una inflamación notablemente inferior, ausencia casi total de moretones periorbitarios y una recuperación social en menos de una semana."
    ],
    category: "Facial",
    author: "Dr. Andrés Gómez",
    date: "02 de Octubre, 2026",
    readTime: "6 min de lectura",
    relatedProcedureSlugs: ["rinoplastia"]
  },
  {
    id: "post-4",
    slug: "guia-implantes-mamarios-perfil-plano",
    title: "Guía para elegir el tamaño y plano de tus implantes mamarios",
    excerpt: "Criterios anatómicos, prueba de probadores y diferencias entre colocación subfascial, retromuscular y subglandular.",
    content: [
      "Elegir el volumen y perfil de un implante no es una decisión aislada de catálogo; requiere un análisis antropométrico riguroso del tórax, el grosor del tejido mamario y la simetría esquelética.",
      "En consulta diagnóstica evaluamos la cobertura cutánea existente para definir el plano anatómico idóneo: retromuscular para mayor naturalidad en pacientes delgadas, o subfascial para transiciones suaves sin alterar la mecánica muscular.",
      "Nuestro objetivo es lograr un busto móvil, suave al tacto y equilibrado que conserve su elegancia a lo largo de los años."
    ],
    category: "Corporal",
    author: "Dr. Andrés Gómez",
    date: "18 de Septiembre, 2026",
    readTime: "5 min de lectura",
    relatedProcedureSlugs: ["mamoplastia-de-aumento", "pexia-mamaria", "reduccion-mamaria"]
  },
  {
    id: "post-5",
    slug: "cirugia-intima-femenina-bienestar",
    title: "Cirugía íntima femenina: Salud, comodidad y bienestar sin tabúes",
    excerpt: "Procedimientos diseñados para corregir asimetrías, molestias mecánicas con la ropa y devolver la plenitud y confianza.",
    content: [
      "La cirugía íntima femenina abarca procedimientos reconstructivos y funcionales como la labioplastia y el tensado vaginal láser, orientados a resolver molestias físicas reales durante el deporte o las relaciones, así como a mejorar la autoimagen.",
      "El abordaje mediante tecnología láser minimiza el edema y permite incisiones imperceptibles con una cicatrización acelerada y mínimo disconfort.",
      "La privacidad, el secreto médico riguroso y el trato respetuoso son la base fundamental de nuestra consulta en Torre Zentai."
    ],
    category: "Íntima",
    author: "Dr. Andrés Gómez",
    date: "05 de Septiembre, 2026",
    readTime: "4 min de lectura",
    relatedProcedureSlugs: ["rejuvenecimiento-vaginal", "lipoplastia-pubica", "frenuloplastia"]
  },
  {
    id: "post-6",
    slug: "como-verificar-cirujano-plastico-acreditado",
    title: "5 criterios fundamentales para verificar a un cirujano plástico acreditado",
    excerpt: "Qué registros médicos, habilitaciones y membresías de sociedades científicas debes exigir antes de entrar a quirófano.",
    content: [
      "La seguridad del paciente es el pilar innegociable de la medicina estética. Antes de someterse a cualquier procedimiento, es indispensable verificar:",
      "1. Título de especialista homologado por el Ministerio de Educación y registro oficial en ReTHUS.",
      "2. Membresía activa en la Sociedad Colombiana de Cirugía Plástica (SCCP) o federaciones internacionales reconocidas como SACPER o FILACP.",
      "3. Quirófanos plenamente habilitados por la Secretaría Distrital de Salud con infraestructura de reanimación y esterilización hospitalaria.",
      "4. Monitoreo permanente por médico especialista en Anestesiología.",
      "5. Valoración diagnóstica individual donde se expliquen honestamente las indicaciones y los cuidados postoperatorios."
    ],
    category: "Bienestar",
    author: "Dr. Andrés Gómez",
    date: "20 de Agosto, 2026",
    readTime: "5 min de lectura",
    relatedProcedureSlugs: []
  }
];

export const patientStories: PatientStory[] = [
  {
    id: "story-1",
    slug: "claudia-lipolisis-laser",
    patientName: "Claudia M.",
    age: 36,
    city: "Bogotá",
    procedureName: "Lipólisis Láser 3D & Tensamax",
    procedureSlug: "lipolisis-laser",
    rating: 5,
    postOpElapsed: "4 meses postoperatorio",
    quote: "El Dr. Andrés Gómez entendió exactamente lo que buscaba: definir mi cintura sin exageraciones. La recuperación con el equipo de enfermería fue increíblemente rápida y sin dolor.",
    fullNarrative: [
      "Tras haber probado dietas estrictas y rutinas intensas en el gimnasio, persistían depósitos grasos en mi abdomen bajo y flancos que me hacían sentir incómoda con mi ropa.",
      "En la valoración diagnóstica en Torre Zentai, el Dr. Gómez me explicó con total honestidad qué podíamos lograr mediante Lipólisis Láser y retracción de piel con Tensamax.",
      "A los cuatro meses de la intervención, mi silueta es armónica, natural y mi piel quedó completamente adherida. La atención de la jefa Dora fue insuperable."
    ],
    verified: true
  },
  {
    id: "story-2",
    slug: "sandra-abdominoplastia",
    patientName: "Sandra P.",
    age: 44,
    city: "Miami, EE.UU.",
    procedureName: "Abdominoplastia Reconstructiva",
    procedureSlug: "abdominoplastia",
    rating: 5,
    postOpElapsed: "6 meses postoperatorio",
    quote: "Viajé desde el exterior para operarme con el Dr. Gómez. La atención desde la primera teleconsulta hasta el retiro de puntos me dio una tranquilidad inmensa. Mi abdomen quedó plano y natural.",
    fullNarrative: [
      "Luego de dos embarazos gemelares, sufría de una diástasis abdominal severa que me generaba molestias posturales y exceso de piel flácida.",
      "Coordinar mi viaje médico fue sumamente sencillo. El equipo me acompañó en cada paso y el procedimiento se realizó en una sala quirúrgica impecable.",
      "Hoy puedo lucir vestidos ajustados con total seguridad y no siento dolor ni incomodidad."
    ],
    verified: true
  },
  {
    id: "story-3",
    slug: "marcela-pexia-mamaria",
    patientName: "Marcela R.",
    age: 29,
    city: "Medellín",
    procedureName: "Pexia Mamaria con Implantes",
    procedureSlug: "pexia-mamaria",
    rating: 5,
    postOpElapsed: "5 meses postoperatorio",
    quote: "La calidez del doctor y la precisión en el quirófano superaron mis expectativas. El resultado de mis senos se ve completamente armónico con mi contextura.",
    fullNarrative: [
      "Deseaba recuperar la firmeza y proyección de mi busto sin que se viera exagerado. El doctor me asesoró en la elección del implante y la técnica periareolar.",
      "Las cicatrices son casi imperceptibles y la simetría es perfecta. Volvería a ponerme en sus manos sin dudarlo."
    ],
    verified: true
  },
  {
    id: "story-4",
    slug: "alejandro-ginecomastia",
    patientName: "Alejandro V.",
    age: 38,
    city: "Bogotá",
    procedureName: "Ginecomastia y Marcación Pectoral",
    procedureSlug: "ginecomastia",
    rating: 5,
    postOpElapsed: "3 meses postoperatorio",
    quote: "Tenía una gran inseguridad para ir a la piscina o usar camisas ajustadas. La cirugía fue ambulatoria, el dolor fue mínimo y el cambio en mi torso es rotundo.",
    fullNarrative: [
      "El Dr. Gómez combinó la extracción glandular con lipólisis de contorno pectoral. En pocos días pude retomar mi trabajo y hoy me siento lleno de energía y confianza."
    ],
    verified: true
  }
];

export const pressArticles: PressItem[] = [
  {
    id: "press-1",
    mediaOutlet: "Caracol Televisión / Noticias Caracol",
    title: "Tecnología láser y protocolos de bioseguridad en cirugía plástica segura en Bogotá",
    date: "Septiembre 2026",
    type: "Televisión",
    summary: "Entrevista en estudio al Dr. Andrés Gómez sobre los avances en quirófanos acreditados y la importancia de la tecnología láser para minimizar el trauma tisular.",
    badge: "Emisión Nacional",
    externalUrl: "https://www.noticiascaracol.com"
  },
  {
    id: "press-2",
    mediaOutlet: "Revista Semana / Especial Salud",
    title: "Por qué operar en quirófanos acreditados salva vidas: Análisis médico del Dr. Gómez",
    date: "Junio 2026",
    type: "Prensa Escrita",
    summary: "Artículo de opinión y análisis sobre los estándares de monitoreo anestésico continuo y bioseguridad hospitalaria en cirugía estética.",
    badge: "Edición Impresa & Digital",
    externalUrl: "https://www.semana.com"
  },
  {
    id: "press-3",
    mediaOutlet: "El Tiempo / Vida Moderna",
    title: "Nuevas alternativas para la retracción dérmica post-liposucción con láser y radiofrecuencia",
    date: "Marzo 2026",
    type: "Prensa Escrita",
    summary: "Reportaje especial que destaca la experiencia clínica del Dr. Gómez en la combinación de Lipólisis Láser y Tensamax en pacientes con flacidez moderada.",
    badge: "Cobertura Médica",
    externalUrl: "https://www.eltiempo.com"
  },
  {
    id: "press-4",
    mediaOutlet: "Diario La República",
    title: "Turismo médico en Bogotá: Por qué pacientes del exterior eligen la precisión quirúrgica colombiana",
    date: "Noviembre 2025",
    type: "Digital",
    summary: "Análisis sobre la atracción de pacientes de Norteamérica y Europa hacia especialistas con acreditación internacional y clínicas habilitadas.",
    badge: "Economía & Salud",
    externalUrl: "https://www.larepublica.co"
  },
  {
    id: "press-5",
    mediaOutlet: "Revista Aló",
    title: "Mitos sobre la marcación abdominal y la retracción de piel con radiofrecuencia",
    date: "Julio 2025",
    type: "Prensa Escrita",
    summary: "Guía médica sobre la diferencia entre lipoescultura tradicional y técnicas de retracción dérmica selectiva.",
    badge: "Bienestar Femenino",
    externalUrl: "https://www.alo.co"
  },
  {
    id: "press-6",
    mediaOutlet: "RCN Radio / Programa Salud y Vida",
    title: "La importancia de la valoración diagnóstica personalizada antes de cualquier cirugía plástica",
    date: "Marzo 2025",
    type: "Radio",
    summary: "Conversatorio especializado sobre la relación médico-paciente, consentimientos informados y prevención de complicaciones.",
    badge: "Entrevista Radial",
    externalUrl: "https://www.rcnradio.com"
  }
];
