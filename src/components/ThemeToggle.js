import { HiMoon, HiSun } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/context/ThemeContext";
import { cn } from "../lib/utils";

export default function ThemeToggle({ className }) {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const Icon = isDark ? HiSun : HiMoon;
  const toggleLabel = isDark
    ? t("actions.switchToLightMode")
    : t("actions.switchToDarkMode");

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-tan p-2 text-deep-brown shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-latte focus:outline-none dark:bg-dark-surface dark:text-dark-text dark:hover:bg-dark-border",
        className
      )}
      aria-label={toggleLabel}
      aria-pressed={isDark}
      title={toggleLabel}
    >
      <Icon size={20} />
    </button>
  );
}
