import { Link } from "react-router-dom"
import styled from "styled-components"

import { media } from "@/constants/sizes"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media ${media.DESKTOP} {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
export const MainContent = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s40};
  @media ${media.DESKTOP} {
    margin: auto 0;
  }
`
export const TwitterImage = styled.img`
  height: 85vh;
  @media ${media.DESKTOP_LG} {
    object-fit: cover;
  }
  @media ${media.DESKTOP} {
    display: none;
  }
`

export const AuthInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => theme.spacings.s20};
  @media ${media.DESKTOP_LG} {
    padding: ${({ theme }) => theme.spacings.s10};
  }
  @media ${media.DESKTOP} {
    align-items: center;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.f84};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin: ${({ theme }) => theme.spacings.s45} 0;

  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f52};
    margin: ${({ theme }) => theme.spacings.s20} 0;
  }
  @media ${media.DESKTOP} {
    font-size: ${({ theme }) => theme.fontSize.f42};
    margin: ${({ theme }) => theme.spacings.s10} 0;
  }
  @media ${media.PHONE} {
    font-size: ${({ theme }) => theme.fontSize.f30};
  }
`
export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.f42};
  margin-bottom: ${({ theme }) => theme.spacings.s30};
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f35};
    margin-bottom: ${({ theme }) => theme.spacings.s20};
  }
  @media ${media.DESKTOP} {
    font-size: ${({ theme }) => theme.fontSize.f30};
  }
  @media ${media.PHONE} {
    font-size: ${({ theme }) => theme.fontSize.f20};
  }
`
export const GoogleButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.f20};
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f18};
  }
`
export const EmailButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.f20};
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f18};
  }
`
export const TermsText = styled.p`
  max-width: 70%;
  font-size: ${({ theme }) => theme.fontSize.f14};
  margin-bottom: ${({ theme }) => theme.spacings.s20};
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f12};
    margin-bottom: ${({ theme }) => theme.spacings.s10};
  }
`
export const Text = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  font-size: ${({ theme }) => theme.fontSize.f16};
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f14};
  }
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
  gap: ${({ theme }) => theme.spacings.s20};
  margin-bottom: ${({ theme }) => theme.spacings.s20};
`

export const Paragraph = styled.p``

export const FooterLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s15};
  flex-wrap: wrap;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.f12};
  padding: ${({ theme }) => theme.spacings.s30} 0;
  margin-top: auto;
  @media ${media.DESKTOP_LG} {
    font-size: ${({ theme }) => theme.fontSize.f10};
    gap: ${({ theme }) => theme.spacings.s10};
  }
  @media ${media.DESKTOP} {
    gap: ${({ theme }) => theme.spacings.s5};
  }
`
export const FooterLink = styled(Link)`
  transition: all 0.1s linear;
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`
