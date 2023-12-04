import { StyledInput } from "./styled"

interface IInputProps {
  placeholder: string
  width?: string
  type: string
}

export function Input({ placeholder, width, type }: IInputProps) {
  return <StyledInput $width={width} placeholder={placeholder} type={type} />
}
