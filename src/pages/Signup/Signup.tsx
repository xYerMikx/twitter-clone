import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Wrapper } from "./styled"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { Routes } from "@/constants/routes"
import { signupSchema } from "@/validators/signup"
import { formateBirthday } from "@/utils/formateBirthday"
import { useAppDispatch } from "@/hooks/redux"
import { userActions } from "@/store/slices/userSlice"
import { NotificationStatuses } from "@/constants/notificationStatus"
import { dispatchNotification } from "@/utils/dispatchNotification"
import { SUCCESS_REGISTER } from "@/constants/messages"
import { SignupForm } from "@/components/SignupForm/SignupForm"
import { setUserData } from "@/utils/setUserData"

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
  const onSubmit = async (data: ISignUpFormFields) => {
    const parsedData = {
      ...data,
      day: Number(data.day),
      year: Number(data.year),
    }
    const { email, password, name, phone, day, month, year } = parsedData
    const birthday = formateBirthday(year, month, day)

    try {
      setDisabled(true)
      const { userData } = await setUserData(email, password, phone, birthday, name)
      dispatch(userActions.setUser({ ...userData }))
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
