// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'new-ui',
  exposes: {
    './Module': './src/remote-entry.ts',
    './Ui': './src/app/NewUI.tsx',
  },
};

module.exports = moduleFederationConfig;
