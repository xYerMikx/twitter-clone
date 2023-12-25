import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "../Sidebar/Sidebar"
import { LeftIconWrapper, Main, RightIconWrapper, Wrapper } from "./styled"
import { SearchSidebar } from "../SearchSidebar/SearchSidebar"
import { collectionsWithPaths, searchFieldsInCollection } from "@/constants/collections"
import { BurgerIcon } from "../BurgerIcon/BurgerIcon"
import { SearchIcon } from "../SearchIcon/SearchIcon"

export function Layout() {
  const location = useLocation()
  const path = location.pathname
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchSidebarOpen, setSearchSidebarOpen] = useState(false)

  const searchConfig = {
    collectionName: collectionsWithPaths[path] || collectionsWithPaths["/"],
    searchField: searchFieldsInCollection[path] || searchFieldsInCollection["/"],
  }

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
      <LeftIconWrapper $isOpen={sidebarOpen}>
        <BurgerIcon isOpen={sidebarOpen} onClick={toggleSidebar} />
      </LeftIconWrapper>

      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Main>
        <Outlet />
      </Main>

      <RightIconWrapper $isOpen={searchSidebarOpen}>
        <SearchIcon isOpen={searchSidebarOpen} onClick={toggleSearchSidebar} />
      </RightIconWrapper>

      <SearchSidebar
        searchConfig={searchConfig}
        isSearchSidebarOpen={searchSidebarOpen}
      />
    </Wrapper>
  )
}
