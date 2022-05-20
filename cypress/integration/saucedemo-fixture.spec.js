import { Home } from "../pages/home";
describe("authentication tests saucedemo", () => {
  beforeEach(function () {
    cy.visit("/");
    cy.fixture("users").then((toto) => {
      this.users = toto;
    });
  });
  it("incorrect password", function () {
    const user = this.users[0];
    Home.login(user.username, user.password);
    cy.url().should("not.include", "/inventory.html");
  });

  it("correct password ", function () {
    const user = this.users[1];

    Home.login(user.username, user.password);
    cy.url().should("include", "/inventory.html");
  });

  it.only("locked out user", function () {
    cy.get("#login_credentials").then((loginCredentials) => {
      expect(loginCredentials).include.text("usernames");
      expect(loginCredentials).be.visible;
      expect(loginCredentials).not.null;
      //loginCredentials.should("include.text", "toto");
    });

    cy.get('[data-test="username"]').then((usernameField) => {
      /*       expect(usernameField).have.value("");
      expect(usernameField).have.attr("placeholder");
      expect(usernameField.attr("placeholder")).to.eq("Username"); */
      cy.wrap(usernameField).should("have.value", "");
      cy.wrap(usernameField).should("have.attr", "placeholder");
      cy.wrap(usernameField)
        .invoke("attr", "placeholder")
        .should("to.eq", "Username");
    });

    cy.get('[data-test="username"]')
      .invoke("attr", "placeholder")
      .should("eq", "Username");

    cy.get("#login_credentials").invoke("text").should("include", "locked");

    cy.get('[data-test="username"]').type("toto").should("have.value", "toto");
    cy.get('[data-test="username"]')
      .clear()
      .type("toto")
      .invoke("val")
      .should("eq", "toto");

    const user = {
      firstName: "ali",
      lastName: "mohammed",
      fullName: () => {
        return "Mohammed Ali";
      },
    };

    cy.wrap(user).invoke("fullName").should("eq", "Mohammed Ali");

    //const user = this.users[2];

    //Home.login(user.username, user.password);
  });
});

it.only("Remove attr example", () => {
  cy.visit("nothing-url.com");
  cy.contains("Consulter ou recevoir") // Le bouton
    .invoke("removeAttr", "target")
    .click({ force: true });

  cy.get('[data-cy="tooltip"]').first().click({ force: true });
});
