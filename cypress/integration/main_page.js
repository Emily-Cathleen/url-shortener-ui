describe("Main page flow", () => {

  it("As a user, I should be able to visit the main page and see a title", () => {
    cy.visit("http://localhost:3000")
    .get("h1")
    .contains("URL Shortener")
    .get("form")
    .should('be.visible')
    .get("div.url")
    .should("be.visible")
  });

  it("As a user, I should see a form, with 2 input fields and a button", () => {
    cy.visit("http://localhost:3000")
    .get("form")
    .should("be.visible")
    .get("input.title-input")
    .should("be.visible")
    .get("input.url-input")
    .should("be.visible")
    .get("button")
    .should("be.visible")
  })

  



})
