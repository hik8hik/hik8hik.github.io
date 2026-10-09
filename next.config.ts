/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // Static export for GitHub Pages. Controlled by NEXT_PUBLIC_OUTPUT so the
  // same config works for `next dev` and `next build`.
  output: process.env.NEXT_PUBLIC_OUTPUT || undefined,

  // GitHub Pages does not run the Next image optimizer, so serve originals.
  images: {
    unoptimized: true,
  },

  // Fail the production build on type or lint errors instead of shipping
  // them silently. Comment out if you prefer the old behaviour.
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Slightly stricter React in production builds.
  reactStrictMode: true,
};

export default nextConfig;
