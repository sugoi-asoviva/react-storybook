const webpackConfig = require('../webpack.config')

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    'storybook-dark-mode'
  ],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        ...webpackConfig.resolve,
        alias: {
          ...config.resolve.alias,
          ...webpackConfig.resolve.alias,
        }
      }
    }
  }
}
