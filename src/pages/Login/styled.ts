import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacings.xxxl} 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 75%;
`
export const LoginForm = styled.form`
  margin-top: ${({ theme }) => theme.spacings.xl};
  display: flex;
  flex-direction: column;
  gap: 25px;
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
