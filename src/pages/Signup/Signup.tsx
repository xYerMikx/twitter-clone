import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment } from "react"
import { addDoc, collection } from "firebase/firestore"
import { Input } from "@/ui/Input/Input"
import {
  BirthText,
  BirthTitle,
  Error,
  SelectsWrapper,
  SignupForm,
  Span,
  Title,
  Wrapper,
} from "./styled"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { Button } from "@/ui/Button/Button"
import { Routes } from "@/constants/routes"
import { Select } from "@/ui/Select/Select"
import { signupInputs, signupSelects } from "@/constants/signupFormParts"
import { signupSchema } from "@/validators/signup"
import { db, register as registerUser } from "@/firebase"
import { formateBirthday } from "@/utils/formateBirthday"

interface ISignUpFormFields {
  name: string
  phone: string
  email: string
  password: string
  month: string
  day: string
  year: string
}

export function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignUpFormFields>({ resolver: zodResolver(signupSchema) })
  const navigate = useNavigate()
  const onSubmit = async (data: ISignUpFormFields) => {
    const parsedData = {
      ...data,
      day: Number(data.day),
      year: Number(data.year),
    }
    const { email, password, name, phone, day, month, year } = parsedData
    const birthday = formateBirthday(year, month, day)

    try {
      const userCredentials = await registerUser(email, password)
      const userData = {
        email,
        name,
        phone,
        birthday,
        _id: userCredentials.user.uid,
      }
      await addDoc(collection(db, "users"), userData)
      navigate(Routes.HOME)
    } catch (e) {
      console.error(e)
    } finally {
      reset()
    }
  }

  return (
    <Wrapper>
      <TwitterLogo />
      <SignupForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Create an account</Title>
        {signupInputs.map(({ placeholder, type, name }) => (
          <Fragment key={placeholder}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors[name] && <Error>{errors[name]?.message}</Error>}
          </Fragment>
        ))}
        <Span>
          <Link to={Routes.AUTH}>Use email</Link>
        </Span>
        <BirthTitle>Date of birth</BirthTitle>
        <BirthText>
          Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis
          bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo
          mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus.
          Nibh mi massa in molestie a sit. Elit congue.
        </BirthText>
        <SelectsWrapper>
          {signupSelects.map(({ placeholder, options, width, name }) => (
            <Fragment key={placeholder}>
              <Select
                {...register(name)}
                placeholder={placeholder}
                options={options}
                width={width}
                name={name}
              />
              {errors[name] && <Error>{errors[name]?.message}</Error>}
            </Fragment>
          ))}
        </SelectsWrapper>
        <Button type="submit" primary>
          Next
        </Button>
      </SignupForm>
    </Wrapper>
  )
}
