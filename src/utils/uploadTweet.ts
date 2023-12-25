import { addDoc, collection } from "firebase/firestore"
import { ref, uploadBytes } from "firebase/storage"
import { Dispatch, SetStateAction } from "react"

import { Collections } from "@/constants/collections"
import { db, storage } from "@/firebase"

export type FileType = Blob | Uint8Array | ArrayBuffer | null

export const uploadImage = async (file: FileType, id: string) => {
  const imgId = id + new Date().getMilliseconds()
  const fileName = `images/${imgId}.jpg`
  const fileRef = ref(storage, fileName)

  if (!file) {
    return null
  }

  try {
    await uploadBytes(fileRef, file)
  } catch (e) {
    const error = e as Error
    console.error(error.message)
  }
  return fileName
}

export const uploadTweet = async (
  content: string,
  name: string,
  email: string,
  image: FileType,
  id: string,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
) => {
  setIsLoading(true)
  const fileName = await uploadImage(image, id)
  const tweet = {
    content,
    name,
    email,
    image: fileName,
    likes: 0,
    createdAt: new Date(),
    likingUsers: [],
  }
  try {
    await addDoc(collection(db, Collections.Tweets), tweet)
  } catch (e) {
    const error = e as Error
    console.error(error.message)
  } finally {
    setIsLoading(false)
  }
}
