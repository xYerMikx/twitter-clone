import profile from "@/assets/profile-logo.svg"

export interface IUserProfile {
  photoURL: string
  name: string
  userName: string
}
export const mockUsers = [
  {
    photoURL: profile,
    name: "Mushtariy",
    userName: "@Mushtar565266",
  },
  {
    photoURL: profile,
    name: "Shuhratbek",
    userName: "@mrshukhrat",
  },
  {
    photoURL: profile,
    name: "YerMik",
    userName: "@yermik2014",
  },
  {
    photoURL: profile,
    name: "MockUser",
    userName: "@mockUser123",
  },
  {
    photoURL: profile,
    name: "test",
    userName: "@test123_34",
  },
]
