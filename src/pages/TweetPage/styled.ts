import styled from "styled-components"

export const TweetWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.s30} ${({ theme }) => theme.spacings.s10};
  height: 100vh;
  border-left: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  border-right: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
`
