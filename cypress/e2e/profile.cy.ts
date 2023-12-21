/// <reference types="Cypress" />
describe("profile tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login")
  })
  it("should render profile of user", () => {
    const email = "yermik69@yandex.ru"
    cy.get('[data-cy="identifier"]').type(email)
    cy.get('[data-cy="password"]').type("123123")
    cy.get('[data-cy="login-btn"]').click()
    cy.wait(3000)
    cy.visit("http://localhost:5173/profile")
    cy.contains("YerMik")
    cy.contains(`@${email.split("@")[0]}`)
  })
})
