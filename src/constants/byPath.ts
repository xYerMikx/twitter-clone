import { SearchedTweet } from "@/components/SearchedTweet/SearchedTweet"
import { User } from "@/components/User/User"

import { ISearchedTweet, IUserProfile, mockTweets, mockUsers } from "./mockData"

export interface IComponentByPath {
  "/": ({ item }: { item: IUserProfile }) => JSX.Element
  "/profile": ({ item }: { item: ISearchedTweet }) => JSX.Element
}

export const componentsByPath: Record<string, IComponentByPath[keyof IComponentByPath]> =
  {
    "/": User,
    "/profile": SearchedTweet,
  }
export const itemsByPath: Record<string, ISearchedTweet[] | IUserProfile[]> = {
  "/": mockUsers,
  "/profile": mockTweets,
}
