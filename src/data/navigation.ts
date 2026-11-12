export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ProcedureNavItem {
  name: string;
  slug: string;
  href: string;
  description: string;
  badge?: string;
  subcategory?: 'contorno-corporal' | 'cirugia-mamaria';
}

export interface ProcedureCategoryNav {
  id: 'cirugia-corporal' | 'cirugia-facial' | 'cirugia-intima';
  name: string;
  slug: string;
  href: string;
  description: string;
  count: number;
  badge?: string;
  procedures: ProcedureNavItem[];
}

export const PROCEDURE_CATEGORIES: ProcedureCategoryNav[] = [
  {
    id: 'cirugia-corporal',
    name: 'Cirugía Corporal',
    slug: 'cirugia-corporal',
    href: '/procedimientos/cirugia-corporal',
    description: 'Moldeamiento de alta definición, retracción dérmica y armonía de la silueta.',
    count: 15,
    badge: 'Alta Definición',
    procedures: [
      {
        name: 'Abdominoplastia',
        slug: 'abdominoplastia',
        href: '/procedimientos/cirugia-corporal/abdominoplastia',
        description: 'Reparación de la pared abdominal y corrección de flacidez.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Lipólisis Láser',
        slug: 'lipolisis-laser',
        href: '/procedimientos/cirugia-corporal/lipolisis-laser',
        description: 'Técnica láser de mínima invasión con retracción tisular.',
        badge: 'Láser HD',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Lipo Vaser',
        slug: 'lipo-vaser',
        href: '/procedimientos/cirugia-corporal/lipo-vaser',
        description: 'Ultrasonido selectivo para definición atlética avanzada.',
        badge: 'Vaser HD',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Lipoinyección Glútea',
        slug: 'lipoinyeccion-glutea',
        href: '/procedimientos/cirugia-corporal/lipoinyeccion-glutea',
        description: 'Transferencia grasa autóloga con proyección anatómica.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Gluteoplastia',
        slug: 'gluteoplastia',
        href: '/procedimientos/cirugia-corporal/gluteoplastia',
        description: 'Aumento y remodelación glútea con implantes certificados.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Pexia Glútea Láser',
        slug: 'pexia-glutea-laser',
        href: '/procedimientos/cirugia-corporal/pexia-glutea-laser',
        description: 'Elevación y tonificación del tejido glúteo con láser.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Marcación Abdominal',
        slug: 'marcacion-abdominal',
        href: '/procedimientos/cirugia-corporal/marcacion-abdominal',
        description: 'Esculpido anatómico de los relieves musculares abdominales.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Tonificación Corporal',
        slug: 'tonificacion-corporal',
        href: '/procedimientos/cirugia-corporal/tonificacion-corporal',
        description: 'Protocolos integrales para combatir la laxitud cutánea.',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Extracción de Biopolímeros',
        slug: 'extraccion-de-biopolimeros',
        href: '/procedimientos/cirugia-corporal/extraccion-de-biopolimeros',
        description: 'Técnica reconstructiva especializada con preservación estética.',
        badge: 'Reconstructiva',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Renuvion / J-Plasma',
        slug: 'renuvion-j-plasma',
        href: '/procedimientos/cirugia-corporal/renuvion-j-plasma',
        description: 'Helio plasma subdérmico para máxima retracción tisular.',
        badge: 'Tecnología',
        subcategory: 'contorno-corporal',
      },
      {
        name: 'Mamoplastia de Aumento',
        slug: 'mamoplastia-de-aumento',
        href: '/procedimientos/cirugia-corporal/mamoplastia-de-aumento',
        description: 'Implantes mamarios de última generación con volumen armónico.',
        subcategory: 'cirugia-mamaria',
      },
      {
        name: 'Pexia Mamaria',
        slug: 'pexia-mamaria',
        href: '/procedimientos/cirugia-corporal/pexia-mamaria',
        description: 'Levantamiento y reposicionamiento del complejo areola-pezón.',
        subcategory: 'cirugia-mamaria',
      },
      {
        name: 'Reducción Mamaria',
        slug: 'reduccion-mamaria',
        href: '/procedimientos/cirugia-corporal/reduccion-mamaria',
        description: 'Disminución de volumen por salud postural y estética.',
        subcategory: 'cirugia-mamaria',
      },
      {
        name: 'Explantación Mamaria',
        slug: 'explantacion-mamaria',
        href: '/procedimientos/cirugia-corporal/explantacion-mamaria',
        description: 'Retiro en bloque de implantes y capsulectomía rigurosa.',
        subcategory: 'cirugia-mamaria',
      },
      {
        name: 'Ginecomastia',
        slug: 'ginecomastia',
        href: '/procedimientos/cirugia-corporal/ginecomastia',
        description: 'Corrección del desarrollo glandular mamario en hombres.',
        subcategory: 'cirugia-mamaria',
      },
    ],
  },
  {
    id: 'cirugia-facial',
    name: 'Cirugía Facial',
    slug: 'cirugia-facial',
    href: '/procedimientos/cirugia-facial',
    description: 'Armonización estética, rejuvenecimiento y proporciones naturales.',
    count: 7,
    badge: 'Estructural',
    procedures: [
      {
        name: 'Rinoplastia',
        slug: 'rinoplastia',
        href: '/procedimientos/cirugia-facial/rinoplastia',
        description: 'Corrección estética y funcional estructural con preservación.',
        badge: 'Estructural',
      },
      {
        name: 'Otoplastia',
        slug: 'otoplastia',
        href: '/procedimientos/cirugia-facial/otoplastia',
        description: 'Corrección de orejas prominentes y armonía auricular.',
      },
      {
        name: 'Blefaroplastia',
        slug: 'blefaroplastia',
        href: '/procedimientos/cirugia-facial/blefaroplastia',
        description: 'Rejuvenecimiento de párpados superiores e inferiores.',
      },
      {
        name: 'Lifting Facial',
        slug: 'lifting-facial',
        href: '/procedimientos/cirugia-facial/lifting-facial',
        description: 'Reposicionamiento muscular profundo y estiramiento natural.',
      },
      {
        name: 'Face Up',
        slug: 'face-up',
        href: '/procedimientos/cirugia-facial/face-up',
        description: 'Técnica de elevación vectorial para el tercio medio.',
      },
      {
        name: 'Bichectomía',
        slug: 'bichectomia',
        href: '/procedimientos/cirugia-facial/bichectomia',
        description: 'Extracción de bolsas de Bichat para afinar contornos faciales.',
      },
      {
        name: 'Hilos Tensores',
        slug: 'hilos-tensores',
        href: '/procedimientos/cirugia-facial/hilos-tensores',
        description: 'Suturas reabsorbibles de soporte y estimulación de colágeno.',
      },
    ],
  },
  {
    id: 'cirugia-intima',
    name: 'Cirugía Íntima',
    slug: 'cirugia-intima',
    href: '/procedimientos/cirugia-intima',
    description: 'Procedimientos especializados con máxima confidencialidad y ética médica.',
    count: 6,
    badge: '100% Confidencial',
    procedures: [
      {
        name: 'Lipoplastia Púbica',
        slug: 'lipoplastia-pubica',
        href: '/procedimientos/cirugia-intima/lipoplastia-pubica',
        description: 'Remodelación y reducción del monte de Venus.',
      },
      {
        name: 'Rejuvenecimiento Vaginal',
        slug: 'rejuvenecimiento-vaginal',
        href: '/procedimientos/cirugia-intima/rejuvenecimiento-vaginal',
        description: 'Vaginoplastia funcional y rejuvenecimiento estético íntimo.',
      },
      {
        name: 'Frenuloplastia',
        slug: 'frenuloplastia',
        href: '/procedimientos/cirugia-intima/frenuloplastia',
        description: 'Corrección quirúrgica del frenillo peneano con láser.',
      },
      {
        name: 'Faloplastia',
        slug: 'faloplastia',
        href: '/procedimientos/cirugia-intima/faloplastia',
        description: 'Elongación mediante liberación del ligamento suspensorio.',
      },
      {
        name: 'Escrotoplastia',
        slug: 'escrotoplastia',
        href: '/procedimientos/cirugia-intima/escrotoplastia',
        description: 'Resección y elevación del tejido escrotal redundante.',
      },
      {
        name: 'Engrosamiento de Pene',
        slug: 'engrosamiento-de-pene',
        href: '/procedimientos/cirugia-intima/engrosamiento-de-pene',
        description: 'Aumento circunferencial con grasa autóloga centrifugada.',
      },
    ],
  },
];

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre el Dr. Gómez', href: '/sobre-el-dr-gomez' },
  { label: 'Resultados', href: '/resultados' },
  { label: 'Blog', href: '/recursos/blog' },
  { label: 'Historias de Vida', href: '/recursos/historias-de-vida' },
  { label: 'Prensa', href: '/recursos/prensa' },
  { label: 'Contacto', href: '/contacto' },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Sobre el Dr. Gómez', href: '/sobre-el-dr-gomez' },
  { label: 'Catálogo de Procedimientos', href: '/procedimientos' },
  { label: 'Casos Clínicos & Resultados (+18)', href: '/resultados' },
  { label: 'Blog Médico', href: '/recursos/blog' },
  { label: 'Historias de Pacientes', href: '/recursos/historias-de-vida' },
  { label: 'Apariciones en Prensa', href: '/recursos/prensa' },
  { label: 'Sede Torre Zentai', href: '/contacto' },
  { label: 'Reserva tu Cita', href: '/agendar' },
  { label: 'Política de Tratamiento de Datos', href: '/politica-de-datos' },
];
