import { ReactNode } from "react"
import { Icon, StyledButton } from "./styled"
import { ButtonWidth } from "@/constants/buttonWidth"

interface IButtonProps {
  icon?: string
  children: string | ReactNode
  variant?: keyof typeof ButtonWidth
  disabled?: boolean
  outlined?: boolean
  primary?: boolean
  onClick?: () => void
  type?: "submit" | "button" | "reset"
}

export function Button({
  variant,
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
      $variant={variant}
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
