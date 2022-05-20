/// <reference types="cypress" />
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on("task", {
    saveValue(valueToSave) {
      this.result = valueToSave;
      return "value sauvegardé";
    },
    getValue() {
      return this.result;
    },
  });
};
