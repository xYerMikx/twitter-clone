import { formatDate } from "@/utils/formateDate"
import { StyledSpan, TweetContent, TweetHeader, TweetItem } from "./styled"
import { ISearchedTweet } from "@/constants/mockData"

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
