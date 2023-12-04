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

export const SignupForm = styled.form`
  margin-top: ${({ theme }) => theme.spacings.xl};
  display: flex;
  flex-direction: column;
  gap: 25px;
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
  opacity: 0.6;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
`
export const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
