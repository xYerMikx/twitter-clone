import { useEffect, useState } from "react"
import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useAppSelector } from "@/hooks/redux"
import {
  BgImage,
  BirthDate,
  ProfileContent,
  ProfileInfo,
  ProfileLogo,
  ProfileName,
  ProfileNickName,
  ProfileSpan,
  ProfileStatistics,
  ProfileStatsText,
  TweetCount,
  TweetsTitle,
  UserName,
  Wrapper,
} from "./styled"
import { TweetTextarea } from "@/components/TweetTextarea/TweetTextarea"
import { selectUserInfo } from "@/store/selectors"
import { db } from "@/firebase"
import { ITweetProps, Tweet } from "@/components/Tweet/Tweet"
import profileLogo from "@/assets/profile-logo.svg"
import profileImage from "@/assets/profile-image.png"
import { Button } from "@/ui/Button/Button"
import { ProfileModal } from "@/components/ProfileModal/ProfileModal"
import { Collections } from "@/constants/collections"

export function Profile() {
  const { name, email, birthday } = useAppSelector(selectUserInfo)
  const [tweets, setTweets] = useState<Omit<ITweetProps, "myEmail">[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const filteredTweets = tweets.filter(({ tweet }) => tweet.email === email)

  useEffect(() => {
    setIsLoading(true)
    const tweetsCollection = collection(db, Collections.Tweets)
    const tweetQueue = query(tweetsCollection, orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(tweetQueue, (snapshot) => {
      const tweetsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        tweet: doc.data(),
      })) as unknown as Omit<ITweetProps, "myEmail">[]
      setTweets(tweetsList)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const closeModal = () => setIsOpen(false)
  const showModal = () => setIsOpen(true)

  return (
    <>
      <Wrapper>
        <UserName>{name}</UserName>
        <TweetCount>
          {!isLoading ? `${filteredTweets.length} Tweets` : "Loading tweets count..."}
        </TweetCount>
      </Wrapper>
      <BgImage src={profileImage} alt="profile-bg-image" />
      <ProfileInfo>
        <ProfileLogo src={profileLogo} alt="profile-logo" />
        <Button outlined variant="SM" onClick={showModal}>
          Edit profile
        </Button>
        <ProfileName>{name}</ProfileName>
        <ProfileNickName>@{email.split("@")[0]}</ProfileNickName>
        <ProfileContent>UX&UI designer at @abutechuz</ProfileContent>
        <BirthDate>Birth date: {birthday}</BirthDate>
        <ProfileStatistics>
          <ProfileStatsText>
            <ProfileSpan>67</ProfileSpan> followers
          </ProfileStatsText>
          <ProfileStatsText>
            <ProfileSpan>47</ProfileSpan> following
          </ProfileStatsText>
        </ProfileStatistics>
      </ProfileInfo>
      <Wrapper>
        <TweetTextarea />
        <TweetsTitle>Tweets</TweetsTitle>
        {isLoading && <>Loading tweets...</>}
        {!isLoading && tweets.length > 0 && (
          <>
            {filteredTweets.map(({ id, tweet }) => (
              <Tweet myEmail={email} key={id} id={id} tweet={tweet} />
            ))}
          </>
        )}
        {!isLoading && tweets.length === 0 && <>No tweets!</>}
      </Wrapper>
      {isOpen && <ProfileModal closeModal={closeModal} />}
    </>
  )
}
