import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [new URL('https://i.imgur.com/**'),
      new URL('https://i.postimg.cc/**')
    ]
  }
}