describe("dropDown navbar", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-6");
    cy.get('[data-cy="navbar-toggler"]').click();
  });
  it("should visit and display about page", () => {
    cy.contains("About");
    cy.get('[data-cy="nav-About"]').click();
    cy.url().should("include", "/about");
  });
});
