import { initializeApp } from "firebase/app"
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { NavigateFunction } from "react-router-dom"
import { Routes } from "./constants/routes"
import { Collections } from "./constants/collections"

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

export const signUpWithGoogle = (
  navigate: NavigateFunction,
  dispatchSuccessfull: () => void,
) => {
  signInWithPopup(auth, provider)
    .then(({ user }) => {
      const name = user.displayName
      const { uid } = user
      const { email } = user
      const { phoneNumber } = user
      const userData = { name, _id: uid, email, phoneNumber }
      addDoc(collection(db, Collections.Users), userData)
        .then(() => {
          navigate(Routes.HOME)
          dispatchSuccessfull()
        })
        .catch((e) => console.error(e))
    })
    .catch((e) => console.error(e))
}
