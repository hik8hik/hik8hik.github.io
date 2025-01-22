/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NEXT_PUBLIC_OUTPUT || undefined,

    images: {
        domains: ["localhost"],
        remotePatterns: [{
            protocol: "https",
            hostname: "cdn.sanity.io",
            port: "",
        }, ],
    },
};

export default nextConfig;