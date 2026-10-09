import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/products/neon-dash",
        destination: "/products",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
