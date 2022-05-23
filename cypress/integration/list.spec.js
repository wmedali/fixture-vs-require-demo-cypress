it("should select a contact reason", () => {
  cy.intercept("**/getCommuneListe?zipOrTown=33000").as("searchZipCode");
  cy.visit("https://www.toutsurmoneau.fr/service-client");
  cy.get("#input-town").type("33000");
  cy.wait("@searchZipCode");
  cy.get(".capaddress-item").first().click();
  cy.get("#sc-subject").find(".sz-select__control").click();
  cy.get(".sz-select__menu").should("be.visible").find(".mb-0").eq(3).click();
  // Using Text : cy.get(".sz-select__menu").should("be.visible").contains("Travaux").click();
  // cy.contains("Travaux").click({ force: true });
});
