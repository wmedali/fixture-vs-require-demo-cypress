/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  console.log(config.env);
  const environment = config.env.environment;

  config.baseUrl = `https://www.saucedemo-${environment}.com`;

  return config;
};
