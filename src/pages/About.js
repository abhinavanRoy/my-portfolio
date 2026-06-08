import { useTranslation } from "react-i18next";
import { useFirstVisit } from "../lib/hooks/useFirstVisit";
/** Assets */
import profilePic from "../assets/images/profilePic.png";
/** Components */
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function About() {
  const { t } = useTranslation();
  const isFirstVisit = useFirstVisit("about");
  const imageAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up"
    : "";
  const descriptionAnimationClass = isFirstVisit
    ? "opacity-0 animate-fade-in-up-delayed"
    : "";

  return (
    <div className="h-[75%] sm:h-[70%] w-full overflow-auto px-8 pb-10 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start">
          <img
            className={`h-48 w-48 rounded-full border-4 border-latte object-cover dark:border-tan sm:h-56 sm:w-56 ${imageAnimationClass}`}
            src={profilePic}
            alt={t("brand.profilePicAlt")}
          />

          <div
            className={`flex w-full flex-col gap-5 ${descriptionAnimationClass}`}
          >
            <p className="w-full font-google-sans text-lg font-light text-deep-brown dark:text-dark-text md:text-xl">
              {t("about.description")}
            </p>
          </div>
        </div>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-google-sans text-2xl font-semibold text-espresso dark:text-latte md:text-3xl">
              {t("about.journeyTitle")}
            </h2>
            <p className="max-w-2xl font-google-sans text-base font-light text-deep-brown/80 dark:text-dark-muted md:text-lg">
              {t("about.journeyIntro")}
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-8">
              <h3 className="font-google-sans text-xl font-semibold text-espresso dark:text-latte md:text-2xl">
                {t("about.educationHeading")}
              </h3>
              <Timeline category="education" />
            </section>

            <section className="flex flex-col gap-8">
              <h3 className="font-google-sans text-xl font-semibold text-espresso dark:text-latte md:text-2xl">
                {t("about.experienceHeading")}
              </h3>
              <Timeline category="experience" />
            </section>
          </div>
        </section>

        <section>
          <Skills />
        </section>
      </div>
    </div>
  );
}
