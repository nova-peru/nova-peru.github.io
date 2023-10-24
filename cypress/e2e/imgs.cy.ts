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
