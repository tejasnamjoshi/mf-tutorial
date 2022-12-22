// @ts-check

/**
 * @type {import('@nrwl/devkit').ModuleFederationConfig}
 **/
const moduleFederationConfig = {
  name: 'star-wars',
  remotes: ['planets', 'films'],
};

module.exports = moduleFederationConfig;
