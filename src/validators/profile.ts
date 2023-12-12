import { z } from "zod"

const preprocessFunc = (prop: unknown) => {
  if (!prop || typeof prop !== "string") return undefined
  return prop === "" ? undefined : prop
}

const phone = z.preprocess(
  (phoneNum) => preprocessFunc(phoneNum),
  z
    .string()
    .refine(
      (value) => value === null || /^\+375\d{9}$/.test(value),
      "Type in your phone number in format of +375xxxxxxxxx",
    )
    .optional(),
)

const date = z.preprocess(
  (dateProp) => preprocessFunc(dateProp),
  z
    .string()
    .refine(
      (value) => value === null || /^\d{2}\.\d{2}\.\d{4}$/.test(value),
      "Date must be in format of dd.mm.yyyy",
    )
    .optional(),
)

export const profileSchema = z.object({
  name: z.preprocess((nameProp) => preprocessFunc(nameProp), z.string().optional()),
  email: z.preprocess(
    (emailProp) => preprocessFunc(emailProp),
    z.string().email().optional(),
  ),
  phone,
  birthday: date,
  password: z.string(),
})

export type TypeProfile = z.infer<typeof profileSchema>
