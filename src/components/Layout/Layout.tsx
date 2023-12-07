import { Outlet } from "react-router-dom"
import { Sidebar } from "../Sidebar/Sidebar"
import { Main, Wrapper } from "./styled"
import { SearchSidebar } from "../SearchSidebar/SearchSidebar"

export function Layout() {
  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <SearchSidebar />
    </Wrapper>
  )
}
