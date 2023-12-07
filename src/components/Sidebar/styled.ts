import { Link } from "react-router-dom"
import styled from "styled-components"

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s20};
  width: 220px;
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
