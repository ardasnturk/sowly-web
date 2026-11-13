import type { HomeDictionary } from "../types";

export const fr: HomeDictionary = {
  hero: {
    eyebrow: "Calendrier de semis pour iPhone",
    title: "Semez ce qu'il faut,",
    highlight: "quand il faut.",
    subtitle:
      "Sowly lit votre climat local et la météo de la semaine et vous indique quels légumes, fruits et aromates vous pouvez démarrer aujourd'hui – au jardin ou sur le balcon.",
    secondary: "Voir comment ça marche",
    badges: ["81 cultures", "Sans compte", "Sans pub ni suivi"],
    screenshotAlt: "Écran Aujourd'hui de Sowly : 48 cultures sont prêtes à semer, avec la température de l'air, du sol et de la nuit et des prévisions sur sept jours.",
    chipSow: "À semer dehors aujourd'hui",
    chipHarvest: "Récolte dans 2 semaines",
    chipFrost: "Nuit froide en vue",
  },
  how: {
    eyebrow: "Fonctionnement",
    title: "De votre météo à votre plan",
    subtitle: "Les sachets de graines disent « semer de mars à mai ». Sowly regarde où vous vivez et ce que la semaine vous réserve.",
    steps: [
      { title: "Votre climat", text: "Sowly lit le climat de votre lieu : les températures habituelles de chaque mois et le moment où le gel arrive et repart." },
      { title: "Les prévisions de la semaine", text: "Les prévisions d'Apple Weather montrent ce qui vous attend : une nuit froide, un coup de chaud ou de fortes pluies." },
      { title: "La température du sol", text: "À partir des deux, Sowly estime la température de votre sol – c'est elle qui décide si une graine lève." },
      { title: "Votre plan", text: "Vous obtenez la liste de ce que vous pouvez démarrer aujourd'hui, et comment : semer dehors, semer à l'intérieur ou repiquer dehors, avec à chaque fois une estimation de récolte." },
    ],
  },
  features: {
    eyebrow: "Fonctionnalités",
    title: "Tout, de la graine à la récolte",
    subtitle: "Quatre écrans qui vous mènent de « que puis-je semer ? » au premier panier.",
    items: [
      {
        label: "Aujourd'hui",
        title: "Que puis-je démarrer aujourd'hui ?",
        text: "Ouvrez l'app et voyez lesquelles des 81 cultures sont prêtes là où vous vivez – et s'il vaut mieux les semer dehors, les semer à l'intérieur ou les repiquer dehors.",
        points: [
          "Température de l'air, du sol (estimée) et de la nuit en un coup d'œil",
          "Alertes en cas de nuits froides et de gel, de chaleur et de fortes pluies",
          "Une date de récolte estimée pour chaque culture",
        ],
        alt: "Écran Aujourd'hui avec le nombre de cultures prêtes à semer, les prévisions de la semaine et une alerte de fortes pluies.",
      },
      {
        label: "Fiche culture",
        title: "Pourquoi maintenant – ou pourquoi attendre",
        text: "Chaque culture s'explique d'elle-même : pourquoi aujourd'hui est un bon jour, ou ce qu'elle attend encore et quand son heure viendra.",
        points: [
          "Une chronologie datée, du semis à la récolte",
          "L'année de la culture : périodes de semis et de récolte",
          "Lumière, arrosage, espacement, profondeur, température du sol et taille du pot, plus un conseil",
        ],
        alt: "Fiche de la tomate : attendre neuf semaines et semer à l'intérieur à partir du 15 janvier, car le sol est encore trop froid.",
      },
      {
        label: "Jardin",
        title: "Dessinez votre jardin",
        text: "Ajoutez des planches à leurs dimensions réelles – par exemple 2 × 1 m – et des pots, puis faites-y glisser vos cultures. Chaque plante est dessinée à la largeur de l'espace dont elle a besoin : vous voyez tout de suite ce qui tient.",
        points: [
          "Planches et pots à leurs vraies proportions",
          "Marquez chaque plante comme prévue ou semée",
          "Plusieurs jardins à des endroits différents, chacun avec son propre climat (PRO)",
        ],
        alt: "Une planche de légumes de 2 × 1 m avec laitue, fève, ail et radis, et une rangée de cultures de saison à faire glisser.",
      },
      {
        label: "Journal",
        title: "Suivez chaque semis",
        text: "Chaque semis reçoit une estimation de récolte et son propre journal : la saison prochaine, vous saurez ce qui a marché.",
        points: [
          "Suivi de croissance : levée, repiquage, floraison, première récolte, terminé",
          "Un journal photo et des notes pour chaque plante",
          "Voyez ce qui pousse et quelle récolte arrive ensuite",
        ],
        alt: "Vue d'ensemble du jardin : quatre cultures en croissance, une en cours de récolte, prochaine récolte dans 14 jours.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Planifiez toute l'année",
    subtitle: "Sowly vous dit gratuitement quoi démarrer aujourd'hui. PRO voit plus loin et veille pour vous.",
    items: [
      { title: "Planificateur annuel", text: "Les périodes de semis et de récolte de chaque culture sur les douze mois, calculées pour votre climat." },
      { title: "Alertes intelligentes", text: "Un signal quand la météo menace vos plantes, quand une récolte approche et quand une culture de votre liste d'envies arrive en saison." },
      { title: "Assistant jardin", text: "Posez vos questions sur votre jardin et obtenez des réponses rédigées sur votre appareil par Apple Intelligence. Nécessite iOS 26 ou version ultérieure et un iPhone compatible." },
      { title: "Mémoire du jardin", text: "Les récoltes que vous enregistrez ajustent les estimations de l'année suivante : Sowly apprend à connaître votre jardin." },
      { title: "Jardins et semis illimités", text: "Maison, jardin partagé, balcon : autant de jardins et de semis que vous le souhaitez, chacun avec son propre climat." },
    ],
    plansTitle: "Choisissez ce qui vous convient",
    plans: ["Annuel · 7 jours gratuits", "3 mois", "Mensuel", "À vie"],
    note: "Les abonnements se renouvellent automatiquement jusqu'à leur annulation. Annulez à tout moment depuis votre compte App Store.",
    screenshotAlt: "Planificateur annuel : périodes de semis, de plantation et de récolte de chaque culture, mois par mois.",
  },
  privacy: {
    eyebrow: "Confidentialité",
    title: "Votre jardin ne regarde que vous",
    text: "Sowly fonctionne sans compte et sans serveur qui vous connaisse. Ce que vous plantez, photographiez et notez reste sur votre iPhone.",
    points: [
      { title: "Sans compte", text: "Ouvrez l'app et commencez. Pas d'inscription, pas d'adresse e-mail, pas de mot de passe." },
      { title: "Sans pub ni suivi", text: "Aucune publicité et aucun SDK d'analyse. Personne n'observe ce que vous faites dans l'app." },
      { title: "Stocké sur votre iPhone", text: "Jardins, photos et notes restent sur l'appareil. Supprimez l'app, et ils disparaissent." },
      { title: "Assistant sur l'appareil", text: "Les réponses de l'assistant jardin sont générées par Apple Intelligence sur votre iPhone, pas dans un cloud." },
    ],
    staysTitle: "Reste sur votre iPhone",
    stays: ["Jardins, planches et pots", "Semis et suivi de croissance", "Photos et notes", "Questions posées à l'assistant"],
    leavesTitle: "Les seules choses qui en sortent",
    leaves: [
      "Une position approximative, arrondie à environ un kilomètre, envoyée à Apple Weather pour la météo et le climat",
      "Les achats, gérés par Apple et RevenueCat avec un identifiant anonyme",
    ],
    link: "Lire la politique de confidentialité",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Bon à savoir",
    items: [
      {
        q: "Que puis-je planifier avec Sowly ?",
        a: "Des légumes, des fruits et des aromates – 81 cultures, de la tomate et de la laitue au citron et au basilic. Sowly est conçue pour ce qui se mange, pas pour les fleurs d'ornement.",
      },
      {
        q: "Les dates sont-elles précises ?",
        a: "Ce sont des estimations calculées à partir des moyennes climatiques de votre lieu et des prévisions de la semaine. Elles donnent un bon repère, pas une garantie : le sol, les semences et la météo réelle peuvent les décaler.",
      },
      {
        q: "Est-ce que ça marche sur un balcon ?",
        a: "Oui. Ajoutez des pots à la place des planches, et chaque fiche culture vous indique la taille de pot nécessaire.",
      },
      {
        q: "Qu'est-ce qui est gratuit, et qu'apporte PRO ?",
        a: "Les recommandations du jour, les fiches culture et un jardin avec un nombre limité de semis sont gratuits. PRO ajoute le planificateur annuel, les alertes intelligentes, l'assistant jardin, la mémoire du jardin ainsi que des jardins et des semis illimités.",
      },
      {
        q: "Quel iPhone me faut-il ?",
        a: "Un iPhone avec iOS 18 ou version ultérieure. L'assistant jardin nécessite iOS 26 ou version ultérieure sur un iPhone compatible avec Apple Intelligence.",
      },
      {
        q: "Pourquoi Sowly demande-t-elle ma position ?",
        a: "Pour charger la météo et le climat de votre jardin. Seule une position approximative, arrondie à environ un kilomètre, est envoyée à Apple Weather.",
      },
    ],
  },
  cta: {
    title: "Prêt dès que la terre l'est",
    text: "Découvrez ce que vous pouvez semer aujourd'hui – dans votre jardin, sous votre climat, cette semaine.",
  },
};
