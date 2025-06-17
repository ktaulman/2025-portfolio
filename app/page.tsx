import { Suspense } from "react";
import PageLayout from "./_components/page-layout";
import SectionHeader from "./_components/text/section-header";
import Banner from "./(home)/components/banner";
import JobListings from "./(home)/job-listings";
import SkillListings from "./(home)/skill-listings";
// import ContactForm from "./_components/contact-form";
//Constants

export default function Home() {
  return (
    <PageLayout.Body>
      <Banner />

      <Suspense fallback={"Loading..."}>
        <JobListings />
      </Suspense>
      <SectionHeader>Projects</SectionHeader>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDw8nBUmBiN7TQIHZ8a1P1B-KzgM1JwMQg_GGAIWuLyHhOaKR1rDc5u8GtDmhCO0-arkigmJESvbvHP2X5bvb-EAMwnpZDibZBymxBpyzHIehm8cY6V061T3l72rSuU9Y-UnXV_egsKTen0HfTFjFYJm2WYsyyQ6pV_FOMOfVwERvbx6dq-1-ivo80apYidrEAaG-hGRiFZaSc38wdTSEYRTdHDe9D8IVEYmDXDp166iOfpNr2miV0LIBgqlOV48vVCfRumwtBWVLA"`,
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_a_UIWxKeoVf9xLxsNpAfDwwTLsp5Sc6coVrjyXWqjTDbhkmdvrGjGwjv60f8hRlXp99YScUZczXFjLw-AbvAvdUPzeoN6P0X5rdR0qsfXTh9TgpCsaHBIKpkrJ_qT6227a9W8O-9HMr2HPk9T4QBtV4rswE5d_XnoI1Js80lD6wXfbKj6GxSJwQLIwlcujajVBagV1zXSgf3HKdb_mZr2dxRihuIUno59o68O_1QFnZJVfQfXoim8_FapkDV4liEDGEDMqlEFjk"`,
            }}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVwvbCAyN9TlOXg4CUyWrqIUf9Aakw_tkZ0ui9OnSlfbWSqtpiXxXV6Ma4b7MeQLb9rFXVy4ojN3iI01GvWqqOGgFm37p_achw3RsTe7ctsLtvgPp48MH_KCADpndphHeP70RYWh-N_vT5P-eKk9Z55Nq2HLShVf-b8uVxfkd-uSGh6qu-0DUiHfrO0vQE871Wg_2PS7ba0RE17gqVFprWxMWZx7_B3X0x9YXVBOd5ESWvy-TbffgZw6D9GUELwl7ssJRkI-_DZ34"`,
            }}
          ></div>
        </div>
      </div>
      <Suspense fallback={"Loading..."}>
        <SkillListings />
      </Suspense>
      {/* <ContactForm /> */}
    </PageLayout.Body>
  );
}
