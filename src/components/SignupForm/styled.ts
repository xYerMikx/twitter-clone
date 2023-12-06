import styled from "styled-components"

export const SignupFormWrapper = styled.form`
  margin-top: ${({ theme }) => theme.spacings.s30};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s25};
  width: 700px;
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
`
export const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Error = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
  color: ${({ theme }) => theme.red};
`
