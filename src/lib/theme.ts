// Light/dark theme: use the visitor's saved choice, or follow their device when unset.
// index.html applies the same rule before first paint.
import { useEffect, useSyncExternalStore } from "react";

export type ThemePreference = "light" | "dark" | "system";
export type Theme = "light" | "dark";

const KEY = "cc-theme";
const listeners = new Set<() => void>();
const media = () => window.matchMedia("(prefers-color-scheme: dark)");

export function getPreference(): ThemePreference {
  if (typeof window === "undefined") return "system";
  const v = localStorage.getItem(KEY);
  return v === "light" || v === "dark" ? v : "system";
}

export function resolveTheme(pref = getPreference()): Theme {
  if (pref !== "system") return pref;
  return typeof window !== "undefined" && media().matches ? "dark" : "light";
}

/** Writes the theme onto <html> (class + color-scheme) and the browser chrome color. */
export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0B1020" : "#FFFFFF");
}

export function setPreference(pref: ThemePreference) {
  if (pref === "system") localStorage.removeItem(KEY);
  else localStorage.setItem(KEY, pref);
  applyTheme(resolveTheme(pref));
  listeners.forEach((l) => l());
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const mq = media();
  const onOs = () => {
    if (getPreference() === "system") applyTheme(resolveTheme("system"));
    cb();
  };
  mq.addEventListener("change", onOs);
  return () => {
    listeners.delete(cb);
    mq.removeEventListener("change", onOs);
  };
}

/** Current resolved theme; "light" during prerender. */
export function useTheme(): Theme {
  const theme = useSyncExternalStore(subscribe, () => resolveTheme(), () => "light" as Theme);
  // Keep <html> in sync if the OS setting changes while the visitor follows the system
  useEffect(() => applyTheme(theme), [theme]);
  return theme;
}
