/**
 * App Store link. Empty until the app is released: while it is empty, every App Store
 * button shows a "Coming soon to the App Store" state instead of a link.
 * After release set it to e.g. "https://apps.apple.com/app/id0000000000".
 */
export const APP_STORE_URL = "";
export const SUPPORT_EMAIL = "support@ardasnturk.com";
export const SITE_URL = "https://sowly.ardasnturk.com";

/** Screenshots shown on the landing page: `public/screens/<language>/<name>.webp` (780 px wide, unframed). */
export type ScreenName = "today" | "crop" | "bed" | "garden" | "planner";

/** Languages that have their own screenshot folder; every other language shows the English ones. */
const SCREEN_LANGUAGES: readonly string[] = ["en"];

export function screenshot(language: string, name: ScreenName): string {
  const folder = SCREEN_LANGUAGES.includes(language) ? language : "en";
  return `/screens/${folder}/${name}.webp`;
}

/** Produce photo (320 px WebP on a pale-green background, meant to be shown in a circle). */
export function crop(name: string): string {
  return `/crops/${name}.webp`;
}
