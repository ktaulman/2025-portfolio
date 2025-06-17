import WrappingRow from "../_components/layout.tsx/wrapping-row";
import SkillChip from "../_components/skill-chip";
import SectionHeader from "../_components/text/section-header";
import { listSkills, Skill } from "../_db/listSkills";

export default async function SkillListings() {
  const skillsData: Skill[] = await listSkills();
  return (
    <>
      <SectionHeader>Skills</SectionHeader>
      <WrappingRow>
        {skillsData.map(({ id, description }) => (
          <SkillChip key={id}>{description}</SkillChip>
        ))}
      </WrappingRow>
    </>
  );
}
