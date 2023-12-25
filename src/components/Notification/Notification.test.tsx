import "@testing-library/jest-dom"

import { screen } from "@testing-library/react"

import { renderWithWrappers } from "@/utils/testUtils"

import { Notification } from "./Notification"

const mockNotification = {
  id: 1,
  message: "Test notification",
  type: "info",
}

describe("Notification component", () => {
  beforeEach(() => {
    renderWithWrappers(<Notification notification={mockNotification} />)
  })

  it("renders the notification correctly", () => {
    expect(screen.getByText(mockNotification.message)).toBeInTheDocument()
  })
})
