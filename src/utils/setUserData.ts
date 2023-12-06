import { addDoc, collection } from "firebase/firestore"
import { db, register } from "@/firebase"

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
  await addDoc(collection(db, "users"), userData)
  return { userData }
}
