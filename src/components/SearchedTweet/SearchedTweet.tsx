import { useNavigate } from "react-router-dom"
import { formatDate } from "@/utils/formateDate"
import { StyledSpan, TweetContent, TweetHeader, TweetItem } from "./styled"
import { ISearchedTweet } from "@/constants/mockData"

export function SearchedTweet({ item }: { item: ISearchedTweet }) {
  const { name, email, createdAt, content, id } = item
  const navigate = useNavigate()
  const navigateToTweetPage = (tweetId: string) => () => {
    navigate(`/tweet/${tweetId}`)
  }
  return (
    <TweetItem>
      <TweetHeader>
        <StyledSpan>{name}</StyledSpan>
        <StyledSpan>@{email.split("@")[0]}</StyledSpan>
        <StyledSpan>{createdAt && formatDate(createdAt)}</StyledSpan>
      </TweetHeader>
      <TweetContent onClick={navigateToTweetPage(id)}>{content}</TweetContent>
    </TweetItem>
  )
}
