describe("Render images from home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("should render the video-image", () => {
    cy.get('[data-cy="video-image"]')
      .should("be.visible")
      .then(($img) => {
        const imageElement = $img[0] as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.gt(0);
      });
  });
  it("should render about-image", () => {
    cy.get('[data-cy="about-image"]')
      .should("be.visible")
      .then(($img) => {
        const imageElement = $img[0] as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.gt(0);
      });
  });
  it("should render about-image-2", () => {
    cy.get('[data-cy="about-image-2"]')
      .should("be.visible")
      .then(($img) => {
        const imageElement = $img[0] as HTMLImageElement;
        expect(imageElement.naturalWidth).to.be.gt(0);
      });
  });
});

describe("dropDown navbar", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport("iphone-6");
    cy.get('[data-cy="navbar-toggler"]').click();
  });
  it("should visit and display about page", () => {
    cy.contains("Home");
    cy.contains("About");
    cy.get('[data-cy="nav-About"]').click();
    cy.url().should("include", "/about");
  });
});

describe("Pages", () => {
  it("visit home", () => {
    cy.visit("/");
  });
  it("visit about", () => {
    cy.visit("/about");
  });
});
