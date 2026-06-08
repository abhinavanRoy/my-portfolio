import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.json";
import en from "./locales/en.json";

const STORAGE_KEY = "portfolio-language";

function syncDocumentLanguage(language) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = language;

  const title = i18n.t("brand.siteTitle");
  if (title) {
    document.title = title;
  }

  const description = i18n.t("brand.siteDescription");
  const descriptionMeta = document.querySelector('meta[name="description"]');

  if (descriptionMeta && description) {
    descriptionMeta.setAttribute("content", description);
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "de"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: STORAGE_KEY,
    },
  })
  .then(() => {
    syncDocumentLanguage(i18n.resolvedLanguage || i18n.language || "en");
  });

i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
