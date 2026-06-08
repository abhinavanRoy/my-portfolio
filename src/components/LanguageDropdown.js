import { useEffect, useMemo, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useTranslation } from "react-i18next";
import { cn } from "../lib/utils";

export default function LanguageDropdown({ className }) {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const languageOptions = useMemo(
    () => t("languageSwitcher.options", { returnObjects: true }),
    [t]
  );

  const currentLanguage =
    languageOptions.find((option) => option.code === i18n.resolvedLanguage) ||
    languageOptions[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleLanguageChange(languageCode) {
    if (languageCode !== i18n.resolvedLanguage) {
      i18n.changeLanguage(languageCode);
    }

    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen((currentState) => !currentState)}
        className="inline-flex items-center justify-center gap-2 rounded-md border border-latte/70 bg-tan px-3 py-2 text-deep-brown shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-latte focus:outline-none dark:border-dark-border dark:bg-dark-surface dark:text-dark-text dark:hover:bg-dark-border"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t("languageSwitcher.buttonLabel")}
        title={t("languageSwitcher.currentLanguage", {
          language: currentLanguage?.label,
        })}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          {currentLanguage?.shortLabel}
        </span>
        <HiChevronDown
          size={18}
          className={cn("transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-20 mt-2 min-w-[6rem] overflow-hidden rounded-md border border-latte/70 bg-cream shadow-xl dark:border-dark-border dark:bg-dark-surface">
          <p className="px-3 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-deep-brown/70 dark:text-dark-muted">
            {t("languageSwitcher.label")}
          </p>
          <ul role="listbox" aria-label={t("languageSwitcher.label")} className="py-1">
            {languageOptions.map((option) => {
              const isSelected = option.code === i18n.resolvedLanguage;

              return (
                <li key={option.code} role="option" aria-selected={isSelected}>
                  <button
                    type="button"
                    onClick={() => handleLanguageChange(option.code)}
                    className={cn(
                      "flex w-full items-center justify-center gap-2 px-3 py-2 text-left font-google-sans text-sm text-deep-brown transition-colors duration-200 hover:bg-tan/70 dark:text-dark-text dark:hover:bg-dark-border",
                      isSelected && "bg-tan/60 dark:bg-dark-border"
                    )}
                  >
                    <span className="text-base leading-none">{option.flag}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-deep-brown/70 dark:text-dark-muted">
                      {option.shortLabel}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
