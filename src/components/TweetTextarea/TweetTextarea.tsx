import { ChangeEvent, useState } from "react"

import profileImage from "@/assets/profile-logo.svg"
import upload from "@/assets/upload.svg"
import { TWEET_PUBLISHED } from "@/constants/messages"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"
import { Button } from "@/ui/Button/Button"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { FileType, uploadTweet } from "@/utils/uploadTweet"

import {
  AreaColumn,
  FileName,
  Image,
  InputForFile,
  Label,
  Textarea,
  TextareaWrapper,
  UploadImage,
} from "./styled"

interface ITweetTextareaProps {
  closeModal?: () => void
}

export function TweetTextarea({ closeModal }: ITweetTextareaProps) {
  const { name, email, _id: id } = useAppSelector(selectUserInfo)
  const [textValue, setTextValue] = useState("")
  const [image, setImage] = useState<FileType>(null)
  const [fileName, setFileName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(e.target.value)
  }

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      setImage(e.target.files[0])
      setFileName(e.target.files[0].name)
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
    } finally {
      setFileName("")
    }
  }

  return (
    <TextareaWrapper>
      <Image src={profileImage} alt="profile-image" />
      <AreaColumn>
        <Textarea
          data-cy="tweet-textarea"
          name="tweet-area"
          id="tweet-area"
          placeholder="What's happening"
          value={textValue}
          onChange={handleChange}
        />
        <Label $fileName={fileName} htmlFor="upload-photo">
          <UploadImage src={upload} alt="upload" />
          <InputForFile type="file" id="upload-photo" onChange={handlePhotoUpload} />
          {fileName && <FileName>{fileName}</FileName>}
        </Label>
      </AreaColumn>
      <Button
        dataCy="tweet-button"
        variant="SM"
        primary
        disabled={!textValue || isLoading}
        onClick={sendTweet}
      >
        Tweet
      </Button>
    </TextareaWrapper>
  )
}
