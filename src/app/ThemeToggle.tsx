"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Avoid hydration mismatch by only setting theme after component mounts
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    if (isDark) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <div className="h-11 w-11 rounded-xl bg-black/5 border border-black/10 dark:border-white/10" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="focus-ring flex h-11 w-11 items-center justify-center rounded-xl bg-black/5 border border-black/10 text-slate-800 hover:bg-black/10 transition-all dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 transition-transform hover:rotate-12 duration-300" />
      ) : (
        <Sun className="w-5 h-5 transition-transform hover:rotate-90 duration-500" />
      )}
    </button>
  );
}
