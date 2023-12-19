import { isValidEmail, isValidPhone } from "@/utils/validateIdentifier"

describe("validateIdentifiers", () => {
  describe("isValidEmail", () => {
    it("returns true for a valid email", () => {
      expect(isValidEmail("test@example.com")).toBe(true)
    })

    it("returns false for an invalid email", () => {
      expect(isValidEmail("test@example")).toBe(false)
    })

    it("returns false for an empty string", () => {
      expect(isValidEmail("")).toBe(false)
    })
  })

  describe("isValidPhone", () => {
    it("returns true for a valid phone number", () => {
      expect(isValidPhone("+375123456789")).toBe(true)
    })

    it("returns false for an invalid phone number", () => {
      expect(isValidPhone("123456789")).toBe(false)
    })

    it("returns false for an empty string", () => {
      expect(isValidPhone("")).toBe(false)
    })
  })
})
