import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  allowedDevOrigins: [
    "192.168.0.107",
  ],

  images: {
    qualities: [75, 85, 88],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
