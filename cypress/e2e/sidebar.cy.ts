/// <reference types="Cypress" />
import { IUser, setUser } from "../../src/store/slices/userSlice"

describe("sidebar tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/auth")
    const user: IUser = {
      _id: "lJuwEqwpJzPdiJRnpwnbOjICHh02",
      birthday: "24.08.2009",
      email: "yermik69@yandex.ru",
      name: "YerMik",
      phone: "+375292100874",
      token: "1234",
    }
    cy.window().its("store").invoke("dispatch", setUser(user))

    cy.wait(100)
  })
  it("should search tweets", () => {
    cy.visit("http://localhost:5173/profile")
    cy.get('[data-cy="searchbar"]').type("pos")
    cy.wait(1000)
    cy.contains("post ?????")
  })
  it("should search users", () => {
    cy.visit("http://localhost:5173/")
    cy.get('[data-cy="searchbar"]').type("yer")
    cy.wait(1000)
    cy.contains("yermik")
    cy.contains("yermij")
  })
})
