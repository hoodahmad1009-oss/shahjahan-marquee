
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/shahjahan-marquee",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
