/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phi-cms-s3-bucket.s3.eu-central-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "phiwallet.com",
      },
      {
        protocol: "https",
        hostname: "d8j0ntlcm91z4.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
