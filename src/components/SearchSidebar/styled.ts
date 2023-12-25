import styled from "styled-components"
import { media } from "@/constants/sizes"

export const SidebarContainer = styled.aside<{ $isOpen: boolean }>`
  border-left: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
  padding: ${({ theme }) => theme.spacings.s25} 0;
  padding-left: ${({ theme }) => theme.spacings.s20};
  max-width: 400px;
  height: inherit;
  background-color: ${({ theme }) => theme.bgColor};

  @media ${media.DESKTOP_LG} {
    max-width: 330px;
    padding-left: ${({ theme }) => theme.spacings.s10};
  }
  @media ${media.DESKTOP} {
    transition: all 0.4s linear;
    position: fixed;
    z-index: ${({ theme }) => theme.zIndex.z2};
    right: ${({ $isOpen, theme }) => ($isOpen ? theme.spacings.s20 : "-335px")};
    box-shadow: -5px 0 3px -3px ${({ theme }) => theme.lightGray};
    height: 100%;
    padding: ${({ theme }) => theme.spacings.s50} 0;
    padding-left: ${({ theme }) => theme.spacings.s20};
  }
  @media ${media.PHONE} {
    max-width: 280px;
    right: ${({ $isOpen, theme }) => ($isOpen ? theme.spacings.s10 : "-305px")};
  }
`

export const MightLike = styled.div`
  margin: ${({ theme }) => theme.spacings.s30} 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgSidebarColor};
  padding: ${({ theme }) => theme.spacings.s30};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.primaryColor};
  @media ${media.DESKTOP_LG} {
    padding: ${({ theme }) => theme.spacings.s20};
  }
`
export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: ${({ theme }) => theme.spacings.s30};
  color: ${({ theme }) => theme.primaryColor};
`

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s15};
  max-height: 400px;
  overflow: auto;
`
export const ShowMoreButton = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
`
export const ShowLessButton = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
`

export const LinksList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  flex-wrap: wrap;
`
export const LinkItem = styled.li`
  font-size: ${({ theme }) => theme.fontSize.f10};
  color: ${({ theme }) => theme.primaryColor};
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`
