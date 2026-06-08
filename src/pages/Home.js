import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "../components/Typewriter";
import { useFirstVisit } from "../lib/hooks/useFirstVisit";

export default function Home() {
  const { t } = useTranslation();
  const isFirstVisit = useFirstVisit("home");
  const roles = useMemo(() => t("home.roles", { returnObjects: true }), [t]);
  const taglineAnimationClass = isFirstVisit ? "opacity-0 animate-fade-in-up" : "";
  const headingAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed"
    : "";
  const roleAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-2"
    : "";
  const detailAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-3"
    : "";
  const statusAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-3"
    : "";
  const quoteAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-3"
    : "";

  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col justify-center px-5 py-10 md:px-8 md:py-16">
      <div className="max-w-3xl text-left">
        <p
          className={`mb-6 font-google-sans text-xs uppercase tracking-[0.28em] text-deep-brown/60 dark:text-dark-muted/70 sm:text-sm ${taglineAnimationClass}`}
        >
          {"// "}
          {t("home.tagline")}
        </p>
        <h1
          className={`font-paprika text-4xl leading-tight text-deep-brown dark:text-dark-text sm:text-5xl md:text-6xl ${headingAnimationClass}`}
        >
          <span className="mr-3 text-latte dark:text-dark-text">{t("home.greeting")}</span>
          <span className="block text-deep-brown dark:text-tan sm:inline">{t("home.firstName")}</span>
        </h1>
        <div
          className={`mt-3 min-h-[2rem] font-jetbrains-mono text-lg font-light text-deep-brown/90 dark:text-dark-text sm:min-h-[2.5rem] sm:text-xl md:text-2xl ${roleAnimationClass}`}
        >
          <Typewriter texts={roles} typeSpeed={50} />
        </div>
        <p
          className={`mt-6 max-w-2xl font-google-sans text-base font-light leading-7 text-deep-brown/80 dark:text-dark-muted sm:text-lg md:text-xl ${detailAnimationClass}`}
        >
          {t("home.shortDetail")}
        </p>
        <div
          className={`mt-8 inline-flex items-center gap-3 rounded-full border border-deep-brown/10 bg-white/40 px-4 py-2 font-google-sans text-sm text-deep-brown/80 backdrop-blur-sm dark:border-dark-border/60 dark:bg-dark-surface/40 dark:text-dark-muted sm:text-base ${statusAnimationClass}`}
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)]"
            aria-hidden="true"
          />
          <span>{t("home.availableStatus")}</span>
        </div>
      </div>
      <blockquote
        className={`mx-auto mt-20 max-w-2xl text-center font-playwrite text-sm leading-relaxed text-deep-brown/70 dark:text-dark-muted sm:text-base md:text-lg ${quoteAnimationClass}`}
      >
        "{t("home.quote")}"
        <footer className="mt-3 font-google-sans text-sm text-deep-brown/50 dark:text-dark-muted/80">
          {"- "}
          {t("home.quoteAuthor")}
        </footer>
      </blockquote>
    </section>
  );
}
