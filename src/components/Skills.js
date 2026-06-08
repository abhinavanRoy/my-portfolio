/** utils */
import CONSTANTS from "../lib/constants/Constants";
/**components */
import Chip from "./Chip";

export default function Skills() {
  const skillList = CONSTANTS.skillList;
  const languageList = CONSTANTS.languageList;

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-white font-google-sans font-semibold text-2xl">
        {CONSTANTS.skills}
      </h2>
      {skillList.map((skillGroup) => (
        <div key={skillGroup.skillGroupId}>
          <h3 className="text-white font-google-sans font-light pl-4 opacity-90 text-lg">
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
        <h2 className="text-white font-google-sans font-semibold text-2xl">
          {CONSTANTS.languages}
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
