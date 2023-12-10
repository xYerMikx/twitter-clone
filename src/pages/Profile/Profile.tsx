import { useAppSelector } from "@/hooks/redux"
import { TweetCount, UserName, Wrapper } from "./styled"
import { selectUserInfo } from "@/store/slices/userSlice"
import { useEffect, useState } from "react"
import { getTweetCount } from "@/utils/getTweetsCount"

export const Profile = () => {
  const { name, email } = useAppSelector(selectUserInfo)
  const [tweetsCount, setTweetsCount] = useState<number | undefined>(undefined)
  useEffect(() => {
    const fetchTweetCount = async () => {
      try {
        const count = await getTweetCount(email)
        setTweetsCount(count)
      } catch (error) {
        console.error("Error fetching tweet count:", error)
      }
    }

    fetchTweetCount()
  }, [email])
  return (
    <Wrapper>
      <UserName>{name}</UserName>
      <TweetCount>
        {tweetsCount ? `${tweetsCount} Tweets` : "Loading tweets count..."}
      </TweetCount>
    </Wrapper>
  )
}
