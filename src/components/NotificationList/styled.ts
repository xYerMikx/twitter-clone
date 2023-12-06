import styled from "styled-components"

export const ListWrapper = styled.div`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.z4};
  top: ${({ theme }) => theme.spacings.s30};
  right: ${({ theme }) => theme.spacings.s20};
`
