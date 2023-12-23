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
import { ISearchedTweet, IUserProfile } from "@/constants/mockData"
import profile from "@/assets/profile-logo.svg"
import { footerLinks } from "@/constants/footerLinks"
import { Routes } from "@/constants/routes"
import useDebounce from "@/hooks/useDebounce"
import { Searchbar } from "../Searchbar/Searchbar"
import { Collections } from "@/constants/collections"
import { db } from "@/firebase"
import { searchbarPlaceholders } from "@/constants/searchbarPlaceholders"
import { IComponentByPath, componentsByPath, itemsByPath } from "@/constants/byPath"

interface SearchConfig {
  collectionName: Collections
  searchField: string
}
interface ISeatchSidebarProps {
  searchConfig: SearchConfig
  isSearchSidebarOpen: boolean
}

export function SearchSidebar({
  searchConfig: { collectionName, searchField },
  isSearchSidebarOpen,
}: ISeatchSidebarProps) {
  const location = useLocation()
  const defaultItems = itemsByPath[location.pathname] || itemsByPath["/"]
  const [showMore, setShowMore] = useState(true)
  const [items, setItems] = useState<ISearchedTweet[] | IUserProfile[]>(defaultItems)
  const [itemsToShow, setItemsToShow] = useState(2)
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 500)
  const placeholder = searchbarPlaceholders[searchField]
  useEffect(() => {
    const newItems = itemsByPath[location.pathname] || itemsByPath["/"]
    setItems(newItems)
  }, [location.pathname])

  useEffect(() => {
    const fetchData = async () => {
      if (debouncedInputValue) {
        const q = query(
          collection(db, collectionName),
          where(searchField, ">=", debouncedInputValue),
          where(searchField, "<=", `${debouncedInputValue}\uf8ff`),
        )

        try {
          const querySnapshot = await getDocs(q)
          let newItems: ISearchedTweet[] | IUserProfile[] = []
          if (collectionName === Collections.Users) {
            newItems = querySnapshot.docs.map((doc) => {
              const data = doc.data() as IUserProfile
              return { ...data, photoURL: profile }
            })
          } else if (collectionName === Collections.Tweets) {
            newItems = querySnapshot.docs.map((doc) => {
              const { email, name, createdAt, content } = doc.data()
              const {id} = doc
              return { email, name, createdAt, content, id }
            })
          }

          setItems(newItems)
          setItemsToShow(newItems.length)
        } catch (error) {
          console.error("Error fetching data: ", error)
        }
      } else {
        const itemsFromPath = itemsByPath[location.pathname] || itemsByPath["/"]

        setItems(itemsFromPath)
        setItemsToShow(itemsFromPath.length)
      }
    }

    fetchData()
  }, [debouncedInputValue, location.pathname, collectionName, searchField])

  const handleShowMore = () => {
    if (items.length - itemsToShow >= 5) {
      setItemsToShow(itemsToShow + 5)
      setShowMore(true)
    } else {
      setItemsToShow(items.length)
      setShowMore(false)
    }
  }

  const handleShowLess = () => {
    setItemsToShow(2)
    setShowMore(true)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }
  return (
    <SidebarContainer $isOpen={isSearchSidebarOpen}>
      <Searchbar
        dataCy="searchbar"
        value={inputValue}
        handleChange={handleChange}
        placeholder={placeholder}
      />
      <MightLike>
        <Text>{debouncedInputValue ? "Search results" : "You might like"}</Text>
        <UsersWrapper>
          {items?.slice(0, itemsToShow).map((item) => {
            const path = location.pathname as keyof IComponentByPath
            const Component = componentsByPath[path] || componentsByPath["/"]
            return (
              <Component key={item.email} item={item as IUserProfile & ISearchedTweet} />
            )
          })}
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
