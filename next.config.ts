import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages only serves static files, so the site is exported to `out/`.
  output: "export",
  images: {
    unoptimized: true,
  },
  // cacheComponents / partialPrefetching rely on PPR, which static export rejects.
  allowedDevOrigins: ["127.0.0.1"],
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
