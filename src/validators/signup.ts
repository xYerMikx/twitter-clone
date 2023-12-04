import { z } from "zod"

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name length should be at least 2 characters")
      .max(20, "Name length must not be more than 20 characters"),
    phone: z
      .string()
      .regex(/^\+375\d{9}$/, "Phone number must be in the format: +375xxxxxxxxx"),
    email: z.string().email(),
    password: z.string().min(6, "Password must be 6 or more characters"),
    month: z.string(),
    day: z.string(),
    year: z.string(),
  })
  .required()

export type TypeSignup = z.infer<typeof signupSchema>
