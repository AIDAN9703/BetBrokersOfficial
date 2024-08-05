/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*' // Proxy to Flask backend
      }
    ];
  },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
        // Add other environment variables here};
    },
};

export default nextConfig;


  