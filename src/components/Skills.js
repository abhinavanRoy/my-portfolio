import { useMemo } from "react";
import { useTranslation } from "react-i18next";
/**components */
import Chip from "./Chip";

export default function Skills() {
  const { t } = useTranslation();
  const skillList = useMemo(
    () => t("skills.groups", { returnObjects: true }),
    [t]
  );
  const languageList = useMemo(
    () => t("skills.languageList", { returnObjects: true }),
    [t]
  );

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-google-sans text-2xl font-semibold text-espresso dark:text-latte">
        {t("skills.title")}
      </h2>
      {skillList.map((skillGroup) => (
        <div key={skillGroup.skillGroupId}>
          <h3 className="pl-4 font-google-sans text-lg font-light text-deep-brown opacity-90 dark:text-dark-muted">
            {skillGroup.skillGroupName}
          </h3>
          <div className="flex flex-wrap gap-2 pl-4 py-1">
            {skillGroup.skillGroupItems.map((skill) => (
              <Chip key={`${skillGroup.skillGroupId}-${skill}`} chipTitle={skill} />
            ))}
          </div>
        </div>
      ))}

      <div className="flex flex-col gap-1">
        <h2 className="font-google-sans text-2xl font-semibold text-espresso dark:text-latte">
          {t("skills.languagesTitle")}
        </h2>
        <div className="flex flex-wrap gap-2 pl-4 py-1">
          {languageList.map((language) => (
            <Chip
              key={language.name}
              chipTitle={`${language.name} (${language.level})`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
