import { Fragment } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { Error, LoginForm, SignUpLink, Title, Wrapper } from "./styled"
import { Routes } from "@/constants/routes"
import { loginSchema } from "@/validators/login"
import { TwitterLogo } from "@/components/TwitterLogo/TwitterLogo"
import { Input } from "@/ui/Input/Input"
import { Button } from "@/ui/Button/Button"
import { loginInputs } from "@/constants/loginFormParts"
import { isValidEmail, isValidPhone } from "@/utils/validateIdentifier"
import { db , signin } from "@/firebase"

interface ILoginFormProps {
  identifier: string
  password: string
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginFormProps>({ resolver: zodResolver(loginSchema) })
  const navigate = useNavigate()
  const onSubmit = async (data: ILoginFormProps) => {
    try {
      const { identifier, password } = data
      const phone = isValidPhone(identifier)
      const email = isValidEmail(identifier)
      if (phone || email) {
        const q = query(
          collection(db, "users"),
          phone ? where("phone", "==", identifier) : where("email", "==", identifier),
        )
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          const userEmail = phone ? querySnapshot.docs[0].data().email : identifier
          await signin(userEmail, password)
          navigate(Routes.HOME)
        } else {
          console.log("User not found")
        }
      }
    } catch (error) {
      console.error(error)
    } finally {
      reset()
    }
  }
  return (
    <Wrapper>
      <TwitterLogo />
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Title>Log in to Twitter</Title>
        {loginInputs.map(({ placeholder, type, name }) => (
          <Fragment key={placeholder}>
            <Input {...register(name)} placeholder={placeholder} type={type} />
            {errors[name] && <Error>{errors[name]?.message}</Error>}
          </Fragment>
        ))}

        <Button type="submit" primary>
          Log In
        </Button>
        <SignUpLink to={Routes.AUTH}>Sign up to Twitter</SignUpLink>
      </LoginForm>
    </Wrapper>
  )
}
