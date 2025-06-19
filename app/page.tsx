import { Suspense } from "react";
import PageLayout from "./_components/page-layout";
import Banner from "./(home)/components/banner";
import JobListings from "./(home)/job-listings";
import SkillListings from "./(home)/skill-listings";
import ProjectListings from "./(home)/project-listings";
import ContactForm from "./_components/contact-form";
import { ScreenWidthProvider } from "./_providers/screen-width-provider";
// import ContactForm from "./_components/contact-form";
//Constants

export default function Home() {
  return (
    <PageLayout.Body>
      <ScreenWidthProvider>
        <Banner />
      </ScreenWidthProvider>

      <Suspense fallback={"Loading..."}>
        {" "}
        <JobListings />{" "}
      </Suspense>
      <Suspense fallback={"Loading..."}>
        {" "}
        <ProjectListings />{" "}
      </Suspense>
      <Suspense fallback={"Loading..."}>
        {" "}
        <SkillListings />{" "}
      </Suspense>
      {/* <ContactForm /> */}
    </PageLayout.Body>
  );
}
