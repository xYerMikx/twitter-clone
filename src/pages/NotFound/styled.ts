import { Link } from "react-router-dom"
import styled from "styled-components"

export const ErrorWrapper = styled.main`
  padding: ${({ theme }) => theme.spacings.s5} ${({ theme }) => theme.spacings.s20};
  margin: 0 auto;
  gap: 2.5rem;
  color: ${({ theme }) => theme.primaryColor};
`

export const StyledTitle = styled.h1``
export const StyledSubtitle = styled.h2``

export const StyledLink = styled(Link)`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.f14};
  margin-top: ${({ theme }) => theme.spacings.s15};
  transition: all 0.2s linear;

  &:hover {
    color: ${({ theme }) => theme.red};
  }
`
