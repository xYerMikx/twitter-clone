import styled from "styled-components"

export const SidebarContainer = styled.aside`
  border-left: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.lightGray};
  padding: ${({ theme }) => theme.spacings.s25} 0;
  padding-left: ${({ theme }) => theme.spacings.s20};
  max-width: 400px;
  height: 100vh;
`

export const MightLike = styled.div`
  margin: ${({ theme }) => theme.spacings.s30} 0;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgColor};
  padding: ${({ theme }) => theme.spacings.s30};
  border-radius: ${({ theme }) => theme.borderRadius};
`
export const Text = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  margin-bottom: ${({ theme }) => theme.spacings.s30};
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
  &:hover {
    color: ${({ theme }) => theme.blue};
  }
`
