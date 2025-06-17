import SectionHeader from "@/app/_components/text/section-header";
import Column from "@/app/_components/layout/column";
import SectionDescription from "@/app/_components/text/section-description";

export default function AboutMe() {
  return (
    <Column>
      <SectionHeader>About Me</SectionHeader>
      <SectionDescription>
        I am a web developer with 4+ years of experience in building and
        maintaining web applications.
      </SectionDescription>
    </Column>
  );
}
