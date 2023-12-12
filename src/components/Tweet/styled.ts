import styled from "styled-components"

export const TweetWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  margin-top: ${({ theme }) => theme.spacings.s30};
  padding-top: ${({ theme }) => theme.spacings.s15};
  border-top: ${({ theme }) => theme.borderSize} solid ${({ theme }) => theme.borderColor};
  position: relative;
`

export const TweetBody = styled.div`
  display: flex;
  flex: 1 0 70%;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.s30};
`
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
`
export const More = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  position: relative;
`
export const Name = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-size: ${({ theme }) => theme.fontSize.f20};
  color: ${({ theme }) => theme.primaryColor};
`
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacings.s10};
  max-width: 360px;
  color: ${({ theme }) => theme.primaryColor};
`

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
  color: ${({ theme }) => theme.gray};
`
export const CreatedAt = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f12};
`
export const LikesWrapper = styled.p`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s10};
  align-items: center;
`
export const LikesImage = styled.img`
  cursor: pointer;
`
export const Likes = styled.span``
export const Image = styled.img`
  width: 100%;
  height: 200px;
  border-radius: ${({ theme }) => theme.borderRadius};
`
export const Dropdown = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.bgSidebarColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 90px;
  padding: ${({ theme }) => theme.spacings.s10} ${({ theme }) => theme.spacings.s15};
  z-index: ${({ theme }) => theme.zIndex.z1};
  text-align: center;
  right: ${({ theme }) => theme.spacings.s5};
  top: ${({ theme }) => theme.spacings.s40};
`

export const DeleteButton = styled.button`
  background-color: ${({ theme }) => theme.red};
  border: none;
  color: ${({ theme }) => theme.lightColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => theme.spacings.s5};
  font-size: 16px;
  cursor: pointer;
`
