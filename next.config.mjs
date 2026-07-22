/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Assets are already compressed WebP — skip on-demand Sharp encode
    // (avoids slow/failed /_next/image responses in dev & cold starts)
    unoptimized: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
