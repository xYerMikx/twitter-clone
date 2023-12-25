import styled from "styled-components"

import { media } from "@/constants/sizes"

export const SearchContainer = styled.div`
  position: relative;
  width: 360px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: ${({ theme }) => theme.spacings.s5};
  transition: all 0.3s linear;
  @media ${media.DESKTOP_LG} {
    max-width: 320px;
  }
  @media ${media.PHONE} {
    max-width: 250px;
  }
`

export const Label = styled.label`
  width: 100%;
  height: 100%;
`

export const SearchInput = styled.input`
  padding-left: ${({ theme }) => theme.spacings.s15};
  border: none;
  color: ${({ theme }) => theme.inputColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  outline: none;
  font-size: ${({ theme }) => theme.fontSize.f18};
  border-radius: ${({ theme }) => theme.buttonRadius};
  background-color: ${({ theme }) => theme.bgSidebarColor};
`

export const StyledImage = styled.img``

export const IconButton = styled.button`
  position: relative;
  height: 36px;
  width: 36px;
  border: none;
  z-index: ${({ theme }) => theme.zIndex.z2};
  cursor: pointer;
  background: none;

  &:hover {
    color: ${({ theme }) => theme.lightColor};
    &::after {
      opacity: ${({ theme }) => theme.opacityMax};
      transform: scale(1);
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    border-radius: 50%;
    z-index: ${({ theme }) => theme.zIndex.z1};
    background: ${({ theme }) => theme.black};
    transform: scale(0.6);
    opacity: ${({ theme }) => theme.opacityMin};
  }
`
