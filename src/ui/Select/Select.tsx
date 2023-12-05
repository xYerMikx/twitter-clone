import { forwardRef } from "react"
import { StyledOption, StyledSelect } from "./styled"

interface ISelectProps {
  placeholder: string
  options: string[] | number[]
  width?: string
  name: string
}

export const Select = forwardRef<HTMLSelectElement, ISelectProps>(
  ({ placeholder, options, width, ...props }, ref) => (
      <StyledSelect placeholder={placeholder} $width={width} ref={ref} {...props}>
        {options.map((option) => (
          <StyledOption key={option} value={option}>
            {option}
          </StyledOption>
        ))}
      </StyledSelect>
    ),
)
