// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'planets',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: []
};

module.exports = moduleFederationConfig;
