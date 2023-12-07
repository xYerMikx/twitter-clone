import { Link } from "react-router-dom"
import styled from "styled-components"

export const LoginFormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.spacings.s50};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s25};
  width: 500px;
`

export const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
  color: ${({ theme }) => theme.red};
`
export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.f22};
`
export const SignUpLink = styled(Link)`
  color: ${({ theme }) => theme.blue};
  align-self: flex-end;
`
