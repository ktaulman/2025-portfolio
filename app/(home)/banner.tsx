"use client";
import { useScreenWidthStore } from "@/app/_providers/screen-width-provider";
import Image from "next/image";
export default function Banner() {
  const { screenWidth } = useScreenWidthStore();
  // const svgUnitWidth =
  //   screenWidth < 650 ? screenWidth * 0.9 : screenWidth * 0.6;
  // const x = {
  //   right: {
  //     first: screenWidth * 0.6 * 0.9,
  //     second: screenWidth * 0.6 * 0.85,
  //     third: screenWidth * 0.6 * 0.8,
  //   },
  //   center: {
  //     first: screenWidth * 0.3 * 0.9,
  //     second: screenWidth * 0.3 * 0.95,
  //     third: screenWidth * 0.5 * 0.8,
  //   },
  // };
  const isMobileDisplay = screenWidth < 650;
  return (
    <div
      className={`w-full grow flex flex-col min-md:flex-row min-md: justify-start items-center gap-10 relative my-16`}
    >
      {/* <Image
        src="/images/banner.webp"
        alt="banner"
        width={svgUnitWidth}
        height={"400"}
        className=""
      /> */}
      <Image
        src={
          isMobileDisplay
            ? "/images/linkedin-mobile.jpg"
            : "/images/linkedin.jpg"
        }
        alt="nav bar avatar icon"
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full border-4 border-white shadow-white shadow-xs "
        width={isMobileDisplay ? 180 : 200}
        height={isMobileDisplay ? 180 : 200}
      />
      <div>
        <h1 className=" text-4xl min-lg:text-8xl tracking-wider text-white font-semibold">
          Hi, I&apos;m Kevin.
        </h1>
        <p className="text-base min-lg:text-xl text-gray-500 mt-4">
          I&apos;m an Engineer with experience building SaaS applications in
          multiple front-end frameworks and full-stack development.
        </p>
      </div>
    </div>
  );
}
