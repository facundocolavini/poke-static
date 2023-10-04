/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { // Dominios permitidos para las imagenes
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
