/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "image.tmdb.org",
      },
      {
        protocol: "https",
        hostname: "linkds.papareact.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.come",
      },
    ],
  },
};

module.exports = nextConfig;
