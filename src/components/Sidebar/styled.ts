import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s20};
  width: 250px;
  border-right: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  padding: ${({ theme }) => theme.spacings.s25} 0;
  padding-right: ${({ theme }) => theme.spacings.s20};
  height: inherit;

  & > button:last-child {
    margin-bottom: ${({ theme }) => theme.spacings.s50};
  }
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
