import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();

    return (
        <>
        <h1 className="text-espresso dark:text-latte">{t("projects.title")}</h1>
        </>
    );
}