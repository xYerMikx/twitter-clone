import styled from "styled-components"

export const StyledInput = styled.input<{ $width?: string }>`
  width: ${({ $width }) => $width || "100%"};
  border: none;
  padding: ${({ theme }) => theme.spacings.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};
`
