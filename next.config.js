const API_URL = process.env.PROXY_SERVER_URL

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        styledComponents: true,
    },
    rewrites: () => {
        return [
            {
                source: '/api/:path*',
                destination: `${API_URL}/:path*`,
            },
        ];
    },
}

module.exports = nextConfig