/// <reference types="Cypress" />
describe("logout tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login")
  })
  it("should logout user", () => {
    cy.get('[data-cy="identifier"]').type("yermik69@yandex.ru")
    cy.get('[data-cy="password"]').type("123123")
    cy.get('[data-cy="login-btn"]').click()
    cy.wait(5000)
    cy.get('[data-cy="logout-btn"]').click()
  })
})
