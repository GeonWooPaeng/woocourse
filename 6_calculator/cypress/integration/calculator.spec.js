describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/woocourse-alone/6_calculator/");
  });

  it("999 + 999", () => {
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("+").click();

    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();
    cy.get(".digits").contains("9").click();

    cy.get(".operations").contains("=").click();
    cy.get("#total").should("have.text", "1998");
  });
});
