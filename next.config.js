/**
 * @type {import('next').NextConfig}
 */
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
