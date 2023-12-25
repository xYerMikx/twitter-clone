import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"

import { Collections } from "@/constants/collections"
import { db } from "@/firebase"
import { useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"

import { ITweetProps, Tweet } from "../Tweet/Tweet"
import { TweetTextarea } from "../TweetTextarea/TweetTextarea"
import { NoTweets } from "./styled"

export function Feed() {
  const [tweets, setTweets] = useState<Omit<ITweetProps, "myEmail">[]>([])
  const { email } = useAppSelector(selectUserInfo)

  useEffect(() => {
    const tweetsCollection = collection(db, Collections.Tweets)
    const tweetQueue = query(tweetsCollection, orderBy("createdAt", "desc"))

    const unsubscribe = onSnapshot(tweetQueue, (snapshot) => {
      const tweetsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        tweet: doc.data(),
      })) as unknown as Omit<ITweetProps, "myEmail">[]
      setTweets(tweetsList)
    })

    return () => unsubscribe()
  }, [])

  return (
    <div>
      <TweetTextarea />
      {tweets.length > 0 ? (
        tweets.map(({ id, tweet }) => (
          <Tweet myEmail={email} key={id} id={id} tweet={tweet} />
        ))
      ) : (
        <NoTweets>No tweets!</NoTweets>
      )}
    </div>
  )
}
