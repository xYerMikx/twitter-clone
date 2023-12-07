import { Link } from "react-router-dom"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s20};
  width: 250px;
  border-right: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};
  padding: ${({ theme }) => theme.spacings.s25} 0;
  padding-right: ${({ theme }) => theme.spacings.s20};
  height: 100vh;
`

export const SidebarLink = styled(Link)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  align-items: center;
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
`
export const ProfileUserName = styled.div`
  color: ${({ theme }) => theme.gray};
`
export const Image = styled.img``
