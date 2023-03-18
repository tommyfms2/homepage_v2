/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "pr-to-develop" ? "/homepage_v2" : '',
  assetPrefix: process.env.NODE_ENV === "pr-to-develop" ? "/homepage_v2" : '',
}

module.exports = nextConfig
