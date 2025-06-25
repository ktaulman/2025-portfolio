import { Suspense } from "react";
import PageLayout from "@/app/_components/page-layout";
import SkillListings from "@/app/(home)/skill-listings";
import Column from "@/app/_components/layout/column";
import SectionDescription from "@/app/_components/text/section-description";
import SectionHeader from "@/app/_components/text/section-header";
import AboutBanner from "./components/about-banner";
import Interests from "./components/interests";
// import ContactForm from "@/app/_components/contact-form";
//Constants

export default function Home() {
  return (
    <PageLayout.Body>
      <AboutBanner />

      <Suspense fallback={"Loading..."}>
        <SkillListings />
      </Suspense>
      {/* <ContactForm /> */}
      <Interests />
      <Column>
        <SectionHeader>Contact</SectionHeader>
        <SectionDescription>kevin@talldev.cloud</SectionDescription>
      </Column>
    </PageLayout.Body>
  );
}
