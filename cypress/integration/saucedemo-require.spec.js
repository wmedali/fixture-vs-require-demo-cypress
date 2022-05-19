import { Home } from "../pages/home";

const users = require("../fixtures/users.json");
describe("authentication tests saucedemo", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("incorrect password", () => {
    const user = users[0];
    Home.login(user.username, user.password);
    cy.url().should("not.include", "/inventory.html");
  });

  it("correct password ", () => {
    const user = users[1];

    Home.login(user.username, user.password);
    cy.url().should("include", "/inventory.html");
  });

  it("locked out user", () => {
    const user = users[2];

    Home.login(user.username, user.password);
  });
});
