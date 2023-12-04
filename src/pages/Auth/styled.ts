import { Link } from "react-router-dom"
import styled from "styled-components"

export const Wrapper = styled.div``
export const MainContent = styled.div`
  display: flex;
  gap: 40px;
`
export const TwitterImage = styled.img`
  width: 55%;
`
export const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.f12};
  padding: ${({ theme }) => theme.spacings.xl} 0;
`
export const FooterLink = styled(Link)`
  transition: all 0.1s linear;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`
export const AuthInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacings.xl};
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.f84};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin: 45px 0;
`
export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.f42};
  margin-bottom: 30px;
`
export const GoogleButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.f20};
`
export const EmailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.f20};
`
export const TermsText = styled.p`
  max-width: 70%;
  font-size: ${({ theme }) => theme.fontSize.f14};
  margin-bottom: 20px;
`
export const Text = styled.div`
  display: flex;
  gap: 10px;
  font-size: ${({ theme }) => theme.fontSize.f16};
`
export const Span = styled.span`
  color: ${({ theme }) => theme.blue};
`
export const LoginLink = styled(Link)`
  color: ${({ theme }) => theme.blue};
  &:hover {
    filter: brightness(80%);
  }
`
export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`

export const Paragraph = styled.p``
