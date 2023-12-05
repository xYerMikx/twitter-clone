import { forwardRef } from "react"
import { StyledInput } from "./styled"

interface IInputProps {
  placeholder: string
  width?: string
  type: string
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, width, type, ...props }, ref) => (
      <StyledInput
        $width={width}
        placeholder={placeholder}
        type={type}
        ref={ref}
        {...props}
      />
    ),
)
