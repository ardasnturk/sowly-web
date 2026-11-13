import type { HomeDictionary } from "../types";

export const en: HomeDictionary = {
  hero: {
    eyebrow: "Planting planner for iPhone",
    title: "Sow the right thing",
    highlight: "at the right time.",
    subtitle:
      "Sowly reads your local climate and this week's weather and tells you which vegetables, fruit and herbs you can start today — in the garden or on the balcony.",
    secondary: "See how it works",
    badges: ["81 crops", "No account", "No ads, no tracking"],
    screenshotAlt: "Sowly's Today screen: 48 crops are ready to sow, with air, soil and night temperature and a seven-day forecast.",
    chipSow: "Sow outdoors today",
    chipHarvest: "Harvest in 2 weeks",
    chipFrost: "Cold night ahead",
  },
  how: {
    eyebrow: "How it works",
    title: "From your weather to your plan",
    subtitle: "Seed packets say “sow from March to May”. Sowly looks at where you live and what the week will bring.",
    steps: [
      { title: "Your climate", text: "Sowly reads the climate of your place: how warm the months usually are and when the frost comes and goes." },
      { title: "This week's forecast", text: "The forecast from Apple Weather shows what is ahead: a cold night, a hot spell or heavy rain." },
      { title: "Soil temperature", text: "From both, Sowly estimates how warm your soil is — the thing that decides whether a seed sprouts." },
      { title: "Your plan", text: "You get a list of what to start today and how: sow outdoors, start indoors or plant out, each with a harvest estimate." },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything from seed to harvest",
    subtitle: "Four screens that take you from “what can I sow?” to the first basket.",
    items: [
      {
        label: "Today",
        title: "What can I start today?",
        text: "Open the app and see which of 81 crops are ready where you live — and whether to sow them outdoors, start them indoors or plant them out.",
        points: [
          "Air, estimated soil and night temperature at a glance",
          "Warnings for cold nights and frost, heat and heavy rain",
          "An estimated harvest date for every crop",
        ],
        alt: "Today screen with the number of crops ready to sow, the week's forecast and a heavy rain warning.",
      },
      {
        label: "Crop page",
        title: "Why now — or why wait",
        text: "Every crop explains itself: why today is a good day, or what it is still waiting for and when its time comes.",
        points: [
          "A dated timeline from sowing to harvest",
          "The crop's year: sowing and harvest windows",
          "Light, water, spacing, depth, soil temperature and pot size, plus a tip",
        ],
        alt: "Tomato page: wait nine weeks, start indoors from January 15, because the soil is still too cold.",
      },
      {
        label: "Garden",
        title: "Draw your garden",
        text: "Add beds with their real size — say 2 × 1 m — and pots, then drag crops into them. Each plant is drawn as wide as the space it needs, so you see what fits.",
        points: [
          "Beds and pots in their true proportions",
          "Mark each plant as planned or sown",
          "Several gardens in different places, each with its own climate (PRO)",
        ],
        alt: "A 2 × 1 m vegetable bed with lettuce, broad bean, garlic and radish, and a row of crops in season to drag in.",
      },
      {
        label: "Journal",
        title: "Follow every sowing",
        text: "Each sowing gets a harvest estimate and its own journal, so next season you know what worked.",
        points: [
          "Growth log: sprouted, planted out, flowering, first harvest, finished",
          "A photo diary and notes for every plant",
          "See what is growing and which harvest is next",
        ],
        alt: "Garden overview: four crops growing, one being harvested, next harvest in 14 days.",
      },
    ],
  },
  pro: {
    eyebrow: "Sowly PRO",
    title: "Plan the whole year",
    subtitle: "Sowly tells you what to start today for free. PRO looks further ahead and keeps watch for you.",
    items: [
      { title: "Year planner", text: "Sowing and harvest windows for every crop across all twelve months, worked out for your climate." },
      { title: "Smart alerts", text: "A heads-up when weather threatens your plants, when a harvest is due and when a crop on your wish list comes into season." },
      { title: "Garden assistant", text: "Ask about your garden and get answers written on your device by Apple Intelligence. Needs iOS 26 or later and a supported iPhone." },
      { title: "Garden memory", text: "The harvests you log adjust next year's estimates, so Sowly gets to know your garden." },
      { title: "Unlimited gardens and sowings", text: "Home, allotment, balcony: as many gardens and sowings as you like, each with its own climate." },
    ],
    plansTitle: "Choose what suits you",
    plans: ["Yearly · 7 days free", "3 months", "Monthly", "Lifetime"],
    note: "Subscriptions renew automatically until cancelled. Cancel any time in your App Store account.",
    screenshotAlt: "Year planner: sowing, planting and harvest windows for each crop, month by month.",
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Your garden is your business",
    text: "Sowly works without an account and without a server that knows you. What you plant, photograph and write down stays on your iPhone.",
    points: [
      { title: "No account", text: "Open the app and start. No sign-up, no e-mail address, no password." },
      { title: "No ads, no tracking", text: "No advertising and no analytics SDK. Nobody watches what you do in the app." },
      { title: "Stored on your iPhone", text: "Gardens, photos and notes stay on the device. Delete the app and they are gone." },
      { title: "On-device assistant", text: "The garden assistant is answered by Apple Intelligence on your iPhone, not in a cloud." },
    ],
    staysTitle: "Stays on your iPhone",
    stays: ["Gardens, beds and pots", "Sowings and growth log", "Photos and notes", "Questions to the assistant"],
    leavesTitle: "The only things that leave it",
    leaves: [
      "An approximate location, rounded to about a kilometre, sent to Apple Weather for weather and climate",
      "Purchases, handled by Apple and RevenueCat with an anonymous ID",
    ],
    link: "Read the privacy policy",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Good to know",
    items: [
      {
        q: "What can I plan with Sowly?",
        a: "Vegetables, fruit and herbs — 81 crops from tomato and lettuce to lemon and basil. Sowly is made for things you can eat, not for ornamental flowers.",
      },
      {
        q: "How accurate are the dates?",
        a: "They are estimates worked out from the climate averages of your place and this week's forecast. They are a good guide, not a guarantee: soil, seed and the actual weather can shift them.",
      },
      {
        q: "Does it work on a balcony?",
        a: "Yes. Add pots instead of beds, and each crop page tells you the pot size it needs.",
      },
      {
        q: "What is free and what is PRO?",
        a: "Today's recommendations, the crop pages and one garden with a limited number of sowings are free. PRO adds the year planner, smart alerts, the garden assistant, garden memory and unlimited gardens and sowings.",
      },
      {
        q: "Which iPhone do I need?",
        a: "An iPhone with iOS 18 or later. The garden assistant needs iOS 26 or later on an iPhone that supports Apple Intelligence.",
      },
      {
        q: "Why does Sowly ask for my location?",
        a: "To load the weather and the climate for your garden. Only an approximate position, rounded to about a kilometre, is sent to Apple Weather.",
      },
    ],
  },
  cta: {
    title: "Ready when the soil is",
    text: "Find out what you can sow today — in your garden, in your climate, this week.",
  },
};
