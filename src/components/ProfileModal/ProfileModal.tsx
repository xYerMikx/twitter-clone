import { Fragment, SyntheticEvent, useEffect } from "react"
import { createPortal } from "react-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { collection, getDocs, query, updateDoc, where } from "firebase/firestore"
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
  verifyBeforeUpdateEmail,
} from "firebase/auth"
import {
  Button,
  ButtonsWrapper,
  Container,
  Error,
  InputsWrapper,
  Modal,
  ProfileForm,
} from "./styled"
import { Input } from "@/ui/Input/Input"
import { defaultValues, profileInputs } from "@/constants/profileInputs"
import { profileSchema } from "@/validators/profile"
import { Button as CustomButton } from "@/ui/Button/Button"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { selectUserInfo } from "@/store/selectors"
import { auth, db, logout } from "@/firebase"
import { userActions } from "@/store/slices/userSlice"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { NotificationStatuses } from "@/constants/notificationStatus"

export interface IProfileModalProps {
  closeModal: () => void
}

interface IProfileFormFields {
  name: string
  phone: string
  email: string
  birthday: string
  password: string
}
export const ProfileModal = ({ closeModal }: IProfileModalProps) => {
  const { _id: id, email } = useAppSelector(selectUserInfo)
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IProfileFormFields>({
    resolver: zodResolver(profileSchema),
    defaultValues,
    mode: "onChange",
  })
  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal()
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeModal])

  const onSubmit = async (data: IProfileFormFields) => {
    try {
      const userQuery = query(collection(db, "users"), where("_id", "==", id))
      const userSnapshot = await getDocs(userQuery)
      const tweetsQuery = query(collection(db, "tweets"), where("email", "==", email))
      const tweetsSnapshot = await getDocs(tweetsQuery)

      if (userSnapshot.empty) {
        console.log("No matching documents.")
        return
      }

      const userDocRef = userSnapshot.docs[0].ref
      const fieldsToUpdateAtUsers: (keyof IProfileFormFields)[] = [
        "name",
        "email",
        "phone",
        "birthday",
        "password",
      ]
      const fieldsToUpdateAtTweets: (keyof IProfileFormFields)[] = ["email", "name"]

      const updatedDataForUsers: Partial<IProfileFormFields> = {}
      const updatedDataForTweets: Partial<IProfileFormFields> = {}

      fieldsToUpdateAtUsers.forEach((field) => {
        if (data[field] && field !== "password") {
          updatedDataForUsers[field] = data[field]
        }
      })
      fieldsToUpdateAtTweets.forEach((field) => {
        if (data[field]) {
          updatedDataForTweets[field] = data[field]
        }
      })
      await tweetsSnapshot.forEach((doc) => {
        updateDoc(doc.ref, { ...doc.data(), ...updatedDataForTweets })
      })

      await updateDoc(userDocRef, updatedDataForUsers)
      const user = auth.currentUser
      auth.currentUser?.reload()
      if (user !== null && updatedDataForUsers.email) {
        if (user.email === null || data.password === undefined) {
          return
        }
        await verifyBeforeUpdateEmail(user, updatedDataForUsers.email)
        const credential = EmailAuthProvider.credential(user.email, data.password)
        await reauthenticateWithCredential(user, credential)
        await logout()
        await updateEmail(user, updatedDataForUsers.email)
      }

      dispatch(userActions.updateUser(updatedDataForUsers))
      dispatchNotification(
        dispatch,
        NotificationStatuses.SUCCESS,
        "Updated user data successfully!",
      )
    } catch (e) {
      const error = e as Error
      dispatchNotification(dispatch, NotificationStatuses.ERROR, error.message)
    } finally {
      reset()
      closeModal()
    }
  }

  return createPortal(
    <Container onClick={handleClose}>
      <Modal>
        <ProfileForm onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            {profileInputs.map(({ name, placeholder, type }) => (
              <Fragment key={placeholder}>
                <Input
                  type={type}
                  width="200px"
                  placeholder={placeholder}
                  {...register(name)}
                />
                {errors[name] && <Error>{errors[name]?.message}</Error>}
              </Fragment>
            ))}
          </InputsWrapper>
          <ButtonsWrapper>
            <CustomButton type="submit" width="150px" primary>
              Update data
            </CustomButton>
          </ButtonsWrapper>
        </ProfileForm>
        <Button onClick={closeModal}>x</Button>
      </Modal>
    </Container>,
    document.body,
  )
}