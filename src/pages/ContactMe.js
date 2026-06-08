/** icons */
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

/** components */
import ContactForm from "../components/ContactForm";
import CONSTANTS from "../lib/constants/Constants";
import { useFirstVisit } from "../lib/hooks/useFirstVisit";
export default function ContactMe() {
    const isFirstVisit = useFirstVisit("contact");
    const headerAnimationClass = isFirstVisit ? "opacity-0 animate-fade-in-up" : "";
    const socialsAnimationClass = isFirstVisit
        ? "opacity-0 animate-fade-in-up-delayed"
        : "";

    return (
        <>
            <div className="flex h-[75%] w-full flex-col items-center gap-6 overflow-auto px-10">
                <div className={`flex flex-col gap-2 items-center ${headerAnimationClass}`}>
                    <h1 className="text-2xl font-google-sans font-medium text-espresso dark:text-latte sm:text-3xl">{CONSTANTS.loveToHear}</h1>
                    <p className="text-center font-google-sans text-xl font-light text-deep-brown opacity-80 dark:text-dark-muted">{CONSTANTS.leaveMessage}</p>
                    <ContactForm />
                </div>
                <div className={`flex flex-col gap-3 ${socialsAnimationClass}`}>
                    <h2 className="font-google-sans text-lg font-medium text-espresso dark:text-latte sm:text-2xl">{CONSTANTS.connectWithMe}</h2>
                    <div className="flex gap-3 justify-center">
                        {/* <a href="mailto:abhinavan2772@gmail.com"> <MdOutlineEmail className="cursor-pointer" color="white" size={30} /></a> */}
                        <a aria-label="Visit Abhinavan Roy on LinkedIn" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-latte" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abhinavan-roy/"><FaLinkedin className="cursor-pointer text-espresso transition-colors duration-200 ease-in-out hover:text-latte dark:text-latte dark:hover:text-tan" size={30} /></a>
                        <a aria-label="Visit Abhinavan Roy on X" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-latte" rel="noopener noreferrer" target="_blank" href="https://x.com/AbhinavanR"> <FaXTwitter className="cursor-pointer text-espresso transition-colors duration-200 ease-in-out hover:text-latte dark:text-latte dark:hover:text-tan" size={30} /></a>
                        <a aria-label="Visit Abhinavan Roy on GitHub" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-latte" rel="noopener noreferrer" target="_blank" href="https://github.com/abhinavanRoy"> <FaGithub className="cursor-pointer text-espresso transition-colors duration-200 ease-in-out hover:text-latte dark:text-latte dark:hover:text-tan" size={30} /></a>
                    </div>

                </div>
            </div>
        </>
    );
}