/** Utils */
import CONSTANTS from "../lib/constants/Constants";
import { useFirstVisit } from "../lib/hooks/useFirstVisit";
/** Assets */
import profilePic from "../assets/images/profilePic.jpeg";
/** Components */
import Skills from "../components/Skills";
import Timeline from "../components/Timeline";

export default function About() {
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
            className={`h-36 w-36 rounded-full border-4 border-gray-300 object-cover sm:h-44 sm:w-44 ${imageAnimationClass}`}
            src={profilePic}
            alt={CONSTANTS.profilePic}
          />

          <div
            className={`flex w-full flex-col gap-5 ${descriptionAnimationClass}`}
          >
            <p className="w-full text-justify font-google-sans text-lg font-light text-white md:text-xl">
              {CONSTANTS.myDescription}
            </p>
          </div>
        </div>

        <section className="flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <h2 className="font-google-sans text-2xl font-semibold text-white md:text-3xl">
              {CONSTANTS.myJourney}
            </h2>
            <p className="max-w-2xl font-google-sans text-base font-light text-white/80 md:text-lg">
              A quick look at the education and experience milestones that
              shaped my journey in software engineering.
            </p>
          </div>

          <div className="flex flex-col gap-16">
            <section className="flex flex-col gap-8">
              <h3 className="font-google-sans text-xl font-semibold text-white md:text-2xl">
                {CONSTANTS.educationHeading}
              </h3>
              <Timeline category="education" />
            </section>

            <section className="flex flex-col gap-8">
              <h3 className="font-google-sans text-xl font-semibold text-white md:text-2xl">
                {CONSTANTS.experienceHeading}
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
