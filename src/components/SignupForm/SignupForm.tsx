import { Fragment } from "react"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  BirthText,
  BirthTitle,
  Error,
  SelectsWrapper,
  SignupFormWrapper,
  Span,
  Title,
} from "./styled"
import { Button } from "@/ui/Button/Button"
import { defaultData, signupInputs, signupSelects } from "@/constants/signupFormParts"
import { Select } from "@/ui/Select/Select"
import { Routes } from "@/constants/routes"
import { Input } from "@/ui/Input/Input"
import { ISignUpFormFields } from "@/pages/Signup/Signup"
import { signupSchema } from "@/validators/signup"

interface ISignupFormProps {
  onSubmit: (data: ISignUpFormFields) => void
  disabled: boolean
}

export function SignupForm({ onSubmit, disabled }: ISignupFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<ISignUpFormFields>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: defaultData,
  })

  return (
    <SignupFormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Create an account</Title>
      {signupInputs.map(({ placeholder, type, name }) => (
        <Fragment key={placeholder}>
          <Input
            {...register(name)}
            placeholder={placeholder}
            type={type}
            maxLength={name === "phone" ? 13 : undefined}
          />
          {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
        </Fragment>
      ))}
      <Span>
        <Link to={Routes.AUTH}>Use email</Link>
      </Span>
      <BirthTitle>Date of birth</BirthTitle>
      <BirthText>
        Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum
        ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel
        eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa
        in molestie a sit. Elit congue.
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
            {errors && errors[name] && <Error>{errors[name]?.message}</Error>}
          </Fragment>
        ))}
      </SelectsWrapper>
      <Button disabled={disabled || !isDirty || !isValid} type="submit" primary>
        Next
      </Button>
    </SignupFormWrapper>
  )
}
