/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
