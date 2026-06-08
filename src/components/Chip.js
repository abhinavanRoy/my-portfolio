/** utils */
import CONSTANTS from "../lib/constants/Constants";

export default function Chip({chipTitle = CONSTANTS.defaultSkill}) {
    return (
        <div className="w-fit rounded-3xl bg-tan px-3 py-1 dark:bg-dark-surface md:px-3">
            <span className="font-google-sans text-base font-medium text-deep-brown dark:text-dark-text">{chipTitle}</span>
        </div>
    );
};