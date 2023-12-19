import styled from "styled-components"
import { media } from "@/constants/sizes"

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfileInfo = styled.div`
  flex: 0 1 60%;
`
export const ProfileName = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  @media ${media.PHONE} {
    font-size: ${({ theme }) => theme.fontSize.f12};
  }
`
export const ProfileUserName = styled.div`
  color: ${({ theme }) => theme.gray};
  @media ${media.PHONE} {
    font-size: ${({ theme }) => theme.fontSize.f10};
  }
`
export const Image = styled.img`
  margin-right: ${({ theme }) => theme.spacings.s10};
  @media ${media.PHONE} {
    width: 30px;
    height: 30px;
    margin-right: ${({ theme }) => theme.spacings.s5};
  }
`
export const FollowButton = styled.button`
  cursor: pointer;
  background-color: ${({ theme }) => theme.darkColor};
  color: ${({ theme }) => theme.lightColor};
  padding: ${({ theme }) => theme.spacings.s5} ${({ theme }) => theme.spacings.s15};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.15s linear;

  &:hover {
    filter: brightness(80%);
  }
`
