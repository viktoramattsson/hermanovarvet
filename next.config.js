/**
 * @type {import('next').NextConfig}
 */

// export const baseUrl = 'https://viktoramattsson.github.io';

const nextConfig = {
  // basePath: '/hermanovarvet',
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

// remove basepath when building
// remove basepath in dev mood
// keep basepath for github deployment
