import { StyledOption, StyledSelect } from "./styled"

interface ISelectProps {
  placeholder: string
  options: string[] | number[]
  width?: string
}

export function Select({ placeholder, options, width }: ISelectProps) {
  return (
    <StyledSelect placeholder={placeholder} $width={width}>
      {options.map((option) => (
        <StyledOption key={option} value={option}>
          {option}
        </StyledOption>
      ))}
    </StyledSelect>
  )
}
