/** utils */
import CONSTANTS from "../lib/constants/Constants";

export default function Chip({chipTitle = CONSTANTS.defaultSkill}) {
    return (
        <div className=" bg-white w-fit rounded-3xl px-3 py-1 md:px-3 ">
            <span className="text-black font-google-sans font-medium text-base">{chipTitle}</span>
        </div>
    );
};