export interface OfficeHours {
  weekdays: string;
  weekend: string;
  emergency: string;
  summary: string;
}

export interface SiteConfig {
  doctor: {
    name: string;
    fullName: string;
    title: string;
    specialty: string;
    credentials: string[];
    experienceYears: number;
    surgeriesCount: string;
    accreditationsCount: string;
    accreditedORPercent: string;
  };
  contact: {
    address: {
      building: string;
      street: string;
      tower: string;
      office: string;
      zone: string;
      city: string;
      country: string;
      full: string;
      mapsUrl: string;
      mapsEmbedUrl: string;
    };
    pbx: string[];
    whatsapp: {
      primary: string;
      alternate: string;
      displayPrimary: string;
      displayAlternate: string;
    };
    email: string;
    hours: OfficeHours;
  };
  social: {
    facebook: string;
    instagram: string;
    youtube: string;
    twitter: string;
  };
  institutional: {
    clinicName: string;
    clinicUrl: string;
    clinicMapsUrl: string;
    badgeText: string;
    secretaryOfHealth: string;
  };
  legal: {
    disclaimerImages: string;
    habeasDataText: string;
    copyrightText: string;
  };
}

export const siteConfig: SiteConfig = {
  doctor: {
    name: "Dr. Andrés Gómez",
    fullName: "Dr. Andrés Gómez",
    title: "Dr. Andrés Gómez MD",
    specialty: "Cirujano Plástico, Estético y Reconstructivo",
    credentials: [
      "Médico Cirujano de la Escuela de Medicina Juan N. Corpas",
      "Especialista en Cirugía Plástica, Estética y Reconstructiva (SACPER, Argentina)",
      "Director de Cirugía Plástica — Clínica Colombiana de Obesidad y Metabolismo",
      "Miembro de Número de la Sociedad Colombiana de Cirugía Plástica (SCCP)",
    ],
    experienceYears: 29,
    surgeriesCount: "+18.000",
    accreditationsCount: "+5",
    accreditedORPercent: "100%",
  },
  contact: {
    address: {
      building: "Edificio Torre Zentai",
      street: "Cra. 23 No. 124 – 87",
      tower: "Torre 1",
      office: "Consultorio 805",
      zone: "Santa Bárbara / Usaquén",
      city: "Bogotá D.C.",
      country: "Colombia",
      full: "Cra. 23 No. 124 – 87, Torre 1, Consultorio 805, Bogotá D.C., Colombia",
      mapsUrl: "https://maps.app.goo.gl/m88t5MnQyuwVAXJN9",
      mapsEmbedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2995!2d-74.055858!3d4.7049783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9a93dbcda04b%3A0xa5e137e2e005b5da!2sCl%C3%ADnica%20Colombiana%20de%20Obesidad%20y%20Metabolismo!5e0!3m2!1ses!2sco!4v1700000000000!5m2!1ses!2sco",
    },
    pbx: ["+57 315 873 9927", "+57 315 801 0982"],
    whatsapp: {
      primary: "573123255900",
      alternate: "573186515726",
      displayPrimary: "+57 312 325 5900",
      displayAlternate: "+57 318 651 5726",
    },
    email: "contacto@drandresgomez.com",
    hours: {
      weekdays: "Lun, Mié y Jue: 7:30 a.m. – 5:00 p.m. | Mar y Vie: 8:00 a.m. – 5:00 p.m.",
      weekend: "Sábados: 8:00 a.m. – 12:00 m.",
      emergency: "Guardia y atención postquirúrgica activa 24/7",
      summary: "Lun-Vie 7:30 a.m. – 5:00 p.m. • Sáb 8:00 a.m. – 12:00 m.",
    },
  },
  social: {
    facebook: "https://www.facebook.com/DrAndresGomezCirujanoplastico",
    instagram: "https://www.instagram.com/clinicaobesidadymetabolismo/",
    youtube: "https://www.youtube.com/user/OBESIDADYMETABOLISMO",
    twitter: "https://twitter.com/DrAndresGomez",
  },
  institutional: {
    clinicName: "Clínica Colombiana de Obesidad y Metabolismo (CCOM)",
    clinicUrl: "https://clinicacolombianaobesidad.com",
    clinicMapsUrl: "https://maps.app.goo.gl/m88t5MnQyuwVAXJN9",
    badgeText: "Respaldo e Infraestructura Quirúrgica Acreditada",
    secretaryOfHealth: "Habilitación Seccional de Salud de Bogotá",
  },
  legal: {
    disclaimerImages:
      "Las fotografías de resultados (antes y después) publicadas en este sitio corresponden a pacientes reales, quienes otorgaron su consentimiento informado y autorización expresa para su uso con fines informativos y educativos. Los resultados pueden variar de una persona a otra y dependen de las condiciones particulares de cada paciente. La información de este sitio no reemplaza una valoración médica.",
    habeasDataText:
      "Tratamiento de datos personales según la Ley 1581 de 2012 de la República de Colombia. Secreto profesional médico garantizado.",
    copyrightText: `© ${new Date().getFullYear()} Dr. Andrés Gómez. Cirujano Plástico & Reconstructivo. Todos los derechos reservados.`,
  },
};

export default siteConfig;
