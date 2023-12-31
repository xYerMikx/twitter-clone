import styled, { css } from "styled-components"

import { ButtonWidth } from "@/constants/buttonWidth"

const outlinedStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.darkColor};
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};

  &:hover {
    border-color: ${({ theme }) => theme.darkColor};
  }
`

const primaryStyles = css`
  background: ${({ theme }) => theme.blue};
  color: ${({ theme }) => theme.lightColor};
  border: none;

  &:hover {
    filter: brightness(110%);
  }
`

export const StyledButton = styled.button<{
  $variant?: keyof typeof ButtonWidth
  $outlined?: boolean
  $primary?: boolean
}>`
  cursor: pointer;
  transition: all 0.2s linear;
  outline: none;
  background: none;
  width: ${({ $variant }) => ($variant ? ButtonWidth[$variant] : "100%")};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.f18};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.buttonRadius};
  padding: ${({ theme }) => theme.spacings.s15} 0;
  ${({ $primary }) => $primary && primaryStyles}
  ${({ $outlined }) => $outlined && outlinedStyles}

  &:disabled {
    cursor: not-allowed;
    opacity: ${({ theme }) => theme.opacity};
  }
`

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`
