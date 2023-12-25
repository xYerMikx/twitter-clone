import { Timestamp } from "firebase/firestore"

import profile from "@/assets/profile-logo.svg"
import { IUser } from "@/store/slices/userSlice"

export type IUserProfile = Omit<IUser, "token"> & { photoURL: string }
export interface ISearchedTweet {
  name: string
  email: string
  createdAt: Timestamp
  content: string
  id: string
}

export const mockUsers: IUserProfile[] = [
  {
    photoURL: profile,
    name: "Mushtariy",
    email: "Mushtar565266@yandex.ru",
    _id: "123",
    birthday: "12.12.2002",
    phone: "+375292929239",
  },
  {
    photoURL: profile,
    name: "Shuhratbek",
    email: "mrshukhrat@yandex.ru",
    birthday: "12.12.2002",
    _id: "34",
    phone: "+375292929232",
  },
]

const date = new Date(2023, 8, 12)

export const mockTweets: ISearchedTweet[] = [
  {
    content: "This is some test tweet",
    name: "Mushtariy",
    email: "Mushtar565266@yandex.ru",
    createdAt: Timestamp.fromDate(date),
    id: "123123",
  },
  {
    content: "Best tweet ever yooo",
    name: "Shuhratbek",
    email: "mrshukhrat@yandex.ru",
    createdAt: Timestamp.fromDate(date),
    id: "12312323",
  },
]
