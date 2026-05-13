/**
 * Toda la copy de la landing, en español rioplatense y en inglés.
 *
 * Audiencia objetivo: persona de marketing en DJI LATAM que evalúa
 * propuestas de colaboración. Ya conoce los productos. Lo que necesita
 * leer es por qué elegir a este creador, cómo entiende su ecosistema
 * y cómo va a ejecutar la propuesta de principio a fin.
 *
 * Reglas de tono:
 *  - Sin guiones largos ni cortos usados como aposición.
 *  - Texto narrativo y conectivo, no enunciados sueltos.
 *  - Le habla directo al lector de DJI, no al público general.
 *  - No explica qué hace cada producto. Asume conocimiento.
 *  - Demuestra oficio describiendo el flujo de trabajo real.
 *
 * Para agregar o cambiar contenido, editar acá. Los tiles leen
 * `content[locale]` a través del hook useLocale.
 */

export type Locale = "es" | "en";

const email = "luissambranoarg@gmail.com";
const instagramUrl = "https://instagram.com/luissambrano_ux";

function mailto(subject: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export const contact = {
  email,
  instagram: "luissambrano_ux",
  instagramUrl,
  mailtoEs: mailto("Propuesta de colaboración con DJI LATAM"),
  mailtoEn: mailto("DJI LATAM Collaboration Proposal"),
};

export const content = {
  es: {
    nav: {
      brand: "Luis Sambrano",
      brandTag: "Argentina",
      cta: "Escribir",
      menuLabel: "Secciones",
      sectionTitle: "Propuesta DJI",
      sectionMeta: "Argentina · 2026",
      sectionCta: "Iniciar conversación",
      links: [
        { href: "#propuesta", label: "La propuesta" },
        { href: "#creador", label: "Por qué este creador" },
        { href: "#equipo", label: "Por qué este equipo" },
        { href: "#flujo", label: "Cómo lo voy a hacer" },
        { href: "#recorrido", label: "El recorrido" },
        { href: "#formatos", label: "Los formatos en acción" },
        { href: "#colaboracion", label: "La colaboración" },
        { href: "#contacto", label: "Hablemos" },
      ],
    },

    hero: {
      eyebrow: "Propuesta para DJI LATAM · 2026",
      headline: "Argentina entera,\nnarrada en doce meses.",
      sub:
        "Soy Luis Sambrano y esta página existe para una persona específica, vos, que evalúas con qué creadores trabaja DJI en la región. Lo que sigue es por qué elegirme a mí, cómo entiendo tu ecosistema y cómo voy a ejecutar esta colaboración de principio a fin.",
      ctaPrimary: { label: "Ver la propuesta", href: "#propuesta" },
      ctaGhost: { label: "Escribirme", href: contact.mailtoEs },
      videoAlt: "Paisaje cinematográfico de Argentina al amanecer",
    },

    proposal: {
      eyebrow: "La propuesta en una frase",
      headline: "Doce meses recorriendo\nlas veinticuatro provincias\ncon tu ecosistema en mano.",
      lead:
        "Una sola colaboración de largo aliento, no una campaña corta. Cincuenta y dos piezas semanales para feeds verticales y horizontales, doce mini documentales mensuales y tres documentales largos al cierre del año. Todo capturado con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360, editado en ruta y publicado de manera coherente bajo una sola voz creativa. Una operación pensada para escalar a LATAM después del primer ciclo.",
    },

    whyCreator: {
      eyebrow: "Por qué este creador",
      headline: "No tengo un millón\nde seguidores, todavía.\nEsa es la oportunidad.",
      lead:
        "Un creador establecido viene con su audiencia construida, su estética cerrada y agenda llena. Un creador emergente como yo trae lo opuesto, y eso es exactamente lo que esta colaboración necesita: tiempo dedicado, disposición a moldear la voz junto con la marca, compromiso de exclusividad y hambre real de producir. No vas a tener que pelear por mi atención con otras marcas en paralelo.",
      points: [
        {
          title: "Hambre y disponibilidad",
          body:
            "Estoy disponible los próximos doce meses sin agenda paralela. Cuando DJI pida un evento, una activación o una entrega rápida, llego con tiempo y con cámara lista. Esa flexibilidad no la tiene un creador con cien clientes encima.",
        },
        {
          title: "Voz en formación, no impuesta",
          body:
            "Mi estética aún se está definiendo. Eso significa que puede absorber el código visual de DJI, lo cinematográfico y lo accesible, sin pelear con un branding personal cristalizado. Crezco en la dirección que la colaboración necesita.",
        },
        {
          title: "Compromiso de exclusividad",
          body:
            "Por la duración de este proyecto, no acepto colaboraciones con marcas competidoras de drones, gimbales ni cámaras 360. Todo lo que publique en doce meses muestra a DJI o a la propuesta directamente. Una sola lealtad, fácil de auditar.",
        },
        {
          title: "Documentación abierta",
          body:
            "Cada decisión creativa, cada plano, cada provincia visitada y cada métrica de publicación quedan documentadas en un dashboard compartido con el equipo de DJI. Reportes mensuales con piezas entregadas, alcance acumulado, costo por entrega y siguientes pasos. Una colaboración medible, no un acto de fe.",
        },
      ],
    },

    ecosystem: {
      eyebrow: "Por qué este equipo, no otro",
      headline: "Elegí estos tres productos\npor razones concretas\nde flujo de trabajo.",
      lead:
        "No los elegí por nombre ni por catálogo. Los elegí porque cada uno resuelve un problema operativo distinto del proyecto, y juntos cubren todas las situaciones de captura que voy a enfrentar viajando solo durante un año. Esta es la lógica detrás de cada selección.",
      cards: [
        {
          name: "DJI Mini 5 Pro",
          role: "El aéreo que viaja solo",
          body:
            "Lo elegí porque pesa menos que cualquier otra opción con sensor de una pulgada, y eso me deja viajar sin permisos comerciales por la mayor parte de Argentina. En la práctica, cada provincia abre con un plano aéreo capturado por mí mismo, sin operador adicional ni equipo de soporte que infle el presupuesto de la colaboración.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "El gimbal que reemplaza al equipo",
          body:
            "Lo elegí porque elimina la figura del operador. Solo en ruta, en una cocina de hostel a las once de la noche, no puedo armar un set. El Pocket 4 me da cinematografía estabilizada en una mano y con LiDAR autofocus que mantiene al sujeto humano en foco sin asistente. Acá vive todo el material documental del proyecto.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "Una captura, cinco formatos",
          body:
            "Lo elegí porque es la pieza que multiplica el output sin multiplicar el tiempo de rodaje. Un solo registro en 360 alimenta el Reel vertical, el Short horizontal, el documental largo y el material panorámico para presentaciones de marca. Es la pieza que vuelve viable producir cincuenta y dos entregas semanales solo.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    workflow: {
      eyebrow: "Cómo lo voy a hacer",
      headline: "Del lente a la pantalla,\ncuatro etapas claras.",
      lead:
        "Las propuestas suelen quedarse en el qué. Esta página existe para mostrar el cómo. Para que sepas exactamente qué pasa entre el momento en que aterrizo en una provincia y el momento en que la pieza está publicada con métricas medibles.",
      steps: [
        {
          number: "01",
          title: "Pre-producción remota",
          body:
            "Antes de pisar la provincia, ya tengo el mapa de locaciones, los contactos locales que aporta la comunidad emergente, la estructura narrativa del episodio y la lista de planos clave. Llego con un guión vivo, no con una cámara apuntando al azar.",
        },
        {
          number: "02",
          title: "Captura multi cámara",
          body:
            "Cada locación se filma con las tres cámaras en orden estratégico. Primero el Mini 5 Pro para el establishing aéreo, después el Pocket 4 para la entrada humana y el documental, y al cierre el Osmo 360 para capturar el espacio completo y dejar abierta la reframeada posterior. Cinco horas promedio por locación.",
        },
        {
          number: "03",
          title: "Edición en ruta",
          body:
            "Misma noche, en la cabaña o el hostel, ingest del material en SSD externo, primera selección, color preset cargado y corte de las versiones cortas. La pieza vertical sale en cuarenta y ocho horas, las versiones largas en una semana. Toda la edición usa DJI LUT y mi color science consistente durante el año.",
        },
        {
          number: "04",
          title: "Publicación coordinada",
          body:
            "Cada entrega sale simultáneamente en Instagram Reels, YouTube Shorts y YouTube principal en formato horizontal, con copy localizado y subtítulos en inglés desde el día uno. Las métricas de cada pieza llegan al dashboard del equipo de DJI dentro de las setenta y dos horas siguientes.",
        },
      ],
    },

    route: {
      eyebrow: "El recorrido",
      headline: "Cuatro pilares\nque se repiten en cada provincia.",
      lead:
        "Una estructura narrativa consistente que da coherencia visual al año entero y que permite comparar provincia con provincia sin que el proyecto se vuelva fórmula. Cada parada del recorrido produce material para los cuatro pilares en simultáneo.",
      pillars: [
        {
          title: "Ruta",
          body:
            "La carretera como personaje. Las distancias largas, las paradas inesperadas, el ritmo de manejar ochocientos kilómetros entre dos locaciones. Material que rara vez genera un equipo grande, porque requiere estar solo.",
          image: "/images/route-ruta.jpg",
        },
        {
          title: "Naturaleza",
          body:
            "Patagonia, Litoral, Puna, Cuyo. Cuatro biomas radicalmente distintos en un país. Cada uno con su luz, su silencio y su forma particular de probar el equipo y al operador.",
          image: "/images/route-naturaleza.jpg",
        },
        {
          title: "Ciudad",
          body:
            "Capitales chicas, barrios de Buenos Aires, pueblos que se vacían en invierno. La cultura urbana argentina sin la mirada turística de catálogo, contada desde adentro.",
          image: "/images/route-ciudad.jpg",
        },
        {
          title: "Refugio",
          body:
            "Hostelería independiente, anfitriones que cocinan, vida minimalista en cabañas. El espacio íntimo donde la historia respira entre etapa y etapa, y donde aparece el mejor material humano del día.",
          image: "/images/route-refugio.jpg",
        },
      ],
    },

    formats: {
      eyebrow: "Los formatos en acción",
      headline: "Así se ve el contenido\nen las pantallas reales.",
      lead:
        "Cada locación produce cuatro piezas finales, una por plataforma, para que DJI esté presente donde su público objetivo realmente consume contenido. No mock ups en abstracto, simulaciones de cómo se verá cada formato en el feed real de tu audiencia.",
      quadrants: [
        {
          title: "Vertical, Reel de feed",
          tag: "Instagram · 15 a 60 segundos",
          body:
            "Hook visual en el primer segundo, ritmo de feed, un producto y un concepto por pieza. Pensado para el scroll del consumidor que ya vio cien videos antes de llegar al tuyo y necesita un motivo para detenerse.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
          device: "instagram-reel" as const,
        },
        {
          title: "Vertical, video largo",
          tag: "TikTok largo y YouTube Shorts · 3 a 8 minutos",
          body:
            "Tutorial paso a paso o mini documental en formato vertical, ya consolidado como puerta de entrada principal. Acá la propuesta profundiza sin que el espectador pierda el ritmo del scroll.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
          device: "instagram-reel" as const,
        },
        {
          title: "Horizontal, clip cinemático",
          tag: "YouTube y campañas · 30 a 90 segundos",
          body:
            "Ritmo cinemático lento, planos sostenidos, foco en atmósfera y estética. El formato bandera de las campañas de marca, el que abre presentaciones internas y cierra videos corporativos.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
          device: "youtube" as const,
        },
        {
          title: "Horizontal, documental",
          tag: "YouTube y eventos · 5 a 20 minutos",
          body:
            "Una provincia entera en formato episodio. Narrativa, personajes reales, ritmo documental. El formato que construye autoridad en YouTube y sirve para programación en eventos DJI o festivales aliados.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
          device: "youtube" as const,
        },
      ],
      mock: {
        instagram: {
          handle: "luissambrano_ux",
          location: "Argentina",
          caption: "Patagonia, hora azul. Mini 5 Pro + Osmo Pocket 4.",
          followLabel: "Seguir",
        },
        youtube: {
          channel: "Luis Sambrano",
          views: "248K vistas",
          time: "hace 2 días",
          title: "Una provincia, una sola toma. Filmado con DJI Osmo 360.",
        },
      },
    },

    collaboration: {
      eyebrow: "La colaboración que propongo",
      headline: "Un vínculo largo,\nno una campaña.",
      lead:
        "Lo que pongo sobre la mesa es la base para una relación que escala. Argentina es el primer capítulo y el experimento controlado. Si el primer ciclo funciona, la estructura se replica en Chile, Brasil, Colombia y México sin negociar de cero.",
      pillars: [
        {
          title: "Colaborador estable de LATAM",
          body:
            "Una voz constante para DJI en español durante años, no una colaboración puntual que termina y se olvida. Alguien a quien volver cuando el equipo de marketing necesita contenido auténtico desde Sudamérica sin levantar un brief desde cero.",
        },
        {
          title: "Embajador regional potencial",
          body:
            "Si el vínculo funciona, hay una conversación natural sobre representar a DJI como embajador regional. Presentaciones de producto, eventos creativos, charlas técnicas, campañas globales que necesiten una mirada latinoamericana auténtica.",
        },
        {
          title: "Presencia activa en eventos",
          body:
            "Disponibilidad confirmada para participar de los próximos eventos DJI en Argentina y la región. Activaciones, demos, presentaciones, lanzamientos. Donde la marca necesite presencia creativa con voz local, llego con cámara y guión.",
        },
        {
          title: "Amplificación global",
          body:
            "Cada pieza del proyecto está pensada también para audiencias internacionales. Subtítulos en inglés desde el día uno, material crudo disponible para los equipos de marketing globales, y cero costo extra para que la marca use cualquier pieza dentro de sus campañas internacionales.",
        },
      ],
      quote:
        "El equipo lo tiene cualquier creador. Lo que pongo de mi lado es el tiempo, la disponibilidad y la disciplina de quedarme doce meses ejecutando una sola idea.",
    },

    community: {
      eyebrow: "Lo que sumo más allá de mi cuenta",
      headline: "Una red de creadores\nemergentes locales.",
      lead:
        "El proyecto no termina en mí. Cada provincia activa una colaboración con un creador local emergente que también trabaja con el ecosistema DJI. Una pieza compartida abre dos audiencias y, al cabo del año, DJI tiene una red regional construida orgánicamente sin contrato pero con vínculo real.",
      metrics: [
        { value: "24", label: "Provincias en doce meses" },
        { value: "12+", label: "Creadores locales sumados" },
        { value: "52", label: "Piezas semanales entregadas" },
        { value: "3", label: "Documentales largos al cierre" },
      ],
    },

    cta: {
      eyebrow: "Próximo paso",
      headline: "Hablemos antes\nde fin de mes.",
      sub:
        "Pre-producción puede arrancar dentro de las dos semanas siguientes a la primera reunión, y la primera pieza estaría publicada dentro de las cuatro semanas siguientes a la firma. Si la propuesta te suena, una llamada corta alcanza para empezar.",
      primary: { label: "Escribir un mail", href: contact.mailtoEs },
      ghost: {
        label: "Instagram @luissambrano_ux",
        href: instagramUrl,
      },
    },

    footer: {
      tagline: "Argentina · Proyecto nómada 2026",
      columns: [
        {
          heading: "Propuesta",
          links: [
            { label: "La propuesta", href: "#propuesta" },
            { label: "Por qué este creador", href: "#creador" },
            { label: "Por qué este equipo", href: "#equipo" },
            { label: "Cómo lo voy a hacer", href: "#flujo" },
            { label: "El recorrido", href: "#recorrido" },
            { label: "Los formatos", href: "#formatos" },
            { label: "La colaboración", href: "#colaboracion" },
          ],
        },
        {
          heading: "Creador",
          links: [
            { label: "Email", href: contact.mailtoEs },
            { label: "Instagram", href: instagramUrl },
            { label: "GitHub", href: "https://github.com/LuisSambrano" },
            { label: "Pitch reel (30 s)", href: "/videos/dji-pitch-reel.mp4" },
          ],
        },
        {
          heading: "Productos referenciados",
          links: [
            { label: "DJI Mini 5 Pro", href: "https://www.dji.com/mini-5-pro" },
            { label: "Osmo Pocket 4", href: "https://www.dji.com/osmo-pocket-4" },
            { label: "Osmo 360", href: "https://www.dji.com/360" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Términos y privacidad", href: "/legal" },
          ],
        },
      ],
      legal:
        "Propuesta independiente de colaboración. DJI™ es una marca registrada de SZ DJI Technology Co., Ltd. Las imágenes de producto provienen del CDN oficial público de DJI y se usan únicamente con fines de presentación dentro de esta aplicación de colaboración. Este sitio existe únicamente para presentar la aplicación de Luis Sambrano y será eliminado al finalizar el proceso de evaluación.",
      signature: "Luis Sambrano · Argentina · 2026",
    },

    legal: {
      eyebrow: "Términos y privacidad",
      title: "Sobre este sitio.",
      intro:
        "Esta landing existe con un único propósito y conviene dejarlo escrito antes de cualquier otra cosa. La idea de esta página es presentar formalmente la aplicación de Luis Sambrano para colaborar con DJI durante 2026, y nada más. No es un sitio comercial, no es un blog y no recolecta datos.",
      sections: [
        {
          heading: "Propósito",
          body:
            "Esta página es exclusivamente material de presentación dirigido al equipo de marketing de DJI Argentina, DJI LATAM y DJI Global. Funciona como portfolio extendido y carta de intención al mismo tiempo. No está pensada para audiencias masivas ni para promocionarse fuera del ámbito de esta evaluación.",
        },
        {
          heading: "Datos personales",
          body:
            "El sitio no recolecta, almacena ni transmite información personal de quien lo visita. No hay formularios, no hay analytics intrusivos, no hay cookies de seguimiento ni píxeles publicitarios. Las únicas interacciones posibles son hacer clic en enlaces externos hacia el email del autor, su Instagram o el sitio oficial de DJI.",
        },
        {
          heading: "Vigencia del sitio",
          body:
            "Esta página estará disponible mientras dure el proceso de evaluación de la propuesta. Una vez finalizado, ya sea con un acuerdo firmado o con la decisión de no avanzar, el sitio será eliminado del hosting en un plazo de treinta días. Esa eliminación incluye el contenido público y todos los archivos asociados.",
        },
        {
          heading: "Propiedad intelectual",
          body:
            "Los textos, la estructura y el concepto creativo de la propuesta pertenecen a Luis Sambrano. Los nombres y logos de DJI, así como las imágenes de producto, son propiedad de SZ DJI Technology Co., Ltd. y se utilizan acá únicamente con fines de presentación dentro de esta aplicación de colaboración. Las imágenes de paisajes son placeholders bajo licencia Creative Commons o de uso libre.",
        },
        {
          heading: "Contacto",
          body:
            "Cualquier consulta sobre este sitio, su contenido o su eliminación se canaliza directamente por mail a luissambranoarg@gmail.com.",
        },
      ],
      updated: "Última actualización: mayo de 2026.",
      backLabel: "Volver al inicio",
    },
  },

  en: {
    nav: {
      brand: "Luis Sambrano",
      brandTag: "Argentina",
      cta: "Write me",
      menuLabel: "Sections",
      sectionTitle: "DJI Proposal",
      sectionMeta: "Argentina · 2026",
      sectionCta: "Start the conversation",
      links: [
        { href: "#propuesta", label: "The proposal" },
        { href: "#creador", label: "Why this creator" },
        { href: "#equipo", label: "Why this gear" },
        { href: "#flujo", label: "How I will do it" },
        { href: "#recorrido", label: "The journey" },
        { href: "#formatos", label: "Formats in action" },
        { href: "#colaboracion", label: "The collaboration" },
        { href: "#contacto", label: "Let's talk" },
      ],
    },

    hero: {
      eyebrow: "Proposal for DJI LATAM · 2026",
      headline: "All of Argentina,\nnarrated in twelve months.",
      sub:
        "I am Luis Sambrano and this page exists for one specific person, you, the marketing decision maker evaluating which creators DJI works with across the region. What follows is why pick me, how I understand your ecosystem, and how I plan to execute this collaboration end to end.",
      ctaPrimary: { label: "See the proposal", href: "#propuesta" },
      ctaGhost: { label: "Write me", href: contact.mailtoEn },
      videoAlt: "Cinematic landscape of Argentina at dawn",
    },

    proposal: {
      eyebrow: "The proposal in one line",
      headline: "Twelve months traveling\nthe twenty four provinces\nwith your ecosystem in hand.",
      lead:
        "One single long form collaboration, not a short campaign. Fifty two weekly pieces for vertical and horizontal feeds, twelve monthly mini documentaries and three long form documentaries by year end. Everything captured with DJI Mini 5 Pro, Osmo Pocket 4 and Osmo 360, edited on the road and published consistently under one creative voice. An operation designed to scale across LATAM after the first cycle.",
    },

    whyCreator: {
      eyebrow: "Why this creator",
      headline: "I don't have a million\nfollowers, not yet.\nThat is the opportunity.",
      lead:
        "An established creator brings their audience already built, their aesthetic already set and a full calendar. An emerging creator like me brings the opposite, and that is exactly what this collaboration needs: dedicated time, willingness to shape the voice alongside the brand, exclusivity commitment and real hunger to produce. You will not be competing with other brands for my attention.",
      points: [
        {
          title: "Hunger and availability",
          body:
            "I am available for the next twelve months with no parallel agenda. When DJI requests an event, an activation or a quick turnaround, I show up with time and gear ready. A creator with one hundred other clients can not match that flexibility.",
        },
        {
          title: "Voice still forming, not imposed",
          body:
            "My aesthetic is still being defined. That means it can absorb DJI's visual code, the cinematic and the accessible, without fighting against a fully crystallized personal brand. I grow in the direction this collaboration needs.",
        },
        {
          title: "Exclusivity commitment",
          body:
            "For the duration of this project, I will not take collaborations with competing brands in drones, gimbals or 360 cameras. Everything I publish in twelve months features DJI or this proposal directly. One single loyalty, easy to audit.",
        },
        {
          title: "Open documentation",
          body:
            "Every creative decision, every shot, every province visited and every publishing metric lives in a shared dashboard with DJI's team. Monthly reports with delivered pieces, accumulated reach, cost per delivery and next steps. A measurable collaboration, not an act of faith.",
        },
      ],
    },

    ecosystem: {
      eyebrow: "Why this gear, not any other",
      headline: "I chose these three products\nfor concrete workflow reasons.",
      lead:
        "I did not pick them by name or by catalog. I picked them because each one solves a different operational problem in this project, and together they cover every capture situation I will face traveling solo for a year. This is the logic behind every selection.",
      cards: [
        {
          name: "DJI Mini 5 Pro",
          role: "The aerial that travels alone",
          body:
            "I picked it because it weighs less than any other option with a one inch sensor, and that lets me travel without commercial permits across most of Argentina. In practice, every province opens with an aerial shot captured by me alone, no additional operator and no support gear inflating the collaboration's budget.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "The gimbal that replaces the crew",
          body:
            "I picked it because it removes the operator from the equation. Alone on the road, in a hostel kitchen at eleven at night, I can not set up a crew. The Pocket 4 gives me stabilized cinematography in one hand, with LiDAR autofocus that keeps the human subject sharp without an assistant. All the documentary material of the project lives here.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "One capture, five formats",
          body:
            "I picked it because it is the piece that multiplies output without multiplying shooting time. One single 360 capture feeds the vertical Reel, the horizontal Short, the long documentary and the panoramic material for brand presentations. It is what makes producing fifty two weekly deliveries possible while traveling alone.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    workflow: {
      eyebrow: "How I will do it",
      headline: "From lens to screen,\nfour clear stages.",
      lead:
        "Most proposals stop at the what. This page exists to show the how. So that you know exactly what happens between the moment I land in a province and the moment the piece is published with measurable metrics.",
      steps: [
        {
          number: "01",
          title: "Remote pre production",
          body:
            "Before setting foot in a province, I already have the location map, the local contacts brought in by the emerging community network, the narrative structure of the episode and the key shot list. I arrive with a living script, not a camera pointing at random.",
        },
        {
          number: "02",
          title: "Multi camera capture",
          body:
            "Every location is filmed with the three cameras in strategic order. First the Mini 5 Pro for the aerial establishing, then the Pocket 4 for the human entry and documentary, and at closing the Osmo 360 to capture the full space and leave reframing open. Five hours average per location.",
        },
        {
          number: "03",
          title: "On the road editing",
          body:
            "Same night, in the cabin or the hostel, ingest into external SSD, first selection, color preset loaded and short version cut. The vertical piece is out in forty eight hours, long form versions within a week. Every edit uses the DJI LUT and my consistent color science across the whole year.",
        },
        {
          number: "04",
          title: "Coordinated publishing",
          body:
            "Every release goes out simultaneously on Instagram Reels, YouTube Shorts and main YouTube in horizontal format, with localized copy and English subtitles from day one. Each piece's metrics reach the DJI team dashboard within seventy two hours of going live.",
        },
      ],
    },

    route: {
      eyebrow: "The journey",
      headline: "Four pillars\nthat repeat in every province.",
      lead:
        "A consistent narrative structure that gives visual coherence to the whole year and makes provinces comparable without turning the project into a formula. Every stop produces material for the four pillars simultaneously.",
      pillars: [
        {
          title: "Road",
          body:
            "The road as character. The long distances, the unexpected stops, the rhythm of driving eight hundred kilometers between two locations. Material a big crew rarely captures, because it requires being alone.",
          image: "/images/route-ruta.jpg",
        },
        {
          title: "Nature",
          body:
            "Patagonia, Northeast wetlands, Andean Puna, Cuyo foothills. Four radically different biomes in one country. Each with its own light, silence and particular way of testing both the gear and the operator.",
          image: "/images/route-naturaleza.jpg",
        },
        {
          title: "City",
          body:
            "Smaller capitals, Buenos Aires neighborhoods, towns that empty out in winter. Argentine urban culture free of the tourist postcard gaze, told from the inside.",
          image: "/images/route-ciudad.jpg",
        },
        {
          title: "Refuge",
          body:
            "Independent lodging, hosts who cook, minimalist life in cabins. The intimate space where the story breathes between legs, and where the best human material of the day usually shows up.",
          image: "/images/route-refugio.jpg",
        },
      ],
    },

    formats: {
      eyebrow: "Formats in action",
      headline: "This is how the content\nlooks on real screens.",
      lead:
        "Every location produces four final pieces, one per platform, so DJI shows up where its target audience actually consumes content. Not abstract mockups, simulations of how each format looks in the real feed of your audience.",
      quadrants: [
        {
          title: "Vertical, feed Reel",
          tag: "Instagram · 15 to 60 seconds",
          body:
            "Visual hook in the first second, feed pacing, one product and one concept per piece. Built for the scroll of a viewer who has already seen one hundred videos before reaching yours and needs a reason to pause.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
          device: "instagram-reel" as const,
        },
        {
          title: "Vertical, long form",
          tag: "Long TikTok and YouTube Shorts · 3 to 8 minutes",
          body:
            "Step by step tutorial or mini documentary in vertical, already consolidated as the primary entry door. Here the proposal goes deeper without the viewer losing the scroll rhythm.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
          device: "instagram-reel" as const,
        },
        {
          title: "Horizontal, cinematic clip",
          tag: "YouTube and campaigns · 30 to 90 seconds",
          body:
            "Slow cinematic pacing, sustained shots, focus on atmosphere and aesthetics. The flagship campaign format, the one that opens internal presentations and closes corporate videos.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
          device: "youtube" as const,
        },
        {
          title: "Horizontal, documentary",
          tag: "YouTube and events · 5 to 20 minutes",
          body:
            "An entire province in episode format. Narrative arc, real characters, documentary pacing. The format that builds YouTube authority and serves for programming at DJI events or partnered festivals.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
          device: "youtube" as const,
        },
      ],
      mock: {
        instagram: {
          handle: "luissambrano_ux",
          location: "Argentina",
          caption: "Patagonia, blue hour. Mini 5 Pro + Osmo Pocket 4.",
          followLabel: "Follow",
        },
        youtube: {
          channel: "Luis Sambrano",
          views: "248K views",
          time: "2 days ago",
          title: "One province, one single take. Shot on DJI Osmo 360.",
        },
      },
    },

    collaboration: {
      eyebrow: "The collaboration I am proposing",
      headline: "A long bond,\nnot a campaign.",
      lead:
        "What I am putting on the table is the foundation of a scalable relationship. Argentina is the first chapter and the controlled experiment. If the first cycle works, the structure replicates in Chile, Brazil, Colombia and Mexico without negotiating from zero.",
      pillars: [
        {
          title: "LATAM long term collaborator",
          body:
            "A steady voice for DJI in Spanish for years, not a one off collaboration that ends and is forgotten. Someone the marketing team comes back to when they need authentic South American content without writing a brief from scratch.",
        },
        {
          title: "Regional ambassador potential",
          body:
            "If the bond works, the conversation about representing DJI as a regional ambassador is natural. Product presentations, creative events, technical talks, global campaigns that need an authentic Latin American eye.",
        },
        {
          title: "Active event presence",
          body:
            "Confirmed availability for upcoming DJI events across Argentina and the region. Activations, demos, presentations, launches. Wherever the brand needs creative presence with local voice, I show up with gear and script.",
        },
        {
          title: "Global amplification",
          body:
            "Every piece is conceived with international audiences in mind. English subtitles from day one, raw material available to global marketing teams, and zero extra cost for the brand to use any piece in international campaigns.",
        },
      ],
      quote:
        "Anyone can buy the gear. What I bring is the time, the availability and the discipline of staying twelve months executing one single idea.",
    },

    community: {
      eyebrow: "What I add beyond my own channel",
      headline: "A network of emerging\nlocal creators.",
      lead:
        "The project does not end with me. Every province activates a collaboration with a local emerging creator who also works with the DJI ecosystem. One shared piece opens two audiences and, by year end, DJI has an organically built regional network of allies, no contracts but real bonds.",
      metrics: [
        { value: "24", label: "Provinces in twelve months" },
        { value: "12+", label: "Local creators onboarded" },
        { value: "52", label: "Weekly pieces delivered" },
        { value: "3", label: "Long documentaries by year end" },
      ],
    },

    cta: {
      eyebrow: "Next step",
      headline: "Let's talk\nbefore the month ends.",
      sub:
        "Pre production can start within two weeks of the first meeting, and the first piece would be live within four weeks of signing. If the proposal makes sense, a short call is enough to begin.",
      primary: { label: "Send an email", href: contact.mailtoEn },
      ghost: {
        label: "Instagram @luissambrano_ux",
        href: instagramUrl,
      },
    },

    footer: {
      tagline: "Argentina · Nomadic project 2026",
      columns: [
        {
          heading: "Proposal",
          links: [
            { label: "The proposal", href: "#propuesta" },
            { label: "Why this creator", href: "#creador" },
            { label: "Why this gear", href: "#equipo" },
            { label: "How I will do it", href: "#flujo" },
            { label: "The journey", href: "#recorrido" },
            { label: "Formats", href: "#formatos" },
            { label: "The collaboration", href: "#colaboracion" },
          ],
        },
        {
          heading: "Creator",
          links: [
            { label: "Email", href: contact.mailtoEn },
            { label: "Instagram", href: instagramUrl },
            { label: "GitHub", href: "https://github.com/LuisSambrano" },
            { label: "Pitch reel (30 s)", href: "/videos/dji-pitch-reel.mp4" },
          ],
        },
        {
          heading: "Referenced products",
          links: [
            { label: "DJI Mini 5 Pro", href: "https://www.dji.com/mini-5-pro" },
            { label: "Osmo Pocket 4", href: "https://www.dji.com/osmo-pocket-4" },
            { label: "Osmo 360", href: "https://www.dji.com/360" },
          ],
        },
        {
          heading: "Legal",
          links: [
            { label: "Terms and privacy", href: "/legal" },
          ],
        },
      ],
      legal:
        "Independent collaboration proposal. DJI™ is a registered trademark of SZ DJI Technology Co., Ltd. Product imagery comes from DJI's public CDN and is used solely for presentation purposes within this collaboration application. This site exists only to present Luis Sambrano's application and will be deleted once the evaluation process is complete.",
      signature: "Luis Sambrano · Argentina · 2026",
    },

    legal: {
      eyebrow: "Terms and privacy",
      title: "About this site.",
      intro:
        "This landing exists for one specific purpose and it is worth saying so up front. The whole point of this page is to formally present Luis Sambrano's application to collaborate with DJI during 2026, and nothing else. It is not a commercial site, it is not a blog and it does not collect any data.",
      sections: [
        {
          heading: "Purpose",
          body:
            "This page is presentation material aimed at the marketing teams of DJI Argentina, DJI LATAM and DJI Global. It works as both an extended portfolio and a letter of intent at the same time. It is not intended for mass audiences and it is not promoted outside the scope of this evaluation.",
        },
        {
          heading: "Personal data",
          body:
            "The site does not collect, store or transmit any personal information from its visitors. There are no forms, no intrusive analytics, no tracking cookies and no advertising pixels. The only possible interactions are clicking external links to the author's email, Instagram or the official DJI site.",
        },
        {
          heading: "Site lifespan",
          body:
            "This page will be available for as long as the evaluation of the proposal lasts. Once the process ends, whether with a signed agreement or with a decision not to move forward, the site will be removed from hosting within thirty days. That removal includes the public content and all associated files.",
        },
        {
          heading: "Intellectual property",
          body:
            "The texts, the structure and the creative concept of the proposal belong to Luis Sambrano. The DJI names and logos, as well as the product imagery, are property of SZ DJI Technology Co., Ltd. and are used here solely for presentation purposes within this collaboration application. Landscape photographs are placeholders under Creative Commons or royalty free licenses.",
        },
        {
          heading: "Contact",
          body:
            "Any question about this site, its content or its removal is handled directly by email to luissambranoarg@gmail.com.",
        },
      ],
      updated: "Last updated: May 2026.",
      backLabel: "Back to the start",
    },
  },
} as const;

export type Content = (typeof content)["es"];
