import styled from "styled-components"

export const Wrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.s30} ${({ theme }) => theme.spacings.s10};
`

export const UserName = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  color: ${({ theme }) => theme.primaryColor};
`
export const TweetCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.f14};
`

export const ProfileInfo = styled.div`
  padding: 0 ${({ theme }) => theme.spacings.s10};
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: ${({ theme }) => theme.spacings.s20};

  & > button {
    align-self: flex-end;
  }
`
export const ProfileBgImage = styled.img`
  z-index: ${({ theme }) => theme.zIndex.z1};
`
export const ProfileLogo = styled.img`
  z-index: ${({ theme }) => theme.zIndex.z2};
  position: absolute;
  width: 100px;
  height: 100px;
  top: -70px;
`
export const ProfileName = styled.h2`
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  color: ${({ theme }) => theme.primaryColor};
  font-size: ${({ theme }) => theme.fontSize.f22};
`
export const BgImage = styled.img``
export const ProfileNickName = styled.p`
  margin-top: ${({ theme }) => theme.spacings.s5};
  color: ${({ theme }) => theme.primaryColor};
  opacity: ${({ theme }) => theme.opacity};
  font-size: ${({ theme }) => theme.fontSize.f12};
`

export const ProfileContent = styled.div`
  margin-top: ${({ theme }) => theme.spacings.s15};
`

export const ProfileStatistics = styled.div`
  margin-top: ${({ theme }) => theme.spacings.s30};
  display: flex;
  gap: ${({ theme }) => theme.spacings.s20};
`
export const ProfileSpan = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
export const ProfileStatsText = styled.p``

export const TweetsTitle = styled.h4`
  width: 120px;
  font-family: ${({ theme }) => theme.fontFamily.robotoSerif};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.f22};
  padding-bottom: ${({ theme }) => theme.spacings.s20};
  margin: ${({ theme }) => theme.spacings.s20} 0;
  border-bottom: ${({ theme }) => theme.borderSize} solid
    ${({ theme }) => theme.borderColor};
`
