describe("upload image", () => {
  it("should upload image", () => {
    cy.visit("https://imgur.com/upload");
    cy.get(".PopUpActions").should("be.visible");

    cy.get("#file-input").selectFile("cypress/fixtures/logo.jpeg", {
      force: true,
    });
    cy.contains("Upload Complete").should("be.visible");
    cy.get(".ImageDescription").should("be.visible").type("fake pokemon nft");
  });
});
