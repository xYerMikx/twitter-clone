import styled from "styled-components"
import arrowDown from "@/assets/arrow-down.svg"

export const StyledSelect = styled.select<{ $width?: string }>`
  cursor: pointer;
  width: ${({ $width }) => $width || "100%"};
  border: ${({ theme }) => theme.lightGray} solid ${({ theme }) => theme.borderSize};
  padding: ${({ theme }) => theme.spacings.s20};

  font-size: ${({ theme }) => theme.fontSize.f14};

  border-radius: ${({ theme }) => theme.borderRadius};
  outline: none;
  appearance: none;

  background: url(${arrowDown});
  background-repeat: ${({ theme }) => theme.background.repeat};
  background-position: ${({ theme }) => theme.background.position};
  background-position-x: ${({ theme }) => theme.background.xPositionOffset};
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
