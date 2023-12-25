import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { LoginForm } from "@/components/LoginForm/LoginForm"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { SUCCESS_LOGIN, USER_NOT_FOUND } from "@/constants/messages"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { Routes } from "@/constants/routes"
import { useAppDispatch } from "@/hooks/redux"
import { IUser, userActions } from "@/store/slices/userSlice"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { getUserDataAndLogin } from "@/utils/getUserData"
import { isValidEmail, isValidPhone } from "@/utils/validateIdentifier"
import { loginSchema } from "@/validators/login"

import { Wrapper } from "./styled"

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
        const { userData, token } = await getUserDataAndLogin(phone, identifier, password)
        if (token) {
          dispatch(userActions.setUser({ ...(userData as IUser), token }))
          dispatchNotification(dispatch, NotificationStatuses.SUCCESS, SUCCESS_LOGIN)
          navigate(Routes.HOME)
        } else {
          dispatchNotification(dispatch, NotificationStatuses.ERROR, USER_NOT_FOUND)
        }
      } else {
        dispatchNotification(dispatch, NotificationStatuses.ERROR, USER_NOT_FOUND)
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
