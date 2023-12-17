import { Outlet } from "react-router-dom"
import { useState } from "react"
import { Sidebar } from "../Sidebar/Sidebar"
import { LeftIconWrapper, Main, RightIconWrapper, Wrapper } from "./styled"
import { SearchSidebar } from "../SearchSidebar/SearchSidebar"
import { Sizes } from "@/constants/sizes"
import { BurgerIcon } from "../BurgerIcon/BurgerIcon"

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= Sizes.DESKTOP)
  const [searchSidebarOpen, setSearchSidebarOpen] = useState(
    window.innerWidth >= Sizes.DESKTOP,
  )

  const toggleSidebar = () => {
    setSearchSidebarOpen(false)
    setSidebarOpen(!sidebarOpen)
  }

  const toggleSearchSidebar = () => {
    setSidebarOpen(false)
    setSearchSidebarOpen(!searchSidebarOpen)
  }

  return (
    <Wrapper>
      {window.innerWidth <= Sizes.DESKTOP && (
        <LeftIconWrapper $isOpen={sidebarOpen}>
          <BurgerIcon isOpen={sidebarOpen} onClick={toggleSidebar} />
        </LeftIconWrapper>
      )}
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Main>
        <Outlet />
      </Main>
      {window.innerWidth <= Sizes.DESKTOP && (
        <RightIconWrapper $isOpen={searchSidebarOpen}>
          <BurgerIcon isOpen={searchSidebarOpen} onClick={toggleSearchSidebar} />
        </RightIconWrapper>
      )}
      <SearchSidebar isSearchSidebarOpen={searchSidebarOpen} />
    </Wrapper>
  )
}
