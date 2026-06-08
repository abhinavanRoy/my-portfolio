import { useTranslation } from "react-i18next";

export default function Chip({ chipTitle }) {
    const { t } = useTranslation();

    return (
        <div className="w-fit rounded-3xl bg-tan px-3 py-1 dark:bg-dark-surface md:px-3">
            <span className="font-google-sans text-base font-medium text-deep-brown dark:text-dark-text">{chipTitle || t("skills.defaultSkill")}</span>
        </div>
    );
};