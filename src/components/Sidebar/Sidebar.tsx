import { useState } from "react"
import { useNavigate } from "react-router-dom"

import profilePhoto from "@/assets/profile-logo.svg"
import { Routes } from "@/constants/routes"
import { sidebarLinks } from "@/constants/sidebarLinks"
import { Sizes } from "@/constants/sizes"
import { logout } from "@/firebase"
import { useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"
import { Button } from "@/ui/Button/Button"

import { TweetModal } from "../TweetModal/TweetModal"
import { TwitterLogo } from "../TwitterLogo/TwitterLogo"
import {
  Image,
  ProfileInfo,
  ProfileName,
  ProfileUserName,
  ProfileWrapper,
  SidebarLink,
  SidebarLinks,
  SidebarWrapper,
  Text,
} from "./styled"

export function Sidebar({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean
  toggleSidebar: () => void
}) {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout()
    navigate(Routes.AUTH)
  }
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)
  const { email, name: userName } = useAppSelector(selectUserInfo)
  return (
    <SidebarWrapper $isOpen={isSidebarOpen}>
      <TwitterLogo />
      <SidebarLinks>
        {sidebarLinks.map(({ name, path, element: Element }) => (
          <SidebarLink
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={toggleSidebar}
            key={path}
            to={path}
          >
            <Element />
            <Text>{name}</Text>
          </SidebarLink>
        ))}
      </SidebarLinks>
      <Button
        variant={window.innerWidth <= Sizes.DESKTOP_LG ? "SM" : "MD"}
        primary
        onClick={showModal}
      >
        Tweet
      </Button>
      <ProfileWrapper>
        <Image src={profilePhoto} alt="profile-logo" />
        <ProfileInfo>
          <ProfileName>{userName}</ProfileName>
          <ProfileUserName>@{email.split("@")[0]}</ProfileUserName>
        </ProfileInfo>
      </ProfileWrapper>
      <Button
        dataCy="logout-btn"
        variant={window.innerWidth <= Sizes.DESKTOP_LG ? "SM" : "MD"}
        primary
        onClick={handleLogout}
      >
        Log Out
      </Button>
      {isOpen && <TweetModal closeModal={closeModal} />}
    </SidebarWrapper>
  )
}
