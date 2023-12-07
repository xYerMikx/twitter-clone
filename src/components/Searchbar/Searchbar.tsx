import { ChangeEvent, useRef } from "react"
import { IconButton, Label, SearchContainer, SearchInput, StyledImage } from "./styled"
import search from "@/assets/search.svg"

interface ISearchbarProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
}

export function Searchbar({ handleChange, value }: ISearchbarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null)

  const focusTextInput = () => {
    inputRef.current?.focus()
  }
  return (
    <SearchContainer>
      <Label htmlFor="search">
        <SearchInput
          id="search"
          ref={inputRef}
          placeholder="Search user..."
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />
      </Label>
      <IconButton onClick={focusTextInput}>
        <StyledImage src={search} alt="Search Icon" />
      </IconButton>
    </SearchContainer>
  )
}