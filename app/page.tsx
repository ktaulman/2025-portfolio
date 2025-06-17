import { Suspense } from "react";
import PageLayout from "./_components/page-layout";
import SectionHeader from "./_components/text/section-header";
import Banner from "./(home)/components/banner";
import JobListings from "./(home)/job-listings";
import SkillListings from "./(home)/skill-listings";
import ProjectListings from "./(home)/project-listings";
// import ContactForm from "./_components/contact-form";
//Constants

export default function Home() {
  return (
    <PageLayout.Body>
      <Banner />

      <Suspense fallback={"Loading..."}>
        <JobListings />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <ProjectListings />
      </Suspense>
      <Suspense fallback={"Loading..."}>
        <SkillListings />
      </Suspense>
      {/* <ContactForm /> */}
    </PageLayout.Body>
  );
}
