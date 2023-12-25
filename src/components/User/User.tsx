import { IUserProfile } from "@/constants/mockData"

import {
  FollowButton,
  Image,
  ProfileInfo,
  ProfileName,
  ProfileUserName,
  ProfileWrapper,
} from "./styled"

export function User({ item }: { item: IUserProfile }) {
  const { email, photoURL, name } = item
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
