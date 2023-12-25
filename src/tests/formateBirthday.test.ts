import { formateBirthday } from "@/utils/formateBirthday"

describe("formate birthday test", () => {
  it("formats day and month with one digit", () => {
    expect(formateBirthday(2023, "January", 1)).toBe("01.01.2023")
  })

  it("formats day and month with two digits", () => {
    expect(formateBirthday(2023, "December", 31)).toBe("31.12.2023")
  })
})
