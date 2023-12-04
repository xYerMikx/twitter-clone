import styled, { css } from "styled-components"

const outlinedStyles = css`
  background: transparent;
  color: ${({ theme }) => theme.darkColor};
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};

  &:hover {
    border-color: ${({ theme }) => theme.darkColor};
  }
`

export const StyledButton = styled.button<{
  $width?: string
  $outlined?: boolean
  $primary?: boolean
}>`
  cursor: pointer;
  transition: all 0.2s linear;
  outline: none;
  background: none;
  width: ${({ $width }) => $width};
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: ${({ theme }) => theme.fontSize.f20};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacings.md} 0;
  ${({ $primary }) => $primary && outlinedStyles}
  ${({ $outlined }) => $outlined && outlinedStyles}
`

export const Icon = styled.img``
