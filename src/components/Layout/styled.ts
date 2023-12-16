import styled from "styled-components"
import { media } from "@/constants/sizes"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.bgColor};
  padding: 0 ${({ theme }) => theme.spacings.s50};
  display: flex;
  justify-content: space-between;

  @media ${media.DESKTOP} {
    padding: 0 ${({ theme }) => theme.spacings.s30};
  }
`
export const Main = styled.main`
  flex: 1 1 65%;
`
