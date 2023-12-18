import { Outlet, useLocation } from "react-router-dom"
import { Sidebar } from "../Sidebar/Sidebar"
import { Main, Wrapper } from "./styled"
import { SearchSidebar } from "../SearchSidebar/SearchSidebar"
import { collectionsWithPaths, searchFieldsInCollection } from "@/constants/collections"

export function Layout() {
  const location = useLocation()

  const path = location.pathname

  const searchConfig = {
    collectionName: collectionsWithPaths[path],
    searchField: searchFieldsInCollection[path],
  }

  return (
    <Wrapper>
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
      <SearchSidebar searchConfig={searchConfig} />
    </Wrapper>
  )
}
