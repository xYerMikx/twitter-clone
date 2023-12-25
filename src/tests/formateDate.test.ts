import { Timestamp } from "firebase/firestore"

import { formatDate } from "@/utils/formateDate"

describe("formatDate", () => {
  it("formats a timestamp correctly", () => {
    const timestamp = new Timestamp(1609459200, 0)
    expect(formatDate(timestamp)).toBe("Jan 01, 2021, 03:00 AM")
  })

  it("formats a timestamp with non-zero minutes correctly", () => {
    const timestamp = new Timestamp(1609459260, 0)
    expect(formatDate(timestamp)).toBe("Jan 01, 2021, 03:01 AM")
  })

  it("formats a timestamp for end of month correctly", () => {
    const timestamp = new Timestamp(1614556800, 0)
    expect(formatDate(timestamp)).toBe("Mar 01, 2021, 03:00 AM")
  })
})
