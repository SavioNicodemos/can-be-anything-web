/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['daisyui.com', 'github.com', 'localhost', ''],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
