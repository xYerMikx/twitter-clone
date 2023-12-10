import { ChangeEvent, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
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
import profile from "@/assets/profile-logo.svg"
import { footerLinks } from "@/constants/footerLinks"
import { Routes } from "@/constants/routes"
import useDebounce from "@/hooks/useDebounce"
import { Searchbar } from "../Searchbar/Searchbar"
import { User } from "../User/User"
import { collectionsWithPaths } from "@/constants/collections"
import { db } from "@/firebase"

export function SearchSidebar() {
  const [showMore, setShowMore] = useState(true)
  const [users, setUsers] = useState<IUserProfile[]>(mockUsers)
  const [usersToShow, setUsersToShow] = useState(2)
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 500)
  const location = useLocation()

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedInputValue) {
        const collectionName = collectionsWithPaths[location.pathname]
        const q = query(
          collection(db, collectionName),
          where("name", ">=", debouncedInputValue),
          where("name", "<=", `${debouncedInputValue  }\uf8ff`),
        )

        try {
          const querySnapshot = await getDocs(q)
          const newUsers = querySnapshot.docs.map((doc) => {
            const data = doc.data() as IUserProfile
            return { ...data, photoURL: profile }
          })

          setUsers(newUsers)
          setUsersToShow(newUsers.length)
        } catch (error) {
          console.error("Error fetching data: ", error)
        }
      } else {
        setUsers(mockUsers)
        setUsersToShow(mockUsers.length)
      }
    }

    fetchData()
  }, [debouncedInputValue, location.pathname])

  const handleShowMore = () => {
    if (users.length - usersToShow >= 5) {
      setUsersToShow(usersToShow + 5)
      setShowMore(true)
    } else {
      setUsersToShow(users.length)
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
            <User key={user.email} user={user} />
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
