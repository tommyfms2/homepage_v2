/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "pr-to-develop" ? "/homepage_v2/" : '',
}

module.exports = nextConfig
