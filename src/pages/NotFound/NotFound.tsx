import { Routes } from "@/constants/routes"

import { ErrorWrapper, StyledLink, StyledSubtitle, StyledTitle } from "./styled"

export function NotFound() {
  return (
    <ErrorWrapper>
      <StyledTitle>Something went wrong...</StyledTitle>
      <StyledSubtitle>This page does not exist</StyledSubtitle>
      <StyledLink to={Routes.HOME}>Go back to home page</StyledLink>
    </ErrorWrapper>
  )
}
