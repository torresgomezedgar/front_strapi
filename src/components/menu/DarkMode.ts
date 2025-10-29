import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function DarkMode() {
  const [theme, setTheme] = useState<Theme>("light");

  // Detectar el tema inicial
  useEffect(() => {
    const userTheme = localStorage.getItem("theme") as Theme | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(userTheme ?? (systemPrefersDark ? "dark" : "light"));
  }, []);

  // Aplicar cambios al DOM y guardar
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.setAttribute("data-theme", "dark");
    } else {
      root.classList.remove("dark");
      root.setAttribute("data-theme", "light");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 🔥 Detectar cambios en el sistema SIEMPRE
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? "dark" : "light";
      setTheme(newTheme);
    };

    // Suscribirse a los cambios
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return { theme, toggleTheme, isDark: theme === "dark" };
}
