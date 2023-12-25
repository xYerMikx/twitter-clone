import "@testing-library/jest-dom"

import { screen } from "@testing-library/react"

import { fireEvent, renderWithWrappers } from "@/utils/testUtils"

import { Searchbar } from "./Searchbar"

const handleChange = jest.fn()
describe("Searchbar component", () => {
  beforeEach(() => {
    renderWithWrappers(
      <Searchbar handleChange={handleChange} value="" placeholder="Search..." />,
    )
  })
  it("renders the searchbar correctly", () => {
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument()
  })

  it("calls handleChange on input change", () => {
    fireEvent.change(screen.getByPlaceholderText("Search..."), {
      target: { value: "test" },
    })

    expect(handleChange).toHaveBeenCalled()
  })

  it("focuses the input when the button is clicked", () => {
    const input = screen.getByPlaceholderText("Search...")
    const button = screen.getByAltText("Search Icon")

    input.blur()
    expect(input).not.toHaveFocus()

    fireEvent.click(button)
    expect(input).toHaveFocus()
  })
})
