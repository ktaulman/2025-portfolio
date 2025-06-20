import { Suspense } from "react";
import PageLayout from "@/app/_components/page-layout";
import Banner from "@/app/(home)/banner";
import JobListings from "@/app/(home)/job-listings";
import SkillListings from "@/app/(home)/skill-listings";
import ProjectListings from "@/app/(home)/project-listings";
import Education from "@/app/(home)/eduction";
import Column from "@/app/_components/layout/column";
import SectionDescription from "@/app/_components/text/section-description";
import SectionHeader from "@/app/_components/text/section-header";
// import ContactForm from "@/app/_components/contact-form";
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
