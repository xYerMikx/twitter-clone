import { collection, query, where } from "firebase/firestore"
import { ChangeEvent, useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import profile from "@/assets/profile-logo.svg"
import { componentsByPath,IComponentByPath } from "@/constants/byPath"
import { Collections } from "@/constants/collections"
import { footerLinks } from "@/constants/footerLinks"
import { ISearchedTweet, IUserProfile } from "@/constants/mockData"
import { Routes } from "@/constants/routes"
import { searchbarPlaceholders } from "@/constants/searchbarPlaceholders"
import { db } from "@/firebase"
import useDebounce from "@/hooks/useDebounce"
import { fetchItems } from "@/utils/fetchItems"

import { Searchbar } from "../Searchbar/Searchbar"
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
  const [showMore, setShowMore] = useState(true)
  const [items, setItems] = useState<ISearchedTweet[] | IUserProfile[]>([])
  const [itemsToShow, setItemsToShow] = useState(2)
  const [inputValue, setInputValue] = useState("")
  const debouncedInputValue = useDebounce(inputValue, 500)
  const placeholder = searchbarPlaceholders[searchField]

  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedInputValue) {
        const dataQuery = query(collection(db, collectionName))

        try {
          const newItems = await fetchItems(
            dataQuery,
            collectionName === Collections.Users,
            profile,
            2,
          )

          setItems(newItems)
          setItemsToShow(newItems.length)
        } catch (error) {
          console.error("Error fetching data: ", error)
        }
      } else {
        const searchValue = debouncedInputValue.startsWith("@")
          ? debouncedInputValue.slice(1)
          : debouncedInputValue
        const searchedFieldInFirebase = debouncedInputValue.startsWith("@")
          ? "email"
          : searchField
        const dataQuery = query(
          collection(db, collectionName),
          where(searchedFieldInFirebase, ">=", searchValue),
          where(searchedFieldInFirebase, "<=", `${searchValue}\uf8ff`),
        )

        try {
          const newItems = await fetchItems(
            dataQuery,
            collectionName === Collections.Users,
            profile,
          )

          setItems(newItems)
          setItemsToShow(newItems.length)
        } catch (error) {
          console.error("Error fetching data: ", error)
        }
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
