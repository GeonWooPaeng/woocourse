describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/woocourse-alone/5_cypressBasic/");
  });

  it("렌더링 초기값 10", () => {
    cy.get(".count-display").should("have.value", "10");
  });

  it("+ 버튼 클릭 시 count + 1", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());

      cy.get(".plus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue + 1);
    });
  });

  it("max 값 12", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".plus-button").click();
    }

    cy.get(".count-display").should("have.value", "12");
  });

  it("- 버튼 클릭시 count - 1", () => {
    cy.get(".count-display").then(($input) => {
      const prevInputValue = Number($input.val());

      cy.get(".minus-button").click();
      cy.get(".count-display").should("have.value", prevInputValue - 1);
    });
  });

  it("min 값 8", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(".minus-button").click();
    }
    cy.get(".count-display").should("have.value", "8");
  });
});
