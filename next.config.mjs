/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1600],
    imageSizes: [128, 256, 384],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
