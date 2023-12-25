import styled from "styled-components"

import { media } from "@/constants/sizes"

export const SignupFormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.spacings.s20};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s15};
  width: 100%;
  max-width: 700px;
  @media ${media.TABLET} {
    max-width: 100%;
  }
`

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.f22};
`

export const Span = styled.span`
  color: ${({ theme }) => theme.blue};
`
export const BirthTitle = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  font-size: ${({ theme }) => theme.fontSize.f18};
`
export const BirthText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f16};
  opacity: ${({ theme }) => theme.opacity};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  @media ${media.TABLET} {
    font-size: ${({ theme }) => theme.fontSize.f12};
  }
`
export const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media ${media.TABLET} {
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacings.s10};
  }
`
export const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
  color: ${({ theme }) => theme.red};
`
