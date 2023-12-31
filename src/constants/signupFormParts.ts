import { TypeSignup } from "@/validators/signup"

import { days, months, years } from "./dateConstants"
import { Sizes } from "./sizes"

interface TypeSignupInput {
  placeholder: string
  type: string
  name: keyof Omit<TypeSignup, "month" | "day" | "year">
}

export const signupInputs: TypeSignupInput[] = [
  { placeholder: "Name", type: "text", name: "name" },
  { placeholder: "Phone number", type: "text", name: "phone" },
  { placeholder: "Email", type: "text", name: "email" },
  {
    placeholder: "Password",
    type: "password",
    name: "password",
  },
]
interface TypeSignupSelect {
  options: string[] | number[]
  placeholder: string
  width: string
  name: keyof Omit<TypeSignup, "name" | "phone" | "email" | "password">
}
const isLessThanTablet = window.innerWidth <= Sizes.TABLET
export const signupSelects: TypeSignupSelect[] = [
  {
    options: months,
    placeholder: "Month",
    width: isLessThanTablet ? "60%" : "40%",
    name: "month",
  },
  {
    options: days,
    placeholder: "Day",
    width: isLessThanTablet ? "60%" : "20%",
    name: "day",
  },
  {
    options: years,
    placeholder: "Year",
    width: isLessThanTablet ? "60%" : "20%",
    name: "year",
  },
]

export const defaultData: { [K in keyof TypeSignup]?: string } = {
  day: "1",
  email: "",
  month: "January",
  name: "",
  password: "",
  phone: "",
  year: "1991",
}
