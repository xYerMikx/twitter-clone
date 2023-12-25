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

  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.z10};
  left: ${({ $isOpen }) => ($isOpen ? "180px" : "2%")};
  display: none;
  animation: ${({ $isOpen }) => ($isOpen ? "openAnimation" : "closeAnimation")} 0.4s
    linear forwards;

  @keyframes openAnimation {
    0% {
      left: 2%;
    }
    15% {
      left: 10px;
    }
    100% {
      left: 175px;
    }
  }

  @keyframes closeAnimation {
    0% {
      left: 180px;
    }
    80% {
      left: 2%;
    }
  }

  @media ${media.DESKTOP} {
    display: block;
  }
  @media ${media.PHONE} {
    left: ${({ $isOpen }) => ($isOpen ? "180px" : "1%")};
  }
`
export const RightIconWrapper = styled.div<{ $isOpen: boolean }>`
  padding-top: ${({ theme }) => theme.spacings.s30};
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.z10};
  right: ${({ $isOpen }) => ($isOpen ? "315px" : "2%")};
  display: none;

  animation: ${({ $isOpen }) => ($isOpen ? "openRightAnimation" : "closeRightAnimation")}
    0.42s linear forwards;

  @keyframes openRightAnimation {
    0% {
      right: 2%;
    }
    10% {
      right: 10px;
    }
    100% {
      right: 315px;
    }
  }

  @keyframes closeRightAnimation {
    0% {
      right: 315px;
    }
    80% {
      right: 2%;
    }
  }

  @media ${media.DESKTOP} {
    display: block;
  }
  @media ${media.PHONE} {
    right: ${({ $isOpen }) => ($isOpen ? "250px" : "1%")};
  }
`
