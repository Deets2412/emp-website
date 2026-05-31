import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      // Permanent (308) redirect from the old ALP Methodology URL to the new
      // /approach route. §5.2 compliance — the page is "Approach", not "ALP".
      { source: '/alp-methodology', destination: '/approach', permanent: true },
    ]
  },
}

export default nextConfig
