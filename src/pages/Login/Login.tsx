import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { Wrapper } from "./styled"
import { Routes } from "@/constants/routes"
import { loginSchema } from "@/validators/login"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { isValidEmail, isValidPhone } from "@/utils/validateIdentifier"
import { db, signin } from "@/firebase"
import { useAppDispatch } from "@/hooks/redux"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { LoginForm } from "@/components/LoginForm/LoginForm"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { SUCCESS_LOGIN, USER_NOT_FOUND } from "@/constants/messages"

export interface ILoginFormProps {
  identifier: string
  password: string
}

export function Login() {
  const [disabled, setDisabled] = useState(false)
  const { reset } = useForm<ILoginFormProps>({ resolver: zodResolver(loginSchema) })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = async (data: ILoginFormProps) => {
    try {
      setDisabled(true)
      const { identifier, password } = data
      const phone = isValidPhone(identifier)
      const email = isValidEmail(identifier)
      if (phone || email) {
        const userQuery = query(
          collection(db, "users"),
          phone ? where("phone", "==", identifier) : where("email", "==", identifier),
        )
        const querySnapshot = await getDocs(userQuery)

        if (!querySnapshot.empty) {
          const userEmail = phone ? querySnapshot.docs[0].data().email : identifier
          await signin(userEmail, password)
          dispatchNotification(dispatch, NotificationStatuses.SUCCESS, SUCCESS_LOGIN)
          navigate(Routes.HOME)
        } else {
          dispatchNotification(dispatch, NotificationStatuses.ERROR, USER_NOT_FOUND)
        }
      }
    } catch (e) {
      const error = e as Error
      dispatchNotification(dispatch, NotificationStatuses.ERROR, error.message)
    } finally {
      reset()
      setDisabled(false)
    }
  }
  return (
    <Wrapper>
      <TwitterLogo />
      <LoginForm disabled={disabled} onSubmit={onSubmit} />
    </Wrapper>
  )
}
