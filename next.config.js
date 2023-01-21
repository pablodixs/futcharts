/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'resources.premierleague.com',
        pathname: '/**',
        port: ''
      },
    ],
    domains: ['https://resources.premierleague.com']
  },
}

module.exports = nextConfig
