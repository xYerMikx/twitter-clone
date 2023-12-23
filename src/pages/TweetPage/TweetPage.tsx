import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { ITweet, Tweet } from "@/components/Tweet/Tweet"
import { useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"
import { TweetWrapper } from "./styled"

export function TweetPage() {
  const { id } = useParams()
  const { email } = useAppSelector(selectUserInfo)
  const [tweet, setTweet] = useState<ITweet | null>(null)

  useEffect(() => {
    const getTweet = async () => {
      if (!id) {
        return null
      }
      const tweetDoc = doc(db, "tweets", id)
      const tweetSnapshot = await getDoc(tweetDoc)
      if (tweetSnapshot.exists()) {
        setTweet(tweetSnapshot.data() as ITweet)
      } else {
        console.log("No such document!")
      }
    }
    getTweet()
  }, [id])

  return tweet ? (
    <TweetWrapper>
      <Tweet tweet={tweet} id={id!} myEmail={email} />
    </TweetWrapper>
  ) : (
    <>Loading...</>
  )
}
