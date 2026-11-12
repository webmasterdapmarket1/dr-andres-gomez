export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year?: string;
}

export interface PhilosophyPillar {
  title: string;
  description: string;
}

export interface CongressEvent {
  year: number;
  title: string;
  location: string;
  organization?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
}

export interface DoctorProfile {
  fullName: string;
  title: string;
  portraitImage: string;
  scrubsImage: string;
  shortBio: string;
  fullBio: string[];
  education: EducationItem[];
  memberships: string[];
  philosophy: {
    coreConcept: string;
    pillars: PhilosophyPillar[];
  };
  congressTimeline: CongressEvent[];
  teamMembers: TeamMember[];
}

export const doctorProfile: DoctorProfile = {
  fullName: "Dr. Andrés Gómez",
  title: "Cirujano Plástico, Estético y Reconstructivo",
  portraitImage: "/images/dr-andres-gomez-ccoym-1024x682.webp",
  scrubsImage: "/images/dr-adndres-gomez-cirujano-plastico-ccoym-2017-min.webp",
  shortBio:
    "Más de 29 años de trayectoria quirúrgica dedicados a la excelencia, la naturalidad y la seguridad del paciente. Especialista graduado en la Escuela de Medicina Juan N. Corpas y la Universidad SACPER en Buenos Aires, Argentina.",
  fullBio: [
    "El Dr. Andrés Gómez es un referente de la cirugía plástica en Colombia y Latinoamérica. Con más de 29 años de ejercicio profesional ininterrumpido y más de 18.000 intervenciones quirúrgicas exitosas, ha consolidado una práctica clínica basada en el rigor científico, el criterio estético refinado y el trato humano cercano.",
    "Como Director Científico y de Cirugía Plástica de la Clínica Colombiana de Obesidad y Metabolismo (CCOM), ha sido pionero en la adopción de tecnologías de mínima invasión como la Lipólisis Láser tridimensional, el sistema ultrasónico Vaser HD y la retracción tisular subdérmica.",
    "Su práctica se desarrolla exclusivamente en quirófanos de alta tecnología completamente habilitados y acreditados por las autoridades de salud, garantizando los más altos estándares de bioseguridad y bienestar para cada paciente.",
  ],
  education: [
    {
      degree: "Médico Cirujano General",
      institution: "Escuela de Medicina Juan N. Corpas",
      location: "Bogotá, Colombia",
      year: "1995",
    },
    {
      degree: "Especialista en Cirugía Plástica, Estética y Reconstructiva",
      institution: "Universidad SACPER (Sociedad Argentina de Cirugía Plástica)",
      location: "Buenos Aires, Argentina",
      year: "2000",
    },
  ],
  memberships: [
    "Sociedad Colombiana de Cirugía Plástica, Estética y Reconstructiva (SCCP) — Miembro de Número",
    "Sociedad Argentina de Cirugía Plástica (SACPER)",
    "Federación Ibero Latinoamericana de Cirugía Plástica (FILACP)",
    "Habilitación Seccional de Salud de Bogotá D.C.",
  ],
  philosophy: {
    coreConcept: "Mínimo trauma tisular para una máxima recuperación y naturalidad",
    pillars: [
      {
        title: "Tecnología de Mínima Invasión",
        description:
          "Uso sinérgico de Láser y Vaser HD para licuar tejido adiposo selectivamente, coagular microvasos y reducir el edema postoperatorio.",
      },
      {
        title: "Elegancia y Proporción Natural",
        description:
          "Cada procedimiento respeta la armonía anatómica individual, evitando resultados artificiales o sobrecorregidos.",
      },
      {
        title: "Acompañamiento Continuo 1 a 1",
        description:
          "Monitorización permanente con la Enfermera Jefe Dora Calderón y protocolos de drenaje asistido para una recuperación sin dolor severo.",
      },
      {
        title: "Seguridad y Quirófano Acreditado",
        description:
          "Todas las cirugías se llevan a cabo exclusivamente en quirófanos acreditados con monitoreo anestésico permanente.",
      },
    ],
  },
  congressTimeline: [
    { year: 2024, title: "Simposio Internacional de Contorno Corporal y Tecnologías Ultrasónicas", location: "Bogotá, Colombia" },
    { year: 2023, title: "Congreso Nacional SCCP: Innovaciones en Cirugía Mamaria y Liposucción HD", location: "Cartagena, Colombia" },
    { year: 2022, title: "Congreso Latinoamericano de Cirugía Plástica (FILACP)", location: "Lima, Perú" },
    { year: 2021, title: "Congreso Colombiano de Cirugía Plástica SCCP — Innovaciones en Retracción Tisular", location: "Cartagena, Colombia" },
    { year: 2019, title: "World Congress of Aesthetic Plastic Surgery (ISAPS)", location: "Río de Janeiro, Brasil" },
    { year: 2018, title: "Masterclass en Lipo Vaser de Alta Definición y Lipotransferencia", location: "Medellín, Colombia" },
    { year: 2016, title: "Simposio Internacional de Cirugía Facial y Rinoplastia Estructural", location: "Bogotá, Colombia" },
    { year: 2015, title: "World Congress of Aesthetic Plastic Surgery (ISAPS)", location: "Río de Janeiro, Brasil" },
    { year: 2014, title: "Jornadas Internacionales de Cirugía del Contorno Corporal", location: "Buenos Aires, Argentina" },
    { year: 2012, title: "Simposio Latinoamericano de Cirugía Plástica Facial", location: "Buenos Aires, Argentina" },
    { year: 2012, title: "International Symposium on Laser and Energy-Based Devices in Plastic Surgery", location: "Miami, EE.UU." },
    { year: 2011, title: "Congreso de la Sociedad Colombiana de Cirugía Plástica (SCCP)", location: "Santa Marta, Colombia" },
    { year: 2010, title: "Curso Universitario de Cirugía de Mamas, Pontificia Universidad Católica Argentina", location: "Buenos Aires, Argentina" },
    { year: 2010, title: "Laser Summit Argentina — Nuevas Longitudes de Onda en Lipólisis", location: "Buenos Aires, Argentina" },
    { year: 2010, title: "XL Congreso Argentino de Cirugía Plástica (SACPER)", location: "Buenos Aires, Argentina" },
    { year: 2009, title: "Craniofacial Symposium & Reconstructive Microsurgery", location: "Buenos Aires, Argentina" },
    { year: 2009, title: "XXXIX Congreso Argentino de Cirugía Plástica", location: "Mar del Plata, Argentina" },
    { year: 2007, title: "Simposio Cono Sur de Cirugía Estética y Reconstructiva", location: "Santiago, Chile" },
    { year: 2006, title: "Jornadas de Actualización en Cirugía de Contorno y Mamoplastia", location: "Bogotá, Colombia" },
    { year: 2004, title: "Cours de Liposculpture à la Seringue, Dr. Pierre Fournier", location: "París / Buenos Aires" },
    { year: 2003, title: "Congreso Nacional SCCP: Avances en Lipoescultura Asistida", location: "Cali, Colombia" },
    { year: 2002, title: "Simposio Internacional de Rejuvenecimiento Facial Quirúrgico", location: "Buenos Aires, Argentina" },
    { year: 2001, title: "Jornadas Científicas de la Asociación Médica Argentina", location: "Buenos Aires, Argentina" },
    { year: 2000, title: "Congreso Argentino de Cirugía Plástica y Reparadora", location: "Córdoba, Argentina" },
    { year: 1999, title: "Curso Superior de Cirugía Reconstructiva de Miembros", location: "Buenos Aires, Argentina" },
    { year: 1998, title: "Simposio de Quemaduras y Coberturas Cutáneas Complejas", location: "Buenos Aires, Argentina" },
    { year: 1997, title: "Jornadas Quirúrgicas Rioplatenses de Cirugía Estética", location: "Montevideo, Uruguay" },
    { year: 1996, title: "Congreso Iberoamericano de Cirugía Plástica", location: "Cancún, México" },
    { year: 1995, title: "Jornadas de Residentes de Cirugía General y Especialidades", location: "Bogotá, Colombia" },
    { year: 1994, title: "Simposio de Emergencias Médico-Quirúrgicas Juan N. Corpas", location: "Bogotá, Colombia" },
    { year: 1993, title: "Actualización en Cirugía Ambulatoria y Anestesia Local", location: "Bogotá, Colombia" },
  ],
  teamMembers: [
    {
      name: "Dora Calderón Vega",
      role: "Enfermera Jefe de Postoperatorio y Recuperación",
      bio: "Especialista en drenaje linfático postquirúrgico y manejo de tecnología Tensamax. Acompaña a cada paciente desde el quirófano hasta el alta definitiva con calidez humana insuperable.",
      imageSrc: "/images/dora-calderon.png",
    },
  ],
};

export default doctorProfile;
