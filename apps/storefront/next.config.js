const path = require('path');
const appConfig = require('./config');

module.exports = {
  typescript: {
    transpileOnly: true,
    ignoreBuildErrors: true,
  },
  env: {
    CANONICAL_URL: appConfig.CANONICAL_URL,
    INTERNAL_GRAPHQL_URL: appConfig.INTERNAL_GRAPHQL_URL,
    EXTERNAL_GRAPHQL_URL: appConfig.EXTERNAL_GRAPHQL_URL,
    SEGMENT_ANALYTICS_SKIP_MINIMIZE: appConfig.SEGMENT_ANALYTICS_SKIP_MINIMIZE,
    SEGMENT_ANALYTICS_WRITE_KEY: appConfig.SEGMENT_ANALYTICS_WRITE_KEY,
    STRIPE_PUBLIC_API_KEY: appConfig.STRIPE_PUBLIC_API_KEY,
    ENABLE_SPA_ROUTING: appConfig.ENABLE_SPA_ROUTING,
  },
  poweredByHeader: false,
  // generateBuildId: async () => {
  //   return process.env.npm_package_version;
  // },

  webpack: (webpackConfig) => {
    webpackConfig.module.rules.push({
      test: /\.(gql|graphql)$/,
      loader: 'graphql-tag/loader',
      exclude: ['/node_modules/', '/.next/'],
      enforce: 'pre',
    });

    return webpackConfig;
  },
};
