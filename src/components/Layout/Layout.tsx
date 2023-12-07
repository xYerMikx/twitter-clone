import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar/Sidebar"
import { Main, Wrapper } from "./styled"

export function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <Sidebar />
    </Wrapper>
  )
}
