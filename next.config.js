/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'pr' ? '/homepage_v2/' : '',
  basePath: process.env.NODE_ENV === 'pr' ? '/homepage_v2' : '',
}

module.exports = nextConfig
