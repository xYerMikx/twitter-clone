import { useNavigate } from "react-router-dom"
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
import { selectUserInfo } from "@/store/slices/userSlice"
import profilePhoto from "@/assets/profile-logo.svg"
import { TwitterLogo } from "../TwitterLogo/TwitterLogo"

export function Sidebar() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout()
    navigate(Routes.AUTH)
  }
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
      <Button width="230px" primary>
        Tweet
      </Button>
      <ProfileWrapper>
        <Image src={profilePhoto} alt="profile-logo" />
        <ProfileInfo>
          <ProfileName>{userName}</ProfileName>
          <ProfileUserName>@{email.split("@")[0]}</ProfileUserName>
        </ProfileInfo>
      </ProfileWrapper>
      <Button width="230px" primary onClick={handleLogout}>
        Log Out
      </Button>
    </SidebarWrapper>
  )
}