import styled, { css } from "styled-components"

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

  font-size: ${({ theme }) => theme.fontSize.f18};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  border-radius: ${({ theme }) => theme.buttonRadius};
  padding: ${({ theme }) => theme.spacings.md} 0;
  ${({ $primary }) => $primary && primaryStyles}
  ${({ $outlined }) => $outlined && outlinedStyles}
`

export const Icon = styled.img``
