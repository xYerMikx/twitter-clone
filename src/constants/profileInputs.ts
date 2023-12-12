import { TypeProfile } from "@/validators/profile"

interface TypeProfileInput {
  placeholder: string
  type: string
  name: keyof TypeProfile
}

export const profileInputs: TypeProfileInput[] = [
  {
    placeholder: "Change name",
    type: "text",
    name: "name",
  },
  {
    placeholder: "Change email (needs password)",
    type: "text",
    name: "email",
  },
  {
    placeholder: "Current password",
    type: "password",
    name: "password",
  },
  {
    placeholder: "Change birthday",
    type: "text",
    name: "birthday",
  },
  {
    placeholder: "Change phone",
    type: "text",
    name: "phone",
  },
]

export const defaultValues = {
  name: "",
  email: "",
  birthday: "",
  phone: "",
  password: "",
}
