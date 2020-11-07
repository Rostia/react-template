const path = require('path');
const custom = require('../webpack.config.js');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.module.scss$/,
      use: ['style-loader',           
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
        },
      }, 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.resolve.modules = [
      path.resolve(__dirname, "../src"),
      "node_modules",
    ];

    return config;
  },
}