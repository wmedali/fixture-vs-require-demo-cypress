import { name, internet, phone } from "@faker-js/faker/locale/fr";

describe("Use faker for demoqa form", () => {
  it("should fill in Student Registration Form", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.get("#firstName").type(name.firstName());
    cy.get("#lastName").type(name.lastName());
    cy.get("#userEmail").type(internet.email());
    cy.get("#userNumber").type(randomFrenchPhone());
  });
});

function randomFrenchPhone() {
  let random = Math.floor(Math.random() * 3);
  let start;
  switch (random) {
    case 0:
      start = 6;
      break;
    case 1:
      start = 7;
      break;
    case 2:
      start = 9;
      break;

    default:
      start = 6;
      break;
  }

  return phone.phoneNumber(`0${start}#########`);
}
