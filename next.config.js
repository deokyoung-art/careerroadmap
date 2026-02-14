/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/careerroadmap',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
