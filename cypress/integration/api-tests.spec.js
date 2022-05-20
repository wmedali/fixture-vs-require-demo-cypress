describe("Api tests demo", () => {
  it.skip("nasa api test", () => {
    cy.request(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=3344&camera=fhaz&api_key=turafYyNwOfTwHmMclfXgyRGEgxh2TuazBiBB8rk"
    ).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).not.null;
      expect(response.body.photos.length).greaterThan(1);

      response.body.photos.forEach((photo) => {
        expect(photo.img_src).to.include("http");
        cy.request(photo.img_src).its("status").should("eq", 200);
      });
    });
  });

  it("reqbin POST example api tests", () => {
    cy.request({
      url: "https://reqbin.com/echo/post/json",
      method: "POST",
      body: {
        Id: 78912,
        Customer: "Jason Sweet",
        Quantity: 1,
        Price: 18.0,
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cypress.env("token")}`,
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.headers["content-type"]).eq("application/json");
      cy.wrap(response.body.success).as("resultat");
      cy.task("saveValue", response.body.success);
    });
  });

  it("sharing context across tests", () => {
    cy.task("getValue").then((result) => {
      expect(result).eq("true");
    });
  });
});
