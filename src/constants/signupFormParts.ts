import { days, months, years } from "./dateConstants"

export const signupInputs = [
  { placeholder: "Name", type: "text" },
  { placeholder: "Phone number", type: "text" },
  { placeholder: "Email", type: "text" },
  {
    placeholder: "Password",
    type: "password",
  },
]
export const signupSelects = [
  { options: months, placeholder: "Month", width: "40%" },
  { options: days, placeholder: "Day", width: "20%" },
  { options: years, placeholder: "Year", width: "20%" },
]
