import "@testing-library/jest-dom"

import { screen } from "@testing-library/react"

import { IUserProfile } from "@/constants/mockData"
import { renderWithWrappers } from "@/utils/testUtils"

import { User } from "./User"

const item: IUserProfile = {
  _id: "id",
  birthday: "21.10.2003",
  email: "yermik2014@yandex.ru",
  name: "yermik",
  phone: "+375290009999",
  photoURL: "url",
}

describe("User component tests", () => {
  beforeEach(() => {
    renderWithWrappers(<User item={item} />)
  })
  it("should render component and display name", () => {
    expect(screen.getByText(item.name)).toBeInTheDocument()
  })
  it("should have follow button", () => {
    expect(screen.getByText("Follow")).toBeInTheDocument()
  })
  it("should have correct username", () => {
    const userName = `@${item.email.split("@")[0]}`
    expect(screen.getByText(userName)).toBeInTheDocument()
  })
})
