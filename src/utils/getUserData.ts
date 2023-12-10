import { collection, getDocs, query, where } from "firebase/firestore"
import { db, signin } from "@/firebase"
import { Collections } from "@/constants/collections"

export const getUserDataAndLogin = async (
  phone: boolean,
  identifier: string,
  password: string,
) => {
  const userQuery = query(
    collection(db, Collections.Users),
    phone ? where("phone", "==", identifier) : where("email", "==", identifier),
  )
  const querySnapshot = await getDocs(userQuery)

  if (!querySnapshot.empty) {
    const userData = querySnapshot.docs[0].data()
    const userEmail = phone ? userData.email : identifier
    const userCredentials = await signin(userEmail, password)
    const token = await userCredentials.user.getIdToken()
    return { userData, token }
  }
  return {}
}
