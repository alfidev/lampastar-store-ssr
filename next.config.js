const API_URL = process.env.PROXY_SERVER_URL;

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;
