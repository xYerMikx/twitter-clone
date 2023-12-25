import { z } from "zod"

const emailOrPhone = z
  .string()
  .refine(
    (value) =>
      /^\+375\d{9}$/.test(value) ||
      /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value),
    "Type in your valid email or valid phone number in format of +375xxxxxxxxx",
  )

export const loginSchema = z
  .object({
    identifier: emailOrPhone,
    password: z.string().min(6, "Password must be 6 or more characters"),
  })
  .required()

export type TypeLogin = z.infer<typeof loginSchema>
