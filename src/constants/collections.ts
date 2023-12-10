export enum Collections {
  Tweets = "tweets",
  Users = "users",
}

export const collectionsWithPaths: Record<string, Collections> = {
  "/": Collections.Users,
  "/profile": Collections.Tweets,
}
