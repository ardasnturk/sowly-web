import type { HomeDictionary } from "../types";

export const de: HomeDictionary = {
  hero: {
    eyebrow: "Pflanzplaner für das iPhone",
    title: "Säe das Richtige",
    highlight: "zur richtigen Zeit.",
    subtitle:
      "Sowly kennt dein lokales Klima und das Wetter dieser Woche und zeigt dir, welches Gemüse, Obst und welche Kräuter du heute starten kannst – im Garten oder auf dem Balkon.",
    secondary: "So funktioniert’s",
    badges: ["81 Pflanzen", "Kein Konto", "Keine Werbung, kein Tracking"],
    screenshotAlt:
      "Die Heute-Ansicht von Sowly: 48 Pflanzen können jetzt gesät werden, dazu Luft-, Boden- und Nachttemperatur und eine 7-Tage-Vorhersage.",
    chipSow: "Heute draußen säen",
    chipHarvest: "Ernte in 2 Wochen",
    chipFrost: "Kalte Nacht in Sicht",
  },
  how: {
    eyebrow: "So funktioniert’s",
    title: "Von deinem Wetter zu deinem Plan",
    subtitle: "Auf Samentütchen steht „Aussaat von März bis Mai“. Sowly schaut, wo du wohnst und was die Woche bringt.",
    steps: [
      { title: "Dein Klima", text: "Sowly liest das Klima deines Ortes: wie warm die Monate normalerweise sind und wann der Frost kommt und geht." },
      { title: "Die Vorhersage der Woche", text: "Die Vorhersage von Apple Weather zeigt, was ansteht: eine kalte Nacht, eine Hitzephase oder Starkregen." },
      { title: "Bodentemperatur", text: "Aus beidem schätzt Sowly, wie warm dein Boden ist – denn das entscheidet, ob ein Samen keimt." },
      { title: "Dein Plan", text: "Du bekommst eine Liste, was du heute starten kannst und wie: draußen säen, drinnen vorziehen oder auspflanzen – jeweils mit Ernteschätzung." },
    ],
  },
  features: {
    eyebrow: "Funktionen",
    title: "Alles vom Samen bis zur Ernte",
    subtitle: "Vier Ansichten, die dich von „Was kann ich säen?“ bis zum ersten vollen Korb begleiten.",
    items: [
      {
        label: "Heute",
        title: "Was kann ich heute starten?",
        text: "Öffne die App und sieh, welche von 81 Pflanzen bei dir gerade so weit sind – und ob du sie draußen säen, drinnen vorziehen oder auspflanzen solltest.",
        points: [
          "Luft-, geschätzte Boden- und Nachttemperatur auf einen Blick",
          "Warnungen vor kalten Nächten und Frost, Hitze und Starkregen",
          "Ein geschätzter Erntetermin für jede Pflanze",
        ],
        alt: "Heute-Ansicht mit der Zahl der Pflanzen, die jetzt gesät werden können, der Wochenvorhersage und einer Starkregenwarnung.",
      },
      {
        label: "Pflanzenseite",
        title: "Warum jetzt – oder warum noch warten",
        text: "Jede Pflanze erklärt sich selbst: warum heute ein guter Tag ist oder worauf sie noch wartet und wann ihre Zeit kommt.",
        points: [
          "Eine Zeitleiste mit Datum von der Aussaat bis zur Ernte",
          "Das Jahr der Pflanze: Aussaat- und Erntefenster",
          "Licht, Wasser, Abstand, Saattiefe, Bodentemperatur und Topfgröße, dazu ein Tipp",
        ],
        alt: "Tomatenseite: neun Wochen warten, ab dem 15. Januar drinnen vorziehen, weil der Boden noch zu kalt ist.",
      },
      {
        label: "Garten",
        title: "Zeichne deinen Garten",
        text: "Lege Beete in ihrer echten Größe an – zum Beispiel 2 × 1 m – und dazu Töpfe, dann ziehst du Pflanzen hinein. Jede Pflanze wird so breit gezeichnet, wie sie Platz braucht. So siehst du, was hineinpasst.",
        points: [
          "Beete und Töpfe in ihren echten Proportionen",
          "Jede Pflanze als geplant oder gesät markieren",
          "Mehrere Gärten an verschiedenen Orten, jeder mit eigenem Klima (PRO)",
        ],
        alt: "Ein 2 × 1 m großes Gemüsebeet mit Salat, Dicker Bohne, Knoblauch und Radieschen, darunter eine Reihe von Pflanzen der Saison zum Hineinziehen.",
      },
      {
        label: "Tagebuch",
        title: "Begleite jede Aussaat",
        text: "Jede Aussaat bekommt eine Ernteschätzung und ihr eigenes Tagebuch. So weißt du in der nächsten Saison, was funktioniert hat.",
        points: [
          "Wachstumsprotokoll: gekeimt, ausgepflanzt, Blüte, erste Ernte, abgeschlossen",
          "Ein Fototagebuch und Notizen für jede Pflanze",
          "Sieh, was gerade wächst und welche Ernte als Nächstes ansteht",
        ],
        alt: "Gartenübersicht: vier Pflanzen wachsen, eine wird geerntet, nächste Ernte in 14 Tagen.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Plane das ganze Jahr",
    subtitle: "Was du heute starten kannst, sagt dir Sowly kostenlos. PRO schaut weiter voraus und passt für dich auf.",
    items: [
      { title: "Jahresplaner", text: "Aussaat- und Erntefenster für jede Pflanze über alle zwölf Monate, berechnet für dein Klima." },
      { title: "Smarte Hinweise", text: "Eine Vorwarnung, wenn das Wetter deine Pflanzen bedroht, wenn eine Ernte ansteht und wenn für eine Pflanze auf deiner Wunschliste die Saison beginnt." },
      { title: "Gartenassistent", text: "Stell Fragen zu deinem Garten und erhalte Antworten, die Apple Intelligence auf deinem Gerät schreibt. Benötigt iOS 26 oder neuer und ein unterstütztes iPhone." },
      { title: "Gartengedächtnis", text: "Die Ernten, die du einträgst, verfeinern die Schätzungen fürs nächste Jahr. So lernt Sowly deinen Garten kennen." },
      { title: "Unbegrenzt Gärten und Aussaaten", text: "Zuhause, Schrebergarten, Balkon: so viele Gärten und Aussaaten, wie du möchtest, jeder Garten mit eigenem Klima." },
    ],
    plansTitle: "Wähle, was zu dir passt",
    plans: ["Jährlich · 7 Tage gratis", "3 Monate", "Monatlich", "Lebenslang"],
    note: "Abonnements verlängern sich automatisch, bis du kündigst. Jederzeit in deinem App Store-Account kündbar.",
    screenshotAlt: "Jahresplaner: Aussaat-, Pflanz- und Erntefenster für jede Pflanze, Monat für Monat.",
  },
  privacy: {
    eyebrow: "Datenschutz",
    title: "Dein Garten geht nur dich etwas an",
    text: "Sowly funktioniert ohne Konto und ohne Server, der dich kennt. Was du pflanzt, fotografierst und notierst, bleibt auf deinem iPhone.",
    points: [
      { title: "Kein Konto", text: "App öffnen und loslegen. Keine Registrierung, keine E-Mail-Adresse, kein Passwort." },
      { title: "Keine Werbung, kein Tracking", text: "Keine Werbung und kein Analyse-SDK. Niemand schaut zu, was du in der App machst." },
      { title: "Auf deinem iPhone gespeichert", text: "Gärten, Fotos und Notizen bleiben auf dem Gerät. Löschst du die App, sind sie weg." },
      { title: "Assistent auf dem Gerät", text: "Der Gartenassistent antwortet mit Apple Intelligence auf deinem iPhone, nicht in einer Cloud." },
    ],
    staysTitle: "Bleibt auf deinem iPhone",
    stays: ["Gärten, Beete und Töpfe", "Aussaaten und Wachstumsprotokoll", "Fotos und Notizen", "Fragen an den Assistenten"],
    leavesTitle: "Das Einzige, was es verlässt",
    leaves: [
      "Ein ungefährer Standort, auf etwa einen Kilometer gerundet, der für Wetter und Klima an Apple Weather gesendet wird",
      "Käufe, abgewickelt von Apple und RevenueCat mit einer anonymen ID",
    ],
    link: "Datenschutzerklärung lesen",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Gut zu wissen",
    items: [
      {
        q: "Was kann ich mit Sowly planen?",
        a: "Gemüse, Obst und Kräuter – 81 Pflanzen von Tomate und Salat bis Zitrone und Basilikum. Sowly ist für alles gemacht, was man essen kann, nicht für Zierblumen.",
      },
      {
        q: "Wie genau sind die Termine?",
        a: "Es sind Schätzungen, berechnet aus den Klimamittelwerten deines Ortes und der Vorhersage dieser Woche. Sie sind eine gute Orientierung, aber keine Garantie: Boden, Saatgut und das tatsächliche Wetter können sie verschieben.",
      },
      {
        q: "Funktioniert das auch auf dem Balkon?",
        a: "Ja. Lege Töpfe statt Beete an – jede Pflanzenseite nennt dir die Topfgröße, die die Pflanze braucht.",
      },
      {
        q: "Was ist kostenlos und was ist PRO?",
        a: "Die Empfehlungen für heute, die Pflanzenseiten und ein Garten mit einer begrenzten Zahl von Aussaaten sind kostenlos. PRO ergänzt den Jahresplaner, smarte Hinweise, den Gartenassistenten, das Gartengedächtnis sowie unbegrenzt Gärten und Aussaaten.",
      },
      {
        q: "Welches iPhone brauche ich?",
        a: "Ein iPhone mit iOS 18 oder neuer. Der Gartenassistent benötigt iOS 26 oder neuer auf einem iPhone, das Apple Intelligence unterstützt.",
      },
      {
        q: "Warum fragt Sowly nach meinem Standort?",
        a: "Um Wetter und Klima für deinen Garten zu laden. An Apple Weather wird nur eine ungefähre, auf etwa einen Kilometer gerundete Position gesendet.",
      },
    ],
  },
  cta: {
    title: "Bereit, sobald der Boden es ist",
    text: "Finde heraus, was du heute säen kannst – in deinem Garten, in deinem Klima, in dieser Woche.",
  },
};
