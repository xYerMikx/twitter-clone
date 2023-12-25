import { DocumentData, getDocs,Query } from "firebase/firestore"

import { ISearchedTweet, IUserProfile } from "@/constants/mockData"

export const fetchItems = async (
  dataQuery: Query<DocumentData>,
  isProfile: boolean,
  profile?: string,
  limit?: number,
): Promise<ISearchedTweet[] | IUserProfile[]> => {
  try {
    const querySnapshot = await getDocs(dataQuery)
    let newItems: ISearchedTweet[] | IUserProfile[] = []

    if (isProfile) {
      newItems = querySnapshot.docs.map((doc) => {
        const data = doc.data() as IUserProfile
        return { ...data, photoURL: profile } as IUserProfile
      })
    } else {
      newItems = querySnapshot.docs.map((doc) => {
        const { email, name, createdAt, content } = doc.data()
        const { id } = doc
        return { email, name, createdAt, content, id } as ISearchedTweet
      })
    }

    if (limit) {
      newItems = newItems.slice(0, limit)
    }

    return newItems
  } catch (error) {
    console.error("Error fetching data: ", error)
    return []
  }
}
