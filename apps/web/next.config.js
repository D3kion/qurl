const isProd = process.env.NODE_ENV === "production";
const API_URL = process.env.API_URL || "http://localhost:4200";

/** @type {import('next').NextConfig} */
const devConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_URL}/:path*`,
      },
    ];
  },
};

/** @type {import('next').NextConfig} */
const prodConfig = {};

module.exports = isProd ? prodConfig : devConfig;
