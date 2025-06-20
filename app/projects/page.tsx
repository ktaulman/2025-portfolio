import ProjectListings from "../(home)/project-listings";
import PageLayout from "../_components/page-layout";
import SectionDescription from "../_components/text/section-description";

export default function Page() {
  return (
    <PageLayout.Body>
      <div className="w-full h-6" />
      <SectionDescription>
        These are a selection of projects I&apos;ve worked on in my spare time
        over the years.
      </SectionDescription>
      <ProjectListings />
    </PageLayout.Body>
  );
}
