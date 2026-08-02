import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.0.144",
    "100.120.225.73",
  ],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;