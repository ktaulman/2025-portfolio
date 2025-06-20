import { Suspense } from "react";
import PageLayout from "./_components/page-layout";
import Banner from "./(home)/banner";
import JobListings from "./(home)/job-listings";
import SkillListings from "./(home)/skill-listings";
import ProjectListings from "./(home)/projects/project-listings";
import Education from "./(home)/eduction";
import Column from "./_components/layout/column";
import SectionDescription from "./_components/text/section-description";
import SectionHeader from "./_components/text/section-header";
// import ContactForm from "./_components/contact-form";
//Constants

export default function Home() {
  return (
    <PageLayout.Body>
      <Banner />

      <Suspense fallback={"Loading..."}>
        <JobListings />
      </Suspense>

      <Education />

      <Suspense fallback={"Loading..."}>
        <ProjectListings />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <SkillListings />
      </Suspense>
      {/* <ContactForm /> */}
      <Column>
        <SectionHeader>Contact</SectionHeader>
        <SectionDescription>kevin@talldev.cloud</SectionDescription>
      </Column>
    </PageLayout.Body>
  );
}
