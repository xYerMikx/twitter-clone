/// <reference types="Cypress" />
import { themeActions } from "../../src/store/slices/themeSlice"
describe("theme tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/auth")
  })
  it("should change theme", () => {
    cy.window().its("store").invoke("dispatch", themeActions.setTheme())
    cy.window()
      .its("store")
      .invoke("getState")
      .its("theme.theme")
      .should("equal", "light")
    cy.window().its("store").invoke("dispatch", themeActions.setTheme())
    cy.window().its("store").invoke("getState").its("theme.theme").should("equal", "dark")
  })
})
