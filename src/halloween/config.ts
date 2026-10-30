/**
 * Seasonal Halloween layer. Everything lives in src/halloween/ and is mounted once in App.tsx.
 * To retire it: set HALLOWEEN_ON to false (or delete this folder, the <HalloweenLayer /> line
 * in App.tsx, and the data-cardinal-mark attribute in CardinalMark.tsx).
 */
export const HALLOWEEN_ON = true;

/** The five hidden pumpkins: where each one hides, and the hint shown in the hunt card. */
export const PUMPKINS: { id: string; match: (path: string) => boolean; selector?: string; hint: string }[] = [
  { id: "home-work", match: (p) => p === "/", selector: "#portfolio", hint: "Homepage, near our work" },
  { id: "home-faq", match: (p) => p === "/", selector: "#faq", hint: "Homepage, among the questions" },
  { id: "services", match: (p) => p === "/services" || p.startsWith("/services/"), hint: "Any services page" },
  { id: "about", match: (p) => p === "/about", hint: "The About page" },
  { id: "pricing", match: (p) => p === "/pricing", hint: "The Pricing page" },
];

/** Shown when a visitor finds all five. Edit freely; it links to the contact page. */
export const HUNT_REWARD = {
  title: "You found every pumpkin.",
  body: "Mention “Pumpkin Hunter” when you reach out and we'll include a free website audit with your consultation.",
  cta: "Claim it",
};
