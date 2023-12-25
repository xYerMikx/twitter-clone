import { zodResolver } from "@hookform/resolvers/zod"
import { Fragment } from "react"
import { useForm } from "react-hook-form"

import { defaultValues, loginInputs } from "@/constants/loginFormParts"
import { Routes } from "@/constants/routes"
import { ILoginFormProps } from "@/pages/Login/Login"
import { Button } from "@/ui/Button/Button"
import { Input } from "@/ui/Input/Input"
import { loginSchema } from "@/validators/login"

import { Error, LoginFormWrapper, SignUpLink, Title } from "./styled"

interface IFormProps {
  onSubmit: (data: ILoginFormProps) => void
  disabled: boolean
}

export function LoginForm({ disabled, onSubmit }: IFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ILoginFormProps>({
    resolver: zodResolver(loginSchema),
    defaultValues,
    mode: "onChange",
  })
  return (
    <LoginFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Log in to Twitter</Title>
      {loginInputs.map(({ placeholder, type, name }) => (
        <Fragment key={placeholder}>
          <Input
            {...register(name)}
            data-cy={name}
            placeholder={placeholder}
            type={type}
            maxLength={name === "identifier" ? 20 : undefined}
          />
          {errors[name] && <Error>{errors[name]?.message}</Error>}
        </Fragment>
      ))}

      <Button
        dataCy="login-btn"
        type="submit"
        disabled={disabled || !isValid || !isDirty}
        primary
      >
        Log In
      </Button>
      <SignUpLink to={Routes.AUTH}>Sign up to Twitter</SignUpLink>
    </LoginFormWrapper>
  )
}
