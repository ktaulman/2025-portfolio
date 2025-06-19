"use client";
import { useScreenWidthContext } from "@/app/_providers/screen-width-provider";
import { useEffect, useRef, useMemo } from "react";
export default function Banner() {
  const { screenWidth, setScreenWidth } = useScreenWidthContext();
  const bannerElement = useRef(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [setScreenWidth]);

  const svgUnitWidth = useMemo(() => screenWidth * 0.6, [screenWidth]);
  const x = useMemo(
    () => ({
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
    }),
    [screenWidth]
  );

  return (
    <div className="w-full flex justify-center">
      <svg
        width={svgUnitWidth}
        height="400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        ref={bannerElement}
      >
        <rect width={svgUnitWidth} height="400" fill="#111418" />

        <g>
          {/* Left Cluster */}
          <circle cx="80" cy="70" r="60" fill="#78752A" opacity="0.6" />
          <circle cx="40" cy="110" r="40" fill="#78752A" opacity="0.7" />
          <circle cx="120" cy="120" r="50" fill="#78752A" opacity="0.5" />

          {/* Center Clust  */}
          <circle
            cx={x.center.first}
            cy="40"
            r="60"
            fill="#2D782A"
            opacity="0.6"
          />
          <circle
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
          />

          {/* Right Cluster */}
          <circle
            cx={x.right.first}
            cy="350"
            r="60"
            fill="#3a3d98"
            opacity="0.6"
          />
          <circle
            cx={x.right.second}
            cy="390"
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
          />
        </g>

        <text
          x={screenWidth * 0.05}
          y="250"
          className="fill-current text-gray-200 text-6xl"
        >
          Hi, I'm Kevin
        </text>
      </svg>
    </div>
  );
}
