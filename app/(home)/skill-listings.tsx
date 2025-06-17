import Column from "@/app/_components/layout/column";
import WrappingRow from "@/app/_components/layout/wrapping-row";
import SkillChip from "@/app/_components/skill-chip";
import SectionHeader from "@/app/_components/text/section-header";
import { listSkills, Skill } from "../_db/listSkills";

export default async function SkillListings() {
  const skillsData: Skill[] = await listSkills();
  return (
    <Column>
      <SectionHeader>Skills</SectionHeader>
      <WrappingRow>
        {skillsData.map(({ id, description }) => (
          <SkillChip key={id}>{description}</SkillChip>
        ))}
      </WrappingRow>
    </Column>
  );
}
