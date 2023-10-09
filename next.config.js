/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['daisyui.com', 'github.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
