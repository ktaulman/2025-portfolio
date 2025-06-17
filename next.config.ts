import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://d1nphsyhf0t2vo.cloudfront.net/*")],
  },
};

export default nextConfig;
