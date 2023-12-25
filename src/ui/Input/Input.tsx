import { forwardRef } from "react"
import { StyledInput } from "./styled"
import { InputWidth } from "@/constants/inputWidth"

interface IInputProps {
  placeholder: string
  variant?: keyof typeof InputWidth
  type: string
  maxLength?: number
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, variant, type, maxLength, ...props }, ref) => (
    <StyledInput
      $variant={variant}
      placeholder={placeholder}
      type={type}
      ref={ref}
      maxLength={maxLength}
      {...props}
    />
  ),
)
