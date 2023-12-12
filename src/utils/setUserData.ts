import { addDoc, collection } from "firebase/firestore"
import { db, register } from "@/firebase"
import { Collections } from "@/constants/collections"

export const setUserData = async (
  email: string,
  password: string,
  phone: string,
  birthday: string,
  name: string,
) => {
  const userCredentials = await register(email, password)
  const token = await userCredentials.user.getIdToken()
  const userData = {
    email,
    name,
    phone,
    birthday,
    _id: userCredentials.user.uid,
    token,
  }
  await addDoc(collection(db, Collections.Users), userData)
  return { userData }
}
