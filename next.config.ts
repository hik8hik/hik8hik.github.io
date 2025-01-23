/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/hik8hik.github.io",
  assetPrefix: "/hik8hik.github.io",
  trailingSlash: true,

  output: process.env.NEXT_PUBLIC_OUTPUT || undefined,

  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

export default nextConfig;
