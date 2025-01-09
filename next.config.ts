import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/mp",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
