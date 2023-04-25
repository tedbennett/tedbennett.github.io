export const theme = {
  dark: "dark",
  light: "light",
} as const;

export type Theme = keyof typeof theme;

export const getTheme = (): Theme => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    const stored = localStorage.getItem("theme");
    if (stored in theme) return stored as Theme;
    return "dark";
  }
  if (window && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export const setTheme = (theme: Theme) => {
  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
  window?.localStorage.setItem("theme", theme);
};

export const toggleTheme = () =>
  setTheme(getTheme() === "dark" ? "light" : "dark");
