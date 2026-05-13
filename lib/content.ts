/**
 * Toda la copy de la landing, en español rioplatense y en inglés.
 *
 * Reglas de tono que cumple este archivo:
 *  - Sin guiones largos ni cortos usados como aposición o separador retórico.
 *    Se reemplazan por comas, conjunciones u oraciones completas.
 *  - Texto narrativo y conectivo. Cada bloque cuenta una parte de la historia
 *    y prepara la siguiente, no son enunciados sueltos.
 *  - Los headlines pueden tener saltos de línea con \n para respiración visual,
 *    pero deben sonar como frases naturales, no como slogans cortados.
 *
 * Para agregar o cambiar contenido, editar acá. Los tiles leen `content[locale]`
 * a través del hook useLocale.
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
  mailtoEs: mailto("Propuesta DJI Argentina"),
  mailtoEn: mailto("DJI Argentina Proposal"),
};

export const content = {
  es: {
    nav: {
      brand: "Luis Sambrano",
      brandTag: "Argentina",
      cta: "Escribir",
      sectionTitle: "Propuesta DJI",
      sectionMeta: "Argentina · 2026",
      sectionCta: "Iniciar colaboración",
      links: [
        { href: "#concepto", label: "Concepto" },
        { href: "#audiencia", label: "Para quién" },
        { href: "#ecosistema", label: "Ecosistema" },
        { href: "#recorrido", label: "Recorrido" },
        { href: "#formatos", label: "Formatos" },
        { href: "#metodo", label: "Método" },
        { href: "#comunidad", label: "Comunidad" },
        { href: "#colaboracion", label: "Colaboración" },
        { href: "#contacto", label: "Contacto" },
      ],
    },

    hero: {
      eyebrow: "Propuesta de colaboración 2026",
      headline: "Argentina entera,\ncontada como un solo viaje.",
      sub:
        "Hay un país inmenso esperando ser contado, y un creador que ya está listo para ponerse en ruta a documentarlo. Esta propuesta nace para acompañar a DJI durante los próximos meses mientras aprendo a ser nómada digital y muestro, con cámara en mano, cómo se ven sus productos en escenarios reales. Es un viaje largo, abierto y pensado para crecer juntos.",
      ctaPrimary: { label: "Ver la propuesta", href: "#concepto" },
      ctaGhost: { label: "Escribirme", href: contact.mailtoEs },
      videoAlt: "Paisaje cinematográfico de Argentina al amanecer",
    },

    concept: {
      eyebrow: "La idea de fondo",
      headline: "Una narrativa larga,\nsostenida en el tiempo.",
      lead:
        "Lo que propongo no es un viaje ni una campaña corta, es una relación creativa de largo aliento. Quiero acompañar a DJI durante meses recorriendo Argentina y documentando el camino al mismo tiempo que lo vivo. Soy un creador emergente aprendiendo a vivir como nómada digital, y esa transformación es justamente lo que vuelve esta colaboración valiosa: no traigo resultados terminados de antemano, los construyo en vivo con la marca como aliada del proceso.",
      points: [
        {
          title: "Tesis",
          body:
            "Mi ventaja real no es el equipo, es la decisión de sostener una sola historia durante mucho tiempo. Cualquiera puede comprar el ecosistema DJI, pocos pueden quedarse un año entero contándolo con coherencia y voz propia.",
        },
        {
          title: "Lo que ya tengo",
          body:
            "Una mirada que cruza lo cinemático con lo documental, una voz tranquila y conectiva, y la disciplina para producir contenido de forma sostenida. Entiendo cómo se construye una audiencia desde cero porque ya lo estoy haciendo.",
        },
        {
          title: "Lo que quiero desarrollar",
          body:
            "Crecer como nómada digital y comunicador masivo, pulir mi narrativa de viaje, aprender a editar más rápido en condiciones de ruta y construir una marca personal que pueda acompañar a DJI por años. Esta colaboración es la plataforma para todo eso.",
        },
      ],
    },

    audience: {
      eyebrow: "Para quién es este contenido",
      headline: "Para la gente que vio un DJI\ny quiso entender cómo se usa.",
      lead:
        "No estoy hablando ni a fotógrafos profesionales ni a operadores de drone con años de oficio. Estoy hablando a la persona que abre Instagram, ve un plano aéreo hermoso y se pregunta cómo se llega a hacer algo así. Esa persona quiere comprar el producto, pero los tutoriales habituales la asustan con términos técnicos, ajustes manuales y configuraciones que parecen para ingenieros.",
      points: [
        {
          title: "Tutoriales sin fricción",
          body:
            "Voy a explicar el ecosistema DJI como se lo explicaría a un amigo curioso. Sin jerga, sin asumir conocimiento previo, mostrando primero el resultado bonito y después el cómo se hizo. La idea es que el espectador entienda que estos productos son accesibles, no aspiracionales lejanos.",
        },
        {
          title: "El resultado a la vista",
          body:
            "Cada tutorial termina con la pieza terminada al lado del paso a paso. El espectador ve exactamente qué puede llegar a lograr si compra el producto y se anima. La fricción de comprar baja cuando el camino del aprendizaje queda visible y se siente alcanzable.",
        },
        {
          title: "Dos lecturas, un solo público",
          body:
            "El mismo contenido funciona para quien recién empieza y para quien ya tiene el equipo y busca inspiración. La capa narrativa atrae al nuevo, la capa técnica retiene al avanzado. Es un público amplio servido sin dividir el mensaje.",
        },
      ],
    },

    ecosystem: {
      eyebrow: "El equipo que uso",
      headline: "Tres cámaras\nque cuentan una sola historia.",
      lead:
        "Cada herramienta del ecosistema DJI tiene un rol claro en lo que produzco. No es acumulación de fierros sino complementariedad pensada. El Mini 5 Pro abre la escala, el Pocket 4 entra a la escena humana y el Osmo 360 captura lugares enteros para que el contenido viva en cualquier formato después.",
      cards: [
        {
          name: "DJI Mini 5 Pro",
          role: "El aéreo cinemático",
          body:
            "Es el que abre y cierra cada pieza con una vista imposible. Cordillera, salinas, costa atlántica, glaciares. La escala épica de Argentina contada en planos que igualmente se sienten artesanales y cercanos al espectador.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "La perspectiva humana",
          body:
            "Acá vive el costado documental del proyecto. La ruta, las mesas largas, las cocinas de hostel, las charlas con la gente que voy conociendo. El gimbal hace que todo se vea cinematográfico sin perder la calidez de un encuentro real.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "La inmersión espacial",
          body:
            "Captura lugares completos en una sola toma para que después pueda reframearlos en vertical, horizontal, panorámico o inmersivo. Un solo registro alimenta cinco formatos distintos, lo que multiplica el alcance sin multiplicar el rodaje.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    route: {
      eyebrow: "El recorrido",
      headline: "Ruta, naturaleza,\nciudad y refugio.",
      lead:
        "Cada provincia se cuenta a través de cuatro pilares narrativos que se repiten en todo el recorrido. Es una estructura simple que genera coherencia visual sin volverse fórmula, y al final del proyecto deja un mosaico de casi cien piezas si trabajamos las veinticuatro provincias del país.",
      pillars: [
        {
          title: "Ruta",
          body:
            "Las distancias largas, las paradas inesperadas, el ritmo de manejar ochocientos kilómetros en un día. La carretera deja de ser un medio y se vuelve el personaje principal de cada episodio.",
          image: "/images/route-ruta.jpg",
        },
        {
          title: "Naturaleza",
          body:
            "Patagonia, Litoral, Puna, Cuyo. Cuatro biomas radicalmente distintos, cada uno con su luz, su silencio y su forma particular de doblegar al cuerpo del viajero.",
          image: "/images/route-naturaleza.jpg",
        },
        {
          title: "Ciudad",
          body:
            "Las capitales chicas, los barrios de Buenos Aires y los pueblos que se vacían en invierno. La cultura urbana argentina vista sin cliché y sin la mirada turística de siempre.",
          image: "/images/route-ciudad.jpg",
        },
        {
          title: "Refugio",
          body:
            "Hostelería independiente, anfitriones que cocinan, vida minimalista en cabañas. El lugar donde la historia duerme entre etapa y etapa, y donde muchas veces aparece el mejor material del día.",
          image: "/images/route-refugio.jpg",
        },
      ],
    },

    formats: {
      eyebrow: "Los formatos",
      headline: "Vertical y horizontal,\ncortos y largos.",
      lead:
        "Cada lugar se cuenta en cuatro versiones para que el contenido cubra todas las plataformas donde DJI necesita estar presente. La misma idea adaptada para el feed rápido, el video de sobremesa, el documental largo y el Short que engancha en ocho segundos. Vertical y horizontal, dinámico y cinemático lento, cada formato es una puerta de entrada distinta al universo de la marca.",
      quadrants: [
        {
          title: "Vertical corto",
          tag: "Reels y Shorts de 15 a 60 segundos",
          body:
            "Para Instagram, TikTok y YouTube Shorts. Hook en el primer segundo, ritmo veloz, un solo concepto por pieza. Acá vive el contenido viral, el que muestra el producto en acción y empuja al espectador hacia la página de DJI.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
        },
        {
          title: "Vertical largo",
          tag: "Videos verticales de 3 a 8 minutos",
          body:
            "Tutoriales explicativos y mini documentales en formato TikTok largo y YouTube. Hay espacio para profundizar sin perder al espectador del scroll, ideal para mostrar cómo se logra un plano paso a paso.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
        },
        {
          title: "Horizontal corto",
          tag: "Clips cinemáticos de 30 a 90 segundos",
          body:
            "Para feeds de Instagram horizontal, posteos de marca y banners de campaña. Ritmo cinemático lento, planos sostenidos, foco en la atmósfera y la estética. Es la carta de presentación visual del proyecto.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
        },
        {
          title: "Horizontal largo",
          tag: "Documentales de 5 a 20 minutos",
          body:
            "Para YouTube principal y presentaciones en eventos. Cada episodio cuenta una provincia entera con narrativa, personajes y ritmo documental. Es el formato que construye autoridad y permanece en el tiempo más allá del feed.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
        },
      ],
    },

    method: {
      eyebrow: "El método",
      headline: "Storytelling,\ndocumental, aéreo.",
      lead:
        "Tres lenguajes que se cruzan en cada pieza para construir una voz reconocible. Ninguna pieza usa uno solo, todas combinan al menos dos, y las mejores logran integrar los tres en menos de un minuto.",
      columns: [
        {
          title: "Storytelling",
          body:
            "Una historia humana por episodio. El ceramista de Tilcara, la posadera de El Bolsón, el guía baqueano del Iberá. Personajes reales con nombre y oficio, no estampas decorativas. La gente y el lugar se cuentan juntos en el mismo plano.",
        },
        {
          title: "Documental",
          body:
            "Cortes largos, entrevistas que respiran, planos sostenidos. Ritmo lento y deliberado. La marca DJI aparece como herramienta dentro de la escena, nunca como tema central, lo que la vuelve mucho más creíble para el espectador.",
        },
        {
          title: "Aéreo",
          body:
            "El Mini 5 Pro abre y cierra cada pieza con un plano que reubica al espectador en la geografía. Es la firma visual del proyecto y la prueba directa de qué puede hacer el producto en manos de cualquiera con paciencia y buena dirección.",
        },
      ],
    },

    community: {
      eyebrow: "La comunidad",
      headline: "Conectar con\nlos creadores emergentes.",
      lead:
        "El proyecto no termina en mí. Cada provincia activa una colaboración con un creador local emergente que también usa el ecosistema DJI. Una pieza compartida abre dos audiencias al mismo tiempo, y al cabo del año la marca tiene una red de aliados regionales construida orgánicamente, sin contrato pero con vínculo real.",
      metrics: [
        { value: "24", label: "Provincias visitadas" },
        { value: "12+", label: "Colaboraciones locales" },
        { value: "52", label: "Piezas semanales en 12 meses" },
        { value: "3", label: "Documentales largos al año" },
      ],
    },

    collaboration: {
      eyebrow: "La colaboración que propongo",
      headline: "Un vínculo largo,\nno una campaña.",
      lead:
        "Lo que pongo sobre la mesa no es un proyecto cerrado de tres meses, es la base para una relación que puede crecer junto con DJI en la región. Argentina es solo el primer capítulo, y desde acá la idea es expandirse a toda LATAM en los años siguientes.",
      pillars: [
        {
          title: "Colaborador de larga duración",
          body:
            "Quiero ser una voz constante para DJI LATAM durante años, no una colaboración puntual que termina y se olvida. Una persona a la que la marca pueda volver cada vez que necesite contenido auténtico desde Sudamérica, sin tener que negociar de cero.",
        },
        {
          title: "Embajador potencial",
          body:
            "Si el vínculo funciona, hay una conversación natural sobre representar a DJI como embajador regional. Estar disponible para presentaciones de producto, eventos creativos y campañas globales donde haga falta una mirada latinoamericana auténtica.",
        },
        {
          title: "Presencia en eventos",
          body:
            "Sumo disponibilidad activa para participar de los eventos DJI en Argentina y la región durante los próximos meses. Activaciones, demos, charlas, lanzamientos. Donde la marca quiera tener presencia creativa, voy yo con cámara en mano.",
        },
        {
          title: "Amplificación global",
          body:
            "Cada pieza del proyecto está pensada para sumar a la expansión global de DJI. Subtítulos en inglés desde el día uno, optimización para audiencias internacionales y disponibilidad de todo el material crudo para los equipos de marketing globales de la marca.",
        },
      ],
      quote:
        "Cualquier creador puede comprar el ecosistema DJI. Pocos pueden quedarse el tiempo necesario para que el contenido haga diferencia.",
    },

    cta: {
      eyebrow: "Próximo paso",
      headline: "Construyamos esto juntos.",
      sub:
        "Si esta narrativa representa el espíritu creativo y explorador de DJI, hablemos. Estoy listo para arrancar la pre-producción en cuanto demos el sí, y la primera pieza puede estar publicada dentro de las cuatro semanas siguientes a la firma.",
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
          heading: "Proyecto",
          links: [
            { label: "Concepto", href: "#concepto" },
            { label: "Para quién", href: "#audiencia" },
            { label: "Ecosistema", href: "#ecosistema" },
            { label: "Recorrido", href: "#recorrido" },
            { label: "Formatos", href: "#formatos" },
            { label: "Método", href: "#metodo" },
            { label: "Comunidad", href: "#comunidad" },
            { label: "Colaboración", href: "#colaboracion" },
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
          heading: "Equipo DJI",
          links: [
            { label: "DJI Mini 5 Pro", href: "https://www.dji.com/mini-5-pro" },
            { label: "Osmo Pocket 4", href: "https://www.dji.com/osmo-pocket-4" },
            { label: "Osmo 360", href: "https://www.dji.com/osmo-360" },
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
        "Propuesta independiente de colaboración. DJI™ es una marca registrada de SZ DJI Technology Co., Ltd. Las imágenes de producto provienen de press kits públicos de DJI. Este sitio existe únicamente para presentar la aplicación de Luis Sambrano y será eliminado al finalizar el proceso de evaluación.",
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
            "Esta página es exclusivamente un material de presentación dirigido a los equipos de DJI Argentina, DJI LATAM y DJI Global. Funciona como portfolio extendido y carta de intención al mismo tiempo. No está pensada para audiencias masivas ni para promocionarse fuera del ámbito de esta evaluación.",
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
      sectionTitle: "DJI Proposal",
      sectionMeta: "Argentina · 2026",
      sectionCta: "Start collaboration",
      links: [
        { href: "#concepto", label: "Concept" },
        { href: "#audiencia", label: "Audience" },
        { href: "#ecosistema", label: "Ecosystem" },
        { href: "#recorrido", label: "Journey" },
        { href: "#formatos", label: "Formats" },
        { href: "#metodo", label: "Method" },
        { href: "#comunidad", label: "Community" },
        { href: "#colaboracion", label: "Collaboration" },
        { href: "#contacto", label: "Contact" },
      ],
    },

    hero: {
      eyebrow: "Collaboration proposal 2026",
      headline: "All of Argentina,\ntold as a single journey.",
      sub:
        "There is an immense country waiting to be told, and a creator ready to hit the road and document it. This proposal exists to walk alongside DJI for the coming months while I learn to live as a digital nomad and show, camera in hand, how the brand's products perform in real settings. It is a long, open journey designed to grow together.",
      ctaPrimary: { label: "See the proposal", href: "#concepto" },
      ctaGhost: { label: "Write me", href: contact.mailtoEn },
      videoAlt: "Cinematic landscape of Argentina at dawn",
    },

    concept: {
      eyebrow: "The core idea",
      headline: "A long narrative,\nsustained over time.",
      lead:
        "What I am proposing is not a trip nor a short campaign, it is a long form creative relationship. I want to walk with DJI for months while I travel Argentina and document the road as I live it. I am an emerging creator learning to live as a digital nomad, and that very transformation is what makes this collaboration valuable. I am not arriving with polished results in advance, I am building them live with the brand as a partner of the process.",
      points: [
        {
          title: "Thesis",
          body:
            "My real advantage is not the gear, it is the decision to sustain one single story over a long stretch of time. Anyone can buy the DJI ecosystem, but very few can stay a full year telling its story with coherence and a recognizable voice.",
        },
        {
          title: "What I already bring",
          body:
            "A point of view that blends the cinematic with the documentary, a calm and connecting voice, and the discipline to produce content consistently. I understand how an audience is built from zero because I am already doing it.",
        },
        {
          title: "What I want to develop",
          body:
            "Grow as a digital nomad and as a mass communicator, refine my travel narrative, learn to edit faster while on the road, and build a personal brand strong enough to walk with DJI for years. This collaboration is the platform that makes all of that possible.",
        },
      ],
    },

    audience: {
      eyebrow: "Who this content is for",
      headline: "For people who saw a DJI\nand wondered how to use it.",
      lead:
        "I am not speaking to professional photographers or to drone operators with years of trade. I am speaking to the person who opens Instagram, sees a stunning aerial shot and wonders how anyone gets to do that. That person wants to buy the product, but the usual tutorials scare them off with technical jargon, manual settings and configurations that feel engineered for engineers.",
      points: [
        {
          title: "Tutorials without friction",
          body:
            "I will explain the DJI ecosystem the way I would explain it to a curious friend. No jargon, no assumed knowledge, showing the beautiful result first and the steps to get there afterwards. The point is for the viewer to understand that these products are accessible, not distant aspirations.",
        },
        {
          title: "The result in plain sight",
          body:
            "Every tutorial ends with the finished piece sitting right next to the step by step. The viewer sees exactly what they could create if they bought the product and gave it a go. Friction at the moment of buying drops as soon as the learning curve becomes visible and feels reachable.",
        },
        {
          title: "Two readings, one audience",
          body:
            "The same content works for someone just starting out and for someone who already owns the gear and is looking for inspiration. The narrative layer pulls the newcomer in, the technical layer holds the advanced viewer. One wide audience served without splitting the message.",
        },
      ],
    },

    ecosystem: {
      eyebrow: "The gear I use",
      headline: "Three cameras\ntelling a single story.",
      lead:
        "Each tool in the DJI ecosystem has a clear role in what I produce. It is not stacking gear for the sake of it, it is thoughtful complementarity. The Mini 5 Pro opens the scale, the Pocket 4 steps into the human scene, and the Osmo 360 captures full places so the content can live across any format later on.",
      cards: [
        {
          name: "DJI Mini 5 Pro",
          role: "The cinematic aerial",
          body:
            "It is the one that opens and closes every piece with an otherwise impossible view. The Andes, the salt flats, the Atlantic coast, the glaciers. Argentina's epic scale told in shots that still feel handmade and close to the viewer.",
          image: "/images/dji-mini-5-pro.png",
        },
        {
          name: "Osmo Pocket 4",
          role: "The human perspective",
          body:
            "This is where the documentary side of the project lives. The road, the long tables, the hostel kitchens, the conversations with the people I meet along the way. The gimbal makes everything feel cinematic without losing the warmth of a real encounter.",
          image: "/images/dji-osmo-pocket-4.png",
        },
        {
          name: "Osmo 360",
          role: "Spatial immersion",
          body:
            "It captures whole places in a single take so I can reframe them later as vertical, horizontal, panoramic or fully immersive. One single capture feeds five different formats, multiplying reach without multiplying shooting time.",
          image: "/images/dji-osmo-360.png",
        },
      ],
    },

    route: {
      eyebrow: "The journey",
      headline: "Road, nature,\ncity and refuge.",
      lead:
        "Each province is told through four narrative pillars that repeat across the whole journey. It is a simple structure that builds visual coherence without turning into a formula, and by the end of the project it leaves a mosaic of close to a hundred pieces if we cover the twenty four provinces of the country.",
      pillars: [
        {
          title: "Road",
          body:
            "The long distances, the unexpected stops, the rhythm of driving eight hundred kilometers in a day. The highway stops being a means of transport and becomes the leading character of every episode.",
          image: "/images/route-ruta.jpg",
        },
        {
          title: "Nature",
          body:
            "Patagonia, the Northeast wetlands, the high altitude Puna, the Andes foothills. Four radically different biomes, each with its own light, its own silence and its own particular way of wearing the traveler down.",
          image: "/images/route-naturaleza.jpg",
        },
        {
          title: "City",
          body:
            "The smaller capitals, the neighborhoods of Buenos Aires and the towns that empty out in winter. Argentine urban culture seen without cliché and free from the usual tourist gaze.",
          image: "/images/route-ciudad.jpg",
        },
        {
          title: "Refuge",
          body:
            "Independent lodging, hosts who cook, minimalist life inside small cabins. The place where the story rests between legs of the trip, and often the place where the best material of the day shows up.",
          image: "/images/route-refugio.jpg",
        },
      ],
    },

    formats: {
      eyebrow: "The formats",
      headline: "Vertical and horizontal,\nshort and long.",
      lead:
        "Every place is told in four versions so the content covers every platform where DJI needs to show up. The same idea adapted for the fast feed, the after dinner watch, the full length documentary and the Short that hooks in eight seconds. Vertical and horizontal, dynamic and slow cinematic, each format opens a different door into the brand's universe.",
      quadrants: [
        {
          title: "Vertical short",
          tag: "Reels and Shorts of 15 to 60 seconds",
          body:
            "For Instagram, TikTok and YouTube Shorts. Hook in the first second, fast pacing, one single concept per piece. This is where viral content lives, the one that shows the product in action and pushes the viewer to DJI's page.",
          video: "/videos/format-vertical-short.mp4",
          poster: "/images/route-ciudad.jpg",
        },
        {
          title: "Vertical long",
          tag: "Vertical videos of 3 to 8 minutes",
          body:
            "Step by step tutorials and mini documentaries in long form vertical for TikTok and YouTube. Room to go deeper without losing the scroll viewer, ideal for showing how a shot is built step by step.",
          video: "/videos/format-vertical-long.mp4",
          poster: "/images/route-refugio.jpg",
        },
        {
          title: "Horizontal short",
          tag: "Cinematic clips of 30 to 90 seconds",
          body:
            "For horizontal Instagram feeds, brand posts and campaign banners. Slow cinematic pacing, sustained shots, focus on atmosphere and aesthetics. The project's visual calling card.",
          video: "/videos/format-horizontal-short.mp4",
          poster: "/images/route-naturaleza.jpg",
        },
        {
          title: "Horizontal long",
          tag: "Documentaries of 5 to 20 minutes",
          body:
            "For main YouTube channels and for event presentations. Each episode tells an entire province with narrative arc, real characters and documentary pacing. It is the format that builds authority and stays relevant well beyond the feed.",
          video: "/videos/format-horizontal-long.mp4",
          poster: "/images/route-ruta.jpg",
        },
      ],
    },

    method: {
      eyebrow: "The method",
      headline: "Storytelling,\ndocumentary, aerial.",
      lead:
        "Three languages that intersect in every piece to build one recognizable voice. No piece relies on just one, every piece combines at least two, and the best ones manage to integrate all three in less than a minute.",
      columns: [
        {
          title: "Storytelling",
          body:
            "One human story per episode. The ceramist from Tilcara, the hostel keeper from El Bolsón, the gaucho guide from the Iberá wetlands. Real characters with a name and a craft, not decorative stamps. People and place are told together in the same frame.",
        },
        {
          title: "Documentary",
          body:
            "Long cuts, breathing interviews, sustained shots. Slow and deliberate pacing. The DJI brand shows up as a tool inside the scene, never as the central subject, which makes its presence far more credible for the viewer.",
        },
        {
          title: "Aerial",
          body:
            "The Mini 5 Pro opens and closes every piece with a shot that places the viewer back in the geography. It is the visual signature of the project and the direct proof of what the product can do in the hands of anyone with patience and good direction.",
        },
      ],
    },

    community: {
      eyebrow: "The community",
      headline: "Connecting with\nemerging creators.",
      lead:
        "The project does not end with me. Every province activates a collaboration with a local emerging creator who also works with the DJI ecosystem. One shared piece opens two audiences at the same time, and by year end the brand has an organically built regional network of allies, no contracts but real bonds.",
      metrics: [
        { value: "24", label: "Provinces visited" },
        { value: "12+", label: "Local collaborations" },
        { value: "52", label: "Weekly pieces in 12 months" },
        { value: "3", label: "Long documentaries per year" },
      ],
    },

    collaboration: {
      eyebrow: "The collaboration I am proposing",
      headline: "A long bond,\nnot a campaign.",
      lead:
        "What I am putting on the table is not a closed three month project, it is the foundation for a relationship that can grow alongside DJI in the region. Argentina is only the first chapter, and from there the idea is to expand across all of Latin America in the years that follow.",
      pillars: [
        {
          title: "Long term collaborator",
          body:
            "I want to be a steady voice for DJI LATAM over the years, not a one off collaboration that ends and is forgotten. Someone the brand can come back to whenever it needs authentic content from South America, without having to negotiate from scratch.",
        },
        {
          title: "Potential ambassador",
          body:
            "If the bond works, there is a natural conversation about representing DJI as a regional ambassador. Being available for product presentations, creative events and global campaigns where a Latin American eye adds real value.",
        },
        {
          title: "Presence at events",
          body:
            "I bring active availability to participate in DJI events across Argentina and the region in the coming months. Activations, demos, talks, launches. Wherever the brand wants creative presence, I show up with the camera ready.",
        },
        {
          title: "Global amplification",
          body:
            "Every piece in the project is conceived to add to DJI's global expansion. English subtitles from day one, optimization for international audiences and full access to all raw footage for the brand's global marketing teams.",
        },
      ],
      quote:
        "Anyone can buy the DJI ecosystem. Few can stay long enough for the content to actually make a difference.",
    },

    cta: {
      eyebrow: "Next step",
      headline: "Let's build this together.",
      sub:
        "If this narrative captures the creative and exploratory spirit of DJI, let's talk. I am ready to begin pre production the moment we agree, and the first piece can be published within four weeks of signing.",
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
          heading: "Project",
          links: [
            { label: "Concept", href: "#concepto" },
            { label: "Audience", href: "#audiencia" },
            { label: "Ecosystem", href: "#ecosistema" },
            { label: "Journey", href: "#recorrido" },
            { label: "Formats", href: "#formatos" },
            { label: "Method", href: "#metodo" },
            { label: "Community", href: "#comunidad" },
            { label: "Collaboration", href: "#colaboracion" },
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
          heading: "DJI gear",
          links: [
            { label: "DJI Mini 5 Pro", href: "https://www.dji.com/mini-5-pro" },
            { label: "Osmo Pocket 4", href: "https://www.dji.com/osmo-pocket-4" },
            { label: "Osmo 360", href: "https://www.dji.com/osmo-360" },
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
        "Independent collaboration proposal. DJI™ is a registered trademark of SZ DJI Technology Co., Ltd. Product imagery comes from DJI's public press kits. This site exists only to present Luis Sambrano's application and will be deleted once the evaluation process is complete.",
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
            "This page is presentation material aimed at the teams of DJI Argentina, DJI LATAM and DJI Global. It works as both an extended portfolio and a letter of intent at the same time. It is not intended for mass audiences and it is not promoted outside the scope of this evaluation.",
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
