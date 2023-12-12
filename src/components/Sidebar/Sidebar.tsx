import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { sidebarLinks } from "@/constants/sidebarLinks"
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
import { Button } from "@/ui/Button/Button"
import { logout } from "@/firebase"
import { Routes } from "@/constants/routes"
import { useAppSelector } from "@/hooks/redux"
import profilePhoto from "@/assets/profile-logo.svg"
import { TwitterLogo } from "../TwitterLogo/TwitterLogo"
import { selectUserInfo } from "@/store/selectors"
import { TweetModal } from "../TweetModal/TweetModal"

export function Sidebar() {
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
    <SidebarWrapper>
      <TwitterLogo />
      <SidebarLinks>
        {sidebarLinks.map(({ name, path, element: Element }) => (
          <SidebarLink key={path} to={path}>
            <Element />
            <Text>{name}</Text>
          </SidebarLink>
        ))}
      </SidebarLinks>
      <Button variant="MD" primary onClick={showModal}>
        Tweet
      </Button>
      <ProfileWrapper>
        <Image src={profilePhoto} alt="profile-logo" />
        <ProfileInfo>
          <ProfileName>{userName}</ProfileName>
          <ProfileUserName>@{email.split("@")[0]}</ProfileUserName>
        </ProfileInfo>
      </ProfileWrapper>
      <Button variant="MD" primary onClick={handleLogout}>
        Log Out
      </Button>
      {isOpen && <TweetModal closeModal={closeModal} />}
    </SidebarWrapper>
  )
}
