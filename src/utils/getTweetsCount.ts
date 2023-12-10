import { db } from "@/firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

export const getTweetCount = async (email: string) => {
  try {
    const tweetQuery = query(collection(db, "tweets"), where("email", "==", email))
    const querySnapshot = await getDocs(tweetQuery)
    return querySnapshot.size
  } catch (error) {
    console.error("Error fetching tweet count:", error)
  }
  return undefined
}
