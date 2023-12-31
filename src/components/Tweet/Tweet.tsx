import { deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore"
import { getDownloadURL, ref } from "firebase/storage"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import like from "@/assets/like.svg"
import filledLike from "@/assets/like-filled.svg"
import more from "@/assets/more.svg"
import profileImage from "@/assets/profile-logo.svg"
import { Collections } from "@/constants/collections"
import { db, storage } from "@/firebase"
import { formatDate } from "@/utils/formateDate"
import { isLikedByMe } from "@/utils/isLikedByMe"

import {
  CreatedAt,
  DeleteButton,
  Dropdown,
  Image,
  Likes,
  LikesImage,
  LikesWrapper,
  More,
  Name,
  ProfileImage,
  Row,
  TweetBody,
  TweetWrapper,
  UserName,
} from "./styled"

export interface ITweet {
  email: string
  name: string
  createdAt: Timestamp
  likes: number
  image: string
  likingUsers: string[]
  content: string
}

export interface ITweetProps {
  tweet: ITweet
  myEmail: string
  id: string
}

export function Tweet({
  tweet: { email, name, createdAt, likes, image, likingUsers, content },
  id,
  myEmail,
}: ITweetProps) {
  const [isLiked, setIsLiked] = useState(() => isLikedByMe(likingUsers, myEmail))
  const [imageURL, setImageURL] = useState("")
  const [currentLikes, setCurrentLikes] = useState(likes)
  const [isLiking, setIsLiking] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  const params = useParams()
  const isHover = !params.id

  const handleLikeChange = async () => {
    setIsLiking(true)
    const tweetRef = doc(db, Collections.Tweets, id)
    if (isLiked) {
      try {
        await updateDoc(tweetRef, {
          likes: currentLikes - 1,
          likingUsers: likingUsers.filter(
            (likingUserEmail) => likingUserEmail !== myEmail,
          ),
        })
        setCurrentLikes((prevLikes) => prevLikes - 1)
        setIsLiked(false)
      } catch (e) {
        const error = e as Error
        console.error(error)
      }
    } else {
      try {
        await updateDoc(tweetRef, {
          likes: currentLikes + 1,
          likingUsers: [...likingUsers, myEmail],
        })
        setCurrentLikes((prevLikes) => prevLikes + 1)
        setIsLiked(true)
      } catch (e) {
        const error = e as Error
        console.error(error)
      }
    }
    setIsLiking(false)
  }

  const toggleDropdown = () => setShowDropdown(!showDropdown)

  const handleDelete = async () => {
    const tweetRef = doc(db, Collections.Tweets, id)
    try {
      await deleteDoc(tweetRef)
      if (params.id) {
        navigate("/")
      }
    } catch (e) {
      const error = e as Error
      console.error(error)
    }
  }
  useEffect(() => {
    const getImageUrl = async () => {
      if (image) {
        const url = await getDownloadURL(ref(storage, image))
        setImageURL(url)
      }
    }
    getImageUrl()
  }, [image])
  const navigateToTweet = (tweetId: string) => () => {
    navigate(`/tweet/${tweetId}`)
  }
  return (
    <TweetWrapper>
      <ProfileImage src={profileImage} alt="profile-image" />
      <TweetBody $isHover={isHover}>
        <Row>
          <Name>{name}</Name>
          <UserName>@{email.split("@")[0]}</UserName>
          <CreatedAt>{createdAt && formatDate(createdAt)}</CreatedAt>
        </Row>
        <Row onClick={navigateToTweet(id)}>{content}</Row>
        <Row>{image && <Image src={imageURL} alt="tweet-image" />}</Row>
        <Row>
          <LikesWrapper>
            <LikesImage
              src={isLiked ? filledLike : like}
              alt="likes"
              onClick={isLiking ? undefined : handleLikeChange}
            />
            <Likes>{currentLikes}</Likes>
          </LikesWrapper>
        </Row>
      </TweetBody>
      {myEmail === email && (
        <>
          <More src={more} alt="more" onClick={toggleDropdown} />
          {showDropdown && (
            <Dropdown>
              <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            </Dropdown>
          )}
        </>
      )}
    </TweetWrapper>
  )
}
