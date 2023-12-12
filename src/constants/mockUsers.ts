import profile from "@/assets/profile-logo.svg"
import { IUser } from "@/store/slices/userSlice"

export type IUserProfile = Omit<IUser, "token"> & { photoURL: string }

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
