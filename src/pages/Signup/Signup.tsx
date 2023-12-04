import { Link } from "react-router-dom"
import { Input } from "@/ui/Input/Input"
import {
  BirthText,
  BirthTitle,
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

export function Signup() {
  return (
    <Wrapper>
      <TwitterLogo />
      <SignupForm>
        <Title>Create an account</Title>
        {signupInputs.map(({ placeholder, type }) => (
          <Input key={placeholder} placeholder={placeholder} type={type} />
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
          {signupSelects.map(({ placeholder, options, width }) => (
            <Select
              key={placeholder}
              placeholder={placeholder}
              options={options}
              width={width}
            />
          ))}
        </SelectsWrapper>
        <Button onClick={() => {}} primary>
          Next
        </Button>
      </SignupForm>
    </Wrapper>
  )
}
