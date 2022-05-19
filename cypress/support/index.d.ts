/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * Login command to authenticate
     * @param username
     * @param password
     */
    login(username: string, password: string): Chainable<any>;
  }
}
