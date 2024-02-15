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

const withVideos = require('next-videos');

module.exports = withVideos();

// konfig för att kunna bygga

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   basePath: '/hermanovarvet',
//   output: 'export',
//   images: {
//     unoptimized: true,
//   },
//   reactStrictMode: true,
// };

//  const withVideos = require('next-videos');

//  const combineConfigs = (config) => {
//    return withVideos(config);
//  };

//  const combinedConfig = combineConfigs(nextConfig);

//  module.exports = combinedConfig;
