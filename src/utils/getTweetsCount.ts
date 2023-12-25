import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase"
import { Collections } from "@/constants/collections"

export const getTweetCount = async (email: string) => {
  try {
    const tweetQuery = query(
      collection(db, Collections.Tweets),
      where("email", "==", email),
    )
    const querySnapshot = await getDocs(tweetQuery)
    return querySnapshot.size
  } catch (error) {
    console.error("Error fetching tweet count:", error)
  }
  return undefined
}
