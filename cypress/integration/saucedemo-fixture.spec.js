import { Home } from "../pages/home";
describe("authentication tests saucedemo", () => {
  beforeEach(function () {
    cy.visit("https://www.saucedemo.com/");
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

  it("locked out user", function () {
    const user = this.users[2];

    Home.login(user.username, user.password);
  });
});
