import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.s30} ${({ theme }) => theme.spacings.s10};
`

export const UserName = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  color: ${({ theme }) => theme.primaryColor};
`
export const TweetCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
`
