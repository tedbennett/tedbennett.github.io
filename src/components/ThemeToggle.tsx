import { useState } from "preact/hooks";
import type { FunctionalComponent } from "preact";
import { setTheme as setStoredTheme, Theme } from "../helpers/theme";

export default function ThemeToggle(): FunctionalComponent {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");

  const handleClick = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setStoredTheme(newTheme as Theme);
  };

  return (
    <button
      onClick={handleClick}
      className="border-[0px] border-zinc-500 dark:border-zinc-300 rounded-lg px-3 py-1 font-semibold uppercase"
    >
      <span>{theme === "dark" ? "dark" : "light"}</span>
    </button>
  );
}
