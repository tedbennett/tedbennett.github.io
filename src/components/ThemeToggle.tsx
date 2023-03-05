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
      className="border-2 border-black border-opacity-10 rounded-lg p-1 w-8 h-8 "
    >
      {theme === "light" ? (
        <i class="ph-sun-bold" />
      ) : (
        <i class="ph-moon-bold" />
      )}
    </button>
  );
}
