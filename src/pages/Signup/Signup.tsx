import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import { SignupForm } from "@/components/SignupForm/SignupForm"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { SUCCESS_REGISTER } from "@/constants/messages"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { Routes } from "@/constants/routes"
import { useAppDispatch } from "@/hooks/redux"
import { setUser } from "@/store/slices/userSlice"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { formateBirthday } from "@/utils/formateBirthday"
import { setUserData } from "@/utils/setUserData"
import { signupSchema } from "@/validators/signup"

import { Wrapper } from "./styled"

export interface ISignUpFormFields {
  name: string
  phone: string
  email: string
  password: string
  month: string
  day: string
  year: string
}

export function Signup() {
  const { reset } = useForm<ISignUpFormFields>({ resolver: zodResolver(signupSchema) })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [disabled, setDisabled] = useState(false)
  const onSubmit = async ({
    day,
    email,
    month,
    name,
    password,
    phone,
    year,
  }: ISignUpFormFields) => {
    const birthday = formateBirthday(+year, month, +day)

    try {
      setDisabled(true)
      const { userData } = await setUserData(email, password, phone, birthday, name)
      dispatch(setUser({ ...userData }))
      dispatchNotification(dispatch, NotificationStatuses.SUCCESS, SUCCESS_REGISTER)
      navigate(Routes.HOME)
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
      <SignupForm disabled={disabled} onSubmit={onSubmit} />
    </Wrapper>
  )
}
