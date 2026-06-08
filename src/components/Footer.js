import { useTranslation } from "react-i18next";
import { getCurrentYear } from "../lib/utils";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="absolute bottom-0 p-3">
      <p className="text-sm font-google-sans font-light text-deep-brown opacity-60 dark:text-dark-muted">
        &copy; {getCurrentYear()} {t("brand.name")} {"•"} {t("footer.allRightsReserved")}
      </p>
    </div>
  );
}
