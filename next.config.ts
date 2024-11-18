import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["http://localhost:3000"],
    }
  }
  
};

export default nextConfig;
