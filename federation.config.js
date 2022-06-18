const { dependencies } = require('./package.json');
const rootFederation = require('../federation.config');

module.exports = () => {
  return {
    name: rootFederation.app1.name,
    filename: 'remoteEntry.js',
    exposes: {
      './Page': './src/Page',
    },
    remotes: {
      [rootFederation.app2.name]: `${rootFederation.app2.name}@${
        process.env[
          `MODULE_FEDERATION_${rootFederation.app2.name.toUpperCase()}`
        ]
      }:${rootFederation.app2.devPort}/remoteEntry.js`,
    },
    shared: {
      'react': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies.react,
      },
      'react-dom': {
        eager: true,
        singleton: true,
        requiredVersion: dependencies['react-dom'],
      },
      //  'react-router-dom': {
      //    eager: true,
      //    singleton: true,
      //    requiredVersion: dependencies['react-router-dom'],
      //  },
      //  'connected-react-router': {
      //    eager: true,
      //    singleton: true,
      //    requiredVersion: dependencies['connected-react-router'],
      //  },
      //  'redux': {
      //    eager: true,
      //    singleton: true,
      //    requiredVersion: dependencies.redux,
      //  },
      //  'react-redux': {
      //    eager: true,
      //    singleton: true,
      //    requiredVersion: dependencies['react-redux'],
      //  },
      //  'react-intl': {
      //    eager: true,
      //    singleton: true,
      //    requiredVersion: dependencies['react-intl'],
      //  },
    },
  };
};
