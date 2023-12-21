import styled from "styled-components"
import { media } from "@/constants/sizes"

export const Image = styled.img`
  width: fit-content;

  @media ${media.DESKTOP_LG} {
    width: 50px;
  }
  @media ${media.TABLET} {
    width: 30px;
  }
`
