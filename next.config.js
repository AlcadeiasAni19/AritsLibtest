/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  experimental: {
  },
  images: {
    dangerouslyAllowSVG: true,
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ['www.aritsltd.com']
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ];
  },
  /**
   * Rewrites allow you to map an incoming request path to a different
   * destination path. Rewrites act as a URL proxy and mask the destination
   * path, making it appear the user hasn't changed their location
   * on the site. In contrast, redirects will reroute to a new page
   * and show the URL changes.
   */
  async rewrites() {
    // https://nextjs.org/docs/app/api-reference/next-config-js/rewrites
    return {
      beforeFiles: [
        // These rewrites are checked after headers/redirects
        // and before all files including _next/public files which
        // allows overriding page files
        {
          source: "/index",
          destination: "/",
        },
        {
          source: "/index.html",
          destination: "/",
        },
        {
          source: "/index.php",
          destination: "/",
        },
      ],
      afterFiles: [
        // These rewrites are checked after pages/public files
        // are checked but before dynamic routes
        {
          source: "/non-existent",
          destination: "/somewhere-else",
        },
      ],
      fallback: [
        // These rewrites are checked after both pages/public files
        // and dynamic routes are checked
        // - auth mask URL rewrites
        {
          source: "/auth-api/:path*",
          destination: `${process.env.AUTH_API_URL}:path*`,
        },
      ],
    }
  },
};

module.exports = nextConfig;
