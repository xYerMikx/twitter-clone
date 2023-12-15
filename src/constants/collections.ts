export enum Collections {
  Tweets = "tweets",
  Users = "users",
}

export const collectionsWithPaths: Record<string, Collections> = {
  "/": Collections.Users,
  "/profile": Collections.Tweets,
}

export const searchFieldsInCollection: Record<string, string> = {
  "/": "name",
  "/profile": "content",
}
