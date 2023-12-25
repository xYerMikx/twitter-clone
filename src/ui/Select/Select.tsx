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
    <StyledSelect $width={width} ref={ref} {...props}>
      <StyledOption value="" disabled selected>
        {placeholder}
      </StyledOption>
      {options.map((option) => (
        <StyledOption key={option} value={option}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  ),
)
