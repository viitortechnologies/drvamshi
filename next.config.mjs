/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF on-demand encode is slow and often looks like “images not loading”
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080],
    imageSizes: [96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
