import { isLikedByMe } from "@/utils/isLikedByMe"

describe("isLikedByMe", () => {
  it("returns true when the email is in the likingUsers array", () => {
    const likingUsers = ["test1@example.com", "test2@example.com", "test3@example.com"]
    const email = "test2@example.com"
    expect(isLikedByMe(likingUsers, email)).toBe(true)
  })

  it("returns false when the email is not in the likingUsers array", () => {
    const likingUsers = ["test1@example.com", "test2@example.com", "test3@example.com"]
    const email = "test4@example.com"
    expect(isLikedByMe(likingUsers, email)).toBe(false)
  })

  it("returns false when the likingUsers array is empty", () => {
    const likingUsers: string[] = []
    const email = "test1@example.com"
    expect(isLikedByMe(likingUsers, email)).toBe(false)
  })
})
