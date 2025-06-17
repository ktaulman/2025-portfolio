"use client";
import { useState, useEffect, useRef, useMemo } from "react";
export default function Banner() {
  const [screenWidth, setScreenWidth] = useState(300);
  const bannerElement = useRef(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const setWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, []);

  const svgUnitWidth = useMemo(() => screenWidth * 0.6, [screenWidth]);
  return (
    <>
      {screenWidth > 650 && (
        <svg
          width={svgUnitWidth}
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          ref={bannerElement}
        >
          <rect width={svgUnitWidth} height="400" fill="#111418" />

          <g>
            <circle cx="120" cy="70" r="60" fill="#3a3d98" opacity="0.6" />
            <circle cx="80" cy="110" r="40" fill="#4a4db9" opacity="0.7" />
            <circle cx="160" cy="120" r="50" fill="#2a2d78" opacity="0.5" />
            <circle cx="620" cy="270" r="60" fill="#3a3d98" opacity="0.6" />
            <circle cx="580" cy="310" r="40" fill="#4a4db9" opacity="0.7" />
            <circle cx="660" cy="290" r="50" fill="#2a2d78" opacity="0.5" />
          </g>

          <text x="170" y="250" className="fill-current text-gray-200 text-6xl">
            Hi, I'm Kevin
          </text>
        </svg>
      )}
      {screenWidth < 650 && (
        <svg
          width="100%"
          height="400"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          ref={bannerElement}
        >
          <rect width="100%" height="300" fill="#111418" />

          <g>
            <circle cx="20" cy="70" r="60" fill="#3a3d98" opacity="0.6" />
            <circle cx="80" cy="110" r="40" fill="#4a4db9" opacity="0.7" />
            <circle cx="60" cy="120" r="50" fill="#2a2d78" opacity="0.5" />
            <circle cx="360" cy="220" r="60" fill="#3a3d98" opacity="0.6" />
            <circle cx="410" cy="240" r="40" fill="#4a4db9" opacity="0.7" />
            <circle cx="90" cy="220" r="50" fill="#2a2d78" opacity="0.5" />
          </g>

          <text x="60" y="150" className="fill-current text-gray-200 text-4xl">
            Hi, I'm Kevin
          </text>
        </svg>
      )}
    </>
  );
}
