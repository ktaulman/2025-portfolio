"use client";
import { useScreenWidthStore } from "@/app/_providers/screen-width-provider";
import Image from "next/image";
export default function AboutBanner() {
  const { screenWidth } = useScreenWidthStore();
  console.log({ screenWidth });
  const svgUnitWidth =
    screenWidth < 650 ? screenWidth * 0.9 : screenWidth * 0.6;
  const x = {
    right: {
      first: screenWidth * 0.6 * 0.9,
      second: screenWidth * 0.6 * 0.85,
      third: screenWidth * 0.6 * 0.8,
    },
    center: {
      first: screenWidth * 0.3 * 0.9,
      second: screenWidth * 0.3 * 0.95,
      third: screenWidth * 0.5 * 0.8,
    },
  };

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
        src="/images/linkedin.jpg"
        alt="nav bar avatar icon"
        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full border-4 border-white shadow-white shadow-xs "
        width={screenWidth < 650 ? 180 : 200}
        height={screenWidth < 650 ? 180 : 200}
      />
      <div>
        <h1 className=" text-4xl tracking-wider">Hi, I&apos;m Kevin.</h1>
        <p className="text-base text-gray-500 mt-4">Alpharetta, GA</p>
        <p className="text-base text-gray-500 mt-4">
          Web Development/Front-End Engineer/Full-Stack Engineer
        </p>
        <p className="text-base text-gray-500 mt-4">Alpharetta, GA</p>
      </div>
    </div>
  );
  return (
    <div className="w-full flex justify-center">
      <svg
        width={svgUnitWidth}
        height="400"
        viewBox={`0 0 ${svgUnitWidth} 400`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width={svgUnitWidth} height="400" fill="#111418" />

        <g>
          {/* Left Cluster */}
          {/* <circle cx="80" cy="70" r="20" fill="#78752A" opacity="0.6" />
          <circle cx="40" cy="110" r="25" fill="#78752A" opacity="0.7" /> */}
          <circle cx="20" cy="120" r="120" fill="#78752A" opacity="0.5" />

          {/* Center Clust  */}
          <circle
            cx={x.center.first}
            cy="40"
            r="60"
            fill="#2D782A"
            opacity="0.6"
          />
          {/* <circle
            cx={x.center.second}
            cy="210"
            r="40"
            fill="#2D782A"
            opacity="0.7"
          />
          <circle
            cx={x.center.third}
            cy="120"
            r="50"
            fill="#2D782A"
            opacity="0.5"
          /> */}

          {/* Right Cluster */}
          <circle
            cx={x.right.first}
            cy="320"
            r="80"
            fill="#3a3d98"
            opacity="0.6"
          />
          {/* <circle
            cx={x.right.second}
            cy="410"
            r="40"
            fill="#4a4db9"
            opacity="0.7"
          />
          <circle
            cx={x.right.third}
            cy="370"
            r="50"
            fill="#2a2d78"
            opacity="0.5"
          /> */}
        </g>

        <text
          x={screenWidth > 650 ? screenWidth * 0.05 : screenWidth * 0}
          y="250"
          fill="#e5e7eb"
          fontSize={screenWidth > 650 ? "64" : "48"}
          fontFamily="sans-serif"
        >
          Hi, I&apos;m Kevin
        </text>
      </svg>
    </div>
  );
}
