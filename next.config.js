/** @type {import('next').NextConfig} */

/** Activation du mode MAINTENANCE en Prod */
const toggleMaintenance = false;

const nextConfig = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,
  async redirects() {
    return [
      toggleMaintenance
        ? {
            source: '/((?!maintenance).*)',
            destination: '/maintenance',
            permanent: false,
          }
        : {
            source: '/maintenance.html',
            destination: '/',
            permanent: false,
          },
    ];
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_IMAGES_DOMAIN}`],
  },
};

module.exports = nextConfig;
