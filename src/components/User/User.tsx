import { IUserProfile } from "@/constants/mockUsers"
import {
  FollowButton,
  Image,
  ProfileInfo,
  ProfileName,
  ProfileUserName,
  ProfileWrapper,
} from "./styled"

export function User({ user: { userName, photoURL, name } }: { user: IUserProfile }) {
  return (
    <ProfileWrapper key={userName}>
      <Image src={photoURL} alt="profile-logo" />
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileUserName>{userName}</ProfileUserName>
      </ProfileInfo>
      <FollowButton>Follow</FollowButton>
    </ProfileWrapper>
  )
}
