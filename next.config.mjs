/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['demo2.wpopal.com', 'i.ibb.co'], // Ensure 'i.ibb.co' is listed
  },
  experimental: {
    appDir: true,
  },
}

export default nextConfig
