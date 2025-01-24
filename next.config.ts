/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: process.env.NEXT_PUBLIC_OUTPUT || undefined,

  /* 
 for production
 afte github pages refused to rednder images from sanity
*/
  images: {
    unoptimized: true,
  },

  /* images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  }, */
};

export default nextConfig;
