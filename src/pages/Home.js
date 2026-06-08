import Lottie from "lottie-react";
import { useTranslation } from "react-i18next";
import animationData from "../assets/lotties/heroAnim.json";
import { useFirstVisit } from "../lib/hooks/useFirstVisit";

export default function Home() {
  const { t } = useTranslation();
  const isFirstVisit = useFirstVisit("home");
  const nameAnimationClass = isFirstVisit ? "opacity-0 animate-fade-in-up" : "";
  const subtitleAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed"
    : "";
  const lottieAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-2"
    : "";
  const quoteAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed-3"
    : "";

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-8 text-center">
      <h1
        className={`bg-gradient-to-r from-espresso via-deep-brown to-latte bg-clip-text pb-3 font-paprika text-4xl leading-normal text-transparent dark:from-tan dark:via-dark-text dark:to-latte md:text-6xl ${nameAnimationClass}`}
      >
        {t("brand.name")}
      </h1>
      <p
        className={`max-w-2xl text-wrap font-google-sans text-xl font-light text-deep-brown opacity-[0.85] dark:text-dark-text sm:text-xl md:text-2xl ${subtitleAnimationClass}`}
      >
        {t("home.shortDetail")}
      </p>
      <div className={lottieAnimationClass}>
        <Lottie
          style={{ width: 320, height: 320 }}
          animationData={animationData}
          loop={true}
          aria-hidden="true"
        />
      </div>
      <blockquote
        className={`max-w-lg px-4 text-center font-playwrite text-base text-deep-brown/70 dark:text-dark-muted sm:text-lg md:text-xl ${quoteAnimationClass}`}
      >
        {"\""}
        {t("home.quote")}
        {"\""}
        <footer className="mt-2 text-sm text-deep-brown/50 dark:text-dark-muted/80 sm:text-base">
          - {t("home.quoteAuthor")}
        </footer>
      </blockquote>
    </div>
  );
}
