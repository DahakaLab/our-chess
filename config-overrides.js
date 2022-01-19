const rewriteFoundedLoader = require('./utils/rewriteFoundedItem');

module.exports = {
  webpack(config) {
    rewriteFoundedLoader(config.module.rules, (item, targetEntityKey) => {
      const targetEntityItemReference = item[targetEntityKey];

      if (
        targetEntityKey === 'loader' &&
        typeof targetEntityItemReference === 'string'
      ) {
        if (targetEntityItemReference.includes('sass-loader')) {
          item.options = {
            ...item.options,
            additionalData: '@import "./src/assets/styles/variables.scss";',
          }
        }
      }
    });

    return config;
  }
};
