const path = require("path");

module.exports = {
  trailingSlash: true,
  images: {
    domains: ["cloudflare-ipfs.com"],
  },
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  future: {
    webpack5: true,
  },
};
