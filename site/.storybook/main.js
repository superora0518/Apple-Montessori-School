// .storybook/main.js

const path = require('path');

module.exports = {
  stories: ['../src/stories/**/*.stories.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    },
    '@storybook/addon-essentials',
    "@storybook/addon-interactions",
    {
      /**
       * NOTE: fix Storybook issue with PostCSS@8
       * @see https://github.com/storybookjs/storybook/issues/12668#issuecomment-773958085
       */
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: "@storybook/react",
  core: {
    builder: 'webpack5',
    disableTelemetry: true
  },
};