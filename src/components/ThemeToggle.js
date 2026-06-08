import { HiMoon, HiSun } from "react-icons/hi";
import { useTheme } from "../lib/context/ThemeContext";
import { cn } from "../lib/utils";

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();
  const Icon = isDark ? HiSun : HiMoon;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center justify-center rounded-md border border-latte/70 bg-tan p-2 text-deep-brown shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-latte focus:outline-none dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:bg-dark-border",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Icon size={20} />
    </button>
  );
}
