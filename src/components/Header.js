/* Components */
import NavBar from "./NavBar";
import Button from "./Button";
import LanguageDropdown from "./LanguageDropdown";
import ThemeToggle from "./ThemeToggle";

/* Hooks */
import { useMemo, useState } from "react";
import { useDownloadResume } from "../lib/hooks/useDownloadResume";
import { useTranslation } from "react-i18next";

/* Icons */
import { HiDownload } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const { t } = useTranslation();
  const [isMenuToggle, setMenuToggle] = useState(false);
  const { downloadResume, isResumeDownloading } = useDownloadResume();
  const navItems = useMemo(() => t("nav.items", { returnObjects: true }), [t]);
  const resumeButtonLabel = isResumeDownloading
    ? t("actions.downloading")
    : t("actions.resume");

  return (
    <>
      <div className="relative z-20 flex w-full justify-between p-7">
        <NavBar navItems={navItems} className={"hidden sm:flex"} />

        <div className="flex items-center sm:hidden">
          {isMenuToggle ? (
            <button
              type="button"
              className="cursor-pointer rounded-sm text-deep-brown transition-colors duration-200 ease-in-out dark:text-dark-text"
              aria-expanded={isMenuToggle}
              aria-label={t("actions.closeNavigationMenu")}
              onClick={() => setMenuToggle(false)}
            >
              <AiOutlineClose size={30} />
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer rounded-sm text-deep-brown transition-colors duration-200 ease-in-out dark:text-dark-text"
              aria-expanded={isMenuToggle}
              aria-label={t("actions.openNavigationMenu")}
              onClick={() => setMenuToggle(true)}
            >
              <HiOutlineMenuAlt1 size={30} />
            </button>
          )}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <LanguageDropdown />
          <ThemeToggle />
          <Button
            className={"h-10 sm:text-base md:text-lg"}
            onClick={() => {
              downloadResume();
            }}
            isDisabled={isResumeDownloading}
            btnName={resumeButtonLabel}
            icon={!isResumeDownloading && <HiDownload />}
          />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <LanguageDropdown />
          <ThemeToggle />
          <Button
            className={"h-10 text-base"}
            onClick={() => {
              downloadResume();
            }}
            isDisabled={isResumeDownloading}
            btnName={resumeButtonLabel}
            icon={!isResumeDownloading && <HiDownload />}
          />
        </div>
      </div>
      {isMenuToggle && (
        <div className="fixed inset-0 z-10 flex w-full flex-col items-center gap-5 bg-cream pt-28 transition-colors duration-300 dark:bg-dark-bg sm:hidden">
          <NavBar
            navItems={navItems}
            className={"flex"}
            isCol={true}
            setMenuToggle={setMenuToggle}
          />
        </div>
      )}
    </>
  );
}
