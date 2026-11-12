export interface ClinicalCase {
  id: string;
  slug: string;
  title: string;
  procedureName: string;
  procedureSlug: string;
  categorySlug: 'cirugia-corporal' | 'cirugia-facial' | 'cirugia-intima';
  patientDemographics: {
    age: number;
    gender: 'Femenino' | 'Masculino';
    location?: string;
  };
  clinicalMetric: string;
  postOpDuration: string;
  beforeAfterImage: string;
  overview: string;
  tags: string[];
}

export const clinicalCases: ClinicalCase[] = [
  {
    id: "caso-abdominoplastia-1",
    slug: "abdominoplastia-reconstructiva-postparto",
    title: "Abdominoplastia Reconstructiva con Plicatura Muscular",
    procedureName: "Abdominoplastia",
    procedureSlug: "abdominoplastia",
    categorySlug: "cirugia-corporal",
    patientDemographics: {
      age: 36,
      gender: "Femenino",
      location: "Bogotá",
    },
    clinicalMetric: "Reducción de 14 cm de contorno abdominal y plicatura de rectos (4.5 cm)",
    postOpDuration: "6 meses postoperatorio",
    beforeAfterImage: "/images/results/before-after-abdominoplastia.png",
    overview: "Paciente con diástasis de rectos y flacidez cutánea tras dos embarazos. Se realizó dermolipectomía con transposición umbilical anatómica y plicatura muscular tridimensional.",
    tags: ["Abdomen Firme", "Plicatura", "Reconstrucción"],
  },
  {
    id: "caso-lipolisis-1",
    slug: "lipolisis-laser-3d-femenina",
    title: "Lipólisis Láser 3D y Definición de Contorno Abdominal",
    procedureName: "Lipólisis Láser",
    procedureSlug: "lipolisis-laser",
    categorySlug: "cirugia-corporal",
    patientDemographics: {
      age: 29,
      gender: "Femenino",
      location: "Bogotá",
    },
    clinicalMetric: "Moldeamiento de cintura y espalda con retracción Tensamax (-11 cm)",
    postOpDuration: "4 meses postoperatorio",
    beforeAfterImage: "/images/results/before-after-lipolisis.png",
    overview: "Lipodistrofia resistente a hábitos de ejercicio. Se aplicó lipólisis láser tridimensional para emulsión selectiva y estimulación térmica de colágeno, complementada con Tensamax.",
    tags: ["Contorno Corporal", "Láser HD", "Tensamax"],
  },
  {
    id: "caso-pexia-1",
    slug: "pexia-mamaria-implantes-anatomicos",
    title: "Pexia Mamaria con Implantes y Remodelación Tisular",
    procedureName: "Pexia Mamaria",
    procedureSlug: "pexia-mamaria",
    categorySlug: "cirugia-corporal",
    patientDemographics: {
      age: 38,
      gender: "Femenino",
      location: "Medellín",
    },
    clinicalMetric: "Elevación de complejo areola-pezón (5.5 cm) y prótesis microtexturizada de 295cc",
    postOpDuration: "5 meses postoperatorio",
    beforeAfterImage: "/images/results/before-after-pexia.png",
    overview: "Corrección de ptosis mamaria grado II secundaria a lactancia. Reposicionamiento del complejo areola-pezón con cicatriz en T invertida mínima y relleno de polo superior.",
    tags: ["Cirugía Mamaria", "Pexia", "Elevación"],
  },
  {
    id: "caso-rinoplastia-1",
    slug: "rinoplastia-ultrasonica-estructurada",
    title: "Rinoplastia Ultrasónica y Armonización del Perfil Facial",
    procedureName: "Rinoplastia",
    procedureSlug: "rinoplastia",
    categorySlug: "cirugia-facial",
    patientDemographics: {
      age: 26,
      gender: "Femenino",
      location: "Bogotá",
    },
    clinicalMetric: "Reducción de giba ósea, rotación de punta a 105° y perfil armónico natural",
    postOpDuration: "8 meses postoperatorio",
    beforeAfterImage: "/images/results/before-after-rinoplastia.png",
    overview: "Rinoplastia ultrasónica piezoeléctrica para limado óseo milimétrico sin fracturas traumáticas ni sangrado excesivo. Resultados estéticos naturales con función ventilatoria conservada.",
    tags: ["Cirugía Facial", "Rinoplastia", "Ultrasonido"],
  },
];

export const intimateEthicsNotice = {
  title: "Aviso de Confidencialidad y Bioética en Cirugía Íntima",
  description:
    "Por estricto respeto a la intimidad, dignidad y privacidad de nuestros pacientes, y en cumplimiento de las directrices bioéticas de la Sociedad Colombiana de Cirugía Plástica (SCCP), no publicamos fotografías de procedimientos íntimos en galerías abiertas de internet. En tu valoración diagnóstica personalizada en Torre Zentai o mediante teleconsulta privada guiada, podrás revisar casos clínicos de archivo bajo absoluta confidencialidad y reserva médica.",
  ctaText: "Agendar Consulta Privada y Confidencial",
  ctaLink: "/agendar",
};
