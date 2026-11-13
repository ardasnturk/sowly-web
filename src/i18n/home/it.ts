import type { HomeDictionary } from "../types";

export const it: HomeDictionary = {
  hero: {
    eyebrow: "Planner di semina per iPhone",
    title: "Semina la cosa giusta",
    highlight: "al momento giusto.",
    subtitle:
      "Sowly legge il clima della tua zona e il meteo di questa settimana e ti dice quali ortaggi, frutti ed erbe aromatiche puoi avviare oggi, nell'orto o sul balcone.",
    secondary: "Scopri come funziona",
    badges: ["81 colture", "Nessun account", "Niente pubblicità né tracciamento"],
    screenshotAlt: "La schermata Oggi di Sowly: 48 colture sono pronte da seminare, con temperatura dell'aria, del terreno e notturna e previsioni a sette giorni.",
    chipSow: "Da seminare all'aperto oggi",
    chipHarvest: "Raccolto tra 2 settimane",
    chipFrost: "Notte fredda in arrivo",
  },
  how: {
    eyebrow: "Come funziona",
    title: "Dal tuo meteo al tuo piano",
    subtitle: "Le bustine di semi dicono «seminare da marzo a maggio». Sowly guarda dove vivi e cosa porterà la settimana.",
    steps: [
      { title: "Il tuo clima", text: "Sowly legge il clima del tuo luogo: quanto sono caldi di solito i mesi e quando arrivano e se ne vanno le gelate." },
      { title: "Le previsioni della settimana", text: "Le previsioni di Apple Weather mostrano cosa ti aspetta: una notte fredda, un'ondata di caldo o piogge intense." },
      { title: "Temperatura del terreno", text: "Da entrambi, Sowly stima quanto è caldo il tuo terreno: è questo a decidere se un seme germoglia." },
      { title: "Il tuo piano", text: "Ottieni un elenco di cosa avviare oggi e come: seminare all'aperto, seminare al chiuso o trapiantare all'aperto, ogni volta con una stima del raccolto." },
    ],
  },
  features: {
    eyebrow: "Funzioni",
    title: "Tutto, dal seme al raccolto",
    subtitle: "Quattro schermate che ti portano da «cosa posso seminare?» al primo cesto.",
    items: [
      {
        label: "Oggi",
        title: "Cosa posso avviare oggi?",
        text: "Apri l'app e scopri quali delle 81 colture sono pronte dove vivi, e se conviene seminarle all'aperto, seminarle al chiuso o trapiantarle all'aperto.",
        points: [
          "Temperatura dell'aria, del terreno (stimata) e notturna a colpo d'occhio",
          "Avvisi per notti fredde e gelate, caldo e piogge intense",
          "Una data di raccolto stimata per ogni coltura",
        ],
        alt: "Schermata Oggi con il numero di colture pronte da seminare, le previsioni della settimana e un avviso di piogge intense.",
      },
      {
        label: "Scheda coltura",
        title: "Perché adesso, o perché aspettare",
        text: "Ogni coltura si spiega da sé: perché oggi è il giorno giusto, oppure cosa sta ancora aspettando e quando arriverà il suo momento.",
        points: [
          "Una linea del tempo con le date, dalla semina al raccolto",
          "L'anno della coltura: periodi di semina e di raccolto",
          "Luce, acqua, distanza, profondità, temperatura del terreno e dimensione del vaso, più un consiglio",
        ],
        alt: "Scheda del pomodoro: aspetta nove settimane e semina al chiuso dal 15 gennaio, perché il terreno è ancora troppo freddo.",
      },
      {
        label: "Orto",
        title: "Disegna il tuo orto",
        text: "Aggiungi aiuole con le loro misure reali – per esempio 2 × 1 m – e vasi, poi trascinaci dentro le colture. Ogni pianta è disegnata larga quanto lo spazio che le serve, così vedi cosa ci sta.",
        points: [
          "Aiuole e vasi nelle loro proporzioni reali",
          "Segna ogni pianta come pianificata o seminata",
          "Più orti in luoghi diversi, ognuno con il proprio clima (PRO)",
        ],
        alt: "Un'aiuola da orto di 2 × 1 m con lattuga, fava, aglio e ravanello, e una fila di colture di stagione da trascinare.",
      },
      {
        label: "Diario",
        title: "Segui ogni semina",
        text: "Ogni semina riceve una stima del raccolto e un diario tutto suo, così la prossima stagione sai cosa ha funzionato.",
        points: [
          "Registro di crescita: germogliata, trapiantata, in fiore, primo raccolto, conclusa",
          "Un diario fotografico e note per ogni pianta",
          "Guarda cosa sta crescendo e qual è il prossimo raccolto",
        ],
        alt: "Panoramica dell'orto: quattro colture in crescita, una in raccolta, prossimo raccolto tra 14 giorni.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Pianifica tutto l'anno",
    subtitle: "Sowly ti dice gratis cosa avviare oggi. PRO guarda più lontano e fa la guardia per te.",
    items: [
      { title: "Planner annuale", text: "I periodi di semina e di raccolto di ogni coltura lungo tutti i dodici mesi, calcolati per il tuo clima." },
      { title: "Avvisi intelligenti", text: "Un avviso quando il meteo minaccia le tue piante, quando è ora di un raccolto e quando una coltura della tua lista dei desideri entra in stagione." },
      { title: "Assistente dell'orto", text: "Fai domande sul tuo orto e ricevi risposte scritte sul tuo dispositivo da Apple Intelligence. Richiede iOS 26 o versioni successive e un iPhone supportato." },
      { title: "Memoria dell'orto", text: "I raccolti che registri correggono le stime dell'anno successivo, così Sowly impara a conoscere il tuo orto." },
      { title: "Orti e semine illimitati", text: "Casa, orto urbano, balcone: tutti gli orti e le semine che vuoi, ognuno con il proprio clima." },
    ],
    plansTitle: "Scegli quello che fa per te",
    plans: ["Annuale · 7 giorni gratis", "3 mesi", "Mensile", "A vita"],
    note: "Gli abbonamenti si rinnovano automaticamente fino all'annullamento. Puoi annullare in qualsiasi momento dal tuo account App Store.",
    screenshotAlt: "Planner annuale: periodi di semina, trapianto e raccolto di ogni coltura, mese per mese.",
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Il tuo orto è affar tuo",
    text: "Sowly funziona senza account e senza un server che ti conosca. Quello che pianti, fotografi e annoti resta sul tuo iPhone.",
    points: [
      { title: "Nessun account", text: "Apri l'app e inizia. Nessuna registrazione, nessun indirizzo e-mail, nessuna password." },
      { title: "Niente pubblicità né tracciamento", text: "Nessuna pubblicità e nessun SDK di analisi. Nessuno osserva quello che fai nell'app." },
      { title: "Salvato sul tuo iPhone", text: "Orti, foto e note restano sul dispositivo. Elimina l'app e spariscono." },
      { title: "Assistente sul dispositivo", text: "Le risposte dell'assistente dell'orto vengono generate da Apple Intelligence sul tuo iPhone, non in un cloud." },
    ],
    staysTitle: "Resta sul tuo iPhone",
    stays: ["Orti, aiuole e vasi", "Semine e registro di crescita", "Foto e note", "Domande all'assistente"],
    leavesTitle: "Le uniche cose che ne escono",
    leaves: [
      "Una posizione approssimativa, arrotondata a circa un chilometro, inviata ad Apple Weather per meteo e clima",
      "Gli acquisti, gestiti da Apple e RevenueCat con un ID anonimo",
    ],
    link: "Leggi l'informativa sulla privacy",
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Buono a sapersi",
    items: [
      {
        q: "Cosa posso pianificare con Sowly?",
        a: "Ortaggi, frutta ed erbe aromatiche: 81 colture, dal pomodoro e dalla lattuga al limone e al basilico. Sowly è pensata per ciò che si mangia, non per i fiori ornamentali.",
      },
      {
        q: "Quanto sono precise le date?",
        a: "Sono stime calcolate a partire dalle medie climatiche del tuo luogo e dalle previsioni di questa settimana. Sono una buona guida, non una garanzia: terreno, semi e meteo reale possono spostarle.",
      },
      {
        q: "Funziona anche su un balcone?",
        a: "Sì. Aggiungi vasi al posto delle aiuole, e ogni scheda coltura ti dice la dimensione del vaso necessaria.",
      },
      {
        q: "Cosa è gratis e cosa è PRO?",
        a: "I consigli di oggi, le schede coltura e un orto con un numero limitato di semine sono gratis. PRO aggiunge il planner annuale, gli avvisi intelligenti, l'assistente dell'orto, la memoria dell'orto e orti e semine illimitati.",
      },
      {
        q: "Quale iPhone mi serve?",
        a: "Un iPhone con iOS 18 o versioni successive. L'assistente dell'orto richiede iOS 26 o versioni successive su un iPhone che supporta Apple Intelligence.",
      },
      {
        q: "Perché Sowly mi chiede la posizione?",
        a: "Per caricare il meteo e il clima del tuo orto. Ad Apple Weather viene inviata soltanto una posizione approssimativa, arrotondata a circa un chilometro.",
      },
    ],
  },
  cta: {
    title: "Pronto quando lo è la terra",
    text: "Scopri cosa puoi seminare oggi: nel tuo orto, con il tuo clima, questa settimana.",
  },
};
