import { ReactNode } from "react"
import { Icon, StyledButton } from "./styled"

interface IButtonProps {
  icon?: string
  children: string | ReactNode
  width?: string
  disabled?: boolean
  outlined?: boolean
  primary?: boolean
  onClick?: () => void
  type?: "submit" | "button" | "reset"
}

export function Button({
  width,
  icon,
  children,
  disabled,
  outlined,
  primary,
  onClick,
  type,
}: IButtonProps) {
  return (
    <StyledButton
      $width={width}
      $outlined={outlined}
      $primary={primary}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {icon && <Icon src={icon} alt="icon" />}
      {children}
    </StyledButton>
  )
}
