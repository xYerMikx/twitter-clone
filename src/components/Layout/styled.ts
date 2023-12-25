import styled from "styled-components"
import { media } from "@/constants/sizes"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: 0 ${({ theme }) => theme.spacings.s50};
  display: flex;
  justify-content: space-between;

  @media ${media.DESKTOP_LG} {
    padding: 0 ${({ theme }) => theme.spacings.s30};
  }
`
export const Main = styled.main`
  flex: 1 1 65%;
  border-left: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  border-right: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  @media ${media.DESKTOP_LG} {
    flex: 1 1 75%;
  }
  @media ${media.DESKTOP} {
    flex: 0 1 90%;
    margin: 0 auto;
  }
  @media ${media.PHONE} {
    flex: 0 1 60%;
    margin: 0 auto;
    max-width: 90%;
  }
`
export const LeftIconWrapper = styled.div<{ $isOpen: boolean }>`
  padding-top: ${({ theme }) => theme.spacings.s30};
  position: absolute;
  transition: all 0.42s linear;
  left: ${({ $isOpen }) => ($isOpen ? "180px" : "2%")};
  display: none;

  @media ${media.DESKTOP} {
    display: block;
  }
  @media ${media.PHONE} {
    left: ${({ $isOpen }) => ($isOpen ? "180px" : "1%")};
  }
`
export const RightIconWrapper = styled.div<{ $isOpen: boolean }>`
  padding-top: ${({ theme }) => theme.spacings.s30};
  position: absolute;
  transition: all 0.43s linear;
  right: ${({ $isOpen }) => ($isOpen ? "315px" : "2%")};
  display: none;

  @media ${media.DESKTOP} {
    display: block;
  }
  @media ${media.PHONE} {
    right: ${({ $isOpen }) => ($isOpen ? "250px" : "1%")};
  }
`
