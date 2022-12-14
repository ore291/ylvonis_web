/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    RAPIDAPI_KEY: 'be403a5f77mshbba231613b15dc4p118dcajsn7c75ecbc1330',
  },
  images: {
    domains: [
      'is1-ssl.mzstatic.com',
      'is5-ssl.mzstatic.com',
      'is4-ssl.mzstatic.com',
      'is3-ssl.mzstatic.com',
      'is2-ssl.mzstatic.com',
    ],
  },
};

module.exports = nextConfig;
