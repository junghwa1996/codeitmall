/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/:id', // 리다이렉션의 시작 URL
        destination: '/items/:id', // 리다이렉션의 대상 URL
        permanent: true, // 영구(301) 리다이렉트
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/codeitmall/*',
      },
    ],
  },
};

module.exports = nextConfig;
