import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["cdn.dummyjson.com"],
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "ajy8khmx9vtvyckn.public.blob.vercel-storage.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s.gravatar.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "t3.ftcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "mygemma.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "preview.colorlib.com",
        pathname: "**",
      },
    ],
  },
};

export default withNextVideo(nextConfig);