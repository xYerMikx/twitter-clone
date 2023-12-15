import { Timestamp } from "firebase/firestore"
import { formatDate } from "@/utils/formateDate"
import { StyledSpan, TweetContent, TweetHeader, TweetItem } from "./styled"

interface ISearchedTweet {
  name: string
  email: string
  createdAt: Timestamp
  content: string
}

export function SearchedTweet({ item }: { item: ISearchedTweet }) {
  const { name, email, createdAt, content } = item
  return (
    <TweetItem>
      <TweetHeader>
        <StyledSpan>{name}</StyledSpan>
        <StyledSpan>@{email.split("@")[0]}</StyledSpan>
        <StyledSpan>{createdAt && formatDate(createdAt)}</StyledSpan>
      </TweetHeader>
      <TweetContent>{content}</TweetContent>
    </TweetItem>
  )
}
