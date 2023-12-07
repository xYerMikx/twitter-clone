import { TypeLogin } from "@/validators/login"

interface TypeLoginInput {
  placeholder: string
  type: string
  name: keyof TypeLogin
}

export const loginInputs: TypeLoginInput[] = [
  { placeholder: "Phone number, email address", type: "text", name: "identifier" },
  {
    placeholder: "Password",
    type: "password",
    name: "password",
  },
]

export const defaultValues = {
  identifier: "",
  password: "",
}
