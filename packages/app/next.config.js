/** @type {import('next').NextConfig} */
const nextConfig = {
   compress: true,
   poweredByHeader: false,
   devIndicators: {
      buildActivity: true,
      buildActivityPosition: 'bottom-right',
   },
   logging: {
      fetches: {
         fullUrl: true,
      },
   },
   images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'ipfs.io',
            pathname: 'ipfs',
         },
         {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
         },
      ],
   },
   webpack: config => {
      config.externals.push('pino-pretty', 'lokijs', 'encoding')
      return config
    }
};

module.exports = nextConfig;
