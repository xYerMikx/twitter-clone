import styled from "styled-components"

export const TweetItem = styled.div`
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  padding: ${({ theme }) => theme.spacings.s10};
  margin-bottom: ${({ theme }) => theme.spacings.s10};
  border-radius: ${({ theme }) => theme.borderRadius};
`

export const TweetHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSize.f12};
  color: ${({ theme }) => theme.primaryColor};
  display: flex;
  justify-content: space-between;
`

export const TweetContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
  margin-top: ${({ theme }) => theme.spacings.s10};
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.blue};
  }
`
export const StyledSpan = styled.span``
