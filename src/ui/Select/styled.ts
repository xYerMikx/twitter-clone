import styled from "styled-components"
import arrowDown from "@/assets/arrow-down.svg"

export const StyledSelect = styled.select<{ $width?: string }>`
  cursor: pointer;
  width: ${({ $width }) => $width || "100%"};
  border: ${({ theme }) => theme.lightGray} solid ${({ theme }) => theme.borderSize};
  padding: 20px;

  font-size: ${({ theme }) => theme.fontSize.f14};

  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  appearance: none;

  background: url(${arrowDown});
  background-repeat: no-repeat;
  background-position: right;
  background-position-x: calc(100% - 8px);
  color: ${({ theme }) => theme.darkColor};
  transition: all 0.2s linear;

  &:focus {
    border-color: ${({ theme }) => theme.darkColor};
  }

  &:hover {
    border-color: ${({ theme }) => theme.darkColor};
  }
`

export const StyledOption = styled.option``
