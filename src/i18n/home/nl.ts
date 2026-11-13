import type { HomeDictionary } from "../types";

export const nl: HomeDictionary = {
  hero: {
    eyebrow: "Zaai- en plantplanner voor iPhone",
    title: "Zaai het juiste",
    highlight: "op het juiste moment.",
    subtitle:
      "Sowly kent je lokale klimaat en het weer van deze week en vertelt je welke groente, welk fruit en welke kruiden je vandaag kunt starten – in de tuin of op het balkon.",
    secondary: "Bekijk hoe het werkt",
    badges: ["81 gewassen", "Geen account", "Geen reclame, geen tracking"],
    screenshotAlt:
      "Het Vandaag-scherm van Sowly: 48 gewassen zijn klaar om te zaaien, met lucht-, bodem- en nachttemperatuur en een verwachting voor zeven dagen.",
    chipSow: "Vandaag buiten zaaien",
    chipHarvest: "Oogst over 2 weken",
    chipFrost: "Koude nacht op komst",
  },
  how: {
    eyebrow: "Zo werkt het",
    title: "Van jouw weer naar jouw plan",
    subtitle: "Op zaadzakjes staat “zaaien van maart tot mei”. Sowly kijkt naar waar je woont en wat de week gaat brengen.",
    steps: [
      { title: "Jouw klimaat", text: "Sowly leest het klimaat van je woonplaats: hoe warm de maanden meestal zijn en wanneer de vorst komt en gaat." },
      { title: "De verwachting van deze week", text: "De verwachting van Apple Weather laat zien wat eraan komt: een koude nacht, een warme periode of zware regen." },
      { title: "Bodemtemperatuur", text: "Uit die twee schat Sowly hoe warm je grond is – en dat bepaalt of een zaadje kiemt." },
      { title: "Jouw plan", text: "Je krijgt een lijst met wat je vandaag kunt starten en hoe: buiten zaaien, binnen voorzaaien of uitplanten, telkens met een oogstschatting." },
    ],
  },
  features: {
    eyebrow: "Functies",
    title: "Alles van zaadje tot oogst",
    subtitle: "Vier schermen die je van “wat kan ik zaaien?” naar de eerste volle mand brengen.",
    items: [
      {
        label: "Vandaag",
        title: "Wat kan ik vandaag starten?",
        text: "Open de app en zie welke van de 81 gewassen er bij jou klaar voor zijn – en of je ze buiten zaait, binnen voorzaait of uitplant.",
        points: [
          "Lucht-, geschatte bodem- en nachttemperatuur in één oogopslag",
          "Waarschuwingen voor koude nachten en vorst, hitte en zware regen",
          "Een geschatte oogstdatum voor elk gewas",
        ],
        alt: "Vandaag-scherm met het aantal gewassen dat klaar is om te zaaien, de weekverwachting en een waarschuwing voor zware regen.",
      },
      {
        label: "Gewaspagina",
        title: "Waarom nu – of waarom nog wachten",
        text: "Elk gewas legt zichzelf uit: waarom vandaag een goede dag is, of waar het nog op wacht en wanneer zijn tijd komt.",
        points: [
          "Een tijdlijn met data van zaaien tot oogsten",
          "Het jaar van het gewas: zaai- en oogstperiodes",
          "Licht, water, plantafstand, zaaidiepte, bodemtemperatuur en potmaat, plus een tip",
        ],
        alt: "Tomatenpagina: wacht negen weken, zaai binnen voor vanaf 15 januari, omdat de grond nog te koud is.",
      },
      {
        label: "Tuin",
        title: "Teken je tuin",
        text: "Voeg bedden toe op ware grootte – bijvoorbeeld 2 × 1 m – en potten, en sleep er gewassen in. Elke plant wordt zo breed getekend als de ruimte die hij nodig heeft, zodat je ziet wat er past.",
        points: [
          "Bedden en potten in hun echte verhoudingen",
          "Markeer elke plant als gepland of gezaaid",
          "Meerdere tuinen op verschillende plekken, elk met een eigen klimaat (PRO)",
        ],
        alt: "Een groentebed van 2 × 1 m met sla, tuinboon, knoflook en radijs, en een rij seizoensgewassen om erin te slepen.",
      },
      {
        label: "Dagboek",
        title: "Volg elk zaaisel",
        text: "Elk zaaisel krijgt een oogstschatting en een eigen dagboek, zodat je volgend seizoen weet wat werkte.",
        points: [
          "Groeilogboek: gekiemd, uitgeplant, in bloei, eerste oogst, afgerond",
          "Een fotodagboek en notities voor elke plant",
          "Zie wat er groeit en welke oogst als volgende komt",
        ],
        alt: "Tuinoverzicht: vier gewassen groeien, één wordt geoogst, volgende oogst over 14 dagen.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Plan het hele jaar",
    subtitle: "Wat je vandaag kunt starten, vertelt Sowly je gratis. PRO kijkt verder vooruit en houdt voor jou de wacht.",
    items: [
      { title: "Jaarplanner", text: "Zaai- en oogstperiodes voor elk gewas over alle twaalf maanden, berekend voor jouw klimaat." },
      { title: "Slimme meldingen", text: "Een seintje wanneer het weer je planten bedreigt, wanneer er een oogst aankomt en wanneer het seizoen begint van een gewas op je verlanglijst." },
      { title: "Tuinassistent", text: "Stel vragen over je tuin en krijg antwoorden die Apple Intelligence op je apparaat schrijft. Vereist iOS 26 of nieuwer en een ondersteunde iPhone." },
      { title: "Tuingeheugen", text: "De oogsten die je vastlegt, sturen de schattingen van volgend jaar bij. Zo leert Sowly je tuin kennen." },
      { title: "Onbeperkt tuinen en zaaisels", text: "Thuis, volkstuin, balkon: zoveel tuinen en zaaisels als je wilt, elke tuin met een eigen klimaat." },
    ],
    plansTitle: "Kies wat bij je past",
    plans: ["Jaarlijks · 7 dagen gratis", "3 maanden", "Maandelijks", "Levenslang"],
    note: "Abonnementen worden automatisch verlengd tot je opzegt. Opzeggen kan altijd in je App Store-account.",
    screenshotAlt: "Jaarplanner: zaai-, plant- en oogstperiodes voor elk gewas, maand voor maand.",
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Jouw tuin, jouw zaak",
    text: "Sowly werkt zonder account en zonder server die jou kent. Wat je plant, fotografeert en opschrijft, blijft op je iPhone.",
    points: [
      { title: "Geen account", text: "Open de app en begin. Geen registratie, geen e-mailadres, geen wachtwoord." },
      { title: "Geen reclame, geen tracking", text: "Geen reclame en geen analytics-SDK. Niemand kijkt mee met wat je in de app doet." },
      { title: "Bewaard op je iPhone", text: "Tuinen, foto's en notities blijven op het apparaat. Verwijder je de app, dan zijn ze weg." },
      { title: "Assistent op je apparaat", text: "De tuinassistent antwoordt met Apple Intelligence op je iPhone, niet in een cloud." },
    ],
    staysTitle: "Blijft op je iPhone",
    stays: ["Tuinen, bedden en potten", "Zaaisels en groeilogboek", "Foto's en notities", "Vragen aan de assistent"],
    leavesTitle: "Het enige wat je iPhone verlaat",
    leaves: [
      "Een geschatte locatie, afgerond op ongeveer een kilometer, die voor weer en klimaat naar Apple Weather wordt gestuurd",
      "Aankopen, afgehandeld door Apple en RevenueCat met een anonieme ID",
    ],
    link: "Lees het privacybeleid",
  },
  faq: {
    eyebrow: "Veelgestelde vragen",
    title: "Goed om te weten",
    items: [
      {
        q: "Wat kan ik met Sowly plannen?",
        a: "Groente, fruit en kruiden – 81 gewassen, van tomaat en sla tot citroen en basilicum. Sowly is gemaakt voor alles wat je kunt eten, niet voor sierbloemen.",
      },
      {
        q: "Hoe nauwkeurig zijn de data?",
        a: "Het zijn schattingen, berekend op basis van de klimaatgemiddelden van je woonplaats en de verwachting van deze week. Ze zijn een goede leidraad, geen garantie: grond, zaad en het werkelijke weer kunnen ze verschuiven.",
      },
      {
        q: "Werkt het ook op een balkon?",
        a: "Ja. Voeg potten toe in plaats van bedden; op elke gewaspagina staat welke potmaat het gewas nodig heeft.",
      },
      {
        q: "Wat is gratis en wat is PRO?",
        a: "De aanbevelingen van vandaag, de gewaspagina's en één tuin met een beperkt aantal zaaisels zijn gratis. PRO voegt de jaarplanner, slimme meldingen, de tuinassistent, het tuingeheugen en onbeperkt tuinen en zaaisels toe.",
      },
      {
        q: "Welke iPhone heb ik nodig?",
        a: "Een iPhone met iOS 18 of nieuwer. De tuinassistent vereist iOS 26 of nieuwer op een iPhone die Apple Intelligence ondersteunt.",
      },
      {
        q: "Waarom vraagt Sowly om mijn locatie?",
        a: "Om het weer en het klimaat voor je tuin te laden. Er wordt alleen een geschatte positie, afgerond op ongeveer een kilometer, naar Apple Weather gestuurd.",
      },
    ],
  },
  cta: {
    title: "Klaar zodra de grond het is",
    text: "Ontdek wat je vandaag kunt zaaien – in jouw tuin, in jouw klimaat, deze week.",
  },
};
