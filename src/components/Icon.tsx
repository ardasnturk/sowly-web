// Stroke icons (24×24, 2px), drawn in the style of SF Symbols.
const PATHS = {
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",
  cloud: "M17.5 19H7a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 11a4 4 0 0 1-1.5 8Z",
  rain: "M17.5 15H7a5 5 0 1 1 .9-9.9A6 6 0 0 1 19 7a4 4 0 0 1-1.5 8ZM8 18.5l-1 2.5M12 18.5l-1 2.5M16 18.5l-1 2.5",
  thermometer: "M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0ZM12 9v8",
  sprout: "M12 21v-9M12 12c0-3.5-2.5-6-7-6 0 4 2.5 6 7 6ZM12 15c0-3 2.5-5.5 7-5.500 0 3.500-2.500 5.500-7 5.500ZM7 21h10",
  globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18",
  calendar: "M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM4 10h16M8 3v4M16 3v4",
  bell: "M6 16V11a6 6 0 0 1 12 0v5l2 2H4l2-2ZM10 21h4",
  sparkles: "M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3ZM19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
  history: "M3 12a9 9 0 1 0 3-6.700M3 4v4h4M12 7v5l3 2",
  grid: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
  basket: "M3 10h18l-1.500 9a2 2 0 0 1-2 1.700H6.500a2 2 0 0 1-2-1.700L3 10ZM8 10l3-6M16 10l-3-6M9 14v3M15 14v3",
  snow: "M12 2v20M4 7l16 10M20 7 4 17M9 4l3 2 3-2M9 20l3-2 3 2",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  eyeOff: "M3 3l18 18M10.600 6.200A9.500 9.500 0 0 1 12 6c5 0 8.500 4 9.500 6a13 13 0 0 1-2.600 3.400M6.500 7.600A13 13 0 0 0 2.500 12c1 2 4.500 6 9.500 6a9.500 9.500 0 0 0 4-.900M9.900 9.900a3 3 0 0 0 4.200 4.200",
  phone: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2ZM11 18h2",
  lock: "M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1ZM8 11V7a4 4 0 0 1 8 0v4",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4",
  send: "M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z",
  check: "m5 12 5 5L20 7",
  chevron: "m6 9 6 6 6-6",
  mail: "M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1ZM3 7l9 6 9-6",
  arrowLeft: "M19 12H5M12 19l-7-7 7-7",
  arrowRight: "M5 12h14M12 5l7 7-7 7",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  infinity: "M7 8a4 4 0 1 0 0 8c2.500 0 3.500-2 5-4s2.500-4 5-4a4 4 0 1 1 0 8c-2.500 0-3.500-2-5-4S9.500 8 7 8Z",
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={PATHS[name]} />
    </svg>
  );
}
