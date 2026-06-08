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
            <div className="overflow-auto h-[75%]  flex flex-col items-center  w-full gap-6 px-10">
                <div className={`flex flex-col gap-2 items-center ${headerAnimationClass}`}>
                    <h1 className="text-white text-2xl font-google-sans font-medium sm:text-3xl ">{CONSTANTS.loveToHear}</h1>
                    <p className="text-white font-google-sans font-light opacity-80 text-xl text-center">{CONSTANTS.leaveMessage}</p>
                    <ContactForm />
                </div>
                <div className={`flex flex-col gap-3 ${socialsAnimationClass}`}>
                    <h2 className="text-white font-google-sans font-medium text-lg sm:text-2xl">{CONSTANTS.connectWithMe}</h2>
                    <div className="flex gap-3 justify-center">
                        {/* <a href="mailto:abhinavan2772@gmail.com"> <MdOutlineEmail className="cursor-pointer" color="white" size={30} /></a> */}
                        <a aria-label="Visit Abhinavan Roy on LinkedIn" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70" rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abhinavan-roy/"><FaLinkedin className="cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-slate-600" size={30} /></a>
                        <a aria-label="Visit Abhinavan Roy on X" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70" rel="noopener noreferrer" target="_blank" href="https://x.com/AbhinavanR"> <FaXTwitter className="cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-slate-600" size={30} /></a>
                        <a aria-label="Visit Abhinavan Roy on GitHub" className="rounded-sm focus:outline-none focus:ring-2 focus:ring-white/70" rel="noopener noreferrer" target="_blank" href="https://github.com/abhinavanRoy"> <FaGithub className="cursor-pointer text-white transition-colors duration-200 ease-in-out hover:text-slate-600" size={30} /></a>
                    </div>

                </div>
            </div>
        </>
    );
}