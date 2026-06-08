/* Components */
import NavBar from "./NavBar";
import Button from "./Button";
import ThemeToggle from "./ThemeToggle";

/* Hooks */
import { useState } from "react";
import { useDownloadResume } from "../lib/hooks/useDownloadResume";

/* utils */
import CONSTANTS from "../lib/constants/Constants";

/* Icons */
import { HiDownload } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isMenuToggle, setMenuToggle] = useState(false);
  const { downloadResume, isResumeDownloading } = useDownloadResume();

  return (
    <>
      <div className="flex w-full justify-between p-7">
        <NavBar navItems={CONSTANTS.navItems} className={"hidden sm:flex"} />

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <Button
            className={"sm:text-base md:text-lg"}
            onClick={() => {
              downloadResume();
            }}
            isDisabled={isResumeDownloading}
            btnName={
              isResumeDownloading ? CONSTANTS.downloading : CONSTANTS.resume
            }
            icon={!isResumeDownloading && <HiDownload />}
          />
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <ThemeToggle />
          {isMenuToggle ? (
            <button
              type="button"
              className="cursor-pointer rounded-sm text-deep-brown transition-colors duration-200 ease-in-out dark:text-dark-text"
              aria-expanded={isMenuToggle}
              aria-label="Close navigation menu"
              onClick={() => setMenuToggle(false)}
            >
              <AiOutlineClose size={30} />
            </button>
          ) : (
            <button
              type="button"
              className="cursor-pointer rounded-sm text-deep-brown transition-colors duration-200 ease-in-out dark:text-dark-text"
              aria-expanded={isMenuToggle}
              aria-label="Open navigation menu"
              onClick={() => setMenuToggle(true)}
            >
              <HiOutlineMenuAlt1 size={30} />
            </button>
          )}
        </div>
      </div>
      {isMenuToggle && (
        <div className="absolute top-20 z-10 flex h-full w-full flex-col items-center gap-5 bg-cream transition-colors duration-300 dark:bg-dark-bg sm:hidden">
          <>
            <NavBar
              navItems={CONSTANTS.navItems}
              className={"flex"}
              isCol={true}
              setMenuToggle={setMenuToggle}
            />
            <Button
              className={"flex text-base"}
              onClick={() => {
                downloadResume();
              }}
              isDisabled={isResumeDownloading}
              btnName={
                isResumeDownloading ? CONSTANTS.downloading : CONSTANTS.resume
              }
              icon={!isResumeDownloading && <HiDownload />}
            />
          </>
        </div>
      )}
    </>
  );
}
