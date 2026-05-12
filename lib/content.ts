/**
 * Toda la copy en español rioplatense.
 * Cambiar acá impacta toda la landing sin tocar componentes.
 */

export const contact = {
  email: "luissambranoarg@gmail.com",
  instagram: "luissambrano_ux",
  instagramUrl: "https://instagram.com/luissambrano_ux",
  mailtoSubject: "Propuesta DJI Argentina",
  get mailto() {
    return `mailto:${this.email}?subject=${encodeURIComponent(this.mailtoSubject)}`;
  },
};

export const hero = {
  eyebrow: "Propuesta de colaboración · 2026",
  headline: "Argentina,\nframe a frame.",
  sub:
    "Una colaboración de contenido nómada con DJI: storytelling, travel lifestyle y cinematografía aérea recorriendo el país entero, capturada con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360.",
  ctaPrimary: { label: "Ver propuesta", href: "#concepto" },
  ctaGhost: { label: "Contactar", href: contact.mailto },
};

export const concept = {
  eyebrow: "El concepto",
  headline: "No un viajero.\nUna narrativa constante.",
  lead:
    "DJI no necesita a alguien que viaje. Necesita a alguien que pueda convertirse en una narrativa coherente y sostenida para la marca. Eso es lo que propongo: documentar Argentina como un solo relato visual de largo aliento.",
  points: [
    {
      title: "Tesis",
      body:
        "Mi ventaja real no es el equipo. Es el concepto de sostener una historia durante meses, en ruta, sin pausa.",
    },
    {
      title: "Compromiso",
      body:
        "Contenido cinematic semanal: una pieza vertical, una pieza horizontal, una pieza documental larga al mes.",
    },
    {
      title: "Identidad",
      body:
        "Una sola estética rioplatense — colores cálidos, ritmo pausado, voz íntima — sostenida a lo largo del recorrido.",
    },
  ],
};

export const ecosystem = {
  eyebrow: "El ecosistema",
  headline: "Tres cámaras.\nUn solo lenguaje.",
  lead:
    "Cada herramienta del ecosistema DJI cubre un rol claro en la narrativa. No es acumulación; es complementariedad.",
  cards: [
    {
      name: "DJI Mini 5 Pro",
      role: "Aéreo cinematic",
      body:
        "Vistas imposibles para un drone de bolsillo: cordillera, salinas, costa atlántica, glaciares. La escala épica del país en planos que se sienten artesanales.",
      icon: "mini5" as const,
    },
    {
      name: "Osmo Pocket 4",
      role: "Vlog estabilizado",
      body:
        "La perspectiva humana: ruta, mesas largas, cocinas de hostel, charlas con gente. El gimbal hace que todo se sienta cinematográfico sin perder cercanía.",
      icon: "pocket4" as const,
    },
    {
      name: "Osmo 360",
      role: "Inmersión espacial",
      body:
        "Capturar lugares enteros, no solo encuadres. Material listo para reframing vertical/horizontal y para experiencias inmersivas de marca.",
      icon: "osmo360" as const,
    },
  ],
};

export const route = {
  eyebrow: "El recorrido",
  headline: "Ruta, naturaleza,\nciudad, refugio.",
  lead:
    "Cuatro pilares narrativos que se repiten en cada provincia. Una estructura simple que genera coherencia visual sin volverse fórmula.",
  pillars: [
    {
      title: "Ruta",
      body:
        "Las distancias largas, las paradas inesperadas, el ritmo de manejar 800 km en un día. La carretera como personaje.",
      image: "/images/route-ruta.jpg",
    },
    {
      title: "Naturaleza",
      body:
        "Patagonia, Litoral, Puna, Cuyo. Cuatro biomas radicalmente distintos, cada uno con su luz y su silencio.",
      image: "/images/route-naturaleza.jpg",
    },
    {
      title: "Ciudad",
      body:
        "Las capitales chicas, los barrios de Buenos Aires, los pueblos que se vacían en invierno. La cultura urbana argentina sin cliché.",
      image: "/images/route-ciudad.jpg",
    },
    {
      title: "Refugio",
      body:
        "Hostelería independiente, anfitriones que cocinan, vida minimalista en cabañas. Donde duerme la historia entre etapas.",
      image: "/images/route-refugio.jpg",
    },
  ],
};

export const method = {
  eyebrow: "El método",
  headline: "Storytelling.\nDocumental.\nAéreo.",
  lead:
    "Tres lenguajes que se cruzan en cada pieza para construir una sola voz reconocible.",
  columns: [
    {
      title: "Storytelling",
      body:
        "Una historia humana por episodio: el ceramista de Tilcara, la posadera de El Bolsón, el guía baqueano del Iberá. Personajes reales, no estampas.",
    },
    {
      title: "Documental",
      body:
        "Cortes largos, entrevistas, planos sostenidos. Ritmo lento, deliberado. La marca DJI presente como herramienta, no como tema.",
    },
    {
      title: "Aéreo",
      body:
        "El Mini 5 Pro abre y cierra cada pieza con un plano que reubica al espectador en la geografía. Escala y poesía.",
    },
  ],
};

export const community = {
  eyebrow: "La comunidad",
  headline: "Conectar a los\ncreadores emergentes.",
  lead:
    "El proyecto no termina en mí. Cada provincia activa una colaboración con un creador local emergente que también usa el ecosistema DJI. Una pieza compartida, dos audiencias.",
  metrics: [
    { value: "24", label: "Provincias visitadas" },
    { value: "12+", label: "Colaboraciones locales" },
    { value: "52", label: "Piezas semanales en 12 meses" },
    { value: "3", label: "Documentales largos al año" },
  ],
};

export const advantage = {
  eyebrow: "La ventaja real",
  quote: "La ventaja\nno es el equipo.\nEs el concepto.",
  attribution:
    "Cualquier creador puede tener el ecosistema DJI. Pocos pueden sostener una narrativa documental de un país entero durante meses en ruta. Eso es lo que diferencia esta colaboración.",
};

export const cta = {
  eyebrow: "Próximo paso",
  headline: "Construyamos\nesto juntos.",
  sub:
    "Si esta narrativa representa el espíritu creativo y explorador de DJI, hablemos. Estoy listo para arrancar la pre-producción en cuanto demos el sí.",
  primary: { label: "Escribir un mail", href: contact.mailto },
  ghost: {
    label: "Instagram @luissambrano_ux",
    href: contact.instagramUrl,
  },
};

export const footer = {
  columns: [
    {
      heading: "Proyecto",
      links: [
        { label: "Concepto", href: "#concepto" },
        { label: "Ecosistema DJI", href: "#ecosistema" },
        { label: "Recorrido", href: "#recorrido" },
        { label: "Método", href: "#metodo" },
      ],
    },
    {
      heading: "Creador",
      links: [
        { label: "Email", href: contact.mailto },
        { label: "Instagram", href: contact.instagramUrl },
        { label: "GitHub", href: "https://github.com/LuisSambrano" },
      ],
    },
    {
      heading: "Equipo",
      links: [
        { label: "DJI Mini 5 Pro", href: "https://www.dji.com/mini-5-pro" },
        { label: "Osmo Pocket 4", href: "https://www.dji.com/osmo-pocket-4" },
        { label: "Osmo 360", href: "https://www.dji.com/osmo-360" },
      ],
    },
  ],
  legal:
    "Propuesta independiente de colaboración. DJI™ es una marca registrada de SZ DJI Technology Co., Ltd. Las imágenes de producto provienen de press kits públicos de DJI.",
  signature: "Luis Sambrano · Argentina · 2026",
};
