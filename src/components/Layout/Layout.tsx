import { useState } from "react"
import { Outlet, useLocation } from "react-router-dom"

import { collectionsWithPaths, searchFieldsInCollection } from "@/constants/collections"

import { SearchSidebar } from "../SearchSidebar/SearchSidebar"
import { Sidebar } from "../Sidebar/Sidebar"
import { Main, Wrapper } from "./styled"

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
      <Sidebar isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Main>
        <Outlet />
      </Main>

      <SearchSidebar
        searchConfig={searchConfig}
        isSearchSidebarOpen={searchSidebarOpen}
        toggleSearchSidebar={toggleSearchSidebar}
      />
    </Wrapper>
  )
}
