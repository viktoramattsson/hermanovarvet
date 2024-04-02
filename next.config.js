/**
 * @type {import('next').NextConfig}
 */

// export const baseUrl = 'https://viktoramattsson.github.io';

const nextConfig = {
  basePath: '/hermanovarvet',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

// export default nextConfig;
