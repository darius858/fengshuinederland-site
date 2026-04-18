import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "ninestarkinederland.nl",
          },
        ],
        destination: "https://fengshuinederland.nl/nine-star-ki",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.ninestarkinederland.nl",
          },
        ],
        destination: "https://fengshuinederland.nl/nine-star-ki",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
