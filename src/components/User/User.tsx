import { IUserProfile } from "@/constants/mockUsers"
import {
  FollowButton,
  Image,
  ProfileInfo,
  ProfileName,
  ProfileUserName,
  ProfileWrapper,
} from "./styled"

export function User({ user: { email, photoURL, name } }: { user: IUserProfile }) {
  return (
    <ProfileWrapper key={email}>
      <Image src={photoURL} alt="profile-logo" />
      <ProfileInfo>
        <ProfileName>{name}</ProfileName>
        <ProfileUserName>@{email.split("@")[0]}</ProfileUserName>
      </ProfileInfo>
      <FollowButton>Follow</FollowButton>
    </ProfileWrapper>
  )
}
