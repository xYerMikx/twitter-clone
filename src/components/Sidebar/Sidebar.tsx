import { useNavigate } from "react-router-dom"
import { sidebarLinks } from "@/constants/sidebarLinks"
import {
  Image,
  ProfileInfo,
  ProfileName,
  ProfileUserName,
  ProfileWrapper,
  SidebarLink,
  SidebarWrapper,
  Text,
} from "./styled"
import { Button } from "@/ui/Button/Button"
import { logout } from "@/firebase"
import { Routes } from "@/constants/routes"
import { useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/slices/userSlice"
import profilePhoto from "@/assets/profile-logo.svg"

export function Sidebar() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    await logout()
    navigate(Routes.AUTH)
  }
  const { email, name } = useAppSelector(selectUserInfo)
  return (
    <SidebarWrapper>
      {sidebarLinks.map(({ path, element: Element }) => (
        <SidebarLink key={path} to={path}>
          <Element />
          <Text>{path}</Text>
        </SidebarLink>
      ))}
      <Button width="230px" primary>
        Tweet
      </Button>
      <ProfileWrapper>
        <Image src={profilePhoto} alt="profile-logo" />
        <ProfileInfo>
          <ProfileName>{name}</ProfileName>
          <ProfileUserName>@{email.split("@")[0]}</ProfileUserName>
        </ProfileInfo>
      </ProfileWrapper>
      <Button width="230px" primary onClick={handleLogout}>
        Log Out
      </Button>
    </SidebarWrapper>
  )
}
