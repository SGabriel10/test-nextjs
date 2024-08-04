/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
};
module.exports = {
    pageExtensions: ["page.tsx"]
  }
export default nextConfig;
