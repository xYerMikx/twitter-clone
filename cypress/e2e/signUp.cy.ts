/// <reference types="Cypress" />
describe("signUp tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/signup")
  })
  it("should register user", () => {
    cy.get('[data-cy="email"]').type("yermik2000@yandex.ru")
    cy.get('[data-cy="password"]').type("123123")
    cy.get('[data-cy="phone"]').type("+375290002222")
    cy.get('[data-cy="name"]').type("yan")
    cy.get('[data-cy="signup-btn"]').click()
  })
})
