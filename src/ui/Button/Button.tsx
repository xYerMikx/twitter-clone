import { ReactNode } from "react"

import { ButtonWidth } from "@/constants/buttonWidth"

import { Icon, StyledButton } from "./styled"

interface IButtonProps {
  icon?: string
  children: string | ReactNode
  variant?: keyof typeof ButtonWidth
  disabled?: boolean
  outlined?: boolean
  primary?: boolean
  onClick?: () => void
  type?: "submit" | "button" | "reset"
  dataCy?: string
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
  dataCy,
}: IButtonProps) {
  return (
    <StyledButton
      data-cy={dataCy}
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
