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
      headline: "Doce meses recorriendo\nArgentina con tu ecosistema\nen mano.",
      lead:
        "Una sola colaboración de largo aliento, no una campaña corta. Una pieza por semana durante doce meses, cincuenta y dos en total, repartidas entre feeds verticales y horizontales. Un mini documental mensual al cierre de cada provincia, doce en total. Y tres documentales largos al cierre del año. Todo capturado con DJI Mini 5 Pro, Osmo Pocket 4 y Osmo 360, editado en ruta y publicado bajo una sola voz creativa.",
    },

    whyCreator: {
      eyebrow: "Por qué este creador",
      headline: "No tengo un millón\nde seguidores, todavía.\nEsa es la oportunidad.",
      lead:
        "Un creador establecido viene con su audiencia construida, su estética cerrada y agenda llena. Un creador emergente como yo trae lo opuesto, y eso es exactamente lo que esta colaboración necesita: tiempo dedicado, disposición a moldear la voz junto con la marca, y hambre real de producir.",
      points: [
        {
          title: "Hambre y disponibilidad",
          body:
            "Estoy disponible los próximos doce meses sin agenda paralela. Cuando haga falta un evento, una activación o una entrega rápida, hay tiempo y cámara lista. Esa disponibilidad es difícil de garantizar para un creador con muchos clientes encima.",
        },
        {
          title: "Voz en formación",
          body:
            "Mi estética todavía se está definiendo. Eso me deja conversar con el estilo de DJI, lo cinematográfico y lo accesible, sin pelear con una identidad personal ya cristalizada. Hay espacio para construir una voz que sume al lenguaje de la marca.",
        },
        {
          title: "Exclusividad simple",
          body:
            "Por la duración del proyecto no tomo colaboraciones con marcas competidoras de drones, gimbales o cámaras 360. Es un compromiso simple que limpia conflictos antes de que aparezcan.",
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
            "Lo elegí porque es el único drone consumer con sensor de una pulgada que entra dentro de los 250 gramos, lo que simplifica registro y traslado en cabina entre provincias. El sistema O4 Plus me da transmisión estable a larga distancia incluso en zonas con interferencia, y los 4K a 120 fotogramas por segundo cubren tanto el plano cinemático lento como el slow motion sin cambiar de equipo. Cada provincia abre con un plano aéreo capturado solo, sin operador adicional ni equipo de soporte que infle el presupuesto.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "El gimbal que reemplaza al equipo",
          body:
            "Lo elegí porque elimina la figura del operador. Solo en ruta, en una cocina de hostel a las once de la noche, no puedo armar un set. El sensor de una pulgada con catorce stops de rango dinámico y diez bits D-Log me da material que aguanta corrección de color sin perder detalle, y el seguimiento ActiveTrack 7.0 mantiene al sujeto humano centrado mientras yo cocino, pregunto o filmo. Acá vive todo el material documental del proyecto.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "Una captura, varios formatos",
          body:
            "Lo elegí porque es la pieza que multiplica el material sin multiplicar el tiempo de rodaje. Un solo registro panorámico en 8K alimenta después el Reel vertical, el clip horizontal y el panorama para presentaciones de marca, todo reframeado en edición y no en cámara. La protección IP68 y RockSteady 3.0 me dan cobertura en lluvia, viento patagónico y trekkings largos sin pensar en el equipo.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    workflow: {
      eyebrow: "Cómo lo voy a hacer",
      headline: "Del lente a la pantalla,\ncuatro etapas claras.",
      lead:
        "Las propuestas suelen quedarse en el qué. Esta página existe para mostrar el cómo. Para que sepas exactamente qué pasa entre el momento en que aterrizo en una provincia y el momento en que la pieza está publicada.",
      steps: [
        {
          number: "01",
          title: "Pre-producción remota",
          body:
            "Antes de pisar la provincia trabajo el mapa de locaciones, abro contactos iniciales con anfitriones y guías de la zona, defino la estructura narrativa del episodio y armo la lista de planos clave. Llego con un guión vivo, no con una cámara apuntando al azar.",
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
            "Misma noche, en la cabaña o el hostel, ingest del material en SSD externo, primera selección y corte de las versiones cortas. Las piezas verticales son las que arrancan el ciclo de publicación, las versiones largas siguen unos días después. Toda la edición parte de los perfiles D-Log M y D-Log de DJI para mantener color consistente entre las tres cámaras y a lo largo de los doce meses del proyecto.",
        },
        {
          number: "04",
          title: "Publicación coordinada",
          body:
            "Cada entrega sale simultáneamente en Instagram Reels, YouTube Shorts y YouTube principal en formato horizontal. Copy localizado para cada plataforma y subtítulos en inglés desde el día uno, para que el contenido funcione tanto en el feed latino como en una campaña global de la marca.",
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
          title: "Reel para Instagram",
          tag: "Vertical · 15 a 60 segundos",
          body:
            "El formato del scroll. Un solo concepto por pieza, primer segundo decisivo, edición rápida. Acá vive el contenido que abre puertas hacia las versiones más largas.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
          device: "instagram-reel" as const,
          mock: {
            location: "Buenos Aires, Argentina",
            caption:
              "La 9 de Julio a las seis de la mañana, antes de que aparezca el primer colectivo. Es la única hora en que esta avenida se ve corta.",
          },
        },
        {
          title: "Short para YouTube",
          tag: "Vertical · hasta 60 segundos",
          body:
            "Mismo formato vertical, audiencia distinta. YouTube Shorts retiene mejor a quien busca aprender, así que estas piezas funcionan como puerta de entrada a las versiones largas del mismo episodio en el canal principal.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
          device: "youtube-shorts" as const,
          mock: {
            title: "Cómo conseguí cabaña sin reserva en plena temporada alta",
          },
        },
        {
          title: "Clip cinemático horizontal",
          tag: "YouTube y campañas · 30 a 90 segundos",
          body:
            "Ritmo lento, planos sostenidos, foco en atmósfera. El formato que abre presentaciones internas, pesa en propuestas comerciales y sostiene la estética de marca en cualquier pantalla grande.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
          device: "macbook" as const,
          mock: {
            title:
              "Veinte minutos de luz al final de cada día | Cordillera, Argentina",
            shortTitle: "Veinte minutos de luz al final de cada día",
            views: "48 mil vistas",
            time: "hace 4 días",
          },
        },
        {
          title: "Documental horizontal",
          tag: "YouTube principal · 8 a 15 minutos",
          body:
            "Una provincia en formato episodio. Narrativa, personajes reales, ritmo documental. El formato que construye autoridad sostenida en YouTube y que puede programarse en eventos o festivales aliados.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
          device: "macbook" as const,
          mock: {
            title:
              "Tres mil kilómetros en una sola provincia | Patagonia, Argentina",
            shortTitle: "Tres mil kilómetros en una sola provincia",
            views: "112 mil vistas",
            time: "hace 2 semanas",
          },
        },
      ],
      mock: {
        instagramHandle: "luissambrano_ux",
        instagramFollowLabel: "Seguir",
        youtubeShortsChannel: "Luis Sambrano",
        youtubeShortsSubscribers: "2,4 mil suscriptores",
        youtubeChannel: "Luis Sambrano",
        youtubeSubscribers: "8,7 mil suscriptores",
      },
    },

    collaboration: {
      eyebrow: "La colaboración que propongo",
      headline: "Un vínculo largo,\nno una campaña.",
      lead:
        "Lo que pongo sobre la mesa es la base para algo que puede crecer en el tiempo. Argentina es el primer capítulo y se sostiene por sí solo. Lo que venga después es una conversación que tiene sentido recién cuando este ciclo esté en pie.",
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
          title: "Presencia abierta para eventos",
          body:
            "Disponibilidad abierta para sumarse a eventos DJI en Argentina y la región cuando tenga sentido. Activaciones, demos, presentaciones, lanzamientos. Donde la marca quiera presencia creativa con voz local, llego con cámara y guión.",
        },
        {
          title: "Amplificación global",
          body:
            "Cada pieza del proyecto está pensada también para audiencias internacionales. Subtítulos en inglés desde el día uno y libertad para que la marca reutilice cualquier pieza terminada dentro de sus campañas globales, sin costo adicional ni renegociación de derechos.",
        },
      ],
      quote:
        "El equipo lo tiene cualquier creador. Lo que pongo de mi lado es el tiempo, la disponibilidad y la disciplina de quedarme doce meses ejecutando una sola idea.",
    },

    community: {
      eyebrow: "Lo que sumo más allá de mi cuenta",
      headline: "Donde tiene sentido,\nsumo creadores locales.",
      lead:
        "Donde se da naturalmente, cada provincia suma una colaboración con un creador local emergente que también trabaja con el ecosistema DJI. Una pieza compartida abre dos audiencias y va dejando una pequeña red regional construida orgánicamente. Es un bonus del proyecto, no un compromiso fijo.",
      metrics: [
        { value: "24", label: "Provincias en doce meses" },
        { value: "12", label: "Mini documentales mensuales" },
        { value: "52", label: "Piezas en doce meses, una por semana" },
        { value: "3", label: "Documentales largos al cierre" },
      ],
    },

    cta: {
      eyebrow: "Próximo paso",
      headline: "Hablemos cuando\ntenga sentido para vos.",
      sub:
        "Pre-producción se puede arrancar al poco tiempo de la primera reunión, y la primera pieza puede estar publicada poco después de cerrar la colaboración. Si la propuesta te suena, una llamada corta alcanza para empezar a conversar los detalles.",
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
      headline: "Twelve months traveling\nArgentina with your ecosystem\nin hand.",
      lead:
        "One single long form collaboration, not a short campaign. One piece per week for twelve months, fifty two in total, split across vertical and horizontal feeds. One mini documentary at the close of each province, twelve in total. And three long documentaries by year end. Everything captured with DJI Mini 5 Pro, Osmo Pocket 4 and Osmo 360, edited on the road and published under one creative voice.",
    },

    whyCreator: {
      eyebrow: "Why this creator",
      headline: "I don't have a million\nfollowers, not yet.\nThat is the opportunity.",
      lead:
        "An established creator brings their audience already built, their aesthetic already set and a full calendar. An emerging creator like me brings the opposite, and that is exactly what this collaboration needs: dedicated time, willingness to shape the voice alongside the brand, and real hunger to produce.",
      points: [
        {
          title: "Hunger and availability",
          body:
            "I am available for the next twelve months with no parallel agenda. When an event, an activation or a quick turnaround comes up, there is time and gear ready. That kind of availability is hard to guarantee for a creator with many other clients.",
        },
        {
          title: "Voice still forming",
          body:
            "My aesthetic is still being defined. That lets me converse with DJI's visual language, the cinematic and the accessible, without fighting against a personal brand that is already crystallized. There is room to build a voice that adds to the brand's vocabulary.",
        },
        {
          title: "Simple exclusivity",
          body:
            "For the duration of the project, I will not take collaborations with competing brands in drones, gimbals or 360 cameras. It is a simple commitment that clears conflicts before they appear.",
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
            "I picked it because it is the only consumer drone with a one inch sensor that comes in under 250 grams, which simplifies registration and cabin travel between provinces. The O4 Plus system gives me stable long range transmission even in interference-heavy areas, and 4K at 120 frames per second covers both the slow cinematic shot and slow motion without swapping gear. Every province opens with an aerial shot captured solo, no extra operator and no support crew inflating the collaboration's budget.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "The gimbal that replaces the crew",
          body:
            "I picked it because it removes the operator from the equation. Alone on the road, in a hostel kitchen at eleven at night, I can not set up a crew. The one inch sensor with fourteen stops of dynamic range and 10-bit D-Log gives me footage that survives heavy color grading without losing detail, and ActiveTrack 7.0 keeps the human subject centered while I cook, ask questions or film. All the documentary material of the project lives here.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "One capture, multiple formats",
          body:
            "I picked it because it is the piece that multiplies material without multiplying shooting time. One single 8K panoramic capture later feeds the vertical Reel, the horizontal clip and the panoramic material for brand presentations, all reframed in editing rather than on camera. IP68 protection and RockSteady 3.0 give me coverage in rain, Patagonian wind and long hikes without worrying about the gear.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    workflow: {
      eyebrow: "How I will do it",
      headline: "From lens to screen,\nfour clear stages.",
      lead:
        "Most proposals stop at the what. This page exists to show the how. So that you know exactly what happens between the moment I land in a province and the moment the piece is published.",
      steps: [
        {
          number: "01",
          title: "Remote pre production",
          body:
            "Before setting foot in a province I work the location map, open initial contacts with local hosts and guides, define the narrative structure of the episode and build the key shot list. I arrive with a living script, not a camera pointing at random.",
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
            "Same night, in the cabin or the hostel, ingest into external SSD, first selection and short version cut. The vertical pieces start the publishing cycle, the long versions follow a few days later. Every edit starts from DJI's D-Log M and D-Log color profiles to keep color consistent across the three cameras and across the twelve months of the project.",
        },
        {
          number: "04",
          title: "Coordinated publishing",
          body:
            "Every release goes out simultaneously on Instagram Reels, YouTube Shorts and main YouTube in horizontal format. Localized copy for each platform and English subtitles from day one, so the content works both in the Latin feed and in a global brand campaign.",
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
          title: "Instagram Reel",
          tag: "Vertical · 15 to 60 seconds",
          body:
            "The scroll format. One single concept per piece, decisive first second, tight cutting. This is where the content that opens the door to longer versions lives.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
          device: "instagram-reel" as const,
          mock: {
            location: "Buenos Aires, Argentina",
            caption:
              "Avenida 9 de Julio at six in the morning, before the first bus shows up. The only hour the widest avenue in the world looks short.",
          },
        },
        {
          title: "YouTube Short",
          tag: "Vertical · up to 60 seconds",
          body:
            "Same vertical format, different audience. YouTube Shorts holds learners better, so these pieces work as entry points to the long versions of the same episode on the main channel.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
          device: "youtube-shorts" as const,
          mock: {
            title: "How I found this cabin with no booking in peak season",
          },
        },
        {
          title: "Horizontal cinematic clip",
          tag: "YouTube and campaigns · 30 to 90 seconds",
          body:
            "Slow pacing, sustained shots, focus on atmosphere. The format that opens internal presentations, weights commercial proposals and sustains the brand aesthetic on any larger screen.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
          device: "macbook" as const,
          mock: {
            title: "Twenty minutes of light at the end of every day | Andes, Argentina",
            shortTitle: "Twenty minutes of light at the end of every day",
            views: "48K views",
            time: "4 days ago",
          },
        },
        {
          title: "Horizontal documentary",
          tag: "Main YouTube · 8 to 15 minutes",
          body:
            "A province in episode format. Narrative arc, real characters, documentary pacing. The format that builds sustained YouTube authority and can be programmed at events or partnered festivals.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
          device: "macbook" as const,
          mock: {
            title: "Three thousand kilometers in one single province | Patagonia, Argentina",
            shortTitle: "Three thousand kilometers in one single province",
            views: "112K views",
            time: "2 weeks ago",
          },
        },
      ],
      mock: {
        instagramHandle: "luissambrano_ux",
        instagramFollowLabel: "Follow",
        youtubeShortsChannel: "Luis Sambrano",
        youtubeShortsSubscribers: "2.4K subscribers",
        youtubeChannel: "Luis Sambrano",
        youtubeSubscribers: "8.7K subscribers",
      },
    },

    collaboration: {
      eyebrow: "The collaboration I am proposing",
      headline: "A long bond,\nnot a campaign.",
      lead:
        "What I am putting on the table is the foundation for something that can grow over time. Argentina is the first chapter and stands on its own. What comes after is a conversation that only makes sense once this cycle is up and running.",
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
          title: "Open availability for events",
          body:
            "Open availability to join DJI events across Argentina and the region whenever it makes sense. Activations, demos, presentations, launches. Wherever the brand wants creative presence with a local voice, I show up with gear and script.",
        },
        {
          title: "Global amplification",
          body:
            "Every piece is conceived with international audiences in mind. English subtitles from day one and full freedom for the brand to reuse any finished piece in its global campaigns, with no extra cost and no rights renegotiation.",
        },
      ],
      quote:
        "Anyone can buy the gear. What I bring is the time, the availability and the discipline of staying twelve months executing one single idea.",
    },

    community: {
      eyebrow: "What I add beyond my own channel",
      headline: "Where it makes sense,\nI bring in local creators.",
      lead:
        "Where it happens naturally, each province adds a collaboration with a local emerging creator who also works with the DJI ecosystem. One shared piece opens two audiences and slowly leaves a small regional network built organically. It is a bonus from the project, not a fixed commitment.",
      metrics: [
        { value: "24", label: "Provinces in twelve months" },
        { value: "12", label: "Monthly mini documentaries" },
        { value: "52", label: "Pieces in twelve months, one per week" },
        { value: "3", label: "Long documentaries by year end" },
      ],
    },

    cta: {
      eyebrow: "Next step",
      headline: "Let's talk when\nit makes sense for you.",
      sub:
        "Pre production can start shortly after the first meeting, and the first piece can go live shortly after closing the collaboration. If the proposal makes sense, a short call is enough to start the conversation about the details.",
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
