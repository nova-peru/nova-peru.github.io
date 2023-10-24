describe("Pages", () => {
  it("visit home", () => {
    cy.visit("/");
  });
  it("visit about", () => {
    cy.visit("/about");
  });
});
