const nextRoutes = require("nextjs-routes/config");
const withRoutes = nextRoutes();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  outDir: "types",
  cwd: __dirname,
};