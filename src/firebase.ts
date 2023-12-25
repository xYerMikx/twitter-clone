import { initializeApp } from "firebase/app"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { NavigateFunction } from "react-router-dom"

import { Collections } from "./constants/collections"
import { Routes } from "./constants/routes"
import { AppDispatch } from "./store"
import { IUser, setUser } from "./store/slices/userSlice"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password)
export const signin = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password)
export const logout = () => signOut(auth)

export const db = getFirestore(app)
export const storage = getStorage(app)

const provider = new GoogleAuthProvider()

export const signUpWithGoogle = async (
  navigate: NavigateFunction,
  dispatch: AppDispatch,
  dispatchSuccessfull: () => void,
) => {
  try {
    const result = await signInWithPopup(auth, provider)
    const { user } = result
    const name = user.displayName
    const { uid } = user
    const { email } = user
    const { phoneNumber } = user
    const userData = { name, _id: uid, email, phone: phoneNumber, birthday: "" }
    const userQuery = query(collection(db, Collections.Users), where("_id", "==", uid))
    const querySnapshot = await getDocs(userQuery)
    if (!querySnapshot.empty) {
      const token = await user.getIdToken()
      navigate(Routes.HOME)
      dispatchSuccessfull()
      dispatch(setUser({ ...(userData as IUser), token }))
    } else {
      await addDoc(collection(db, Collections.Users), userData)
      const token = await user.getIdToken()
      navigate(Routes.HOME)
      dispatchSuccessfull()
      dispatch(setUser({ ...(userData as IUser), token }))
    }
  } catch (e) {
    console.error(e)
  }
}
