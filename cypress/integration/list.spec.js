it("try", () => {
  cy.visit("https://www.toutsurmoneau.fr/service-client");
  cy.get("#input-town").type("33000");
  cy.wait(1000);
  cy.get(".capaddress-item").first().click();
  cy.get("#sc-subject").find(".sz-select__control").click();
  cy.contains("Travaux").click({ force: true });
});
