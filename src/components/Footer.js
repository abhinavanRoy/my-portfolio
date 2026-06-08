/** utils */
import CONSTANTS from "../lib/constants/Constants";
import { getCurrentYear } from "../lib/utils";

export default function Footer() {
  return (
    <div className="absolute bottom-0 p-3">
      <p className="text-sm font-google-sans font-light text-deep-brown opacity-60 dark:text-dark-muted">
        &copy; {getCurrentYear()} {CONSTANTS.abhinavanRoy} {"•"} {CONSTANTS.allRightsReserved}
      </p>
    </div>
  );
}
