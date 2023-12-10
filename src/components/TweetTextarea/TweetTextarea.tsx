import { ChangeEvent, useState } from "react"
import profileImage from "@/assets/profile-logo.svg"
import upload from "@/assets/upload.svg"
import {
  AreaColumn,
  Image,
  InputForFile,
  Label,
  Textarea,
  TextareaWrapper,
  UploadImage,
} from "./styled"
import { Button } from "@/ui/Button/Button"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { uploadTweet } from "@/utils/uploadTweet"
import { TWEET_PUBLISHED } from "@/constants/messages"

interface ITweetTextareaProps {
  closeModal?: () => void
}

export function TweetTextarea({ closeModal }: ITweetTextareaProps) {
  const { name, email, _id: id } = useAppSelector(selectUserInfo)
  const [textValue, setTextValue] = useState("")
  const [image, setImage] = useState<Blob | Uint8Array | ArrayBuffer | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
    console.log(name, email)
  }

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
    }
  }

  const sendTweet = async () => {
    try {
      await uploadTweet(textValue, name, email, image, id, setIsLoading)
      dispatchNotification(dispatch, NotificationStatuses.SUCCESS, TWEET_PUBLISHED)
      setTextValue("")
      if (closeModal) {
        closeModal()
      }
    } catch (e) {
      const error = e as Error
      dispatchNotification(dispatch, NotificationStatuses.ERROR, error.message)
      setTextValue("")
      if (closeModal) {
        closeModal()
      }
    }
  }

  return (
    <TextareaWrapper>
      <Image src={profileImage} alt="profile-image" />
      <AreaColumn>
        <Textarea
          name="tweet-area"
          id="tweet-area"
          placeholder="What's happening"
          value={textValue}
          onChange={handleChange}
        />
        <Label htmlFor="upload-photo">
          <UploadImage src={upload} alt="upload" />
          <InputForFile type="file" id="upload-photo" onChange={handlePhotoUpload} />
        </Label>
      </AreaColumn>
      <Button
        width="170px"
        primary
        disabled={!textValue || isLoading}
        onClick={sendTweet}
      >
        Tweet
      </Button>
    </TextareaWrapper>
  )
}
