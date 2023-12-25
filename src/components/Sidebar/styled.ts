import { NavLink } from "react-router-dom"
import styled from "styled-components"

import { media } from "@/constants/sizes"

export const SidebarWrapper = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s20};
  width: 250px;
  border-right: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.bgColor};
  padding: ${({ theme }) => theme.spacings.s25} 0;
  padding-right: ${({ theme }) => theme.spacings.s20};
  height: inherit;
  & > button:last-child {
    margin-bottom: ${({ theme }) => theme.spacings.s50};
  }
  @media ${media.DESKTOP_LG} {
    width: 200px;
  }
  @media ${media.DESKTOP} {
    position: fixed;
    top: 0;
    z-index: ${({ theme }) => theme.zIndex.z3};
    box-shadow: ${({ theme }) => theme.boxShadowRight} ${({ theme }) => theme.lightGray};
    left: ${({ $isOpen, theme }) => ($isOpen ? theme.spacings.s20 : "-205px")};
    height: 100vh;
    gap: ${({ theme }) => theme.spacings.s10};
  }
  @media ${media.PHONE} {
    left: ${({ $isOpen, theme }) => ($isOpen ? theme.spacings.s10 : "-205px")};
  }
  transition: left 0.4s linear;
`

export const SidebarLink = styled(NavLink)`
  &.active {
    color: ${({ theme }) => theme.blue};
    & > svg > g > path {
      color: ${({ theme }) => theme.blue};
      fill: ${({ theme }) => theme.blue};
    }
  }
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  align-items: center;
  color: ${({ theme }) => theme.primaryColor};
  & > svg > g > path {
    fill: ${({ theme }) => theme.primaryColor};
  }
  &:hover {
    & > svg > g > path,
    p {
      color: ${({ theme }) => theme.blue};
      fill: ${({ theme }) => theme.blue};
    }
  }
`
export const SidebarLinks = styled.div`
  margin-top: ${({ theme }) => theme.spacings.s30};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s25};
  @media ${media.TABLET} {
    gap: ${({ theme }) => theme.spacings.s15};
  }
`
export const Text = styled.p``
export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfileInfo = styled.div``
export const ProfileName = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  color: ${({ theme }) => theme.primaryColor};
`
export const ProfileUserName = styled.div`
  color: ${({ theme }) => theme.gray};
`
export const Image = styled.img``
