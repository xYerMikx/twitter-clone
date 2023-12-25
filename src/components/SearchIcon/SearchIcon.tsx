import search from "@/assets/search.svg"
import cross from "@/assets/x-solid.svg"

import { Cross, Search, SearchIconWrapper } from "./styled"

interface ISearchIconProps {
  isOpen: boolean
  onClick: () => void
}

export function SearchIcon({ isOpen, onClick }: ISearchIconProps) {
  return (
    <SearchIconWrapper>
      {isOpen ? (
        <Cross onClick={onClick} src={cross} alt="cross" />
      ) : (
        <Search onClick={onClick} src={search} alt="search" />
      )}
    </SearchIconWrapper>
  )
}
