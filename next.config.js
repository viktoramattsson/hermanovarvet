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

const withVideos = require('next-videos');

// Anpassad funktion för att kombinera konfigurationerna
const combineConfigs = (config) => {
  return withVideos(config);
};

// Skapa den kombinerade konfigurationen
const combinedConfig = combineConfigs(nextConfig);

// Exportera den kombinerade konfigurationen
module.exports = combinedConfig;
