import type { HomeDictionary } from "../types";

export const es: HomeDictionary = {
  hero: {
    eyebrow: "Planificador de siembra para iPhone",
    title: "Siembra lo que toca,",
    highlight: "cuando toca.",
    subtitle:
      "Sowly lee tu clima local y el tiempo de esta semana y te dice qué verduras, frutas y hierbas aromáticas puedes empezar hoy, en el huerto o en el balcón.",
    secondary: "Descubre cómo funciona",
    badges: ["81 cultivos", "Sin cuenta", "Sin anuncios ni seguimiento"],
    screenshotAlt: "Pantalla Hoy de Sowly: 48 cultivos listos para sembrar, con temperatura del aire, del suelo y nocturna y un pronóstico de siete días.",
    chipSow: "Siembra al aire libre hoy",
    chipHarvest: "Cosecha en 2 semanas",
    chipFrost: "Se acerca una noche fría",
  },
  how: {
    eyebrow: "Cómo funciona",
    title: "De tu tiempo a tu plan",
    subtitle: "Los sobres de semillas dicen «sembrar de marzo a mayo». Sowly se fija en dónde vives y en lo que traerá la semana.",
    steps: [
      { title: "Tu clima", text: "Sowly lee el clima de tu zona: qué temperaturas suelen traer los meses y cuándo llegan y se van las heladas." },
      { title: "El pronóstico de esta semana", text: "El pronóstico de Apple Weather muestra lo que viene: una noche fría, una racha de calor o lluvias intensas." },
      { title: "Temperatura del suelo", text: "Con ambos, Sowly estima la temperatura de tu suelo, que es lo que decide si una semilla germina." },
      { title: "Tu plan", text: "Recibes una lista de lo que puedes empezar hoy y cómo: sembrar al aire libre, sembrar en interior o trasplantar al exterior, siempre con una cosecha estimada." },
    ],
  },
  features: {
    eyebrow: "Funciones",
    title: "Todo, de la semilla a la cosecha",
    subtitle: "Cuatro pantallas que te llevan del «¿qué puedo sembrar?» a la primera cesta.",
    items: [
      {
        label: "Hoy",
        title: "¿Qué puedo empezar hoy?",
        text: "Abre la app y mira cuáles de los 81 cultivos están listos donde vives, y si conviene sembrarlos al aire libre, sembrarlos en interior o trasplantarlos al exterior.",
        points: [
          "Temperatura del aire, del suelo (estimada) y nocturna de un vistazo",
          "Avisos de noches frías y heladas, calor y lluvias intensas",
          "Una fecha estimada de cosecha para cada cultivo",
        ],
        alt: "Pantalla Hoy con el número de cultivos listos para sembrar, el pronóstico de la semana y un aviso de lluvias intensas.",
      },
      {
        label: "Ficha del cultivo",
        title: "Por qué ahora, o por qué esperar",
        text: "Cada cultivo se explica solo: por qué hoy es un buen día, o qué le falta todavía y cuándo llegará su momento.",
        points: [
          "Una cronología con fechas, de la siembra a la cosecha",
          "El año del cultivo: periodos de siembra y de cosecha",
          "Luz, riego, distancia, profundidad, temperatura del suelo y tamaño de maceta, además de un consejo",
        ],
        alt: "Ficha del tomate: esperar nueve semanas y sembrar en interior a partir del 15 de enero, porque el suelo aún está demasiado frío.",
      },
      {
        label: "Huerto",
        title: "Dibuja tu huerto",
        text: "Añade bancales con su tamaño real (por ejemplo, 2 × 1 m) y macetas, y arrastra los cultivos a su sitio. Cada planta se dibuja con el ancho del espacio que necesita, así ves qué cabe.",
        points: [
          "Bancales y macetas en sus proporciones reales",
          "Marca cada planta como planificada o sembrada",
          "Varios huertos en lugares distintos, cada uno con su propio clima (PRO)",
        ],
        alt: "Un bancal de 2 × 1 m con lechuga, haba, ajo y rábano, y una fila de cultivos de temporada para arrastrar.",
      },
      {
        label: "Diario",
        title: "Sigue cada siembra",
        text: "Cada siembra recibe una cosecha estimada y su propio diario, para que la próxima temporada sepas qué funcionó.",
        points: [
          "Registro de crecimiento: germinada, trasplantada, en flor, primera cosecha, terminada",
          "Un diario fotográfico y notas para cada planta",
          "Mira qué está creciendo y cuál es la próxima cosecha",
        ],
        alt: "Vista general del huerto: cuatro cultivos creciendo, uno en cosecha y la próxima cosecha en 14 días.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Planifica todo el año",
    subtitle: "Sowly te dice gratis qué puedes empezar hoy. PRO mira más lejos y vigila por ti.",
    items: [
      { title: "Planificador anual", text: "Periodos de siembra y de cosecha de cada cultivo a lo largo de los doce meses, calculados para tu clima." },
      { title: "Alertas inteligentes", text: "Un aviso cuando el tiempo amenaza tus plantas, cuando toca cosechar y cuando un cultivo de tu lista de deseos entra en temporada." },
      { title: "Asistente del huerto", text: "Pregunta sobre tu huerto y recibe respuestas escritas en tu dispositivo por Apple Intelligence. Requiere iOS 26 o posterior y un iPhone compatible." },
      { title: "Memoria del huerto", text: "Las cosechas que registras ajustan las estimaciones del año siguiente, y así Sowly va conociendo tu huerto." },
      { title: "Huertos y siembras ilimitados", text: "Casa, huerto urbano, balcón: tantos huertos y siembras como quieras, cada uno con su propio clima." },
    ],
    plansTitle: "Elige lo que te encaje",
    plans: ["Anual · 7 días gratis", "3 meses", "Mensual", "De por vida"],
    note: "Las suscripciones se renuevan automáticamente hasta que las canceles. Cancela cuando quieras desde tu cuenta del App Store.",
    screenshotAlt: "Planificador anual: periodos de siembra, plantación y cosecha de cada cultivo, mes a mes.",
  },
  privacy: {
    eyebrow: "Privacidad",
    title: "Tu huerto es cosa tuya",
    text: "Sowly funciona sin cuenta y sin un servidor que te conozca. Lo que plantas, fotografías y anotas se queda en tu iPhone.",
    points: [
      { title: "Sin cuenta", text: "Abre la app y empieza. Sin registro, sin correo electrónico, sin contraseña." },
      { title: "Sin anuncios ni seguimiento", text: "Sin publicidad y sin SDK de analítica. Nadie observa lo que haces en la app." },
      { title: "Guardado en tu iPhone", text: "Los huertos, las fotos y las notas se quedan en el dispositivo. Si eliminas la app, desaparecen." },
      { title: "Asistente en el dispositivo", text: "Las respuestas del asistente del huerto las genera Apple Intelligence en tu iPhone, no en una nube." },
    ],
    staysTitle: "Se queda en tu iPhone",
    stays: ["Huertos, bancales y macetas", "Siembras y registro de crecimiento", "Fotos y notas", "Preguntas al asistente"],
    leavesTitle: "Lo único que sale de él",
    leaves: [
      "Una ubicación aproximada, redondeada a cerca de un kilómetro, que se envía a Apple Weather para obtener el tiempo y el clima",
      "Las compras, gestionadas por Apple y RevenueCat con un identificador anónimo",
    ],
    link: "Leer la política de privacidad",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Conviene saberlo",
    items: [
      {
        q: "¿Qué puedo planificar con Sowly?",
        a: "Verduras, frutas y hierbas aromáticas: 81 cultivos, del tomate y la lechuga al limón y la albahaca. Sowly está pensada para lo que se come, no para flores ornamentales.",
      },
      {
        q: "¿Qué precisión tienen las fechas?",
        a: "Son estimaciones calculadas a partir de las medias climáticas de tu zona y del pronóstico de esta semana. Son una buena guía, no una garantía: el suelo, la semilla y el tiempo real pueden desplazarlas.",
      },
      {
        q: "¿Sirve para un balcón?",
        a: "Sí. Añade macetas en lugar de bancales, y la ficha de cada cultivo te indica el tamaño de maceta que necesita.",
      },
      {
        q: "¿Qué es gratis y qué es PRO?",
        a: "Las recomendaciones de hoy, las fichas de los cultivos y un huerto con un número limitado de siembras son gratis. PRO añade el planificador anual, las alertas inteligentes, el asistente del huerto, la memoria del huerto y huertos y siembras ilimitados.",
      },
      {
        q: "¿Qué iPhone necesito?",
        a: "Un iPhone con iOS 18 o posterior. El asistente del huerto necesita iOS 26 o posterior en un iPhone compatible con Apple Intelligence.",
      },
      {
        q: "¿Por qué me pide Sowly la ubicación?",
        a: "Para cargar el tiempo y el clima de tu huerto. A Apple Weather solo se envía una posición aproximada, redondeada a cerca de un kilómetro.",
      },
    ],
  },
  cta: {
    title: "Listo cuando la tierra lo esté",
    text: "Descubre qué puedes sembrar hoy: en tu huerto, con tu clima, esta semana.",
  },
};
