import styled from "styled-components"

import { InputWidth } from "@/constants/inputWidth"

export const StyledInput = styled.input<{ $variant?: keyof typeof InputWidth }>`
  width: ${({ $variant }) => ($variant ? InputWidth[$variant] : "100%")};
  border: none;
  padding: ${({ theme }) => theme.spacings.s15};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};

  &:hover {
    border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.darkColor};
  }
  &:focus {
    outline: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.darkColor};
  }
`
