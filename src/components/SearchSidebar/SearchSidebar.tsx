import { ChangeEvent, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  LinkItem,
  LinksList,
  MightLike,
  ShowLessButton,
  ShowMoreButton,
  SidebarContainer,
  Text,
  UsersWrapper,
} from "./styled"
import { IUserProfile, mockUsers } from "@/constants/mockUsers"
import { footerLinks } from "@/constants/footerLinks"
import { Routes } from "@/constants/routes"
import useDebounce from "@/hooks/useDebounce"
import { Searchbar } from "../Searchbar/Searchbar"
import { User } from "../User/User"

export function SearchSidebar() {
  const [showMore, setShowMore] = useState(true)
  const [users, setUsers] = useState<IUserProfile[]>(mockUsers)
  const [usersToShow, setUsersToShow] = useState(2)
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 500)

  useEffect(() => {
    if (debouncedInputValue) {
      const newUsers = mockUsers.filter((user) =>
        user.name.toLowerCase().includes(debouncedInputValue.toLowerCase()),
      )
      setUsers(newUsers)
      setUsersToShow(newUsers.length)
    }
    if (debouncedInputValue === "") {
      setUsers(mockUsers)
      setUsersToShow(2)
    }
  }, [debouncedInputValue])

  const handleShowMore = () => {
    if (mockUsers.length - usersToShow >= 5) {
      setUsersToShow(usersToShow + 5)
      setShowMore(true)
    } else {
      setUsersToShow(mockUsers.length)
      setShowMore(false)
    }
  }

  const handleShowLess = () => {
    setUsersToShow(2)
    setShowMore(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <SidebarContainer>
      <Searchbar value={inputValue} handleChange={handleChange} />
      <MightLike>
        <Text>{debouncedInputValue ? "Search results" : "You might like"}</Text>
        <UsersWrapper>
          {users.slice(0, usersToShow).map((user) => (
            <User key={user.userName} user={user} />
          ))}
          {showMore && (
            <ShowMoreButton onClick={handleShowMore}>Show more</ShowMoreButton>
          )}
          {!showMore && (
            <ShowLessButton onClick={handleShowLess}>Show less</ShowLessButton>
          )}
        </UsersWrapper>
      </MightLike>
      <LinksList>
        {footerLinks.map(({ id, text, to }) => (
          <LinkItem key={id}>
            <Link to={to || Routes.AUTH}>{text}</Link>
          </LinkItem>
        ))}
      </LinksList>
    </SidebarContainer>
  )
}
