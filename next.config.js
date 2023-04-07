/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.gametime.co', 
      'maps.gametime.co',
      'cdn.kustomerhostedcontent.com'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '*.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: '*.com',
        port: '',
        pathname: '',
      },
      {
        protocol: 'https',
        hostname: '*.*',
        port: '',
        pathname: '',
      },
    ],
  }
}

module.exports = nextConfig
