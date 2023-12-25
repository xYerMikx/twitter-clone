/// <reference types="Cypress" />
import { IUser, setUser } from "../../src/store/slices/userSlice"

const user: IUser = {
  _id: "lJuwEqwpJzPdiJRnpwnbOjICHh02",
  birthday: "24.08.2009",
  email: "yermik69@yandex.ru",
  name: "YerMik",
  phone: "+375292100874",
  token: "1234",
}
describe("tweet tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/auth")
  })
  it("should add tweet", () => {
    const tweetName = "my new tweet"
    cy.window().its("store").invoke("dispatch", setUser(user))
    cy.wait(100)
    cy.visit("http://localhost:5173/profile")
    cy.get('[data-cy="tweet-textarea"]').type(tweetName)
    cy.get('[data-cy="tweet-button"]').click()
    cy.contains(tweetName)
  })
})
