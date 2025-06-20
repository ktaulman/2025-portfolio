import Column from "@/app/_components/layout/column";
import SectionHeader from "@/app/_components/text/section-header";
import SkillChip from "../../_components/skill-chip";
import WrappingRow from "../../_components/layout/wrapping-row";

export default function Interests() {
  const interests: string[] = [
    "Gaming",
    "Basketball",
    "Board Games",
    "Hiking",
    "Reading",
  ];
  return (
    <Column>
      <SectionHeader>Interests</SectionHeader>
      <WrappingRow>
        {interests.map((text, i) => (
          <SkillChip key={`interest_${i}`}>{text}</SkillChip>
        ))}
      </WrappingRow>
    </Column>
  );
}
